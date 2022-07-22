/**
 * 优惠券模块响应数据接口
 */

/**
 * 查询商家优惠劵待领取接口
 * couponId 优惠卷ID
 * type 优惠劵类型 1立减卷 2折扣卷 
 * merchants 商家Id
 * validStartTime 使用开始时间
 * validEndTime 使用结束时间
 * withAmount 满多少减0金额代表任意卷大于一都是满多少减
 * usedAmount 减免金额
 * stoName 门店名称
 * stoAddr 门店地址
 */
export interface LeadCouponResponseData {
  couponId: string[]
  type: number
  merchants: number
  validStartTime: number
  validEndTime: number
  withAmount: number
  usedAmount: number
  stoName: string
  stoAddr: string
}

/**
 * 用户查询自己是否有优惠劵
 * type 优惠劵类型 1立减卷 2折扣卷 
 * validStartTime 优惠劵开始时间
 * validEndTime 优惠劵结束时间
 * withAmount 0代表任意卷超过0就是多少减多少
 * usedAmount 用卷金额
 * stoName 商家名字
 * stoAddr 商家地址
 * state 优惠卷的状态,1待使用，2使用过了,3过期了
 * id 优惠劵Id
 * stoPhone 商家电话
 */
export interface ListUserCouponResponseData {
  type: number
  validStartTime: number
  validEndTime: number
  withAmount: number
  usedAmount: number
  stoName: string
  stoAddr: string
  state: string
  id: string
  stoPhone: string
}

/**
 * 优惠券详情接口
 * type 券类型
 * validStartTime 使用起始时间
 * validEndTime 使用结束时间
 * withAmount 0代表任意卷超过0就是多少减多少
 * usedAmount 用卷金额
 * stoName 门店名称
 * stoAddr 门店地址
 * state 优惠券使用状态，1未使用，2已使用，3过期
 * stoPhone 门店电话
 * couponNumber 券编号
 * id 领到的券的id
 */
export interface GetCouponUserByIdResponseData {
  type: number
  validStartTime: number
  validEndTime: number
  withAmount: number
  usedAmount: number
  stoName: string
  stoAddr: string
  state: string
  stoPhone: string
  couponNumber: string
  id: string
}

/**
 * 根据状态获取停车卡
 * id 自增id
 * userId 用户id
 * parkingCouponId 
 * senderId 
 * status 状态
 * timesRemain 剩余次数
 * beginTime 有效期开始时间
 * endTime 有效期结束时间
 * createTime 创建时间
 */
export interface ListUPCResponseData {
  id:number
  userId: number
  parkingCouponId: string
  senderId: number
  status: number
  timesRemain: number
  beginTime: string
  endTime: string
  createTime: string
}

/**
 * 获取生效中的停车券
 * id 自增id
 * userId 用户id
 * parkingCouponId 
 * senderId 
 * status 状态
 * timesRemain 剩余次数
 * beginTime 有效期开始时间
 * endTime 有效期结束时间
 * createTime 创建时间
 */
export interface GetActingUPCResponseData {
  id:number
  userId: number
  parkingCouponId: string
  senderId: number
  status: number
  timesRemain: number
  beginTime: string
  endTime: string
  createTime: string
}