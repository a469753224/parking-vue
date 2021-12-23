/* 导入配置文件 */
import { GD_MAP_KEY, TX_MAP_KEY } from '../../../config/config'

/* 初始化高德地图 */
const GDMapWX = require('../../../utils/amap-wx')
const gdmapsdk = new GDMapWX.AMapWX({ key: GD_MAP_KEY })

/* 初始化腾讯地图 */
const QQMapWX = require('../../../utils/qqmap-wx-jssdk')
const qqmapsdk = new QQMapWX({ key: TX_MAP_KEY })

import {RequestPromise} from '../../../types/http'


/**
 * 地图模块
 */
export default class MapServer {
    /**
     * 根据提示词查找地址
     * @param {Object} data 
     */
    searchAddress(data: { city: any; keywords: any; location: any }):RequestPromise {
        let { city, keywords, location } = data
        return new Promise(resolve => {
            gdmapsdk.getInputtips({
                city,
                keywords,
                location,
                success: (data: { tips: any }) => {
                    if (data && data.tips) {
                        if (data.tips.length > 0) {
                            let { tips } = data
                            tips = tips.filter((element: { id: any }) => {
                                if (typeof element.id === 'string') {
                                    return true
                                }
                                return false
                            })
                            resolve({ data: tips })
                        }
                    }
                }
            })
        })
    }

    /**
     * 计算两个经纬度驾车距离
     * @param {String} from 
     * @param {String} to 
     */
    getDistance(data: { from: any; to: any }):RequestPromise {
        let { from, to } = data
        return new Promise(resolve => {
            qqmapsdk.calculateDistance({
                from,
                to,
                mode: 'driving',
                success: (res: { status: number; result: { elements: any } }) => {
                    if (res.status == 0) {
                        resolve({
                            code: 200,
                            result: res.result.elements
                        })
                    }
                }
            })
        })
    }

    /**
     * 获取地址带行车距离
     * @param {Object} param 请求参数
     */
    getAddress(param:any):RequestPromise {
        return new Promise(async resolve => {
            let { data } = await this.searchAddress(param)
            let to = []
            let { from } = param
            for (let element of data) {
                to.push({
                    latitude: element.location.split(',')[1],
                    longitude: element.location.split(',')[0]
                })
            }
            const { result } = await this.getDistance({ from, to })
            for (let i in data) {
                data[i].distance = _kilometre(result[i].distance)
            }
            resolve({ data })
        })
    }

}

/**
 * 转化千米数
 * @param {Number} meters 米 
 */
const _kilometre = (meters: number) => {
    if (meters > 999) {
        meters = meters / 1000
        return `${meters.toFixed(2)} km`
    } else {
        return `${meters} m`
    }
}
