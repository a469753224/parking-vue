// pages/users/withdrawal/withdrawal.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        number: 0,
        blance: {
            blance: 632
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (_options) {

    },

    withAll(e: { currentTarget: { dataset: { blance: any } } }) {
        const { blance } = e.currentTarget.dataset
        this.setData({
            number: blance
        })
    },

    getNumber(e: { detail: { value: number } }) {
        let {blance} = this.data.blance
        let number = Number(e.detail.value)
        if(number > blance){
            this.setData({
                number:blance
            })
        }

    }
})