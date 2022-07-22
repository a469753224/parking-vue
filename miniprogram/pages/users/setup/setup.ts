/* 导入模块 */
import SigupServer from '../../../api/api/sigup/server'

/* 实例化模块 */
const server = new SigupServer()

Page({

	/**
	 * 页面的初始数据
	 */
	data: {},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (_options) {},
	 /**
	  * 退出登录
	  */
	async logout() {
		const result = await server.loginout()
		const title = result.code == 401 ? '您尚未登录' : '退出登录'
		if (result.code == 0) {
			wx.showToast({
				title,
			})
			wx.clearStorage()
			setTimeout(() => {
				wx.reLaunch({
					url: '/pages/user/user',
				})
			}, 500);
		}else{
			wx.showToast({
				title,
				icon: 'none'
			})
		}
	},

	/**
	 * 清除本地缓存
	 */
	removeStorage() {
		wx.clearStorage({
			success: (_res) => {
				wx.showToast({
					title: '清除成功',
				})
				setTimeout(() => {
					wx.reLaunch({
						url: '/pages/user/user',
					})
				}, 800)
			},
		})
	},

	/**
	 * 跳转账号与安全
	 */
	accsecurity() {
		wx.navigateTo({
			url: '/pages/users/accsecurity/accsecurity',
		})
	},

	/**
	 * 跳转关于我们
	 */
	aboutus() {
		wx.navigateTo({
			url: '/pages/users/aboutus/aboutus',
		})
	},

	/**
	 * 跳转意见反馈
	 */
	feekback() {
		wx.navigateTo({
			url: '/pages/users/feedback/feedback',
		})
	},

	/**
	 * 跳转授权管理
	 */
	authorTools(){
		wx.navigateTo({
			url: '/pages/users/authorTools/authorTools'
		})
	}
})