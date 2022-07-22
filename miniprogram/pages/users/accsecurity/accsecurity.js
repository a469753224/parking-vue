"use strict";
Page({
    data: {
        show: false,
        token: '',
        user: {}
    },
    onLoad: function (_options) {
    },
    setPassword: function () {
        this.setData({
            show: true,
            content: '登录密码设置请移步“榴车位APP”内操作，目前小程序不提供该服务，感谢您的理解！'
        });
        return;
    },
    setPayPass: function () {
        this.setData({
            show: true,
            content: '支付密码设置请移步“榴车位APP”内操作，目前小程序不提供该服务，感谢您的理解！'
        });
        return;
        wx.navigateTo({
            url: '/pages/users/setpassword/setpassword',
        });
    },
    bindPhone: function () {
        var phone = this.data.user.phone;
        if (!phone) {
            wx.reLaunch({
                url: '/pages/sigup/register/register',
            });
        }
    },
    onShow: function () {
        this.setData({
            token: wx.getStorageSync('token'),
            user: wx.getStorageSync('userInfo')
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjc2VjdXJpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2NzZWN1cml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBS0osSUFBSSxFQUFFO1FBQ0wsSUFBSSxFQUFFLEtBQUs7UUFDWCxLQUFLLEVBQUUsRUFBRTtRQUNULElBQUksRUFBRSxFQUFFO0tBQ1I7SUFLRCxNQUFNLEVBQUUsVUFBVSxRQUFRO0lBRTFCLENBQUM7SUFLRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNaLElBQUksRUFBRSxJQUFJO1lBQ1YsT0FBTyxFQUFFLDBDQUEwQztTQUNuRCxDQUFDLENBQUE7UUFDRixPQUFNO0lBQ1AsQ0FBQztJQUtELFVBQVU7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1osSUFBSSxFQUFFLElBQUk7WUFDVixPQUFPLEVBQUUsMENBQTBDO1NBQ25ELENBQUMsQ0FBQTtRQUNGLE9BQU07UUFDTixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLHNDQUFzQztTQUMzQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBS0QsU0FBUyxFQUFUO1FBQ00sSUFBQSxLQUFLLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQXZCLENBQXVCO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWCxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNYLEdBQUcsRUFBRSxnQ0FBZ0M7YUFDckMsQ0FBQyxDQUFBO1NBQ0Y7SUFDRixDQUFDO0lBS0QsTUFBTSxFQUFFO1FBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNaLEtBQUssRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztZQUNqQyxJQUFJLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7U0FDbkMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUNELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xyXG5cclxuXHQvKipcclxuXHQgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuXHQgKi9cclxuXHRkYXRhOiB7XHJcblx0XHRzaG93OiBmYWxzZSxcclxuXHRcdHRva2VuOiAnJyxcclxuXHRcdHVzZXI6IHt9XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuXHQgKi9cclxuXHRvbkxvYWQ6IGZ1bmN0aW9uIChfb3B0aW9ucykge1xyXG5cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDorr7nva7nmbvlvZXlr4bnoIFcclxuXHQgKi9cclxuXHRzZXRQYXNzd29yZCgpIHtcclxuXHRcdHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdHNob3c6IHRydWUsXHJcblx0XHRcdGNvbnRlbnQ6ICfnmbvlvZXlr4bnoIHorr7nva7or7fnp7vmraXigJzmprTovabkvY1BUFDigJ3lhoXmk43kvZzvvIznm67liY3lsI/nqIvluo/kuI3mj5Dkvpvor6XmnI3liqHvvIzmhJ/osKLmgqjnmoTnkIbop6PvvIEnXHJcblx0XHR9KVxyXG5cdFx0cmV0dXJuXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICog6K6+572u5pSv5LuY5a+G56CBXHJcblx0ICovXHJcblx0c2V0UGF5UGFzcygpIHtcclxuXHRcdHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdHNob3c6IHRydWUsXHJcblx0XHRcdGNvbnRlbnQ6ICfmlK/ku5jlr4bnoIHorr7nva7or7fnp7vmraXigJzmprTovabkvY1BUFDigJ3lhoXmk43kvZzvvIznm67liY3lsI/nqIvluo/kuI3mj5Dkvpvor6XmnI3liqHvvIzmhJ/osKLmgqjnmoTnkIbop6PvvIEnXHJcblx0XHR9KVxyXG5cdFx0cmV0dXJuXHJcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0dXJsOiAnL3BhZ2VzL3VzZXJzL3NldHBhc3N3b3JkL3NldHBhc3N3b3JkJyxcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICog57uR5a6a5omL5py6XHJcblx0ICovXHJcblx0YmluZFBob25lKCkge1xyXG5cdFx0bGV0IHtwaG9uZX0gPSA8YW55PnRoaXMuZGF0YS51c2VyXHJcblx0XHRpZiAoIXBob25lKSB7XHJcblx0XHRcdHd4LnJlTGF1bmNoKHtcclxuXHRcdFx0XHR1cmw6ICcvcGFnZXMvc2lndXAvcmVnaXN0ZXIvcmVnaXN0ZXInLFxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcblx0ICovXHJcblx0b25TaG93OiBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLnNldERhdGEoe1xyXG5cdFx0XHR0b2tlbjogd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyksXHJcblx0XHRcdHVzZXI6IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpXHJcblx0XHR9KVxyXG5cdH1cclxufSkiXX0=