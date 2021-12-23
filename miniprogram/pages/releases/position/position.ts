Page({

  /**
   * 页面的初始数据
   */
  data: {
      lgt: '108.368034',
      lat: '22.853691',
      flag: false,
      crowFlag: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (_options) {

  },

  /**
   * 选择城市
   */
  selectCity(){
      this.setData({
          crowFlag: !this.data.crowFlag
      })
  },

  /**
   * 取消选择
   */
  cancel(){
      this.setData({
          flag: false
      })
  },

  /**
   * 获取光标
   */
  focus(){
      this.setData({
          flag: true
      })
  },

  /**
   * 失去光标
   */
  blur(){
      this.setData({
          flag: false
      })
  }
})