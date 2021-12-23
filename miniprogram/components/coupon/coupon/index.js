"use strict";
Component({
    properties: {
        show: {
            type: Boolean,
            value: false
        }
    },
    data: {},
    methods: {
        close: function () {
            this.setData({
                show: false
            });
            wx.setStorageSync('coupon', false);
        },
        getCoupon: function () {
            wx.navigateTo({
                url: '/pages/users/receive/receive',
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNiO0tBQ0Y7SUFLRCxJQUFJLEVBQUUsRUFFTDtJQUtELE9BQU8sRUFBRTtRQUNQLEtBQUs7WUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQyxDQUFBO1lBQ0YsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDcEMsQ0FBQztRQUNELFNBQVM7WUFDUCxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSw4QkFBOEI7YUFDcEMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9jb3Vwb24vY291cG9uL2luZGV4LmpzXHJcbkNvbXBvbmVudCh7XHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXHJcbiAgICovXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgc2hvdzoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxyXG4gICAqL1xyXG4gIG1ldGhvZHM6IHtcclxuICAgIGNsb3NlKCkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdjb3Vwb24nLCBmYWxzZSlcclxuICAgIH0sXHJcbiAgICBnZXRDb3Vwb24oKSB7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy9wYWdlcy91c2Vycy9yZWNlaXZlL3JlY2VpdmUnLFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl19