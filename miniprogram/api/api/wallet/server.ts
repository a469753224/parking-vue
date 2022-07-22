/* 导入模型层 */
import WalletModel from './model'

/* 导入请求参数接口 TS接口类型 */
import {
  WalletModifyPassword,
  GetWalletBalance,
  GetWalletParking
} from '../../interface/requestInterface/wallet'

/* 导入网络请求接口 TS接口类型 */
import { RequestPromise, ResponseData } from '../../../types/http'

/* 导入工具类 */
import { formatDate, formatMoney } from '../../../utils/util'
import { GetWalletBalanceResponseData, GetWalletParkingResponseData, GetWalletResponseData } from '../../interface/responseInterface/wallet'

/**
 * 钱包模块-服务层
 */
export default class WalletServer extends WalletModel {
  /**
     * 修改支付密码接口
     * @param {WalletModifyPassword} data 请求参数 
     */
  walletModifyPassword(data: WalletModifyPassword): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.walletModifyPasswordModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 我的钱包接口
   * @param {any} data 请求参数 
   */
  getWallet(data?: any): RequestPromise {
    return new Promise<ResponseData<GetWalletResponseData>>(async resolve => {
      const result = await this.getWalletModel(data)
      if (result) {
        result.data.balance = formatMoney(result.data.balance)
        result.data.totalBalance = formatMoney(result.data.totalBalance)
        result.data.profitBalance = formatMoney(result.data.profitBalance)
        resolve({ ...result })
      }
    })
  }

  /**
   * 查询充值记录接口
   * @param {any} data 请求参数 
   */
  rechargeMoney(data?: any): RequestPromise {
    return new Promise(async resolve => {
      let result = await this.rechargeMoneyModel(data)
      if (result) {
        if (result.code == 0) {
          result.data.forEach((elements: { date: any; createDate: any; accountingAmount: string }) => {
            elements.date = formatDate(elements.createDate)
            elements.accountingAmount = formatMoney(elements.accountingAmount)
          })
        }
        resolve({ ...result })
      }
    })
  }

  /**
   * 钱包明细接口
   * @param {GetWalletBalance} data 请求参数 
   */
  getWalletBalance(data: GetWalletBalance): RequestPromise {
    return new Promise<ResponseData<GetWalletBalanceResponseData>>(async resolve => {
      const result = await this.getWalletBalanceModel(data)
      if (result) {
        result.data.balance = formatMoney(result.data.balance)
        result.data.totalBalance = formatMoney(result.data.totalBalance)
        result.data.profitBalance = formatMoney(result.data.profitBalance)
        resolve({ ...result })
      }
    })
  }

  /**
   * 车位收益
   * @param {GetWalletParking} data 请求参数 
   */
  getWalletParking(data: GetWalletParking): RequestPromise {
    return new Promise<ResponseData<GetWalletParkingResponseData>>(async resolve => {
      let result = await this.getWalletParkingModel(data)
      if (result) {
        result.data.balance = formatMoney(result.data.balance)
        result.data.totalBalance = formatMoney(result.data.totalBalance)
        result.data.profitBalance = formatMoney(result.data.profitBalance)
        resolve({ ...result })
      }
    })
  }
}
