/* 导入模块 */
import WalletServer from '../../../api/api/wallet/server'
import CouponServer from '../../../api/api/coupon/server'

/* 实例化模块 */
const server = new WalletServer()
const coupon = new CouponServer()

/* 导入响应数据接口 */
import { GetActingUPCResponseData } from '../../../api/interface/responseInterface/coupon'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    wallet: {},
    coupon: [],
    gctingUPC: [{
      days: 0,
      status: 0,
    }],
    actingUPC: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (_options) {
    this.getWallet()
    this.getActingUPC()
  },

  /**
   * 优惠券列表
   */
  async listUserCoupon() {
    const result = await coupon.listUserCoupon()
    if (result.code == 0) {
      let { data } = result
      data = data.filter((element: { state: number }) => {
        if (element.state == 1) {
          return true
        }
        return false
      })
      this.setData({
        coupon: data,
      })
    }
  },

  /**
   * 获取我的停车卡
   */
  async getActingUPC() {
    const result = await coupon.getActingUPC<GetActingUPCResponseData>()
    if (result.code == 0) {
      this.setData({
        actingUPC: result.data
      })
    }
  },

  /**
   * 获取我的钱包信息
   */
  async getWallet() {
    const result = await server.getWallet()
    if (result.code == 0) {
      this.setData({
        wallet: result.data
      })
    }
  },

  /**
   * 跳转我的钱包
   */
  balance() {
    wx.navigateTo({
      url: '/pages/users/balance/balance',
    })
  },

  /**
   * 跳转我的钱包
   */
  profitBalance() {
    wx.navigateTo({
      url: '/pages/users/balance/balance',
    })
  },

  /**
   * 跳转到 我的优惠券页面
   */
  mycoupon() {
    wx.navigateTo({
      url: '/pages/users/coupon/coupon',
    })
  },

  /**
   * 我的停车卡
   */
  myCard() {
    let { actingUPC } = this.data
    if (actingUPC.length > 0) {
      wx.navigateTo({
        url: '/pages/users/parkCard/parkCard'
      })
    }
  },

  onShow(){
    this.listUserCoupon()
  }
})