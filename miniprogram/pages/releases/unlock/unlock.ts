/* 导入工具类 */
import { isEmpty } from '../../../utils/util'

/* 导入模块 */
import Server from '../../../api/api/lock/server'

/* 实例化模块 */
const server = new Server()

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		lockerId: '',
		timeData: {},
		isCode: false,
		time: 60 * 1000,
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		if (!isEmpty(options)) {
			let { lockerId } = options
			this.setData({
				lockerId
			})
		}
	},

	/**
	 * 设置时间
	 * @param {Object} e 节点对象 
	 */
	onChange(e: { detail: any }) {
		this.setData({
			timeData: e.detail,
		});
	},

	/**
	 * 倒计时结束回调
	 */
	finish() {
		this.setData({
			isCode: false
		})
	},

	/**
	 * 解锁停车
	 */
	async unlock() {
		const { lockerId } = this.data
		const param = { lockerId }
		const result = await server.unlock(param)
		const title = result.code == 0 ? '解锁成功' : result.msg
		if (result.code == 0) {
			this.setData({
				isCode: true
			})
		}
		wx.showToast({
			title,
			icon: 'none'
		})
	}

})