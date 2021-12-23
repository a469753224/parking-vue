/* 导入响应数据接口 */
import { Method, RequestPromise } from '../../../types/http'

/* 导入请求参数接口 */
import { sendMsgPassword } from '../../interface/requestInterface/message'

/* 导入请求类 */
import Http from '../../../utils/http'

/**
 * 短信模块-数据模型
 */
export default class MessageModel extends Http {

    /**
     * 登录注册发短信接口
     * @param {any} data 请求参数 
     */
    sendMsgModel(data: any):RequestPromise {
        const url = `sendMsg`
        const param = {
            url,
            data,
            method: <Method>'GET'
        }
        return this.request(param)
    }

    /**
     * 修改密码和支付密码短信接口
     * @param {sendMsgPassword} data 请求参数 
     */
    sendMsgPasswordModel(data:sendMsgPassword) {
        const url = `sendMsgPassword`
        const param = {
            url,
            data,
            method: <Method>'GET'
        }
        return this.request(param)
    }

}