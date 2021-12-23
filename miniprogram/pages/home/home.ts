/* 导入模块 */
import SigupServer from '../../api/api/sigup/server'
import HomerServer from '../../api/api/home/server'
import UserServer from '../../api/api/user/server'
import CouponServer from '../../api/api/coupon/server'

/* 实例化模块 */
const user = new UserServer()
const sigup = new SigupServer()
const server = new HomerServer()
const coupon = new CouponServer()

/* 工具导入 */
import { isEmpty } from '../../utils/util'

/* 导入自定义配置文件 */
import { TX_MAP_KEY } from '../../config/config'

/* 导入腾讯地图插件 */
const chooseLocation = requirePlugin('chooseLocation');

/* 腾讯位置服务SDK导入 */
const QQMapWX = require('../../utils/qqmap-wx-jssdk')
const qqmapsdk = new QQMapWX({
  key: TX_MAP_KEY
});

Page({

  /**
   * 页面的初始数据
   */
  data: {
    base: {},
    city: '',
    token: '',
    order: [],
    markers: [],
    address: '',
    show: false,
    userInfo: '',
    mapData: {},
    latitude: '',
    relogin: '',
    longitude: '',
    banner: [''],
    isLogin: false,
    orderState: false,
    showStatus: false,
    showCoupon: false,
    showState: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!isEmpty(options)) {
      let {
        relogin
      } = options
      this.setData({
        relogin
      })
    }
  },

  /**
   * 用户登录
   */
  async login() {
    const param = {
      loadStatus: false,
      loading: ''
    }
    const result = await sigup.wxlogin(param)
    if (result.code == 0) {
      this.setData({
        token: result.token
      })
      this.coupon()
      this.orderQuery()
      if (result.phoneState == 1) {
        this.setData({
          showState: true
        })
      }
    }
  },

  /**
   * 获取优惠券信息
   */
  async coupon() {
    const result = await coupon.leadCoupon()
    if (result.code == 0) {
      let {
        data
      } = result
      let set = wx.getStorageSync('coupon')
      let coupon = false
      if (set === '') {
        coupon = data.length != 0 ? true : false
      } else {
        coupon = !set ? false : true
      }
      this.setData({
        showCoupon: coupon
      })
    }
  },

  /**
   * 根据token获取当前进行中的订单
   */
  async orderQuery() {
    const result = await server.orderQuery()
    let orderState = result.code == 0 ? true : false
    let order = []
    if (result.code == 0) {
      order = result.data
    }
    this.setData({
      order,
      orderState,
    })
  },

  /**
   * 扫码停车
   */
  scan() {

    if (this.data.token) {
      let { orderState } = this.data
      if (orderState) {
        this.setData({
          orderStatus: true
        })
        return;
      } else {
        let phoneState = wx.getStorageSync('phoneState')
        if (phoneState == 0) {
          wx.navigateTo({
            url: '/pages/homes/scan/scan',
          })
        } else {
          this.setData({
            showStatus: true
          })
        }
      }
    } else {
      this.setData({
        isLogin: true
      })
      return;
    }
  },

  /**
   * 用户登录
   */
  async goLogin() {
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
      }
    } else {
      wx.showToast({
        title: '登录失败',
        icon: 'none'
      })
    }
  },

  /**
 * 获取我的导航栏信息接口并更新本地缓存
 */
  async myMenuInformation() {
    const result = await user.myMenuInformation()
    if (result.code == 0) {
      wx.setStorageSync('userInfo', result.data)
    }
  },

  /**
   * 前往绑定号码
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
              url: `/pages/sigup/register/register?phone=${phoneNumber}&path=home`
            })
          }
        }
      })
    }
  },

  /**
   * 跳转手机绑定页面
   */
  register() {
    wx.navigateTo({
      url: '/pages/sigup/register/register',
    })
  },

  /**
   * 跳转订单详情
   */
  toOrderDetail() {
    let { order } = <any>this.data
    let { isCredit, orderId, state } = order
    if (isCredit) {
      this.authorOrder(orderId)
    } else {
      if (state == 3) {
        wx.navigateTo({
          url: `/pages/homes/pay/pay?orderId=${orderId}`
        })
      } else {
        wx.navigateTo({
          url: '/pages/homes/order/order',
        })
      }
    }
  },

  /**
   * 微信支付分订单
   */
  async authorOrder(orderId: string) {
    const orders = await server.getWechatOrderDetail({ orderId })
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
   * 点击搜索地点
   */
  search() {
    if (!isEmpty(this.data.order)) {
      this.setData({
        orderStatus: true
      })
      return;
    } else {
      let {
        markers,
        longitude,
        latitude
      } = <any>this.data.base
      wx.navigateTo({
        url: `/pages/homes/search/search?longitude=${longitude}&latitude=${latitude}&city=${this.data.city}&markers=${JSON.stringify(markers)}`,
      })
    }
  },

  /**
   * 跳转处理当前订单
   */
  confirm() {
    /*let { order } = <any>this.data
    if (!isEmpty(order)) {
      if (order.state == 3) {
        wx.navigateTo({
          url: `/pages/homes/pay/pay?orderId=${order.orderId}`
        })
      } else {
        wx.navigateTo({
          url: '/pages/homes/order/order',
        })
      }
    }*/

    this.toOrderDetail()
  },

  /**
   * 打开地图插件
   */
  toPlus() {
    const key = TX_MAP_KEY; //使用在腾讯位置服务申请的key
    const referer = '榴车位'; //调用插件的app的名称
    const category = '生活服务,娱乐休闲';
    wx.navigateTo({
      url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=&category=' + category
    });
  },

  /**
   * 预留车位
   */
  reserve() {
    let { id } = <any>this.data.mapData
    if (id) {
      wx.navigateTo({
        url: `/pages/homes/parkDetail/parkDetail?estateId=${id}`
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    setTimeout(() => {
      let {
        relogin
      } = <any>this.data
      if (relogin == 1) {
        this.login()
      } else {
        let token = wx.getStorageSync('token')
        if (token) {
          this.orderQuery()
          this.coupon()
        }
      }
    }, 200);

    if (!isEmpty(this.data.mapData)) {
      const { name } = <any>this.data.mapData
      this.setData({
        value: name
      })
    }

    this.setData({
      token: wx.getStorageSync('token'),
      userInfo: wx.getStorageSync('userInfo')
    })

    let location = chooseLocation.getLocation()
    if (!isEmpty(this.data.mapData)) {
      let {
        name,
        latitude,
        longitude
      } = <any>this.data.mapData
      let markers: any = [({
        id: 1,
        latitude,
        longitude,
        callout: {
          content: name,
          padding: '10',
          borderRadius: '5'
        },
        width: '48rpx',
        height: '80rpx',
        iconPath: '/assets/images/home/slide_position@2x.png'
      })]
      this.setData({
        markers,
        latitude,
        longitude,
        address: name,
      })
    } else if (location) {
      let {
        name,
        latitude,
        longitude
      } = location
      let markers: any = [({
        id: 1,
        latitude,
        longitude,
        callout: {
          content: name,
          padding: '10',
          borderRadius: '5'
        },
        width: '48rpx',
        height: '80rpx',
        iconPath: '/assets/images/home/slide_position@2x.png'
      })]
      this.setData({
        markers,
        latitude,
        longitude,
        address: name,
        mapData: location
      })
    } else {
      wx.getLocation({
        type: 'gcj02',
        success: res => {
          let markers: any = this.data.markers
          let latitude: any = res.latitude
          let longitude: any = res.longitude
          markers.push({
            id: 1,
            latitude,
            longitude,
            callout: {
              content: '当前位置',
              padding: '10',
              borderRadius: '5'
            },
            width: '48rpx',
            height: '80rpx',
            iconPath: '/assets/images/home/slide_position@2x.png'
          })
          let base = {
            markers,
            latitude,
            longitude,
          }
          this.setData({
            base,
            markers,
            latitude,
            longitude,
          })
          qqmapsdk.reverseGeocoder({
            location: {
              latitude,
              longitude
            },
            success: (data: { result: { address: string } }) => {
              let {
                address
              } = data.result
              this.setData({
                city: address
              })
            }
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--页面隐藏
   */
  onHide() {
    this.setData({
      markers: [],
      show: false
    })
  },

})