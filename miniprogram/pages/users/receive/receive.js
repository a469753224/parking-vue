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
var server_1 = require("../../../api/api/coupon/server");
var server = new server_1.default();
Page({
    data: {
        coupons: []
    },
    onLoad: function (_options) {
        this.leadCoupon();
    },
    leadCoupon: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, server.leadCoupon()];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            data = result.data;
                            this.setData({
                                coupons: data
                            });
                        }
                        return [2];
                }
            });
        });
    },
    receiveCoupon: function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var couponId, param, result, title;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        couponId = e.currentTarget.dataset.id;
                        param = { couponId: couponId };
                        return [4, server.receiveCoupon(param)];
                    case 1:
                        result = _a.sent();
                        title = result.code == 0 ? '领取成功' : result.msg;
                        if (result.code == 0) {
                            wx.setStorageSync('coupon', false);
                        }
                        wx.showToast({
                            title: title,
                            icon: 'none'
                        });
                        setTimeout(function () {
                            _this.leadCoupon();
                        }, 500);
                        return [2];
                }
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZWl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlY2VpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5REFBeUQ7QUFHekQsSUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBWSxFQUFFLENBQUE7QUFFakMsSUFBSSxDQUFDO0lBS0osSUFBSSxFQUFFO1FBQ0wsT0FBTyxFQUFFLEVBQUU7S0FDWDtJQUtELE1BQU0sRUFBRSxVQUFVLFFBQVE7UUFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ2xCLENBQUM7SUFLSyxVQUFVOzs7Ozs0QkFDQSxXQUFNLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBQTs7d0JBQWxDLE1BQU0sR0FBRyxTQUF5Qjt3QkFDeEMsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTs0QkFDZixJQUFJLEdBQUssTUFBTSxLQUFYLENBQVc7NEJBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0NBQ1osT0FBTyxFQUFFLElBQUk7NkJBQ2IsQ0FBQyxDQUFBO3lCQUNGOzs7OztLQUNEO0lBTUssYUFBYSxFQUFuQixVQUFvQixDQUFpRDs7Ozs7Ozt3QkFDaEUsUUFBUSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQTt3QkFDbkMsS0FBSyxHQUFHLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQTt3QkFDWCxXQUFNLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUExQyxNQUFNLEdBQUcsU0FBaUM7d0JBQzFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFBO3dCQUNwRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFOzRCQUNyQixFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTt5QkFDbEM7d0JBQ0QsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0QkFDWixLQUFLLE9BQUE7NEJBQ0wsSUFBSSxFQUFFLE1BQU07eUJBQ1osQ0FBQyxDQUFBO3dCQUNGLFVBQVUsQ0FBQzs0QkFDVixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7d0JBQ2xCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzs7Ozs7S0FDUjtDQUVELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIOWvvOWFpeaooeWdlyAqL1xyXG5pbXBvcnQgQ291cG9uU2VydmVyIGZyb20gJy4uLy4uLy4uL2FwaS9hcGkvY291cG9uL3NlcnZlcidcclxuXHJcbi8qIOWunuS+i+WMluaooeWdlyAqL1xyXG5jb25zdCBzZXJ2ZXIgPSBuZXcgQ291cG9uU2VydmVyKClcclxuXHJcblBhZ2Uoe1xyXG5cclxuXHQvKipcclxuXHQgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuXHQgKi9cclxuXHRkYXRhOiB7XHJcblx0XHRjb3Vwb25zOiBbXVxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcblx0ICovXHJcblx0b25Mb2FkOiBmdW5jdGlvbiAoX29wdGlvbnMpIHtcclxuXHRcdHRoaXMubGVhZENvdXBvbigpXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICog5p+l6K+i5ZWG5a625LyY5oOg5Yq15b6F6aKG5Y+WXHJcblx0ICovXHJcblx0YXN5bmMgbGVhZENvdXBvbigpIHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci5sZWFkQ291cG9uKClcclxuXHRcdGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcblx0XHRcdGxldCB7IGRhdGEgfSA9IHJlc3VsdFxyXG5cdFx0XHR0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdGNvdXBvbnM6IGRhdGFcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDpooblj5bkvJjmg6DlirVcclxuXHQgKiBAcGFyYW0gZSDkuovku7blr7nosaFcclxuXHQgKi9cclxuXHRhc3luYyByZWNlaXZlQ291cG9uKGU6IHsgY3VycmVudFRhcmdldDogeyBkYXRhc2V0OiB7IGlkOiBzdHJpbmcgfSB9IH0pIHtcclxuXHRcdGxldCBjb3Vwb25JZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXHJcblx0XHRjb25zdCBwYXJhbSA9IHsgY291cG9uSWQgfVxyXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyLnJlY2VpdmVDb3Vwb24ocGFyYW0pXHJcblx0XHRjb25zdCB0aXRsZSA9IHJlc3VsdC5jb2RlID09IDAgPyAn6aKG5Y+W5oiQ5YqfJyA6IHJlc3VsdC5tc2dcclxuXHRcdGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcblx0XHRcdHd4LnNldFN0b3JhZ2VTeW5jKCdjb3Vwb24nLCBmYWxzZSlcclxuXHRcdH1cclxuXHRcdHd4LnNob3dUb2FzdCh7XHJcblx0XHRcdHRpdGxlLFxyXG5cdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdH0pXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5sZWFkQ291cG9uKClcclxuXHRcdH0sIDUwMCk7XHJcblx0fVxyXG5cclxufSkiXX0=