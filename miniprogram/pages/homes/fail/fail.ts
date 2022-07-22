/* 导入工具类 */
import { isEmpty } from '../../../utils/util'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderId: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if (!isEmpty(options)) {
            this.setData({
                orderId: options.orderId
            })
        }
    },
    
    /**
     * 查看订单
     */
    readOrder() {
        wx.reLaunch({
            url: `/pages/homes/pay/pay?orderId=${this.data.orderId}`
        })
    },

    /**
     * 重新支付
     */
    erPay() {
        wx.reLaunch({
            url: `/pages/homes/pay/pay?orderId=${this.data.orderId}`
        })
    }
})