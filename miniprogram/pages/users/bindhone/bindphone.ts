Page({

  /**
   * 页面的初始数据
   */
  data: {
      phone: '',
      code: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (_options) {

  },

  /**
   * 手机号码双向绑定
   * @param e 事件对象
   */
  onChangePhone(e: { detail: { value: any } }){
      this.setData({
          phone: e.detail.value
      })
  },

  /**
   * 验证码双向绑定
   * @param e 事件对象
   */
  onChangeCode(e: { detail: { value: any } }){
      this.setData({
          code: e.detail.value
      })
  }
})