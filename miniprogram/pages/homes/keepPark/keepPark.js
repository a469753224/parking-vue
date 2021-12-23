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
var server_1 = require("../../../api/api/home/server");
var server_2 = require("../../../api/api/user/server");
var wxPay_1 = require("../../../utils/wxPay");
var server = new server_1.default();
var user = new server_2.default();
var pay = new wxPay_1.default();
var util_1 = require("../../../utils/util");
Page({
    data: {
        lockId: '',
        carList: [],
        enTime: '00:00',
        endTime: '00:00',
        beginTime: '',
        beTime: '00:00',
        plate: '',
        reserve: {},
        value: true,
        isAdd: false,
        parkInfo: {
            estateId: ''
        }
    },
    onLoad: function (options) {
        if (!util_1.isEmpty(options)) {
            this.setData({
                parkInfo: JSON.parse(options.parkInfo)
            });
        }
    },
    getNowTime: function () {
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var start = date.getTime();
        var end = date.getTime() + 15 * 60 * 1000;
        this.setData({
            enTime: util_1.formatMinute(end),
            beTime: util_1.formatMinute(start),
            endTime: Date.parse(y + "/" + m + "/" + d + " " + util_1.formatMinute(end) + ":00").toString(),
            beginTime: Date.parse(y + "/" + m + "/" + d + " " + util_1.formatMinute(start) + ":00").toString()
        });
    },
    selectPlateAll: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, data, carList_1, plate_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, user.selectPlateAll()];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            data = result.data;
                            carList_1 = [];
                            plate_1 = '';
                            data.forEach(function (element) {
                                if (element.status == 1) {
                                    plate_1 = element.plate;
                                }
                                carList_1.push(element.plate);
                            });
                            this.setData({
                                plate: plate_1,
                                carList: carList_1
                            });
                        }
                        return [2];
                }
            });
        });
    },
    lockDate: function () {
        return __awaiter(this, void 0, void 0, function () {
            var lockId, param, result, title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lockId = this.data.lockId;
                        param = {
                            lockId: lockId
                        };
                        return [4, server.lockDate(param)];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            this.setData({
                                reserve: result.data
                            });
                        }
                        else {
                            title = "\u62B1\u6B49\uFF0C" + result.msg;
                            wx.showToast({
                                title: title,
                                icon: 'none'
                            });
                            setTimeout(function () {
                                wx.reLaunch({
                                    url: '/pages/home/home',
                                });
                            }, 1000);
                        }
                        return [2];
                }
            });
        });
    },
    bindTimeChange: function (e) {
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        this.setData({
            enTime: e.detail.value,
            endTime: Date.parse(y + "/" + m + "/" + d + " " + e.detail.value + ":00").toString(),
        });
    },
    selectPlate: function () {
        wx.navigateTo({
            url: '/pages/users/myCars/myCars?select=1',
        });
    },
    createOrder: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, plate, beTime, enTime, param, result, code, payParam, orderId_1, data, title, params, res, orderId_2, msg;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.data, plate = _a.plate, beTime = _a.beTime, enTime = _a.enTime;
                        if (!plate) {
                            wx.showToast({
                                title: '请选择车牌号',
                                icon: 'none'
                            });
                            return [2];
                        }
                        if (!this.data.value) {
                            wx.showToast({
                                title: '请勾选押金项',
                                icon: 'none'
                            });
                            return [2];
                        }
                        param = {
                            plate: plate,
                            payType: 'wx',
                            endTime: "" + util_1.formatTimeStamp(enTime),
                            beginTime: "" + util_1.formatTimeStamp(beTime),
                            estateId: this.data.parkInfo.estateId
                        };
                        return [4, server.wxToFreeze(param)];
                    case 1:
                        result = _b.sent();
                        code = result.code;
                        if (!(code == 0)) return [3, 6];
                        payParam = result.data.orderStr;
                        orderId_1 = result.data.orderId;
                        return [4, pay.pay(payParam)];
                    case 2:
                        data = _b.sent();
                        title = '预留成功';
                        if (!(data.code == 200)) return [3, 3];
                        wx.showToast({
                            title: title,
                            icon: 'none'
                        });
                        setTimeout(function () {
                            wx.reLaunch({
                                url: "/pages/homes/order/order?orderId=" + orderId_1
                            });
                        }, 500);
                        return [3, 5];
                    case 3:
                        wx.showToast({
                            title: title,
                            icon: 'none'
                        });
                        params = {
                            orderId: orderId_1
                        };
                        return [4, server.cancelPaking(params)];
                    case 4:
                        res = _b.sent();
                        if (res.code == 0) {
                            setTimeout(function () {
                                wx.reLaunch({
                                    url: "/pages/home/home"
                                });
                            }, 500);
                        }
                        _b.label = 5;
                    case 5: return [3, 7];
                    case 6:
                        if (code == 20) {
                            orderId_2 = result.data.orderId;
                            msg = result.msg;
                            wx.showToast({
                                title: msg,
                                icon: 'none'
                            });
                            setTimeout(function () {
                                wx.reLaunch({
                                    url: "/pages/homes/order/order?orderId=" + orderId_2
                                });
                            }, 500);
                        }
                        else {
                            wx.showToast({
                                title: result.msg,
                                icon: 'none'
                            });
                            setTimeout(function () {
                                wx.reLaunch({
                                    url: "/pages/home/home"
                                });
                            }, 500);
                        }
                        _b.label = 7;
                    case 7: return [2];
                }
            });
        });
    },
    onChangeChked: function (e) {
        this.setData({
            value: e.detail
        });
    },
    onShow: function () {
        var isAdd = this.data.isAdd;
        if (!isAdd) {
            if (!this.data.plate) {
                this.selectPlateAll();
            }
        }
        this.getNowTime();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VlcFBhcmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJrZWVwUGFyay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVEQUFxRDtBQUNyRCx1REFBcUQ7QUFDckQsOENBQXdDO0FBR3hDLElBQU0sTUFBTSxHQUFHLElBQUksZ0JBQVUsRUFBRSxDQUFBO0FBQy9CLElBQU0sSUFBSSxHQUFHLElBQUksZ0JBQVUsRUFBRSxDQUFBO0FBQzdCLElBQU0sR0FBRyxHQUFHLElBQUksZUFBSyxFQUFFLENBQUE7QUFHdkIsNENBSTRCO0FBRTVCLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxFQUFFO1FBQ1YsT0FBTyxFQUFPLEVBQUU7UUFDaEIsTUFBTSxFQUFFLE9BQU87UUFDZixPQUFPLEVBQUUsT0FBTztRQUNoQixTQUFTLEVBQUUsRUFBRTtRQUNiLE1BQU0sRUFBRSxPQUFPO1FBQ2YsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUUsRUFBRTtRQUNYLEtBQUssRUFBRSxJQUFJO1FBQ1gsS0FBSyxFQUFFLEtBQUs7UUFDWixRQUFRLEVBQUU7WUFDUixRQUFRLEVBQUUsRUFBRTtTQUNiO0tBQ0Y7SUFLRCxNQUFNLEVBQUUsVUFBVSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxjQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBUyxPQUFPLENBQUMsUUFBUSxDQUFDO2FBQy9DLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUtELFVBQVU7UUFDUixJQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUMxQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFB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L1xyXG5pbXBvcnQgSG9tZVNlcnZlciBmcm9tICcuLi8uLi8uLi9hcGkvYXBpL2hvbWUvc2VydmVyJ1xyXG5pbXBvcnQgVXNlclNlcnZlciBmcm9tICcuLi8uLi8uLi9hcGkvYXBpL3VzZXIvc2VydmVyJ1xyXG5pbXBvcnQgV3hQYXkgZnJvbSAnLi4vLi4vLi4vdXRpbHMvd3hQYXknXHJcblxyXG4vKiDlrp7kvovljJbmqKHlnZcgKi9cclxuY29uc3Qgc2VydmVyID0gbmV3IEhvbWVTZXJ2ZXIoKVxyXG5jb25zdCB1c2VyID0gbmV3IFVzZXJTZXJ2ZXIoKVxyXG5jb25zdCBwYXkgPSBuZXcgV3hQYXkoKVxyXG5cclxuLyrlr7zlhaXlsI/lt6XlhbcqL1xyXG5pbXBvcnQge1xyXG4gIGZvcm1hdE1pbnV0ZSxcclxuICBmb3JtYXRUaW1lU3RhbXAsXHJcbiAgaXNFbXB0eVxyXG59IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnXHJcblxyXG5QYWdlKHtcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgbG9ja0lkOiAnJyxcclxuICAgIGNhckxpc3Q6IDxhbnk+W10sXHJcbiAgICBlblRpbWU6ICcwMDowMCcsXHJcbiAgICBlbmRUaW1lOiAnMDA6MDAnLFxyXG4gICAgYmVnaW5UaW1lOiAnJyxcclxuICAgIGJlVGltZTogJzAwOjAwJyxcclxuICAgIHBsYXRlOiAnJyxcclxuICAgIHJlc2VydmU6IHt9LFxyXG4gICAgdmFsdWU6IHRydWUsXHJcbiAgICBpc0FkZDogZmFsc2UsXHJcbiAgICBwYXJrSW5mbzoge1xyXG4gICAgICBlc3RhdGVJZDogJydcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIGlmICghaXNFbXB0eShvcHRpb25zKSkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHBhcmtJbmZvOiBKU09OLnBhcnNlKDxzdHJpbmc+b3B0aW9ucy5wYXJrSW5mbylcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDojrflj5blvZPliY3ml7bpl7Tml6XmnJ9cclxuICAgKi9cclxuICBnZXROb3dUaW1lKCkge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIGxldCB5ID0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICBsZXQgbSA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICAgIGxldCBkID0gZGF0ZS5nZXREYXRlKClcclxuICAgIGNvbnN0IHN0YXJ0ID0gZGF0ZS5nZXRUaW1lKClcclxuICAgIGNvbnN0IGVuZCA9IGRhdGUuZ2V0VGltZSgpICsgMTUgKiA2MCAqIDEwMDBcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGVuVGltZTogZm9ybWF0TWludXRlKGVuZCksXHJcbiAgICAgIGJlVGltZTogZm9ybWF0TWludXRlKHN0YXJ0KSxcclxuICAgICAgZW5kVGltZTogRGF0ZS5wYXJzZShgJHt5fS8ke219LyR7ZH0gJHtmb3JtYXRNaW51dGUoZW5kKX06MDBgKS50b1N0cmluZygpLFxyXG4gICAgICBiZWdpblRpbWU6IERhdGUucGFyc2UoYCR7eX0vJHttfS8ke2R9ICR7Zm9ybWF0TWludXRlKHN0YXJ0KX06MDBgKS50b1N0cmluZygpXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluW9k+WJjeeUqOaIt+eahOi9pui+hlxyXG4gICAqL1xyXG4gIGFzeW5jIHNlbGVjdFBsYXRlQWxsKCkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXNlci5zZWxlY3RQbGF0ZUFsbCgpXHJcbiAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVzdWx0LmRhdGFcclxuICAgICAgbGV0IGNhckxpc3Q6IGFueVtdID0gW11cclxuICAgICAgbGV0IHBsYXRlID0gJydcclxuICAgICAgZGF0YS5mb3JFYWNoKChlbGVtZW50OiB7IHN0YXR1czogbnVtYmVyOyBwbGF0ZTogc3RyaW5nIH0pID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudC5zdGF0dXMgPT0gMSkge1xyXG4gICAgICAgICAgcGxhdGUgPSBlbGVtZW50LnBsYXRlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhckxpc3QucHVzaChlbGVtZW50LnBsYXRlKVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHBsYXRlLFxyXG4gICAgICAgIGNhckxpc3RcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bovabkvY3plIHkv6Hmga9cclxuICAgKi9cclxuICBhc3luYyBsb2NrRGF0ZSgpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIGxvY2tJZFxyXG4gICAgfSA9IHRoaXMuZGF0YVxyXG4gICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgIGxvY2tJZFxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyLmxvY2tEYXRlKHBhcmFtKVxyXG4gICAgaWYgKHJlc3VsdC5jb2RlID09IDApIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICByZXNlcnZlOiByZXN1bHQuZGF0YVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHRpdGxlID0gYOaKseatie+8jCR7cmVzdWx0Lm1zZ31gXHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgIH0pXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgIHVybDogJy9wYWdlcy9ob21lL2hvbWUnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmAieaLqeaXtumXtFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fX0gZSBcclxuICAgKi9cclxuICBiaW5kVGltZUNoYW5nZShlOiB7IGRldGFpbDogeyB2YWx1ZTogYW55IH0gfSkge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIGxldCB5ID0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICBsZXQgbSA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICAgIGxldCBkID0gZGF0ZS5nZXREYXRlKClcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGVuVGltZTogZS5kZXRhaWwudmFsdWUsXHJcbiAgICAgIGVuZFRpbWU6IERhdGUucGFyc2UoYCR7eX0vJHttfS8ke2R9ICR7ZS5kZXRhaWwudmFsdWV9OjAwYCkudG9TdHJpbmcoKSxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6YCJ5oup6L2m5L2NXHJcbiAgICovXHJcbiAgc2VsZWN0UGxhdGUoKSB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnL3BhZ2VzL3VzZXJzL215Q2Fycy9teUNhcnM/c2VsZWN0PTEnLFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpooTnuqbovabkvY1cclxuICAgKi9cclxuICBhc3luYyBjcmVhdGVPcmRlcigpIHtcclxuICAgIGxldCB7IHBsYXRlLCBiZVRpbWUsIGVuVGltZSB9ID0gdGhpcy5kYXRhXHJcbiAgICBpZiAoIXBsYXRlKSB7XHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6ICfor7fpgInmi6novabniYzlj7cnLFxyXG4gICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmICghdGhpcy5kYXRhLnZhbHVlKSB7XHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6ICfor7fli77pgInmirzph5HpobknLFxyXG4gICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICBwbGF0ZSxcclxuICAgICAgcGF5VHlwZTogJ3d4JyxcclxuICAgICAgZW5kVGltZTogYCR7Zm9ybWF0VGltZVN0YW1wKGVuVGltZSl9YCxcclxuICAgICAgYmVnaW5UaW1lOiBgJHtmb3JtYXRUaW1lU3RhbXAoYmVUaW1lKX1gLFxyXG4gICAgICBlc3RhdGVJZDogdGhpcy5kYXRhLnBhcmtJbmZvLmVzdGF0ZUlkXHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZXJ2ZXIud3hUb0ZyZWV6ZShwYXJhbSlcclxuICAgIGNvbnN0IHsgY29kZSB9ID0gcmVzdWx0XHJcbiAgICBpZiAoY29kZSA9PSAwKSB7XHJcbiAgICAgIGNvbnN0IHBheVBhcmFtID0gcmVzdWx0LmRhdGEub3JkZXJTdHJcclxuICAgICAgbGV0IHtcclxuICAgICAgICAgIG9yZGVySWRcclxuICAgICAgfSA9IHJlc3VsdC5kYXRhXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwYXkucGF5KHBheVBhcmFtKVxyXG4gICAgICBsZXQgdGl0bGUgPSAn6aKE55WZ5oiQ5YqfJ1xyXG4gICAgICBpZiAoZGF0YS5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgICAgICAgIHVybDogYC9wYWdlcy9ob21lcy9vcmRlci9vcmRlcj9vcmRlcklkPSR7b3JkZXJJZH1gXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICBvcmRlcklkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzZXJ2ZXIuY2FuY2VsUGFraW5nKHBhcmFtcylcclxuICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgIHVybDogYC9wYWdlcy9ob21lL2hvbWVgXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH0gZWxzZSBpZiAoY29kZSA9PSAyMCkge1xyXG4gICAgICBsZXQgeyBvcmRlcklkIH0gPSByZXN1bHQuZGF0YVxyXG4gICAgICBsZXQgeyBtc2cgfSA9IHJlc3VsdFxyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6IG1zZyxcclxuICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICB9KVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICB1cmw6IGAvcGFnZXMvaG9tZXMvb3JkZXIvb3JkZXI/b3JkZXJJZD0ke29yZGVySWR9YFxyXG4gICAgICAgICAgfSlcclxuICAgICAgfSwgNTAwKTtcclxuICB9IGVsc2Uge1xyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6IHJlc3VsdC5tc2csXHJcbiAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgfSlcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL2hvbWUvaG9tZWBcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgfVxyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmirzph5HpgInmi6lcclxuICAgKiBAcGFyYW0ge09iamVjY3R9IGUg6IqC54K55a+56LGhIFxyXG4gICAqL1xyXG4gIG9uQ2hhbmdlQ2hrZWQoZTogeyBkZXRhaWw6IGFueSB9KSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB2YWx1ZTogZS5kZXRhaWxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIGlzQWRkXHJcbiAgICB9ID0gdGhpcy5kYXRhXHJcbiAgICBpZiAoIWlzQWRkKSB7XHJcbiAgICAgIGlmICghdGhpcy5kYXRhLnBsYXRlKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQbGF0ZUFsbCgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZ2V0Tm93VGltZSgpXHJcbiAgfVxyXG59KSJdfQ==