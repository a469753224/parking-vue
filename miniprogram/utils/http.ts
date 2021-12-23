/**导入自定义配置文件 */
import { APP_BASE_API, Mode } from '../config/config'

/* 导入工具类 */
import { setStorages } from '../utils/util'

/**导入TS接口 */
import { RequestParameter, RequestPromise } from '../types/http'

const tips: any = {
  401: '无效token，请求受限',
  403: '权限不足，无法请求',
  404: '请求不存在，请确认路径或参数',
  500: '执行失败未知异常',
  777: '抱歉，出现未知错误，请检查网络连接',
}

/**
 * Request网络请求封装
 */
export default class Http {

  /**
   * 参数处理
   * @param param 请求参数
   */
  request(param: RequestParameter): RequestPromise {
    return new Promise((resolve, reject) => {
      let { token = true } = param
      let header = {
        'content-type': 'application/json',
        'token': token ? `${wx.getStorageSync('token')}` : ''
      }
      param = Object.assign(param, { resolve, reject, header })
      this.interceptor(param)
    }).catch(err => {
      console.log(err)
      this.show_error(777)
    })
  }

  /**
   * 拦截器
   * @param param 请求参数
   */
  private interceptor(param: RequestParameter): void {
    let { loadStatus, loading = '' } = param
    loadStatus && wx.showLoading({ title: loading })
    if (loadStatus) {
      setTimeout(() => {
        this.send(param)
      }, 1000);
    } else {
      this.send(param)
    }
  }

  /**
   * 发送请求
   * @param param 请求参数
   */
  private send(param: RequestParameter): void {
    let {
      url,
      eject,
      header,
      reject,
      // refetch = true,
      overall,
      resolve,
      data = {},
      loadStatus,
      method = 'GET'
    } = param

    wx.request({
      url: overall ? url : APP_BASE_API[Mode] + url,
      data,
      method,
      header,
      success: (result: any) => {
        const code = result.statusCode.toString()
        if (code.startsWith('2')) {
          if (result.data.status == 401) {
            if (eject) {
              resolve({
                code: 401,
                data: {},
                msg: ''
              })
            } else {
              wx.showToast({
                title: '身份验证失败，请重新登录',
                icon: 'none'
              })
              wx.clearStorage({
                success: () => {
                  setTimeout(() => {
                    wx.reLaunch({
                      url: '/pages/user/user',
                    })
                  }, 1000);
                },
              })

              // if (refetch) {
              //   this._refetch(param)
              // } else {
              //   wx.showToast({
              //     title: '身份验证失败，请重新登录',
              //     icon: 'none'
              //   })
              //   wx.clearStorage({
              //     success: () => {
              //       setTimeout(() => {
              //         wx.reLaunch({
              //           url: '/pages/user/user',
              //         })
              //       }, 1000);
              //     },
              //   })
              // }
            }
          } else {
            resolve(result.data)
          }
        } else {
          this.show_error(code)
        }
      },
      fail: err => {
        reject(err)
      },
      complete: () => {
        loadStatus && wx.hideLoading()
      }
    })
  }

  /* 重新发送请求 */
  _refetch(params: RequestParameter) {
    wx.login({
      success: res => {
        const { code } = res
        wx.request({
          url: `${APP_BASE_API[Mode]}wxlogin`,
          method: 'POST',
          data: { code },
          success: (result: any) => {
            if (result.code == 0) {
              let { token, phoneState } = result
              const param = { token, phoneState }
              setStorages(param)
              this.request(params)
            }
          }
        })
      }
    })
  }

  /**
   * 弹出错误提示
   * @param error_code 错误代码
   */
  private show_error(error_code: string | number): void {
    if (!error_code) {
      error_code = 777
    }
    wx.showToast({
      title: tips[error_code],
      icon: 'none'
    })
  }
}