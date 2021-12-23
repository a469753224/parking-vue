/* 导入模块 */
import HomeServer from '../../../api/api/home/server'

/* 实例化模块 */
const server = new HomeServer()

/* 导入工具类 */
import {isEmpty} from '../../../utils/util'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        order: {},
        orderId: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if(!isEmpty(options)){
            let {orderId} = options
            this.setData({
                orderId 
            })
            this.orderBill()
        }
    },

    /**
     * 获取账单
     */
    async orderBill() {
        let { orderId } = this.data
        const param = {
            orderId
        }
        const result = await server.orderBill(param)
        if (result.code == 0) {
            this.setData({
                order: result.data
            })
        }
    },

    /**
     * 查看订单
     */
    readOrder(){
        wx.reLaunch({
          url: `/pages/homes/orderDetail/orderDetail?orderId=${this.data.orderId}`,
        })
    },

    /**
     * 返回首页
     */
    backHome(){
        wx.reLaunch({
          url: `/pages/home/home`,
        })
    }
})