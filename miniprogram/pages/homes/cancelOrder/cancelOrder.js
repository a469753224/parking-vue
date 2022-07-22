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
var server = new server_1.default();
var util_1 = require("../../../utils/util");
Page({
    data: {
        orderId: '',
        bill: {}
    },
    onLoad: function (options) {
        if (!util_1.isEmpty(options)) {
            var orderId = options.orderId;
            this.setData({
                orderId: orderId
            });
            this.orderBill();
        }
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
    backHome: function () {
        wx.reLaunch({
            url: '/pages/home/home',
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsT3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYW5jZWxPcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVEQUFxRDtBQUdyRCxJQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFVLEVBQUUsQ0FBQTtBQUcvQiw0Q0FBMkM7QUFFM0MsSUFBSSxDQUFDO0lBS0QsSUFBSSxFQUFFO1FBQ0YsT0FBTyxFQUFDLEVBQUU7UUFDVixJQUFJLEVBQUUsRUFBRTtLQUNYO0lBS0QsTUFBTSxFQUFFLFVBQVUsT0FBTztRQUNyQixJQUFHLENBQUMsY0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFDO1lBQ1osSUFBQSxPQUFPLEdBQUksT0FBTyxRQUFYLENBQVc7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxPQUFPLFNBQUE7YUFDVixDQUFDLENBQUE7WUFDRixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7U0FDbkI7SUFDTCxDQUFDO0lBS0ssU0FBUzs7Ozs7O3dCQUNMLE9BQU8sR0FBSyxJQUFJLENBQUMsSUFBSSxRQUFkLENBQWM7d0JBQ3JCLEtBQUssR0FBRzs0QkFDVixPQUFPLFNBQUE7eUJBQ1YsQ0FBQTt3QkFDYyxXQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUF0QyxNQUFNLEdBQUcsU0FBNkI7d0JBQzVDLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7NEJBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0NBQ1QsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJOzZCQUNwQixDQUFDLENBQUE7eUJBQ0w7Ozs7O0tBQ0o7SUFLRCxRQUFRO1FBQ0osRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNWLEdBQUcsRUFBRSxrQkFBa0I7U0FDeEIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUVKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIOWvvOWFpeaooeWdlyAqL1xyXG5pbXBvcnQgSG9tZVNlcnZlciBmcm9tICcuLi8uLi8uLi9hcGkvYXBpL2hvbWUvc2VydmVyJ1xyXG5cclxuLyog5a6e5L6L5YyW5qih5Z2XICovXHJcbmNvbnN0IHNlcnZlciA9IG5ldyBIb21lU2VydmVyKClcclxuXHJcbi8qIOWvvOWFpeW3peWFt+exuyAqL1xyXG5pbXBvcnQge2lzRW1wdHl9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnXHJcblxyXG5QYWdlKHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAgICovXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgb3JkZXJJZDonJyxcclxuICAgICAgICBiaWxsOiB7fVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICAgKi9cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICBpZighaXNFbXB0eShvcHRpb25zKSl7XHJcbiAgICAgICAgICAgIGxldCB7b3JkZXJJZH0gPSBvcHRpb25zXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBvcmRlcklkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMub3JkZXJCaWxsKClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6LSm5Y2VXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIG9yZGVyQmlsbCgpIHtcclxuICAgICAgICBsZXQgeyBvcmRlcklkIH0gPSB0aGlzLmRhdGFcclxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgb3JkZXJJZFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZXJ2ZXIub3JkZXJCaWxsKHBhcmFtKVxyXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBiaWxsOiByZXN1bHQuZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57pppbpobVcclxuICAgICAqL1xyXG4gICAgYmFja0hvbWUoKXtcclxuICAgICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvaG9tZS9ob21lJyxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbn0pIl19