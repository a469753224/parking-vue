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
                            this.coupon();
                            this.orderQuery();
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
        setTimeout(function () {
            var relogin = _this.data.relogin;
            if (relogin == 1) {
                _this.login();
            }
            else {
                var token = wx.getStorageSync('token');
                if (token) {
                    _this.orderQuery();
                    _this.coupon();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxREFBb0Q7QUFDcEQsb0RBQW1EO0FBQ25ELG9EQUFrRDtBQUNsRCxzREFBc0Q7QUFHdEQsSUFBTSxJQUFJLEdBQUcsSUFBSSxnQkFBVSxFQUFFLENBQUE7QUFDN0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxnQkFBVyxFQUFFLENBQUE7QUFDL0IsSUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBVyxFQUFFLENBQUE7QUFDaEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBWSxFQUFFLENBQUE7QUFHakMseUNBQTBDO0FBRzFDLDhDQUFnRDtBQUdoRCxJQUFNLGNBQWMsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUd2RCxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtBQUNyRCxJQUFNLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQztJQUMzQixHQUFHLEVBQUUsbUJBQVU7Q0FDaEIsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUU7UUFDUixJQUFJLEVBQUUsRUFBRTtRQUNSLEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUUsRUFBRTtRQUNYLE9BQU8sRUFBRSxFQUFFO1FBQ1gsSUFBSSxFQUFFLEtBQUs7UUFDWCxRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxFQUFFO1FBQ1gsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsRUFBRTtRQUNYLFNBQVMsRUFBRSxFQUFFO1FBQ2IsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ1osT0FBTyxFQUFFLEtBQUs7UUFDZCxVQUFVLEVBQUUsS0FBSztRQUNqQixVQUFVLEVBQUUs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SUFBSSxFQUFFLE9BQU87NkJBQ2QsQ0FBQyxDQUFBO3dCQUNKLENBQUM7cUJBQ0YsQ0FBQyxDQUFBO2dCQUNKLENBQUM7YUFDRixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFLRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFFLEtBQUs7U0FDWixDQUFDLENBQUE7SUFDSixDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyog5a+85YWl5qih5Z2XICovXHJcbmltcG9ydCBTaWd1cFNlcnZlciBmcm9tICcuLi8uLi9hcGkvYXBpL3NpZ3VwL3NlcnZlcidcclxuaW1wb3J0IEhvbWVyU2VydmVyIGZyb20gJy4uLy4uL2FwaS9hcGkvaG9tZS9zZXJ2ZXInXHJcbmltcG9ydCBVc2VyU2VydmVyIGZyb20gJy4uLy4uL2FwaS9hcGkvdXNlci9zZXJ2ZXInXHJcbmltcG9ydCBDb3Vwb25TZXJ2ZXIgZnJvbSAnLi4vLi4vYXBpL2FwaS9jb3Vwb24vc2VydmVyJ1xyXG5cclxuLyog5a6e5L6L5YyW5qih5Z2XICovXHJcbmNvbnN0IHVzZXIgPSBuZXcgVXNlclNlcnZlcigpXHJcbmNvbnN0IHNpZ3VwID0gbmV3IFNpZ3VwU2VydmVyKClcclxuY29uc3Qgc2VydmVyID0gbmV3IEhvbWVyU2VydmVyKClcclxuY29uc3QgY291cG9uID0gbmV3IENvdXBvblNlcnZlcigpXHJcblxyXG4vKiDlt6Xlhbflr7zlhaUgKi9cclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXHJcblxyXG4vKiDlr7zlhaXoh6rlrprkuYnphY3nva7mlofku7YgKi9cclxuaW1wb3J0IHsgVFhfTUFQX0tFWSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcnXHJcblxyXG4vKiDlr7zlhaXohb7orq/lnLDlm77mj5Lku7YgKi9cclxuY29uc3QgY2hvb3NlTG9jYXRpb24gPSByZXF1aXJlUGx1Z2luKCdjaG9vc2VMb2NhdGlvbicpO1xyXG5cclxuLyog6IW+6K6v5L2N572u5pyN5YqhU0RL5a+85YWlICovXHJcbmNvbnN0IFFRTWFwV1ggPSByZXF1aXJlKCcuLi8uLi91dGlscy9xcW1hcC13eC1qc3NkaycpXHJcbmNvbnN0IHFxbWFwc2RrID0gbmV3IFFRTWFwV1goe1xyXG4gIGtleTogVFhfTUFQX0tFWVxyXG59KTtcclxuXHJcblBhZ2Uoe1xyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICBiYXNlOiB7fSxcclxuICAgIGNpdHk6ICcnLFxyXG4gICAgdG9rZW46ICcnLFxyXG4gICAgb3JkZXI6IFtdLFxyXG4gICAgbWFya2VyczogW10sXHJcbiAgICBhZGRyZXNzOiAnJyxcclxuICAgIHNob3c6IGZhbHNlLFxyXG4gICAgdXNlckluZm86ICcnLFxyXG4gICAgbWFwRGF0YToge30sXHJcbiAgICBsYXRpdHVkZTogJycsXHJcbiAgICByZWxvZ2luOiAnJyxcclxuICAgIGxvbmdpdHVkZTogJycsXHJcbiAgICBiYW5uZXI6IFsnJ10sXHJcbiAgICBpc0xvZ2luOiBmYWxzZSxcclxuICAgIG9yZGVyU3RhdGU6IGZhbHNlLFxyXG4gICAgc2hvd1N0YXR1czogZmFsc2UsXHJcbiAgICBzaG93Q291cG9uOiBmYWxzZSxcclxuICAgIHNob3dTdGF0ZTogZmFsc2VcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIGlmICghaXNFbXB0eShvcHRpb25zKSkge1xyXG4gICAgICBsZXQge1xyXG4gICAgICAgIHJlbG9naW5cclxuICAgICAgfSA9IG9wdGlvbnNcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICByZWxvZ2luXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi355m75b2VXHJcbiAgICovXHJcbiAgYXN5bmMgbG9naW4oKSB7XHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgbG9hZFN0YXR1czogZmFsc2UsXHJcbiAgICAgIGxvYWRpbmc6ICcnXHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWd1cC53eGxvZ2luKHBhcmFtKVxyXG4gICAgaWYgKHJlc3VsdC5jb2RlID09IDApIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0b2tlbjogcmVzdWx0LnRva2VuXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuY291cG9uKClcclxuICAgICAgdGhpcy5vcmRlclF1ZXJ5KClcclxuICAgICAgaWYgKHJlc3VsdC5waG9uZVN0YXRlID09IDEpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgc2hvd1N0YXRlOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluS8mOaDoOWIuOS/oeaBr1xyXG4gICAqL1xyXG4gIGFzeW5jIGNvdXBvbigpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvdXBvbi5sZWFkQ291cG9uKClcclxuICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgIGxldCB7XHJcbiAgICAgICAgZGF0YVxyXG4gICAgICB9ID0gcmVzdWx0XHJcbiAgICAgIGxldCBzZXQgPSB3eC5nZXRTdG9yYWdlU3luYygnY291cG9uJylcclxuICAgICAgbGV0IGNvdXBvbiA9IGZhbHNlXHJcbiAgICAgIGlmIChzZXQgPT09ICcnKSB7XHJcbiAgICAgICAgY291cG9uID0gZGF0YS5sZW5ndGggIT0gMCA/IHRydWUgOiBmYWxzZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvdXBvbiA9ICFzZXQgPyBmYWxzZSA6IHRydWVcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHNob3dDb3Vwb246IGNvdXBvblxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOagueaNrnRva2Vu6I635Y+W5b2T5YmN6L+b6KGM5Lit55qE6K6i5Y2VXHJcbiAgICovXHJcbiAgYXN5bmMgb3JkZXJRdWVyeSgpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci5vcmRlclF1ZXJ5KClcclxuICAgIGxldCBvcmRlclN0YXRlID0gcmVzdWx0LmNvZGUgPT0gMCA/IHRydWUgOiBmYWxzZVxyXG4gICAgbGV0IG9yZGVyID0gW11cclxuICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgIG9yZGVyID0gcmVzdWx0LmRhdGFcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG9yZGVyLFxyXG4gICAgICBvcmRlclN0YXRlLFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmiavnoIHlgZzovaZcclxuICAgKi9cclxuICBzY2FuKCkge1xyXG5cclxuICAgIGlmICh0aGlzLmRhdGEudG9rZW4pIHtcclxuICAgICAgbGV0IHsgb3JkZXJTdGF0ZSB9ID0gdGhpcy5kYXRhXHJcbiAgICAgIGlmIChvcmRlclN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIG9yZGVyU3RhdHVzOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHBob25lU3RhdGUgPSB3eC5nZXRTdG9yYWdlU3luYygncGhvbmVTdGF0ZScpXHJcbiAgICAgICAgaWYgKHBob25lU3RhdGUgPT0gMCkge1xyXG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9ob21lcy9zY2FuL3NjYW4nLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgc2hvd1N0YXR1czogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgaXNMb2dpbjogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi355m75b2VXHJcbiAgICovXHJcbiAgYXN5bmMgZ29Mb2dpbigpIHtcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICBsb2FkU3RhdHVzOiB0cnVlLFxyXG4gICAgICBsb2FkaW5nOiAn55m75b2V5Lit77yM6K+356iN5YCZLi4uJ1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lndXAud3hsb2dpbihwYXJhbSlcclxuICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdG9rZW46IHJlc3VsdC50b2tlblxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLm15TWVudUluZm9ybWF0aW9uKClcclxuICAgICAgaWYgKHJlc3VsdC5waG9uZVN0YXRlID09IDEpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgc2hvd1N0YXR1czogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn55m75b2V5oiQ5YqfJyxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiAn55m75b2V5aSx6LSlJyxcclxuICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICog6I635Y+W5oiR55qE5a+86Iiq5qCP5L+h5oGv5o6l5Y+j5bm25pu05paw5pys5Zyw57yT5a2YXHJcbiAqL1xyXG4gIGFzeW5jIG15TWVudUluZm9ybWF0aW9uKCkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXNlci5teU1lbnVJbmZvcm1hdGlvbigpXHJcbiAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICB3eC5zZXRTdG9yYWdlU3luYygndXNlckluZm8nLCByZXN1bHQuZGF0YSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDliY3lvoDnu5Hlrprlj7fnoIFcclxuICAgKiBAcGFyYW0gZSDkuovku7blr7nosaFcclxuICAgKi9cclxuICBnZXRQaG9uZU51bWJlcihlOiB7IGRldGFpbDogeyBlcnJNc2c6IHN0cmluZzsgaXY6IHN0cmluZzsgZW5jcnlwdGVkRGF0YTogc3RyaW5nIH0gfSkge1xyXG4gICAgaWYgKGUuZGV0YWlsLmVyck1zZyA9PT0gJ2dldFBob25lTnVtYmVyOm9rJykge1xyXG4gICAgICB3eC5sb2dpbih7XHJcbiAgICAgICAgdGltZW91dDogNTAwMCxcclxuICAgICAgICBzdWNjZXNzOiBhc3luYyByZXMgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY29kZSA9IHJlcy5jb2RlXHJcbiAgICAgICAgICBsZXQgeyBpdiwgZW5jcnlwdGVkRGF0YSB9ID0gZS5kZXRhaWxcclxuICAgICAgICAgIGNvbnN0IHBhcmFtID0geyBpdiwgY29kZSwgZW5jcnlwdGVkRGF0YSB9XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWd1cC5nZXRQaG9uZU51bWJlcihwYXJhbSlcclxuICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgbGV0IHsgcGhvbmVOdW1iZXIgfSA9IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICB1cmw6IGAvcGFnZXMvc2lndXAvcmVnaXN0ZXIvcmVnaXN0ZXI/cGhvbmU9JHtwaG9uZU51bWJlcn0mcGF0aD1ob21lYFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDot7PovazmiYvmnLrnu5HlrprpobXpnaJcclxuICAgKi9cclxuICByZWdpc3RlcigpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcvcGFnZXMvc2lndXAvcmVnaXN0ZXIvcmVnaXN0ZXInLFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDot7PovazorqLljZXor6bmg4VcclxuICAgKi9cclxuICB0b09yZGVyRGV0YWlsKCkge1xyXG4gICAgbGV0IHsgb3JkZXIgfSA9IDxhbnk+dGhpcy5kYXRhXHJcbiAgICBsZXQgeyBpc0NyZWRpdCwgb3JkZXJJZCwgc3RhdGUgfSA9IG9yZGVyXHJcbiAgICBpZiAoaXNDcmVkaXQpIHtcclxuICAgICAgdGhpcy5hdXRob3JPcmRlcihvcmRlcklkKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHN0YXRlID09IDMpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogYC9wYWdlcy9ob21lcy9wYXkvcGF5P29yZGVySWQ9JHtvcmRlcklkfWBcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL2hvbWVzL29yZGVyL29yZGVyJyxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog5b6u5L+h5pSv5LuY5YiG6K6i5Y2VXHJcbiAgICovXHJcbiAgYXN5bmMgYXV0aG9yT3JkZXIob3JkZXJJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBvcmRlcnMgPSBhd2FpdCBzZXJ2ZXIuZ2V0V2VjaGF0T3JkZXJEZXRhaWwoeyBvcmRlcklkIH0pXHJcbiAgICBpZiAob3JkZXJzLmNvZGUgPT0gMCkge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgbWNoX2lkLFxyXG4gICAgICAgIHNlcnZpY2VfaWQsXHJcbiAgICAgICAgb3V0X29yZGVyX25vLFxyXG4gICAgICAgIG5vbmNlX3N0cixcclxuICAgICAgICB0aW1lc3RhbXAsXHJcbiAgICAgICAgc2lnbl90eXBlLFxyXG4gICAgICAgIHNpZ25cclxuICAgICAgfSA9IG9yZGVycy5kYXRhXHJcblxyXG4gICAgICB3eC5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xyXG4gICAgICAgIGFwcElkOiAnd3hkOGYzNzkzZWEzYjkzNWI4JyxcclxuICAgICAgICBwYXRoOiAncGFnZXMvcmVjb3JkL2RldGFpbCcsXHJcbiAgICAgICAgZXh0cmFEYXRhOiB7XHJcbiAgICAgICAgICBtY2hfaWQsXHJcbiAgICAgICAgICBzZXJ2aWNlX2lkLFxyXG4gICAgICAgICAgb3V0X29yZGVyX25vLFxyXG4gICAgICAgICAgdGltZXN0YW1wLFxyXG4gICAgICAgICAgbm9uY2Vfc3RyLFxyXG4gICAgICAgICAgc2lnbl90eXBlLFxyXG4gICAgICAgICAgc2lnblxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogb3JkZXJzLm1zZyxcclxuICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDngrnlh7vmkJzntKLlnLDngrlcclxuICAgKi9cclxuICBzZWFyY2goKSB7XHJcbiAgICBpZiAoIWlzRW1wdHkodGhpcy5kYXRhLm9yZGVyKSkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIG9yZGVyU3RhdHVzOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCB7XHJcbiAgICAgICAgbWFya2VycyxcclxuICAgICAgICBsb25naXR1ZGUsXHJcbiAgICAgICAgbGF0aXR1ZGVcclxuICAgICAgfSA9IDxhbnk+dGhpcy5kYXRhLmJhc2VcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiBgL3BhZ2VzL2hvbWVzL3NlYXJjaC9zZWFyY2g/bG9uZ2l0dWRlPSR7bG9uZ2l0dWRlfSZsYXRpdHVkZT0ke2xhdGl0dWRlfSZjaXR5PSR7dGhpcy5kYXRhLmNpdHl9Jm1hcmtlcnM9JHtKU09OLnN0cmluZ2lmeShtYXJrZXJzKX1gLFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOi3s+i9rOWkhOeQhuW9k+WJjeiuouWNlVxyXG4gICAqL1xyXG4gIGNvbmZpcm0oKSB7XHJcbiAgICAvKmxldCB7IG9yZGVyIH0gPSA8YW55PnRoaXMuZGF0YVxyXG4gICAgaWYgKCFpc0VtcHR5KG9yZGVyKSkge1xyXG4gICAgICBpZiAob3JkZXIuc3RhdGUgPT0gMykge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiBgL3BhZ2VzL2hvbWVzL3BheS9wYXk/b3JkZXJJZD0ke29yZGVyLm9yZGVySWR9YFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvaG9tZXMvb3JkZXIvb3JkZXInLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0qL1xyXG5cclxuICAgIHRoaXMudG9PcmRlckRldGFpbCgpXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog5omT5byA5Zyw5Zu+5o+S5Lu2XHJcbiAgICovXHJcbiAgdG9QbHVzKCkge1xyXG4gICAgY29uc3Qga2V5ID0gVFhfTUFQX0tFWTsgLy/kvb/nlKjlnKjohb7orq/kvY3nva7mnI3liqHnlLPor7fnmoRrZXlcclxuICAgIGNvbnN0IHJlZmVyZXIgPSAn5qa06L2m5L2NJzsgLy/osIPnlKjmj5Lku7bnmoRhcHDnmoTlkI3np7BcclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gJ+eUn+a0u+acjeWKoSzlqLHkuZDkvJHpl7InO1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJ3BsdWdpbjovL2Nob29zZUxvY2F0aW9uL2luZGV4P2tleT0nICsga2V5ICsgJyZyZWZlcmVyPScgKyByZWZlcmVyICsgJyZsb2NhdGlvbj0mY2F0ZWdvcnk9JyArIGNhdGVnb3J5XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpooTnlZnovabkvY1cclxuICAgKi9cclxuICByZXNlcnZlKCkge1xyXG4gICAgbGV0IHsgaWQgfSA9IDxhbnk+dGhpcy5kYXRhLm1hcERhdGFcclxuICAgIGlmIChpZCkge1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IGAvcGFnZXMvaG9tZXMvcGFya0RldGFpbC9wYXJrRGV0YWlsP2VzdGF0ZUlkPSR7aWR9YFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgbGV0IHtcclxuICAgICAgICByZWxvZ2luXHJcbiAgICAgIH0gPSA8YW55PnRoaXMuZGF0YVxyXG4gICAgICBpZiAocmVsb2dpbiA9PSAxKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbigpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJylcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgIHRoaXMub3JkZXJRdWVyeSgpXHJcbiAgICAgICAgICB0aGlzLmNvdXBvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCAyMDApO1xyXG5cclxuICAgIGlmICghaXNFbXB0eSh0aGlzLmRhdGEubWFwRGF0YSkpIHtcclxuICAgICAgY29uc3QgeyBuYW1lIH0gPSA8YW55PnRoaXMuZGF0YS5tYXBEYXRhXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdmFsdWU6IG5hbWVcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB0b2tlbjogd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyksXHJcbiAgICAgIHVzZXJJbmZvOiB3eC5nZXRTdG9yYWdlU3luYygndXNlckluZm8nKVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgbG9jYXRpb24gPSBjaG9vc2VMb2NhdGlvbi5nZXRMb2NhdGlvbigpXHJcbiAgICBpZiAoIWlzRW1wdHkodGhpcy5kYXRhLm1hcERhdGEpKSB7XHJcbiAgICAgIGxldCB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBsYXRpdHVkZSxcclxuICAgICAgICBsb25naXR1ZGVcclxuICAgICAgfSA9IDxhbnk+dGhpcy5kYXRhLm1hcERhdGFcclxuICAgICAgbGV0IG1hcmtlcnM6IGFueSA9IFsoe1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIGxhdGl0dWRlLFxyXG4gICAgICAgIGxvbmdpdHVkZSxcclxuICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICBjb250ZW50OiBuYW1lLFxyXG4gICAgICAgICAgcGFkZGluZzogJzEwJyxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWR0aDogJzQ4cnB4JyxcclxuICAgICAgICBoZWlnaHQ6ICc4MHJweCcsXHJcbiAgICAgICAgaWNvblBhdGg6ICcvYXNzZXRzL2ltYWdlcy9ob21lL3NsaWRlX3Bvc2l0aW9uQDJ4LnBuZydcclxuICAgICAgfSldXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgbWFya2VycyxcclxuICAgICAgICBsYXRpdHVkZSxcclxuICAgICAgICBsb25naXR1ZGUsXHJcbiAgICAgICAgYWRkcmVzczogbmFtZSxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSBpZiAobG9jYXRpb24pIHtcclxuICAgICAgbGV0IHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGxhdGl0dWRlLFxyXG4gICAgICAgIGxvbmdpdHVkZVxyXG4gICAgICB9ID0gbG9jYXRpb25cclxuICAgICAgbGV0IG1hcmtlcnM6IGFueSA9IFsoe1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIGxhdGl0dWRlLFxyXG4gICAgICAgIGxvbmdpdHVkZSxcclxuICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICBjb250ZW50OiBuYW1lLFxyXG4gICAgICAgICAgcGFkZGluZzogJzEwJyxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWR0aDogJzQ4cnB4JyxcclxuICAgICAgICBoZWlnaHQ6ICc4MHJweCcsXHJcbiAgICAgICAgaWNvblBhdGg6ICcvYXNzZXRzL2ltYWdlcy9ob21lL3NsaWRlX3Bvc2l0aW9uQDJ4LnBuZydcclxuICAgICAgfSldXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgbWFya2VycyxcclxuICAgICAgICBsYXRpdHVkZSxcclxuICAgICAgICBsb25naXR1ZGUsXHJcbiAgICAgICAgYWRkcmVzczogbmFtZSxcclxuICAgICAgICBtYXBEYXRhOiBsb2NhdGlvblxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd3guZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgIHR5cGU6ICdnY2owMicsXHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIGxldCBtYXJrZXJzOiBhbnkgPSB0aGlzLmRhdGEubWFya2Vyc1xyXG4gICAgICAgICAgbGV0IGxhdGl0dWRlOiBhbnkgPSByZXMubGF0aXR1ZGVcclxuICAgICAgICAgIGxldCBsb25naXR1ZGU6IGFueSA9IHJlcy5sb25naXR1ZGVcclxuICAgICAgICAgIG1hcmtlcnMucHVzaCh7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBsYXRpdHVkZSxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlLFxyXG4gICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogJ+W9k+WJjeS9jee9ricsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJzEwJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3aWR0aDogJzQ4cnB4JyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnODBycHgnLFxyXG4gICAgICAgICAgICBpY29uUGF0aDogJy9hc3NldHMvaW1hZ2VzL2hvbWUvc2xpZGVfcG9zaXRpb25AMngucG5nJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGxldCBiYXNlID0ge1xyXG4gICAgICAgICAgICBtYXJrZXJzLFxyXG4gICAgICAgICAgICBsYXRpdHVkZSxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgYmFzZSxcclxuICAgICAgICAgICAgbWFya2VycyxcclxuICAgICAgICAgICAgbGF0aXR1ZGUsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBxcW1hcHNkay5yZXZlcnNlR2VvY29kZXIoe1xyXG4gICAgICAgICAgICBsb2NhdGlvbjoge1xyXG4gICAgICAgICAgICAgIGxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAoZGF0YTogeyByZXN1bHQ6IHsgYWRkcmVzczogc3RyaW5nIH0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzXHJcbiAgICAgICAgICAgICAgfSA9IGRhdGEucmVzdWx0XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIGNpdHk6IGFkZHJlc3NcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLemhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZSgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG1hcmtlcnM6IFtdLFxyXG4gICAgICBzaG93OiBmYWxzZVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxufSkiXX0=