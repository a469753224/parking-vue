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
var server_1 = require("../../api/api/user/server");
var server_2 = require("../../api/api/home/server");
var server_3 = require("../../api/api/sigup/server");
var server_4 = require("../../api/api/wx/server");
var server = new server_1.default();
var sigup = new server_3.default();
var home = new server_2.default();
var wex = new server_4.default();
var util_1 = require("../../utils/util");
Page({
    data: {
        advert: '',
        user: {},
        back: '',
        call: '',
        content: '',
        show: false,
        shows: false,
        relogin: 0,
        showStatus: false,
        token: wx.getStorageSync('token')
    },
    tests: function () {
        return __awaiter(this, void 0, void 0, function () {
            var orders, _a, mch_id, service_id, out_order_no, nonce_str, timestamp, sign_type, sign;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, home.getWechatOrderDetail({ orderId: 'A370D1C680FF435EAC46FAA7D20722F5' })];
                    case 1:
                        orders = _b.sent();
                        if (orders.code == 0) {
                            _a = orders.data, mch_id = _a.mch_id, service_id = _a.service_id, out_order_no = _a.out_order_no, nonce_str = _a.nonce_str, timestamp = _a.timestamp, sign_type = _a.sign_type, sign = _a.sign;
                            wx.navigateToMiniProgram({
                                appId: 'wxd8f3793ea3b935b8',
                                path: 'pages/record/detail',
                                extraData: {
                                    mch_id: mch_id,
                                    service_id: service_id,
                                    out_order_no: out_order_no,
                                    timestamp: timestamp,
                                    nonce_str: nonce_str,
                                    sign_type: sign_type,
                                    sign: sign
                                }
                            });
                        }
                        else {
                            wx.showToast({
                                title: orders.msg,
                                icon: 'none'
                            });
                        }
                        return [2];
                }
            });
        });
    },
    onLoad: function (options) {
        if (!util_1.isEmpty(options)) {
            var back = options.back, call = options.call, relogin = options.relogin;
            this.setData({
                back: back ? back : '',
                show: call == 1 ? true : false
            });
            if (relogin == 1) {
                this.login();
            }
        }
    },
    myMenuInformation: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, server.myMenuInformation()];
                    case 1:
                        result = _a.sent();
                        user = {};
                        if (result.code == 0) {
                            user = result.data;
                            wx.setStorageSync('userInfo', result.data);
                        }
                        else {
                            wx.setStorageSync('userInfo', {});
                        }
                        this.setData({
                            user: user
                        });
                        return [2];
                }
            });
        });
    },
    login: function () {
        return __awaiter(this, void 0, void 0, function () {
            var param, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = {
                            loadStatus: true,
                            loading: '登录中，请稍候...'
                        };
                        return [4, sigup.wxlogin(param)];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            this.setData({
                                token: result.token
                            });
                            this.myMenuInformation();
                            if (result.phoneState == 1) {
                                this.setData({
                                    showStatus: true
                                });
                            }
                            else {
                                wx.showToast({
                                    title: '登录成功',
                                });
                                setTimeout(function () {
                                    if (_this.data.back == 'home') {
                                        wx.reLaunch({
                                            url: '/pages/home/home',
                                        });
                                    }
                                }, 1000);
                            }
                        }
                        else {
                            wx.showToast({
                                title: '登录失败',
                                icon: 'none'
                            });
                        }
                        return [2];
                }
            });
        });
    },
    bindPhone: function () {
        wx.navigateTo({
            url: '/pages/sigup/register/register?back=1',
        });
    },
    myPlate: function () {
        wx.navigateTo({
            url: '/pages/users/myCars/myCars',
        });
    },
    wallet: function () {
        wx.navigateTo({
            url: '/pages/users/wallet/wallet',
        });
    },
    points: function () {
        wx.navigateTo({
            url: '/pages/users/integral/integral',
        });
    },
    historyOrder: function () {
        wx.navigateTo({
            url: '/pages/users/record/record',
        });
    },
    cancellation: function () {
        wx.navigateTo({
            url: '/pages/releases/myParks/myParks',
        });
        return;
        this.setData({
            shows: true,
            content: '车位管理请移步“榴车位APP”内操作，目前小程序只提供扫码解锁服务，感谢您的理解！'
        });
    },
    callUs: function () {
        this.setData({
            show: true
        });
    },
    setup: function () {
        wx.navigateTo({
            url: '/pages/users/setup/setup',
        });
    },
    onShow: function () {
        var _this = this;
        var token = wx.getStorageSync('token');
        this.setData({
            token: token
        });
        if (token) {
            setTimeout(function () {
                var user = wx.getStorageSync('userInfo');
                if (!user) {
                    _this.myMenuInformation();
                }
                else {
                    _this.setData({
                        user: user
                    });
                }
            }, 500);
        }
        if (this.data.relogin)
            (this.myMenuInformation());
    },
    getPhoneNumber: function (e) {
        var _this = this;
        if (e.detail.errMsg === 'getPhoneNumber:ok') {
            wx.login({
                timeout: 5000,
                success: function (res) { return __awaiter(_this, void 0, void 0, function () {
                    var code, _a, iv, encryptedData, param, result, phoneNumber;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                code = res.code;
                                _a = e.detail, iv = _a.iv, encryptedData = _a.encryptedData;
                                param = { iv: iv, code: code, encryptedData: encryptedData };
                                return [4, sigup.getPhoneNumber(param)];
                            case 1:
                                result = _b.sent();
                                if (result.code == 200) {
                                    phoneNumber = result.data.phoneNumber;
                                    wx.reLaunch({
                                        url: "/pages/sigup/register/register?phone=" + phoneNumber + "&path=user"
                                    });
                                }
                                return [2];
                        }
                    });
                }); }
            });
        }
    },
    onHide: function () {
        this.setData({
            show: false,
            shows: false
        });
    },
    authorOrder: function () {
        return __awaiter(this, void 0, void 0, function () {
            var plate, param, result, orderId_1, results, state, titmer_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        plate = 'A74Q19';
                        param = {
                            lockId: '8096002',
                            endTime: 1634005140000,
                            beginTime: 1634004240000,
                            plate: plate,
                            payType: 'wx'
                        };
                        if (!plate) {
                            wx.showToast({
                                title: '请选择车牌号',
                                icon: 'none'
                            });
                            return [2];
                        }
                        return [4, home.creditPayToOrder(param)];
                    case 1:
                        result = _a.sent();
                        if (!(result.code == 0)) return [3, 3];
                        orderId_1 = result.data.orderId;
                        return [4, home.orderQuery()];
                    case 2:
                        results = _a.sent();
                        if (results.code == 0) {
                            state = results.data.state;
                            if (state == 1 || state == 2) {
                                wx.showToast({
                                    title: '下单成功',
                                    icon: 'none'
                                });
                                setTimeout(function () {
                                    _this.linkPayOrder(orderId_1);
                                }, 500);
                            }
                            else if (state == 7) {
                                wx.showLoading({
                                    title: '订单确认中...',
                                    mask: true
                                });
                                titmer_1 = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                                    var order;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4, home.orderQuery()];
                                            case 1:
                                                order = _a.sent();
                                                if (order.code == 0) {
                                                    if (order.data.state == 1 || order.data.state == 2) {
                                                        clearInterval(titmer_1);
                                                        wx.showToast({
                                                            title: '下单成功',
                                                            icon: 'none'
                                                        });
                                                        wx.hideLoading();
                                                        setTimeout(function () {
                                                            wx.reLaunch({
                                                                url: "/pages/homes/order/order?orderId=" + order.orderId
                                                            });
                                                        }, 500);
                                                    }
                                                }
                                                return [2];
                                        }
                                    });
                                }); }, 3000);
                            }
                        }
                        if (results.code == 7) {
                            wx.showToast({
                                title: results.msg,
                                icon: 'none'
                            });
                            wx.reLaunch({
                                url: "/pages/home/home"
                            });
                        }
                        return [3, 4];
                    case 3:
                        setTimeout(function () {
                            wx.showToast({
                                title: result.msg,
                                icon: 'none'
                            });
                            setTimeout(function () {
                                wx.reLaunch({
                                    url: "/pages/home/home"
                                });
                            }, 500);
                        }, 500);
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    },
    linkPayOrder: function (orderId) {
        return __awaiter(this, void 0, void 0, function () {
            var orders, _a, mch_id, service_id, out_order_no, nonce_str, timestamp, sign_type, sign;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, home.getWechatOrderDetail({ orderId: orderId })];
                    case 1:
                        orders = _b.sent();
                        if (orders.code == 0) {
                            _a = orders.data, mch_id = _a.mch_id, service_id = _a.service_id, out_order_no = _a.out_order_no, nonce_str = _a.nonce_str, timestamp = _a.timestamp, sign_type = _a.sign_type, sign = _a.sign;
                            wx.navigateToMiniProgram({
                                appId: 'wxd8f3793ea3b935b8',
                                path: 'pages/record/detail',
                                extraData: {
                                    mch_id: mch_id,
                                    service_id: service_id,
                                    out_order_no: out_order_no,
                                    timestamp: timestamp,
                                    nonce_str: nonce_str,
                                    sign_type: sign_type,
                                    sign: sign
                                }
                            });
                        }
                        else {
                            wx.showToast({
                                title: orders.msg,
                                icon: 'none'
                            });
                        }
                        return [2];
                }
            });
        });
    },
    beforPay: function () {
        var _this = this;
        var that = this;
        wx.login({
            success: function (res) { return __awaiter(_this, void 0, void 0, function () {
                var code, result, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            code = res.code;
                            return [4, wex.prePermissions({ code: code })];
                        case 1:
                            result = _a.sent();
                            if (result.data == 'AVAILABLE') {
                                that.authorOrder();
                            }
                            else {
                                data = result.data;
                                if (data && data != 'FAIL') {
                                    wx.navigateToMiniProgram({
                                        appId: 'wxd8f3793ea3b935b8',
                                        path: 'pages/use/enable',
                                        extraData: {
                                            apply_permissions_token: data
                                        },
                                        success: function () { },
                                        fail: function () {
                                            wx.showModal({
                                                title: '提示',
                                                content: '授权失败，请稍后尝试！',
                                                showCancel: false
                                            });
                                        }
                                    });
                                }
                                else {
                                    wx.showToast({
                                        title: '参数错误',
                                        icon: 'none'
                                    });
                                }
                            }
                            return [2];
                    }
                });
            }); }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxvREFBa0Q7QUFDbEQsb0RBQWtEO0FBQ2xELHFEQUFvRDtBQUNwRCxrREFBOEM7QUFHOUMsSUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBVSxFQUFFLENBQUE7QUFDL0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxnQkFBVyxFQUFFLENBQUE7QUFDL0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxnQkFBVSxFQUFFLENBQUE7QUFDN0IsSUFBTSxHQUFHLEdBQUcsSUFBSSxnQkFBUSxFQUFFLENBQUE7QUFHMUIseUNBQTBDO0FBSzFDLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxFQUFFO1FBQ1YsSUFBSSxFQUFFLEVBQUU7UUFDUixJQUFJLEVBQUUsRUFBRTtRQUNSLElBQUksRUFBRSxFQUFFO1FBQ1IsT0FBTyxFQUFFLEVBQUU7UUFDWCxJQUFJLEVBQUUsS0FBSztRQUNYLEtBQUssRUFBRSxLQUFLO1FBQ1osT0FBTyxFQUFFLENBQUM7UUFDVixVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7S0FDbEM7SUFFSyxLQUFLOzs7Ozs0QkFDTSxXQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxDQUFDLEVBQUE7O3dCQUF6RixNQUFNLEdBQUcsU0FBZ0Y7d0JBQy9GLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7NEJBRWQsS0FRRixNQUFNLENBQUMsSUFBSSxFQVBiLE1BQU0sWUFBQSxFQUNOLFVBQVUsZ0JBQUEsRUFDVixZQUFZLGtCQUFBLEVBQ1osU0FBUyxlQUFBLEVBQ1QsU0FBUyxlQUFBLEVBQ1QsU0FBUyxlQUFBLEVBQ1QsSUFB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QztpQ0FDSjtxQ0FBTTtvQ0FDTCxFQUFFLENBQUMsU0FBUyxDQUFDO3dDQUNYLEtBQUssRUFBRSxNQUFNO3dDQUNiLElBQUksRUFBRSxNQUFNO3FDQUNiLENBQUMsQ0FBQTtpQ0FDSDs2QkFDRjs7OztpQkFDRjtTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDlr7zlhaXmqKHlnZcgKi9cclxuaW1wb3J0IFVzZXJTZXJ2ZXIgZnJvbSAnLi4vLi4vYXBpL2FwaS91c2VyL3NlcnZlcidcclxuaW1wb3J0IEhvbWVTZXJ2ZXIgZnJvbSAnLi4vLi4vYXBpL2FwaS9ob21lL3NlcnZlcidcclxuaW1wb3J0IFNpZ3VwU2VydmVyIGZyb20gJy4uLy4uL2FwaS9hcGkvc2lndXAvc2VydmVyJ1xyXG5pbXBvcnQgV3hTZXJ2ZXIgZnJvbSAnLi4vLi4vYXBpL2FwaS93eC9zZXJ2ZXInXHJcblxyXG4vKiDlrp7kvovljJbmqKHlnZcgKi9cclxuY29uc3Qgc2VydmVyID0gbmV3IFVzZXJTZXJ2ZXIoKVxyXG5jb25zdCBzaWd1cCA9IG5ldyBTaWd1cFNlcnZlcigpXHJcbmNvbnN0IGhvbWUgPSBuZXcgSG9tZVNlcnZlcigpXHJcbmNvbnN0IHdleCA9IG5ldyBXeFNlcnZlcigpXHJcblxyXG4vKiDlr7zlhaXlt6XlhbfnsbsgKi9cclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXHJcblxyXG4vKiBiYXNlNjTpnZnmgIHotYTmupAgKi9cclxuLy8gaW1wb3J0IHsgYWR2ZXJ0IH0gZnJvbSAnLi91c2VycydcclxuXHJcblBhZ2Uoe1xyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICBhZHZlcnQ6ICcnLFxyXG4gICAgdXNlcjoge30sXHJcbiAgICBiYWNrOiAnJyxcclxuICAgIGNhbGw6ICcnLFxyXG4gICAgY29udGVudDogJycsXHJcbiAgICBzaG93OiBmYWxzZSxcclxuICAgIHNob3dzOiBmYWxzZSxcclxuICAgIHJlbG9naW46IDAsXHJcbiAgICBzaG93U3RhdHVzOiBmYWxzZSxcclxuICAgIHRva2VuOiB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKVxyXG4gIH0sXHJcblxyXG4gIGFzeW5jIHRlc3RzKCkge1xyXG4gICAgY29uc3Qgb3JkZXJzID0gYXdhaXQgaG9tZS5nZXRXZWNoYXRPcmRlckRldGFpbCh7IG9yZGVySWQ6ICdBMzcwRDFDNjgwRkY0MzVFQUM0NkZBQTdEMjA3MjJGNScgfSlcclxuICAgIGlmIChvcmRlcnMuY29kZSA9PSAwKSB7XHJcblxyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgbWNoX2lkLFxyXG4gICAgICAgIHNlcnZpY2VfaWQsXHJcbiAgICAgICAgb3V0X29yZGVyX25vLFxyXG4gICAgICAgIG5vbmNlX3N0cixcclxuICAgICAgICB0aW1lc3RhbXAsXHJcbiAgICAgICAgc2lnbl90eXBlLFxyXG4gICAgICAgIHNpZ25cclxuICAgICAgfSA9IG9yZGVycy5kYXRhXHJcblxyXG4gICAgICB3eC5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xyXG4gICAgICAgIGFwcElkOiAnd3hkOGYzNzkzZWEzYjkzNWI4JyxcclxuICAgICAgICBwYXRoOiAncGFnZXMvcmVjb3JkL2RldGFpbCcsXHJcbiAgICAgICAgZXh0cmFEYXRhOiB7XHJcbiAgICAgICAgICBtY2hfaWQsXHJcbiAgICAgICAgICBzZXJ2aWNlX2lkLFxyXG4gICAgICAgICAgb3V0X29yZGVyX25vLFxyXG4gICAgICAgICAgdGltZXN0YW1wLFxyXG4gICAgICAgICAgbm9uY2Vfc3RyLFxyXG4gICAgICAgICAgc2lnbl90eXBlLFxyXG4gICAgICAgICAgc2lnblxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogb3JkZXJzLm1zZyxcclxuICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xyXG4gICAgaWYgKCFpc0VtcHR5KG9wdGlvbnMpKSB7XHJcbiAgICAgIGxldCB7IGJhY2ssIGNhbGwsIHJlbG9naW4gfSA9IG9wdGlvbnNcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBiYWNrOiBiYWNrID8gYmFjayA6ICcnLFxyXG4gICAgICAgIHNob3c6IGNhbGwgPT0gMSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgICBpZiAocmVsb2dpbiA9PSAxKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbigpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bmiJHnmoTlr7zoiKrmoI/kv6Hmga/mjqXlj6NcclxuICAgKi9cclxuICBhc3luYyBteU1lbnVJbmZvcm1hdGlvbigpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci5teU1lbnVJbmZvcm1hdGlvbigpXHJcbiAgICBsZXQgdXNlciA9IHt9XHJcbiAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICB1c2VyID0gcmVzdWx0LmRhdGFcclxuICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJywgcmVzdWx0LmRhdGEpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3eC5zZXRTdG9yYWdlU3luYygndXNlckluZm8nLCB7fSlcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHVzZXJcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi355m75b2VXHJcbiAgICovXHJcbiAgYXN5bmMgbG9naW4oKSB7XHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgbG9hZFN0YXR1czogdHJ1ZSxcclxuICAgICAgbG9hZGluZzogJ+eZu+W9leS4re+8jOivt+eojeWAmS4uLidcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ3VwLnd4bG9naW4ocGFyYW0pXHJcbiAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHRva2VuOiByZXN1bHQudG9rZW5cclxuICAgICAgfSlcclxuICAgICAgdGhpcy5teU1lbnVJbmZvcm1hdGlvbigpXHJcbiAgICAgIGlmIChyZXN1bHQucGhvbmVTdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHNob3dTdGF0dXM6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+eZu+W9leaIkOWKnycsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmRhdGEuYmFjayA9PSAnaG9tZScpIHtcclxuICAgICAgICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy9ob21lL2hvbWUnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6ICfnmbvlvZXlpLHotKUnLFxyXG4gICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOWJjeW+gOe7keWumuaJi+aculxyXG4gICAqL1xyXG4gIGJpbmRQaG9uZSgpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcvcGFnZXMvc2lndXAvcmVnaXN0ZXIvcmVnaXN0ZXI/YmFjaz0xJyxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6Lez6L2s6Iez5oiR55qE6L2m6L6G5YiX6KGoXHJcbiAgICovXHJcbiAgbXlQbGF0ZSgpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcvcGFnZXMvdXNlcnMvbXlDYXJzL215Q2FycycsXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOi3s+i9rOiHs+aIkeeahOmSseWMhVxyXG4gICAqL1xyXG4gIHdhbGxldCgpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcvcGFnZXMvdXNlcnMvd2FsbGV0L3dhbGxldCcsXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOi3s+i9rOiHs+aIkeeahOenr+WIhlxyXG4gICAqL1xyXG4gIHBvaW50cygpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcvcGFnZXMvdXNlcnMvaW50ZWdyYWwvaW50ZWdyYWwnLFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDot7Povazoh7PmiJHnmoTlgZzovaborrDlvZVcclxuICAgKi9cclxuICBoaXN0b3J5T3JkZXIoKSB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnL3BhZ2VzL3VzZXJzL3JlY29yZC9yZWNvcmQnLFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDot7Povazoh7PovabkvY3nrqHnkIZcclxuICAgKi9cclxuICBjYW5jZWxsYXRpb24oKSB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnL3BhZ2VzL3JlbGVhc2VzL215UGFya3MvbXlQYXJrcycsXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgc2hvd3M6IHRydWUsXHJcbiAgICAgIGNvbnRlbnQ6ICfovabkvY3nrqHnkIbor7fnp7vmraXigJzmprTovabkvY1BUFDigJ3lhoXmk43kvZzvvIznm67liY3lsI/nqIvluo/lj6rmj5DkvpvmiavnoIHop6PplIHmnI3liqHvvIzmhJ/osKLmgqjnmoTnkIbop6PvvIEnXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOi3s+i9rOiHs+iBlOezu+aIkeS7rFxyXG4gICAqL1xyXG4gIGNhbGxVcygpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHNob3c6IHRydWVcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6Lez6L2s6Iez6K6+572u6aG16Z2iXHJcbiAgICovXHJcbiAgc2V0dXAoKSB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnL3BhZ2VzL3VzZXJzL3NldHVwL3NldHVwJyxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB0b2tlblxyXG4gICAgfSlcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJylcclxuICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgIHRoaXMubXlNZW51SW5mb3JtYXRpb24oKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICB1c2VyXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgNTAwKVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGF0YS5yZWxvZ2luKSAoXHJcbiAgICAgIHRoaXMubXlNZW51SW5mb3JtYXRpb24oKVxyXG4gICAgKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluW+ruS/oee7keWumuWPt+eggVxyXG4gICAqIEBwYXJhbSBlIOS6i+S7tuWvueixoVxyXG4gICAqL1xyXG4gIGdldFBob25lTnVtYmVyKGU6IHsgZGV0YWlsOiB7IGVyck1zZzogc3RyaW5nOyBpdjogc3RyaW5nOyBlbmNyeXB0ZWREYXRhOiBzdHJpbmcgfSB9KSB7XHJcbiAgICBpZiAoZS5kZXRhaWwuZXJyTXNnID09PSAnZ2V0UGhvbmVOdW1iZXI6b2snKSB7XHJcbiAgICAgIHd4LmxvZ2luKHtcclxuICAgICAgICB0aW1lb3V0OiA1MDAwLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGFzeW5jIHJlcyA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjb2RlID0gcmVzLmNvZGVcclxuICAgICAgICAgIGxldCB7IGl2LCBlbmNyeXB0ZWREYXRhIH0gPSBlLmRldGFpbFxyXG4gICAgICAgICAgY29uc3QgcGFyYW0gPSB7IGl2LCBjb2RlLCBlbmNyeXB0ZWREYXRhIH1cclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ3VwLmdldFBob25lTnVtYmVyKHBhcmFtKVxyXG4gICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICBsZXQgeyBwaG9uZU51bWJlciB9ID0gcmVzdWx0LmRhdGFcclxuICAgICAgICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgICAgICAgIHVybDogYC9wYWdlcy9zaWd1cC9yZWdpc3Rlci9yZWdpc3Rlcj9waG9uZT0ke3Bob25lTnVtYmVyfSZwYXRoPXVzZXJgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgICovXHJcbiAgb25IaWRlKCkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgIHNob3dzOiBmYWxzZVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgICAqIOW+ruS/oeaUr+S7mOWIhuS4i+WNlVxyXG4gICAgICovXHJcbiAgYXN5bmMgYXV0aG9yT3JkZXIoKSB7XHJcbiAgICAvLyBjb25zdCB7XHJcbiAgICAvLyAgIGxvY2tJZCxcclxuICAgIC8vICAgZW5kVGltZSxcclxuICAgIC8vICAgYmVnaW5UaW1lLFxyXG4gICAgLy8gICBwbGF0ZVxyXG4gICAgLy8gfSA9IHRoYXQuZGF0YVxyXG4gICAgbGV0IHBsYXRlID0gJ0E3NFExOSdcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICBsb2NrSWQ6ICc4MDk2MDAyJyxcclxuICAgICAgZW5kVGltZTogMTYzNDAwNTE0MDAwMCxcclxuICAgICAgYmVnaW5UaW1lOiAxNjM0MDA0MjQwMDAwLFxyXG4gICAgICBwbGF0ZSxcclxuICAgICAgcGF5VHlwZTogJ3d4J1xyXG4gICAgfVxyXG4gICAgaWYgKCFwbGF0ZSkge1xyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiAn6K+36YCJ5oup6L2m54mM5Y+3JyxcclxuICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgaG9tZS5jcmVkaXRQYXlUb09yZGVyKHBhcmFtKVxyXG4gICAgaWYgKHJlc3VsdC5jb2RlID09IDApIHtcclxuICAgICAgbGV0IHsgb3JkZXJJZCB9ID0gcmVzdWx0LmRhdGFcclxuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGhvbWUub3JkZXJRdWVyeSgpXHJcbiAgICAgIGlmIChyZXN1bHRzLmNvZGUgPT0gMCkge1xyXG4gICAgICAgIGxldCB7IHN0YXRlIH0gPSByZXN1bHRzLmRhdGFcclxuICAgICAgICBpZiAoc3RhdGUgPT0gMSB8fCBzdGF0ZSA9PSAyKSB7XHJcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+S4i+WNleaIkOWKnycsXHJcbiAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtQYXlPcmRlcihvcmRlcklkKVxyXG4gICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09IDcpIHtcclxuICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgdGl0bGU6ICforqLljZXnoa7orqTkuK0uLi4nLFxyXG4gICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgY29uc3QgdGl0bWVyID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvcmRlciA9IGF3YWl0IGhvbWUub3JkZXJRdWVyeSgpXHJcbiAgICAgICAgICAgIGlmIChvcmRlci5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICBpZiAob3JkZXIuZGF0YS5zdGF0ZSA9PSAxIHx8IG9yZGVyLmRhdGEuc3RhdGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aXRtZXIpXHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+S4i+WNleaIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL2hvbWVzL29yZGVyL29yZGVyP29yZGVySWQ9JHtvcmRlci5vcmRlcklkfWBcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0sIDUwMClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIDMwMDApXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXN1bHRzLmNvZGUgPT0gNykge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogcmVzdWx0cy5tc2csXHJcbiAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgIHVybDogYC9wYWdlcy9ob21lL2hvbWVgXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiByZXN1bHQubXNnLFxyXG4gICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL2hvbWUvaG9tZWBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICog5b6u5L+h5pSv5LuY5YiG6K6i5Y2V6K+m5oOFXHJcbiAqL1xyXG4gIGFzeW5jIGxpbmtQYXlPcmRlcihvcmRlcklkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG9yZGVycyA9IGF3YWl0IGhvbWUuZ2V0V2VjaGF0T3JkZXJEZXRhaWwoeyBvcmRlcklkIH0pXHJcbiAgICBpZiAob3JkZXJzLmNvZGUgPT0gMCkge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgbWNoX2lkLFxyXG4gICAgICAgIHNlcnZpY2VfaWQsXHJcbiAgICAgICAgb3V0X29yZGVyX25vLFxyXG4gICAgICAgIG5vbmNlX3N0cixcclxuICAgICAgICB0aW1lc3RhbXAsXHJcbiAgICAgICAgc2lnbl90eXBlLFxyXG4gICAgICAgIHNpZ25cclxuICAgICAgfSA9IG9yZGVycy5kYXRhXHJcblxyXG4gICAgICB3eC5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xyXG4gICAgICAgIGFwcElkOiAnd3hkOGYzNzkzZWEzYjkzNWI4JyxcclxuICAgICAgICBwYXRoOiAncGFnZXMvcmVjb3JkL2RldGFpbCcsXHJcbiAgICAgICAgZXh0cmFEYXRhOiB7XHJcbiAgICAgICAgICBtY2hfaWQsXHJcbiAgICAgICAgICBzZXJ2aWNlX2lkLFxyXG4gICAgICAgICAgb3V0X29yZGVyX25vLFxyXG4gICAgICAgICAgdGltZXN0YW1wLFxyXG4gICAgICAgICAgbm9uY2Vfc3RyLFxyXG4gICAgICAgICAgc2lnbl90eXBlLFxyXG4gICAgICAgICAgc2lnblxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogb3JkZXJzLm1zZyxcclxuICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDlvq7kv6HmlK/ku5jliIbmjojmnYNcclxuICAgKi9cclxuICBiZWZvclBheSgpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzXHJcbiAgICB3eC5sb2dpbih7XHJcbiAgICAgIHN1Y2Nlc3M6IGFzeW5jIHJlcyA9PiB7XHJcbiAgICAgICAgbGV0IHsgY29kZSB9ID0gcmVzXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgd2V4LnByZVBlcm1pc3Npb25zKHsgY29kZSB9KVxyXG4gICAgICAgIGlmIChyZXN1bHQuZGF0YSA9PSAnQVZBSUxBQkxFJykge1xyXG4gICAgICAgICAgdGhhdC5hdXRob3JPcmRlcigpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCB7IGRhdGEgfSA9IHJlc3VsdFxyXG4gICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnRkFJTCcpIHtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVUb01pbmlQcm9ncmFtKHtcclxuICAgICAgICAgICAgICBhcHBJZDogJ3d4ZDhmMzc5M2VhM2I5MzViOCcsXHJcbiAgICAgICAgICAgICAgcGF0aDogJ3BhZ2VzL3VzZS9lbmFibGUnLFxyXG4gICAgICAgICAgICAgIGV4dHJhRGF0YToge1xyXG4gICAgICAgICAgICAgICAgYXBwbHlfcGVybWlzc2lvbnNfdG9rZW46IGRhdGFcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7fSxcclxuICAgICAgICAgICAgICBmYWlsKCkge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAn5o6I5p2D5aSx6LSl77yM6K+356iN5ZCO5bCd6K+V77yBJyxcclxuICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICflj4LmlbDplJnor68nLFxyXG4gICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG59KSJdfQ==