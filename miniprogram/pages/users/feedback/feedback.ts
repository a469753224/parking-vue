Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		content: ''
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (_options) {

	},

	/**
	 * 提交意见反馈
	 */
	subComments(){
		let {content} = this.data
		let title = content ? '提交成功，请等待反馈！' : '请填写内容'
		wx.showToast({
			title,
			icon: 'none'
		})
		this.setData({
			content: ''
		})
	}
	
})