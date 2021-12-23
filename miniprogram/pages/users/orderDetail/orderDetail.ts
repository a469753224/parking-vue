/* 导入工具类 */
import { isEmpty } from '../../../utils/util'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    bill: {},
    orderId: '',
    show: false,
    shows: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!isEmpty(options)) {
      let { bill } = <any>options
      bill = JSON.parse(bill)
      this.setData({
        bill
      })
    }
  },

  /**
   * 退款申请
   */
  refund() {
    this.setData({
      shows: true
    })
    return
    wx.reLaunch({
      url: '/pages/homes/refundApply/refundApply',
    })
  },

  /**
   * 呼叫站长
   */
  call() {
    this.setData({
      show: true
    })
    return
    wx.reLaunch({
      url: '/pages/user/user?call=1',
    })
  },
})