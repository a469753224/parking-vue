/* 导入请求类 */
import Http from '../../../utils/http'

/* 导入请求参数接口 TS接口类型 */
import {
  WalletModifyPassword,
  GetWalletBalance,
  GetWalletParking
} from '../../interface/requestInterface/wallet'

/* 导入网络请求接口 TS接口类型 */
import { Method, RequestPromise } from '../../../types/http'

/**
 * 钱包模块-模型
 */
export default class WalletModel extends Http {
  /**
   * 修改支付密码接口
   * @param {WalletModifyPassword} data 请求参数 
   */
  walletModifyPasswordModel(data: WalletModifyPassword): RequestPromise {
    const url = 'wallet/walletModifyPassword'
    const param = {
      url,
      data,
      method: <Method>'POST'
    }
    return this.request(param)
  }

  /**
   * 我的钱包接口
   * @param {any} data 请求参数 
   */
  getWalletModel(data?: any): RequestPromise {
    const url = 'wallet/getWallet'
    const param = {
      url,
      data,
      method: <Method>'GET'
    }
    return this.request(param)
  }

  /**
   * 查询充值记录接口
   * @param {any} data 请求参数 
   */
  rechargeMoneyModel(data?: any): RequestPromise {
    const url = 'wallet/rechargeMoney'
    const param = {
      url,
      data,
      method: <Method>'GET'
    }
    return this.request(param)
  }

  /**
   * 钱包明细接口
   * @param {GetWalletBalance} data 请求参数 
   */
  getWalletBalanceModel(data: GetWalletBalance): RequestPromise {
    const url = 'wallet/getWalletBalance'
    const param = {
      url,
      data,
      method: <Method>'GET'
    }
    return this.request(param)
  }

  /**
   * 钱包明细接口
   * @param {GetWalletParking} data 请求参数 
   */
  getWalletParkingModel(data: GetWalletParking): RequestPromise {
    const url = 'wallet/getWalletParking'
    const param = {
      url,
      data,
      method: <Method>'GET'
    }
    return this.request(param)
  }
}