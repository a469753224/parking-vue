/* 导入模型层 */
import LockModel from './model'

/* 导入请求参数接口 TS接口类型 */
import { Unlock } from '../../interface/requestInterface/lock'

/* 导入网络请求接口 TS接口类型 */
import { RequestPromise } from '../../../types/http'

/**
 * 车锁模块-服务层
 */
export default class LockServer extends LockModel {
  /**
   * 解锁接口
   * @param {Unlock} data 请求参数 
   */
  unlock(data:Unlock):RequestPromise {
    return new Promise(async resolve => {
      const result = await this.unlockModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }
}
