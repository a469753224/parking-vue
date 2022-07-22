/* 导入模型层 */
import HomeModel from './model'

/* 工具类导入 */
import { computedMinute, formatMoney, formatDate, formatMinute } from '../../../utils/util'

/* 导入状态类 */
import { status, orderStatus } from '../../../utils/status'

/* 导入网络请求接口 TS接口类型 */
import { RequestPromise, ResponseData } from '../../../types/http'

/* 导入请求参数接口 TS接口类型 */
import {
  CarLock,
  LockDate,
  ScanOrder,
  OrderBill,
  WXToFreeze,
  CreateOrder,
  OrderDelete,
  CancelPaking,
  OrederIdQuery,
  OrderSettlement,
  WXOrderToFreeze,
  ContinuationModify,
  GetWechatOrderDetail
} from '../../interface/requestInterface/home'
import {
  OrderBillResponseData,
  OrderQueryResponseData,
  ScanOrderResponseData,
  CreateOrderResponseData,
  OrederIdQueryResponseData,
  OrderSettlementResponseData,
  UserQueryOrderResponseData,
  WXOrderToFreezeResponseData
} from '../../interface/responseInterface/home'
import { LockDateResponseData } from '../../interface/responseInterface/car'

/**
 * 订单模块-服务层
 */
export default class HomeServer extends HomeModel {

