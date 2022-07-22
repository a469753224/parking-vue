/* 导入模块 */
import HomeServer from '../../../api/api/home/server'

/* 实例化模块 */
const server = new HomeServer()

/* 导入工具类 */
import { isEmpty, getSetDataCurrent } from '../../../utils/util'

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		page: 1,
		bill: {},
		order: [],
		show: false,
		shows: false,
		underway: {},
		currentId: '',
		loadEnd: true,
		underwayFlag: false,
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (_options) {
		this.orderQuery()
		this.userQueryOrder()
	},

	/**
	 * 获取正在进行中的订单
	 */
	async orderQuery() {
		const result = await server.orderQuery()
		if (result.code == 0) {
			let underway = result.data
			let underwayFlag = !isEmpty(underway) ? true : false
			this.setData({
				underway,
				underwayFlag
			})
		}
	},

	/**
	 * 获取历史订单
	 */
	async userQueryOrder() {
		let { page } = this.data
		let result = await server.userQueryOrder({ page })
		if (result.code == 0) {
			let { order } = this.data
			let { data } = result
			if (!isEmpty(data)) {
				order = order.concat(data)
			} else {
				this.setData({
					loadEnd: false
				})
			}
			this.setData({
				order
			})
		}
	},

	/**
	 * 跳转订单页面 
	 * @param {Object} e 
	 */
	toOrder(e: any) {
		let row = getSetDataCurrent(e, 'row')
		let { orderId, isCredit } = row
		if (isCredit) {
			this.authorOrder(orderId)
		} else {
			wx.navigateTo({
				url: `/pages/homes/order/order?orderId=${orderId}`,
			})
		}
	},

	/**
	 * 查看账单详情
	 * @param e 节点对象
	 */
	async orderDetail(e: any) {
		let row = getSetDataCurrent(e, 'row')
		let orders = wx.getStorageSync('orders')
		let { orderId, isCredit } = row
		if (isCredit) {
			this.authorOrder(orderId)
		} else {
			if (!orders) {
				this._bill(orderId)
			} else {
				let isHas = orders.some((element: { orderId: number }) => {
					return element.orderId === row.orderId
				})
				if (isHas) {
					let bill = {}
					orders.forEach((element: { orderId?: number }) => {
						if (element.orderId === row.orderId) {
							bill = element
						}
					})
					this.setData({ bill })
					if (!isEmpty(bill)) {
						wx.navigateTo({
							url: `/pages/users/orderDetail/orderDetail?bill=${JSON.stringify(bill)}`,
						})
					}
				} else {
					this._bill(orderId)
				}
			}
		}
	},

	/**
   * 微信支付分订单
   */
	async authorOrder(orderId: string) {
		const orders = await server.getWechatOrderDetail({ orderId })
		if (orders.code == 0) {
			const {
				mch_id,
				service_id,
				out_order_no,
				nonce_str,
				timestamp,
				sign_type,
				sign
			} = orders.data

			wx.navigateToMiniProgram({
				appId: 'wxd8f3793ea3b935b8',
				path: 'pages/record/detail',
				extraData: {
					mch_id,
					service_id,
					out_order_no,
					timestamp,
					nonce_str,
					sign_type,
					sign
				}
			});

		} else {
			wx.showToast({
				title: orders.msg,
				icon: 'none'
			})
		}
	},

	/**
	 * 获取账单信息
	 * @param orderId 账单id
	 */
	async _bill(orderId: string) {
		const param = {
			orderId
		}
		const result = await server.orderBill(param)
		if (result.code == 0) {
			if (result.data != null) {
				let bill = result.data
				let orders = wx.getStorageSync('orders')
				if (!orders) {
					wx.setStorageSync('orders', [])
					orders = []
				}
				orders.push(bill)
				this.setData({ bill })
				wx.setStorageSync('orders', orders)
				if (!isEmpty(bill)) {
					wx.navigateTo({
						url: `/pages/users/orderDetail/orderDetail?bill=${JSON.stringify(bill)}`,
					})
				}
			}
		}

	},

	/**
	 * 跳转支付页面
	 * @param {Object} e 
	 */
	pay(e: any) {
		let row = getSetDataCurrent(e, 'row')
		if (row.state == 3) {
			let { orderId } = row
			wx.navigateTo({
				url: `/pages/homes/pay/pay?orderId=${orderId}`,
			})
		}
	},

	/**
	 * 拉起删除提示对话框
	 * @param {Object} e 
	 */
	deleteOrder(e: any) {
		let currentId = getSetDataCurrent(e, 'id')
		this.setData({
			currentId,
			show: true
		})
	},

	/**
	 * 确认删除订单
	 */
	async confirm() {
		const { currentId } = this.data
		let param = { orderId: currentId }
		const result = await server.orderDelete(param)
		let title = result.msg
		this.setData({
			show: false
		})
		wx.showToast({
			title,
			icon: 'none'
		})
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
		let { loadEnd } = this.data
		if (loadEnd) {
			wx.showLoading({
				title: '加载中...',
			})
			setTimeout(() => {
				wx.hideLoading()
				let { page } = this.data
				page++
				this.setData({
					page
				})
				this.userQueryOrder()
			}, 500)
		}
	}
})