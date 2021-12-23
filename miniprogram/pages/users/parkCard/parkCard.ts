/* 导入模块 */
import CouponServer from '../../../api/api/coupon/server'

/* 实例化模块 */
const server = new CouponServer()

/* 导入响应数据接口 */
import { GetActingUPCResponseData } from '../../../api/interface/responseInterface/coupon'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    actingUPC: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (_options) {
    this.getActingUPC()
  },

  /**
   * 获取生效中的停车券
   */
  async getActingUPC() {
    const result = await server.getActingUPC<GetActingUPCResponseData>()
    if (result.code == 0) {
      this.setData({
        actingUPC: result.data
      })
    }
  }

})