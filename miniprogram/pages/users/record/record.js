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
        page: 1,
        bill: {},
        order: [],
        show: false,
        shows: false,
        underway: {},
        currentId: '',
        loadEnd: true,
        underwayFlag: false,
    },
    onLoad: function (_options) {
        this.orderQuery();
        this.userQueryOrder();
    },
    orderQuery: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, underway, underwayFlag;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, server.orderQuery()];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            underway = result.data;
                            underwayFlag = !util_1.isEmpty(underway) ? true : false;
                            this.setData({
                                underway: underway,
                                underwayFlag: underwayFlag
                            });
                        }
                        return [2];
                }
            });
        });
    },
    userQueryOrder: function () {
        return __awaiter(this, void 0, void 0, function () {
            var page, result, order, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        page = this.data.page;
                        return [4, server.userQueryOrder({ page: page })];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            order = this.data.order;
                            data = result.data;
                            if (!util_1.isEmpty(data)) {
                                order = order.concat(data);
                            }
                            else {
                                this.setData({
                                    loadEnd: false
                                });
                            }
                            this.setData({
                                order: order
                            });
                        }
                        return [2];
                }
            });
        });
    },
    toOrder: function (e) {
        var row = util_1.getSetDataCurrent(e, 'row');
        var orderId = row.orderId, isCredit = row.isCredit;
        if (isCredit) {
            this.authorOrder(orderId);
        }
        else {
            wx.navigateTo({
                url: "/pages/homes/order/order?orderId=" + orderId,
            });
        }
    },
    orderDetail: function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var row, orders, orderId, isCredit, isHas, bill_1;
            return __generator(this, function (_a) {
                row = util_1.getSetDataCurrent(e, 'row');
                orders = wx.getStorageSync('orders');
                orderId = row.orderId, isCredit = row.isCredit;
                if (isCredit) {
                    this.authorOrder(orderId);
                }
                else {
                    if (!orders) {
                        this._bill(orderId);
                    }
                    else {
                        isHas = orders.some(function (element) {
                            return element.orderId === row.orderId;
                        });
                        if (isHas) {
                            bill_1 = {};
                            orders.forEach(function (element) {
                                if (element.orderId === row.orderId) {
                                    bill_1 = element;
                                }
                            });
                            this.setData({ bill: bill_1 });
                            if (!util_1.isEmpty(bill_1)) {
                                wx.navigateTo({
                                    url: "/pages/users/orderDetail/orderDetail?bill=" + JSON.stringify(bill_1),
                                });
                            }
                        }
                        else {
                            this._bill(orderId);
                        }
                    }
                }
                return [2];
            });
        });
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
    _bill: function (orderId) {
        return __awaiter(this, void 0, void 0, function () {
            var param, result, bill, orders;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = {
                            orderId: orderId
                        };
                        return [4, server.orderBill(param)];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            if (result.data != null) {
                                bill = result.data;
                                orders = wx.getStorageSync('orders');
                                if (!orders) {
                                    wx.setStorageSync('orders', []);
                                    orders = [];
                                }
                                orders.push(bill);
                                this.setData({ bill: bill });
                                wx.setStorageSync('orders', orders);
                                if (!util_1.isEmpty(bill)) {
                                    wx.navigateTo({
                                        url: "/pages/users/orderDetail/orderDetail?bill=" + JSON.stringify(bill),
                                    });
                                }
                            }
                        }
                        return [2];
                }
            });
        });
    },
    pay: function (e) {
        var row = util_1.getSetDataCurrent(e, 'row');
        if (row.state == 3) {
            var orderId = row.orderId;
            wx.navigateTo({
                url: "/pages/homes/pay/pay?orderId=" + orderId,
            });
        }
    },
    deleteOrder: function (e) {
        var currentId = util_1.getSetDataCurrent(e, 'id');
        this.setData({
            currentId: currentId,
            show: true
        });
    },
    confirm: function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentId, param, result, title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentId = this.data.currentId;
                        param = { orderId: currentId };
                        return [4, server.orderDelete(param)];
                    case 1:
                        result = _a.sent();
                        title = result.msg;
                        this.setData({
                            show: false
                        });
                        wx.showToast({
                            title: title,
                            icon: 'none'
                        });
                        return [2];
                }
            });
        });
    },
    onShow: function () {
    },
    onReachBottom: function () {
        var _this = this;
        var loadEnd = this.data.loadEnd;
        if (loadEnd) {
            wx.showLoading({
                title: '加载中...',
            });
            setTimeout(function () {
                wx.hideLoading();
                var page = _this.data.page;
                page++;
                _this.setData({
                    page: page
                });
                _this.userQueryOrder();
            }, 500);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVjb3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdURBQXFEO0FBR3JELElBQU0sTUFBTSxHQUFHLElBQUksZ0JBQVUsRUFBRSxDQUFBO0FBRy9CLDRDQUFnRTtBQUVoRSxJQUFJLENBQUM7SUFLSixJQUFJLEVBQUU7UUFDTCxJQUFJLEVBQUUsQ0FBQztRQUNQLElBQUksRUFBRSxFQUFFO1FBQ1IsS0FBSyxFQUFFLEVBQUU7UUFDVCxJQUFJLEVBQUUsS0FBSztRQUNYLEtBQUssRUFBRSxLQUFLO1FBQ1osUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsRUFBRTtRQUNiLE9BQU8sRUFBRSxJQUFJO1FBQ2IsWUFBWSxFQUFFLEtBQUs7S0FDbkI7SUFLRCxNQUFNLEVBQUUsVUFBVSxRQUFRO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNqQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDdEIsQ0FBQztJQUtLLFVBQVU7Ozs7OzRCQUNBLFdBQU0sTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFBOzt3QkFBbEMsTUFBTSxHQUFHLFNBQXlCO3dCQUN4QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFOzRCQUNqQixRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQTs0QkFDdEIsWUFBWSxHQUFHLENBQUMsY0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTs0QkFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQ0FDWixRQUFRLFVBQUE7Z0NBQ1IsWUFBWSxjQUFBOzZCQUNaLENBQUMsQ0FBQTt5QkFDRjs7Ozs7S0FDRDtJQUtLLGNBQWM7Ozs7Ozt3QkFDYixJQUFJLEdBQUssSUFBSSxDQUFDLElBQUksS0FBZCxDQUFj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LFdBQU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQXhDLE1BQU0sR0FBRyxTQUErQjt3QkFDMUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUE7d0JBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1osSUFBSSxFQUFFLEtBQUs7eUJBQ1gsQ0FBQyxDQUFBO3dCQUNGLEVBQUUsQ0FBQyxTQUFTLENBQUM7NEJBQ1osS0FBSyxPQUFBOzRCQUNMLElBQUksRUFBRSxNQUFNO3lCQUNaLENBQUMsQ0FBQTs7Ozs7S0FDRjtJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxhQUFhLEVBQUU7UUFBQSxpQkFnQmQ7UUFmTSxJQUFBLE9BQU8sR0FBSyxJQUFJLENBQUMsSUFBSSxRQUFkLENBQWM7UUFDM0IsSUFBSSxPQUFPLEVBQUU7WUFDWixFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNkLEtBQUssRUFBRSxRQUFRO2FBQ2YsQ0FBQyxDQUFBO1lBQ0YsVUFBVSxDQUFDO2dCQUNWLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtnQkFDVixJQUFBLElBQUksR0FBSyxLQUFJLENBQUMsSUFBSSxLQUFkLENBQWM7Z0JBQ3hCLElBQUksRUFBRSxDQUFBO2dCQUNOLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1osSUFBSSxNQUFBO2lCQUNKLENBQUMsQ0FBQTtnQkFDRixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7WUFDdEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1NBQ1A7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyog5a+85YWl5qih5Z2XICovXHJcbmltcG9ydCBIb21lU2VydmVyIGZyb20gJy4uLy4uLy4uL2FwaS9hcGkvaG9tZS9zZXJ2ZXInXHJcblxyXG4vKiDlrp7kvovljJbmqKHlnZcgKi9cclxuY29uc3Qgc2VydmVyID0gbmV3IEhvbWVTZXJ2ZXIoKVxyXG5cclxuLyog5a+85YWl5bel5YW357G7ICovXHJcbmltcG9ydCB7IGlzRW1wdHksIGdldFNldERhdGFDdXJyZW50IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCdcclxuXHJcblBhZ2Uoe1xyXG5cclxuXHQvKipcclxuXHQgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuXHQgKi9cclxuXHRkYXRhOiB7XHJcblx0XHRwYWdlOiAxLFxyXG5cdFx0YmlsbDoge30sXHJcblx0XHRvcmRlcjogW10sXHJcblx0XHRzaG93OiBmYWxzZSxcclxuXHRcdHNob3dzOiBmYWxzZSxcclxuXHRcdHVuZGVyd2F5OiB7fSxcclxuXHRcdGN1cnJlbnRJZDogJycsXHJcblx0XHRsb2FkRW5kOiB0cnVlLFxyXG5cdFx0dW5kZXJ3YXlGbGFnOiBmYWxzZSxcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG5cdCAqL1xyXG5cdG9uTG9hZDogZnVuY3Rpb24gKF9vcHRpb25zKSB7XHJcblx0XHR0aGlzLm9yZGVyUXVlcnkoKVxyXG5cdFx0dGhpcy51c2VyUXVlcnlPcmRlcigpXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICog6I635Y+W5q2j5Zyo6L+b6KGM5Lit55qE6K6i5Y2VXHJcblx0ICovXHJcblx0YXN5bmMgb3JkZXJRdWVyeSgpIHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci5vcmRlclF1ZXJ5KClcclxuXHRcdGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcblx0XHRcdGxldCB1bmRlcndheSA9IHJlc3VsdC5kYXRhXHJcblx0XHRcdGxldCB1bmRlcndheUZsYWcgPSAhaXNFbXB0eSh1bmRlcndheSkgPyB0cnVlIDogZmFsc2VcclxuXHRcdFx0dGhpcy5zZXREYXRhKHtcclxuXHRcdFx0XHR1bmRlcndheSxcclxuXHRcdFx0XHR1bmRlcndheUZsYWdcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDojrflj5bljoblj7LorqLljZVcclxuXHQgKi9cclxuXHRhc3luYyB1c2VyUXVlcnlPcmRlcigpIHtcclxuXHRcdGxldCB7IHBhZ2UgfSA9IHRoaXMuZGF0YVxyXG5cdFx0bGV0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci51c2VyUXVlcnlPcmRlcih7IHBhZ2UgfSlcclxuXHRcdGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcblx0XHRcdGxldCB7IG9yZGVyIH0gPSB0aGlzLmRhdGFcclxuXHRcdFx0bGV0IHsgZGF0YSB9ID0gcmVzdWx0XHJcblx0XHRcdGlmICghaXNFbXB0eShkYXRhKSkge1xyXG5cdFx0XHRcdG9yZGVyID0gb3JkZXIuY29uY2F0KGRhdGEpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5zZXREYXRhKHtcclxuXHRcdFx0XHRcdGxvYWRFbmQ6IGZhbHNlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdG9yZGVyXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICog6Lez6L2s6K6i5Y2V6aG16Z2iIFxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBlIFxyXG5cdCAqL1xyXG5cdHRvT3JkZXIoZTogYW55KSB7XHJcblx0XHRsZXQgcm93ID0gZ2V0U2V0RGF0YUN1cnJlbnQoZSwgJ3JvdycpXHJcblx0XHRsZXQgeyBvcmRlcklkLCBpc0NyZWRpdCB9ID0gcm93XHJcblx0XHRpZiAoaXNDcmVkaXQpIHtcclxuXHRcdFx0dGhpcy5hdXRob3JPcmRlcihvcmRlcklkKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0d3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiBgL3BhZ2VzL2hvbWVzL29yZGVyL29yZGVyP29yZGVySWQ9JHtvcmRlcklkfWAsXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICog5p+l55yL6LSm5Y2V6K+m5oOFXHJcblx0ICogQHBhcmFtIGUg6IqC54K55a+56LGhXHJcblx0ICovXHJcblx0YXN5bmMgb3JkZXJEZXRhaWwoZTogYW55KSB7XHJcblx0XHRsZXQgcm93ID0gZ2V0U2V0RGF0YUN1cnJlbnQoZSwgJ3JvdycpXHJcblx0XHRsZXQgb3JkZXJzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ29yZGVycycpXHJcblx0XHRsZXQgeyBvcmRlcklkLCBpc0NyZWRpdCB9ID0gcm93XHJcblx0XHRpZiAoaXNDcmVkaXQpIHtcclxuXHRcdFx0dGhpcy5hdXRob3JPcmRlcihvcmRlcklkKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKCFvcmRlcnMpIHtcclxuXHRcdFx0XHR0aGlzLl9iaWxsKG9yZGVySWQpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bGV0IGlzSGFzID0gb3JkZXJzLnNvbWUoKGVsZW1lbnQ6IHsgb3JkZXJJZDogbnVtYmVyIH0pID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBlbGVtZW50Lm9yZGVySWQgPT09IHJvdy5vcmRlcklkXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRpZiAoaXNIYXMpIHtcclxuXHRcdFx0XHRcdGxldCBiaWxsID0ge31cclxuXHRcdFx0XHRcdG9yZGVycy5mb3JFYWNoKChlbGVtZW50OiB7IG9yZGVySWQ/OiBudW1iZXIgfSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoZWxlbWVudC5vcmRlcklkID09PSByb3cub3JkZXJJZCkge1xyXG5cdFx0XHRcdFx0XHRcdGJpbGwgPSBlbGVtZW50XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR0aGlzLnNldERhdGEoeyBiaWxsIH0pXHJcblx0XHRcdFx0XHRpZiAoIWlzRW1wdHkoYmlsbCkpIHtcclxuXHRcdFx0XHRcdFx0d3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL3VzZXJzL29yZGVyRGV0YWlsL29yZGVyRGV0YWlsP2JpbGw9JHtKU09OLnN0cmluZ2lmeShiaWxsKX1gLFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLl9iaWxsKG9yZGVySWQpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyoqXHJcbiAgICog5b6u5L+h5pSv5LuY5YiG6K6i5Y2VXHJcbiAgICovXHJcblx0YXN5bmMgYXV0aG9yT3JkZXIob3JkZXJJZDogc3RyaW5nKSB7XHJcblx0XHRjb25zdCBvcmRlcnMgPSBhd2FpdCBzZXJ2ZXIuZ2V0V2VjaGF0T3JkZXJEZXRhaWwoeyBvcmRlcklkIH0pXHJcblx0XHRpZiAob3JkZXJzLmNvZGUgPT0gMCkge1xyXG5cdFx0XHRjb25zdCB7XHJcblx0XHRcdFx0bWNoX2lkLFxyXG5cdFx0XHRcdHNlcnZpY2VfaWQsXHJcblx0XHRcdFx0b3V0X29yZGVyX25vLFxyXG5cdFx0XHRcdG5vbmNlX3N0cixcclxuXHRcdFx0XHR0aW1lc3RhbXAsXHJcblx0XHRcdFx0c2lnbl90eXBlLFxyXG5cdFx0XHRcdHNpZ25cclxuXHRcdFx0fSA9IG9yZGVycy5kYXRhXHJcblxyXG5cdFx0XHR3eC5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xyXG5cdFx0XHRcdGFwcElkOiAnd3hkOGYzNzkzZWEzYjkzNWI4JyxcclxuXHRcdFx0XHRwYXRoOiAncGFnZXMvcmVjb3JkL2RldGFpbCcsXHJcblx0XHRcdFx0ZXh0cmFEYXRhOiB7XHJcblx0XHRcdFx0XHRtY2hfaWQsXHJcblx0XHRcdFx0XHRzZXJ2aWNlX2lkLFxyXG5cdFx0XHRcdFx0b3V0X29yZGVyX25vLFxyXG5cdFx0XHRcdFx0dGltZXN0YW1wLFxyXG5cdFx0XHRcdFx0bm9uY2Vfc3RyLFxyXG5cdFx0XHRcdFx0c2lnbl90eXBlLFxyXG5cdFx0XHRcdFx0c2lnblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0d3guc2hvd1RvYXN0KHtcclxuXHRcdFx0XHR0aXRsZTogb3JkZXJzLm1zZyxcclxuXHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDojrflj5botKbljZXkv6Hmga9cclxuXHQgKiBAcGFyYW0gb3JkZXJJZCDotKbljZVpZFxyXG5cdCAqL1xyXG5cdGFzeW5jIF9iaWxsKG9yZGVySWQ6IHN0cmluZykge1xyXG5cdFx0Y29uc3QgcGFyYW0gPSB7XHJcblx0XHRcdG9yZGVySWRcclxuXHRcdH1cclxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci5vcmRlckJpbGwocGFyYW0pXHJcblx0XHRpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG5cdFx0XHRpZiAocmVzdWx0LmRhdGEgIT0gbnVsbCkge1xyXG5cdFx0XHRcdGxldCBiaWxsID0gcmVzdWx0LmRhdGFcclxuXHRcdFx0XHRsZXQgb3JkZXJzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ29yZGVycycpXHJcblx0XHRcdFx0aWYgKCFvcmRlcnMpIHtcclxuXHRcdFx0XHRcdHd4LnNldFN0b3JhZ2VTeW5jKCdvcmRlcnMnLCBbXSlcclxuXHRcdFx0XHRcdG9yZGVycyA9IFtdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG9yZGVycy5wdXNoKGJpbGwpXHJcblx0XHRcdFx0dGhpcy5zZXREYXRhKHsgYmlsbCB9KVxyXG5cdFx0XHRcdHd4LnNldFN0b3JhZ2VTeW5jKCdvcmRlcnMnLCBvcmRlcnMpXHJcblx0XHRcdFx0aWYgKCFpc0VtcHR5KGJpbGwpKSB7XHJcblx0XHRcdFx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL3VzZXJzL29yZGVyRGV0YWlsL29yZGVyRGV0YWlsP2JpbGw9JHtKU09OLnN0cmluZ2lmeShiaWxsKX1gLFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICog6Lez6L2s5pSv5LuY6aG16Z2iXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGUgXHJcblx0ICovXHJcblx0cGF5KGU6IGFueSkge1xyXG5cdFx0bGV0IHJvdyA9IGdldFNldERhdGFDdXJyZW50KGUsICdyb3cnKVxyXG5cdFx0aWYgKHJvdy5zdGF0ZSA9PSAzKSB7XHJcblx0XHRcdGxldCB7IG9yZGVySWQgfSA9IHJvd1xyXG5cdFx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6IGAvcGFnZXMvaG9tZXMvcGF5L3BheT9vcmRlcklkPSR7b3JkZXJJZH1gLFxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIOaLiei1t+WIoOmZpOaPkOekuuWvueivneahhlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBlIFxyXG5cdCAqL1xyXG5cdGRlbGV0ZU9yZGVyKGU6IGFueSkge1xyXG5cdFx0bGV0IGN1cnJlbnRJZCA9IGdldFNldERhdGFDdXJyZW50KGUsICdpZCcpXHJcblx0XHR0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRjdXJyZW50SWQsXHJcblx0XHRcdHNob3c6IHRydWVcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICog56Gu6K6k5Yig6Zmk6K6i5Y2VXHJcblx0ICovXHJcblx0YXN5bmMgY29uZmlybSgpIHtcclxuXHRcdGNvbnN0IHsgY3VycmVudElkIH0gPSB0aGlzLmRhdGFcclxuXHRcdGxldCBwYXJhbSA9IHsgb3JkZXJJZDogY3VycmVudElkIH1cclxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci5vcmRlckRlbGV0ZShwYXJhbSlcclxuXHRcdGxldCB0aXRsZSA9IHJlc3VsdC5tc2dcclxuXHRcdHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdHNob3c6IGZhbHNlXHJcblx0XHR9KVxyXG5cdFx0d3guc2hvd1RvYXN0KHtcclxuXHRcdFx0dGl0bGUsXHJcblx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG5cdCAqL1xyXG5cdG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG5cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuXHQgKi9cclxuXHRvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRsZXQgeyBsb2FkRW5kIH0gPSB0aGlzLmRhdGFcclxuXHRcdGlmIChsb2FkRW5kKSB7XHJcblx0XHRcdHd4LnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHR0aXRsZTogJ+WKoOi9veS4rS4uLicsXHJcblx0XHRcdH0pXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHd4LmhpZGVMb2FkaW5nKClcclxuXHRcdFx0XHRsZXQgeyBwYWdlIH0gPSB0aGlzLmRhdGFcclxuXHRcdFx0XHRwYWdlKytcclxuXHRcdFx0XHR0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdFx0cGFnZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0dGhpcy51c2VyUXVlcnlPcmRlcigpXHJcblx0XHRcdH0sIDUwMClcclxuXHRcdH1cclxuXHR9XHJcbn0pIl19