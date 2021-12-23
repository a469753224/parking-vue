/* 导入模型层 */
import UserModel from './model'

/* 导入请求参数接口 TS接口类型 */
import {
  AddVehiclePlate,
  SetPlateDevault,
  DeletePlate,
  ModifyPassword,
  ModifyName,
  ForgetPasswordModify
} from '../../interface/requestInterface/user'

/* 导入网络请求接口 TS接口类型 */
import { RequestPromise, ResponseData } from '../../../types/http'

/* 导入工具类 */
import { formatMoney, isEmpty } from '../../../utils/util'
import { MyMenuInformationResponseData, SelectPlateAllResponseData } from '../../interface/responseInterface/user'

/**
 * 订单模块-服务层
 */
export default class UserServer extends UserModel {
  /**
   * 添加车辆接口
   * @param {AddVehiclePlate} data 请求参数 
   */
  addVehiclePlate(data: AddVehiclePlate): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.addVehiclePlateModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 设置默认车辆接口
   * @param {SetPlateDevault} data 请求参数 
   */
  setPlateDevault(data: SetPlateDevault): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.setPlateDevaultModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 删除车辆接口
   * @param {DeletePlate} data 请求参数 
   */
  deletePlate(data: DeletePlate): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.deletePlateModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 查询用户所有车辆接口
   * @param {any} data 请求参数 
   */
  selectPlateAll(data?: any): RequestPromise {
    return new Promise<ResponseData<SelectPlateAllResponseData>>(async resolve => {
      let result = await this.selectPlateAllModel(data)
      if (result) {
        if (result.code == 0) {
          let { data } = result
          let defau = {}
          data.forEach((element: { status?: any; proCity?: any; plate?: any; number?: any }) => {
            if (element.status == 1) {
              defau = element
            }
            element.proCity = element.plate.substring(0, 2)
            element.number = element.plate.substring(2, element.plate.length)
          })
          data = data.filter((element: { status: number }) => {
            if (element.status == 1) {
              return false
            }
            return true
          })
          !isEmpty(defau) && data.unshift(defau)
          result.data = data
        }
        resolve({ ...result })
      }
    })
  }

  /**
   * 我的导航栏信息接口
   * @param {any} data 请求参数 
   */
  myMenuInformation(data?: any): RequestPromise {
    return new Promise<ResponseData<MyMenuInformationResponseData>>(async resolve => {
      const result = await this.myMenuInformationModel(data)
      if (result) {
        result.data.totalBalance = formatMoney(result.data.totalBalance)
        result.data.plate = result.data.plate == null ? '--' : result.data.plate
        resolve({ ...result })
      }
    })
  }

  /**
   * 修改密码接口
   * @param {ModifyPassword} data 请求参数 
   */
  modifyPassword(data: ModifyPassword): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.modifyPasswordModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 修改昵称
   * @param {ModifyName} data 请求参数 
   */
  modifyName(data: ModifyName): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.modifyNameModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 修改昵称
   * @param {ForgetPasswordModify} data 请求参数 
   */
  forgetPasswordModify(data: ForgetPasswordModify): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.forgetPasswordModifyModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }
}