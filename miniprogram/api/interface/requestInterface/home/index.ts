/**
 * 订单模块求参数接口
 */

/**
 * 预留接口
 * estateId 小区Id
 * plate 车牌
 * beginTime 开始时间传日期类型精准到秒
 * endTime 停止时间传日期类型精准到秒
 */
export interface CreateOrder {
  estateId: string
  plate: string
  beginTime: string | number
  endTime: string | number
}

/**
 * 查看历史订单接口
 * page 分页
 */
export interface userQueryOrder {
  page: number
}

/**
 * 取消预留接口
 * orderId 订单编号
 */
export interface CancelPaking {
  orderId: string
}

/**
 * 降下车位锁接口
 * orderId 订单Id
 * lockerIds 锁的编号
 */
export interface CarLock {
  orderId: string
  lockerIds: string
}

/**
 * 立即结算接口
 * orderId 订单Id
 */
export interface OrderSettlement {
  orderId: string
}

/**
 * 根据订单id查询账单接口
 * orderId 订单Id
 */
export interface OrderBill {
  orderId: string
}

/**
 * 续时接口
 * orderId 订单号
 * endTime 时间毫秒
 */
export interface ContinuationModify {
  orderId: string
  endTime: string
}

/**
 * 微信支付接口
 * orderId 订单号
 */
export interface Dopay {
  orderId: string
}

/**
 * 根据锁id查车位开放时间
 * lockId 锁id
 */
export interface LockDate {
  lockId: string
}

/**
 * 根据订单ID查询订单接口
 * orderId订单Id
 */
export interface OrederIdQuery {
  orderId: string
}

/**
 * 删除历史订单
 * orderId 订单编号
 */
export interface OrderDelete {
  orderId: string
}

/**
 * 扫码下单接口
 * lockId 锁id
 * endTime 结束时间传时间戳
 * beginTime 开始时间传时间戳
 * plate 车牌号
 */
export interface ScanOrder {
  lockId: string
  endTime: number | string
  beginTime: number | string
  plate: string
}

/**
 * 微信预支付扫码下单接口
 * lockId 锁id
 * endTime 结束时间传时间戳
 * beginTime 结束时间传时间戳
 * plate 车牌号
 * payType 小程序传wx安卓传app
 */
export interface WXOrderToFreeze {
  lockId: string
  endTime: number | string
  beginTime: number | string
  plate: string
  payType: string
}

export interface AliPayFreeze {
  estateId: string
  plate: string
  beginTime: string
  endTime: string
}

export interface WXToFreeze {
  estateId: string
  plate: string
  beginTime: string
  endTime: string
  payType: string
}

export interface GetWechatOrderDetail {
  orderId: string
}