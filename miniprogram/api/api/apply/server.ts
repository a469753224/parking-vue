/* 导入模型层 */
import ApplayModel from './model'

/* 导入请求参数接口 TS接口类型 */
import {
  Applicationsplace,
  Wxplace,
  Cancelplace,
  PlaceDelete
} from '../../interface/requestInterface/apply'

/* 导入网络请求接口 TS接口类型 */
import { RequestPromise,ResponseData } from '../../../types/http'

/* 导入工具类 */
import { releaseState } from '../../../utils/status'
import { formatDate } from '../../../utils/util'
import { ApplicationsplaceResponseData } from '../../interface/responseInterface/apply'

/**
 * 发布模块-服务层
 */
export default class ApplayServer extends ApplayModel {
  /**
   * 申请发布车位接口
   * @param {Applicationsplace} data 请求参数 
   */
  applicationsplace(data: Applicationsplace): RequestPromise {
    return new Promise<ResponseData<ApplicationsplaceResponseData>>(async resolve => {
      const result = await this.applicationsplaceModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 取消发布申请接口
   * @param {Cancelplace} data 请求参数 
   */
  cancelplace(data: Cancelplace): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.cancelplaceModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 查看所有申请发布接口
   * @param {any} data 请求参数 
   */
  checkplace(data?: any): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.checkplaceModel(data)
      if (result) {
        if (result.code == 0) {
          result.data.forEach((element: { state: any; releaseState: any; createDate: any }) => {
            element.state = releaseState(element.releaseState)
            element.createDate = formatDate(element.createDate, '/')
          })
        }
        resolve({ ...result })
      }
    })
  }

  /**
   * 删除发布申请接口
   * @param {PlaceDelete} data 请求参数 
   */
  placeDelete(data: PlaceDelete): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.placeDeleteModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 发布车位
   * @param {Wxplace} data 请求参数 
   */
  wxplace(data: Wxplace): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.wxplaceModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }
}