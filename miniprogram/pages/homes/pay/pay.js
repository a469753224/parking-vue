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
var server_2 = require("../../../api/api/pay/server");
var wxPay_1 = require("../../../utils/wxPay");
var server = new server_1.default();
var pay = new server_2.default();
var wxPay = new wxPay_1.default();
var util_1 = require("../../../utils/util");
Page({
    data: {
        bill: {},
        payWay: '',
        orderId: '',
        show: false,
        showOverlay: false
    },
    onLoad: function (options) {
        this.setData({
            orderId: options.orderId ? options.orderId : ''
        });
        this.orderBill();
    },
    orderBill: function () {
        return __awaiter(this, void 0, void 0, function () {
            var orderId, param, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderId = this.data.orderId;
                        param = {
                            orderId: orderId
                        };
                        return [4, server.orderBill(param)];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            this.setData({
                                bill: result.data
                            });
                        }
                        return [2];
                }
            });
        });
    },
    pay: function () {
        this.setData({
            showOverlay: true
        });
    },
    payOrder: function () {
        return __awaiter(this, void 0, void 0, function () {
            var orderId, param, result, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderId = this.data.orderId;
                        param = {
                            orderId: orderId
                        };
                        return [4, pay.minipay(param)];
                    case 1:
                        result = _a.sent();
                        if (!(result.code == 0)) return [3, 3];
                        return [4, wxPay.pay(result.data)];
                    case 2:
                        data = _a.sent();
                        if (data.code === 200) {
                            wx.reLaunch({
                                url: "/pages/homes/success/success?orderId=" + this.data.orderId
                            });
                        }
                        else {
                            wx.reLaunch({
                                url: "/pages/homes/fail/fail?orderId=" + this.data.orderId
                            });
                        }
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    },
    overlay: function () {
        this.setData({
            showOverlay: false
        });
    },
    onChangeRadio: function (e) {
        var payWay = util_1.getSetDataCurrent(e, 'name');
        this.setData({
            payWay: payWay
        });
    },
    call: function () {
        this.setData({
            show: true
        });
        return;
        wx.reLaunch({
            url: '/pages/user/user?call=1',
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdURBQXFEO0FBQ3JELHNEQUFtRDtBQUNuRCw4Q0FBd0M7QUFHeEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBVSxFQUFFLENBQUE7QUFDL0IsSUFBTSxHQUFHLEdBQUcsSUFBSSxnQkFBUyxFQUFFLENBQUE7QUFDM0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxlQUFLLEVBQUUsQ0FBQTtBQUd6Qiw0Q0FBdUQ7QUFFdkQsSUFBSSxDQUFDO0lBS0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLEVBQUU7UUFDUixNQUFNLEVBQUUsRUFBRTtRQUNWLE9BQU8sRUFBRSxFQUFFO1FBQ1gsSUFBSSxFQUFFLEtBQUs7UUFDWCxXQUFXLEVBQUUsS0FBSztLQUNyQjtJQUtELE1BQU0sRUFBRSxVQUFVLE9BQU87UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ2xELENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtJQUNwQixDQUFDO0lBS0ssU0FBUzs7Ozs7O3dCQUNMLE9BQU8sR0FBSyxJQUFJLENBQUMsSUFBSSxRQUFkLENBQWM7d0JBQ3JCLEtBQUssR0FBRzs0QkFDVixPQUFPLFNBQUE7eUJBQ1YsQ0FBQTt3QkFDYyxXQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUF0QyxNQUFNLEdBQUcsU0FBNkI7d0JBQzVDLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7NEJBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0NBQ1QsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJOzZCQUNwQixDQUFDLENBQUE7eUJBQ0w7Ozs7O0tBQ0o7SUFLRCxHQUFHO1FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULFdBQVcsRUFBRSxJQUFJO1NBQ3BCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFLSyxRQUFROzs7Ozs7d0JBQ0osT0FBTyxHQUFLLElBQUksQ0FBQyxJQUFJLFFBQWQsQ0FBYzt3QkFDckIsS0FBSyxHQUFHOzRCQUNWLE9BQU8sU0FBQTt5QkFDVixDQUFBO3dCQUNZLFdBQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQWpDLE1BQU0sR0FBRyxTQUF3Qjs2QkFDakMsQ0FBQSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQSxFQUFoQixjQUFnQjt3QkFDSCxXQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBbkMsSUFBSSxHQUFHLFNBQTRCO3dCQUN6QyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFOzRCQUNuQixFQUFFLENBQUMsUUFBUSxDQUFDO2dDQUNSLEdBQUcsRUFBRSwwQ0FBd0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFTOzZCQUNuRSxDQUFDLENBQUE7eUJBQ0w7NkJBQU07NEJBQ0gsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQ0FDUixHQUFHLEVBQUUsb0NBQWtDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBUzs2QkFDN0QsQ0FBQyxDQUFBO3lCQUNMOzs7Ozs7S0FFUjtJQUtELE9BQU87UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsV0FBVyxFQUFFLEtBQUs7U0FDckIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQU1ELGFBQWEsRUFBYixVQUFjLENBQU07UUFDaEIsSUFBTSxNQUFNLEdBQUcsd0JBQWlCLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxNQUFNLFFBQUE7U0FDVCxDQUFDLENBQUE7SUFDTixDQUFDO0lBS0QsSUFBSTtRQUNBLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQTtRQUNGLE9BQU07UUFDTixFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1IsR0FBRyxFQUFFLHlCQUF5QjtTQUNqQyxDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyog5a+85YWl5qih5Z2XICovXHJcbmltcG9ydCBIb21lU2VydmVyIGZyb20gJy4uLy4uLy4uL2FwaS9hcGkvaG9tZS9zZXJ2ZXInXHJcbmltcG9ydCBQYXlTZXJ2ZXIgZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS9wYXkvc2VydmVyJ1xyXG5pbXBvcnQgV3hQYXkgZnJvbSAnLi4vLi4vLi4vdXRpbHMvd3hQYXknXHJcblxyXG4vKiDlrp7kvovljJbmqKHlnZcgKi9cclxuY29uc3Qgc2VydmVyID0gbmV3IEhvbWVTZXJ2ZXIoKVxyXG5jb25zdCBwYXkgPSBuZXcgUGF5U2VydmVyKClcclxuY29uc3Qgd3hQYXkgPSBuZXcgV3hQYXkoKVxyXG5cclxuLyog5a+85YWl5bCP5bel5YW3ICovXHJcbmltcG9ydCB7IGdldFNldERhdGFDdXJyZW50IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCdcclxuXHJcblBhZ2Uoe1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIGRhdGE6IHtcclxuICAgICAgICBiaWxsOiB7fSxcclxuICAgICAgICBwYXlXYXk6ICcnLFxyXG4gICAgICAgIG9yZGVySWQ6ICcnLFxyXG4gICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgIHNob3dPdmVybGF5OiBmYWxzZVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICAgKi9cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBvcmRlcklkOiBvcHRpb25zLm9yZGVySWQgPyBvcHRpb25zLm9yZGVySWQgOiAnJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5vcmRlckJpbGwoKVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOagueaNruiuouWNlWlk6I635Y+W6LSm5Y2V5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIG9yZGVyQmlsbCgpIHtcclxuICAgICAgICBsZXQgeyBvcmRlcklkIH0gPSB0aGlzLmRhdGFcclxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgb3JkZXJJZFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZXJ2ZXIub3JkZXJCaWxsKHBhcmFtKVxyXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBiaWxsOiByZXN1bHQuZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmi4notbfmlK/ku5hcclxuICAgICAqL1xyXG4gICAgcGF5KCkge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHNob3dPdmVybGF5OiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmlK/ku5jorqLljZVcclxuICAgICAqL1xyXG4gICAgYXN5bmMgcGF5T3JkZXIoKSB7XHJcbiAgICAgICAgbGV0IHsgb3JkZXJJZCB9ID0gdGhpcy5kYXRhXHJcbiAgICAgICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgIG9yZGVySWRcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHBheS5taW5pcGF5KHBhcmFtKVxyXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3eFBheS5wYXkocmVzdWx0LmRhdGEpXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmNvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogYC9wYWdlcy9ob21lcy9zdWNjZXNzL3N1Y2Nlc3M/b3JkZXJJZD0ke3RoaXMuZGF0YS5vcmRlcklkfWBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL2hvbWVzL2ZhaWwvZmFpbD9vcmRlcklkPSR7dGhpcy5kYXRhLm9yZGVySWR9YFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLptb2RhbFxyXG4gICAgICovXHJcbiAgICBvdmVybGF5KCkge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHNob3dPdmVybGF5OiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCJ5oup5pSv5LuY5pa55byPXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZSBcclxuICAgICAqL1xyXG4gICAgb25DaGFuZ2VSYWRpbyhlOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwYXlXYXkgPSBnZXRTZXREYXRhQ3VycmVudChlLCAnbmFtZScpXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgcGF5V2F5XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlkbzlj6vlrqLmnI1cclxuICAgICAqL1xyXG4gICAgY2FsbCgpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBzaG93OiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy91c2VyL3VzZXI/Y2FsbD0xJyxcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxufSkiXX0=