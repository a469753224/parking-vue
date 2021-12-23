"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../../utils/util");
Page({
    data: {
        list: ['每周一', '每周二', '每周三', '每周四', '每周五', '每周六', '每周日'],
        result: []
    },
    onLoad: function (options) {
        if (!util_1.isEmpty(options)) {
            var result = JSON.parse(options.repeat);
            result = result.map(function (item) {
                return "" + item;
            });
            this.setData({ result: result });
        }
    },
    onChange: function (event) {
        this.setData({
            result: event.detail,
        });
    },
    submit: function () {
        var pages = getCurrentPages();
        var prevPage = pages[pages.length - 2];
        var rentalCycle = this.data.result;
        rentalCycle = rentalCycle.map(function (item) {
            return parseInt(item);
        });
        prevPage.setData({
            rentalCycle: rentalCycle.sort(),
        });
        wx.navigateBack({
            delta: 1,
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwZWF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVwZWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNENBQTJDO0FBRTNDLElBQUksQ0FBQztJQUtKLElBQUksRUFBRTtRQUNMLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUN2RCxNQUFNLEVBQUUsRUFBRTtLQUNWO0lBS0QsTUFBTSxFQUFFLFVBQVUsT0FBTztRQUN4QixJQUFHLENBQUMsY0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFDO1lBQ3BCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQzVDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBUztnQkFDN0IsT0FBTyxLQUFHLElBQU0sQ0FBQTtZQUNqQixDQUFDLENBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxNQUFNLFFBQUEsRUFBQyxDQUFDLENBQUE7U0FDdEI7SUFDRixDQUFDO0lBRUQsUUFBUSxFQUFSLFVBQVMsS0FBc0I7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNaLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtTQUNwQixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxFQUFOO1FBQ0MsSUFBTSxLQUFLLEdBQUcsZUFBZSxFQUFFLENBQUM7UUFDaEMsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDeEMsSUFBSSxXQUFXLEdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDdkMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFZO1lBQzFDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNoQixXQUFXLEVBQUMsV0FBVyxDQUFDLElBQUksRUFBRTtTQUM5QixDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUM7U0FDUixDQUFDLENBQUE7SUFDSCxDQUFDO0NBRUQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyog5a+85YWl5bel5YW357G7ICovXHJcbmltcG9ydCB7aXNFbXB0eX0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCdcclxuXHJcblBhZ2Uoe1xyXG5cclxuXHQvKipcclxuXHQgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuXHQgKi9cclxuXHRkYXRhOiB7XHJcblx0XHRsaXN0OiBbJ+avj+WRqOS4gCcsICfmr4/lkajkuownLCAn5q+P5ZGo5LiJJywgJ+avj+WRqOWbmycsICfmr4/lkajkupQnLCAn5q+P5ZGo5YWtJywgJ+avj+WRqOaXpSddLFxyXG5cdFx0cmVzdWx0OiBbXVxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcblx0ICovXHJcblx0b25Mb2FkOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cdFx0aWYoIWlzRW1wdHkob3B0aW9ucykpe1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZSg8YW55Pm9wdGlvbnMucmVwZWF0KVxyXG5cdFx0XHRyZXN1bHQgPSByZXN1bHQubWFwKChpdGVtOiBhbnkpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gYCR7aXRlbX1gXHJcblx0XHRcdH0pXHJcblx0XHRcdHRoaXMuc2V0RGF0YSh7cmVzdWx0fSlcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRvbkNoYW5nZShldmVudDogeyBkZXRhaWw6IGFueSB9KSB7XHJcblx0XHR0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRyZXN1bHQ6IGV2ZW50LmRldGFpbCxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblxyXG5cdHN1Ym1pdCgpIHtcclxuXHRcdGNvbnN0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcblx0XHRjb25zdCBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdXHJcblx0XHRsZXQgcmVudGFsQ3ljbGUgPSA8YW55PnRoaXMuZGF0YS5yZXN1bHRcclxuXHRcdHJlbnRhbEN5Y2xlID0gcmVudGFsQ3ljbGUubWFwKChpdGVtOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0cmV0dXJuIHBhcnNlSW50KGl0ZW0pXHJcblx0XHR9KVxyXG5cdFx0cHJldlBhZ2Uuc2V0RGF0YSh7XHJcblx0XHRcdHJlbnRhbEN5Y2xlOnJlbnRhbEN5Y2xlLnNvcnQoKSxcclxuXHRcdH0pXHJcblx0XHR3eC5uYXZpZ2F0ZUJhY2soe1xyXG5cdFx0XHRkZWx0YTogMSxcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcbn0pIl19