"use strict";
Page({
    data: {
        lgt: '108.368034',
        lat: '22.853691',
        flag: false,
        crowFlag: false
    },
    onLoad: function (_options) {
    },
    selectCity: function () {
        this.setData({
            crowFlag: !this.data.crowFlag
        });
    },
    cancel: function () {
        this.setData({
            flag: false
        });
    },
    focus: function () {
        this.setData({
            flag: true
        });
    },
    blur: function () {
        this.setData({
            flag: false
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb3NpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0YsR0FBRyxFQUFFLFlBQVk7UUFDakIsR0FBRyxFQUFFLFdBQVc7UUFDaEIsSUFBSSxFQUFFLEtBQUs7UUFDWCxRQUFRLEVBQUUsS0FBSztLQUNsQjtJQUtELE1BQU0sRUFBRSxVQUFVLFFBQVE7SUFFMUIsQ0FBQztJQUtELFVBQVU7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1NBQ2hDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFLRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULElBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUtELEtBQUs7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUE7SUFDTixDQUFDO0lBS0QsSUFBSTtRQUNBLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxJQUFJLEVBQUUsS0FBSztTQUNkLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJQYWdlKHtcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgICBsZ3Q6ICcxMDguMzY4MDM0JyxcclxuICAgICAgbGF0OiAnMjIuODUzNjkxJyxcclxuICAgICAgZmxhZzogZmFsc2UsXHJcbiAgICAgIGNyb3dGbGFnOiBmYWxzZVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAoX29wdGlvbnMpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6YCJ5oup5Z+O5biCXHJcbiAgICovXHJcbiAgc2VsZWN0Q2l0eSgpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgY3Jvd0ZsYWc6ICF0aGlzLmRhdGEuY3Jvd0ZsYWdcclxuICAgICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDlj5bmtojpgInmi6lcclxuICAgKi9cclxuICBjYW5jZWwoKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGZsYWc6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W5YWJ5qCHXHJcbiAgICovXHJcbiAgZm9jdXMoKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGZsYWc6IHRydWVcclxuICAgICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDlpLHljrvlhYnmoIdcclxuICAgKi9cclxuICBibHVyKCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBmbGFnOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gIH1cclxufSkiXX0=