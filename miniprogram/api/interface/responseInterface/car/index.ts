/**
 * 车位模块响应数据接口
 */

/**
 * 车场详情接口 
 * estateId  小区ID
 * beginDate  开始时间
 * endDate  停止时间
 * name 小区名字
 * streetAddress  小区地址
 * parkingConunt  车位总数
 * cost 小区费用
 * expenseType  收费类型:1按分钟收费2一次性收费
 * estateUrl  小区图片地址
 */
export interface UserQueryDetailsResponseData {
  estateId: string
  beginDate: string
  endDate: string
  name: string
  streetAddress: string
  parkingConunt: number
  cost: number
  expenseType: number
  estateUrl: string
}

/**
 * 查询车位开放时间接口 
 * endDate  开放结束时间
 * beginDate  开放开始时间
 */
export interface ParkingDateResponseData {
  endDate: number
  beginDate: number
}

/**
 * 车位开放关闭接口 
 * openState  0开发1不开放
 */
export interface ModifyOpenStateResponseData {
  openState: number
}

/**根据锁id查车位开放时间接口 */
export interface LockDateResponseData {
  beginDate: number
  billingRules: number
  endDate: number
  expenseType: string
}

/**查询附近的小区POID接口 */
export interface ListEstateDimensionResponseData {
  estateId: string[]
}