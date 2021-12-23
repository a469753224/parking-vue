/* 导入模块 */
import Upload from '../../../utils/upload'

/* 实例化模块 */
const upload = new Upload()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        max: 200,
        surplus: 0,
        image: [],
        show: false,
        reason: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (_options) {},

    /* 选择计费有误 */
    onCharging(e: { detail: any }) {
        this.setData({
            reason: e.detail
        })
    },

    /* 动态计算剩余字数 */
    conputed(e: { detail: { reason: any } }) {
        let { reason } = e.detail
        this.setData({
            surplus: this.data.max - reason.length,
        })
    },

    /* 选择上传方式 */
    chooseUpload() {
        this.setData({
            show: true
        })
    },

    /* 选择凭证 */
    async chooseImage(e: { currentTarget: { dataset: { type: any } } }) {
        let { type } = e.currentTarget.dataset
        const result = await upload.chooseImage(type)
        if (result.code === 200) {
            this.setData({
                show: false
            })
            let { image } = this.data
            image.push(<never>result.data)
            this.setData({ image })
        }
    },

    /**
     * 删除凭证
     * @param e 事件对象
     */
    deleteVoucher(e: { currentTarget: { dataset: { index: number } } }) {
        const { index } = e.currentTarget.dataset
        let { image } = this.data
        image.splice(index, 1)
        this.setData({
            image
        })
    },

    /**
     * 退款申请
     */
    applyRefund() {
        let { reason, image } = this.data
        if (!reason) {
            wx.showToast({
                title: '请说明情况',
                icon: 'none',
            })
            return;
        }
        if (image.length === 0) {
            wx.showToast({
                title: '请上传凭证',
                icon: 'none',
            })
            return;
        }
        console.log('看验证通过，请求接口')
    }


})