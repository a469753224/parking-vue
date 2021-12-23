/* 导入模块 */
import WxModel from './model'

/* 导入TS接口 */
import { PrePermissions } from '../../interface/requestInterface/wx/wx';
import { ResponseData } from '../../../types/http';

export default class WxServer extends WxModel {

    prePermissions(data: PrePermissions) {
        return new Promise<ResponseData>(async (resolve) => {
            const result = await this.prePermissionsModel(data)
            if (result) {
                resolve({ ...result })
            }
        })
    }

}