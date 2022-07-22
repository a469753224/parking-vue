/**
 * 登录注册模块响应数据接口
 */

/**
 * 账号密码登录接口
 * status 
 * token 
 */
export interface LoginResponseData {
  status: string
  token: string
}

/**
 * 获取用户微信绑定电话
 * phone 微信绑定电话
 */
export interface GetPhoneNumberResponseData {
  phone: string
}