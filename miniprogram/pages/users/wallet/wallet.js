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
var server_1 = require("../../../api/api/wallet/server");
var server_2 = require("../../../api/api/coupon/server");
var server = new server_1.default();
var coupon = new server_2.default();
Page({
    data: {
        wallet: {},
        coupon: [],
        gctingUPC: [{
                days: 0,
                status: 0,
            }],
        actingUPC: []
    },
    onLoad: function (_options) {
        this.getWallet();
        this.getActingUPC();
    },
    listUserCoupon: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, coupon.listUserCoupon()];
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
                                coupon: data,
                            });
                        }
                        return [2];
                }
            });
        });
    },
    getActingUPC: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, coupon.getActingUPC()];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            this.setData({
                                actingUPC: result.data
                            });
                        }
                        return [2];
                }
            });
        });
    },
    getWallet: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, server.getWallet()];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            this.setData({
                                wallet: result.data
                            });
                        }
                        return [2];
                }
            });
        });
    },
    balance: function () {
        wx.navigateTo({
            url: '/pages/users/balance/balance',
        });
    },
    profitBalance: function () {
        wx.navigateTo({
            url: '/pages/users/balance/balance',
        });
    },
    mycoupon: function () {
        wx.navigateTo({
            url: '/pages/users/coupon/coupon',
        });
    },
    myCard: function () {
        var actingUPC = this.data.actingUPC;
        if (actingUPC.length > 0) {
            wx.navigateTo({
                url: '/pages/users/parkCard/parkCard'
            });
        }
    },
    onShow: function () {
        this.listUserCoupon();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2FsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseURBQXlEO0FBQ3pELHlEQUF5RDtBQUd6RCxJQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFZLEVBQUUsQ0FBQTtBQUNqQyxJQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFZLEVBQUUsQ0FBQTtBQUtqQyxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxFQUFFO1FBQ1YsU0FBUyxFQUFFLENBQUM7Z0JBQ1YsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsTUFBTSxFQUFFLENBQUM7YUFDVixDQUFDO1FBQ0YsU0FBUyxFQUFFLEVBQUU7S0FDZDtJQUtELE1BQU0sRUFBRSxVQUFVLFFBQVE7UUFDeEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBS0ssY0FBYyxFQUFwQjs7Ozs7NEJBQ2lCLFdBQU0sTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUFBOzt3QkFBdEMsTUFBTSxHQUFHLFNBQTZCO3dCQUM1QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFOzRCQUNkLElBQUksR0FBSyxNQUFNLEtBQVgsQ0FBVzs0QkFDckIsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxPQUEwQjtnQ0FDNUMsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTtvQ0FDdEIsT0FBTyxJQUFJLENBQUE7aUNBQ1o7Z0NBQ0QsT0FBTyxLQUFLLENBQUE7NEJBQ2QsQ0FBQyxDQUFDLENBQUE7NEJBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQ0FDWCxNQUFNLEVBQUUsSUFBSTs2QkFDYixDQUFDLENBQUE7eUJBQ0g7Ozs7O0tBQ0Y7SUFLSyxZQUFZLEVBQWxCOzs7Ozs0QkFDaUIsV0FBTSxNQUFNLENBQUMsWUFBWSxFQUE0QixFQUFBOzt3QkFBOUQsTUFBTSxHQUFHLFNBQXFEO3dCQUNwRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFOzRCQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDO2dDQUNYLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSTs2QkFDdkIsQ0FBQyxDQUFBO3lCQUNIOzs7OztLQUNGO0lBS0ssU0FBUzs7Ozs7NEJBQ0UsV0FBTSxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUFqQyxNQUFNLEdBQUcsU0FBd0I7d0JBQ3ZDLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7NEJBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0NBQ1gsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJOzZCQUNwQixDQUFDLENBQUE7eUJBQ0g7Ozs7O0tBQ0Y7SUFLRCxPQUFPO1FBQ0wsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSw4QkFBOEI7U0FDcEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELGFBQWE7UUFDWCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDhCQUE4QjtTQUNwQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsUUFBUTtRQUNOLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsNEJBQTRCO1NBQ2xDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxNQUFNO1FBQ0UsSUFBQSxTQUFTLEdBQUssSUFBSSxDQUFDLElBQUksVUFBZCxDQUFjO1FBQzdCLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDeEIsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsZ0NBQWdDO2FBQ3RDLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDdkIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIOWvvOWFpeaooeWdlyAqL1xyXG5pbXBvcnQgV2FsbGV0U2VydmVyIGZyb20gJy4uLy4uLy4uL2FwaS9hcGkvd2FsbGV0L3NlcnZlcidcclxuaW1wb3J0IENvdXBvblNlcnZlciBmcm9tICcuLi8uLi8uLi9hcGkvYXBpL2NvdXBvbi9zZXJ2ZXInXHJcblxyXG4vKiDlrp7kvovljJbmqKHlnZcgKi9cclxuY29uc3Qgc2VydmVyID0gbmV3IFdhbGxldFNlcnZlcigpXHJcbmNvbnN0IGNvdXBvbiA9IG5ldyBDb3Vwb25TZXJ2ZXIoKVxyXG5cclxuLyog5a+85YWl5ZON5bqU5pWw5o2u5o6l5Y+jICovXHJcbmltcG9ydCB7IEdldEFjdGluZ1VQQ1Jlc3BvbnNlRGF0YSB9IGZyb20gJy4uLy4uLy4uL2FwaS9pbnRlcmZhY2UvcmVzcG9uc2VJbnRlcmZhY2UvY291cG9uJ1xyXG5cclxuUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIHdhbGxldDoge30sXHJcbiAgICBjb3Vwb246IFtdLFxyXG4gICAgZ2N0aW5nVVBDOiBbe1xyXG4gICAgICBkYXlzOiAwLFxyXG4gICAgICBzdGF0dXM6IDAsXHJcbiAgICB9XSxcclxuICAgIGFjdGluZ1VQQzogW11cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZDogZnVuY3Rpb24gKF9vcHRpb25zKSB7XHJcbiAgICB0aGlzLmdldFdhbGxldCgpXHJcbiAgICB0aGlzLmdldEFjdGluZ1VQQygpXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog5LyY5oOg5Yi45YiX6KGoXHJcbiAgICovXHJcbiAgYXN5bmMgbGlzdFVzZXJDb3Vwb24oKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb3Vwb24ubGlzdFVzZXJDb3Vwb24oKVxyXG4gICAgaWYgKHJlc3VsdC5jb2RlID09IDApIHtcclxuICAgICAgbGV0IHsgZGF0YSB9ID0gcmVzdWx0XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoZWxlbWVudDogeyBzdGF0ZTogbnVtYmVyIH0pID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudC5zdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjb3Vwb246IGRhdGEsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W5oiR55qE5YGc6L2m5Y2hXHJcbiAgICovXHJcbiAgYXN5bmMgZ2V0QWN0aW5nVVBDKCkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY291cG9uLmdldEFjdGluZ1VQQzxHZXRBY3RpbmdVUENSZXNwb25zZURhdGE+KClcclxuICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgYWN0aW5nVVBDOiByZXN1bHQuZGF0YVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluaIkeeahOmSseWMheS/oeaBr1xyXG4gICAqL1xyXG4gIGFzeW5jIGdldFdhbGxldCgpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci5nZXRXYWxsZXQoKVxyXG4gICAgaWYgKHJlc3VsdC5jb2RlID09IDApIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB3YWxsZXQ6IHJlc3VsdC5kYXRhXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6Lez6L2s5oiR55qE6ZKx5YyFXHJcbiAgICovXHJcbiAgYmFsYW5jZSgpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcvcGFnZXMvdXNlcnMvYmFsYW5jZS9iYWxhbmNlJyxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6Lez6L2s5oiR55qE6ZKx5YyFXHJcbiAgICovXHJcbiAgcHJvZml0QmFsYW5jZSgpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcvcGFnZXMvdXNlcnMvYmFsYW5jZS9iYWxhbmNlJyxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6Lez6L2s5YiwIOaIkeeahOS8mOaDoOWIuOmhtemdolxyXG4gICAqL1xyXG4gIG15Y291cG9uKCkge1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJy9wYWdlcy91c2Vycy9jb3Vwb24vY291cG9uJyxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog5oiR55qE5YGc6L2m5Y2hXHJcbiAgICovXHJcbiAgbXlDYXJkKCkge1xyXG4gICAgbGV0IHsgYWN0aW5nVVBDIH0gPSB0aGlzLmRhdGFcclxuICAgIGlmIChhY3RpbmdVUEMubGVuZ3RoID4gMCkge1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICcvcGFnZXMvdXNlcnMvcGFya0NhcmQvcGFya0NhcmQnXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgb25TaG93KCl7XHJcbiAgICB0aGlzLmxpc3RVc2VyQ291cG9uKClcclxuICB9XHJcbn0pIl19