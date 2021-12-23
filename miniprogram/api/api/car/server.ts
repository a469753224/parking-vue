/**导入模型层 */
import CarModel from './model'

/**导入请求参数接口 TS接口类型*/
import {
  UserQueryDetails,
  ParkingDate,
  ParkingTimeModify,
  ModifyOpenState,
  LockDate,
  ListEstateDimension
} from '../../interface/requestInterface/car'

/**导入网络请求接口 TS接口类型*/
import { RequestPromise,ResponseData } from '../../../types/http'

/**导入工具类 */
import { getTime, repeatDesc, formatMinute } from '../../../utils/util'

/**车位开放状态 */
import { openStatus } from '../../../utils/status'
import { ListEstateDimensionResponseData, LockDateResponseData, ModifyOpenStateResponseData, UserQueryDetailsResponseData } from '../../interface/responseInterface/car'

/**
 * 车场详情-服务层
 */
export default class CarServer extends CarModel {
  /**
   * 车场详情
   * @param {UserQueryDetails} data 请求参数
   */
  userQueryDetails(data: UserQueryDetails): RequestPromise {
    return new Promise<ResponseData<UserQueryDetailsResponseData>>(async resolve => {
      let result = await this.userQueryDetailsModel(data)
      if (result) {
        if (result.code == 0) {
          let section = []
          const date = new Date()
          let b = getTime(`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${result.data.beginDate}:00`)
          let e = getTime(`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${result.data.endDate}:00`)
          section[0] = b
          section[1] = e
          result.data.section = section
        }
        resolve({ ...result })
      }
    })
  }

  /**
   * 根据车位编号获取车位开放时间
   * @param {ParkingDate} data 请求参数
   */
  parkingDate(data: ParkingDate): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.parkingDateModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 我的车位详情
   * @param {any} data 请求参数
   */
  myParking(data?: any): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.myParkingModel(data)
      if (result) {
        if (result.code == 0) {
          result.data.forEach((element: { status: any; state: any; openState: any; rental: any; rentalCycle: any; endDate: any; beginDate: any; lockerId: string; lockerIds: string }) => {
            element.status = openStatus(element.state, element.openState)
            element.rental = repeatDesc(element.rentalCycle)
            element.endDate = formatMinute(element.endDate)
            element.beginDate = formatMinute(element.beginDate)
            element.lockerId = `****${element.lockerIds.substr(-4)}`
          })
        }
        resolve({ ...result })
      }
    })
  }

  /**
   * 编辑开放时段接口
   * @param {ParkingTimeModify} data 请求参数
   */
  parkingTimeModify(data: ParkingTimeModify): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.parkingTimeModifyModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 编辑开放时段接口
   * @param {ModifyOpenState} data 请求参数
   */
  modifyOpenState(data: ModifyOpenState): RequestPromise {
    return new Promise<ResponseData<ModifyOpenStateResponseData>>(async resolve => {
      const result = await this.modifyOpenStateModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 根据锁id查车位开放时间
   * @param {LockDate} data 请求参数
   */
  lockDate(data: LockDate): RequestPromise {
    return new Promise<ResponseData<LockDateResponseData>>(async resolve => {
      const result = await this.lockDateModel(data)
      if (result) {
        const ruls = result.data.tipInfo.split(/\d/)
        console.log(ruls)
        result.data.tipInfo = ruls
        resolve({ ...result })
      }
    })
  }

  /**
   * 查询附近的小区POID
   * @param {ListEstateDimension} data 请求参数
   */
  listEstateDimension(data: ListEstateDimension): RequestPromise {
    return new Promise<ResponseData<ListEstateDimensionResponseData>>(async resolve => {
      const result = await this.listEstateDimensionModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }
}


