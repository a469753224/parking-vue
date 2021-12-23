
import {park} from '../../../assets/base64/icon'

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        show: {
            type: Boolean,
            value: false
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        clock: park
    },

    /**
     * 组件的方法列表
     */
    methods: {
        contact(){
            wx.reLaunch({
              url: '/pages/user/user?contact=1',
            })
        },

        cancel(){
            this.setData({
                show: false
            })
        }
    }
})
