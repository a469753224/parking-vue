"use strict";
Page({
    data: {
        show: false,
        banner: ''
    },
    onLoad: function () {
    },
    toStep: function () {
        wx.navigateTo({
            url: '/pages/releases/step/step',
        });
    },
    apply: function () {
        wx.navigateTo({
            url: '/pages/releases/apply/apply',
        });
    },
    onHide: function () {
        this.setData({
            show: false
        });
    },
    myParks: function () {
        wx.navigateTo({
            url: '/pages/releases/myParks/myParks',
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsZWFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlbGVhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNO1FBQ0osRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSwyQkFBMkI7U0FDakMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELEtBQUs7UUFLSCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDZCQUE2QjtTQUNuQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxJQUFJLEVBQUUsS0FBSztTQUNaLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxPQUFPO1FBQ0wsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxpQ0FBaUM7U0FDdkMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKuWvvOWFpemdmeaAgei1hOa6kCAqL1xyXG4vLyBpbXBvcnQgeyByZWxlYXNlX2Jhbm5lciB9IGZyb20gJy4vYmFubmVyJ1xyXG5cclxuUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIHNob3c6IGZhbHNlLFxyXG4gICAgYmFubmVyOiAnJ1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOafpeeci+atpemqpFxyXG4gICAqL1xyXG4gIHRvU3RlcCgpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcvcGFnZXMvcmVsZWFzZXMvc3RlcC9zdGVwJyxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sz6K+35Y+R5biD6L2m5L2NXHJcbiAgICovXHJcbiAgYXBwbHkoKSB7XHJcbiAgICAvLyB0aGlzLnNldERhdGEoe1xyXG4gICAgLy8gICBzaG93OiB0cnVlXHJcbiAgICAvLyB9KVxyXG4gICAgLy8gcmV0dXJuXHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnL3BhZ2VzL3JlbGVhc2VzL2FwcGx5L2FwcGx5JyxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgb25IaWRlKCkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgc2hvdzogZmFsc2VcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog5oiR55qE6L2m5L2NXHJcbiAgICovXHJcbiAgbXlQYXJrcygpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcvcGFnZXMvcmVsZWFzZXMvbXlQYXJrcy9teVBhcmtzJyxcclxuICAgIH0pXHJcbiAgfSxcclxufSkiXX0=