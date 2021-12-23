import { Wxpay } from '../api/interface/requestInterface/wxpay'
import { RequestPromise } from '../types/http'

/**
 * 微信支付模块
 */
export default class WxPay {

  /**
   * 微信小程序支付
   * @param {Object} param 支付参数
   */
  pay(param: Wxpay): RequestPromise {
    return new Promise(async resolve => {
      const params = {
        appId: param.appid,
        timeStamp: param.timestamp,
        nonceStr: param.noncestr,
        package: param.package,
        signType: param.signType,
        paySign: param.paySign
      }
      wx.requestPayment({
        ...params,
        success(res) {
          resolve({
            msg: '支付成功',
            code: 200,
            data: res
          })
        },
        fail(_data) {
          resolve({
            msg: '支付失败！',
            code: 777,
          })
        }
      })
    })
  }

}