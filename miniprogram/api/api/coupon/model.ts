/* 导入请求类 */
import Http from '../../../utils/http'

/* 导入请求参数接口 TS接口类型 */
import {
  ReceiveCoupon,
  UseCoupon,
  GetCouponUserById,
  ListUPC
} from '../../interface/requestInterface/coupon'

/* 导入网络请求接口 TS接口类型 */
import { Method, RequestPromise } from '../../../types/http'

/**
 * 优惠券模块-模型层
 */
export default class CouponModel extends Http {
  /**
   * 查询商家优惠劵待领取接口
   * @param {any} data 请求参数 
   */
  leadCouponModel(data: any): RequestPromise {
    const url = `coupon/leadCoupon`
    const param = {
      url,
      data,
      method: <Method>'GET'
    }
    return this.request(param)
  }

  /**
   * 用户查询自己是否有优惠劵
   * @param {any} data 请求参数 
   */
  listUserCouponModel(data: any): RequestPromise {
    const url = `coupon/listUserCoupon`
    const param = {
      url,
      data,
      method: <Method>'GET'
    }
    return this.request(param)
  }

  /**
   * 领取优惠劵接口
   * @param {ReceiveCoupon} data 请求参数 
   */
  receiveCouponModel(data: ReceiveCoupon): RequestPromise {
    const url = `coupon/receiveCoupon`
    const param = {
      url,
      data,
      method: <Method>'GET',
      loadSatus: true,
      loading: '领取中...'
    }
    return this.request(param)
  }

  /**
   * 用户使用优惠劵接口
   * @param {UseCoupon} data 请求参数 
   */
  useCouponModel(data: UseCoupon): RequestPromise {
    const url = `coupon/useCoupon`
    const param = {
      url,
      data,
      method: <Method>'GET'
    }
    return this.request(param)
  }

  /**
   * 优惠券详情
   * @param {GetCouponUserById} data 请求参数 
   */
  getCouponUserByIdModel(data: GetCouponUserById): RequestPromise {
    const url = `coupon/getCouponUserById`
    const param = {
      url,
      data,
      method: <Method>'GET'
    }
    return this.request(param)
  }

  /**
   * 根据状态获取停车卡
   * @param {ListUPC} data 请求参数
   */
  listUPCModel(data: ListUPC): RequestPromise {
    const url = 'coupon/listUPC'
    const param = {
      url,
      data,
      method: <Method>'GET'
    }
    return this.request(param)
  }

  /**
   * 获取生效中的停车券
   * @param {GetActingUPC} data 请求参数
   */
  getActingUPCModel(data?: any): RequestPromise {
    const url = 'coupon/getActingUPC'
    const param = {
      url,
      data,
      method: <Method>'GET'
    }
    return this.request(param)
  }

}