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
var server_1 = require("../../api/api/sigup/server");
var server_2 = require("../../api/api/home/server");
var server_3 = require("../../api/api/user/server");
var server_4 = require("../../api/api/coupon/server");
var user = new server_3.default();
var sigup = new server_1.default();
var server = new server_2.default();
var coupon = new server_4.default();
var util_1 = require("../../utils/util");
var config_1 = require("../../config/config");
var chooseLocation = requirePlugin('chooseLocation');
var QQMapWX = require('../../utils/qqmap-wx-jssdk');
var qqmapsdk = new QQMapWX({
    key: config_1.TX_MAP_KEY
});
Page({
    data: {
        base: {},
        city: '',
        token: '',
        order: [],
        markers: [],
        address: '',
        show: false,
        userInfo: '',
        mapData: {},
        latitude: '',
        relogin: '',
        longitude: '',
        banner: [''],
        isLogin: false,
        orderState: false,
        showStatus: false,
        showCoupon: false,
        showState: false
    },
    onLoad: function (options) {
        if (!util_1.isEmpty(options)) {
            var relogin = options.relogin;
            this.setData({
                relogin: relogin
            });
        }
    },
    login: function () {
        return __awaiter(this, void 0, void 0, function () {
            var param, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = {
                            loadStatus: false,
                            loading: ''
                        };
                        return [4, sigup.wxlogin(param)];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            this.setData({
                                token: result.token
                            });
                            this.orderQuery();
                            this.myMenuInformation();
                            if (result.phoneState == 1) {
                                this.setData({
                                    showState: true
                                });
                            }
                        }
                        return [2];
                }
            });
        });
    },
    coupon: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, data, set, coupon_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, coupon.leadCoupon()];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            data = result.data;
                            set = wx.getStorageSync('coupon');
                            coupon_1 = false;
                            if (set === '') {
                                coupon_1 = data.length != 0 ? true : false;
                            }
                            else {
                                coupon_1 = !set ? false : true;
                            }
                            this.setData({
                                showCoupon: coupon_1
                            });
                        }
                        return [2];
                }
            });
        });
    },
    orderQuery: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, orderState, order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, server.orderQuery()];
                    case 1:
                        result = _a.sent();
                        orderState = result.code == 0 ? true : false;
                        order = [];
                        if (result.code == 0) {
                            order = result.data;
                        }
                        this.setData({
                            order: order,
                            orderState: orderState,
                        });
                        return [2];
                }
            });
        });
    },
    scan: function () {
        if (this.data.token) {
            var orderState = this.data.orderState;
            if (orderState) {
                this.setData({
                    orderStatus: true
                });
                return;
            }
            else {
                var phoneState = wx.getStorageSync('phoneState');
                if (phoneState == 0) {
                    wx.navigateTo({
                        url: '/pages/homes/scan/scan',
                    });
                }
                else {
                    this.setData({
                        showStatus: true
                    });
                }
            }
        }
        else {
            this.setData({
                isLogin: true
            });
            return;
        }
    },
    goLogin: function () {
        return __awaiter(this, void 0, void 0, function () {
            var param, result;
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
                                token: result.token,
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
    myMenuInformation: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, user.myMenuInformation()];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            wx.setStorageSync('userInfo', result.data);
                        }
                        return [2];
                }
            });
        });
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
                                        url: "/pages/sigup/register/register?phone=" + phoneNumber + "&path=home"
                                    });
                                }
                                return [2];
                        }
                    });
                }); }
            });
        }
    },
    register: function () {
        wx.navigateTo({
            url: '/pages/sigup/register/register',
        });
    },
    toOrderDetail: function () {
        var order = this.data.order;
        var isCredit = order.isCredit, orderId = order.orderId, state = order.state;
        if (isCredit) {
            this.authorOrder(orderId);
        }
        else {
            if (state == 3) {
                wx.navigateTo({
                    url: "/pages/homes/pay/pay?orderId=" + orderId
                });
            }
            else {
                wx.navigateTo({
                    url: '/pages/homes/order/order',
                });
            }
        }
    },
    authorOrder: function (orderId) {
        return __awaiter(this, void 0, void 0, function () {
            var orders, _a, mch_id, service_id, out_order_no, nonce_str, timestamp, sign_type, sign;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, server.getWechatOrderDetail({ orderId: orderId })];
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
    search: function () {
        if (!util_1.isEmpty(this.data.order)) {
            this.setData({
                orderStatus: true
            });
            return;
        }
        else {
            var _a = this.data.base, markers = _a.markers, longitude = _a.longitude, latitude = _a.latitude;
            wx.navigateTo({
                url: "/pages/homes/search/search?longitude=" + longitude + "&latitude=" + latitude + "&city=" + this.data.city + "&markers=" + JSON.stringify(markers),
            });
        }
    },
    confirm: function () {
        this.toOrderDetail();
    },
    toPlus: function () {
        var key = config_1.TX_MAP_KEY;
        var referer = '榴车位';
        var category = '生活服务,娱乐休闲';
        wx.navigateTo({
            url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=&category=' + category
        });
    },
    reserve: function () {
        var id = this.data.mapData.id;
        if (id) {
            wx.navigateTo({
                url: "/pages/homes/parkDetail/parkDetail?estateId=" + id
            });
        }
    },
    onShow: function () {
        var _this = this;
        if (!this.data.isLogin) {
            this.login();
        }
        setTimeout(function () {
            var relogin = _this.data.relogin;
            if (relogin == 1) {
                _this.login();
            }
            else {
                var token = wx.getStorageSync('token');
                if (token) {
                    _this.orderQuery();
                }
            }
        }, 200);
        if (!util_1.isEmpty(this.data.mapData)) {
            var name = this.data.mapData.name;
            this.setData({
                value: name
            });
        }
        this.setData({
            token: wx.getStorageSync('token'),
            userInfo: wx.getStorageSync('userInfo')
        });
        var location = chooseLocation.getLocation();
        if (!util_1.isEmpty(this.data.mapData)) {
            var _a = this.data.mapData, name = _a.name, latitude = _a.latitude, longitude = _a.longitude;
            var markers = [({
                    id: 1,
                    latitude: latitude,
                    longitude: longitude,
                    callout: {
                        content: name,
                        padding: '10',
                        borderRadius: '5'
                    },
                    width: '48rpx',
                    height: '80rpx',
                    iconPath: '/assets/images/home/slide_position@2x.png'
                })];
            this.setData({
                markers: markers,
                latitude: latitude,
                longitude: longitude,
                address: name,
            });
        }
        else if (location) {
            var name = location.name, latitude = location.latitude, longitude = location.longitude;
            var markers = [({
                    id: 1,
                    latitude: latitude,
                    longitude: longitude,
                    callout: {
                        content: name,
                        padding: '10',
                        borderRadius: '5'
                    },
                    width: '48rpx',
                    height: '80rpx',
                    iconPath: '/assets/images/home/slide_position@2x.png'
                })];
            this.setData({
                markers: markers,
                latitude: latitude,
                longitude: longitude,
                address: name,
                mapData: location
            });
        }
        else {
            wx.getLocation({
                type: 'gcj02',
                success: function (res) {
                    var markers = _this.data.markers;
                    var latitude = res.latitude;
                    var longitude = res.longitude;
                    markers.push({
                        id: 1,
                        latitude: latitude,
                        longitude: longitude,
                        callout: {
                            content: '当前位置',
                            padding: '10',
                            borderRadius: '5'
                        },
                        width: '48rpx',
                        height: '80rpx',
                        iconPath: '/assets/images/home/slide_position@2x.png'
                    });
                    var base = {
                        markers: markers,
                        latitude: latitude,
                        longitude: longitude,
                    };
                    _this.setData({
                        base: base,
                        markers: markers,
                        latitude: latitude,
                        longitude: longitude,
                    });
                    qqmapsdk.reverseGeocoder({
                        location: {
                            latitude: latitude,
                            longitude: longitude
                        },
                        success: function (data) {
                            var address = data.result.address;
                            _this.setData({
                                city: address
                            });
                        }
                    });
                }
            });
        }
    },
    onHide: function () {
        this.setData({
            markers: [],
            show: false
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxREFBb0Q7QUFDcEQsb0RBQW1EO0FBQ25ELG9EQUFrRDtBQUNsRCxzREFBc0Q7QUFHdEQsSUFBTSxJQUFJLEdBQUcsSUFBSSxnQkFBVSxFQUFFLENBQUE7QUFDN0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxnQkFBVyxFQUFFLENBQUE7QUFDL0IsSUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBVyxFQUFFLENBQUE7QUFDaEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBWSxFQUFFLENBQUE7QUFHakMseUNBQTBDO0FBRzFDLDhDQUFnRDtBQUdoRCxJQUFNLGNBQWMsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUd2RCxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtBQUNyRCxJQUFNLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQztJQUMzQixHQUFHLEVBQUUsbUJBQVU7Q0FDaEIsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUU7UUFDUixJQUFJLEVBQUUsRUFBRTtRQUNSLEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUUsRUFBRTtRQUNYLE9BQU8sRUFBRSxFQUFFO1FBQ1gsSUFBSSxFQUFFLEtBQUs7UUFDWCxRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxFQUFFO1FBQ1gsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsRUFBRTtRQUNYLFNBQVMsRUFBRSxFQUFFO1FBQ2IsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ1osT0FBTyxFQUFFLEtBQUs7UUFDZCxVQUFVLEVBQUUsS0FBSztRQUNqQixVQUFVLEVBQUUs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LENBQUMsTUFBTSxRQUROLENBQ007NEJBQ2YsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQ0FDWCxJQUFJLEVBQUUsT0FBTzs2QkFDZCxDQUFDLENBQUE7d0JBQ0osQ0FBQztxQkFDRixDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUNGLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUtELE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsT0FBTyxFQUFFLEVBQUU7WUFDWCxJQUFJLEVBQUUsS0FBSztTQUNaLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDlr7zlhaXmqKHlnZcgKi9cclxuaW1wb3J0IFNpZ3VwU2VydmVyIGZyb20gJy4uLy4uL2FwaS9hcGkvc2lndXAvc2VydmVyJ1xyXG5pbXBvcnQgSG9tZXJTZXJ2ZXIgZnJvbSAnLi4vLi4vYXBpL2FwaS9ob21lL3NlcnZlcidcclxuaW1wb3J0IFVzZXJTZXJ2ZXIgZnJvbSAnLi4vLi4vYXBpL2FwaS91c2VyL3NlcnZlcidcclxuaW1wb3J0IENvdXBvblNlcnZlciBmcm9tICcuLi8uLi9hcGkvYXBpL2NvdXBvbi9zZXJ2ZXInXHJcblxyXG4vKiDlrp7kvovljJbmqKHlnZcgKi9cclxuY29uc3QgdXNlciA9IG5ldyBVc2VyU2VydmVyKClcclxuY29uc3Qgc2lndXAgPSBuZXcgU2lndXBTZXJ2ZXIoKVxyXG5jb25zdCBzZXJ2ZXIgPSBuZXcgSG9tZXJTZXJ2ZXIoKVxyXG5jb25zdCBjb3Vwb24gPSBuZXcgQ291cG9uU2VydmVyKClcclxuXHJcbi8qIOW3peWFt+WvvOWFpSAqL1xyXG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCdcclxuXHJcbi8qIOWvvOWFpeiHquWumuS5iemFjee9ruaWh+S7tiAqL1xyXG5pbXBvcnQgeyBUWF9NQVBfS0VZIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZydcclxuXHJcbi8qIOWvvOWFpeiFvuiur+WcsOWbvuaPkuS7tiAqL1xyXG5jb25zdCBjaG9vc2VMb2NhdGlvbiA9IHJlcXVpcmVQbHVnaW4oJ2Nob29zZUxvY2F0aW9uJyk7XHJcblxyXG4vKiDohb7orq/kvY3nva7mnI3liqFTREvlr7zlhaUgKi9cclxuY29uc3QgUVFNYXBXWCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3FxbWFwLXd4LWpzc2RrJylcclxuY29uc3QgcXFtYXBzZGsgPSBuZXcgUVFNYXBXWCh7XHJcbiAga2V5OiBUWF9NQVBfS0VZXHJcbn0pO1xyXG5cclxuUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIGJhc2U6IHt9LFxyXG4gICAgY2l0eTogJycsXHJcbiAgICB0b2tlbjogJycsXHJcbiAgICBvcmRlcjogW10sXHJcbiAgICBtYXJrZXJzOiBbXSxcclxuICAgIGFkZHJlc3M6ICcnLFxyXG4gICAgc2hvdzogZmFsc2UsXHJcbiAgICB1c2VySW5mbzogJycsXHJcbiAgICBtYXBEYXRhOiB7fSxcclxuICAgIGxhdGl0dWRlOiAnJyxcclxuICAgIHJlbG9naW46ICcnLFxyXG4gICAgbG9uZ2l0dWRlOiAnJyxcclxuICAgIGJhbm5lcjogWycnXSxcclxuICAgIGlzTG9naW46IGZhbHNlLFxyXG4gICAgb3JkZXJTdGF0ZTogZmFsc2UsXHJcbiAgICBzaG93U3RhdHVzOiBmYWxzZSxcclxuICAgIHNob3dDb3Vwb246IGZhbHNlLFxyXG4gICAgc2hvd1N0YXRlOiBmYWxzZVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgaWYgKCFpc0VtcHR5KG9wdGlvbnMpKSB7XHJcbiAgICAgIGxldCB7XHJcbiAgICAgICAgcmVsb2dpblxyXG4gICAgICB9ID0gb3B0aW9uc1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHJlbG9naW5cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlKjmiLfnmbvlvZVcclxuICAgKi9cclxuICBhc3luYyBsb2dpbigpIHtcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICBsb2FkU3RhdHVzOiBmYWxzZSxcclxuICAgICAgbG9hZGluZzogJydcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ3VwLnd4bG9naW4ocGFyYW0pXHJcbiAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHRva2VuOiByZXN1bHQudG9rZW5cclxuICAgICAgfSlcclxuICAgICAgdGhpcy5vcmRlclF1ZXJ5KClcclxuICAgICAgdGhpcy5teU1lbnVJbmZvcm1hdGlvbigpXHJcbiAgICAgIGlmIChyZXN1bHQucGhvbmVTdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHNob3dTdGF0ZTogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bkvJjmg6DliLjkv6Hmga9cclxuICAgKi9cclxuICBhc3luYyBjb3Vwb24oKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb3Vwb24ubGVhZENvdXBvbigpXHJcbiAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICBsZXQge1xyXG4gICAgICAgIGRhdGFcclxuICAgICAgfSA9IHJlc3VsdFxyXG4gICAgICBsZXQgc2V0ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2NvdXBvbicpXHJcbiAgICAgIGxldCBjb3Vwb24gPSBmYWxzZVxyXG4gICAgICBpZiAoc2V0ID09PSAnJykge1xyXG4gICAgICAgIGNvdXBvbiA9IGRhdGEubGVuZ3RoICE9IDAgPyB0cnVlIDogZmFsc2VcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb3Vwb24gPSAhc2V0ID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBzaG93Q291cG9uOiBjb3Vwb25cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmoLnmja50b2tlbuiOt+WPluW9k+WJjei/m+ihjOS4reeahOiuouWNlVxyXG4gICAqL1xyXG4gIGFzeW5jIG9yZGVyUXVlcnkoKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZXJ2ZXIub3JkZXJRdWVyeSgpXHJcbiAgICBsZXQgb3JkZXJTdGF0ZSA9IHJlc3VsdC5jb2RlID09IDAgPyB0cnVlIDogZmFsc2VcclxuICAgIGxldCBvcmRlciA9IFtdXHJcbiAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICBvcmRlciA9IHJlc3VsdC5kYXRhXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBvcmRlcixcclxuICAgICAgb3JkZXJTdGF0ZSxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog5omr56CB5YGc6L2mXHJcbiAgICovXHJcbiAgc2NhbigpIHtcclxuXHJcbiAgICBpZiAodGhpcy5kYXRhLnRva2VuKSB7XHJcbiAgICAgIGxldCB7IG9yZGVyU3RhdGUgfSA9IHRoaXMuZGF0YVxyXG4gICAgICBpZiAob3JkZXJTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBvcmRlclN0YXR1czogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBwaG9uZVN0YXRlID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Bob25lU3RhdGUnKVxyXG4gICAgICAgIGlmIChwaG9uZVN0YXRlID09IDApIHtcclxuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvaG9tZXMvc2Nhbi9zY2FuJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHNob3dTdGF0dXM6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGlzTG9naW46IHRydWVcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUqOaIt+eZu+W9lVxyXG4gICAqL1xyXG4gIGFzeW5jIGdvTG9naW4oKSB7XHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgbG9hZFN0YXR1czogdHJ1ZSxcclxuICAgICAgbG9hZGluZzogJ+eZu+W9leS4re+8jOivt+eojeWAmS4uLidcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ3VwLnd4bG9naW4ocGFyYW0pXHJcbiAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHRva2VuOiByZXN1bHQudG9rZW4sXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMubXlNZW51SW5mb3JtYXRpb24oKVxyXG4gICAgICBpZiAocmVzdWx0LnBob25lU3RhdGUgPT0gMSkge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBzaG93U3RhdHVzOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfnmbvlvZXmiJDlip8nLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6ICfnmbvlvZXlpLHotKUnLFxyXG4gICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gKiDojrflj5bmiJHnmoTlr7zoiKrmoI/kv6Hmga/mjqXlj6Plubbmm7TmlrDmnKzlnLDnvJPlrZhcclxuICovXHJcbiAgYXN5bmMgbXlNZW51SW5mb3JtYXRpb24oKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1c2VyLm15TWVudUluZm9ybWF0aW9uKClcclxuICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycsIHJlc3VsdC5kYXRhKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOWJjeW+gOe7keWumuWPt+eggVxyXG4gICAqIEBwYXJhbSBlIOS6i+S7tuWvueixoVxyXG4gICAqL1xyXG4gIGdldFBob25lTnVtYmVyKGU6IHsgZGV0YWlsOiB7IGVyck1zZzogc3RyaW5nOyBpdjogc3RyaW5nOyBlbmNyeXB0ZWREYXRhOiBzdHJpbmcgfSB9KSB7XHJcbiAgICBpZiAoZS5kZXRhaWwuZXJyTXNnID09PSAnZ2V0UGhvbmVOdW1iZXI6b2snKSB7XHJcbiAgICAgIHd4LmxvZ2luKHtcclxuICAgICAgICB0aW1lb3V0OiA1MDAwLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGFzeW5jIHJlcyA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjb2RlID0gcmVzLmNvZGVcclxuICAgICAgICAgIGxldCB7IGl2LCBlbmNyeXB0ZWREYXRhIH0gPSBlLmRldGFpbFxyXG4gICAgICAgICAgY29uc3QgcGFyYW0gPSB7IGl2LCBjb2RlLCBlbmNyeXB0ZWREYXRhIH1cclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ3VwLmdldFBob25lTnVtYmVyKHBhcmFtKVxyXG4gICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICBsZXQgeyBwaG9uZU51bWJlciB9ID0gcmVzdWx0LmRhdGFcclxuICAgICAgICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgICAgICAgIHVybDogYC9wYWdlcy9zaWd1cC9yZWdpc3Rlci9yZWdpc3Rlcj9waG9uZT0ke3Bob25lTnVtYmVyfSZwYXRoPWhvbWVgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOi3s+i9rOaJi+acuue7keWumumhtemdolxyXG4gICAqL1xyXG4gIHJlZ2lzdGVyKCkge1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJy9wYWdlcy9zaWd1cC9yZWdpc3Rlci9yZWdpc3RlcicsXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOi3s+i9rOiuouWNleivpuaDhVxyXG4gICAqL1xyXG4gIHRvT3JkZXJEZXRhaWwoKSB7XHJcbiAgICBsZXQgeyBvcmRlciB9ID0gPGFueT50aGlzLmRhdGFcclxuICAgIGxldCB7IGlzQ3JlZGl0LCBvcmRlcklkLCBzdGF0ZSB9ID0gb3JkZXJcclxuICAgIGlmIChpc0NyZWRpdCkge1xyXG4gICAgICB0aGlzLmF1dGhvck9yZGVyKG9yZGVySWQpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoc3RhdGUgPT0gMykge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiBgL3BhZ2VzL2hvbWVzL3BheS9wYXk/b3JkZXJJZD0ke29yZGVySWR9YFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvaG9tZXMvb3JkZXIvb3JkZXInLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDlvq7kv6HmlK/ku5jliIborqLljZVcclxuICAgKi9cclxuICBhc3luYyBhdXRob3JPcmRlcihvcmRlcklkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG9yZGVycyA9IGF3YWl0IHNlcnZlci5nZXRXZWNoYXRPcmRlckRldGFpbCh7IG9yZGVySWQgfSlcclxuICAgIGlmIChvcmRlcnMuY29kZSA9PSAwKSB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBtY2hfaWQsXHJcbiAgICAgICAgc2VydmljZV9pZCxcclxuICAgICAgICBvdXRfb3JkZXJfbm8sXHJcbiAgICAgICAgbm9uY2Vfc3RyLFxyXG4gICAgICAgIHRpbWVzdGFtcCxcclxuICAgICAgICBzaWduX3R5cGUsXHJcbiAgICAgICAgc2lnblxyXG4gICAgICB9ID0gb3JkZXJzLmRhdGFcclxuXHJcbiAgICAgIHd4Lm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSh7XHJcbiAgICAgICAgYXBwSWQ6ICd3eGQ4ZjM3OTNlYTNiOTM1YjgnLFxyXG4gICAgICAgIHBhdGg6ICdwYWdlcy9yZWNvcmQvZGV0YWlsJyxcclxuICAgICAgICBleHRyYURhdGE6IHtcclxuICAgICAgICAgIG1jaF9pZCxcclxuICAgICAgICAgIHNlcnZpY2VfaWQsXHJcbiAgICAgICAgICBvdXRfb3JkZXJfbm8sXHJcbiAgICAgICAgICB0aW1lc3RhbXAsXHJcbiAgICAgICAgICBub25jZV9zdHIsXHJcbiAgICAgICAgICBzaWduX3R5cGUsXHJcbiAgICAgICAgICBzaWduXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiBvcmRlcnMubXNnLFxyXG4gICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeCueWHu+aQnOe0ouWcsOeCuVxyXG4gICAqL1xyXG4gIHNlYXJjaCgpIHtcclxuICAgIGlmICghaXNFbXB0eSh0aGlzLmRhdGEub3JkZXIpKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgb3JkZXJTdGF0dXM6IHRydWVcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHtcclxuICAgICAgICBtYXJrZXJzLFxyXG4gICAgICAgIGxvbmdpdHVkZSxcclxuICAgICAgICBsYXRpdHVkZVxyXG4gICAgICB9ID0gPGFueT50aGlzLmRhdGEuYmFzZVxyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IGAvcGFnZXMvaG9tZXMvc2VhcmNoL3NlYXJjaD9sb25naXR1ZGU9JHtsb25naXR1ZGV9JmxhdGl0dWRlPSR7bGF0aXR1ZGV9JmNpdHk9JHt0aGlzLmRhdGEuY2l0eX0mbWFya2Vycz0ke0pTT04uc3RyaW5naWZ5KG1hcmtlcnMpfWAsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6Lez6L2s5aSE55CG5b2T5YmN6K6i5Y2VXHJcbiAgICovXHJcbiAgY29uZmlybSgpIHtcclxuICAgIC8qbGV0IHsgb3JkZXIgfSA9IDxhbnk+dGhpcy5kYXRhXHJcbiAgICBpZiAoIWlzRW1wdHkob3JkZXIpKSB7XHJcbiAgICAgIGlmIChvcmRlci5zdGF0ZSA9PSAzKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6IGAvcGFnZXMvaG9tZXMvcGF5L3BheT9vcmRlcklkPSR7b3JkZXIub3JkZXJJZH1gXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy9wYWdlcy9ob21lcy9vcmRlci9vcmRlcicsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSovXHJcblxyXG4gICAgdGhpcy50b09yZGVyRGV0YWlsKClcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmiZPlvIDlnLDlm77mj5Lku7ZcclxuICAgKi9cclxuICB0b1BsdXMoKSB7XHJcbiAgICBjb25zdCBrZXkgPSBUWF9NQVBfS0VZOyAvL+S9v+eUqOWcqOiFvuiur+S9jee9ruacjeWKoeeUs+ivt+eahGtleVxyXG4gICAgY29uc3QgcmVmZXJlciA9ICfmprTovabkvY0nOyAvL+iwg+eUqOaPkuS7tueahGFwcOeahOWQjeensFxyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSAn55Sf5rS75pyN5YqhLOWoseS5kOS8kemXsic7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAncGx1Z2luOi8vY2hvb3NlTG9jYXRpb24vaW5kZXg/a2V5PScgKyBrZXkgKyAnJnJlZmVyZXI9JyArIHJlZmVyZXIgKyAnJmxvY2F0aW9uPSZjYXRlZ29yeT0nICsgY2F0ZWdvcnlcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmihOeVmei9puS9jVxyXG4gICAqL1xyXG4gIHJlc2VydmUoKSB7XHJcbiAgICBsZXQgeyBpZCB9ID0gPGFueT50aGlzLmRhdGEubWFwRGF0YVxyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogYC9wYWdlcy9ob21lcy9wYXJrRGV0YWlsL3BhcmtEZXRhaWw/ZXN0YXRlSWQ9JHtpZH1gXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKCF0aGlzLmRhdGEuaXNMb2dpbil7XHJcbiAgICAgIHRoaXMubG9naW4oKVxyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGxldCB7XHJcbiAgICAgICAgcmVsb2dpblxyXG4gICAgICB9ID0gPGFueT50aGlzLmRhdGFcclxuICAgICAgaWYgKHJlbG9naW4gPT0gMSkge1xyXG4gICAgICAgIHRoaXMubG9naW4oKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpXHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICB0aGlzLm9yZGVyUXVlcnkoKVxyXG4gICAgICAgICAgLy90aGlzLmNvdXBvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCAyMDApO1xyXG5cclxuICAgIGlmICghaXNFbXB0eSh0aGlzLmRhdGEubWFwRGF0YSkpIHtcclxuICAgICAgY29uc3QgeyBuYW1lIH0gPSA8YW55PnRoaXMuZGF0YS5tYXBEYXRhXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdmFsdWU6IG5hbWVcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB0b2tlbjogd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyksXHJcbiAgICAgIHVzZXJJbmZvOiB3eC5nZXRTdG9yYWdlU3luYygndXNlckluZm8nKVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgbG9jYXRpb24gPSBjaG9vc2VMb2NhdGlvbi5nZXRMb2NhdGlvbigpXHJcbiAgICBpZiAoIWlzRW1wdHkodGhpcy5kYXRhLm1hcERhdGEpKSB7XHJcbiAgICAgIGxldCB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBsYXRpdHVkZSxcclxuICAgICAgICBsb25naXR1ZGVcclxuICAgICAgfSA9IDxhbnk+dGhpcy5kYXRhLm1hcERhdGFcclxuICAgICAgbGV0IG1hcmtlcnM6IGFueSA9IFsoe1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIGxhdGl0dWRlLFxyXG4gICAgICAgIGxvbmdpdHVkZSxcclxuICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICBjb250ZW50OiBuYW1lLFxyXG4gICAgICAgICAgcGFkZGluZzogJzEwJyxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWR0aDogJzQ4cnB4JyxcclxuICAgICAgICBoZWlnaHQ6ICc4MHJweCcsXHJcbiAgICAgICAgaWNvblBhdGg6ICcvYXNzZXRzL2ltYWdlcy9ob21lL3NsaWRlX3Bvc2l0aW9uQDJ4LnBuZydcclxuICAgICAgfSldXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgbWFya2VycyxcclxuICAgICAgICBsYXRpdHVkZSxcclxuICAgICAgICBsb25naXR1ZGUsXHJcbiAgICAgICAgYWRkcmVzczogbmFtZSxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSBpZiAobG9jYXRpb24pIHtcclxuICAgICAgbGV0IHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGxhdGl0dWRlLFxyXG4gICAgICAgIGxvbmdpdHVkZVxyXG4gICAgICB9ID0gbG9jYXRpb25cclxuICAgICAgbGV0IG1hcmtlcnM6IGFueSA9IFsoe1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIGxhdGl0dWRlLFxyXG4gICAgICAgIGxvbmdpdHVkZSxcclxuICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICBjb250ZW50OiBuYW1lLFxyXG4gICAgICAgICAgcGFkZGluZzogJzEwJyxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWR0aDogJzQ4cnB4JyxcclxuICAgICAgICBoZWlnaHQ6ICc4MHJweCcsXHJcbiAgICAgICAgaWNvblBhdGg6ICcvYXNzZXRzL2ltYWdlcy9ob21lL3NsaWRlX3Bvc2l0aW9uQDJ4LnBuZydcclxuICAgICAgfSldXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgbWFya2VycyxcclxuICAgICAgICBsYXRpdHVkZSxcclxuICAgICAgICBsb25naXR1ZGUsXHJcbiAgICAgICAgYWRkcmVzczogbmFtZSxcclxuICAgICAgICBtYXBEYXRhOiBsb2NhdGlvblxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd3guZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgIHR5cGU6ICdnY2owMicsXHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIGxldCBtYXJrZXJzOiBhbnkgPSB0aGlzLmRhdGEubWFya2Vyc1xyXG4gICAgICAgICAgbGV0IGxhdGl0dWRlOiBhbnkgPSByZXMubGF0aXR1ZGVcclxuICAgICAgICAgIGxldCBsb25naXR1ZGU6IGFueSA9IHJlcy5sb25naXR1ZGVcclxuICAgICAgICAgIG1hcmtlcnMucHVzaCh7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBsYXRpdHVkZSxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlLFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogJ+W9k+WJjeS9jee9ricsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJzEwJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3aWR0aDogJzQ4cnB4JyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnODBycHgnLFxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy9hc3NldHMvaW1hZ2VzL2hvbWUvc2xpZGVfcG9zaXRpb25AMngucG5nJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGxldCBiYXNlID0ge1xyXG4gICAgICAgICAgICBtYXJrZXJzLFxyXG4gICAgICAgICAgICBsYXRpdHVkZSxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgYmFzZSxcclxuICAgICAgICAgICAgbWFya2VycyxcclxuICAgICAgICAgICAgbGF0aXR1ZGUsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBxcW1hcHNkay5yZXZlcnNlR2VvY29kZXIoe1xyXG4gICAgICAgICAgICBsb2NhdGlvbjoge1xyXG4gICAgICAgICAgICAgIGxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAoZGF0YTogeyByZXN1bHQ6IHsgYWRkcmVzczogc3RyaW5nIH0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzXHJcbiAgICAgICAgICAgICAgfSA9IGRhdGEucmVzdWx0XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIGNpdHk6IGFkZHJlc3NcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLemhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZSgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG1hcmtlcnM6IFtdLFxyXG4gICAgICBzaG93OiBmYWxzZVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxufSkiXX0=