"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../../utils/util");
Page({
    data: {
        bill: {},
        orderId: '',
        show: false,
        shows: false,
    },
    onLoad: function (options) {
        if (!util_1.isEmpty(options)) {
            var bill = options.bill;
            bill = JSON.parse(bill);
            this.setData({
                bill: bill
            });
        }
    },
    refund: function () {
        this.setData({
            shows: true
        });
        return;
        wx.reLaunch({
            url: '/pages/homes/refundApply/refundApply',
        });
    },
    call: function () {
        this.setData({
            show: true
        });
        return;
        wx.reLaunch({
            url: '/pages/user/user?call=1',
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJEZXRhaWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlckRldGFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDRDQUE2QztBQUc3QyxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtRQUNSLE9BQU8sRUFBRSxFQUFFO1FBQ1gsSUFBSSxFQUFFLEtBQUs7UUFDWCxLQUFLLEVBQUUsS0FBSztLQUNiO0lBS0QsTUFBTSxFQUFFLFVBQVUsT0FBTztRQUN2QixJQUFJLENBQUMsY0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2YsSUFBQSxJQUFJLEdBQVUsT0FBTyxLQUFqQixDQUFpQjtZQUMzQixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLElBQUksTUFBQTthQUNMLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUtELE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDLENBQUE7UUFDRixPQUFNO1FBQ04sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNWLEdBQUcsRUFBRSxzQ0FBc0M7U0FDNUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELElBQUk7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQUE7UUFDRixPQUFNO1FBQ04sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNWLEdBQUcsRUFBRSx5QkFBeUI7U0FDL0IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIOWvvOWFpeW3peWFt+exuyAqL1xyXG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCdcclxuXHJcblxyXG5QYWdlKHtcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgYmlsbDoge30sXHJcbiAgICBvcmRlcklkOiAnJyxcclxuICAgIHNob3c6IGZhbHNlLFxyXG4gICAgc2hvd3M6IGZhbHNlLFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgaWYgKCFpc0VtcHR5KG9wdGlvbnMpKSB7XHJcbiAgICAgIGxldCB7IGJpbGwgfSA9IDxhbnk+b3B0aW9uc1xyXG4gICAgICBiaWxsID0gSlNPTi5wYXJzZShiaWxsKVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGJpbGxcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpgIDmrL7nlLPor7dcclxuICAgKi9cclxuICByZWZ1bmQoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBzaG93czogdHJ1ZVxyXG4gICAgfSlcclxuICAgIHJldHVyblxyXG4gICAgd3gucmVMYXVuY2goe1xyXG4gICAgICB1cmw6ICcvcGFnZXMvaG9tZXMvcmVmdW5kQXBwbHkvcmVmdW5kQXBwbHknLFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDlkbzlj6vnq5nplb9cclxuICAgKi9cclxuICBjYWxsKCkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgfSlcclxuICAgIHJldHVyblxyXG4gICAgd3gucmVMYXVuY2goe1xyXG4gICAgICB1cmw6ICcvcGFnZXMvdXNlci91c2VyP2NhbGw9MScsXHJcbiAgICB9KVxyXG4gIH0sXHJcbn0pIl19