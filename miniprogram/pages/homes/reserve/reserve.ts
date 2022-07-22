/* 模块导入 */
import HomeServer from '../../../api/api/home/server'
import UserServer from '../../../api/api/user/server'
import WxPay from '../../../utils/wxPay'
import WxServer from '../../../api/api/wx/server'

/* 实例化模块 */
const server = new HomeServer()
const user = new UserServer()
const pay = new WxPay()
const wex = new WxServer()

/*导入小工具*/
import { formatMinute, isEmpty } from '../../../utils/util'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        lockId: '',
        carList: <any>[],
        enTime: '00:00',
        endTime: '00:00',
        beginTime: '',
        plate: '',
        reserve: {},
        isAdd: false,
        showState:false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if (!isEmpty(options)) {
            this.setData({
                lockId: options.lockId
            })
        }
        
    },

    async currentOrder() {
        const result = await server.orderQuery()
        if (result.code == 0) {
            wx.reLaunch({
                url: `/pages/home/home`
            })
        }
    },

    /**
     * 获取当前时间日期
     */
    getNowTime() {
        const date = new Date()
        let y = date.getFullYear()
        let m = date.getMonth() + 1
        let d = date.getDate()
        const start = date.getTime()
        const end = date.getTime() + 15 * 60 * 1000
        this.setData({
            enTime: formatMinute(end),
            beTime: formatMinute(start),
            endTime: Date.parse(`${y}/${m}/${d} ${formatMinute(end)}:00`).toString(),
            beginTime: Date.parse(`${y}/${m}/${d} ${formatMinute(start)}:00`).toString()
        })
    },

    /**
     * 获取当前用户的车辆
     */
    async selectPlateAll() {
        const result = await user.selectPlateAll()
        if (result.code == 0) {
            const data = result.data
            let carList: any[] = []
            let plate = ''
            data.forEach((element: { status: number; plate: string }) => {
                if (element.status == 1) {
                    plate = element.plate
                }
                carList.push(element.plate)
            })
            this.setData({
                plate,
                carList
            })
            if(!this.data.plate){
                this.setData({
                    showState:true
                })
            }
            
        }
    },

    /**
     * 获取车位锁信息
     */
    async lockDate() {
        let {
            lockId
        } = this.data
        const param = {
            lockId
        }
        const result = await server.lockDate(param)
        if (result.code == 0) {
            this.setData({
                reserve: result.data
            })
        } else {
            let title = `抱歉，${result.msg}`
            wx.showToast({
                title,
                icon: 'none'
            })
            setTimeout(() => {
                wx.reLaunch({
                    url: '/pages/home/home',
                })
            }, 1000);
        }
    },

    /**
     * 选择时间
     * @param {Object}} e 
     */
    bindTimeChange(e: { detail: { value: any } }) {
        const date = new Date()
        let y = date.getFullYear()
        let m = date.getMonth() + 1
        let d = date.getDate()
        this.setData({
            enTime: e.detail.value,
            endTime: Date.parse(`${y}/${m}/${d} ${e.detail.value}:00`).toString(),
        })
    },

    /**
     * 选择车牌
     */
    selectPlate() {
        let { lockId } = this.data
        wx.navigateTo({
            url: `/pages/users/myCars/myCars?select=1&lockId=`+lockId,
        })
    },

    /**
     * 订阅消息
     */
    subscribeMessage() {
        //需要订阅的消息模板，在微信公众平台手动配置获取模板ID
        let message = 'FY_8gnrJJ0QMMfN2Z-ODI1Yg1Yr4T301TYkOVjOn8NM'
        //如果总是拒绝（subscriptionsSetting，2.10.1库才支持）
        if (this.versionCompare('2.10.1')) {
            wx.getSetting({
                withSubscriptions: true,//是否同时获取用户订阅消息的订阅状态，默认不获取
                success: (res) => {
                    console.log(res)
                    if (res.subscriptionsSetting && res.subscriptionsSetting.itemSettings &&
                        res.subscriptionsSetting.itemSettings[message] == "reject") {
                        //打开设置去设置
                        this.openConfirm('检测到您没打开推送权限，是否去设置打开？')
                    } else {
                        wx.requestSubscribeMessage({
                            tmplIds: [message],
                            success: (res) => {
                                if (res[message] == 'accept') {
                                    //用户允许
                                }
                            },
                            fail: (res) => { console.info(res) },
                        })
                    }
                }
            })
        } else if (this.versionCompare('2.4.4')) {
            wx.requestSubscribeMessage({
                tmplIds: [message],
                success: (res) => {
                    if (res[message] == 'accept') {
                        //用户允许
                    }
                },
                fail: (res) => { console.info(res) },
            })
        }
    },

    /**
     * 打开设置
     * @param message 
     */
    openConfirm(message: string) {
        wx.showModal({
            content: message,
            confirmText: "确认",
            cancelText: "取消",
            success: (res) => {
                //点击“确认”时打开设置页面
                if (res.confirm) {
                    wx.openSetting({
                        success: (res) => {
                            console.log(res.authSetting)
                        },
                        fail: (error) => {
                            console.log(error)
                        }
                    })
                } else {
                    console.log('用户点击取消')
                }
            }
        });
    },

    /**
     * 基础库版本比较
     * @param v 
     */
    versionCompare(v: string) {
        const version = wx.getSystemInfoSync().SDKVersion
        if (this.compareVersion(version, v) >= 0) {
            return true
        } else {
            return false
        }
    },

    compareVersion: function (vs1: string, vs2: string) {
        let v1 = vs1.split('.')
        let v2 = vs2.split('.')
        var len = Math.max(v1.length, v2.length)

        while (v1.length < len) {
            v1.push('0')
        }
        while (v2.length < len) {
            v2.push('0')
        }

        for (var i = 0; i < len; i++) {
            var num1 = parseInt(v1[i])
            var num2 = parseInt(v2[i])

            if (num1 > num2) {
                return 1
            } else if (num1 < num2) {
                return -1
            }
        }
        return 0
    },

    /**
     * 微信支付分下单
     */
    async authorOrder() {
        const that = this
        const {
            lockId,
            endTime,
            beginTime,
            plate
        } = that.data
        const param = {
            lockId,
            endTime,
            beginTime,
            plate,
            payType: 'wx'
        }
        if (!plate) {
            wx.showToast({
                title: '请选择车牌号',
                icon: 'none'
            })
            return
        }

        const result = await server.creditPayToOrder(param)
        if (result.code == 0) {
            let { orderId } = result.data
            const results = await server.orderQuery()
            if (results.code == 0) {
                let { state } = results.data
                if (state == 1 || state == 2) {
                    wx.showToast({
                        title: '下单成功',
                        icon: 'none'
                    })
                    that.subscribeMessage()
                    setTimeout(() => {
                        this.linkPayOrder(orderId)
                    }, 500);
                } else if (state == 7) {
                    wx.showLoading({
                        title: '订单确认中...',
                        mask: true
                    })
                    const titmer = setInterval(async () => {
                        const order = await server.orderQuery()
                        if (order.code == 0) {
                            if (order.data.state == 1 || order.data.state == 2) {
                                clearInterval(titmer)
                                wx.showToast({
                                    title: '下单成功',
                                    icon: 'none'
                                })
                                wx.hideLoading()
                                setTimeout(() => {
                                    wx.reLaunch({
                                        url: `/pages/homes/order/order?orderId=${order.orderId}`
                                    })
                                }, 500)
                            }
                        }
                    }, 3000)
                }
            }
            if (results.code == 7) {
                wx.showToast({
                    title: results.msg,
                    icon: 'none'
                })
                wx.reLaunch({
                    url: `/pages/home/home`
                })
            }
        } else {
            setTimeout(() => {
                wx.showToast({
                    title: result.msg,
                    icon: 'none'
                })
                setTimeout(() => {
                    wx.reLaunch({
                        url: `/pages/home/home`
                    })
                }, 500);
            }, 500);
        }
    },

    /**
   * 微信支付分订单
   */
    async linkPayOrder(orderId: string) {
        const orders = await server.getWechatOrderDetail({ orderId })
        if (orders.code == 0) {
            const {
                mch_id,
                service_id,
                out_order_no,
                nonce_str,
                timestamp,
                sign_type,
                sign
            } = orders.data

            wx.navigateToMiniProgram({
                appId: 'wxd8f3793ea3b935b8',
                path: 'pages/record/detail',
                extraData: {
                    mch_id,
                    service_id,
                    out_order_no,
                    timestamp,
                    nonce_str,
                    sign_type,
                    sign
                }
            });

        } else {
            wx.showToast({
                title: orders.msg,
                icon: 'none'
            })
        }
    },

    /**
     * 微信支付分授权
     */
    beforPay() {
        const that = this
        wx.login({
            success: async res => {
                let { code } = res
                const result = await wex.prePermissions({ code })
                if (result.data == 'AVAILABLE') {
                    that.authorOrder()
                } else {
                    let { data } = result
                    if (data && data != 'FAIL') {
                        wx.navigateToMiniProgram({
                            appId: 'wxd8f3793ea3b935b8',
                            path: 'pages/use/enable',
                            extraData: {
                                apply_permissions_token: data
                            },
                            success() { },
                            fail() {
                                wx.showModal({
                                    title: '提示',
                                    content: '授权失败，请稍后尝试！',
                                    showCancel: false
                                })
                            }
                        });
                    } else {
                        wx.showToast({
                            title: '参数错误',
                            icon: 'none'
                        })
                    }
                }
            }
        })
    },

    /**
     * 押金下单
     */
    async wxScanOrder() {
        const that = this
        const {
            lockId,
            endTime,
            beginTime,
            plate
        } = that.data
        const param = {
            lockId,
            endTime,
            beginTime,
            plate,
            payType: 'wx'
        }
        if (!plate) {
            wx.showToast({
                title: '请选择车牌号',
                icon: 'none'
            })
            return
        }
        const result = await server.WXOrderToFreeze(param)
        const { code } = result
        if (code == 0) {
            const payParam = result.data.orderStr
            let { orderId } = result.data
            const data = await pay.pay(payParam)
            if (data.code == 200) {
                const results = await server.orderQuery()
                if (results.code == 0) {
                    let { state } = results.data
                    if (state == 1 || state == 2) {
                        wx.showToast({
                            title: '下单成功',
                            icon: 'none'
                        })
                        that.subscribeMessage()
                        setTimeout(() => {
                            wx.reLaunch({
                                url: `/pages/homes/order/order?orderId=${orderId}`
                            })
                        }, 500);
                    } else if (state == 7) {
                        wx.showLoading({
                            title: '订单确认中...',
                            mask: true
                        })
                        that.orderPolling()
                    }
                }
                if (results.code == 7) {
                    wx.showLoading({
                        title: '订单确认中...',
                        mask: true
                    })
                    that.orderPolling()
                }
            } else {
                const params = {
                    orderId
                }
                const res = await server.cancelPaking(params)
                if (res.code == 0) {
                    wx.showToast({
                        title: '预留失败',
                        icon: 'none'
                    })
                }
            }
        } else if (code == 20) {
            let { orderId } = result.data
            let { msg } = result
            wx.showToast({
                title: msg,
                icon: 'none'
            })
            setTimeout(() => {
                wx.reLaunch({
                    url: `/pages/homes/order/order?orderId=${orderId}`
                })
            }, 500);
        } else {
            wx.showToast({
                title: result.msg,
                icon: 'none'
            })
            setTimeout(() => {
                wx.showToast({
                    title: '预留失败',
                    icon: 'none'
                })
            }, 500);
        }
    },

    /**
     * 订单轮询
     */
    orderPolling(){
        const titmer = setInterval(async () => {
            const order = await server.orderQuery()
            if (order.code == 0) {
                if (order.data.state == 1 || order.data.state == 2) {
                    clearInterval(titmer)
                    wx.showToast({
                        title: '下单成功',
                        icon: 'none'
                    })
                    wx.hideLoading()
                    setTimeout(() => {
                        wx.reLaunch({
                            url: `/pages/homes/order/order?orderId=${order.orderId}`
                        })
                    }, 500)
                }
            }
        }, 3000)
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        let {
            isAdd
        } = this.data
        if (!isAdd) {
            if (!this.data.plate) {
                this.selectPlateAll()
            }
        }
        this.getNowTime()
        this.lockDate()
        this.currentOrder()
    }
})