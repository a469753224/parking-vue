/**导入静态资源 */
// import { release_banner } from './banner'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    banner: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },

  /**
   * 查看步骤
   */
  toStep() {
    wx.navigateTo({
      url: '/pages/releases/step/step',
    })
  },

  /**
   * 申请发布车位
   */
  apply() {
    // this.setData({
    //   show: true
    // })
    // return
    wx.navigateTo({
      url: '/pages/releases/apply/apply',
    })
  },

  onHide() {
    this.setData({
      show: false
    })
  },

  /**
   * 我的车位
   */
  myParks() {
    wx.navigateTo({
      url: '/pages/releases/myParks/myParks',
    })
  },
})