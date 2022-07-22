/**
 * 订单模块响应数据接口
 */

import { Wxpay } from "../../requestInterface/wxpay";

/**
 * token获取订单接口
 * placeId 车位Id
 * contactsName 联系人
 * phone 电话
 * street 区道
 * placeAddress 地址
 * placeNumbering 车位编号
 * lockerIds 锁编号
 * orderId 订单编号
 * currentExpenses 总金额
 * beginTime 开始时间
 * endTime 停止时间
 * state 0完成状态1预留状态2使用状态3待支付4取消5超时
 * billingRules 计费规则
 * total 总时长
 */
export interface OrderQueryResponseData {
  placeId: string
  contactsName: string
  phone: string
  street: string
  placeAddress: string
  placeNumbering: string
  lockerIds: string
  orderId: string
  currentExpenses: string
  beginTime: string
  endTime: string
  state: string
  billingRules: number
  total: string
}

/**
 * 查看历史订单接口
 * orderId 订单Id
 * beginTime 开始时间
 * endTime 结束时间
 * state 0完成状态1预留状态2使用状态3待支付4取消
 * price 消费金额
 * placeId 车位Id
 * street 区道
 * placeAddress 地址
 * estateId 小区Id
 */
export interface UserQueryOrderResponseData {
  orderId: string[]
  beginTime: number
  endTime: number
  state: string[]
  price: number
  placeId: string[]
  street: string
  placeAddress: string
  estateId: string
}

/**
 * 立即结算接口
 * placeId 车位Id
 * placeAddress 车位地址
 * placeNumbering 车位编号
 * lockerIds 车位锁编号
 * addDate 订单创建时间
 * orderId 订单Id
 * plate 车牌号码
 * billingRules 计费规则
 * settlementDate 结算时间
 * orderWhen 总时长按照分计算708分
 * timeout 超时时长按照分计算
 * orderNumbering 订单编号
 * timeoutCost 超时费用
 * cost 原定费用
 * total 总费用
 * expenseType 费用类型1按分钟收费2一次性收费3其他收费
 */
export interface OrderSettlementResponseData {
  placeId: string
  placeAddress: string
  placeNumbering: string
  lockerIds: string
  addDate: number
  orderId: string
  plate: string
  billingRules: number
  settlementDate: number
  orderWhen: number
  timeout: number
  orderNumbering: string
  timeoutCost: number
  cost: number
  total: number
  expenseType: number
}

/**
 * 根据订单id查询账单接口
 * placeId 车位Id
 * placeAddress 车位位置
 * placeNumbering 车位编号
 * lockerIds 车位锁编号
 * addDate 订单创建时间
 * orderId 订单Id
 * plate 车牌号
 * settlementDate 结算时间
 * orderWhen 总时长
 * timeout 超时时长
 * orderNumbering 订单编号
 * timeoutCost 超时费用
 * cost 原定费用
 * total 总费用
 * payChannel 支付方式 如果未支付这个字段没有或者空
 * payDate 支付时间 如果未支付这个字段没有或者空
 * billingRules 计费价格
 * expenseType 费用类型1按分钟收费2一次性收费3其他收费
 */
export interface OrderBillResponseData {
  placeId: string
  placeAddress: string
  placeNumbering: string
  lockerIds: string
  addDate: number
  orderId: string
  plate: string
  settlementDate: number
  orderWhen: number
  timeout: number
  orderNumbering: string
  timeoutCost: number
  cost: number
  total: number
  payChannel: string
  payDate: number
  billingRules: number
  expenseType: number
}

/**
 * 根据订单ID查询订单接口
 * placeId 车位Id
 * contactsName 联系人
 * phone 联系电话
 * street 小区
 * state 状态
 * placeAddress 地址
 * placeNumbering 车位编号
 * lockerIds 车位锁
 * orderId 订单Id
 * currentExpenses 实实费用
 * beginTime 实实费用
 * endTime 结束时间
 * billingRules 计费规则
 * expenseType 费用类型1按分钟收费2一次性收费
 */
export interface OrederIdQueryResponseData {
  placeId: string
  contactsName: string
  phone: string
  street: string
  state: number
  placeAddress: string
  placeNumbering: string
  lockerIds: string
  orderId: string
  currentExpenses: number
  beginTime: number
  endTime: number
  billingRules: number
  expenseType: string
}

/**
 * 扫码下单接口
 * placeId 车位id
 * contactsName 联系人
 * phone 联系电话
 * street 区道
 * state 订单状态
 * placeAddress 车位地址
 * placeNumbering 车位编号
 * lockerIds 车锁编号
 * orderId 订单Id
 * currentExpenses 实时费用
 * billingRules 计费规则
 * plate 车牌号
 * total 总时长
 * beginTime 开始时间
 * endTime 结束时间
 * expenseType 费用类型：1按分钟收费2一次性收费3其他收费
 */
export interface ScanOrderResponseData {
  placeId: string
  contactsName: string
  phone: string
  street: string
  state: number
  placeAddress: string
  placeNumbering: string
  lockerIds: string
  orderId: string
  currentExpenses: number
  billingRules: number
  plate: string
  total: number
  beginTime: number
  endTime: number
  expenseType: string
}

/**
 * 微信预支付扫码下单接口
 * placeId 车位Id
 * contactsName 联系人
 * phone 联系号码
 * street 小区名字
 * state 0完成状态1预留状态2使用状态3待支付4取消5超时7预支付
 * placeNumbering 车位编号
 * placeAddress 车位地址
 * lockerIds 车锁编号
 * orderId 订单Id
 * currentExpenses 实时费用
 * billingRules 收费金额
 * expenseType 费用类型：1按分钟收费2一次性收费3其他收费
 * plate 车牌号
 * total 总时长
 * orderStr 微信返回的支付参数
 * beginTime 开始时间
 * endTime 结束时间
 */
export interface WXOrderToFreezeResponseData {
  placeId: string
  contactsName: string
  phone: string
  street: string
  state: number
  placeNumbering: string
  placeAddress: string
  lockerIds: string
  orderId: string
  currentExpenses: number
  billingRules: number
  expenseType: number
  plate: string
  total: number
  orderStr: Wxpay
  beginTime: number
  endTime: number
}

/**
 * 预留接口
 * placeId 车位Id
 * contactsName 联系人
 * phone 电话
 * street 小区
 * state 0完成状态1预留状态2使用状态3待支付4取消5超时
 * placeAddress 地址
 * placeNumbering 车位编号
 * placeLock 车位锁编号
 * orderId 订单Id
 * currentExpenses 实时费用
 * billingRules 计费规则
 * plate 车牌
 * total 时长
 * beginTime 开始时间
 * endTime 停止时间
 */
export interface CreateOrderResponseData {
  placeId: string
  contactsName: string
  phone: string
  street: string
  state: string
  placeAddress: string
  placeNumbering: string
  placeLock: string
  orderId: string
  currentExpenses: string
  billingRules: string
  plate: string
  total: number
  beginTime: number
  endTime: number
}