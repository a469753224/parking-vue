/* 导入模块 */
import SigupServer from '../../../api/api/sigup/server'
import MessageServer from '../../../api/api/message/server'

/* 实例化模块 */
const server = new SigupServer()
const massage = new MessageServer()

/* 开发模式 */
import { Mode } from '../../../config/config'

/* 验证规则 */
import {
    codeRul,
    phoneRul,
    passwordRul
} from '../../../utils/exception'
import { isEmpty } from '../../../utils/util'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        msg: '',
        path: '',
        phone: '',
        else: true,
        model: Mode,
        show: false,
        timeData: {},
        password: '',
        isCode: true,
        checked: false,
        verCode: false,
        verPhone: false,
        time: 60 * 1000,
        verPassword: false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if (!isEmpty(options)) {
            let { path, phone } = options as any
            this.setData({
                path,
                phone,
            })
            let e = { detail: { value: phone } }
            this.verifyPhone(e)
        }
    },

    onChange(e: { detail: any }) {
        this.setData({
            timeData: e.detail,
        });
    },

    /**
     * 请求手机验证码
     */
    async getCode() {
        let title: string = ''
        if (this.data.phone) {
            const {
                phone
            } = this.data
            const param = {
                phone,
                msgType: '2'
            }
            const result = await massage.sendMsg(param)
            title = result.code == 0 ? '发送成功' : '发送失败'
            if (result.code == 0) {
                this.setData({
                    isCode: false
                })
            }
        } else {
            title = '请填写手机号码！'
        }
        wx.showToast({
            title,
            icon: 'none'
        })
    },

    /**
     * 倒计时结束回调
     */
    finish() {
        this.setData({
            isCode: true
        })
    },

    /**
     * 是否同意条款
     * @param e 事件对象
     */
    aggreements(e: { detail: any }) {
        this.setData({
            checked: e.detail
        })
    },

    /**
     * 监听验证码
     * @param e 事件对象
     */
    changeCode(e: { detail: { value: any } }) {
        this.setData({
            msg: e.detail.value
        })
    },

    /**
     * 监听号码变化
     * @param e 事件对象
     */
    changePhone(e: { detail: { value: any } }) {
        this.setData({
            phone: e.detail.value
        })
    },

    /**
     * 验证手机验证码
     * @param {Object} e 
     */
    verifyCode(e: { detail: { value: string } }) {
        if (e.detail.value) {
            if (!codeRul(e.detail.value)) {
                wx.showToast({
                    title: '验证码不正确',
                    icon: 'none'
                })
                this.setData({
                    msg: ''
                })
            } else {
                this.setData({
                    verCode: true
                })
            }
        }

    },

    /**
     * 验证手机号码
     * @param {Object} e 
     */
    verifyPhone(e: { detail: { value: string } }) {
        if (e.detail.value) {
            if (!phoneRul(e.detail.value)) {
                wx.showToast({
                    title: '手机号码格式不正确',
                    icon: 'none'
                })
                this.setData({
                    phone: ''
                })
            } else {
                this.setData({
                    verPhone: true
                })
            }
        }
    },

    /**
     * 验证密码
     * @param {Obje} e 
     */
    verifyPassword(e: { detail: { value: string } }) {
        if (!passwordRul(e.detail.value)) {
            wx.showToast({
                title: '密码格式不正确',
                icon: 'none'
            })
            this.setData({
                password: ''
            })
        } else {
            this.setData({
                verPassword: true
            })
        }
    },

    /**
     * 绑定手机
     */
    async register() {
        let {
            verCode,
            verPhone,
            checked
        } = this.data
        if (verCode && verPhone && checked) {
            let {
                msg,
                phone
            } = this.data
            const param = {
                msg,
                phone,
                condition: 0
            }
            const result = await server.bindPhone(param)
            if (result.code == 19) {
                this.setData({
                    show: true
                })
            } else {
                let title = result.code == 0 ? '绑定成功' : result.msg
                wx.showToast({
                    title,
                    icon: 'none'
                })
                if (result.code == 0) {
                    this.login()
                    let userInfo = wx.getStorageSync('userInfo')
                    userInfo.phone = `${phone.substr(0, 3)}****${phone.substr(-4)}`
                    wx.setStorageSync('phoneState', 0)
                    wx.setStorageSync('userInfo', userInfo)
                    const { path } = this.data
                    let url = ''
                    switch (path) {
                        case 'user':
                            url = '/pages/user/user'
                            break;
                        case 'home':
                            url = '/pages/home/home'
                            break;
                    }
                    setTimeout(() => {
                        wx.reLaunch({
                            url,
                        })
                    }, 500);
                }
            }
        }
    },

    /**
   * 用户登录
   */
    async login() {
        const param = {
            loadStatus: false,
        }
        const result = await server.wxlogin(param)
        if (result.code == 0) {
            this.setData({
                token: result.token
            })
        }
    },

    /**
     * 关联当前账户
     */
    async confirm() {
        let {
            msg,
            phone
        } = this.data
        const param = {
            msg,
            phone,
            condition: 1
        }
        const result = await server.bindPhone(param)
        const title = result.data
        wx.showToast({
            title,
            icon: 'none'
        })
        if (result.code == 0) {
            wx.reLaunch({
                url: `/pages/user/user?relogin=1`,
            })
        }
    },

    getPhone(){
        
    }

})