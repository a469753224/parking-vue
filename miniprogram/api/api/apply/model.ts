/* 导入请求类 */
import Http from '../../../utils/http'

/**导入请求参数接口 TS接口类型*/
import {
  Applicationsplace,
  Wxplace,
  Cancelplace,
  PlaceDelete
} from '../../interface/requestInterface/apply'

/**导入网络请求接口 TS接口类型*/
import { Method, RequestPromise } from '../../../types/http'

/**
 * 发布模块-模型层
 */
export default class ApplayModel extends Http {
  /**
   * 申请发布车位接口
   * @param {Applicationsplace} data 请求参数 
   */
  applicationsplaceModel(data: Applicationsplace): RequestPromise {
    const url = `release/applicationsplace`
    const param = {
      url,
      data,
      method: <Method>'POST'
    }
    return this.request(param)
  }

  /**
   * 取消发布申请接口
   * @param {Cancelplace} data 请求参数 
   */
  cancelplaceModel(data: Cancelplace): RequestPromise {
    const url = `release/cancelplace`
    const param = {
      url,
      data,
      method: <Method>'POST'
    }
    return this.request(param)
  }

  /**
   * 查看所有申请发布接口
   * @param {any} data 请求参数 
   */
  checkplaceModel(data?: any): RequestPromise {
    const url = `release/checkplace`
    const param = {
      url,
      data,
      method: <Method>'GET'
    }
    return this.request(param)
  }

  /**
   * 删除发布申请接口
   * @param {PlaceDelete} data 请求参数 
   */
  placeDeleteModel(data: PlaceDelete): RequestPromise {
    const url = `release/placeDelete`
    const param = {
      url,
      data,
      method: <Method>'POST'
    }
    return this.request(param)
  }

  /**
   * 发布车位
   * @param {Wxplace} data 请求参数 
   */
  wxplaceModel(data: Wxplace): RequestPromise {
    const url = `release/wxplace`
    const param = {
      url,
      data,
      method: <Method>'POST'
    }
    return this.request(param)
  }
}