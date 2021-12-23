/* 导入请求类 */
import Http from '../../../utils/http'

/* 导入请求参数接口 TS接口类型 */
import {
    ScanOrder,
    OrederIdQuery,
    CancelPaking,
    CarLock,
    CreateOrder,
    OrderSettlement,
    ContinuationModify,
    OrderBill,
    OrderDelete,
    Dopay,
    LockDate,
    WXOrderToFreeze,
    WXToFreeze,
    GetWechatOrderDetail
} from '../../interface/requestInterface/home'

/* 导入网络请求接口 TS接口类型 */
import { Method, RequestPromise } from '../../../types/http'


/**
 * 订单模块-模型层
 */
export default class HomeModel extends Http {
    /**
       * 预留车位
       * @param {ScanOrder} data 
       */
    scanOrderModel(data: ScanOrder): RequestPromise {
        const url = `order/scanOrder`
        const param = {
            url,
            data,
            method: <Method>'POST'
        }
        return this.request(param)
    }

    /**
     * 查询历史订单
     * @param {any} data 
     */
    userQueryOrderModel(data?: any): RequestPromise {
        const url = `order/userQueryOrder?page=${data.page}`
        const param = {
            url,
            data,
            method: <Method>'GET'
        }
        return this.request(param)
    }

    /**
     * 根据订单id查询订单信息
     * @param {OrederIdQuery} data 
     */
    orederIdQueryModel(data: OrederIdQuery): RequestPromise {
        const url = `order/orederIdQuery`
        const param = {
            url,
            data,
            method: <Method>'GET'
        }
        return this.request(param)
    }

    /**
     * 取消预订车位
     * @param {CancelPaking} data 请求参数
     */
    cancelPakingModel(data: CancelPaking): RequestPromise {
        const url = `order/cancelPaking`
        const param = {
            url,
            data,
            method: <Method>'GET'
        }
        return this.request(param)
    }

    /**
     * 订单模块解锁
     * @param {CarLock} data 请求参数 
     */
    carLockModel(data: CarLock): RequestPromise {
        const url = `order/carLock`
        const param = {
            url,
            data,
            method: <Method>'GET',
            loadStatus: true,
            loading: '解锁中...'
        }
        return this.request(param)
    }

    /**
     * 预留接口
     * @param {CreateOrder} data 请求参数 
     */
    createOrderModel(data: CreateOrder): RequestPromise {
        const url = `order/createOrder`
        const param = {
            url,
            data,
            method: <Method>'POST'
        }
        return this.request(param)
    }

    /**
     * token获取订单接口
     * @param {any} data 请求参数 
     */
    orderQueryModel(data: any): RequestPromise {
        const url = `order/orderQuery`
        const param = {
            url,
            data,
            method: <Method>'GET'
        }
        return this.request(param)
    }

    /**
     * 立即结算接口
     * @param {OrderSettlement} data 请求参数
     */
    orderSettlementModel(data: OrderSettlement): RequestPromise {
        const url = `order/orderSettlement`
        const param = {
            url,
            data,
            method: <Method>'GET'
        }
        return this.request(param)
    }

    /**
     * 续时接口
     * @param {ContinuationModify} data 请求参数 
     */
    continuationModifyModel(data: ContinuationModify): RequestPromise {
        const url = `order/continuationModify`
        const param = {
            url,
            data,
            method: <Method>'POST'
        }
        return this.request(param)
    }

    /**
     * 根据订单id查询账单接口
     * @param {OrderBill} data 请求参数 
     */
    orderBillModel(data: OrderBill): RequestPromise {
        const url = `order/orderBill`
        const param = {
            url,
            data,
            method: <Method>'GET'
        }
        return this.request(param)
    }

    /**
     * 删除历史订单
     * @param {OrderDelete} data 请求参数 
     */
    orderDeleteModel(data: OrderDelete): RequestPromise {
        const url = `order/orderDelete`
        const param = {
            url,
            data,
            method: <Method>'GET'
        }
        return this.request(param)
    }

    /**
     * 微信支付接口
     * @param {Dopay} data 请求参数 
     */
    wxPayOrderModel(data: Dopay): RequestPromise {
        const url = `wxpay/dopay`
        const param = {
            url,
            data,
            method: <Method>'GET'
        }
        return this.request(param)
    }

    /**
     * 车位开放时间
     * @param {LockDate} data 请求参数
     */
    lockDateModel(data: LockDate): RequestPromise {
        const url = `parking/lockDate`
        const param = {
            url,
            data,
            method: <Method>'GET'
        }
        return this.request(param)
    }

    /**
     * 预支付扫码下单接口
     * @param {WXOrderToFreeze} data 
     */
    WXOrderToFreezeModel(data: WXOrderToFreeze): RequestPromise {
        const url = `wxpay/WXOrderToFreeze`
        const param = {
            url,
            data,
            method: <Method>'POST',
            loadStatus: true,
            loading: '预留中，请稍后...'
        }
        return this.request(param)
    }

    wxToFreezeModel(data: WXToFreeze): RequestPromise {
        const url = `wxpay/WXToFreeze`
        const param = {
            url,
            data,
            method: <Method>'POST'
        }
        return this.request(param)
    }

    creditPayToOrderModel(data: WXOrderToFreeze): RequestPromise {
        const url = `wechat/creditPayToOrder`
        const param = {
            url,
            data,
            loadStatus: true,
            loading: '订单确认中...',
            method: <Method>'POST'
        }
        return this.request(param)
    }

    /**
     * 查询支付分授权状态
     * @param data 
     */
    checkPermissionsModel(data?: any) {
        const url = `checkPermissions`
        const param = {
            url,
            data,
            method: <Method>'GET'
        }
        return this.request(param)
    }

    /**
     * 取消支付分订单
     */
    cancelCreditPayOrderModel(data: any) {
        const url = `wechat/cancelCreditPayOrder`
        const param = {
            url,
            data,
            method: <Method>'POST'
        }
        return this.request(param)
    }

    /**
     * 获取支付分订单参数
     */
    getWechatOrderDetailModel(data: GetWechatOrderDetail){
        const url = `wechat/getWechatOrderDetail`
        const param = {
            url,
            data,
            method: <Method>'POST'
        }
        return this.request(param)
    }
}