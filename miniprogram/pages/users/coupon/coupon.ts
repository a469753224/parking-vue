/* 导入模块 */
import CouponServer from '../../../api/api/coupon/server'

/* 实例化模块 */
const server = new CouponServer()

/* 导入接口 */
import { isEmpty } from '../../../utils/util'

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		list: [],
		coupons: []
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (_options) {
		const coupons = wx.getStorageSync('coupons')
		if (!coupons) {
			wx.setStorageSync('coupons', [])
		}
	},

	/**
	 * 优惠券列表
	 */
	async listUserCoupon() {
		const result = await server.listUserCoupon()
		if (result.code == 0) {
			let { data } = result
			data = data.filter((element: { state: number }) => {
				if (element.state == 1) {
					return true
				}
				return false
			})
			this.setData({
				coupons: data,
				list: result.data
			})
		}
	},

	/**
	 * tabbar切换
	 * @param e 事件对象
	 */
	onChange(e: { detail: { index: number } }) {
		let index = e.detail.index + 1
		let { list } = <any>this.data
		list = list.filter((element: { state: number }) => {
			if (element.state == index) {
				return true
			}
			return false
		})
		this.setData({ coupons: list })
	},

	/**
	 * 使用优惠券
	 * @param e 事件对象
	 */
	async useCouppon(e: { currentTarget: { dataset: { id: any } } }) {
		let isHas = false
		const { id } = e.currentTarget.dataset
		const coupons = wx.getStorageSync('coupons')
		if (!isEmpty(coupons)) {
			isHas = coupons.some((coupon: { couponId: any }) => {
				return coupon.couponId == id
			})
		}
		let coupon = {}
		if (!isHas) {
			const param = {
				couponId: id
			}
			const result = await server.getCouponUserById(param)
			if (result.code == 0) {
				let { data } = result
				coupon = data
				coupons.push(data)
				wx.setStorageSync('coupons', coupons)
			}
		} else {
			let data = coupons.filter((coup: { couponId: any }) => {
				if (coup.couponId == id) {
					return true
				}
				return false
			})
			coupon = data[0]
		}
		wx.navigateTo({
			url: `/pages/users/useCoupon/useCoupon?coupon=${JSON.stringify(coupon)}`,
		})
	},

	onShow() {
		this.listUserCoupon()
	}
})