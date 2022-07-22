/* 导入模块 */
import CouponServer from '../../../api/api/coupon/server'

/* 实例化模块 */
const server = new CouponServer()

/* 导入接口 */
// import { GetCouponUserByIdResponseData } from '../../../api/interface/responseInterface/coupon'

/* 导入工具类 */
import { isEmpty } from '../../../utils/util'

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		couponId: '',
		coupon: {},
		show: false
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		if (!isEmpty(options)) {
			let { coupon } = <any>options
			const coup = JSON.parse(coupon)
			this.setData({
				coupon: coup,
				couponId: coup.id
			})
		}
	},

	/**
	 * 使用优惠券
	 */
	useCoupon() {
		this.setData({
			show: true
		})
	},

	/**
	 * 确认使用优惠券
	 */
	async confirm() {
		const {
			id
		} = <any>this.data.coupon
		const param = {
			id
		}
		const result = await server.useCoupon(param)
		const title = result.code == 0 ? '使用成功' : result.msg
		let {
			couponId
		} = this.data
		if (result.code == 0) {
			let coupons = wx.getStorageSync('coupons')
			let { coupon } = <any>this.data
			coupons.forEach((coup: { couponId: string; state: number }) => {
				if (coup.couponId == couponId) {
					coup.state = 0
				}
			})
			coupon.state = 0
			this.setData({ coupon })
			wx.setStorageSync('coupons', coupons)
		}
		wx.showToast({
			title,
			icon: 'none'
		})
	}
})