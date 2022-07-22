/* 导入腾讯地图开发者密钥 */
import { TX_MAP_KEY } from '../../../config/config'

/* 导入模块 */
import ApplyServer from '../../../api/api/apply/server'

/* 实例化模块 */
const server = new ApplyServer()

/* 导入工具类 */
import { isEmpty, extractProCityCode } from '../../../utils/util';

/* 导入验证类 */
import { phoneRul } from '../../../utils/exception'

/* 腾讯位置服务SDK导入 */
const QQMapWX = require('../../../utils/qqmap-wx-jssdk')
const qqmapsdk = new QQMapWX({ key: TX_MAP_KEY });

Page({
    /**
     * 页面的初始数据
     */
    data: {
        city: '',
        phone: '',
        markers: [],
        address: '',
        mapData: {},
        district: '',
        latitude: '',
        longitude: '',
        contactsName: '',
        communityName: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (_options) {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        if (!isEmpty(this.data.mapData)) {
            let { name, district, address } = <any>this.data.mapData
            this.setData({
                address,
                district,
                communityName: name
            })
        }
        wx.getLocation({
            type: 'gcj02',
            success: res => {
                let markers:any = this.data.markers
                let latitude:string = <any>res.latitude 
                let longitude:string = <any>res.longitude
                markers.push({
                    id: 1,
                    latitude,
                    longitude,
                    callout: {
                        content: '当前位置',
                        padding: '10',
                        borderRadius: '5'
                    },
                    width: '48rpx',
                    height: '80rpx',
                    iconPath: '/assets/images/home/slide_position@2x.png'
                })
                this.setData({
                    markers,
                    latitude,
                    longitude,
                })
                qqmapsdk.reverseGeocoder({
                    location: {
                        latitude,
                        longitude
                    },
                    success: (data: { result: { address_component: { street: string; }; }; }) => {
                        let { street } = data.result.address_component
                        this.setData({
                            city: street
                        })
                    }
                })
            }
        })
    },

    /**
     * 跳转地图选点
     */
    async position() {
        let { markers, latitude, longitude, city } = this.data
        wx.navigateTo({
            url: `/pages/homes/search/search?longitude=${longitude}&latitude=${latitude}&city=${city}&markers=${JSON.stringify(markers)}`,
        })
    },

    /**
     * 联系人
     * @param e 
     */
    changeName(e: any) {
        this.setValue(e, 'contactsName')
    },

    /**
     * 手机好吗
     * @param e 
     */
    changePhone(e: any) {
        this.setValue(e, 'phone')
    },

    /**
     * 区域街道
     * @param e 
     */
    changeStreet(e: any) {
        this.setValue(e, 'district')
    },

    /**
     * 详细地址
     * @param e 
     */
    changeAddress(e: any) {
        this.setValue(e, 'address')
    },

    setValue(e: { detail: { value: any; }; }, name: string) {
        this.setData({
            [name]: e.detail.value
        })
    },

    /**
     * 提交
     */
    async submitApply() {
        let { phone, mapData, contactsName, address, district, communityName } = <any>this.data
        let ads = extractProCityCode(district)
        mapData = { ...mapData, ...ads }
        const isPhone = phoneRul(phone)
        if (!isPhone) {
            wx.showToast({
                title: '手机号码有误',
                icon: 'none'
            })
            return;
        }
        const param = {
            phone,
            contactsName,
            communityName,
            street: `${district}${address}`,
            mapData: JSON.stringify(mapData),
        }
        const result = await server.wxplace(param)
        const title = result.code == 0 ? '添加成功' : result.msg
        wx.showToast({
            title,
            icon: 'none'
        })
        if (result.code == 0) {
            setTimeout(() => {
                wx.reLaunch({
                    url: '/pages/releases/myParks/myParks',
                })
            }, 500);
        }
    }

})