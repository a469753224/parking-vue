Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		status: 1,
		show: false,
		showContact: false
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (_options) { },

	/**
	 * 撤销申请
	 */
	revoke() {
		this.setData({
			show: true
		})
	},

	/**
	 * 联系客服
	 */
	contact() {
		this.setData({
			showContact: true
		})
	},

	/**
	 * 撤销申请
	 */
	confirm() {
		this.setData({
			show: false
		})
	},
})