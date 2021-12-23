/**
 * 钱包模块响应数据接口
 */

/**
 * 我的钱包接口
 * walletId 钱包Id
 * createDate 钱包创建时间
 * state 1正常状态2异常不可用状态
 * profitBalance 盈利金额
 * totalBalance 总金额
 * balance 余额
 */
export interface GetWalletResponseData {
  walletId: string
  createDate: number
  state: number
  profitBalance: number
  totalBalance: number
  balance: number
}

/**
 * 查询充值记录接口
 * flowingNumbers 流水单号
 * transactionType 收支类型：1收入2支出
 * createDate 交易时间
 * accountingAmount 金额
 * remarks 备注
 */
export interface RechargeMoneyResponseData {
  flowingNumbers: string[]
  transactionType: number
  createDate: number
  accountingAmount: number
  remarks: string
}

/**
 * 钱包明细接口
 * walletId 钱包Id
 * state 钱包状态1正常2异常
 * profitBalance 盈利金额
 * totalBalance 总余额
 * balance 余额
 * flowingWaterVos 账单信息
 */
export interface GetWalletBalanceResponseData {
  walletId: string
  state: number
  profitBalance: number
  totalBalance: number
  balance: number
  flowingWaterVos: FlowingWaterVos
}

/**
 * flowingNumbers 流水单号
 * transactionType 交易类型1收入2支出
 * createDate 创建时间
 * accountingAmount 入账金额
 * remarks 备注
 * flowingId 流水Id
 */
interface FlowingWaterVos {
  flowingNumbers: string[]
  transactionType: number
  createDate: number
  accountingAmount: number
  remarks: string
  flowingId: string
}

/**
 * 车位收益接口
 * walletId 钱包id
 * state
 * profitBalance 盈利金额
 * totalBalance 总金额
 * balance 余额
 * flowingWaterVos 账单信息
 */
export interface GetWalletParkingResponseData {
  walletId: string
  state: number
  profitBalance: number
  totalBalance: number
  balance: number
  flowingWaterVos: FlowingWaterVos
}