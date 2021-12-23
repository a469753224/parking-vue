/* 导入请求类 */
import Http from '../../../utils/http'

/* 导入请求参数接口 TS接口类型 */
import {
  Dopay,
  Minipay
} from '../../interface/requestInterface/pay'

/* 导入网络请求接口 TS接口类型 */
import { Method, RequestPromise } from '../../../types/http'

/**
 * 支付模块-模型层
 */
export default class PayModel extends Http {

  /**
   * 微信支付接口
   * @param {Dopay} data 请求参数 
   */
  wxPayModel(data: Dopay): RequestPromise {
    const url = `wxpay/dopay`
    const param = {
      url,
      data,
      method: <Method>'GET'
    }
    return this.request(param)
  }

  /**
   * 小程序支付接口
   * @param {Minipay} data 请求参数 
   */
  minipayModel(data: Minipay): RequestPromise {
    const url = `wxpay/minipay`
    const param = {
      url,
      data,
      method: <Method>'GET'
    }
    return this.request(param)
  }

}