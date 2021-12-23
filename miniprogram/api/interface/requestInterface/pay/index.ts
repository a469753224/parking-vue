/**
 * 支付模块求参数接口
 */

/**
 * 申请退款接口
 * orderId 订单ID
 * reason 申请退款理由
 * image 上传图片凭证
 */
export interface ApplyRefund {
  orderId: string
  reason: string
  image: any
}

/**
 * 根据订单号查询退款信息接口
 * orderId 订单Id
 */
export interface GitRefund {
  orderId: string
}

/**
 * 取消退款接口
 * id 退款Id
 */
export interface RefundModifyState {
  id: string
}

/**
 * 微信支付接口
 * orderId 订单Id
 */
export interface Dopay {
  orderId: string
}

/**
 * 小程序支付接口
 * orderId 订单ID
 */
export interface Minipay {
  orderId: string
}