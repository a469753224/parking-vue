// components/modal/tips/tips.ts

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
			value: '提示'
		},
		content: {
			type: String,
			value: '这里是提示内容'
		},
		showCancel: {
			type: Boolean,
			value: true
		},
		cancelText: {
			type: String,
			value: '取消'
		},
		confirmText: {
			type: String,
			value: '确定'
		},
		slotBtn: {
			type: Boolean,
			value: false
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

		/**
		 * 取消删除历史订单
		 */
		cancel() {
			this.setData({
				show: false
			})
		},

		/**
		 * 删除历史订单
		 */
		async confirm() {
			this.triggerEvent('confirm')
			this.setData({
				show: false
			})
		},

	}
})
