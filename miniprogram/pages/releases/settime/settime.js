"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../../utils/util");
var server_1 = require("../../../api/api/car/server");
var server = new server_1.default();
Page({
    data: {
        placeId: '',
        rental: '',
        endDate: '',
        beginDate: '',
        rentalCycle: [],
        times: []
    },
    onLoad: function (options) {
        if (!util_1.isEmpty(options)) {
            var _a = JSON.parse(options.row), placeId = _a.placeId, rental = _a.rental, rentalCycle = _a.rentalCycle, beginDate = _a.beginDate, endDate = _a.endDate;
            this.setData({ placeId: placeId, rental: rental, rentalCycle: rentalCycle, beginDate: beginDate, endDate: endDate });
        }
    },
    setTimes: function () {
        var i = 0;
        var a = 0;
        var hours = [];
        var minutes = [];
        var times = this.data.times;
        while (i < 24) {
            i = i > 9 ? i : "0" + i;
            hours.push(i);
            i++;
        }
        while (a < 60) {
            a = a > 9 ? a : "0" + a;
            minutes.push(a);
            a++;
        }
        times.push(hours);
        times.push(minutes);
        this.setData({ times: times });
    },
    onShow: function () {
        this.setTimes();
        this.setData({
            rental: util_1.repeatDesc(this.data.rentalCycle)
        });
    },
    repeat: function () {
        wx.navigateTo({
            url: "/pages/releases/repeat/repeat?repeat=" + JSON.stringify(this.data.rentalCycle),
        });
    },
    checkBeginTime: function (e) {
        var h = e.detail.value[0];
        var m = e.detail.value[1];
        var houre = this.data.times[0][h];
        var minute = this.data.times[1][m];
        this.setData({
            beginDate: houre + ":" + minute,
        });
    },
    checkEndTime: function (e) {
        var h = e.detail.value[0];
        var m = e.detail.value[1];
        var houre = this.data.times[0][h];
        var minute = this.data.times[1][m];
        this.setData({
            endDate: houre + ":" + minute,
        });
    },
    parkingTimeModify: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, placeId, rentalCycle, beginDate, endDate, param, result, title;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.data, placeId = _a.placeId, rentalCycle = _a.rentalCycle, beginDate = _a.beginDate, endDate = _a.endDate;
                        param = {
                            placeId: placeId,
                            rentalCycle: rentalCycle,
                            beginDate: util_1.formatTimeStamp(beginDate),
                            endDate: util_1.formatTimeStamp(endDate)
                        };
                        return [4, server.parkingTimeModify(param)];
                    case 1:
                        result = _b.sent();
                        title = result.code == 0 ? '设置成功' : result.msg;
                        if (result.code == 0) {
                            wx.navigateBack({
                                delta: 1,
                            });
                        }
                        wx.showToast({
                            title: title,
                            icon: 'none'
                        });
                        return [2];
                }
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0Q0FBMEU7QUFHMUUsc0RBQWdEO0FBR2hELElBQU0sTUFBTSxHQUFHLElBQUksZ0JBQU0sRUFBRSxDQUFBO0FBRTNCLElBQUksQ0FBQztJQUtKLElBQUksRUFBRTtRQUNMLE9BQU8sRUFBRSxFQUFFO1FBQ1gsTUFBTSxFQUFFLEVBQUU7UUFDVixPQUFPLEVBQUUsRUFBRTtRQUNYLFNBQVMsRUFBRSxFQUFFO1FBQ2IsV0FBVyxFQUFFLEVBQUU7UUFDZixLQUFLLEVBQUUsRUFBRTtLQUNUO0lBS0QsTUFBTSxFQUFFLFVBQVUsT0FBTztRQUN4QixJQUFJLENBQUMsY0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2xCLElBQUEsS0FBdUQsSUFBSSxDQUFDLEtBQUssQ0FBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQWpGLE9BQU8sYUFBQSxFQUFFLE1BQU0sWUFBQSxFQUFFLFdBQVcsaUJBQUEsRUFBRSxTQUFTLGVBQUEsRUFBRSxPQUFPLGFBQWlDLENBQUE7WUFDdkYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLFNBQVMsV0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQTtTQUNsRTtJQUNGLENBQUM7SUFLRCxRQUFRLEVBQVI7UUFDQyxJQUFJLENBQUMsR0FBTyxDQUFDLENBQUE7UUFDYixJQUFJLENBQUMsR0FBTyxDQUFDLENBQUE7UUFDYixJQUFJLEtBQUssR0FBWSxFQUFFLENBQUE7UUFDdkIsSUFBSSxPQUFPLEdBQVksRUFBRSxDQUFBO1FBQ3BCLElBQUEsS0FBSyxHQUFTLElBQUksQ0FBQyxJQUFJLE1BQWxCLENBQWtCO1FBQzVCLE9BQU0sQ0FBQyxHQUFH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LENBQUM7eUJBQ3RDLENBQUE7d0JBQ2MsV0FBTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUE5QyxNQUFNLEdBQUcsU0FBcUM7d0JBQzlDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFBO3dCQUNwRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFOzRCQUNyQixFQUFFLENBQUMsWUFBWSxDQUFDO2dDQUNmLEtBQUssRUFBRSxDQUFDOzZCQUNSLENBQUMsQ0FBQTt5QkFDRjt3QkFDRCxFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNaLEtBQUssT0FBQTs0QkFDTCxJQUFJLEVBQUUsTUFBTTt5QkFDWixDQUFDLENBQUE7Ozs7O0tBQ0Y7Q0FFRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDlr7zlhaXlt6XlhbfnsbsgKi9cclxuaW1wb3J0IHsgcmVwZWF0RGVzYywgaXNFbXB0eSwgZm9ybWF0VGltZVN0YW1wIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCdcclxuXHJcbi8qIOWvvOWFpeaooeWdlyAqL1xyXG5pbXBvcnQgU2VydmVyIGZyb20gJy4uLy4uLy4uL2FwaS9hcGkvY2FyL3NlcnZlcidcclxuXHJcbi8qIOWunuS+i+WMluaooeWdlyAqL1xyXG5jb25zdCBzZXJ2ZXIgPSBuZXcgU2VydmVyKClcclxuXHJcblBhZ2Uoe1xyXG5cclxuXHQvKipcclxuXHQgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuXHQgKi9cclxuXHRkYXRhOiB7XHJcblx0XHRwbGFjZUlkOiAnJyxcclxuXHRcdHJlbnRhbDogJycsXHJcblx0XHRlbmREYXRlOiAnJyxcclxuXHRcdGJlZ2luRGF0ZTogJycsXHJcblx0XHRyZW50YWxDeWNsZTogW10sXHJcblx0XHR0aW1lczogW11cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG5cdCAqL1xyXG5cdG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuXHRcdGlmICghaXNFbXB0eShvcHRpb25zKSkge1xyXG5cdFx0XHRsZXQgeyBwbGFjZUlkLCByZW50YWwsIHJlbnRhbEN5Y2xlLCBiZWdpbkRhdGUsIGVuZERhdGUgfSA9IEpTT04ucGFyc2UoPGFueT5vcHRpb25zLnJvdylcclxuXHRcdFx0dGhpcy5zZXREYXRhKHsgcGxhY2VJZCwgcmVudGFsLCByZW50YWxDeWNsZSwgYmVnaW5EYXRlLCBlbmREYXRlIH0pXHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICog6K6+572u5pe26Ze0XHJcblx0ICovXHJcblx0c2V0VGltZXMoKXtcclxuXHRcdGxldCBpOmFueSA9IDBcclxuXHRcdGxldCBhOmFueSA9IDBcclxuXHRcdGxldCBob3VyczpudW1iZXJbXSA9IFtdXHJcblx0XHRsZXQgbWludXRlczpudW1iZXJbXSA9IFtdXHJcblx0XHRsZXQge3RpbWVzfSA9IDxhbnk+dGhpcy5kYXRhXHJcblx0XHR3aGlsZShpIDwgMjQpe1xyXG5cdFx0XHRpID0gaSA+IDkgPyBpIDogYDAke2l9YFxyXG5cdFx0XHRob3Vycy5wdXNoKGkpXHJcblx0XHRcdGkrK1xyXG5cdFx0fVxyXG5cdFx0d2hpbGUoYSA8IDYwKXtcclxuXHRcdFx0YSA9IGEgPiA5ID8gYSA6IGAwJHthfWBcclxuXHRcdFx0bWludXRlcy5wdXNoKGEpXHJcblx0XHRcdGErK1xyXG5cdFx0fVxyXG5cdFx0dGltZXMucHVzaChob3VycylcclxuXHRcdHRpbWVzLnB1c2gobWludXRlcylcclxuXHRcdHRoaXMuc2V0RGF0YSh7IHRpbWVzIH0pXHJcblx0fSxcclxuXHJcblx0b25TaG93KCkge1xyXG5cdFx0dGhpcy5zZXRUaW1lcygpXHJcblx0XHR0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRyZW50YWw6IHJlcGVhdERlc2ModGhpcy5kYXRhLnJlbnRhbEN5Y2xlKVxyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDph43lpI3orr7nva5cclxuXHQgKi9cclxuXHRyZXBlYXQoKSB7XHJcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0dXJsOiBgL3BhZ2VzL3JlbGVhc2VzL3JlcGVhdC9yZXBlYXQ/cmVwZWF0PSR7SlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLnJlbnRhbEN5Y2xlKX1gLFxyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDmi6nlvIDlp4vml7bpl7RcclxuXHQgKiBAcGFyYW0gZSBcclxuXHQgKi9cclxuXHRjaGVja0JlZ2luVGltZShlOiB7IGRldGFpbDogeyB2YWx1ZTogYW55W10gfSB9KSB7XHJcblx0XHRsZXQgaCA9IGUuZGV0YWlsLnZhbHVlWzBdXHJcblx0XHRsZXQgbSA9IGUuZGV0YWlsLnZhbHVlWzFdXHJcblx0XHRsZXQgaG91cmUgPSB0aGlzLmRhdGEudGltZXNbMF1baF1cclxuXHRcdGxldCBtaW51dGUgPSB0aGlzLmRhdGEudGltZXNbMV1bbV1cclxuXHRcdHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdGJlZ2luRGF0ZTogYCR7aG91cmV9OiR7bWludXRlfWAsXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIOaLqeW8gOWni+aXtumXtFxyXG5cdCAqIEBwYXJhbSBlIFxyXG5cdCAqL1xyXG5cdGNoZWNrRW5kVGltZShlOiB7IGRldGFpbDogeyB2YWx1ZTogYW55W10gfSB9KSB7XHJcblx0XHRsZXQgaCA9IGUuZGV0YWlsLnZhbHVlWzBdXHJcblx0XHRsZXQgbSA9IGUuZGV0YWlsLnZhbHVlWzFdXHJcblx0XHRsZXQgaG91cmUgPSB0aGlzLmRhdGEudGltZXNbMF1baF1cclxuXHRcdGxldCBtaW51dGUgPSB0aGlzLmRhdGEudGltZXNbMV1bbV1cclxuXHRcdHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdGVuZERhdGU6IGAke2hvdXJlfToke21pbnV0ZX1gLFxyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDkv53lrZhcclxuXHQgKi9cclxuXHRhc3luYyBwYXJraW5nVGltZU1vZGlmeSgpIHtcclxuXHRcdGxldCB7IHBsYWNlSWQsIHJlbnRhbEN5Y2xlLCBiZWdpbkRhdGUsIGVuZERhdGUgfSA9IHRoaXMuZGF0YVxyXG5cdFx0Y29uc3QgcGFyYW0gPSB7XHJcblx0XHRcdHBsYWNlSWQsXHJcblx0XHRcdHJlbnRhbEN5Y2xlLFxyXG5cdFx0XHRiZWdpbkRhdGU6IGZvcm1hdFRpbWVTdGFtcCg8YW55PmJlZ2luRGF0ZSksXHJcblx0XHRcdGVuZERhdGU6IGZvcm1hdFRpbWVTdGFtcCg8YW55PmVuZERhdGUpXHJcblx0XHR9XHJcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBzZXJ2ZXIucGFya2luZ1RpbWVNb2RpZnkocGFyYW0pXHJcblx0XHRjb25zdCB0aXRsZSA9IHJlc3VsdC5jb2RlID09IDAgPyAn6K6+572u5oiQ5YqfJyA6IHJlc3VsdC5tc2dcclxuXHRcdGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcblx0XHRcdHd4Lm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0ZGVsdGE6IDEsXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0XHR3eC5zaG93VG9hc3Qoe1xyXG5cdFx0XHR0aXRsZSxcclxuXHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcbn0pIl19