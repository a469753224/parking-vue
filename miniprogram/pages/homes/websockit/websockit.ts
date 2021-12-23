
import { APP_BASE_API, Sock } from "../../../config/config"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    connectStatus: 1,
    heartListen: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (_options) {
    this.connectSocket()
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
        this.setData({
          heartListen: setInterval(() => {
            if (this.data.connectStatus == 0) {
              console.log('监听到没心跳了，抢救一下')
              clearInterval(this.data.heartListen)
              this.reconnect()
            } else {
              console.log('我还活着')
            }
          }, 5000)
        })

      },
      fail: err => {
        console.error(err)
      }
    })

    // 监听webSocket错误
    wx.onSocketError((_result) => {
      console.log('监听到 WebSocket 打开错误，请检查！')
      // 修改连接状态
      this.setData({
        connectStatus: 0
      })
    })

    // 监听WebSocket关闭
    wx.onSocketClose((_result) => {
      console.log('监听到 WebSocket 已关闭！')
      this.setData({
        connectStatus: 1
      })
      clearInterval(this.data.heartListen)
    })

    // 收到websocket消息
    wx.onSocketMessage((result) => {
      console.log(JSON.parse(<string>result.data))
      console.log('接收到消息')
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
    if (this.data.connectStatus === 10086) {
      wx.closeSocket()
      console.log('监听到页面卸载,关闭socket通讯')
    }
  },

})