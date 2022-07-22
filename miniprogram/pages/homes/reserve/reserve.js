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
var server_3 = require("../../../api/api/wx/server");
var server = new server_1.default();
var user = new server_2.default();
var pay = new wxPay_1.default();
var wex = new server_3.default();
var util_1 = require("../../../utils/util");
Page({
    data: {
        lockId: '',
        carList: [],
        enTime: '00:00',
        endTime: '00:00',
        beginTime: '',
        plate: '',
        reserve: {},
        isAdd: false,
        showState: false
    },
    onLoad: function (options) {
        if (!util_1.isEmpty(options)) {
            this.setData({
                lockId: options.lockId
            });
        }
    },
    currentOrder: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, server.orderQuery()];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            wx.reLaunch({
                                url: "/pages/home/home"
                            });
                        }
                        return [2];
                }
            });
        });
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
                            if (!this.data.plate) {
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
        var lockId = this.data.lockId;
        wx.navigateTo({
            url: "/pages/users/myCars/myCars?select=1&lockId=" + lockId,
        });
    },
    subscribeMessage: function () {
        var _this = this;
        var message = 'FY_8gnrJJ0QMMfN2Z-ODI1Yg1Yr4T301TYkOVjOn8NM';
        if (this.versionCompare('2.10.1')) {
            wx.getSetting({
                withSubscriptions: true,
                success: function (res) {
                    console.log(res);
                    if (res.subscriptionsSetting && res.subscriptionsSetting.itemSettings &&
                        res.subscriptionsSetting.itemSettings[message] == "reject") {
                        _this.openConfirm('检测到您没打开推送权限，是否去设置打开？');
                    }
                    else {
                        wx.requestSubscribeMessage({
                            tmplIds: [message],
                            success: function (res) {
                                if (res[message] == 'accept') {
                                }
                            },
                            fail: function (res) { console.info(res); },
                        });
                    }
                }
            });
        }
        else if (this.versionCompare('2.4.4')) {
            wx.requestSubscribeMessage({
                tmplIds: [message],
                success: function (res) {
                    if (res[message] == 'accept') {
                    }
                },
                fail: function (res) { console.info(res); },
            });
        }
    },
    openConfirm: function (message) {
        wx.showModal({
            content: message,
            confirmText: "确认",
            cancelText: "取消",
            success: function (res) {
                if (res.confirm) {
                    wx.openSetting({
                        success: function (res) {
                            console.log(res.authSetting);
                        },
                        fail: function (error) {
                            console.log(error);
                        }
                    });
                }
                else {
                    console.log('用户点击取消');
                }
            }
        });
    },
    versionCompare: function (v) {
        var version = wx.getSystemInfoSync().SDKVersion;
        if (this.compareVersion(version, v) >= 0) {
            return true;
        }
        else {
            return false;
        }
    },
    compareVersion: function (vs1, vs2) {
        var v1 = vs1.split('.');
        var v2 = vs2.split('.');
        var len = Math.max(v1.length, v2.length);
        while (v1.length < len) {
            v1.push('0');
        }
        while (v2.length < len) {
            v2.push('0');
        }
        for (var i = 0; i < len; i++) {
            var num1 = parseInt(v1[i]);
            var num2 = parseInt(v2[i]);
            if (num1 > num2) {
                return 1;
            }
            else if (num1 < num2) {
                return -1;
            }
        }
        return 0;
    },
    authorOrder: function () {
        return __awaiter(this, void 0, void 0, function () {
            var that, _a, lockId, endTime, beginTime, plate, param, result, orderId_1, results, state, titmer_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        that = this;
                        _a = that.data, lockId = _a.lockId, endTime = _a.endTime, beginTime = _a.beginTime, plate = _a.plate;
                        param = {
                            lockId: lockId,
                            endTime: endTime,
                            beginTime: beginTime,
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
                        return [4, server.creditPayToOrder(param)];
                    case 1:
                        result = _b.sent();
                        if (!(result.code == 0)) return [3, 3];
                        orderId_1 = result.data.orderId;
                        return [4, server.orderQuery()];
                    case 2:
                        results = _b.sent();
                        if (results.code == 0) {
                            state = results.data.state;
                            if (state == 1 || state == 2) {
                                wx.showToast({
                                    title: '下单成功',
                                    icon: 'none'
                                });
                                that.subscribeMessage();
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
                                            case 0: return [4, server.orderQuery()];
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
                        _b.label = 4;
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
    wxScanOrder: function () {
        return __awaiter(this, void 0, void 0, function () {
            var that, _a, lockId, endTime, beginTime, plate, param, result, code, payParam, orderId_2, data, results, state, params, res, orderId_3, msg;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        that = this;
                        _a = that.data, lockId = _a.lockId, endTime = _a.endTime, beginTime = _a.beginTime, plate = _a.plate;
                        param = {
                            lockId: lockId,
                            endTime: endTime,
                            beginTime: beginTime,
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
                        return [4, server.WXOrderToFreeze(param)];
                    case 1:
                        result = _b.sent();
                        code = result.code;
                        if (!(code == 0)) return [3, 7];
                        payParam = result.data.orderStr;
                        orderId_2 = result.data.orderId;
                        return [4, pay.pay(payParam)];
                    case 2:
                        data = _b.sent();
                        if (!(data.code == 200)) return [3, 4];
                        return [4, server.orderQuery()];
                    case 3:
                        results = _b.sent();
                        if (results.code == 0) {
                            state = results.data.state;
                            if (state == 1 || state == 2) {
                                wx.showToast({
                                    title: '下单成功',
                                    icon: 'none'
                                });
                                that.subscribeMessage();
                                setTimeout(function () {
                                    wx.reLaunch({
                                        url: "/pages/homes/order/order?orderId=" + orderId_2
                                    });
                                }, 500);
                            }
                            else if (state == 7) {
                                wx.showLoading({
                                    title: '订单确认中...',
                                    mask: true
                                });
                                that.orderPolling();
                            }
                        }
                        if (results.code == 7) {
                            wx.showLoading({
                                title: '订单确认中...',
                                mask: true
                            });
                            that.orderPolling();
                        }
                        return [3, 6];
                    case 4:
                        params = {
                            orderId: orderId_2
                        };
                        return [4, server.cancelPaking(params)];
                    case 5:
                        res = _b.sent();
                        if (res.code == 0) {
                            wx.showToast({
                                title: '预留失败',
                                icon: 'none'
                            });
                        }
                        _b.label = 6;
                    case 6: return [3, 8];
                    case 7:
                        if (code == 20) {
                            orderId_3 = result.data.orderId;
                            msg = result.msg;
                            wx.showToast({
                                title: msg,
                                icon: 'none'
                            });
                            setTimeout(function () {
                                wx.reLaunch({
                                    url: "/pages/homes/order/order?orderId=" + orderId_3
                                });
                            }, 500);
                        }
                        else {
                            wx.showToast({
                                title: result.msg,
                                icon: 'none'
                            });
                            setTimeout(function () {
                                wx.showToast({
                                    title: '预留失败',
                                    icon: 'none'
                                });
                            }, 500);
                        }
                        _b.label = 8;
                    case 8: return [2];
                }
            });
        });
    },
    orderPolling: function () {
        var _this = this;
        var titmer = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
            var order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, server.orderQuery()];
                    case 1:
                        order = _a.sent();
                        if (order.code == 0) {
                            if (order.data.state == 1 || order.data.state == 2) {
                                clearInterval(titmer);
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
    },
    onShow: function () {
        var isAdd = this.data.isAdd;
        if (!isAdd) {
            if (!this.data.plate) {
                this.selectPlateAll();
            }
        }
        this.getNowTime();
        this.lockDate();
        this.currentOrder();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlc2VydmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1REFBcUQ7QUFDckQsdURBQXFEO0FBQ3JELDhDQUF3QztBQUN4QyxxREFBaUQ7QUFHakQsSUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBVSxFQUFFLENBQUE7QUFDL0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxnQkFBVSxFQUFFLENBQUE7QUFDN0IsSUFBTSxHQUFHLEdBQUcsSUFBSSxlQUFLLEVBQUUsQ0FBQTtBQUN2QixJQUFNLEdBQUcsR0FBRyxJQUFJLGdCQUFRLEVBQUUsQ0FBQTtBQUcxQiw0Q0FBMkQ7QUFFM0QsSUFBSSxDQUFDO0lBS0QsSUFBSSxFQUFFO1FBQ0YsTUFBTSxFQUFFLEVBQUU7UUFDVixPQUFPLEVBQU8sRUFBRTtRQUNoQixNQUFNLEVBQUUsT0FBTztRQUNmLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUUsRUFBRTtRQUNYLEtBQUssRUFBRSxLQUFLO1FBQ1osU0FBUyxFQUFDLEtBQUs7S0FDbEI7SUFLRCxNQUFNLEVBQUUsVUFBVSxPQUFPO1FBQ3JCLElBQUksQ0FBQyxjQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07YUFDekIsQ0FBQyxDQUFBO1NBQ0w7SUFFTCxDQUFDO0lBRUssWUFBWTs7Ozs7NEJBQ0MsV0FBTSxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUE7O3dCQUFsQyxNQUFNLEdBQUcsU0FBeUI7d0JBQ3hDLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7NEJBQ2xCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0NBQ1IsR0FBRyxFQUFFLGtC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QUFqQyxLQUFLLEdBQUcsU0FBeUI7d0JBQ3ZDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7NEJBQ2pCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTtnQ0FDaEQsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dDQUNyQixFQUFFLENBQUMsU0FBUyxDQUFDO29DQUNULEtBQUssRUFBRSxNQUFNO29DQUNiLElBQUksRUFBRSxNQUFNO2lDQUNmLENBQUMsQ0FBQTtnQ0FDRixFQUFFLENBQUMsV0FBVyxFQUFFLENBQUE7Z0NBQ2hCLFVBQVUsQ0FBQztvQ0FDUCxFQUFFLENBQUMsUUFBUSxDQUFDO3dDQUNSLEdBQUcsRUFBRSxzQ0FBb0MsS0FBSyxDQUFDLE9BQVM7cUNBQzNELENBQUMsQ0FBQTtnQ0FDTixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7NkJBQ1Y7eUJBQ0o7Ozs7YUFDSixFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ1osQ0FBQztJQUtELE1BQU07UUFFRSxJQUFBLEtBQUssR0FDTCxJQUFJLENBQUMsSUFBSSxNQURKLENBQ0k7UUFDYixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNsQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7YUFDeEI7U0FDSjtRQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDZixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDdkIsQ0FBQztDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIOaooeWdl+WvvOWFpSAqL1xyXG5pbXBvcnQgSG9tZVNlcnZlciBmcm9tICcuLi8uLi8uLi9hcGkvYXBpL2hvbWUvc2VydmVyJ1xyXG5pbXBvcnQgVXNlclNlcnZlciBmcm9tICcuLi8uLi8uLi9hcGkvYXBpL3VzZXIvc2VydmVyJ1xyXG5pbXBvcnQgV3hQYXkgZnJvbSAnLi4vLi4vLi4vdXRpbHMvd3hQYXknXHJcbmltcG9ydCBXeFNlcnZlciBmcm9tICcuLi8uLi8uLi9hcGkvYXBpL3d4L3NlcnZlcidcclxuXHJcbi8qIOWunuS+i+WMluaooeWdlyAqL1xyXG5jb25zdCBzZXJ2ZXIgPSBuZXcgSG9tZVNlcnZlcigpXHJcbmNvbnN0IHVzZXIgPSBuZXcgVXNlclNlcnZlcigpXHJcbmNvbnN0IHBheSA9IG5ldyBXeFBheSgpXHJcbmNvbnN0IHdleCA9IG5ldyBXeFNlcnZlcigpXHJcblxyXG4vKuWvvOWFpeWwj+W3peWFtyovXHJcbmltcG9ydCB7IGZvcm1hdE1pbnV0ZSwgaXNFbXB0eSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnXHJcblxyXG5QYWdlKHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAgICovXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgbG9ja0lkOiAnJyxcclxuICAgICAgICBjYXJMaXN0OiA8YW55PltdLFxyXG4gICAgICAgIGVuVGltZTogJzAwOjAwJyxcclxuICAgICAgICBlbmRUaW1lOiAnMDA6MDAnLFxyXG4gICAgICAgIGJlZ2luVGltZTogJycsXHJcbiAgICAgICAgcGxhdGU6ICcnLFxyXG4gICAgICAgIHJlc2VydmU6IHt9LFxyXG4gICAgICAgIGlzQWRkOiBmYWxzZSxcclxuICAgICAgICBzaG93U3RhdGU6ZmFsc2VcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAgICovXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKCFpc0VtcHR5KG9wdGlvbnMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBsb2NrSWQ6IG9wdGlvbnMubG9ja0lkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBjdXJyZW50T3JkZXIoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyLm9yZGVyUXVlcnkoKVxyXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICAgIHVybDogYC9wYWdlcy9ob21lL2hvbWVgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW9k+WJjeaXtumXtOaXpeacn1xyXG4gICAgICovXHJcbiAgICBnZXROb3dUaW1lKCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgbGV0IHkgPSBkYXRlLmdldEZ1bGxZZWFyKClcclxuICAgICAgICBsZXQgbSA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICAgICAgICBsZXQgZCA9IGRhdGUuZ2V0RGF0ZSgpXHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBkYXRlLmdldFRpbWUoKVxyXG4gICAgICAgIGNvbnN0IGVuZCA9IGRhdGUuZ2V0VGltZSgpICsgMTUgKiA2MCAqIDEwMDBcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBlblRpbWU6IGZvcm1hdE1pbnV0ZShlbmQpLFxyXG4gICAgICAgICAgICBiZVRpbWU6IGZvcm1hdE1pbnV0ZShzdGFydCksXHJcbiAgICAgICAgICAgIGVuZFRpbWU6IERhdGUucGFyc2UoYCR7eX0vJHttfS8ke2R9ICR7Zm9ybWF0TWludXRlKGVuZCl9OjAwYCkudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgYmVnaW5UaW1lOiBEYXRlLnBhcnNlKGAke3l9LyR7bX0vJHtkfSAke2Zvcm1hdE1pbnV0ZShzdGFydCl9OjAwYCkudG9TdHJpbmcoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5b2T5YmN55So5oi355qE6L2m6L6GXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHNlbGVjdFBsYXRlQWxsKCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVzZXIuc2VsZWN0UGxhdGVBbGwoKVxyXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YVxyXG4gICAgICAgICAgICBsZXQgY2FyTGlzdDogYW55W10gPSBbXVxyXG4gICAgICAgICAgICBsZXQgcGxhdGUgPSAnJ1xyXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQ6IHsgc3RhdHVzOiBudW1iZXI7IHBsYXRlOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RhdHVzID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF0ZSA9IGVsZW1lbnQucGxhdGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhckxpc3QucHVzaChlbGVtZW50LnBsYXRlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgcGxhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXJMaXN0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmRhdGEucGxhdGUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93U3RhdGU6dHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6L2m5L2N6ZSB5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGxvY2tEYXRlKCkge1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIGxvY2tJZFxyXG4gICAgICAgIH0gPSB0aGlzLmRhdGFcclxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgbG9ja0lkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci5sb2NrRGF0ZShwYXJhbSlcclxuICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgcmVzZXJ2ZTogcmVzdWx0LmRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBg5oqx5q2J77yMJHtyZXN1bHQubXNnfWBcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9ob21lL2hvbWUnLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAieaLqeaXtumXtFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9fSBlIFxyXG4gICAgICovXHJcbiAgICBiaW5kVGltZUNoYW5nZShlOiB7IGRldGFpbDogeyB2YWx1ZTogYW55IH0gfSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgbGV0IHkgPSBkYXRlLmdldEZ1bGxZZWFyKClcclxuICAgICAgICBsZXQgbSA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICAgICAgICBsZXQgZCA9IGRhdGUuZ2V0RGF0ZSgpXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgZW5UaW1lOiBlLmRldGFpbC52YWx1ZSxcclxuICAgICAgICAgICAgZW5kVGltZTogRGF0ZS5wYXJzZShgJHt5fS8ke219LyR7ZH0gJHtlLmRldGFpbC52YWx1ZX06MDBgKS50b1N0cmluZygpLFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCJ5oup6L2m54mMXHJcbiAgICAgKi9cclxuICAgIHNlbGVjdFBsYXRlKCkge1xyXG4gICAgICAgIGxldCB7IGxvY2tJZCB9ID0gdGhpcy5kYXRhXHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogYC9wYWdlcy91c2Vycy9teUNhcnMvbXlDYXJzP3NlbGVjdD0xJmxvY2tJZD1gK2xvY2tJZCxcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuoumYhea2iOaBr1xyXG4gICAgICovXHJcbiAgICBzdWJzY3JpYmVNZXNzYWdlKCkge1xyXG4gICAgICAgIC8v6ZyA6KaB6K6i6ZiF55qE5raI5oGv5qih5p2/77yM5Zyo5b6u5L+h5YWs5LyX5bmz5Y+w5omL5Yqo6YWN572u6I635Y+W5qih5p2/SURcclxuICAgICAgICBsZXQgbWVzc2FnZSA9ICdGWV84Z25ySkowUU1NZk4yWi1PREkxWWcxWXI0VDMwMVRZa09Wak9uOE5NJ1xyXG4gICAgICAgIC8v5aaC5p6c5oC75piv5ouS57ud77yIc3Vic2NyaXB0aW9uc1NldHRpbmfvvIwyLjEwLjHlupPmiY3mlK/mjIHvvIlcclxuICAgICAgICBpZiAodGhpcy52ZXJzaW9uQ29tcGFyZSgnMi4xMC4xJykpIHtcclxuICAgICAgICAgICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgICAgICAgICB3aXRoU3Vic2NyaXB0aW9uczogdHJ1ZSwvL+aYr+WQpuWQjOaXtuiOt+WPlueUqOaIt+iuoumYhea2iOaBr+eahOiuoumYheeKtuaAge+8jOm7mOiupOS4jeiOt+WPllxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnN1YnNjcmlwdGlvbnNTZXR0aW5nICYmIHJlcy5zdWJzY3JpcHRpb25zU2V0dGluZy5pdGVtU2V0dGluZ3MgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN1YnNjcmlwdGlvbnNTZXR0aW5nLml0ZW1TZXR0aW5nc1ttZXNzYWdlXSA9PSBcInJlamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5omT5byA6K6+572u5Y676K6+572uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkNvbmZpcm0oJ+ajgOa1i+WIsOaCqOayoeaJk+W8gOaOqOmAgeadg+mZkO+8jOaYr+WQpuWOu+iuvue9ruaJk+W8gO+8nycpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdFN1YnNjcmliZU1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wbElkczogW21lc3NhZ2VdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNbbWVzc2FnZV0gPT0gJ2FjY2VwdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nlKjmiLflhYHorrhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbDogKHJlcykgPT4geyBjb25zb2xlLmluZm8ocmVzKSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmVyc2lvbkNvbXBhcmUoJzIuNC40JykpIHtcclxuICAgICAgICAgICAgd3gucmVxdWVzdFN1YnNjcmliZU1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgdG1wbElkczogW21lc3NhZ2VdLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNbbWVzc2FnZV0gPT0gJ2FjY2VwdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/nlKjmiLflhYHorrhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogKHJlcykgPT4geyBjb25zb2xlLmluZm8ocmVzKSB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPlvIDorr7nva5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFxyXG4gICAgICovXHJcbiAgICBvcGVuQ29uZmlybShtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICBjb250ZW50OiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBjb25maXJtVGV4dDogXCLnoa7orqRcIixcclxuICAgICAgICAgICAgY2FuY2VsVGV4dDogXCLlj5bmtohcIixcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy/ngrnlh7vigJznoa7orqTigJ3ml7bmiZPlvIDorr7nva7pobXpnaJcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4Lm9wZW5TZXR0aW5nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmF1dGhTZXR0aW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDln7rnoYDlupPniYjmnKzmr5TovoNcclxuICAgICAqIEBwYXJhbSB2IFxyXG4gICAgICovXHJcbiAgICB2ZXJzaW9uQ29tcGFyZSh2OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCB2ZXJzaW9uID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS5TREtWZXJzaW9uXHJcbiAgICAgICAgaWYgKHRoaXMuY29tcGFyZVZlcnNpb24odmVyc2lvbiwgdikgPj0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY29tcGFyZVZlcnNpb246IGZ1bmN0aW9uICh2czE6IHN0cmluZywgdnMyOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgdjEgPSB2czEuc3BsaXQoJy4nKVxyXG4gICAgICAgIGxldCB2MiA9IHZzMi5zcGxpdCgnLicpXHJcbiAgICAgICAgdmFyIGxlbiA9IE1hdGgubWF4KHYxLmxlbmd0aCwgdjIubGVuZ3RoKVxyXG5cclxuICAgICAgICB3aGlsZSAodjEubGVuZ3RoIDwgbGVuKSB7XHJcbiAgICAgICAgICAgIHYxLnB1c2goJzAnKVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAodjIubGVuZ3RoIDwgbGVuKSB7XHJcbiAgICAgICAgICAgIHYyLnB1c2goJzAnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgbnVtMSA9IHBhcnNlSW50KHYxW2ldKVxyXG4gICAgICAgICAgICB2YXIgbnVtMiA9IHBhcnNlSW50KHYyW2ldKVxyXG5cclxuICAgICAgICAgICAgaWYgKG51bTEgPiBudW0yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bTEgPCBudW0yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW+ruS/oeaUr+S7mOWIhuS4i+WNlVxyXG4gICAgICovXHJcbiAgICBhc3luYyBhdXRob3JPcmRlcigpIHtcclxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgbG9ja0lkLFxyXG4gICAgICAgICAgICBlbmRUaW1lLFxyXG4gICAgICAgICAgICBiZWdpblRpbWUsXHJcbiAgICAgICAgICAgIHBsYXRlXHJcbiAgICAgICAgfSA9IHRoYXQuZGF0YVxyXG4gICAgICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICAgICAgICBsb2NrSWQsXHJcbiAgICAgICAgICAgIGVuZFRpbWUsXHJcbiAgICAgICAgICAgIGJlZ2luVGltZSxcclxuICAgICAgICAgICAgcGxhdGUsXHJcbiAgICAgICAgICAgIHBheVR5cGU6ICd3eCdcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFwbGF0ZSkge1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfor7fpgInmi6novabniYzlj7cnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyLmNyZWRpdFBheVRvT3JkZXIocGFyYW0pXHJcbiAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHsgb3JkZXJJZCB9ID0gcmVzdWx0LmRhdGFcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHNlcnZlci5vcmRlclF1ZXJ5KClcclxuICAgICAgICAgICAgaWYgKHJlc3VsdHMuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgeyBzdGF0ZSB9ID0gcmVzdWx0cy5kYXRhXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT0gMSB8fCBzdGF0ZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfkuIvljZXmiJDlip8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc3Vic2NyaWJlTWVzc2FnZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlua1BheU9yZGVyKG9yZGVySWQpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICforqLljZXnoa7orqTkuK0uLi4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRtZXIgPSBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVyID0gYXdhaXQgc2VydmVyLm9yZGVyUXVlcnkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JkZXIuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JkZXIuZGF0YS5zdGF0ZSA9PSAxIHx8IG9yZGVyLmRhdGEuc3RhdGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGl0bWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5LiL5Y2V5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYC9wYWdlcy9ob21lcy9vcmRlci9vcmRlcj9vcmRlcklkPSR7b3JkZXIub3JkZXJJZH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwMClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0cy5jb2RlID09IDcpIHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3VsdHMubXNnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IGAvcGFnZXMvaG9tZS9ob21lYFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzdWx0Lm1zZyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYC9wYWdlcy9ob21lL2hvbWVgXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgKiDlvq7kv6HmlK/ku5jliIborqLljZVcclxuICAgKi9cclxuICAgIGFzeW5jIGxpbmtQYXlPcmRlcihvcmRlcklkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBvcmRlcnMgPSBhd2FpdCBzZXJ2ZXIuZ2V0V2VjaGF0T3JkZXJEZXRhaWwoeyBvcmRlcklkIH0pXHJcbiAgICAgICAgaWYgKG9yZGVycy5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgbWNoX2lkLFxyXG4gICAgICAgICAgICAgICAgc2VydmljZV9pZCxcclxuICAgICAgICAgICAgICAgIG91dF9vcmRlcl9ubyxcclxuICAgICAgICAgICAgICAgIG5vbmNlX3N0cixcclxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcclxuICAgICAgICAgICAgICAgIHNpZ25fdHlwZSxcclxuICAgICAgICAgICAgICAgIHNpZ25cclxuICAgICAgICAgICAgfSA9IG9yZGVycy5kYXRhXHJcblxyXG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xyXG4gICAgICAgICAgICAgICAgYXBwSWQ6ICd3eGQ4ZjM3OTNlYTNiOTM1YjgnLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogJ3BhZ2VzL3JlY29yZC9kZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWNoX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0X29yZGVyX25vLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcclxuICAgICAgICAgICAgICAgICAgICBub25jZV9zdHIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2lnbl90eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogb3JkZXJzLm1zZyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvq7kv6HmlK/ku5jliIbmjojmnYNcclxuICAgICAqL1xyXG4gICAgYmVmb3JQYXkoKSB7XHJcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgICAgICB3eC5sb2dpbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGFzeW5jIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgeyBjb2RlIH0gPSByZXNcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHdleC5wcmVQZXJtaXNzaW9ucyh7IGNvZGUgfSlcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSA9PSAnQVZBSUxBQkxFJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuYXV0aG9yT3JkZXIoKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeyBkYXRhIH0gPSByZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhICE9ICdGQUlMJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6ICd3eGQ4ZjM3OTNlYTNiOTM1YjgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJ3BhZ2VzL3VzZS9lbmFibGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlfcGVybWlzc2lvbnNfdG9rZW46IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKCkgeyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbCgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmjojmnYPlpLHotKXvvIzor7fnqI3lkI7lsJ3or5XvvIEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WPguaVsOmUmeivrycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaKvOmHkeS4i+WNlVxyXG4gICAgICovXHJcbiAgICBhc3luYyB3eFNjYW5PcmRlcigpIHtcclxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgbG9ja0lkLFxyXG4gICAgICAgICAgICBlbmRUaW1lLFxyXG4gICAgICAgICAgICBiZWdpblRpbWUsXHJcbiAgICAgICAgICAgIHBsYXRlXHJcbiAgICAgICAgfSA9IHRoYXQuZGF0YVxyXG4gICAgICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICAgICAgICBsb2NrSWQsXHJcbiAgICAgICAgICAgIGVuZFRpbWUsXHJcbiAgICAgICAgICAgIGJlZ2luVGltZSxcclxuICAgICAgICAgICAgcGxhdGUsXHJcbiAgICAgICAgICAgIHBheVR5cGU6ICd3eCdcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFwbGF0ZSkge1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfor7fpgInmi6novabniYzlj7cnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZXJ2ZXIuV1hPcmRlclRvRnJlZXplKHBhcmFtKVxyXG4gICAgICAgIGNvbnN0IHsgY29kZSB9ID0gcmVzdWx0XHJcbiAgICAgICAgaWYgKGNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXlQYXJhbSA9IHJlc3VsdC5kYXRhLm9yZGVyU3RyXHJcbiAgICAgICAgICAgIGxldCB7IG9yZGVySWQgfSA9IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwYXkucGF5KHBheVBhcmFtKVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHNlcnZlci5vcmRlclF1ZXJ5KClcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB7IHN0YXRlIH0gPSByZXN1bHRzLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT0gMSB8fCBzdGF0ZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S4i+WNleaIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zdWJzY3JpYmVNZXNzYWdlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL2hvbWVzL29yZGVyL29yZGVyP29yZGVySWQ9JHtvcmRlcklkfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PSA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K6i5Y2V56Gu6K6k5LitLi4uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5vcmRlclBvbGxpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzLmNvZGUgPT0gNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICforqLljZXnoa7orqTkuK0uLi4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm9yZGVyUG9sbGluZygpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJJZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgc2VydmVyLmNhbmNlbFBha2luZyhwYXJhbXMpXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6aKE55WZ5aSx6LSlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PSAyMCkge1xyXG4gICAgICAgICAgICBsZXQgeyBvcmRlcklkIH0gPSByZXN1bHQuZGF0YVxyXG4gICAgICAgICAgICBsZXQgeyBtc2cgfSA9IHJlc3VsdFxyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1zZyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IGAvcGFnZXMvaG9tZXMvb3JkZXIvb3JkZXI/b3JkZXJJZD0ke29yZGVySWR9YFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3VsdC5tc2csXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6aKE55WZ5aSx6LSlJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuouWNlei9ruivolxyXG4gICAgICovXHJcbiAgICBvcmRlclBvbGxpbmcoKXtcclxuICAgICAgICBjb25zdCB0aXRtZXIgPSBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyID0gYXdhaXQgc2VydmVyLm9yZGVyUXVlcnkoKVxyXG4gICAgICAgICAgICBpZiAob3JkZXIuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3JkZXIuZGF0YS5zdGF0ZSA9PSAxIHx8IG9yZGVyLmRhdGEuc3RhdGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGl0bWVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5LiL5Y2V5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYC9wYWdlcy9ob21lcy9vcmRlci9vcmRlcj9vcmRlcklkPSR7b3JkZXIub3JkZXJJZH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMzAwMClcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAgICovXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgICAgbGV0IHtcclxuICAgICAgICAgICAgaXNBZGRcclxuICAgICAgICB9ID0gdGhpcy5kYXRhXHJcbiAgICAgICAgaWYgKCFpc0FkZCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5wbGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQbGF0ZUFsbCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXROb3dUaW1lKClcclxuICAgICAgICB0aGlzLmxvY2tEYXRlKClcclxuICAgICAgICB0aGlzLmN1cnJlbnRPcmRlcigpXHJcbiAgICB9XHJcbn0pIl19