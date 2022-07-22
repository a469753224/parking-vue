Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		show: false,
		token: '',
		user: {}
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (_options) {

	},

	/**
	 * 设置登录密码
	 */
	setPassword() {
		this.setData({
			show: true,
			content: '登录密码设置请移步“榴车位APP”内操作，目前小程序不提供该服务，感谢您的理解！'
		})
		return
	},

	/**
	 * 设置支付密码
	 */
	setPayPass() {
		this.setData({
			show: true,
			content: '支付密码设置请移步“榴车位APP”内操作，目前小程序不提供该服务，感谢您的理解！'
		})
		return
		wx.navigateTo({
			url: '/pages/users/setpassword/setpassword',
		})
	},

	/**
	 * 绑定手机
	 */
	bindPhone() {
		let {phone} = <any>this.data.user
		if (!phone) {
			wx.reLaunch({
				url: '/pages/sigup/register/register',
			})
		}
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
		this.setData({
			token: wx.getStorageSync('token'),
			user: wx.getStorageSync('userInfo')
		})
	}
})