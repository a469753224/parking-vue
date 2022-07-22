/* 导入请求类 */
import Http from '../../../utils/http'

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
import { Method, RequestPromise } from '../../../types/http'

/**
 * 用户模块-模型层
 */
export default class UserModel extends Http {
  /**
     * 添加车辆接口
     * @param {AddVehiclePlate} data 请求参数 
     */
  addVehiclePlateModel(data: AddVehiclePlate): RequestPromise {
    const url = `myMenu/addVehiclePlate`
    const param = {
      url,
      data,
      method: <Method>'POST'
    }
    return this.request(param)
  }

  /**
   * 设置默认车辆接口
   * @param {SetPlateDevault} data 请求参数 
   */
  setPlateDevaultModel(data: SetPlateDevault): RequestPromise {
    const url = `myMenu/setPlateDevault`
    const param = {
      url,
      data,
      method: <Method>'POST'
    }
    return this.request(param)
  }

  /**
   * 删除车辆接口
   * @param {DeletePlate} data 请求参数 
   */
  deletePlateModel(data: DeletePlate): RequestPromise {
    const url = `myMenu/deletePlate`
    const param = {
      url,
      data,
      method: <Method>'POST'
    }
    return this.request(param)
  }

  /**
   * 查询用户所有车辆接口
   * @param {any} data 请求参数 
   */
  selectPlateAllModel(data: any): RequestPromise {
    const url = `myMenu/selectPlateAll`
    const param = {
      url,
      data,
      method: <Method>'GET'
    }
    return this.request(param)
  }

  /**
   * 我的导航栏信息接口
   * @param {any} data 请求参数 
   */
  myMenuInformationModel(data: any): RequestPromise {
    const url = `myMenu/myMenuInformation`
    const param = {
      url,
      data,
      method: <Method>'GET'
    }
    return this.request(param)
  }

  /**
   * 修改密码接口
   * @param {ModifyPassword} data 请求参数 
   */
  modifyPasswordModel(data: ModifyPassword): RequestPromise {
    const url = `user/modifyPassword`
    const param = {
      url,
      data,
      method: <Method>'POST'
    }
    return this.request(param)
  }

  /**
   * 修改昵称
   * @param {ModifyName} data 请求参数 
   */
  modifyNameModel(data: ModifyName): RequestPromise {
    const url = `myMenu/modifyName`
    const param = {
      url,
      data,
      method: <Method>'POST'
    }
    return this.request(param)
  }

  /**
   * 修改昵称
   * @param {ForgetPasswordModify} data 请求参数 
   */
  forgetPasswordModifyModel(data: ForgetPasswordModify): RequestPromise {
    const url = `user/forgetPasswordModify`
    const param = {
      url,
      data,
      method: <Method>'POST'
    }
    return this.request(param)
  }
}