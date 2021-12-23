/* 导入模型层 */
import PayModel from './model'

/* 导入请求参数接口 TS接口类型 */
import {
  Dopay,
  Minipay
} from '../../interface/requestInterface/pay'

/* 导入网络请求接口 TS接口类型 */
import { RequestPromise } from '../../../types/http'

/**
 * 支付模块-服务层
 */
export default class PayServer extends PayModel {

  /**
   * 微信支付接口
   * @param {Dopay} data 请求参数 
   */
  wxPay(data: Dopay): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.wxPayModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 小程序支付接口
   * @param {Minipay} data 请求参数 
   */
  minipay(data: Minipay): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.minipayModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }
}