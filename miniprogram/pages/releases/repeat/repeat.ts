/* 导入工具类 */
import {isEmpty} from '../../../utils/util'

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		list: ['每周一', '每周二', '每周三', '每周四', '每周五', '每周六', '每周日'],
		result: []
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		if(!isEmpty(options)){
			let result = JSON.parse(<any>options.repeat)
			result = result.map((item: any) => {
				return `${item}`
			})
			this.setData({result})
		}
	},

	onChange(event: { detail: any }) {
		this.setData({
			result: event.detail,
		});
	},

	submit() {
		const pages = getCurrentPages();
		const prevPage = pages[pages.length - 2]
		let rentalCycle = <any>this.data.result
		rentalCycle = rentalCycle.map((item: string) => {
			return parseInt(item)
		})
		prevPage.setData({
			rentalCycle:rentalCycle.sort(),
		})
		wx.navigateBack({
			delta: 1,
		})
	},

})