/**
 * 用户模块响应数据接口
 */

/**
 * 查询用户所有车辆接口
 * newEnergy 新能源标识。1：新能源；0：非新能源
 * plate 车牌号码
 * id 车牌ID
 * userId 用户ID
 * status 默认车牌标识。1：默认车牌；0：非默认车牌
 */
export interface SelectPlateAllResponseData {
  newEnergy: number
  plate: string[]
  id: number
  userId: number
  status: number
}

/**
 * 我的导航栏信息接口
 * totalBalance 总余额
 * phone 手机号
 * integral 积分
 * plate 默认车辆
 */
export interface MyMenuInformationResponseData {
  totalBalance: number
  phone: string
  integral: number
  plate: string
}