  /**
   * 预留车位
   * @param {ScanOrder} data 请求参数 
   */
  scanOrder(data: ScanOrder): RequestPromise {
    return new Promise<ResponseData<ScanOrderResponseData>>(async resolve => {
      const result = await this.scanOrderModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 查询历史订单
   * @param {any} data 请求参数 
   */
  userQueryOrder(data?: any): RequestPromise {
    return new Promise<ResponseData<UserQueryOrderResponseData>>(async resolve => {
      let result = await this.userQueryOrderModel(data)
      if (result) {
        if (result.code == 0) {
          for (let item of result.data) {
            item.status = status(item.state)
            item.beginDate = formatMinute(item.beginTime)
            item.endDate = formatMinute(item.endTime)
          }
        }
        resolve({ ...result })
      }
    })
  }

  /**
   * 根据订单id查询订单信息
   * @param {OrederIdQuery} data 请求参数
   */
  orederIdQuery(data: OrederIdQuery): RequestPromise {
    return new Promise<ResponseData<OrederIdQueryResponseData>>(async resolve => {
      const result = await this.orederIdQueryModel(data)
      if (result) {
        if (result.code == 0) {
          result.data.status = orderStatus(result.data.state)
          result.data.enTime = formatMinute(result.data.endTime)
          result.data.beTime = formatMinute(result.data.beginTime)
          result.data.times = computedMinute(parseInt(result.data.total))
        }
        resolve({ ...result })
      }
    })
  }

  /**
   * 取消预订车位
   * @param {CancelPaking} data 请求参数
   */
  cancelPaking(data: CancelPaking): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.cancelPakingModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 解锁
   * @param {CarLock} data 请求参数 
   */
  carLock(data: CarLock): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.carLockModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 预留接口
   * @param {CreateOrder} data 请求参数 
   */
  createOrder(data: CreateOrder): RequestPromise {
    return new Promise<ResponseData<CreateOrderResponseData>>(async resolve => {
      const result = await this.createOrderModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * token获取订单接口
   * @param {any} data 请求参数 
   */
  orderQuery(data?: any): RequestPromise {
    return new Promise<ResponseData<OrderQueryResponseData>>(async resolve => {
      let result = await this.orderQueryModel(data)
      if (result) {
        if (result.code == 0) {
          switch (result.state) {
            case 0:
              result.status = '完成'
              break;
            case 1:
              result.status = '预留'
              break;
            case 2:
              result.status = '使用'
              break;
            case 3:
              result.status = '待支付'
              break;
            case 4:
              result.status = '取消'
              break;
            case 5:
              result.status = '超时'
              break;
          }
          result.data.total = computedMinute(result.data.total)
          result.data.lockerId = `****${result.data.lockerIds.substr(-4)}`
          result.data.enTime = formatMinute(result.data.endTime)
          result.data.beTime = formatMinute(result.data.beginTime)
          result.data.times = computedMinute(parseInt(result.data.total))
          result.data.currentExpenses = formatMoney(result.data.currentExpenses)
        }
        resolve({ ...result })
      }
    })
  }



  /**
   * 立即结算接口
   * @param {OrderSettlement} data 请求参数
   */
  orderSettlement(data: OrderSettlement): RequestPromise {
    return new Promise<ResponseData<OrderSettlementResponseData>>(async resolve => {
      const result = await this.orderSettlementModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 续时接口
   * @param {ContinuationModify} data 请求参数 
   */
  continuationModify(data: ContinuationModify): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.continuationModifyModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 根据订单id查询账单接口
   * @param {OrderBill} data 请求参数 
   */
  orderBill(data: OrderBill): RequestPromise {
    return new Promise<ResponseData<OrderBillResponseData>>(async resolve => {
      let result = await this.orderBillModel(data)
      if (result) {
        if (result.code == 0) {
          if (result.data != null) {
            result.data.times = result.data.orderWhen ? computedMinute(parseInt(result.data.orderWhen)) : 0
            result.data.timeouts = computedMinute(parseInt(result.data.timeout))
            result.data.discount = formatMoney(result.data.discount, '')
            result.data.timeoutCost = formatMoney(result.data.timeoutCost, '')
            result.data.pay = formatMoney(result.data.pay, '')
            result.data.creatTime = formatDate(result.data.addDate)
            result.data.benginResver = formatDate(result.data.addDate)
            result.data.payTime = formatDate(result.data.settlementDate)
            let { lockerIds } = result.data
            result.data.lockerId = `****${lockerIds.substr(-4)}`
          }
        }
        resolve({ ...result })
      }
    })
  }

  /**
   * 删除历史订单
   * @param {OrderDelete} data 请求参数 
   */
  orderDelete(data: OrderDelete): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.orderDeleteModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 微信支付接口
   * @param {any} data 请求参数 
   */
  wxPayOrder(data: any): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.wxPayOrderModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 车位开放时间
   * @param {LockDate} data 请求参数
   */
  lockDate(data: LockDate): RequestPromise {
    return new Promise<ResponseData<LockDateResponseData>>(async resolve => {
      let result = await this.lockDateModel(data)
      if (result) {
        if (result.code == 0) {
          result.data.endTime = formatMinute(result.data.endDate)
          result.data.beginTime = formatMinute(result.data.beginDate)
        }
        resolve({ ...result })
      }
    })
  }

  /**
   * 预支付扫码下单接口
   * @param {WXOrderToFreeze} data 
   */
  WXOrderToFreeze(data: WXOrderToFreeze): RequestPromise {
    const code: number[] = [0, 20]
    return new Promise<ResponseData<WXOrderToFreezeResponseData>>(async resolve => {
      let result = await this.WXOrderToFreezeModel(data)
      if (result) {
        if (code.indexOf(parseInt(result.code)) != -1) {
          result.data.orderStr = JSON.parse(result.data.orderStr)
        }
        resolve({ ...result })
      }
    })
  }

  wxToFreeze(data: WXToFreeze) {
    const code: number[] = [0, 20]
    return new Promise<ResponseData<WXOrderToFreezeResponseData>>(async resolve => {
      const result = await this.wxToFreezeModel(data)
      if (result) {
        if (code.indexOf(parseInt(result.code)) != -1) {
          result.data.orderStr = JSON.parse(result.data.orderStr)
        }
        resolve({ ...result })
      }
    })
  }

  creditPayToOrder(data: WXOrderToFreeze) {
    return new Promise<ResponseData<WXOrderToFreezeResponseData>>(async (resolve) => {
      const result = await this.creditPayToOrderModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 查询支付分授权状态
   * @param data 
   */
  checkPermissions(data?: any) {
    return new Promise<ResponseData<any>>(async (resolve) => {
      const result = await this.checkPermissionsModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 取消支付分订单
   * @param data 
   */
  cancelCreditPayOrde(data: any) {
    return new Promise<ResponseData<any>>(async (resolve) => {
      const result = await this.cancelCreditPayOrderModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 获取支付分订单参数
   */
  getWechatOrderDetail(data: GetWechatOrderDetail) {
    return new Promise<ResponseData>(async (resolve) => {
      const result = await this.getWechatOrderDetailModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

}