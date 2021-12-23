/* 导入模块 */
import HomeServer from '../../../api/api/home/server'
import PayServer from '../../../api/api/pay/server'
import WxPay from '../../../utils/wxPay'

/* 实例化模块 */
const server = new HomeServer()
const pay = new PayServer()
const wxPay = new WxPay()

/* 导入小工具 */
import { getSetDataCurrent } from '../../../utils/util'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        bill: {},
        payWay: '',
        orderId: '',
        show: false,
        showOverlay: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            orderId: options.orderId ? options.orderId : ''
        })
        this.orderBill()
    },

    /**
     * 根据订单id获取账单信息
     */
    async orderBill() {
        let { orderId } = this.data
        const param = {
            orderId
        }
        const result = await server.orderBill(param)
        if (result.code == 0) {
            this.setData({
                bill: result.data
            })
        }
    },

    /**
     * 拉起支付
     */
    pay() {
        this.setData({
            showOverlay: true
        })
    },

    /**
     * 支付订单
     */
    async payOrder() {
        let { orderId } = this.data
        const param = {
            orderId
        }
        let result = await pay.minipay(param)
        if (result.code == 0) {
            const data = await wxPay.pay(result.data)
            if (data.code === 200) {
                wx.reLaunch({
                    url: `/pages/homes/success/success?orderId=${this.data.orderId}`
                })
            } else {
                wx.reLaunch({
                    url: `/pages/homes/fail/fail?orderId=${this.data.orderId}`
                })
            }
        }
    },

    /**
     * 显示modal
     */
    overlay() {
        this.setData({
            showOverlay: false
        })
    },

    /**
     * 选择支付方式
     * @param {Object} e 
     */
    onChangeRadio(e: any) {
        const payWay = getSetDataCurrent(e, 'name')
        this.setData({
            payWay
        })
    },

    /**
     * 呼叫客服
     */
    call() {
        this.setData({
            show: true
        })
        return
        wx.reLaunch({
            url: '/pages/user/user?call=1',
        })
    },
})