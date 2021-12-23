"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var model_1 = require("./model");
var util_1 = require("../../../utils/util");
var status_1 = require("../../../utils/status");
var HomeServer = (function (_super) {
    __extends(HomeServer, _super);
    function HomeServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeServer.prototype.scanOrder = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.scanOrderModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    HomeServer.prototype.userQueryOrder = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result, _i, _a, item;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, this.userQueryOrderModel(data)];
                    case 1:
                        result = _b.sent();
                        if (result) {
                            if (result.code == 0) {
                                for (_i = 0, _a = result.data; _i < _a.length; _i++) {
                                    item = _a[_i];
                                    item.status = status_1.status(item.state);
                                    item.beginDate = util_1.formatMinute(item.beginTime);
                                    item.endDate = util_1.formatMinute(item.endTime);
                                }
                            }
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    HomeServer.prototype.orederIdQuery = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.orederIdQueryModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            if (result.code == 0) {
                                result.data.status = status_1.orderStatus(result.data.state);
                                result.data.enTime = util_1.formatMinute(result.data.endTime);
                                result.data.beTime = util_1.formatMinute(result.data.beginTime);
                                result.data.times = util_1.computedMinute(parseInt(result.data.total));
                            }
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    HomeServer.prototype.cancelPaking = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.cancelPakingModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    HomeServer.prototype.carLock = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.carLockModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    HomeServer.prototype.createOrder = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.createOrderModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    HomeServer.prototype.orderQuery = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.orderQueryModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            if (result.code == 0) {
                                switch (result.state) {
                                    case 0:
                                        result.status = '完成';
                                        break;
                                    case 1:
                                        result.status = '预留';
                                        break;
                                    case 2:
                                        result.status = '使用';
                                        break;
                                    case 3:
                                        result.status = '待支付';
                                        break;
                                    case 4:
                                        result.status = '取消';
                                        break;
                                    case 5:
                                        result.status = '超时';
                                        break;
                                }
                                result.data.total = util_1.computedMinute(result.data.total);
                                result.data.lockerId = "****" + result.data.lockerIds.substr(-4);
                                result.data.enTime = util_1.formatMinute(result.data.endTime);
                                result.data.beTime = util_1.formatMinute(result.data.beginTime);
                                result.data.times = util_1.computedMinute(parseInt(result.data.total));
                                result.data.currentExpenses = util_1.formatMoney(result.data.currentExpenses);
                            }
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    HomeServer.prototype.orderSettlement = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.orderSettlementModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    HomeServer.prototype.continuationModify = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.continuationModifyModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    HomeServer.prototype.orderBill = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result, lockerIds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.orderBillModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            if (result.code == 0) {
                                if (result.data != null) {
                                    result.data.times = result.data.orderWhen ? util_1.computedMinute(parseInt(result.data.orderWhen)) : 0;
                                    result.data.timeouts = util_1.computedMinute(parseInt(result.data.timeout));
                                    result.data.discount = util_1.formatMoney(result.data.discount, '');
                                    result.data.timeoutCost = util_1.formatMoney(result.data.timeoutCost, '');
                                    result.data.pay = util_1.formatMoney(result.data.pay, '');
                                    result.data.creatTime = util_1.formatDate(result.data.addDate);
                                    result.data.benginResver = util_1.formatDate(result.data.addDate);
                                    result.data.payTime = util_1.formatDate(result.data.settlementDate);
                                    lockerIds = result.data.lockerIds;
                                    result.data.lockerId = "****" + lockerIds.substr(-4);
                                }
                            }
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    HomeServer.prototype.orderDelete = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.orderDeleteModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    HomeServer.prototype.wxPayOrder = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.wxPayOrderModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    HomeServer.prototype.lockDate = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.lockDateModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            if (result.code == 0) {
                                result.data.endTime = util_1.formatMinute(result.data.endDate);
                                result.data.beginTime = util_1.formatMinute(result.data.beginDate);
                            }
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    HomeServer.prototype.WXOrderToFreeze = function (data) {
        var _this = this;
        var code = [0, 20];
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.WXOrderToFreezeModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            if (code.indexOf(parseInt(result.code)) != -1) {
                                result.data.orderStr = JSON.parse(result.data.orderStr);
                            }
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    HomeServer.prototype.wxToFreeze = function (data) {
        var _this = this;
        var code = [0, 20];
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.wxToFreezeModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            if (code.indexOf(parseInt(result.code)) != -1) {
                                result.data.orderStr = JSON.parse(result.data.orderStr);
                            }
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    HomeServer.prototype.creditPayToOrder = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.creditPayToOrderModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    HomeServer.prototype.checkPermissions = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.checkPermissionsModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    HomeServer.prototype.cancelCreditPayOrde = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.cancelCreditPayOrderModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    HomeServer.prototype.getWechatOrderDetail = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getWechatOrderDetailModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    return HomeServer;
}(model_1.default));
exports.default = HomeServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUNBQStCO0FBRy9CLDRDQUEyRjtBQUczRixnREFBMkQ7QUFvQzNEO0lBQXdDLDhCQUFTO0lBQWpEOztJQXFUQSxDQUFDO0lBL1NDLDhCQUFTLEdBQVQsVUFBVSxJQUFlO1FBQXpCLGlCQU9DO1FBTkMsT0FBTyxJQUFJLE9BQU8sQ0FBc0MsVUFBTSxPQUFPOzs7OzRCQUNwRCxXQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUF4QyxNQUFNLEdBQUcsU0FBK0I7d0JBQzlDLElBQUksTUFBTSxFQUFFOzRCQUNWLE9BQU8sY0FBTSxNQUFNLEVBQUcsQ0FBQTt5QkFDdkI7Ozs7YUFDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBTUQsbUNBQWMsR0FBZCxVQUFlLElBQVU7UUFBekIsaUJBY0M7UUFiQyxPQUFPLElBQUksT0FBTyxDQUEyQyxVQUFNLE9BQU87Ozs7NEJBQzNELFdBQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBN0MsTUFBTSxHQUFHLFNBQW9DO3dCQUNqRCxJQUFJLE1BQU0sRUFBRTs0QkFDVixJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO2dDQUNwQixXQUE0QixFQUFYLEtBQUEsTUFBTSxDQUFDLElBQUksRUFBWCxjQUFXLEVBQVgsSUFBVyxFQUFFO29DQUFyQixJQUFJO29DQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQ0FDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxtQkFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtvQ0FDN0MsSUFBSSxDQUFDLE9B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NEJBQ1YsT0FBTyxjQUFNLE1BQU0sRUFBRyxDQUFBO3lCQUN2Qjs7OzthQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFSCxpQkFBQztBQUFELENBQUMsQUFyVEQsQ0FBd0MsZUFBUyxHQXFUaEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDlr7zlhaXmqKHlnovlsYIgKi9cclxuaW1wb3J0IEhvbWVNb2RlbCBmcm9tICcuL21vZGVsJ1xyXG5cclxuLyog5bel5YW357G75a+85YWlICovXHJcbmltcG9ydCB7IGNvbXB1dGVkTWludXRlLCBmb3JtYXRNb25leSwgZm9ybWF0RGF0ZSwgZm9ybWF0TWludXRlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCdcclxuXHJcbi8qIOWvvOWFpeeKtuaAgeexuyAqL1xyXG5pbXBvcnQgeyBzdGF0dXMsIG9yZGVyU3RhdHVzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvc3RhdHVzJ1xyXG5cclxuLyog5a+85YWl572R57uc6K+35rGC5o6l5Y+jIFRT5o6l5Y+j57G75Z6LICovXHJcbmltcG9ydCB7IFJlcXVlc3RQcm9taXNlLCBSZXNwb25zZURhdGEgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9odHRwJ1xyXG5cclxuLyog5a+85YWl6K+35rGC5Y+C5pWw5o6l5Y+jIFRT5o6l5Y+j57G75Z6LICovXHJcbmltcG9ydCB7XHJcbiAgQ2FyTG9jayxcclxuICBMb2NrRGF0ZSxcclxuICBTY2FuT3JkZXIsXHJcbiAgT3JkZXJCaWxsLFxyXG4gIFdYVG9GcmVlemUsXHJcbiAgQ3JlYXRlT3JkZXIsXHJcbiAgT3JkZXJEZWxldGUsXHJcbiAgQ2FuY2VsUGFraW5nLFxyXG4gIE9yZWRlcklkUXVlcnksXHJcbiAgT3JkZXJTZXR0bGVtZW50LFxyXG4gIFdYT3JkZXJUb0ZyZWV6ZSxcclxuICBDb250aW51YXRpb25Nb2RpZnksXHJcbiAgR2V0V2VjaGF0T3JkZXJEZXRhaWxcclxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvcmVxdWVzdEludGVyZmFjZS9ob21lJ1xyXG5pbXBvcnQge1xyXG4gIE9yZGVyQmlsbFJlc3BvbnNlRGF0YSxcclxuICBPcmRlclF1ZXJ5UmVzcG9uc2VEYXRhLFxyXG4gIFNjYW5PcmRlclJlc3BvbnNlRGF0YSxcclxuICBDcmVhdGVPcmRlclJlc3BvbnNlRGF0YSxcclxuICBPcmVkZXJJZFF1ZXJ5UmVzcG9uc2VEYXRhLFxyXG4gIE9yZGVyU2V0dGxlbWVudFJlc3BvbnNlRGF0YSxcclxuICBVc2VyUXVlcnlPcmRlclJlc3BvbnNlRGF0YSxcclxuICBXWE9yZGVyVG9GcmVlemVSZXNwb25zZURhdGFcclxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvcmVzcG9uc2VJbnRlcmZhY2UvaG9tZSdcclxuaW1wb3J0IHsgTG9ja0RhdGVSZXNwb25zZURhdGEgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvcmVzcG9uc2VJbnRlcmZhY2UvY2FyJ1xyXG5cclxuLyoqXHJcbiAqIOiuouWNleaooeWdly3mnI3liqHlsYJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVTZXJ2ZXIgZXh0ZW5kcyBIb21lTW9kZWwge1xyXG5cclxuICAvKipcclxuICAgKiDpooTnlZnovabkvY1cclxuICAgKiBAcGFyYW0ge1NjYW5PcmRlcn0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgc2Nhbk9yZGVyKGRhdGE6IFNjYW5PcmRlcik6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZXNwb25zZURhdGE8U2Nhbk9yZGVyUmVzcG9uc2VEYXRhPj4oYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2Nhbk9yZGVyTW9kZWwoZGF0YSlcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJlc29sdmUoeyAuLi5yZXN1bHQgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOafpeivouWOhuWPsuiuouWNlVxyXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICB1c2VyUXVlcnlPcmRlcihkYXRhPzogYW55KTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlc3BvbnNlRGF0YTxVc2VyUXVlcnlPcmRlclJlc3BvbnNlRGF0YT4+KGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy51c2VyUXVlcnlPcmRlck1vZGVsKGRhdGEpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiByZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICBpdGVtLnN0YXR1cyA9IHN0YXR1cyhpdGVtLnN0YXRlKVxyXG4gICAgICAgICAgICBpdGVtLmJlZ2luRGF0ZSA9IGZvcm1hdE1pbnV0ZShpdGVtLmJlZ2luVGltZSlcclxuICAgICAgICAgICAgaXRlbS5lbmREYXRlID0gZm9ybWF0TWludXRlKGl0ZW0uZW5kVGltZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5qC55o2u6K6i5Y2VaWTmn6Xor6LorqLljZXkv6Hmga9cclxuICAgKiBAcGFyYW0ge09yZWRlcklkUXVlcnl9IGRhdGEg6K+35rGC5Y+C5pWwXHJcbiAgICovXHJcbiAgb3JlZGVySWRRdWVyeShkYXRhOiBPcmVkZXJJZFF1ZXJ5KTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlc3BvbnNlRGF0YTxPcmVkZXJJZFF1ZXJ5UmVzcG9uc2VEYXRhPj4oYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMub3JlZGVySWRRdWVyeU1vZGVsKGRhdGEpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgcmVzdWx0LmRhdGEuc3RhdHVzID0gb3JkZXJTdGF0dXMocmVzdWx0LmRhdGEuc3RhdGUpXHJcbiAgICAgICAgICByZXN1bHQuZGF0YS5lblRpbWUgPSBmb3JtYXRNaW51dGUocmVzdWx0LmRhdGEuZW5kVGltZSlcclxuICAgICAgICAgIHJlc3VsdC5kYXRhLmJlVGltZSA9IGZvcm1hdE1pbnV0ZShyZXN1bHQuZGF0YS5iZWdpblRpbWUpXHJcbiAgICAgICAgICByZXN1bHQuZGF0YS50aW1lcyA9IGNvbXB1dGVkTWludXRlKHBhcnNlSW50KHJlc3VsdC5kYXRhLnRvdGFsKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Y+W5raI6aKE6K6i6L2m5L2NXHJcbiAgICogQHBhcmFtIHtDYW5jZWxQYWtpbmd9IGRhdGEg6K+35rGC5Y+C5pWwXHJcbiAgICovXHJcbiAgY2FuY2VsUGFraW5nKGRhdGE6IENhbmNlbFBha2luZyk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jYW5jZWxQYWtpbmdNb2RlbChkYXRhKVxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6Kej6ZSBXHJcbiAgICogQHBhcmFtIHtDYXJMb2NrfSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICBjYXJMb2NrKGRhdGE6IENhckxvY2spOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuY2FyTG9ja01vZGVsKGRhdGEpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICByZXNvbHZlKHsgLi4ucmVzdWx0IH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDpooTnlZnmjqXlj6NcclxuICAgKiBAcGFyYW0ge0NyZWF0ZU9yZGVyfSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICBjcmVhdGVPcmRlcihkYXRhOiBDcmVhdGVPcmRlcik6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZXNwb25zZURhdGE8Q3JlYXRlT3JkZXJSZXNwb25zZURhdGE+Pihhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jcmVhdGVPcmRlck1vZGVsKGRhdGEpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICByZXNvbHZlKHsgLi4ucmVzdWx0IH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB0b2tlbuiOt+WPluiuouWNleaOpeWPo1xyXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICBvcmRlclF1ZXJ5KGRhdGE/OiBhbnkpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVzcG9uc2VEYXRhPE9yZGVyUXVlcnlSZXNwb25zZURhdGE+Pihhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMub3JkZXJRdWVyeU1vZGVsKGRhdGEpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgc3dpdGNoIChyZXN1bHQuc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMgPSAn5a6M5oiQJ1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cyA9ICfpooTnlZknXHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzID0gJ+S9v+eUqCdcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMgPSAn5b6F5pSv5LuYJ1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cyA9ICflj5bmtognXHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICByZXN1bHQuc3RhdHVzID0gJ+i2heaXtidcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlc3VsdC5kYXRhLnRvdGFsID0gY29tcHV0ZWRNaW51dGUocmVzdWx0LmRhdGEudG90YWwpXHJcbiAgICAgICAgICByZXN1bHQuZGF0YS5sb2NrZXJJZCA9IGAqKioqJHtyZXN1bHQuZGF0YS5sb2NrZXJJZHMuc3Vic3RyKC00KX1gXHJcbiAgICAgICAgICByZXN1bHQuZGF0YS5lblRpbWUgPSBmb3JtYXRNaW51dGUocmVzdWx0LmRhdGEuZW5kVGltZSlcclxuICAgICAgICAgIHJlc3VsdC5kYXRhLmJlVGltZSA9IGZvcm1hdE1pbnV0ZShyZXN1bHQuZGF0YS5iZWdpblRpbWUpXHJcbiAgICAgICAgICByZXN1bHQuZGF0YS50aW1lcyA9IGNvbXB1dGVkTWludXRlKHBhcnNlSW50KHJlc3VsdC5kYXRhLnRvdGFsKSlcclxuICAgICAgICAgIHJlc3VsdC5kYXRhLmN1cnJlbnRFeHBlbnNlcyA9IGZvcm1hdE1vbmV5KHJlc3VsdC5kYXRhLmN1cnJlbnRFeHBlbnNlcylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG5cclxuICAvKipcclxuICAgKiDnq4vljbPnu5PnrpfmjqXlj6NcclxuICAgKiBAcGFyYW0ge09yZGVyU2V0dGxlbWVudH0gZGF0YSDor7fmsYLlj4LmlbBcclxuICAgKi9cclxuICBvcmRlclNldHRsZW1lbnQoZGF0YTogT3JkZXJTZXR0bGVtZW50KTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlc3BvbnNlRGF0YTxPcmRlclNldHRsZW1lbnRSZXNwb25zZURhdGE+Pihhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5vcmRlclNldHRsZW1lbnRNb2RlbChkYXRhKVxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog57ut5pe25o6l5Y+jXHJcbiAgICogQHBhcmFtIHtDb250aW51YXRpb25Nb2RpZnl9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIGNvbnRpbnVhdGlvbk1vZGlmeShkYXRhOiBDb250aW51YXRpb25Nb2RpZnkpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuY29udGludWF0aW9uTW9kaWZ5TW9kZWwoZGF0YSlcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJlc29sdmUoeyAuLi5yZXN1bHQgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOagueaNruiuouWNlWlk5p+l6K+i6LSm5Y2V5o6l5Y+jXHJcbiAgICogQHBhcmFtIHtPcmRlckJpbGx9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIG9yZGVyQmlsbChkYXRhOiBPcmRlckJpbGwpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVzcG9uc2VEYXRhPE9yZGVyQmlsbFJlc3BvbnNlRGF0YT4+KGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5vcmRlckJpbGxNb2RlbChkYXRhKVxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDApIHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLnRpbWVzID0gcmVzdWx0LmRhdGEub3JkZXJXaGVuID8gY29tcHV0ZWRNaW51dGUocGFyc2VJbnQocmVzdWx0LmRhdGEub3JkZXJXaGVuKSkgOiAwXHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLnRpbWVvdXRzID0gY29tcHV0ZWRNaW51dGUocGFyc2VJbnQocmVzdWx0LmRhdGEudGltZW91dCkpXHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmRpc2NvdW50ID0gZm9ybWF0TW9uZXkocmVzdWx0LmRhdGEuZGlzY291bnQsICcnKVxyXG4gICAgICAgICAgICByZXN1bHQuZGF0YS50aW1lb3V0Q29zdCA9IGZvcm1hdE1vbmV5KHJlc3VsdC5kYXRhLnRpbWVvdXRDb3N0LCAnJylcclxuICAgICAgICAgICAgcmVzdWx0LmRhdGEucGF5ID0gZm9ybWF0TW9uZXkocmVzdWx0LmRhdGEucGF5LCAnJylcclxuICAgICAgICAgICAgcmVzdWx0LmRhdGEuY3JlYXRUaW1lID0gZm9ybWF0RGF0ZShyZXN1bHQuZGF0YS5hZGREYXRlKVxyXG4gICAgICAgICAgICByZXN1bHQuZGF0YS5iZW5naW5SZXN2ZXIgPSBmb3JtYXREYXRlKHJlc3VsdC5kYXRhLmFkZERhdGUpXHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLnBheVRpbWUgPSBmb3JtYXREYXRlKHJlc3VsdC5kYXRhLnNldHRsZW1lbnREYXRlKVxyXG4gICAgICAgICAgICBsZXQgeyBsb2NrZXJJZHMgfSA9IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmxvY2tlcklkID0gYCoqKioke2xvY2tlcklkcy5zdWJzdHIoLTQpfWBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Yig6Zmk5Y6G5Y+y6K6i5Y2VXHJcbiAgICogQHBhcmFtIHtPcmRlckRlbGV0ZX0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgb3JkZXJEZWxldGUoZGF0YTogT3JkZXJEZWxldGUpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMub3JkZXJEZWxldGVNb2RlbChkYXRhKVxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5b6u5L+h5pSv5LuY5o6l5Y+jXHJcbiAgICogQHBhcmFtIHthbnl9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIHd4UGF5T3JkZXIoZGF0YTogYW55KTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnd4UGF5T3JkZXJNb2RlbChkYXRhKVxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6L2m5L2N5byA5pS+5pe26Ze0XHJcbiAgICogQHBhcmFtIHtMb2NrRGF0ZX0gZGF0YSDor7fmsYLlj4LmlbBcclxuICAgKi9cclxuICBsb2NrRGF0ZShkYXRhOiBMb2NrRGF0ZSk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZXNwb25zZURhdGE8TG9ja0RhdGVSZXNwb25zZURhdGE+Pihhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMubG9ja0RhdGVNb2RlbChkYXRhKVxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDApIHtcclxuICAgICAgICAgIHJlc3VsdC5kYXRhLmVuZFRpbWUgPSBmb3JtYXRNaW51dGUocmVzdWx0LmRhdGEuZW5kRGF0ZSlcclxuICAgICAgICAgIHJlc3VsdC5kYXRhLmJlZ2luVGltZSA9IGZvcm1hdE1pbnV0ZShyZXN1bHQuZGF0YS5iZWdpbkRhdGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmUoeyAuLi5yZXN1bHQgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOmihOaUr+S7mOaJq+eggeS4i+WNleaOpeWPo1xyXG4gICAqIEBwYXJhbSB7V1hPcmRlclRvRnJlZXplfSBkYXRhIFxyXG4gICAqL1xyXG4gIFdYT3JkZXJUb0ZyZWV6ZShkYXRhOiBXWE9yZGVyVG9GcmVlemUpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICBjb25zdCBjb2RlOiBudW1iZXJbXSA9IFswLCAyMF1cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZXNwb25zZURhdGE8V1hPcmRlclRvRnJlZXplUmVzcG9uc2VEYXRhPj4oYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLldYT3JkZXJUb0ZyZWV6ZU1vZGVsKGRhdGEpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBpZiAoY29kZS5pbmRleE9mKHBhcnNlSW50KHJlc3VsdC5jb2RlKSkgIT0gLTEpIHtcclxuICAgICAgICAgIHJlc3VsdC5kYXRhLm9yZGVyU3RyID0gSlNPTi5wYXJzZShyZXN1bHQuZGF0YS5vcmRlclN0cilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgd3hUb0ZyZWV6ZShkYXRhOiBXWFRvRnJlZXplKSB7XHJcbiAgICBjb25zdCBjb2RlOiBudW1iZXJbXSA9IFswLCAyMF1cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZXNwb25zZURhdGE8V1hPcmRlclRvRnJlZXplUmVzcG9uc2VEYXRhPj4oYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMud3hUb0ZyZWV6ZU1vZGVsKGRhdGEpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBpZiAoY29kZS5pbmRleE9mKHBhcnNlSW50KHJlc3VsdC5jb2RlKSkgIT0gLTEpIHtcclxuICAgICAgICAgIHJlc3VsdC5kYXRhLm9yZGVyU3RyID0gSlNPTi5wYXJzZShyZXN1bHQuZGF0YS5vcmRlclN0cilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY3JlZGl0UGF5VG9PcmRlcihkYXRhOiBXWE9yZGVyVG9GcmVlemUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZXNwb25zZURhdGE8V1hPcmRlclRvRnJlZXplUmVzcG9uc2VEYXRhPj4oYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jcmVkaXRQYXlUb09yZGVyTW9kZWwoZGF0YSlcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJlc29sdmUoeyAuLi5yZXN1bHQgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOafpeivouaUr+S7mOWIhuaOiOadg+eKtuaAgVxyXG4gICAqIEBwYXJhbSBkYXRhIFxyXG4gICAqL1xyXG4gIGNoZWNrUGVybWlzc2lvbnMoZGF0YT86IGFueSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlc3BvbnNlRGF0YTxhbnk+Pihhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmNoZWNrUGVybWlzc2lvbnNNb2RlbChkYXRhKVxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Y+W5raI5pSv5LuY5YiG6K6i5Y2VXHJcbiAgICogQHBhcmFtIGRhdGEgXHJcbiAgICovXHJcbiAgY2FuY2VsQ3JlZGl0UGF5T3JkZShkYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZXNwb25zZURhdGE8YW55Pj4oYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jYW5jZWxDcmVkaXRQYXlPcmRlck1vZGVsKGRhdGEpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICByZXNvbHZlKHsgLi4ucmVzdWx0IH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bmlK/ku5jliIborqLljZXlj4LmlbBcclxuICAgKi9cclxuICBnZXRXZWNoYXRPcmRlckRldGFpbChkYXRhOiBHZXRXZWNoYXRPcmRlckRldGFpbCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlc3BvbnNlRGF0YT4oYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5nZXRXZWNoYXRPcmRlckRldGFpbE1vZGVsKGRhdGEpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICByZXNvbHZlKHsgLi4ucmVzdWx0IH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxufSJdfQ==