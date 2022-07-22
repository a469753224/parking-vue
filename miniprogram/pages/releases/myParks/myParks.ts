/* 导入模块 */
import CarServer from '../../../api/api/car/server'

/* 实例化模块 */
const server = new CarServer()

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		parks: []
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (_options) { },

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {
		this.myParking()
	},

	/**
	 * 我的车位
	 */
	async myParking() {
		const result = await server.myParking()
		if (result.code == 0) {
			this.setData({
				parks: result.data
			})
		}
	},

	/**
	 * 跳转申请车位
	 */
	addApply() {
		wx.navigateTo({
			url: '/pages/releases/apply/apply',
		})
	},

	/**
	 * 设置开放时间
	 * @param e 事件对象
	 */
	setOpenTime(e: { currentTarget: { dataset: { row: any } } }) {
		let { row } = e.currentTarget.dataset
		wx.navigateTo({
			url: `/pages/releases/settime/settime?row=${JSON.stringify(row)}`,
		})
	},

	/**
	 * 解锁
	 * @param e 事件对象
	 */
	unlock(e: { currentTarget: { dataset: { id: number } } }) {
		let { id } = e.currentTarget.dataset
		wx.navigateTo({
			url: `/pages/releases/unlock/unlock?lockerId=${id}`,
		})
	},

	/**
	 * 是否开放车位
	 * @param e 事件对象
	 */
	async isOpen(e: { currentTarget: { dataset: { placeid: string } }; detail: any }) {
		const { placeid } = e.currentTarget.dataset
		const openState = e.detail ? 0 : 1
		const param = {
			openState,
			placeId: placeid
		}
		const result = await server.modifyOpenState(param)
		if (result.code == 0) {
			this.myParking()
		}
	},

	/**
	 * 我的申请记录
	 */
	myApply() {
		wx.navigateTo({
			url: '/pages/releases/myApply/myApply',
		})
	},

	/**
	 * 跳转至收益统计
	 */
	placeRent() {
		wx.navigateTo({
			url: '/pages/releases/placeRent/placeRent'
		})
	}

})