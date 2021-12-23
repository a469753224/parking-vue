Page({

  /**
   * 页面的初始数据
   */
  data: {
    codeFlag: false,
    time: 1 * 1 * 60 * 1000,
    timeData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (_options) { },

  onChange(e: { detail: any; }) {
    this.setData({
      timeData: e.detail,
    });
  },

  /**
   * 获取验证码
   */
  getCode() {
    this.setData({
      codeFlag: true
    })
  }
})