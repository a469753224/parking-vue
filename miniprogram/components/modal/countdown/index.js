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
        clock: icon_1.timeout
    },
    methods: {
        cancel: function () {
            this.setData({
                show: false
            });
        },
        toOrder: function () {
            wx.navigateTo({
                url: '/pages/homes/order/order',
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLG9EQUFtRDtBQUVuRCxTQUFTLENBQUM7SUFJTixVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2Y7S0FDSjtJQUtELElBQUksRUFBRTtRQUNGLEtBQUssRUFBRSxjQUFPO0tBQ2pCO0lBS0QsT0FBTyxFQUFFO1FBQ0wsTUFBTTtZQUNGLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsSUFBSSxFQUFFLEtBQUs7YUFDZCxDQUFDLENBQUE7UUFDTixDQUFDO1FBRUQsT0FBTztZQUNILEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLDBCQUEwQjthQUNoQyxDQUFDLENBQUE7UUFDTixDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL21vZGFsL3RpbWVvdXQvaW5kZXguanNcclxuXHJcbmltcG9ydCB7dGltZW91dH0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Jhc2U2NC9pY29uJ1xyXG5cclxuQ29tcG9uZW50KHtcclxuICAgIC8qKlxyXG4gICAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzaG93OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cclxuICAgICAqL1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGNsb2NrOiB0aW1lb3V0XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjYW5jZWwoKXtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdG9PcmRlcigpe1xyXG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvaG9tZXMvb3JkZXIvb3JkZXInLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuIl19