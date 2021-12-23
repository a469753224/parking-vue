/* 导入工具类 */
import { repeatDesc, isEmpty, formatTimeStamp } from '../../../utils/util'

/* 导入模块 */
import Server from '../../../api/api/car/server'

/* 实例化模块 */
const server = new Server()

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		placeId: '',
		rental: '',
		endDate: '',
		beginDate: '',
		rentalCycle: [],
		times: []
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		if (!isEmpty(options)) {
			let { placeId, rental, rentalCycle, beginDate, endDate } = JSON.parse(<any>options.row)
			this.setData({ placeId, rental, rentalCycle, beginDate, endDate })
		}
	},

	/**
	 * 设置时间
	 */
	setTimes(){
		let i:any = 0
		let a:any = 0
		let hours:number[] = []
		let minutes:number[] = []
		let {times} = <any>this.data
		while(i < 24){
			i = i > 9 ? i : `0${i}`
			hours.push(i)
			i++
		}
		while(a < 60){
			a = a > 9 ? a : `0${a}`
			minutes.push(a)
			a++
		}
		times.push(hours)
		times.push(minutes)
		this.setData({ times })
	},

	onShow() {
		this.setTimes()
		this.setData({
			rental: repeatDesc(this.data.rentalCycle)
		})
	},

	/**
	 * 重复设置
	 */
	repeat() {
		wx.navigateTo({
			url: `/pages/releases/repeat/repeat?repeat=${JSON.stringify(this.data.rentalCycle)}`,
		})
	},

	/**
	 * 择开始时间
	 * @param e 
	 */
	checkBeginTime(e: { detail: { value: any[] } }) {
		let h = e.detail.value[0]
		let m = e.detail.value[1]
		let houre = this.data.times[0][h]
		let minute = this.data.times[1][m]
		this.setData({
			beginDate: `${houre}:${minute}`,
		})
	},

	/**
	 * 择开始时间
	 * @param e 
	 */
	checkEndTime(e: { detail: { value: any[] } }) {
		let h = e.detail.value[0]
		let m = e.detail.value[1]
		let houre = this.data.times[0][h]
		let minute = this.data.times[1][m]
		this.setData({
			endDate: `${houre}:${minute}`,
		})
	},

	/**
	 * 保存
	 */
	async parkingTimeModify() {
		let { placeId, rentalCycle, beginDate, endDate } = this.data
		const param = {
			placeId,
			rentalCycle,
			beginDate: formatTimeStamp(<any>beginDate),
			endDate: formatTimeStamp(<any>endDate)
		}
		const result = await server.parkingTimeModify(param)
		const title = result.code == 0 ? '设置成功' : result.msg
		if (result.code == 0) {
			wx.navigateBack({
				delta: 1,
			})
		}
		wx.showToast({
			title,
			icon: 'none'
		})
	}

})