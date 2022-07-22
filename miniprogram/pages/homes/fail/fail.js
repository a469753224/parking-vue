"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../../utils/util");
Page({
    data: {
        orderId: ''
    },
    onLoad: function (options) {
        if (!util_1.isEmpty(options)) {
            this.setData({
                orderId: options.orderId
            });
        }
    },
    readOrder: function () {
        wx.reLaunch({
            url: "/pages/homes/pay/pay?orderId=" + this.data.orderId
        });
    },
    erPay: function () {
        wx.reLaunch({
            url: "/pages/homes/pay/pay?orderId=" + this.data.orderId
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw0Q0FBNkM7QUFFN0MsSUFBSSxDQUFDO0lBS0QsSUFBSSxFQUFFO1FBQ0YsT0FBTyxFQUFFLEVBQUU7S0FDZDtJQUtELE1BQU0sRUFBRSxVQUFVLE9BQU87UUFDckIsSUFBSSxDQUFDLGNBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNULE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTzthQUMzQixDQUFDLENBQUE7U0FDTDtJQUNMLENBQUM7SUFLRCxTQUFTO1FBQ0wsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNSLEdBQUcsRUFBRSxrQ0FBZ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFTO1NBQzNELENBQUMsQ0FBQTtJQUNOLENBQUM7SUFLRCxLQUFLO1FBQ0QsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNSLEdBQUcsRUFBRSxrQ0FBZ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFTO1NBQzNELENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDlr7zlhaXlt6XlhbfnsbsgKi9cclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnXHJcblxyXG5QYWdlKHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAgICovXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgb3JkZXJJZDogJydcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAgICovXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKCFpc0VtcHR5KG9wdGlvbnMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBvcmRlcklkOiBvcHRpb25zLm9yZGVySWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIOafpeeci+iuouWNlVxyXG4gICAgICovXHJcbiAgICByZWFkT3JkZXIoKSB7XHJcbiAgICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgICAgICB1cmw6IGAvcGFnZXMvaG9tZXMvcGF5L3BheT9vcmRlcklkPSR7dGhpcy5kYXRhLm9yZGVySWR9YFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeN5paw5pSv5LuYXHJcbiAgICAgKi9cclxuICAgIGVyUGF5KCkge1xyXG4gICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL2hvbWVzL3BheS9wYXk/b3JkZXJJZD0ke3RoaXMuZGF0YS5vcmRlcklkfWBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KSJdfQ==