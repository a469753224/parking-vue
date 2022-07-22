/**
 * 优惠券模块求参数接口
 */

/**
 * 领取优惠劵接口
 * couponId 商家优惠劵Id
 */
export interface ReceiveCoupon {
  couponId: string
}

/**
 * 用户使用优惠劵接口
 * id 用户优惠劵Id
 */
export interface UseCoupon {
  id: string
}

/**
 * 优惠券详情接口
 * couponId 优惠券Id
 */
export interface GetCouponUserById {
  couponId: string
}

/**
 * 根据状态获取停车卡
 * status 1,生效中  2,已失效
 */
export interface ListUPC {
  status:number
}