/**
 * 钱包模块求参数接口
 */

/**
 * 修改支付密码接口
 * msg 短信验证码
 * zpayPassword 再次支付密
 * payPassword 支付密码
 */
export interface WalletModifyPassword {
  msg: string
  zpayPassword: string
  payPassword: string
}

/**
 * 钱包明细接口
 * pageNum 需要查询的叶数，默认从1页开始一次查26行
 * transactionType 0全部1收入2支出
 */
export interface GetWalletBalance {
  pageNum:number
  transactionType: number
}

/**
 * 车位收益接口
 * pageNum 需要查询的页数，默认从1页开始一次查26行
 * transactionType 0查全部1查收入2查支出
 */
export interface GetWalletParking {
  pageNum: number
  transactionType: number
}