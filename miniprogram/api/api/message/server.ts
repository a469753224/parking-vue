/* 导入模型层 */
import MessageModel from './model'

/* 导入TS接口 */
import { RequestPromise, ResponseData } from '../../../types/http'

/* 导入请求参数接口 */
import { sendMsg, sendMsgPassword } from '../../interface/requestInterface/message'

/**
 * 短信模块-数据处理
 */
export default class MessageServer extends MessageModel{

    /**
     * 登录注册发短信接口
     * @param {sendMsg} data 请求参数 
     */
    sendMsg(data:sendMsg):RequestPromise {
        return new Promise<ResponseData<sendMsgPassword>>(async (resolve) => {
            const result = await this.sendMsgModel(data)
            if (result) {
                resolve({ ...result })
            }
        })
    }

    /**
     * 修改密码和支付密码短信接口
     * @param {sendMsgPassword} data 请求参数 
     */
    sendMsgPassword(data:sendMsgPassword):RequestPromise {
        return new Promise(async (resolve) => {
            const result = await this.sendMsgPasswordModel(data)
            if (result) {
                resolve({ ...result })
            }
        })
    }

}