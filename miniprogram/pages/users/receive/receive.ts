/* 导入模块 */
import CouponServer from '../../../api/api/coupon/server'

/* 实例化模块 */
const server = new CouponServer()

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		coupons: []
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (_options) {
		this.leadCoupon()
	},

	/**
	 * 查询商家优惠劵待领取
	 */
	async leadCoupon() {
		const result = await server.leadCoupon()
		if (result.code == 0) {
			let { data } = result
			this.setData({
				coupons: data
			})
		}
	},

	/**
	 * 领取优惠劵
	 * @param e 事件对象
	 */
	async receiveCoupon(e: { currentTarget: { dataset: { id: string } } }) {
		let couponId = e.currentTarget.dataset.id
		const param = { couponId }
		const result = await server.receiveCoupon(param)
		const title = result.code == 0 ? '领取成功' : result.msg
		if (result.code == 0) {
			wx.setStorageSync('coupon', false)
		}
		wx.showToast({
			title,
			icon: 'none'
		})
		setTimeout(() => {
			this.leadCoupon()
		}, 500);
	}

})