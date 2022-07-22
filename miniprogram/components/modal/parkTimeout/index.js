"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var icon_1 = require("../../../assets/base64/icon");
Component({
    properties: {
        show: {
            type: Boolean,
            value: false
        }
    },
    data: {
        clock: icon_1.park
    },
    methods: {
        contact: function () {
            wx.reLaunch({
                url: '/pages/user/user?contact=1',
            });
        },
        cancel: function () {
            this.setData({
                show: false
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG9EQUFnRDtBQUVoRCxTQUFTLENBQUM7SUFJTixVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2Y7S0FDSjtJQUtELElBQUksRUFBRTtRQUNGLEtBQUssRUFBRSxXQUFJO0tBQ2Q7SUFLRCxPQUFPLEVBQUU7UUFDTCxPQUFPO1lBQ0gsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDVixHQUFHLEVBQUUsNEJBQTRCO2FBQ2xDLENBQUMsQ0FBQTtRQUNOLENBQUM7UUFFRCxNQUFNO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxJQUFJLEVBQUUsS0FBSzthQUNkLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge3Bhcmt9IGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9iYXNlNjQvaWNvbidcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgICAvKipcclxuICAgICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxyXG4gICAgICovXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgc2hvdzoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIGRhdGE6IHtcclxuICAgICAgICBjbG9jazogcGFya1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe7hOS7tueahOaWueazleWIl+ihqFxyXG4gICAgICovXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgY29udGFjdCgpe1xyXG4gICAgICAgICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3VzZXIvdXNlcj9jb250YWN0PTEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNhbmNlbCgpe1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcbiJdfQ==