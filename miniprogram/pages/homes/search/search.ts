/* 导入工具类 */
import { getSetDataCurrent, isEmpty } from '../../../utils/util'

/* 导入模块 */
import MapServer from '../../../api/api/map/server'

/* 实例化模块 */
const map = new MapServer()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        city: '',
        tips: [],
        active: 0,
        value: '',
        markers: [],
        latitude: '',
        longitude: '',
        historys: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if (!isEmpty(options)) {
            let { city } = options
            let markers = JSON.parse(<string>options.markers) 
            this.setData({
                city,
                markers,
                latitude: options.latitude,
                longitude: options.longitude,
            })
        }
    },

    /**
     * 关键词搜索
     * @param {Object} e 节点对象 
     */
    onInput(e: { detail: any }) {
        var keywords = e.detail;
        console.logkeywords
        this.searchAddress(keywords)
    },

    /**
     * 调用高德API关键词搜索地址 
     * @param {String} keywords 关键词 
     */
    async searchAddress(keywords: string) {
        let { city, latitude, longitude } = this.data
        let from = `${latitude},${longitude}`
        const param = {
            city,
            from,
            keywords,
            location: ''
        }
        const { data } = await map.getAddress(param)
        this.setData({ tips: data })
    },

    /**
     * 选择地址
     * @param {Object} e 节点对象 
     */
    selectPark(e: any) {
        const mapData = getSetDataCurrent(e, 'row')
        if (typeof mapData.id !== 'string') {
            wx.showToast({
                title: '请选择具体区道',
                icon: 'none'
            })
            return
        }
        /* 设置历史搜索 */
        if (!isEmpty(mapData)) {
            let history = wx.getStorageSync('search_history_park')
            history = history.filter((element: { id: any }) => {
                return element.id !== mapData.id
            })
            history.unshift(mapData)
            history.length > 10 && history.pop()
            wx.setStorageSync('search_history_park', history)
        }
        let { location } = mapData
        mapData.longitude = location.split(',')[0]
        mapData.latitude = location.split(',')[1]
        delete mapData.adcode
        delete mapData.city
        delete mapData.location
        delete mapData.typecode
        if (mapData !== '') {
            const pages = getCurrentPages();
            const prevPage = pages[pages.length - 2]
            prevPage.setData({
                mapData,
            })
            wx.navigateBack({
                delta: 1,
            })
        }
    },

    onCancel() {
        wx.navigateBack({
            delta: 1,
        })
    },

    onShow() {
        if (!wx.getStorageSync('search_history_park')) {
            wx.setStorageSync('search_history_park', [])
            setTimeout(() => {
                this.searchAddress(this.data.city)
            }, 200);
        } else {
            let historys = wx.getStorageSync('search_history_park')
            historys.length === 0 && this.searchAddress(this.data.city)
            historys.length > 0 && this.setData({ historys })
        }
    }
})