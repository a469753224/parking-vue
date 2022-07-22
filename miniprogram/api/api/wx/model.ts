/* http请求封装导入 */
import Http from '../../../utils/http'

/* 导入TS接口 */
import { Method, RequestPromise } from '../../../types/http'
import { PrePermissions } from '../../interface/requestInterface/wx/wx'

export default class WxModel extends Http {

    /**
     * 微信支付分预授权
     */
    prePermissionsModel(data: PrePermissions):RequestPromise {
        const url = 'PrePermissions'
        const param = {
            url,
            data,
            loadStatus: true,
            loading: '请求中...',
            method: <Method>'POST'
        }
        return this.request(param)
    }

}