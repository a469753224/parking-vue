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
var server_2 = require("../../../api/api/car/server");
var server = new server_1.default();
var car = new server_2.default();
var config_1 = require("../../../config/config");
var util_1 = require("../../../utils/util");
Page({
    data: {
        order: {
            orderId: '',
            lockerIds: '',
            state: -1
        },
        getTime: '',
        orderId: '',
        show: false,
        section: [],
        stopTime: '',
        sTime: '00:00',
        gTime: '15:00',
        disable: false,
        showCan: false,
        heartListen: 0,
        continuTime: '',
        showTips: false,
        isContinu: false,
        settlement: false,
        connectStatus: -1,
        content: "\u5F53\u524D\u8F66\u4F4D\u5F00\u653E\u65F6\u95F4\u4E3A00:00-00:00,\u8BF7\u9009\u62E9\u5F00\u653E\u65F6\u95F4\u5185\u7EED\u65F6",
    },
    onLoad: function () {
        this.orderQuery();
    },
    connectSocket: function () {
        var _this = this;
        wx.connectSocket({
            url: config_1.APP_BASE_API[config_1.Sock],
            header: {
                'content-type': 'application/json',
                'token': wx.getStorageSync('token')
            },
            success: function (res) {
                console.log('连接成功', res);
                _this.setData({
                    connectStatus: 10086
                });
                clearInterval(_this.data.heartListen);
                _this.data.heartListen = setInterval(function () {
                    if (_this.data.connectStatus == 0) {
                        console.log('监听到没心跳了，抢救一下');
                        clearInterval(_this.data.heartListen);
                        _this.reconnect();
                    }
                    else {
                        console.log('我还活着', res);
                    }
                }, 5000);
            },
            fail: function (err) {
                console.error(err);
            }
        });
        wx.onSocketError(function () {
            console.log('监听到 WebSocket 打开错误，请检查！');
            _this.setData({
                connectStatus: 0
            });
        });
        wx.onSocketClose(function () {
            console.log('监听到 WebSocket 已关闭！');
            _this.setData({
                connectStatus: -1
            });
            clearInterval(_this.data.heartListen);
        });
        wx.onSocketMessage(function (result) {
            var state = JSON.parse(result.data).state;
            console.log("\u63A5\u6536\u5230\u6570\u636E:", JSON.parse(result.data));
            if (state == 2) {
                _this.setData({
                    connectStatus: -1
                });
                wx.showToast({
                    title: '解锁成功！'
                });
                var order = _this.data.order;
                order.state = 2;
                _this.setData({
                    order: order
                });
            }
            if (state == 0) {
                _this.setData({
                    connectStatus: -1
                });
                clearInterval(_this.data.heartListen);
                setTimeout(function () {
                    wx.reLaunch({
                        url: '/pages/home/home',
                    });
                }, 500);
            }
        });
    },
    reconnect: function () {
        console.log('尝试重连');
        wx.closeSocket();
        this.connectSocket();
    },
    onUnload: function () {
        var connectStatus = this.data.connectStatus;
        if (connectStatus == 10086 || connectStatus == -1) {
            wx.closeSocket();
        }
        console.log('监听到页面卸载,关闭socket通讯');
    },
    orderQuery: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, _a, state, orderId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, server.orderQuery()];
                    case 1:
                        result = _b.sent();
                        if (result.code == 0) {
                            this.setData({
                                order: result.data,
                                sTime: result.data.beTime,
                                gTime: result.data.enTime,
                                orderId: result.data.orderId,
                                settlement: result.data.state == 2 ? true : false
                            });
                            _a = result.data, state = _a.state, orderId = _a.orderId;
                            this.parkingDate(result.data.placeId);
                            this.connectSocket();
                            if (state == 3) {
                                wx.navigateTo({
                                    url: "/pages/homes/pay/pay?orderId=" + orderId
                                });
                            }
                            if (state == 7) {
                                wx.showLoading({
                                    title: '订单确认中...'
                                });
                            }
                        }
                        else {
                            wx.showToast({
                                title: '当前订单已结束',
                                icon: 'none',
                                success: function () {
                                    setTimeout(function () {
                                        wx.reLaunch({
                                            url: '/pages/home/home',
                                        });
                                    }, 1000);
                                }
                            });
                        }
                        return [2];
                }
            });
        });
    },
    parkingDate: function (placeId) {
        return __awaiter(this, void 0, void 0, function () {
            var param, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = {
                            placeId: placeId
                        };
                        return [4, car.parkingDate(param)];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            this.setData({
                                'section[0]': result.data.beginDate,
                                'section[1]': result.data.endDate
                            });
                        }
                        return [2];
                }
            });
        });
    },
    cancelOrder: function () {
        this.setData({
            showCan: true
        });
    },
    cancelPaking: function () {
        return __awaiter(this, void 0, void 0, function () {
            var orderId, param, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setData({
                            showCan: false
                        });
                        orderId = this.data.orderId;
                        param = {
                            orderId: orderId,
                        };
                        return [4, server.cancelPaking(param)];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            this.setData({
                                connectStatus: -1
                            });
                            setTimeout(function () {
                                wx.reLaunch({
                                    url: "/pages/homes/cancelOrder/cancelOrder?orderId=" + _this.data.order.orderId,
                                });
                            }, 500);
                        }
                        else {
                            wx.showToast({
                                title: result.msg,
                                icon: 'none'
                            });
                        }
                        return [2];
                }
            });
        });
    },
    cancel: function () {
        this.setData({
            showUnlock: false,
            showCan: false,
        });
    },
    confirmUnLock: function () {
        this.setData({
            showUnlock: true,
        });
    },
    carLock: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, orderId, lockerIds, param, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.setData({
                            show: false
                        });
                        _a = this.data.order, orderId = _a.orderId, lockerIds = _a.lockerIds;
                        param = {
                            orderId: orderId,
                            lockerIds: lockerIds
                        };
                        return [4, server.carLock(param)];
                    case 1:
                        result = _b.sent();
                        if (result.code == 0) {
                            this.setData({
                                disable: true
                            });
                            this.connectSocket();
                            wx.showLoading({
                                title: '解锁中...'
                            });
                        }
                        this.setData({
                            showUnlock: false
                        });
                        return [2];
                }
            });
        });
    },
    voucher: function () {
        wx.navigateTo({
            url: '/pages/homes/safeconduct/safeconduct',
        });
    },
    onChangeGetTime: function (e) {
        var date = new Date();
        var getTimes = util_1.getTime(date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + e.detail.value + ":00").toString();
        var t = util_1.getTime(getTimes);
        var flag = util_1.contrastTime(t, this.data.section);
        var begin = util_1.formatMinute(this.data.section[0]);
        var end = util_1.formatMinute(this.data.section[1]);
        if (!flag) {
            this.setData({
                show: true,
                content: "\u5F53\u524D\u8F66\u4F4D\u5F00\u653E\u65F6\u95F4\u4E3A" + begin + "-" + end + ",\u8BF7\u9009\u62E9\u5F00\u653E\u65F6\u95F4\u5185\u7EED\u65F6"
            });
        }
        else {
            this.setData({
                continuTime: t.toString(),
                isContinu: true,
                getTime: getTimes,
                gTime: e.detail.value
            });
            this.continued();
        }
    },
    continued: function () {
        return __awaiter(this, void 0, void 0, function () {
            var orderId, endTime, param, result, title;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderId = this.data.order.orderId;
                        endTime = this.data.continuTime;
                        param = {
                            orderId: orderId,
                            endTime: endTime
                        };
                        return [4, server.continuationModify(param)];
                    case 1:
                        result = _a.sent();
                        title = result.code == 0 ? '续时成功' : result.msg;
                        if (result.code == 0) {
                            setTimeout(function () {
                                _this.orderQuery();
                            }, 500);
                        }
                        wx.showToast({
                            title: title,
                            icon: 'none'
                        });
                        return [2];
                }
            });
        });
    },
    settlement: function () {
        return __awaiter(this, void 0, void 0, function () {
            var orderId, param, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderId = this.data.orderId;
                        param = {
                            orderId: orderId
                        };
                        return [4, server.orderSettlement(param)];
                    case 1:
                        result = _a.sent();
                        if (result.code == 15) {
                            wx.reLaunch({
                                url: '/pages/homes/successSettlement/successSettlement',
                            });
                        }
                        else if (result.code == 0) {
                            wx.navigateTo({
                                url: "/pages/homes/pay/pay?orderId=" + result.data.orderId,
                            });
                        }
                        else {
                            wx.showToast({
                                title: result.msg,
                                icon: 'none'
                            });
                        }
                        return [2];
                }
            });
        });
    },
    payOrder: function () {
        var orderId = this.data.orderId;
        wx.navigateTo({
            url: "/pages/homes/pay/pay?orderId=" + orderId
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVEQUFxRDtBQUNyRCxzREFBbUQ7QUFHbkQsSUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBVSxFQUFFLENBQUE7QUFDL0IsSUFBTSxHQUFHLEdBQUcsSUFBSSxnQkFBUyxFQUFFLENBQUE7QUFFM0IsaURBRytCO0FBRy9CLDRDQUk0QjtBQUU1QixJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsRUFBRTtZQUNYLFNBQVMsRUFBRSxFQUFFO1lBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNWO1FBQ0QsT0FBTyxFQUFFLEVBQUU7UUFDWCxPQUFPLEVBQUUsRUFBRTtRQUNYLElBQUksRUFBRSxLQUFLO1FBQ1gsT0FBTyxFQUFFLEVBQUU7UUFDWCxRQUFRLEVBQUUsRUFBRTtRQUNaLEtBQUssRUFBRSxPQUFPO1FBQ2QsS0FBSyxFQUFFLE9BQU87UUFDZCxPQUFPLEVBQUUsS0FBSztRQUNkLE9BQU8sRUFBRSxLQUFLO1FBQ2QsV0FBVyxFQUFFLENBQUM7UUFDZCxXQUFXLEVBQUUsRUFBRTtRQUNmLFFBQVEsRUFBRSxLQUFLO1FBQ2YsU0FBUyxFQUFFLEtBQUs7UUFDaEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUNqQixPQUFPLEVBQUUsZ0lBQWlDO0tBQzNDO0lBS0QsTUFBTSxFQUFFO1FBQ04sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ25CLENBQUM7SUFLRCxhQUFhLEVBQWI7UUFBQSxpQkErRUM7UUE5RUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNmLEdBQUcsRUFBRSxxQkFBWSxDQUFDLGFBQUksQ0FBQztZQUN2QixNQUFNLEVBQUU7Z0JBQ04sY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2FBQ3BDO1lBQ0QsT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFFeEIsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxhQUFhLEVBQUUsS0FBSztpQkFDckIsQ0FBQyxDQUFBO2dCQUVGLGFBQWEsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2dCQUNwQyxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7b0JBQ2xDLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxFQUFFO3dCQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO3dCQUMzQixhQUFhLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTt3QkFDcEMsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO3FCQUNqQjt5QkFBTTt3QkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQTtxQkFDekI7Z0JBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ1YsQ0FBQztZQUNELElBQUksRUFBRSxVQUFBLEdBQUc7Z0JBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNwQixDQUFDO1NBQ0YsQ0FBQyxDQUFBO1FBR0YsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQTtZQUN0QyxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGFBQWEsRUFBRSxDQUFDO2FBQ2pCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO1FBR0YsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtZQUNqQyxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGFBQWEsRUFBRSxDQUFDLENBQUM7YUFDbEIsQ0FBQyxDQUFBO1lBQ0YsYUFBYSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDdEMsQ0FBQyxDQUFDLENBQUE7UUFHRixFQUFFLENBQUMsZUFBZSxDQUFDLFVBQUMsTUFBVztZQUUzQixJQUFBLEtBQUssR0FDSCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFEcEIsQ0FDb0I7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7WUFDOUMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO2dCQUNkLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsYUFBYSxFQUFFLENBQUMsQ0FBQztpQkFDbEIsQ0FBQyxDQUFBO2dCQUNGLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFFLE9BQU87aUJBQ2YsQ0FBQyxDQUFBO2dCQUNGLElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFBO2dCQUMzQixLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtnQkFDZixLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLEtBQUssT0FBQTtpQkFDTixDQUFDLENBQUE7YUFDSDtZQUNELElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtnQkFDZCxLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLGFBQWEsRUFBRSxDQUFDLENBQUM7aUJBQ2xCLENBQUMsQ0FBQTtnQkFDRixhQUFhLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDcEMsVUFBVSxDQUFDO29CQUNULEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBQ1YsR0FBRyxFQUFFLGtCQUFrQjtxQkFDeEIsQ0FBQyxDQUFBO2dCQUNKLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTthQUNSO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFFSixDQUFDO0lBS0QsU0FBUztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDbkIsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0lBRUQsUUFBUTtRQUNBLElBQUEsYUFBYSxHQUFLLElBQUksQ0FBQyxJQUFJLGNBQWQsQ0FBYztRQUNqQyxJQUFJLGFBQWEsSUFBSSxLQUFLLElBQUksYUFBYSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ2pELEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtTQUNqQjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBS0ssVUFBVTs7Ozs7NEJBQ0MsV0FBTSxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUE7O3dCQUFsQyxNQUFNLEdBQUcsU0FBeUI7d0JBQ3hDLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7NEJBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0NBQ1gsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJO2dDQUNsQixLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO2dDQUN6QixLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO2dDQUN6QixPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPO2dDQUM1QixVQUFVLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7NkJBQ2xELENBQUMsQ0FBQTs0QkFDRSxLQUdBLE1BQU0sQ0FBQyxJQUFJLEVBRmIsS0FBSyxXQUFBLEVBQ0wsT0FBTyxhQUFBLENBQ007NEJBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBOzRCQUNyQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7NEJBQ3BCLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtnQ0FDZCxFQUFFLENBQUMsVUFBVSxDQUFDO29DQUNaLEdBQUcsRUFBRSxrQ0FBZ0MsT0FBUztpQ0FDL0MsQ0FBQyxDQUFBOzZCQUNIOzRCQUNELElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtnQ0FDZCxFQUFFLENBQUMsV0FBVyxDQUFDO29DQUNiLEtBQUssRUFBRSxVQUFVO2lDQUNsQixDQUFDLENBQUE7NkJBQ0g7eUJBQ0Y7NkJBQU07NEJBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQ0FDWCxLQUFLLEVBQUUsU0FBUztnQ0FDaEIsSUFBSSxFQUFFLE1BQU07Z0NBQ1osT0FBTyxFQUFFO29DQUNQLFVBQVUsQ0FBQzt3Q0FDVCxFQUFFLENBQUMsUUFBUSxDQUFDOzRDQUNWLEdBQUcsRUFBRSxrQkFBa0I7eUNBQ3hCLENBQUMsQ0FBQTtvQ0FDSixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0NBQ1gsQ0FBQzs2QkFDRixDQUFDLENBQUE7eUJBQ0g7Ozs7O0tBQ0Y7SUFNSyxXQUFXLEVBQWpCLFVBQWtCLE9BQWU7Ozs7Ozt3QkFDekIsS0FBSyxHQUFHOzRCQUNaLE9BQU8sU0FBQTt5QkFDUixDQUFBO3dCQUNjLFdBQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQXJDLE1BQU0sR0FBRyxTQUE0Qjt3QkFDM0MsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTs0QkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQ0FDWCxZQUFZLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTO2dDQUNuQyxZQUFZLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPOzZCQUNsQyxDQUFDLENBQUE7eUJBQ0g7Ozs7O0tBQ0Y7SUFLRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtLLFlBQVk7Ozs7Ozs7d0JBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsT0FBTyxFQUFFLEtBQUs7eUJBQ2YsQ0FBQyxDQUFBO3dCQUVBLE9BQU8sR0FDTCxJQUFJLENBQUMsSUFBSSxRQURKLENBQ0k7d0JBQ1AsS0FBSyxHQUFHOzRCQUNaLE9BQU8sU0FBQTt5QkFDUixDQUFBO3dCQUNjLFdBQU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQXpDLE1BQU0sR0FBRyxTQUFnQzt3QkFDL0MsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTs0QkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQ0FDWCxhQUFhLEVBQUUsQ0FBQyxDQUFDOzZCQUNsQixDQUFDLENBQUE7NEJBQ0YsVUFBVSxDQUFDO2dDQUNULEVBQUUsQ0FBQyxRQUFRLENBQUM7b0NBQ1YsR0FBRyxFQUFFLGtEQUFnRCxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFTO2lDQUMvRSxDQUFDLENBQUE7NEJBQ0osQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3lCQUNUOzZCQUFNOzRCQUNMLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0NBQ1gsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHO2dDQUNqQixJQUFJLEVBQUUsTUFBTTs2QkFDYixDQUFDLENBQUE7eUJBQ0g7Ozs7O0tBQ0Y7SUFLRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELGFBQWE7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtLLE9BQU87Ozs7Ozt3QkFDWCxJQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNYLElBQUksRUFBRSxLQUFLO3lCQUNaLENBQUMsQ0FBQTt3QkFDSSxLQUdGLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUZqQixPQUFPLGFBQUEsRUFDUCxTQUFTLGVBQUEsQ0FDUTt3QkFDYixLQUFLLEdBQUc7NEJBQ1osT0FBTyxTQUFBOzRCQUNQLFNBQVMsV0FBQTt5QkFDVixDQUFBO3dCQUNjLFdBQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQXBDLE1BQU0sR0FBRyxTQUEyQjt3QkFDMUMsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTs0QkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQ0FDWCxPQUFPLEVBQUUsSUFBSTs2QkFDZCxDQUFDLENBQUE7NEJBQ0YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBOzRCQUNwQixFQUFFLENBQUMsV0FBVyxDQUFDO2dDQUNiLEtBQUssRUFBRSxRQUFROzZCQUNoQixDQUFDLENBQUE7eUJBQ0g7d0JBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDWCxVQUFVLEVBQUUsS0FBSzt5QkFDbEIsQ0FBQyxDQUFBOzs7OztLQUNIO0lBS0QsT0FBTztRQUNMLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsc0NBQXNDO1NBQzVDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxlQUFlLEVBQWYsVUFBZ0IsQ0FBZ0M7UUFDOUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQTtRQUN2QixJQUFJLFFBQVEsR0FBRyxjQUFPLENBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxVQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUN4SCxJQUFJLENBQUMsR0FBRyxjQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDekIsSUFBTSxJQUFJLEdBQUcsbUJBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMvQyxJQUFJLEtBQUssR0FBRyxtQkFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDOUMsSUFBSSxHQUFHLEdBQUcsbUJBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzVDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSwyREFBWSxLQUFLLFNBQUksR0FBRyxrRUFBYTthQUMvQyxDQUFDLENBQUE7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxXQUFXLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDekIsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7YUFDdEIsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1NBQ2pCO0lBQ0gsQ0FBQztJQUtLLFNBQVM7Ozs7Ozs7d0JBQ1QsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQTt3QkFDakMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFBO3dCQUM3QixLQUFLLEdBQUc7NEJBQ1osT0FBTyxTQUFBOzRCQUNQLE9BQU8sU0FBQTt5QkFDUixDQUFBO3dCQUNjLFdBQU0sTUFBTSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxFQUFBOzt3QkFBL0MsTUFBTSxHQUFHLFNBQXNDO3dCQUNqRCxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQTt3QkFDbEQsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTs0QkFDcEIsVUFBVSxDQUFDO2dDQUNULEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTs0QkFDbkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3lCQUNUO3dCQUNELEVBQUUsQ0FBQyxTQUFTLENBQUM7NEJBQ1gsS0FBSyxPQUFBOzRCQUNMLElBQUksRUFBRSxNQUFNO3lCQUNiLENBQUMsQ0FBQTs7Ozs7S0FDSDtJQUtLLFVBQVU7Ozs7Ozt3QkFFWixPQUFPLEdBQ0wsSUFBSSxDQUFDLElBQUksUUFESixDQUNJO3dCQUNQLEtBQUssR0FBRzs0QkFDWixPQUFPLFNBQUE7eUJBQ1IsQ0FBQTt3QkFDYyxXQUFNLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUE1QyxNQUFNLEdBQUcsU0FBbUM7d0JBQ2xELElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUU7NEJBQ3JCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0NBQ1YsR0FBRyxFQUFFLGtEQUFrRDs2QkFDeEQsQ0FBQyxDQUFBO3lCQUNIOzZCQUFNLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7NEJBQzNCLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0NBQ1osR0FBRyxFQUFFLGtDQUFnQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQVM7NkJBQzNELENBQUMsQ0FBQTt5QkFDSDs2QkFBTTs0QkFDTCxFQUFFLENBQUMsU0FBUyxDQUFDO2dDQUNYLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRztnQ0FDakIsSUFBSSxFQUFFLE1BQU07NkJBQ2IsQ0FBQyxDQUFBO3lCQUNIOzs7OztLQUNGO0lBS0QsUUFBUTtRQUVKLElBQUEsT0FBTyxHQUNMLElBQUksQ0FBQyxJQUFJLFFBREosQ0FDSTtRQUNiLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsa0NBQWdDLE9BQVM7U0FDL0MsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIOWvvOWFpeaooeWdlyAqL1xyXG5pbXBvcnQgSG9tZVNlcnZlciBmcm9tICcuLi8uLi8uLi9hcGkvYXBpL2hvbWUvc2VydmVyJ1xyXG5pbXBvcnQgQ2FyU2VydmVyIGZyb20gJy4uLy4uLy4uL2FwaS9hcGkvY2FyL3NlcnZlcidcclxuXHJcbi8qIOWunuS+i+WMluaooeWdlyAqL1xyXG5jb25zdCBzZXJ2ZXIgPSBuZXcgSG9tZVNlcnZlcigpXHJcbmNvbnN0IGNhciA9IG5ldyBDYXJTZXJ2ZXIoKVxyXG5cclxuaW1wb3J0IHtcclxuICBTb2NrLFxyXG4gIEFQUF9CQVNFX0FQSVxyXG59IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jb25maWcnXHJcblxyXG4vKuWvvOWFpeWwj+W3peWFtyovXHJcbmltcG9ydCB7XHJcbiAgZ2V0VGltZSxcclxuICBjb250cmFzdFRpbWUsXHJcbiAgZm9ybWF0TWludXRlXHJcbn0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCdcclxuXHJcblBhZ2Uoe1xyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICBvcmRlcjoge1xyXG4gICAgICBvcmRlcklkOiAnJyxcclxuICAgICAgbG9ja2VySWRzOiAnJyxcclxuICAgICAgc3RhdGU6IC0xXHJcbiAgICB9LFxyXG4gICAgZ2V0VGltZTogJycsXHJcbiAgICBvcmRlcklkOiAnJyxcclxuICAgIHNob3c6IGZhbHNlLFxyXG4gICAgc2VjdGlvbjogW10sXHJcbiAgICBzdG9wVGltZTogJycsXHJcbiAgICBzVGltZTogJzAwOjAwJyxcclxuICAgIGdUaW1lOiAnMTU6MDAnLFxyXG4gICAgZGlzYWJsZTogZmFsc2UsXHJcbiAgICBzaG93Q2FuOiBmYWxzZSxcclxuICAgIGhlYXJ0TGlzdGVuOiAwLFxyXG4gICAgY29udGludVRpbWU6ICcnLFxyXG4gICAgc2hvd1RpcHM6IGZhbHNlLFxyXG4gICAgaXNDb250aW51OiBmYWxzZSxcclxuICAgIHNldHRsZW1lbnQ6IGZhbHNlLFxyXG4gICAgY29ubmVjdFN0YXR1czogLTEsXHJcbiAgICBjb250ZW50OiBg5b2T5YmN6L2m5L2N5byA5pS+5pe26Ze05Li6MDA6MDAtMDA6MDAs6K+36YCJ5oup5byA5pS+5pe26Ze05YaF57ut5pe2YCxcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5vcmRlclF1ZXJ5KClcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDliJvlu7p3ZWJzb2NraXRcclxuICAgKi9cclxuICBjb25uZWN0U29ja2V0KCkge1xyXG4gICAgd3guY29ubmVjdFNvY2tldCh7XHJcbiAgICAgIHVybDogQVBQX0JBU0VfQVBJW1NvY2tdLFxyXG4gICAgICBoZWFkZXI6IHtcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICd0b2tlbic6IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+i/nuaOpeaIkOWKnycsIHJlcylcclxuICAgICAgICAvLyDorr7nva7ov57mjqXnirbmgIFcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgY29ubmVjdFN0YXR1czogMTAwODZcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIOW/g+i3s1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5kYXRhLmhlYXJ0TGlzdGVuKVxyXG4gICAgICAgIHRoaXMuZGF0YS5oZWFydExpc3RlbiA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmRhdGEuY29ubmVjdFN0YXR1cyA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnm5HlkKzliLDmsqHlv4Pot7PkuobvvIzmiqLmlZHkuIDkuIsnKVxyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuZGF0YS5oZWFydExpc3RlbilcclxuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3QoKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aIkei/mOa0u+edgCcsIHJlcylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCA1MDAwKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8qKuebkeWQrHdlYlNvY2tldOmUmeivryAqL1xyXG4gICAgd3gub25Tb2NrZXRFcnJvcigoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfnm5HlkKzliLAgV2ViU29ja2V0IOaJk+W8gOmUmeivr++8jOivt+ajgOafpe+8gScpXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY29ubmVjdFN0YXR1czogMFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICAvKirnm5HlkKxXZWJTb2NrZXTlhbPpl60gKi9cclxuICAgIHd4Lm9uU29ja2V0Q2xvc2UoKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygn55uR5ZCs5YiwIFdlYlNvY2tldCDlt7LlhbPpl63vvIEnKVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGNvbm5lY3RTdGF0dXM6IC0xXHJcbiAgICAgIH0pXHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5kYXRhLmhlYXJ0TGlzdGVuKVxyXG4gICAgfSlcclxuXHJcbiAgICAvKirmlLbliLB3ZWJzb2NrZXTmtojmga8gKi9cclxuICAgIHd4Lm9uU29ja2V0TWVzc2FnZSgocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgbGV0IHtcclxuICAgICAgICBzdGF0ZVxyXG4gICAgICB9ID0gSlNPTi5wYXJzZShyZXN1bHQuZGF0YSlcclxuICAgICAgY29uc29sZS5sb2coYOaOpeaUtuWIsOaVsOaNrjpgLCBKU09OLnBhcnNlKHJlc3VsdC5kYXRhKSlcclxuICAgICAgaWYgKHN0YXRlID09IDIpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgY29ubmVjdFN0YXR1czogLTFcclxuICAgICAgICB9KVxyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+ino+mUgeaIkOWKn++8gSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBvcmRlciA9IHRoaXMuZGF0YS5vcmRlclxyXG4gICAgICAgIG9yZGVyLnN0YXRlID0gMlxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBvcmRlclxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN0YXRlID09IDApIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgY29ubmVjdFN0YXR1czogLTFcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5kYXRhLmhlYXJ0TGlzdGVuKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvaG9tZS9ob21lJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgNTAwKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDph43ov55cclxuICAgKi9cclxuICByZWNvbm5lY3QoKSB7XHJcbiAgICBjb25zb2xlLmxvZygn5bCd6K+V6YeN6L+eJylcclxuICAgIHd4LmNsb3NlU29ja2V0KCkgLy8g6YeN6L+e5LmL5YmN5omL5Yqo5YWz6Zet5LiA5qyhXHJcbiAgICB0aGlzLmNvbm5lY3RTb2NrZXQoKVxyXG4gIH0sXHJcblxyXG4gIG9uVW5sb2FkKCkge1xyXG4gICAgbGV0IHsgY29ubmVjdFN0YXR1cyB9ID0gdGhpcy5kYXRhXHJcbiAgICBpZiAoY29ubmVjdFN0YXR1cyA9PSAxMDA4NiB8fCBjb25uZWN0U3RhdHVzID09IC0xKSB7XHJcbiAgICAgIHd4LmNsb3NlU29ja2V0KClcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCfnm5HlkKzliLDpobXpnaLljbjovb0s5YWz6Zetc29ja2V06YCa6K6vJylcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmoLnmja50b2tlbuiOt+WPluato+WcqOi/m+ihjOS4reeahOiuouWNlVxyXG4gICAqL1xyXG4gIGFzeW5jIG9yZGVyUXVlcnkoKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZXJ2ZXIub3JkZXJRdWVyeSgpXHJcbiAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIG9yZGVyOiByZXN1bHQuZGF0YSxcclxuICAgICAgICBzVGltZTogcmVzdWx0LmRhdGEuYmVUaW1lLFxyXG4gICAgICAgIGdUaW1lOiByZXN1bHQuZGF0YS5lblRpbWUsXHJcbiAgICAgICAgb3JkZXJJZDogcmVzdWx0LmRhdGEub3JkZXJJZCxcclxuICAgICAgICBzZXR0bGVtZW50OiByZXN1bHQuZGF0YS5zdGF0ZSA9PSAyID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICAgIGxldCB7XHJcbiAgICAgICAgc3RhdGUsXHJcbiAgICAgICAgb3JkZXJJZFxyXG4gICAgICB9ID0gcmVzdWx0LmRhdGFcclxuICAgICAgdGhpcy5wYXJraW5nRGF0ZShyZXN1bHQuZGF0YS5wbGFjZUlkKVxyXG4gICAgICB0aGlzLmNvbm5lY3RTb2NrZXQoKVxyXG4gICAgICBpZiAoc3RhdGUgPT0gMykge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiBgL3BhZ2VzL2hvbWVzL3BheS9wYXk/b3JkZXJJZD0ke29yZGVySWR9YFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN0YXRlID09IDcpIHtcclxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICB0aXRsZTogJ+iuouWNleehruiupOS4rS4uLidcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiAn5b2T5YmN6K6i5Y2V5bey57uT5p2fJyxcclxuICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvaG9tZS9ob21lJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bovabkvY3lvIDmlL7kv6Hmga9cclxuICAgKiBAcGFyYW0ge051bWJlciB8IFN0cmluZ30gcGxhY2VJZCBcclxuICAgKi9cclxuICBhc3luYyBwYXJraW5nRGF0ZShwbGFjZUlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICBwbGFjZUlkXHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYXIucGFya2luZ0RhdGUocGFyYW0pXHJcbiAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICdzZWN0aW9uWzBdJzogcmVzdWx0LmRhdGEuYmVnaW5EYXRlLFxyXG4gICAgICAgICdzZWN0aW9uWzFdJzogcmVzdWx0LmRhdGEuZW5kRGF0ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOWFs+mXreiuouWNlVxyXG4gICAqL1xyXG4gIGNhbmNlbE9yZGVyKCkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgc2hvd0NhbjogdHJ1ZVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDlj5bmtojpooTnlZlcclxuICAgKi9cclxuICBhc3luYyBjYW5jZWxQYWtpbmcoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBzaG93Q2FuOiBmYWxzZVxyXG4gICAgfSlcclxuICAgIGxldCB7XHJcbiAgICAgIG9yZGVySWRcclxuICAgIH0gPSB0aGlzLmRhdGFcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICBvcmRlcklkLFxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyLmNhbmNlbFBha2luZyhwYXJhbSlcclxuICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY29ubmVjdFN0YXR1czogLTFcclxuICAgICAgfSlcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgICAgdXJsOiBgL3BhZ2VzL2hvbWVzL2NhbmNlbE9yZGVyL2NhbmNlbE9yZGVyP29yZGVySWQ9JHt0aGlzLmRhdGEub3JkZXIub3JkZXJJZH1gLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiByZXN1bHQubXNnLFxyXG4gICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOWPlua2iOaTjeS9nFxyXG4gICAqL1xyXG4gIGNhbmNlbCgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHNob3dVbmxvY2s6IGZhbHNlLFxyXG4gICAgICBzaG93Q2FuOiBmYWxzZSxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog5Y+W5raI6Kej6ZSBXHJcbiAgICovXHJcbiAgY29uZmlybVVuTG9jaygpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHNob3dVbmxvY2s6IHRydWUsXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOino+mUgeWBnOi9plxyXG4gICAqL1xyXG4gIGFzeW5jIGNhckxvY2soKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBzaG93OiBmYWxzZVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHtcclxuICAgICAgb3JkZXJJZCxcclxuICAgICAgbG9ja2VySWRzXHJcbiAgICB9ID0gdGhpcy5kYXRhLm9yZGVyXHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgb3JkZXJJZCxcclxuICAgICAgbG9ja2VySWRzXHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZXJ2ZXIuY2FyTG9jayhwYXJhbSlcclxuICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZGlzYWJsZTogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmNvbm5lY3RTb2NrZXQoKVxyXG4gICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfop6PplIHkuK0uLi4nXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBzaG93VW5sb2NrOiBmYWxzZVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDot7PovazpgJrooYzor4HpobXpnaJcclxuICAgKi9cclxuICB2b3VjaGVyKCkge1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJy9wYWdlcy9ob21lcy9zYWZlY29uZHVjdC9zYWZlY29uZHVjdCcsXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmAieaLqee7reaXtuaXtumXtFxyXG4gICAqL1xyXG4gIG9uQ2hhbmdlR2V0VGltZShlOiB7IGRldGFpbDogeyB2YWx1ZTogc3RyaW5nIH0gfSkge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIGxldCBnZXRUaW1lcyA9IGdldFRpbWUoYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS8ke2RhdGUuZ2V0TW9udGgoKSArIDF9LyR7ZGF0ZS5nZXREYXRlKCl9ICR7ZS5kZXRhaWwudmFsdWV9OjAwYCkudG9TdHJpbmcoKVxyXG4gICAgbGV0IHQgPSBnZXRUaW1lKGdldFRpbWVzKVxyXG4gICAgY29uc3QgZmxhZyA9IGNvbnRyYXN0VGltZSh0LCB0aGlzLmRhdGEuc2VjdGlvbilcclxuICAgIGxldCBiZWdpbiA9IGZvcm1hdE1pbnV0ZSh0aGlzLmRhdGEuc2VjdGlvblswXSlcclxuICAgIGxldCBlbmQgPSBmb3JtYXRNaW51dGUodGhpcy5kYXRhLnNlY3Rpb25bMV0pXHJcbiAgICBpZiAoIWZsYWcpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgIGNvbnRlbnQ6IGDlvZPliY3ovabkvY3lvIDmlL7ml7bpl7TkuLoke2JlZ2lufS0ke2VuZH0s6K+36YCJ5oup5byA5pS+5pe26Ze05YaF57ut5pe2YFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjb250aW51VGltZTogdC50b1N0cmluZygpLFxyXG4gICAgICAgIGlzQ29udGludTogdHJ1ZSxcclxuICAgICAgICBnZXRUaW1lOiBnZXRUaW1lcyxcclxuICAgICAgICBnVGltZTogZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5jb250aW51ZWQoKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOe7reaXtlxyXG4gICAqL1xyXG4gIGFzeW5jIGNvbnRpbnVlZCgpIHtcclxuICAgIGxldCBvcmRlcklkID0gdGhpcy5kYXRhLm9yZGVyLm9yZGVySWRcclxuICAgIGxldCBlbmRUaW1lID0gdGhpcy5kYXRhLmNvbnRpbnVUaW1lXHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgb3JkZXJJZCxcclxuICAgICAgZW5kVGltZVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyLmNvbnRpbnVhdGlvbk1vZGlmeShwYXJhbSlcclxuICAgIGxldCB0aXRsZSA9IHJlc3VsdC5jb2RlID09IDAgPyAn57ut5pe25oiQ5YqfJyA6IHJlc3VsdC5tc2dcclxuICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub3JkZXJRdWVyeSgpXHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcbiAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOiuouWNlee7k+eul1xyXG4gICAqL1xyXG4gIGFzeW5jIHNldHRsZW1lbnQoKSB7XHJcbiAgICBsZXQge1xyXG4gICAgICBvcmRlcklkXHJcbiAgICB9ID0gdGhpcy5kYXRhXHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgb3JkZXJJZFxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyLm9yZGVyU2V0dGxlbWVudChwYXJhbSlcclxuICAgIGlmIChyZXN1bHQuY29kZSA9PSAxNSkge1xyXG4gICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2hvbWVzL3N1Y2Nlc3NTZXR0bGVtZW50L3N1Y2Nlc3NTZXR0bGVtZW50JyxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IGAvcGFnZXMvaG9tZXMvcGF5L3BheT9vcmRlcklkPSR7cmVzdWx0LmRhdGEub3JkZXJJZH1gLFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogcmVzdWx0Lm1zZyxcclxuICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDliY3lvoDmlK/ku5hcclxuICAgKi9cclxuICBwYXlPcmRlcigpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIG9yZGVySWRcclxuICAgIH0gPSB0aGlzLmRhdGFcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6IGAvcGFnZXMvaG9tZXMvcGF5L3BheT9vcmRlcklkPSR7b3JkZXJJZH1gXHJcbiAgICB9KVxyXG4gIH1cclxufSkiXX0=