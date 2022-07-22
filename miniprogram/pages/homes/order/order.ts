/* 导入模块 */
import HomeServer from '../../../api/api/home/server'
import CarServer from '../../../api/api/car/server'

/* 实例化模块 */
const server = new HomeServer()
const car = new CarServer()

import {
  Sock,
  APP_BASE_API
} from '../../../config/config'

/*导入小工具*/
import {
  getTime,
  contrastTime,
  formatMinute
} from '../../../utils/util'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    order: {
      orderId: '',
      lockerIds: '',
      state: -1
    },
    getTime: '',
    orderId: '',
    show: false,
    section: [],
    stopTime: '',
    sTime: '00:00',
    gTime: '15:00',
    disable: false,
    showCan: false,
    heartListen: 0,
    continuTime: '',
    showTips: false,
    isContinu: false,
    settlement: false,
    connectStatus: -1,
    content: `当前车位开放时间为00:00-00:00,请选择开放时间内续时`,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.orderQuery()
  },

  /**
   * 创建websockit
   */
  connectSocket() {
    wx.connectSocket({
      url: APP_BASE_API[Sock],
      header: {
        'content-type': 'application/json',
        'token': wx.getStorageSync('token')
      },
      success: res => {
        console.log('连接成功', res)
        // 设置连接状态
        this.setData({
          connectStatus: 10086
        })
        // 心跳
        clearInterval(this.data.heartListen)
        this.data.heartListen = setInterval(() => {
          if (this.data.connectStatus == 0) {
            console.log('监听到没心跳了，抢救一下')
            clearInterval(this.data.heartListen)
            this.reconnect()
          } else {
            console.log('我还活着', res)
          }
        }, 5000)
      },
      fail: err => {
        console.error(err)
      }
    })

    /**监听webSocket错误 */
    wx.onSocketError(() => {
      console.log('监听到 WebSocket 打开错误，请检查！')
      this.setData({
        connectStatus: 0
      })
    })

    /**监听WebSocket关闭 */
    wx.onSocketClose(() => {
      console.log('监听到 WebSocket 已关闭！')
      this.setData({
        connectStatus: -1
      })
      clearInterval(this.data.heartListen)
    })

    /**收到websocket消息 */
    wx.onSocketMessage((result: any) => {
      let {
        state
      } = JSON.parse(result.data)
      console.log(`接收到数据:`, JSON.parse(result.data))
      if (state == 2) {
        this.setData({
          connectStatus: -1
        })
        wx.showToast({
          title: '解锁成功！'
        })
        let order = this.data.order
        order.state = 2
        this.setData({
          order
        })
      }
      if (state == 0) {
        this.setData({
          connectStatus: -1
        })
        clearInterval(this.data.heartListen)
        setTimeout(() => {
          wx.reLaunch({
            url: '/pages/home/home',
          })
        }, 500)
      }
    })

  },

  /**
   * 重连
   */
  reconnect() {
    console.log('尝试重连')
    wx.closeSocket() // 重连之前手动关闭一次
    this.connectSocket()
  },

  onUnload() {
    let { connectStatus } = this.data
    if (connectStatus == 10086 || connectStatus == -1) {
      wx.closeSocket()
    }
    console.log('监听到页面卸载,关闭socket通讯')
  },

  /**
   * 根据token获取正在进行中的订单
   */
  async orderQuery() {
    const result = await server.orderQuery()
    if (result.code == 0) {
      this.setData({
        order: result.data,
        sTime: result.data.beTime,
        gTime: result.data.enTime,
        orderId: result.data.orderId,
        settlement: result.data.state == 2 ? true : false
      })
      let {
        state,
        orderId
      } = result.data
      this.parkingDate(result.data.placeId)
      this.connectSocket()
      if (state == 3) {
        wx.navigateTo({
          url: `/pages/homes/pay/pay?orderId=${orderId}`
        })
      }
      if (state == 7) {
        wx.showLoading({
          title: '订单确认中...'
        })
      }
    } else {
      wx.showToast({
        title: '当前订单已结束',
        icon: 'none',
        success: () => {
          setTimeout(() => {
            wx.reLaunch({
              url: '/pages/home/home',
            })
          }, 1000);
        }
      })
    }
  },

  /**
   * 获取车位开放信息
   * @param {Number | String} placeId 
   */
  async parkingDate(placeId: string) {
    const param = {
      placeId
    }
    const result = await car.parkingDate(param)
    if (result.code == 0) {
      this.setData({
        'section[0]': result.data.beginDate,
        'section[1]': result.data.endDate
      })
    }
  },

  /**
   * 关闭订单
   */
  cancelOrder() {
    this.setData({
      showCan: true
    })
  },

  /**
   * 取消预留
   */
  async cancelPaking() {
    this.setData({
      showCan: false
    })
    let {
      orderId
    } = this.data
    const param = {
      orderId,
    }
    const result = await server.cancelPaking(param)
    if (result.code == 0) {
      this.setData({
        connectStatus: -1
      })
      setTimeout(() => {
        wx.reLaunch({
          url: `/pages/homes/cancelOrder/cancelOrder?orderId=${this.data.order.orderId}`,
        })
      }, 500);
    } else {
      wx.showToast({
        title: result.msg,
        icon: 'none'
      })
    }
  },

  /**
   * 取消操作
   */
  cancel() {
    this.setData({
      showUnlock: false,
      showCan: false,
    })
  },

  /**
   * 取消解锁
   */
  confirmUnLock() {
    this.setData({
      showUnlock: true,
    })
  },

  /**
   * 解锁停车
   */
  async carLock() {
    this.setData({
      show: false
    })
    const {
      orderId,
      lockerIds
    } = this.data.order
    const param = {
      orderId,
      lockerIds
    }
    const result = await server.carLock(param)
    if (result.code == 0) {
      this.setData({
        disable: true
      })
      this.connectSocket()
      wx.showLoading({
        title: '解锁中...'
      })
    }
    this.setData({
      showUnlock: false
    })
  },

  /**
   * 跳转通行证页面
   */
  voucher() {
    wx.navigateTo({
      url: '/pages/homes/safeconduct/safeconduct',
    })
  },

  /**
   * 选择续时时间
   */
  onChangeGetTime(e: { detail: { value: string } }) {
    const date = new Date()
    let getTimes = getTime(`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${e.detail.value}:00`).toString()
    let t = getTime(getTimes)
    const flag = contrastTime(t, this.data.section)
    let begin = formatMinute(this.data.section[0])
    let end = formatMinute(this.data.section[1])
    if (!flag) {
      this.setData({
        show: true,
        content: `当前车位开放时间为${begin}-${end},请选择开放时间内续时`
      })
    } else {
      this.setData({
        continuTime: t.toString(),
        isContinu: true,
        getTime: getTimes,
        gTime: e.detail.value
      })
      this.continued()
    }
  },

  /**
   * 续时
   */
  async continued() {
    let orderId = this.data.order.orderId
    let endTime = this.data.continuTime
    const param = {
      orderId,
      endTime
    }
    const result = await server.continuationModify(param)
    let title = result.code == 0 ? '续时成功' : result.msg
    if (result.code == 0) {
      setTimeout(() => {
        this.orderQuery()
      }, 500);
    }
    wx.showToast({
      title,
      icon: 'none'
    })
  },

  /**
   * 订单结算
   */
  async settlement() {
    let {
      orderId
    } = this.data
    const param = {
      orderId
    }
    const result = await server.orderSettlement(param)
    if (result.code == 15) {
      wx.reLaunch({
        url: '/pages/homes/successSettlement/successSettlement',
      })
    } else if (result.code == 0) {
      wx.navigateTo({
        url: `/pages/homes/pay/pay?orderId=${result.data.orderId}`,
      })
    } else {
      wx.showToast({
        title: result.msg,
        icon: 'none'
      })
    }
  },

  /**
   * 前往支付
   */
  payOrder() {
    let {
      orderId
    } = this.data
    wx.navigateTo({
      url: `/pages/homes/pay/pay?orderId=${orderId}`
    })
  }
})