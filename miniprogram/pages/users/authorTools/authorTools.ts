/* 导入模块 */
import WxServer from '../../../api/api/wx/server'
import HomeServer from '../../../api/api/home/server'

/* 实例化模块 */
const wex = new WxServer()
const server = new HomeServer()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        show: false,
        status: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (_options) {

    },

    /**
     * 支付分授权开关
     */
    openAuthor() {
        this.setData({ show: true })
    },

    /**
     * 支付分授权
     */
    async author() {
        let { status } = this.data
        if (status) {
            //关闭授权操作
        } else {
            wx.login({
                success: async res => {
                    let { code } = res
                    const result = await wex.prePermissions({ code })
                    if (result.code == 200) {
                        wx.showToast({
                            title: '您已授权',
                            icon: 'none'
                        })
                    } else if (result.code == 201) {
                        let { data } = <any>result
                        wx.navigateToMiniProgram({
                            appId: 'wxd8f3793ea3b935b8',
                            path: 'pages/use/enable',
                            extraData: {
                                apply_permissions_token: data
                            },
                            success() {
                                console.log('授权成功！00')
                            }
                        });
                    } else {
                        wx.showModal({
                            title: '提示',
                            content: '授权失败，请联系商家！'
                        })
                    }

                }
            })
        }

    },

    async onShow() {
        const result = await server.checkPermissions()
        const status = result.data == 'AVAILABLE' ? true : false
        this.setData({ status })
    }
})