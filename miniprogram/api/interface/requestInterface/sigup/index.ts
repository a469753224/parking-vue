/**
 * 登录注册模块求参数接口
 */

/**
 * 账号密码登录接口
 * username 账号
 * password 密码
 * token 令牌
 */
export interface Account {
  username: string | number
  password: string,
  token?: boolean
}

/**
 * 短信登录接口
 * phone 手机号
 * msg 验证码
 * token 令牌
 */
export interface MsgLogin {
  phone: string
  msg: string
  token?: boolean
}

/**
 * 手机短信注册接口
 * phone 手机号码
 * msg 短信验证码
 * password 注册密码
 * token 令牌
 */
export interface UserRegister {
  phone: string
  msg: string
  password: string
  token?: boolean
}

/**
 * 获取用户微信绑定电话
 * iv 加密算法的初始向量
 * encryptedData	包括敏感数据在内的完整用户信息的加密数据
 */
export interface GetPhoneNumber {
  iv: string
  code: string,
  encryptedData: string
}