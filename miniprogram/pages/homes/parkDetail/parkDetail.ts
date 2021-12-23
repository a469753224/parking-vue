/* 导入模块 */
import CarServer from '../../../api/api/car/server'

/* 实例化模块 */
const server = new CarServer()

/* 引入base64图片 */
// import { empty_park } from '../../../assets/base64/banner'

/* 工具类导入 */
import { isEmpty } from '../../../utils/util'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    estateId: '',
    empty_park: '',
    isPark: false,
    parkInfo: {
      name: '非合作停车场',
      streetAddress: '',
      cost: 0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!isEmpty(options)) {
      this.setData({
        isPark: true,
        estateId: options.estateId
      })
      this.userQueryDetails()
    }
  },

  /**
   * 停车场详情
   */
  async userQueryDetails() {
    let { estateId } = this.data
    const result = await server.userQueryDetails({ estateId: estateId })
    if (result.code == 0) {
      let isPark = result.data.parkingConunt == 0 ? false : true
      let parkInfo = result.data.parkingConunt == 0 ? this.data.parkInfo : result.data
      this.setData({
        isPark,
        parkInfo
      })
    }
  },

  /**
   * 预留车位
   */
  resever() {
    let { estateId } = this.data
    if (isEmpty(estateId)) {
      wx.showToast({
        title: '抱歉，该停车场暂无开放车位',
      })
    } else {
      let { parkInfo } = <any>this.data
      wx.navigateTo({
        url: `/pages/homes/keepPark/keepPark?parkInfo=${JSON.stringify(parkInfo)}`
      })
    }
  }
})