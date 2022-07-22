/* 导入模块 */
import ApplyServer from '../../../api/api/apply/server'

/* 实例化模块 */
const server = new ApplyServer()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        deteId: '',
        repeat: [],
        show: false,
        dete: false,
        currentId: '',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (_options) {
        this.checkplace()
    },

    /**
     * 获取车位列表
     */
    async checkplace() {
        const result = await server.checkplace()
        let data = result.code == 0 ? result.data : []
        this.setData({
            repeat: data
        })
    },

    /**
     * 取消申请
     * @param e 
     */
    cancel(e: { currentTarget: { dataset: { id: string } } }) {
        const { id } = e.currentTarget.dataset
        this.setData({
            show: true,
            currentId: id
        })
    },

    /**
     * 取消申请
     */
    async cancelPlace() {
        let id = this.data.currentId
        const param = { id }
        const result = await server.cancelplace(param)
        let title = result.code == 0 ? '取消成功' : result.msg
        if (result.code == 0) {
            this.checkplace()
        }
        wx.showToast({
            title,
            icon: 'none'
        })
        this.setData({
            show: false,
            currentId: ''
        })
    },

    /**
     * 删除申请
     * @param e 
     */
    deleteApply(e: { currentTarget: { dataset: { id: any } } }) {
        const { id } = e.currentTarget.dataset
        this.setData({
            dete: true,
            deteId: id
        })
    },

    /**
     * 删除车位
     */
    async placeDelete() {
        let id = this.data.deteId
        const param = { id }
        const result = await server.placeDelete(param)
        const title = result.code == 0 ? '删除成功' : result.msg
        if (result.code == 0) {
            this.checkplace()
        }
        wx.showToast({
            title,
            icon: 'none'
        })
    }
})