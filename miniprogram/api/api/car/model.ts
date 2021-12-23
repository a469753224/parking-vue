/* 导入请求类 */
import Http from '../../../utils/http'

/* 导入请求参数接口 TS接口类型 */
import {
  UserQueryDetails,
  ParkingDate,
  ParkingTimeModify,
  ModifyOpenState,
  LockDate,
  ListEstateDimension
} from '../../interface/requestInterface/car'

/* 导入网络请求接口 TS接口类型 */
import { Method, RequestPromise } from '../../../types/http'

/**
 * 车场详情-模型层
 */
export default class CarModel extends Http {
  /**
   * 车场详情
   * @param {UserQueryDetails} data 请求参数
   */
  userQueryDetailsModel(data: UserQueryDetails): RequestPromise {
    const url = `release/userQueryDetails`
    const param = {
      url,
      data,
      method: <Method>'GET'
    }
    return this.request(param)
  }

  /**
   * 根据车位编号获取车位开放时间
   * @param {ParkingDate} data 请求参数
   */
  parkingDateModel(data: ParkingDate): RequestPromise {
    const url = `parking/parkingDate`
    const param = {
      url,
      data,
      method: <Method>'GET'
    }
    return this.request(param)
  }

  /**
   * 我的车位详情
   * @param {any} data 请求参数
   */
  myParkingModel(data?: any): RequestPromise {
    const url = `parking/myParking`
    const param = {
      url,
      data,
      method: <Method>'GET'
    }
    return this.request(param)
  }

  /**
   * 编辑开放时段接口
   * @param {ParkingTimeModify} data 请求参数
   */
  parkingTimeModifyModel(data: ParkingTimeModify): RequestPromise {
    const url = `parking/parkingTimeModify`
    const param = {
      url,
      data,
      method: <Method>'POST'
    }
    return this.request(param)
  }

  /**
   * 车位开放关闭接口
   * @param {ModifyOpenState} data 请求参数
   */
  modifyOpenStateModel(data: ModifyOpenState): RequestPromise {
    const url = `parking/modifyOpenState`
    const param = {
      url,
      data,
      method: <Method>'POST'
    }
    return this.request(param)
  }

  /**
   * 根据锁id查车位开放时间
   * @param {LockDate} data 请求参数
   */
  lockDateModel(data: LockDate): RequestPromise {
    const url = `parking/lockDate`
    const param = {
      url,
      data,
      method: <Method>'GET'
    }
    return this.request(param)
  }

  /**
   * 查询附近的小区POID
   * @param {ListEstateDimension} data 请求参数
   */
  listEstateDimensionModel(data: ListEstateDimension): RequestPromise {
    const url = `release/listEstateDimension`
    const param = {
      url,
      data,
      method: <Method>'POST'
    }
    return this.request(param)
  }
}