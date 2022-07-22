/* 模块导入 */
import HomeServer from '../../../api/api/home/server'
import UserServer from '../../../api/api/user/server'
import WxPay from '../../../utils/wxPay'

/* 实例化模块 */
const server = new HomeServer()
const user = new UserServer()
const pay = new WxPay()

/*导入小工具*/
import {
  formatMinute,
  formatTimeStamp,
  isEmpty
} from '../../../utils/util'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    lockId: '',
    carList: <any>[],
    enTime: '00:00',
    endTime: '00:00',
    beginTime: '',
    beTime: '00:00',
    plate: '',
    reserve: {},
    value: true,
    isAdd: false,
    parkInfo: {
      estateId: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!isEmpty(options)) {
      this.setData({
        parkInfo: JSON.parse(<string>options.parkInfo)
      })
    }
  },

  /**
   * 获取当前时间日期
   */
  getNowTime() {
    const date = new Date()
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDate()
    const start = date.getTime()
    const end = date.getTime() + 15 * 60 * 1000
    this.setData({
      enTime: formatMinute(end),
      beTime: formatMinute(start),
      endTime: Date.parse(`${y}/${m}/${d} ${formatMinute(end)}:00`).toString(),
      beginTime: Date.parse(`${y}/${m}/${d} ${formatMinute(start)}:00`).toString()
    })
  },

  /**
   * 获取当前用户的车辆
   */
  async selectPlateAll() {
    const result = await user.selectPlateAll()
    if (result.code == 0) {
      const data = result.data
      let carList: any[] = []
      let plate = ''
      data.forEach((element: { status: number; plate: string }) => {
        if (element.status == 1) {
          plate = element.plate
        }
        carList.push(element.plate)
      })
      this.setData({
        plate,
        carList
      })
    }
  },

  /**
   * 获取车位锁信息
   */
  async lockDate() {
    let {
      lockId
    } = this.data
    const param = {
      lockId
    }
    const result = await server.lockDate(param)
    if (result.code == 0) {
      this.setData({
        reserve: result.data
      })
    } else {
      let title = `抱歉，${result.msg}`
      wx.showToast({
        title,
        icon: 'none'
      })
      setTimeout(() => {
        wx.reLaunch({
          url: '/pages/home/home',
        })
      }, 1000);
    }
  },

  /**
   * 选择时间
   * @param {Object}} e 
   */
  bindTimeChange(e: { detail: { value: any } }) {
    const date = new Date()
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDate()
    this.setData({
      enTime: e.detail.value,
      endTime: Date.parse(`${y}/${m}/${d} ${e.detail.value}:00`).toString(),
    })
  },

  /**
   * 选择车位
   */
  selectPlate() {
    wx.navigateTo({
      url: '/pages/users/myCars/myCars?select=1',
    })
  },

  /**
   * 预约车位
   */
  async createOrder() {
    let { plate, beTime, enTime } = this.data
    if (!plate) {
      wx.showToast({
        title: '请选择车牌号',
        icon: 'none'
      })
      return
    }
    if (!this.data.value) {
      wx.showToast({
        title: '请勾选押金项',
        icon: 'none'
      })
      return
    }
    const param = {
      plate,
      payType: 'wx',
      endTime: `${formatTimeStamp(enTime)}`,
      beginTime: `${formatTimeStamp(beTime)}`,
      estateId: this.data.parkInfo.estateId
    }
    const result = await server.wxToFreeze(param)
    const { code } = result
    if (code == 0) {
      const payParam = result.data.orderStr
      let {
          orderId
      } = result.data
      const data = await pay.pay(payParam)
      let title = '预留成功'
      if (data.code == 200) {
          wx.showToast({
              title,
              icon: 'none'
          })
          setTimeout(() => {
              wx.reLaunch({
                  url: `/pages/homes/order/order?orderId=${orderId}`
              })
          }, 500);
      } else {
          wx.showToast({
              title,
              icon: 'none'
          })
          const params = {
              orderId
          }
          const res = await server.cancelPaking(params)
          if (res.code == 0) {
              setTimeout(() => {
                  wx.reLaunch({
                      url: `/pages/home/home`
                  })
              }, 500);
          }
      }
  } else if (code == 20) {
      let { orderId } = result.data
      let { msg } = result
      wx.showToast({
          title: msg,
          icon: 'none'
      })
      setTimeout(() => {
          wx.reLaunch({
              url: `/pages/homes/order/order?orderId=${orderId}`
          })
      }, 500);
  } else {
      wx.showToast({
          title: result.msg,
          icon: 'none'
      })
      setTimeout(() => {
          wx.reLaunch({
              url: `/pages/home/home`
          })
      }, 500);
  }

  },

  /**
   * 押金选择
   * @param {Objecct} e 节点对象 
   */
  onChangeChked(e: { detail: any }) {
    this.setData({
      value: e.detail
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let {
      isAdd
    } = this.data
    if (!isAdd) {
      if (!this.data.plate) {
        this.selectPlateAll()
      }
    }
    this.getNowTime()
  }
})