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
var util_1 = require("../../../utils/util");
Page({
    data: {
        couponId: '',
        coupon: {},
        show: false
    },
    onLoad: function (options) {
        if (!util_1.isEmpty(options)) {
            var coupon = options.coupon;
            var coup = JSON.parse(coupon);
            this.setData({
                coupon: coup,
                couponId: coup.id
            });
        }
    },
    useCoupon: function () {
        this.setData({
            show: true
        });
    },
    confirm: function () {
        return __awaiter(this, void 0, void 0, function () {
            var id, param, result, title, couponId, coupons, coupon;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.data.coupon.id;
                        param = {
                            id: id
                        };
                        return [4, server.useCoupon(param)];
                    case 1:
                        result = _a.sent();
                        title = result.code == 0 ? '使用成功' : result.msg;
                        couponId = this.data.couponId;
                        if (result.code == 0) {
                            coupons = wx.getStorageSync('coupons');
                            coupon = this.data.coupon;
                            coupons.forEach(function (coup) {
                                if (coup.couponId == couponId) {
                                    coup.state = 0;
                                }
                            });
                            coupon.state = 0;
                            this.setData({ coupon: coupon });
                            wx.setStorageSync('coupons', coupons);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQ291cG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlQ291cG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseURBQXlEO0FBR3pELElBQU0sTUFBTSxHQUFHLElBQUksZ0JBQVksRUFBRSxDQUFBO0FBTWpDLDRDQUE2QztBQUU3QyxJQUFJLENBQUM7SUFLSixJQUFJLEVBQUU7UUFDTCxRQUFRLEVBQUUsRUFBRTtRQUNaLE1BQU0sRUFBRSxFQUFFO1FBQ1YsSUFBSSxFQUFFLEtBQUs7S0FDWDtJQUtELE1BQU0sRUFBRSxVQUFVLE9BQU87UUFDeEIsSUFBSSxDQUFDLGNBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNoQixJQUFBLE1BQU0sR0FBVSxPQUFPLE9BQWpCLENBQWlCO1lBQzdCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWixNQUFNLEVBQUUsSUFBSTtnQkFDWixRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUU7YUFDakIsQ0FBQyxDQUFBO1NBQ0Y7SUFDRixDQUFDO0lBS0QsU0FBUztRQUNSLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWixJQUFJLEVBQUUsSUFBSTtTQUNWLENBQUMsQ0FBQTtJQUNILENBQUM7SUFLSyxPQUFPLEVBQWI7Ozs7Ozt3QkFFRSxFQUFFLEdBQ00sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBRHRCLENBQ3NCO3dCQUNuQixLQUFLLEdBQUc7NEJBQ2IsRUFBRSxJQUFBO3lCQUNGLENBQUE7d0JBQ2MsV0FBTSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFBOzt3QkFBdEMsTUFBTSxHQUFHLFNBQTZCO3dCQUN0QyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQTt3QkFFbkQsUUFBUSxHQUNMLElBQUksQ0FBQyxJQUFJLFNBREosQ0FDSTt3QkFDYixJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFOzRCQUNqQixPQUFPLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQTs0QkFDcEMsTUFBTSxHQUFVLElBQUksQ0FBQyxJQUFJLE9BQW5CLENBQW1COzRCQUMvQixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBeUM7Z0NBQ3pELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLEVBQUU7b0NBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO2lDQUNkOzRCQUNGLENBQUMsQ0FBQyxDQUFBOzRCQUNGLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBOzRCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFBOzRCQUN4QixFQUFFLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQTt5QkFDckM7d0JBQ0QsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0QkFDWixLQUFLLE9BQUE7NEJBQ0wsSUFBSSxFQUFFLE1BQU07eUJBQ1osQ0FBQyxDQUFBOzs7OztLQUNGO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyog5a+85YWl5qih5Z2XICovXHJcbmltcG9ydCBDb3Vwb25TZXJ2ZXIgZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS9jb3Vwb24vc2VydmVyJ1xyXG5cclxuLyog5a6e5L6L5YyW5qih5Z2XICovXHJcbmNvbnN0IHNlcnZlciA9IG5ldyBDb3Vwb25TZXJ2ZXIoKVxyXG5cclxuLyog5a+85YWl5o6l5Y+jICovXHJcbi8vIGltcG9ydCB7IEdldENvdXBvblVzZXJCeUlkUmVzcG9uc2VEYXRhIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2ludGVyZmFjZS9yZXNwb25zZUludGVyZmFjZS9jb3Vwb24nXHJcblxyXG4vKiDlr7zlhaXlt6XlhbfnsbsgKi9cclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnXHJcblxyXG5QYWdlKHtcclxuXHJcblx0LyoqXHJcblx0ICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcblx0ICovXHJcblx0ZGF0YToge1xyXG5cdFx0Y291cG9uSWQ6ICcnLFxyXG5cdFx0Y291cG9uOiB7fSxcclxuXHRcdHNob3c6IGZhbHNlXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuXHQgKi9cclxuXHRvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblx0XHRpZiAoIWlzRW1wdHkob3B0aW9ucykpIHtcclxuXHRcdFx0bGV0IHsgY291cG9uIH0gPSA8YW55Pm9wdGlvbnNcclxuXHRcdFx0Y29uc3QgY291cCA9IEpTT04ucGFyc2UoY291cG9uKVxyXG5cdFx0XHR0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdGNvdXBvbjogY291cCxcclxuXHRcdFx0XHRjb3Vwb25JZDogY291cC5pZFxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIOS9v+eUqOS8mOaDoOWIuFxyXG5cdCAqL1xyXG5cdHVzZUNvdXBvbigpIHtcclxuXHRcdHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdHNob3c6IHRydWVcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICog56Gu6K6k5L2/55So5LyY5oOg5Yi4XHJcblx0ICovXHJcblx0YXN5bmMgY29uZmlybSgpIHtcclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0aWRcclxuXHRcdH0gPSA8YW55PnRoaXMuZGF0YS5jb3Vwb25cclxuXHRcdGNvbnN0IHBhcmFtID0ge1xyXG5cdFx0XHRpZFxyXG5cdFx0fVxyXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyLnVzZUNvdXBvbihwYXJhbSlcclxuXHRcdGNvbnN0IHRpdGxlID0gcmVzdWx0LmNvZGUgPT0gMCA/ICfkvb/nlKjmiJDlip8nIDogcmVzdWx0Lm1zZ1xyXG5cdFx0bGV0IHtcclxuXHRcdFx0Y291cG9uSWRcclxuXHRcdH0gPSB0aGlzLmRhdGFcclxuXHRcdGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcblx0XHRcdGxldCBjb3Vwb25zID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2NvdXBvbnMnKVxyXG5cdFx0XHRsZXQgeyBjb3Vwb24gfSA9IDxhbnk+dGhpcy5kYXRhXHJcblx0XHRcdGNvdXBvbnMuZm9yRWFjaCgoY291cDogeyBjb3Vwb25JZDogc3RyaW5nOyBzdGF0ZTogbnVtYmVyIH0pID0+IHtcclxuXHRcdFx0XHRpZiAoY291cC5jb3Vwb25JZCA9PSBjb3Vwb25JZCkge1xyXG5cdFx0XHRcdFx0Y291cC5zdGF0ZSA9IDBcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdGNvdXBvbi5zdGF0ZSA9IDBcclxuXHRcdFx0dGhpcy5zZXREYXRhKHsgY291cG9uIH0pXHJcblx0XHRcdHd4LnNldFN0b3JhZ2VTeW5jKCdjb3Vwb25zJywgY291cG9ucylcclxuXHRcdH1cclxuXHRcdHd4LnNob3dUb2FzdCh7XHJcblx0XHRcdHRpdGxlLFxyXG5cdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdH0pXHJcblx0fVxyXG59KSJdfQ==