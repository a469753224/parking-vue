// components/modal/contact/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    tel: {
      type: String,
      value: '0771-5843000'
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
    cancel() {
      this.setData({
        show: false
      })
    },

    confirm() {
      this.setData({
        show: false
      })
      wx.makePhoneCall({
        phoneNumber: this.data.tel,
      })
    }
  }
})
