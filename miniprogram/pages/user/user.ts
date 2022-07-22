/* 导入模块 */
import UserServer from '../../api/api/user/server'
import HomeServer from '../../api/api/home/server'
import SigupServer from '../../api/api/sigup/server'
import WxServer from '../../api/api/wx/server'

/* 实例化模块 */
const server = new UserServer()
const sigup = new SigupServer()
const home = new HomeServer()
const wex = new WxServer()

/* 导入工具类 */
import { isEmpty } from '../../utils/util'

/* base64静态资源 */
// import { advert } from './users'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    advert: '',
    user: {},
    back: '',
    call: '',
    content: '',
    show: false,
    shows: false,
    relogin: 0,
    showStatus: false,
    token: wx.getStorageSync('token')
  },

  async tests() {
    const orders = await home.getWechatOrderDetail({ orderId: 'A370D1C680FF435EAC46FAA7D20722F5' })
    if (orders.code == 0) {

      const {
        mch_id,
        service_id,
        out_order_no,
        nonce_str,
        timestamp,
        sign_type,
        sign
      } = orders.data

      wx.navigateToMiniProgram({
        appId: 'wxd8f3793ea3b935b8',
        path: 'pages/record/detail',
        extraData: {
          mch_id,
          service_id,
          out_order_no,
          timestamp,
          nonce_str,
          sign_type,
          sign
        }
      });

    } else {
      wx.showToast({
        title: orders.msg,
        icon: 'none'
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options: any) {
    if (!isEmpty(options)) {
      let { back, call, relogin } = options
      this.setData({
        back: back ? back : '',
        show: call == 1 ? true : false
      })
      if (relogin == 1) {
        this.login()
      }
    }
  },

  /**
   * 获取我的导航栏信息接口
   */
  async myMenuInformation() {
    const result = await server.myMenuInformation()
    let user = {}
    if (result.code == 0) {
      user = result.data
      wx.setStorageSync('userInfo', result.data)
    } else {
      wx.setStorageSync('userInfo', {})
    }
    this.setData({
      user
    })
  },

  /**
   * 用户登录
   */
  async login() {
    const param = {
      loadStatus: true,
      loading: '登录中，请稍候...'
    }
    const result = await sigup.wxlogin(param)
    if (result.code == 0) {
      this.setData({
        token: result.token
      })
      this.myMenuInformation()
      if (result.phoneState == 1) {
        this.setData({
          showStatus: true
        })
      } else {
        wx.showToast({
          title: '登录成功',
        })
        setTimeout(() => {
          if (this.data.back == 'home') {
            wx.reLaunch({
              url: '/pages/home/home',
            })
          }
        }, 1000)
      }
    } else {
      wx.showToast({
        title: '登录失败',
        icon: 'none'
      })
    }
  },

  /**
   * 前往绑定手机
   */
  bindPhone() {
    wx.navigateTo({
      url: '/pages/sigup/register/register?back=1',
    })
  },

  /**
   * 跳转至我的车辆列表
   */
  myPlate() {
    wx.navigateTo({
      url: '/pages/users/myCars/myCars',
    })
  },

  /**
   * 跳转至我的钱包
   */
  wallet() {
    wx.navigateTo({
      url: '/pages/users/wallet/wallet',
    })
  },

  /**
   * 跳转至我的积分
   */
  points() {
    wx.navigateTo({
      url: '/pages/users/integral/integral',
    })
  },

  /**
   * 跳转至我的停车记录
   */
  historyOrder() {
    wx.navigateTo({
      url: '/pages/users/record/record',
    })
  },

  /**
   * 跳转至车位管理
   */
  cancellation() {
    wx.navigateTo({
      url: '/pages/releases/myParks/myParks',
    })
    return;
    this.setData({
      shows: true,
      content: '车位管理请移步“榴车位APP”内操作，目前小程序只提供扫码解锁服务，感谢您的理解！'
    })
  },

  /**
   * 跳转至联系我们
   */
  callUs() {
    this.setData({
      show: true
    })
  },

  /**
   * 跳转至设置页面
   */
  setup() {
    wx.navigateTo({
      url: '/pages/users/setup/setup',
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let token = wx.getStorageSync('token')
    this.setData({
      token
    })
    if (token) {
      setTimeout(() => {
        const user = wx.getStorageSync('userInfo')
        if (!user) {
          this.myMenuInformation()
        } else {
          this.setData({
            user
          })
        }
      }, 500)
    }
    if (this.data.relogin) (
      this.myMenuInformation()
    )
  },

  /**
   * 获取微信绑定号码
   * @param e 事件对象
   */
  getPhoneNumber(e: { detail: { errMsg: string; iv: string; encryptedData: string } }) {
    if (e.detail.errMsg === 'getPhoneNumber:ok') {
      wx.login({
        timeout: 5000,
        success: async res => {
          const code = res.code
          let { iv, encryptedData } = e.detail
          const param = { iv, code, encryptedData }
          const result = await sigup.getPhoneNumber(param)
          if (result.code == 200) {
            let { phoneNumber } = result.data
            wx.reLaunch({
              url: `/pages/sigup/register/register?phone=${phoneNumber}&path=user`
            })
          }
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onHide() {
    this.setData({
      show: false,
      shows: false
    })
  },

  /**
     * 微信支付分下单
     */
  async authorOrder() {
    // const {
    //   lockId,
    //   endTime,
    //   beginTime,
    //   plate
    // } = that.data
    let plate = 'A74Q19'
    const param = {
      lockId: '8096002',
      endTime: 1634005140000,
      beginTime: 1634004240000,
      plate,
      payType: 'wx'
    }
    if (!plate) {
      wx.showToast({
        title: '请选择车牌号',
        icon: 'none'
      })
      return
    }

    const result = await home.creditPayToOrder(param)
    if (result.code == 0) {
      let { orderId } = result.data
      const results = await home.orderQuery()
      if (results.code == 0) {
        let { state } = results.data
        if (state == 1 || state == 2) {
          wx.showToast({
            title: '下单成功',
            icon: 'none'
          })
          setTimeout(() => {
            this.linkPayOrder(orderId)
          }, 500);
        } else if (state == 7) {
          wx.showLoading({
            title: '订单确认中...',
            mask: true
          })
          const titmer = setInterval(async () => {
            const order = await home.orderQuery()
            if (order.code == 0) {
              if (order.data.state == 1 || order.data.state == 2) {
                clearInterval(titmer)
                wx.showToast({
                  title: '下单成功',
                  icon: 'none'
                })
                wx.hideLoading()
                setTimeout(() => {
                  wx.reLaunch({
                    url: `/pages/homes/order/order?orderId=${order.orderId}`
                  })
                }, 500)
              }
            }
          }, 3000)
        }
      }
      if (results.code == 7) {
        wx.showToast({
          title: results.msg,
          icon: 'none'
        })
        wx.reLaunch({
          url: `/pages/home/home`
        })
      }
    } else {
      setTimeout(() => {
        wx.showToast({
          title: result.msg,
          icon: 'none'
        })
        setTimeout(() => {
          wx.reLaunch({
            url: `/pages/home/home`
          })
        }, 500);
      }, 500);
    }
  },

  /**
 * 微信支付分订单详情
 */
  async linkPayOrder(orderId: string) {
    const orders = await home.getWechatOrderDetail({ orderId })
    if (orders.code == 0) {
      const {
        mch_id,
        service_id,
        out_order_no,
        nonce_str,
        timestamp,
        sign_type,
        sign
      } = orders.data

      wx.navigateToMiniProgram({
        appId: 'wxd8f3793ea3b935b8',
        path: 'pages/record/detail',
        extraData: {
          mch_id,
          service_id,
          out_order_no,
          timestamp,
          nonce_str,
          sign_type,
          sign
        }
      });

    } else {
      wx.showToast({
        title: orders.msg,
        icon: 'none'
      })
    }
  },

  /**
   * 微信支付分授权
   */
  beforPay() {
    const that = this
    wx.login({
      success: async res => {
        let { code } = res
        const result = await wex.prePermissions({ code })
        if (result.data == 'AVAILABLE') {
          that.authorOrder()
        } else {
          let { data } = result
          if (data && data != 'FAIL') {
            wx.navigateToMiniProgram({
              appId: 'wxd8f3793ea3b935b8',
              path: 'pages/use/enable',
              extraData: {
                apply_permissions_token: data
              },
              success() {},
              fail() {
                wx.showModal({
                  title: '提示',
                  content: '授权失败，请稍后尝试！',
                  showCancel: false
                })
              }
            });
          } else {
            wx.showToast({
              title: '参数错误',
              icon: 'none'
            })
          }
        }
      }
    })
  },
})