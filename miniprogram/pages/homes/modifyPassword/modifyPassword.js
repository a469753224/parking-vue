"use strict";
Page({
    data: {
        codeFlag: false,
        time: 1 * 1 * 60 * 1000,
        timeData: {}
    },
    onLoad: function (_options) { },
    onChange: function (e) {
        this.setData({
            timeData: e.detail,
        });
    },
    getCode: function () {
        this.setData({
            codeFlag: true
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZ5UGFzc3dvcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RpZnlQYXNzd29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEtBQUs7UUFDZixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSTtRQUN2QixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBS0QsTUFBTSxFQUFFLFVBQVUsUUFBUSxJQUFJLENBQUM7SUFFL0IsUUFBUSxFQUFSLFVBQVMsQ0FBbUI7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTTtTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBS0QsT0FBTztRQUNMLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJQYWdlKHtcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgY29kZUZsYWc6IGZhbHNlLFxyXG4gICAgdGltZTogMSAqIDEgKiA2MCAqIDEwMDAsXHJcbiAgICB0aW1lRGF0YToge31cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZDogZnVuY3Rpb24gKF9vcHRpb25zKSB7IH0sXHJcblxyXG4gIG9uQ2hhbmdlKGU6IHsgZGV0YWlsOiBhbnk7IH0pIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHRpbWVEYXRhOiBlLmRldGFpbCxcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPlumqjOivgeeggVxyXG4gICAqL1xyXG4gIGdldENvZGUoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjb2RlRmxhZzogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcbn0pIl19