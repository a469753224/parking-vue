/** 提示音 */
let innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.src = '/assets/audio/beep.mp3'

/* 工具类导入 */
import { getParam } from '../../../utils/util'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bar: false,
    show: false,
    flash: 'off'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (_options) {

  },

  /**
   * 拉起扫码
   */
  /*scan() {
      wx.scanCode({
          onlyFromCamera: true,
          success(e) {
              console.log(e)
          }
      })
  },*/

  /**
   * 扫码成功回调
   * @param {Object} e 
   */
  scanSuccess(e: { detail: { result: string } }) {
    // 播放提示音
    innerAudioContext.play()
    if (e) {
      const lockId = getParam(e.detail.result, 'lockId')
      if (!lockId) {
        wx.showToast({
          title: '无效二维码，请检查！',
          icon: 'none'
        })
        wx.reLaunch({
          url: '/pages/home/home',
        })
      } else {
        wx.reLaunch({
          url: `/pages/homes/reserve/reserve?lockId=${lockId}`
        })
      }
    }
  },

  /**
   * 手电筒开关
   */
  torchSwitch() {
    let flash = this.data.flash == 'on' ? 'off' : 'on'
    this.setData({ flash })
  },

  onShow() {
    /**
     * 相机授权检测
     */
    wx.getSetting({
      withSubscriptions: true,
      success: res => {
        const that = this
        if (!res.authSetting['scope.camera']) {
          wx.authorize({
            scope: 'scope.camera',
            success: _data => {
              wx.showToast({
                title: '授权成功',
                icon: 'none'
              })
            },
            fail() {
              that.setData({
                show: true
              });
            }
          })
        }
      },
      fail: _err => {

      }
    })
  },

  /**
   * 打开设置相机授权
   */
  confirm() {
    wx.openSetting({
      success: (_re) => {
        wx.navigateBack({
          delta: 0,
        })
      }
    })
  },

  /**
   * 取消相机授权
   */
  cancel() {
    wx.navigateBack({
      delta: 1,
    })
  }


})