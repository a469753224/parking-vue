// components/modal/timeout/index.js

import {timeout} from '../../../assets/base64/icon'

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
        clock: timeout
    },

    /**
     * 组件的方法列表
     */
    methods: {
        cancel(){
            this.setData({
                show: false
            })
        },

        toOrder(){
            wx.navigateTo({
              url: '/pages/homes/order/order',
            })
        }
    }
})
