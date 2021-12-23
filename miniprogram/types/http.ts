/**
 * 通用TS接口
 */

/**http请求动词 */
export type Method = "GET" | "POST" | "DELETE" | "PUT" | "HEAD" | "OPTIONS" | "TRACE" | "CONNECT" | undefined

/**
 * request请求参数
 * url  API地址
 * data   请求参数
 * method   http请求动词
 * loading  加载描述
 * token  api请求令牌
 * loadStatus 是否显示加载loading模态框
 * overall  是否闯入完整api
 * header http请求头
 * resolve  成功回调
 * reject 失败回调
 * eject  是否返回401状态码
 * refetch  是否重发
 */
export interface RequestParameter {
  url: string
  data?: any
  method: Method
  loading?: string
  token?: boolean
  loadStatus?: boolean
  overall?: boolean
  header?: any
  resolve?: any
  reject?: any
  eject?:boolean
  refetch?:boolean
}

/**返回数据类型 */
export interface RequestPromise<T = any> extends Promise<T> { }

/**
 * 返回数据格式
 * code 请求状态码
 * data 请求返回数据实体
 * msg  请求返回结果描述
 */
export interface ResponseData<T = any> {
  code: number
  data: T
  msg: string
}