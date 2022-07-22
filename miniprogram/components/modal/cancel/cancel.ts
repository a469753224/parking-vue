// components/modal/cancel/cancel.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {

		show: {
			type: Boolean,
			value: false
		},

		title: {
			type: String,
			value: '确定要取消申请'
		},
		content: {
			type: String,
			value: '取消后可以在申请记录中重新申请'
		},
		showCancel: {
			type: Boolean,
			value: true
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {

	},

	/**
	 * 组件的方法列表
	 */
	methods: {

		confirm(){
			this.triggerEvent('confirm')
			this.setData({
				show: false
			})
		},

		cancel(){
			this.triggerEvent('cancel')
			this.setData({
				show: false
			})
		}

	}
})
