/* 导入请求类 */
import Http from '../../../utils/http'

/* 导入请求参数接口 TS接口类型 */
import { Unlock } from '../../interface/requestInterface/lock'

/* 导入网络请求接口 TS接口类型 */
import { Method,RequestPromise } from '../../../types/http'

/**
 * 车锁模块-模型层
 */
export default class LockModel extends Http {
  /**
   * 解锁接口
   * @param {Unlock} data 请求参数 
   */
  unlockModel(data: Unlock):RequestPromise {
    const url = `https://lock.liuchewei.com/manageLock/unlock`
    const param = {
      url,
      data,
      method: <Method>'GET',
      overall: true,
      loadStatus: true,
      loading: '解锁中...',
    }
    return this.request(param)
  }
}