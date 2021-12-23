/* 导入模型层 */
import SigupModel from './model'

/* 导入请求参数接口 TS接口类型 */
import {
  Account,
  GetPhoneNumber,
  MsgLogin,
  UserRegister
} from '../../interface/requestInterface/sigup'
import {
  BindPhone
} from '../../interface/requestInterface/user'

/* 导入网络请求接口 TS接口类型 */
import { RequestPromise } from '../../../types/http'

/* 导入工具类 */
import { setStorages } from '../../../utils/util'

/**
 * 登录注册模块-服务层
 */
export default class SigupServer extends SigupModel {

  /**
   * 账号密码登录接口
   * @param {Account} data 请求参数 
   */
  account(data: Account): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.loginModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
     * 短信登录接口
     * @param {MsgLogin} data 请求参数 
     */
  msgLogin(data: MsgLogin): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.msgLoginModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 手机短信注册接口
   * @param {UserRegister} data 请求参数 
   */
  userRegister(data: UserRegister): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.userRegisterModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }


  /**
   * 登录小程序
   * @param {any} data 请求参数
   */
  wxlogin(data: any): RequestPromise {
    return new Promise(async resolve => {
      wx.login({
        timeout: 10000,
        success: async res => {
          if (res.code) {
            let code = res.code
            const param = { code, ...data }
            wx.setStorageSync('code', res.code)
            const result = await this.wxloginModel(param)
            if (result) {
              if (result.code == 0) {
                let { token, phoneState } = result
                const param = { token, phoneState }
                setStorages(param)
              }
              resolve({ ...result })
            }
          }
        }
      })
    })
  }

  /**
   * 微信小程序绑定手机号码
   * @param {BindPhone} data 请求参数 
   */
  bindPhone(data: BindPhone): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.bindPhoneModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 退出登录
   */
  loginout(): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.loginoutModel()
      if (result) {
        resolve({ ...result })
      }
    })
  }

  /**
   * 获取微信绑定手机号码
   * @param data 请求参数
   */
  getPhoneNumber(data: GetPhoneNumber): RequestPromise {
    return new Promise(async resolve => {
      const result = await this.getPhoneNumberModel(data)
      if (result) {
        resolve({ ...result })
      }
    })
  }

}