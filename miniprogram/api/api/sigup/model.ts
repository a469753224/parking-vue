/* 导入请求类 */
import Http from '../../../utils/http'

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

/**导入网络请求接口 TS接口类型*/
import { RequestPromise, Method } from '../../../types/http'

/**
 * 登录注册模块-模型层
 */
export default class SigupModel extends Http {

  /**
   * 账号密码登录接口
   * @param {Account} data 请求参数 
   */
  loginModel(data: Account): RequestPromise {
    let { username, password } = data
    const url = `login?username=${username}&password=${password}`
    const param = {
      url,
      data,
      token: false,
      method: <Method>'POST',
      loadStatus: true,
      loading: '登录中，请稍后~'
    }
    return this.request(param)
  }

  /**
     * 短信登录接口
     * @param {MsgLogin} data 请求参数 
     */
  msgLoginModel(data: MsgLogin): RequestPromise {
    const url = `user/msgLogin`
    const param = {
      url,
      data,
      token: false,
      method: <Method>'POST'
    }
    return this.request(param)
  }

  /**
   * 手机短信注册接口
   * @param {UserRegister} data 请求参数 
   */
  userRegisterModel(data: UserRegister): RequestPromise {
    const url = `user/userRegister`
    const param = {
      url,
      data,
      token: false,
      method: <Method>'POST'
    }
    return this.request(param)
  }


  /**
   * 登录小程序
   * @param {any} data 请求参数 
   */
  wxloginModel(data: any): RequestPromise {
    let { loadStatus, loading } = data
    const url = `wxlogin`
    const param = {
      url,
      data,
      token: false,
      method: <Method>'POST',
      loadStatus,
      loading
    }
    return this.request(param)
  }

  /**
   * 微信小程序绑定手机号码
   * @param {BindPhone} data 请求参数 
   */
  bindPhoneModel(data: BindPhone): RequestPromise {
    const url = `user/bindPhone`
    const param = {
      url,
      data,
      method: <Method>'POST'
    }
    return this.request(param)
  }

  /**
   * 退出登录
   */
  loginoutModel(): RequestPromise {
    const url = 'myMenu/logout'
    const param = {
      url,
      data: {},
      eject: true,
      method: <Method>'POST'
    }
    return this.request(param)
  }

  /**
   * 获取微信绑定手机号码
   * @param data 请求参数
   */
  getPhoneNumberModel(data: GetPhoneNumber) {
    const url = `wxphone`
    const param = {
      url,
      data,
      method: <Method>'POST'
    }
    return this.request(param)
  }

}