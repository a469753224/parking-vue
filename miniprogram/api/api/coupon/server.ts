/* 导入模型层 */
import CouponModel from './model'

/* 导入请求参数接口 TS接口类型 */
import {
  ReceiveCoupon,
  UseCoupon,
  GetCouponUserById,
  ListUPC
} from '../../interface/requestInterface/coupon'

/* 导入网络请求接口 TS接口类型 */
import { RequestPromise, ResponseData } from '../../../types/http'

/* 导入工具类 */
import { formatDates, daysRemain, formatMoney } from '../../../utils/util'

/* 优惠券状态 */
import { couponStatus } from '../../../utils/status'
import { GetCouponUserByIdResponseData, LeadCouponResponseData, ListUPCResponseData, ListUserCouponResponseData } from '../../interface/responseInterface/coupon'

/**
 * 优惠券模块-服务层
 */
export default class CouponSercver extends CouponModel {
  /**
   * 查询商家优惠劵待领取接口
   * @param {any} data 请求参数 
   */
  leadCoupon(data?: any): RequestPromise {
    return new Promise<ResponseData<LeadCouponResponseData>>(async resolve => {
      const result = await this.leadCouponModel(data)
      if (result) {
        if (result.code == 0) {
          result.data.forEach((element: { state?: any; receive?: any; couponType?: any; type: any; endTime?: any; validEndTime?: any; beginTime?: any; validStartTime?: any; used?: any; withAmount?: any; usedAmount?: any }) => {
            element.state = 1
            element.receive = 0
            element.couponType = element.type;
            let { type, withAmount, usedAmount } = element
            element.endTime = formatDates(element.validEndTime)
            element.beginTime = formatDates(element.validStartTime)
            element.used = couponStatus(type, withAmount, usedAmount)
          })
        }
        resolve({ ...result })
      }
    })
  }

  /**
   * 用户查询自己是否有优惠劵
   * @param {any} data 请求参数 
   */
  listUserCoupon(data?: any): RequestPromise {
    return new Promise<ResponseData<ListUserCouponResponseData>>(async resolve => {
      const result = await this.listUserCouponModel(data)
      if (result) {
        if (result.code == 0) {
          result.data.forEach((element: { state: number,receive?: any; couponType?: any; type: any; endTime?: any; validEndTime?: any; beginTime?: any; validStartTime?: any; used?: any; withAmount?: any; usedAmount?: any }) => {
            element.receive = 0
            element.couponType = element.type;
            let { type, withAmount, usedAmount, validEndTime, validStartTime } = element
            element.endTime = formatDates(validEndTime)
            element.beginTime = formatDates(validStartTime)
            element.used = couponStatus(type, withAmount, usedAmount)
          })
        }
        resolve({ ...result })
      }
    })
  }

  /**
   * 领取优惠劵接口
   * @param {ReceiveCoupon} data 请求参数 
   */
  receiveCoupon(data: ReceiveCoupon): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.receiveCouponModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 用户使用优惠劵接口
   * @param {UseCoupon} data 请求参数 
   */
  useCoupon(data: UseCoupon): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.useCouponModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 优惠券详情
   * @param {GetCouponUserById} data 请求参数 
   */
  getCouponUserById(data: GetCouponUserById): RequestPromise {
    return new Promise<ResponseData<GetCouponUserByIdResponseData>>(async resolve => {
      const result = await this.getCouponUserByIdModel(data)
      if (result) {
        if (result.code == 0) {
          result.data.receive = 0
          result.data.couponType = result.data.type;
          let { type, withAmount, usedAmount, validEndTime, validStartTime } = result.data
          result.data.endTime = formatDates(validEndTime)
          result.data.beginTime = formatDates(validStartTime)
          result.data.used = couponStatus(type, withAmount, usedAmount)
        }
        resolve({ ...result })
      }
    })
  }

  /**
   * 根据状态获取停车卡
   * @param {ListUPC} data 请求参数
   */
  listUPC(data: ListUPC): RequestPromise {
    return new Promise<ResponseData<ListUPCResponseData>>(async resolve => {
      const result = await this.listUPC(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 获取生效中的停车券
   * @param {GetActingUPC} data 请求参数
   */
  getActingUPC<T>(data?: any): RequestPromise {
    return new Promise<ResponseData<T>>(async resolve => {
      const result = await this.getActingUPCModel(data)
      if (result) {
        result.data.forEach((element: { days: number; endTime: string, allowance: any }) => {
          Object.assign(element, { days: 0 })
          element.days = daysRemain(element.endTime)
          element.allowance = formatMoney(element.allowance)
        })
        resolve({ ...result })
      }
    })
  }
}