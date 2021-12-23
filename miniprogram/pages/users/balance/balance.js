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
var server = new server_1.default();
var util_1 = require("../../../utils/util");
Page({
    data: {
        wallet: {},
        recharge: [],
        menu: [{
                name: '全部',
                index: '0'
            },
            {
                name: '收入',
                index: 1
            },
            {
                name: '支出',
                index: 2
            }
        ],
        active: 0,
        nav: [{
                name: '钱包',
                index: '0'
            },
            {
                name: '车位收益',
                index: 1
            }
        ],
        indexs: 0
    },
    onLoad: function (_options) {
        this.getWalletBalance();
        this.rechargeMoney();
    },
    getWalletBalance: function () {
        return __awaiter(this, void 0, void 0, function () {
            var param, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = {
                            pageNum: 1,
                            transactionType: 0
                        };
                        return [4, server.getWalletBalance(param)];
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
    rechargeMoney: function () {
        return __awaiter(this, void 0, void 0, function () {
            var param, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = {
                            pageNum: 1,
                            transactionType: 0
                        };
                        return [4, server.rechargeMoney(param)];
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
    getWalletParking: function () {
        return __awaiter(this, void 0, void 0, function () {
            var param, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = {
                            pageNum: 1,
                            transactionType: 0
                        };
                        return [4, server.getWalletParking(param)];
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
    onMenu: function (e) {
        var index = util_1.getSetDataCurrent(e, 'index');
        var recharge = this.data.recharge;
        var data = recharge;
        if (index == 1) {
            data.map(function (item) {
                var temp = false;
                if (item.transactionType == 1) {
                    temp = true;
                }
                return temp;
            });
        }
        if (index == 2) {
            data.map(function (item) {
                var tem = false;
                if (item.transactionType == 2) {
                    tem = true;
                }
                return tem;
            });
        }
        this.setData({
            active: index
        });
    },
    onNavto: function (e) {
        var indexs = util_1.getSetDataCurrent(e, 'index');
        this.setData({
            indexs: indexs
        });
        if (indexs == 0) {
            this.getWalletBalance();
        }
        else {
            this.getWalletParking();
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFsYW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhbGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5REFBeUQ7QUFHekQsSUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBWSxFQUFFLENBQUE7QUFHakMsNENBRTRCO0FBRTVCLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLEVBQUU7UUFDWixJQUFJLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsSUFBSTtnQkFDVixLQUFLLEVBQUUsR0FBRzthQUNYO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsS0FBSyxFQUFFLENBQUM7YUFDVDtZQUNEO2dCQUNFLElBQUksRUFBRSxJQUFJO2dCQUNWLEtBQUssRUFBRSxDQUFDO2FBQ1Q7U0FDQTtRQUNELE1BQU0sRUFBRSxDQUFDO1FBQ1QsR0FBRyxFQUFFLENBQUM7Z0JBQ0osSUFBSSxFQUFFLElBQUk7Z0JBQ1YsS0FBSyxFQUFFLEdBQUc7YUFDWDtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxDQUFDO2FBQ1Q7U0FDQTtRQUNELE1BQU0sRUFBRSxDQUFDO0tBQ1Y7SUFLRCxNQUFNLEVBQUUsVUFBVSxRQUFRO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0lBS0ssZ0JBQWdCOzs7Ozs7d0JBQ2QsS0FBSyxHQUFHOzRCQUNaLE9BQU8sRUFBRSxDQUFDOzRCQUNWLGVBQWUsRUFBRSxDQUFDO3lCQUNuQixDQUFBO3dCQUNjLFdBQU0sTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFBOzt3QkFBN0MsTUFBTSxHQUFHLFNBQW9DO3dCQUNuRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFOzRCQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDO2dDQUNYLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSTs2QkFDcEIsQ0FBQyxDQUFBO3lCQUNIOzs7OztLQUNGO0lBS0ssYUFBYTs7Ozs7O3dCQUNYLEtBQUssR0FBRzs0QkFDWixPQUFPLEVBQUUsQ0FBQzs0QkFDVixlQUFlLEVBQUUsQ0FBQzt5QkFDbkIsQ0FBQTt3QkFDYyxXQUFNLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUExQyxNQUFNLEdBQUcsU0FBaUM7d0JBQ2hELElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7NEJBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0NBQ1gsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJOzZCQUNwQixDQUFDLENBQUE7eUJBQ0g7Ozs7O0tBQ0Y7SUFLSyxnQkFBZ0I7Ozs7Ozt3QkFDZCxLQUFLLEdBQUc7NEJBQ1osT0FBTyxFQUFFLENBQUM7NEJBQ1YsZUFBZSxFQUFFLENBQUM7eUJBQ25CLENBQUE7d0JBQ2MsV0FBTSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUE3QyxNQUFNLEdBQUcsU0FBb0M7d0JBQ25ELElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7NEJBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0NBQ1gsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJOzZCQUNwQixDQUFDLENBQUE7eUJBQ0g7Ozs7O0tBQ0Y7SUFNRCxNQUFNLEVBQU4sVUFBTyxDQUFNO1FBQ1gsSUFBTSxLQUFLLEdBQUcsd0JBQWlCLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ3JDLElBQUEsUUFBUSxHQUFVLElBQUksQ0FBQyxJQUFJLFNBQW5CLENBQW1CO1FBQ2pDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQTtRQUNuQixJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBaUM7Z0JBQ3pDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQTtnQkFDaEIsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsRUFBRTtvQkFDN0IsSUFBSSxHQUFHLElBQUksQ0FBQTtpQkFDWjtnQkFDRCxPQUFPLElBQUksQ0FBQTtZQUNiLENBQUMsQ0FBQyxDQUFBO1NBQ0g7UUFDRCxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBaUM7Z0JBQ3pDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQTtnQkFDZixJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxFQUFFO29CQUM3QixHQUFHLEdBQUcsSUFBSSxDQUFBO2lCQUNYO2dCQUNELE9BQU8sR0FBRyxDQUFBO1lBQ1osQ0FBQyxDQUFDLENBQUE7U0FDSDtRQUNELElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxNQUFNLEVBQUUsS0FBSztTQUNkLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFNRCxPQUFPLEVBQVAsVUFBUSxDQUFNO1FBQ1osSUFBTSxNQUFNLEdBQUcsd0JBQWlCLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxNQUFNLFFBQUE7U0FDUCxDQUFDLENBQUE7UUFDRixJQUFJLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7U0FDeEI7SUFDSCxDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyog5a+85YWl5qih5Z2XICovXHJcbmltcG9ydCBXYWxsZXRTZXJ2ZXIgZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS93YWxsZXQvc2VydmVyJ1xyXG5cclxuLyog5a6e5L6L5YyW5qih5Z2XICovXHJcbmNvbnN0IHNlcnZlciA9IG5ldyBXYWxsZXRTZXJ2ZXIoKVxyXG5cclxuLyog5a+85YWl5bel5YW357G7ICovXHJcbmltcG9ydCB7XHJcbiAgZ2V0U2V0RGF0YUN1cnJlbnRcclxufSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJ1xyXG5cclxuUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIHdhbGxldDoge30sXHJcbiAgICByZWNoYXJnZTogW10sXHJcbiAgICBtZW51OiBbe1xyXG4gICAgICBuYW1lOiAn5YWo6YOoJyxcclxuICAgICAgaW5kZXg6ICcwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ+aUtuWFpScsXHJcbiAgICAgIGluZGV4OiAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAn5pSv5Ye6JyxcclxuICAgICAgaW5kZXg6IDJcclxuICAgIH1cclxuICAgIF0sXHJcbiAgICBhY3RpdmU6IDAsXHJcbiAgICBuYXY6IFt7XHJcbiAgICAgIG5hbWU6ICfpkrHljIUnLFxyXG4gICAgICBpbmRleDogJzAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAn6L2m5L2N5pS255uKJyxcclxuICAgICAgaW5kZXg6IDFcclxuICAgIH1cclxuICAgIF0sXHJcbiAgICBpbmRleHM6IDBcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZDogZnVuY3Rpb24gKF9vcHRpb25zKSB7XHJcbiAgICB0aGlzLmdldFdhbGxldEJhbGFuY2UoKVxyXG4gICAgdGhpcy5yZWNoYXJnZU1vbmV5KClcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bpkrHljIXkv6Hmga9cclxuICAgKi9cclxuICBhc3luYyBnZXRXYWxsZXRCYWxhbmNlKCkge1xyXG4gICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgIHBhZ2VOdW06IDEsXHJcbiAgICAgIHRyYW5zYWN0aW9uVHlwZTogMFxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyLmdldFdhbGxldEJhbGFuY2UocGFyYW0pXHJcbiAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHdhbGxldDogcmVzdWx0LmRhdGFcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDojrflj5blhYXlgLzorrDlvZVcclxuICAgKi9cclxuICBhc3luYyByZWNoYXJnZU1vbmV5KCkge1xyXG4gICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgIHBhZ2VOdW06IDEsXHJcbiAgICAgIHRyYW5zYWN0aW9uVHlwZTogMFxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyLnJlY2hhcmdlTW9uZXkocGFyYW0pXHJcbiAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHdhbGxldDogcmVzdWx0LmRhdGFcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bovabkvY3mlLbnm4pcclxuICAgKi9cclxuICBhc3luYyBnZXRXYWxsZXRQYXJraW5nKCkge1xyXG4gICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgIHBhZ2VOdW06IDEsXHJcbiAgICAgIHRyYW5zYWN0aW9uVHlwZTogMFxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyLmdldFdhbGxldFBhcmtpbmcocGFyYW0pXHJcbiAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHdhbGxldDogcmVzdWx0LmRhdGFcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDliIfmjaLorrDlvZXnsbvlnotcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBcclxuICAgKi9cclxuICBvbk1lbnUoZTogYW55KSB7XHJcbiAgICBjb25zdCBpbmRleCA9IGdldFNldERhdGFDdXJyZW50KGUsICdpbmRleCcpXHJcbiAgICBsZXQgeyByZWNoYXJnZSB9ID0gPGFueT50aGlzLmRhdGFcclxuICAgIGxldCBkYXRhID0gcmVjaGFyZ2VcclxuICAgIGlmIChpbmRleCA9PSAxKSB7XHJcbiAgICAgIGRhdGEubWFwKChpdGVtOiB7IHRyYW5zYWN0aW9uVHlwZTogbnVtYmVyIH0pID0+IHtcclxuICAgICAgICBsZXQgdGVtcCA9IGZhbHNlXHJcbiAgICAgICAgaWYgKGl0ZW0udHJhbnNhY3Rpb25UeXBlID09IDEpIHtcclxuICAgICAgICAgIHRlbXAgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZiAoaW5kZXggPT0gMikge1xyXG4gICAgICBkYXRhLm1hcCgoaXRlbTogeyB0cmFuc2FjdGlvblR5cGU6IG51bWJlciB9KSA9PiB7XHJcbiAgICAgICAgbGV0IHRlbSA9IGZhbHNlXHJcbiAgICAgICAgaWYgKGl0ZW0udHJhbnNhY3Rpb25UeXBlID09IDIpIHtcclxuICAgICAgICAgIHRlbSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlbVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgYWN0aXZlOiBpbmRleFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDliIfmjaLljaHljIXnsbvlnotcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBcclxuICAgKi9cclxuICBvbk5hdnRvKGU6IGFueSkge1xyXG4gICAgY29uc3QgaW5kZXhzID0gZ2V0U2V0RGF0YUN1cnJlbnQoZSwgJ2luZGV4JylcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGluZGV4c1xyXG4gICAgfSlcclxuICAgIGlmIChpbmRleHMgPT0gMCkge1xyXG4gICAgICB0aGlzLmdldFdhbGxldEJhbGFuY2UoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5nZXRXYWxsZXRQYXJraW5nKClcclxuICAgIH1cclxuICB9XHJcblxyXG59KSJdfQ==