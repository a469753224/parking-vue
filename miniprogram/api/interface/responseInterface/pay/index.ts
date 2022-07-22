/**
 * 支付模块响应数据接口
 */

/**
 * 根据订单号查询退款信息接口
 * id 退款Id
 * orderId 订单ID
 * serialNo 支付流水号
 * channel 支付渠道
 * amount 退款金额
 * applyState 1：申请中，2：审核中，3：退款成功
 * applyDate 申请退款日期
 * refundDate 退款成功日期
 */
export interface GitRefundResponseData {
  id: string
  orderId: string
  serialNo: string
  channel: string
  amount: number
  applyState: number
  applyDate: string
  refundDate: null
}

/**微信支付接口 */
export interface DopayResponseData {
  mypackage: string
  appid: string
  sign: string
  partnerid: string
  prepayid: string
  noncestr: string
  timestamp: string
}

/**微信小程序支付接口 */
export interface DopayResponseData {
  mypackage: string
  appid: string
  sign: string
  partnerid: string
  prepayid: string
  noncestr: string
  timestamp: string
}