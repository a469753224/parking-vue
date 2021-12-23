/**
 * 车位模块求参数接口
 */

/**
 * 车场详情接口 
 * estateId 小区ID
 */
export interface UserQueryDetails {
  estateId:string
}

/**
 * 查询车位开放时间接口
 * placeId 车位Id
 */
export interface ParkingDate {
  placeId:string
}

/**
 * 编辑开放时段接口接口
 * beginDate 修改开放时间
 * endDate 修改关闭时间
 * rentalCycle 每周时间1代表星期1以此类推星期天是7
 * placeId 车位Id
 */
export interface ParkingTimeModify {
  beginDate:string | number
  endDate:string | number
  rentalCycle: any
  placeId:string
}

/**
 * 车位开放关闭接口
 * placeId 车位Id
 * openState 0开发1不开放
 */
export interface ModifyOpenState {
  placeId:string
  openState:number
}

/**
 * 根据锁id查车位开放时间接口
 * lockId 锁id
 */
export interface LockDate {
  lockId: string
}

/**
 * 查询附近的小区POID接口
 * latitude 纬度
 * longitude 经度
 * range 多少公里1代表1公里2代表2公里
 */
export interface ListEstateDimension {
  latitude: number
  longitude: number
  range: number
}