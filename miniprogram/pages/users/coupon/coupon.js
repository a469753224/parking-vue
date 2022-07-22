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
        list: [],
        coupons: []
    },
    onLoad: function (_options) {
        var coupons = wx.getStorageSync('coupons');
        if (!coupons) {
            wx.setStorageSync('coupons', []);
        }
    },
    listUserCoupon: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, server.listUserCoupon()];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            data = result.data;
                            data = data.filter(function (element) {
                                if (element.state == 1) {
                                    return true;
                                }
                                return false;
                            });
                            this.setData({
                                coupons: data,
                                list: result.data
                            });
                        }
                        return [2];
                }
            });
        });
    },
    onChange: function (e) {
        var index = e.detail.index + 1;
        var list = this.data.list;
        list = list.filter(function (element) {
            if (element.state == index) {
                return true;
            }
            return false;
        });
        this.setData({ coupons: list });
    },
    useCouppon: function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var isHas, id, coupons, coupon, param, result, data, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isHas = false;
                        id = e.currentTarget.dataset.id;
                        coupons = wx.getStorageSync('coupons');
                        if (!util_1.isEmpty(coupons)) {
                            isHas = coupons.some(function (coupon) {
                                return coupon.couponId == id;
                            });
                        }
                        coupon = {};
                        if (!!isHas) return [3, 2];
                        param = {
                            couponId: id
                        };
                        return [4, server.getCouponUserById(param)];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            data = result.data;
                            coupon = data;
                            coupons.push(data);
                            wx.setStorageSync('coupons', coupons);
                        }
                        return [3, 3];
                    case 2:
                        data = coupons.filter(function (coup) {
                            if (coup.couponId == id) {
                                return true;
                            }
                            return false;
                        });
                        coupon = data[0];
                        _a.label = 3;
                    case 3:
                        wx.navigateTo({
                            url: "/pages/users/useCoupon/useCoupon?coupon=" + JSON.stringify(coupon),
                        });
                        return [2];
                }
            });
        });
    },
    onShow: function () {
        this.listUserCoupon();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY291cG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseURBQXlEO0FBR3pELElBQU0sTUFBTSxHQUFHLElBQUksZ0JBQVksRUFBRSxDQUFBO0FBR2pDLDRDQUE2QztBQUU3QyxJQUFJLENBQUM7SUFLSixJQUFJLEVBQUU7UUFDTCxJQUFJLEVBQUUsRUFBRTtRQUNSLE9BQU8sRUFBRSxFQUFFO0tBQ1g7SUFLRCxNQUFNLEVBQUUsVUFBVSxRQUFRO1FBQ3pCLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1NBQ2hDO0lBQ0YsQ0FBQztJQUtLLGNBQWMsRUFBcEI7Ozs7OzRCQUNnQixXQUFNLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBQTs7d0JBQXRDLE1BQU0sR0FBRyxTQUE2Qjt3QkFDNUMsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTs0QkFDZixJQUFJLEdBQUssTUFBTSxLQUFYLENBQVc7NEJBQ3JCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsT0FBMEI7Z0NBQzdDLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7b0NBQ3ZCLE9BQU8sSUFBSSxDQUFBO2lDQUNYO2dDQUNELE9BQU8sS0FBSyxDQUFBOzRCQUNiLENBQUMsQ0FBQyxDQUFBOzRCQUNGLElBQUksQ0FBQyxPQUFPLENBQUM7Z0NBQ1osT0FBTyxFQUFFLElBQUk7Z0NBQ2IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJOzZCQUNqQixDQUFDLENBQUE7eUJBQ0Y7Ozs7O0tBQ0Q7SUFNRCxRQUFRLEVBQVIsVUFBUyxDQUFnQztRQUN4QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7UUFDeEIsSUFBQSxJQUFJLEdBQVUsSUFBSSxDQUFDLElBQUksS0FBbkIsQ0FBbUI7UUFDN0IsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxPQUEwQjtZQUM3QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxFQUFFO2dCQUMzQixPQUFPLElBQUksQ0FBQTthQUNYO1lBQ0QsT0FBTyxLQUFLLENBQUE7UUFDYixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBTUssVUFBVSxFQUFoQixVQUFpQixDQUE4Qzs7Ozs7O3dCQUMxRCxLQUFLLEdBQUcsS0FBSyxDQUFBO3dCQUNULEVBQUUsR0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBNUIsQ0FBNEI7d0JBQ2hDLE9BQU8sR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFBO3dCQUM1QyxJQUFJLENBQUMsY0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFOzRCQUN0QixLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQXlCO2dDQUM5QyxPQUFPLE1BQU0sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFBOzRCQUM3QixDQUFDLENBQUMsQ0FBQTt5QkFDRjt3QkFDRyxNQUFNLEdBQUcsRUFBRSxDQUFBOzZCQUNYLENBQUMsS0FBSyxFQUFOLGNBQU07d0JBQ0gsS0FBSyxHQUFHOzRCQUNiLFFBQVEsRUFBRSxFQUFFO3lCQUNaLENBQUE7d0JBQ2MsV0FBTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUE5QyxNQUFNLEdBQUcsU0FBcUM7d0JBQ3BELElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7NEJBQ2YsSUFBSSxHQUFLLE1BQU0sS0FBWCxDQUFXOzRCQUNyQixNQUFNLEdBQUcsSUFBSSxDQUFBOzRCQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7NEJBQ2xCLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFBO3lCQUNyQzs7O3dCQUVHLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBdUI7NEJBQ2pELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLEVBQUU7Z0NBQ3hCLE9BQU8sSUFBSSxDQUFBOzZCQUNYOzRCQUNELE9BQU8sS0FBSyxDQUFBO3dCQUNiLENBQUMsQ0FBQyxDQUFBO3dCQUNGLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7Ozt3QkFFakIsRUFBRSxDQUFDLFVBQVUsQ0FBQzs0QkFDYixHQUFHLEVBQUUsNkNBQTJDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFHO3lCQUN4RSxDQUFDLENBQUE7Ozs7O0tBQ0Y7SUFFRCxNQUFNO1FBQ0wsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ3RCLENBQUM7Q0FDRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDlr7zlhaXmqKHlnZcgKi9cclxuaW1wb3J0IENvdXBvblNlcnZlciBmcm9tICcuLi8uLi8uLi9hcGkvYXBpL2NvdXBvbi9zZXJ2ZXInXHJcblxyXG4vKiDlrp7kvovljJbmqKHlnZcgKi9cclxuY29uc3Qgc2VydmVyID0gbmV3IENvdXBvblNlcnZlcigpXHJcblxyXG4vKiDlr7zlhaXmjqXlj6MgKi9cclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnXHJcblxyXG5QYWdlKHtcclxuXHJcblx0LyoqXHJcblx0ICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcblx0ICovXHJcblx0ZGF0YToge1xyXG5cdFx0bGlzdDogW10sXHJcblx0XHRjb3Vwb25zOiBbXVxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcblx0ICovXHJcblx0b25Mb2FkOiBmdW5jdGlvbiAoX29wdGlvbnMpIHtcclxuXHRcdGNvbnN0IGNvdXBvbnMgPSB3eC5nZXRTdG9yYWdlU3luYygnY291cG9ucycpXHJcblx0XHRpZiAoIWNvdXBvbnMpIHtcclxuXHRcdFx0d3guc2V0U3RvcmFnZVN5bmMoJ2NvdXBvbnMnLCBbXSlcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDkvJjmg6DliLjliJfooahcclxuXHQgKi9cclxuXHRhc3luYyBsaXN0VXNlckNvdXBvbigpIHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci5saXN0VXNlckNvdXBvbigpXHJcblx0XHRpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG5cdFx0XHRsZXQgeyBkYXRhIH0gPSByZXN1bHRcclxuXHRcdFx0ZGF0YSA9IGRhdGEuZmlsdGVyKChlbGVtZW50OiB7IHN0YXRlOiBudW1iZXIgfSkgPT4ge1xyXG5cdFx0XHRcdGlmIChlbGVtZW50LnN0YXRlID09IDEpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0XHR9KVxyXG5cdFx0XHR0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdGNvdXBvbnM6IGRhdGEsXHJcblx0XHRcdFx0bGlzdDogcmVzdWx0LmRhdGFcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiB0YWJiYXLliIfmjaJcclxuXHQgKiBAcGFyYW0gZSDkuovku7blr7nosaFcclxuXHQgKi9cclxuXHRvbkNoYW5nZShlOiB7IGRldGFpbDogeyBpbmRleDogbnVtYmVyIH0gfSkge1xyXG5cdFx0bGV0IGluZGV4ID0gZS5kZXRhaWwuaW5kZXggKyAxXHJcblx0XHRsZXQgeyBsaXN0IH0gPSA8YW55PnRoaXMuZGF0YVxyXG5cdFx0bGlzdCA9IGxpc3QuZmlsdGVyKChlbGVtZW50OiB7IHN0YXRlOiBudW1iZXIgfSkgPT4ge1xyXG5cdFx0XHRpZiAoZWxlbWVudC5zdGF0ZSA9PSBpbmRleCkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlXHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHR9KVxyXG5cdFx0dGhpcy5zZXREYXRhKHsgY291cG9uczogbGlzdCB9KVxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIOS9v+eUqOS8mOaDoOWIuFxyXG5cdCAqIEBwYXJhbSBlIOS6i+S7tuWvueixoVxyXG5cdCAqL1xyXG5cdGFzeW5jIHVzZUNvdXBwb24oZTogeyBjdXJyZW50VGFyZ2V0OiB7IGRhdGFzZXQ6IHsgaWQ6IGFueSB9IH0gfSkge1xyXG5cdFx0bGV0IGlzSGFzID0gZmFsc2VcclxuXHRcdGNvbnN0IHsgaWQgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcblx0XHRjb25zdCBjb3Vwb25zID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2NvdXBvbnMnKVxyXG5cdFx0aWYgKCFpc0VtcHR5KGNvdXBvbnMpKSB7XHJcblx0XHRcdGlzSGFzID0gY291cG9ucy5zb21lKChjb3Vwb246IHsgY291cG9uSWQ6IGFueSB9KSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGNvdXBvbi5jb3Vwb25JZCA9PSBpZFxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdFx0bGV0IGNvdXBvbiA9IHt9XHJcblx0XHRpZiAoIWlzSGFzKSB7XHJcblx0XHRcdGNvbnN0IHBhcmFtID0ge1xyXG5cdFx0XHRcdGNvdXBvbklkOiBpZFxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci5nZXRDb3Vwb25Vc2VyQnlJZChwYXJhbSlcclxuXHRcdFx0aWYgKHJlc3VsdC5jb2RlID09IDApIHtcclxuXHRcdFx0XHRsZXQgeyBkYXRhIH0gPSByZXN1bHRcclxuXHRcdFx0XHRjb3Vwb24gPSBkYXRhXHJcblx0XHRcdFx0Y291cG9ucy5wdXNoKGRhdGEpXHJcblx0XHRcdFx0d3guc2V0U3RvcmFnZVN5bmMoJ2NvdXBvbnMnLCBjb3Vwb25zKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsZXQgZGF0YSA9IGNvdXBvbnMuZmlsdGVyKChjb3VwOiB7IGNvdXBvbklkOiBhbnkgfSkgPT4ge1xyXG5cdFx0XHRcdGlmIChjb3VwLmNvdXBvbklkID09IGlkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdFx0fSlcclxuXHRcdFx0Y291cG9uID0gZGF0YVswXVxyXG5cdFx0fVxyXG5cdFx0d3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdHVybDogYC9wYWdlcy91c2Vycy91c2VDb3Vwb24vdXNlQ291cG9uP2NvdXBvbj0ke0pTT04uc3RyaW5naWZ5KGNvdXBvbil9YCxcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0b25TaG93KCkge1xyXG5cdFx0dGhpcy5saXN0VXNlckNvdXBvbigpXHJcblx0fVxyXG59KSJdfQ==