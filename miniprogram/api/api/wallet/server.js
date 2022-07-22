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
var WalletServer = (function (_super) {
    __extends(WalletServer, _super);
    function WalletServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WalletServer.prototype.walletModifyPassword = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.walletModifyPasswordModel(data)];
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
    WalletServer.prototype.getWallet = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getWalletModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            result.data.balance = util_1.formatMoney(result.data.balance);
                            result.data.totalBalance = util_1.formatMoney(result.data.totalBalance);
                            result.data.profitBalance = util_1.formatMoney(result.data.profitBalance);
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    WalletServer.prototype.rechargeMoney = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.rechargeMoneyModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            if (result.code == 0) {
                                result.data.forEach(function (elements) {
                                    elements.date = util_1.formatDate(elements.createDate);
                                    elements.accountingAmount = util_1.formatMoney(elements.accountingAmount);
                                });
                            }
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    WalletServer.prototype.getWalletBalance = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getWalletBalanceModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            result.data.balance = util_1.formatMoney(result.data.balance);
                            result.data.totalBalance = util_1.formatMoney(result.data.totalBalance);
                            result.data.profitBalance = util_1.formatMoney(result.data.profitBalance);
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    WalletServer.prototype.getWalletParking = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getWalletParkingModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            result.data.balance = util_1.formatMoney(result.data.balance);
                            result.data.totalBalance = util_1.formatMoney(result.data.totalBalance);
                            result.data.profitBalance = util_1.formatMoney(result.data.profitBalance);
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    return WalletServer;
}(model_1.default));
exports.default = WalletServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUNBQWlDO0FBYWpDLDRDQUE2RDtBQU03RDtJQUEwQyxnQ0FBVztJQUFyRDs7SUFnRkEsQ0FBQztJQTNFQywyQ0FBb0IsR0FBcEIsVUFBcUIsSUFBMEI7UUFBL0MsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQU0sT0FBTzs7Ozs0QkFDZixXQUFNLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQW5ELE1BQU0sR0FBRyxTQUEwQzt3QkFDekQsSUFBSSxNQUFNLEVBQUU7NEJBQ1YsT0FBTyxjQUFNLE1BQU0sRUFBRyxDQUFBO3lCQUN2Qjs7OzthQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFNRCxnQ0FBUyxHQUFULFVBQVUsSUFBVTtRQUFwQixpQkFVQztRQVRDLE9BQU8sSUFBSSxPQUFPLENBQXNDLFVBQU0sT0FBTzs7Ozs0QkFDcEQsV0FBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBeEMsTUFBTSxHQUFHLFNBQStCO3dCQUM5QyxJQUFJLE1BQU0sRUFBRTs0QkFDVixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxrQkFBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7NEJBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLGtCQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTs0QkFDaEUsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsa0JBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBOzRCQUNsRSxPQUFPLGNBQU0sTUFBTSxFQUFHLENBQUE7eUJBQ3ZCOzs7O2FBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1ELG9DQUFhLEdBQWIsVUFBYyxJQUFVO1FBQXhCLGlCQWFDO1FBWkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFNLE9BQU87Ozs7NEJBQ2pCLFdBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBNUMsTUFBTSxHQUFHLFNBQW1DO3dCQUNoRCxJQUFJLE1BQU0sRUFBRTs0QkFDVixJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO2dDQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQWtFO29DQUNyRixRQUFRLENBQUMsSUFBSSxHQUFHLGlCQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO29DQUMvQyxRQUFRLENBQUMsZ0JBQWdCLEdBQUcsa0JBQVcsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtnQ0FDcEUsQ0FBQyxDQUFDLENBQUE7NkJBQ0g7NEJBQ0QsT0FBTyxjQUFNLE1BQU0sRUFBRyxDQUFBO3lCQUN2Qjs7OzthQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFNRCx1Q0FBZ0IsR0FBaEIsVUFBaUIsSUFBc0I7UUFBdkMsaUJBVUM7UUFUQyxPQUFPLElBQUksT0FBTyxDQUE2QyxVQUFNLE9BQU87Ozs7NEJBQzNELFdBQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBL0MsTUFBTSxHQUFHLFNBQXNDO3dCQUNyRCxJQUFJLE1BQU0sRUFBRTs0QkFDVixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxrQkFBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7NEJBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLGtCQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTs0QkFDaEUsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsa0JBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBOzRCQUNsRSxPQUFPLGNBQU0sTUFBTSxFQUFHLENBQUE7eUJBQ3ZCOzs7O2FBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1ELHVDQUFnQixHQUFoQixVQUFpQixJQUFzQjtRQUF2QyxpQkFVQztRQVRDLE9BQU8sSUFBSSxPQUFPLENBQTZDLFVBQU0sT0FBTzs7Ozs0QkFDN0QsV0FBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUEvQyxNQUFNLEdBQUcsU0FBc0M7d0JBQ25ELElBQUksTUFBTSxFQUFFOzRCQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLGtCQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTs0QkFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsa0JBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBOzRCQUNoRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxrQkFBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7NEJBQ2xFLE9BQU8sY0FBTSxNQUFNLEVBQUcsQ0FBQTt5QkFDdkI7Ozs7YUFDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBaEZELENBQTBDLGVBQVcsR0FnRnBEIiwic291cmNlc0NvbnRlbnQiOlsiLyog5a+85YWl5qih5Z6L5bGCICovXHJcbmltcG9ydCBXYWxsZXRNb2RlbCBmcm9tICcuL21vZGVsJ1xyXG5cclxuLyog5a+85YWl6K+35rGC5Y+C5pWw5o6l5Y+jIFRT5o6l5Y+j57G75Z6LICovXHJcbmltcG9ydCB7XHJcbiAgV2FsbGV0TW9kaWZ5UGFzc3dvcmQsXHJcbiAgR2V0V2FsbGV0QmFsYW5jZSxcclxuICBHZXRXYWxsZXRQYXJraW5nXHJcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3JlcXVlc3RJbnRlcmZhY2Uvd2FsbGV0J1xyXG5cclxuLyog5a+85YWl572R57uc6K+35rGC5o6l5Y+jIFRT5o6l5Y+j57G75Z6LICovXHJcbmltcG9ydCB7IFJlcXVlc3RQcm9taXNlLCBSZXNwb25zZURhdGEgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9odHRwJ1xyXG5cclxuLyog5a+85YWl5bel5YW357G7ICovXHJcbmltcG9ydCB7IGZvcm1hdERhdGUsIGZvcm1hdE1vbmV5IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCdcclxuaW1wb3J0IHsgR2V0V2FsbGV0QmFsYW5jZVJlc3BvbnNlRGF0YSwgR2V0V2FsbGV0UGFya2luZ1Jlc3BvbnNlRGF0YSwgR2V0V2FsbGV0UmVzcG9uc2VEYXRhIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3Jlc3BvbnNlSW50ZXJmYWNlL3dhbGxldCdcclxuXHJcbi8qKlxyXG4gKiDpkrHljIXmqKHlnZct5pyN5Yqh5bGCXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxsZXRTZXJ2ZXIgZXh0ZW5kcyBXYWxsZXRNb2RlbCB7XHJcbiAgLyoqXHJcbiAgICAgKiDkv67mlLnmlK/ku5jlr4bnoIHmjqXlj6NcclxuICAgICAqIEBwYXJhbSB7V2FsbGV0TW9kaWZ5UGFzc3dvcmR9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAgICovXHJcbiAgd2FsbGV0TW9kaWZ5UGFzc3dvcmQoZGF0YTogV2FsbGV0TW9kaWZ5UGFzc3dvcmQpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMud2FsbGV0TW9kaWZ5UGFzc3dvcmRNb2RlbChkYXRhKVxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5oiR55qE6ZKx5YyF5o6l5Y+jXHJcbiAgICogQHBhcmFtIHthbnl9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIGdldFdhbGxldChkYXRhPzogYW55KTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlc3BvbnNlRGF0YTxHZXRXYWxsZXRSZXNwb25zZURhdGE+Pihhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5nZXRXYWxsZXRNb2RlbChkYXRhKVxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmVzdWx0LmRhdGEuYmFsYW5jZSA9IGZvcm1hdE1vbmV5KHJlc3VsdC5kYXRhLmJhbGFuY2UpXHJcbiAgICAgICAgcmVzdWx0LmRhdGEudG90YWxCYWxhbmNlID0gZm9ybWF0TW9uZXkocmVzdWx0LmRhdGEudG90YWxCYWxhbmNlKVxyXG4gICAgICAgIHJlc3VsdC5kYXRhLnByb2ZpdEJhbGFuY2UgPSBmb3JtYXRNb25leShyZXN1bHQuZGF0YS5wcm9maXRCYWxhbmNlKVxyXG4gICAgICAgIHJlc29sdmUoeyAuLi5yZXN1bHQgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOafpeivouWFheWAvOiusOW9leaOpeWPo1xyXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICByZWNoYXJnZU1vbmV5KGRhdGE/OiBhbnkpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlY2hhcmdlTW9uZXlNb2RlbChkYXRhKVxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDApIHtcclxuICAgICAgICAgIHJlc3VsdC5kYXRhLmZvckVhY2goKGVsZW1lbnRzOiB7IGRhdGU6IGFueTsgY3JlYXRlRGF0ZTogYW55OyBhY2NvdW50aW5nQW1vdW50OiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5kYXRlID0gZm9ybWF0RGF0ZShlbGVtZW50cy5jcmVhdGVEYXRlKVxyXG4gICAgICAgICAgICBlbGVtZW50cy5hY2NvdW50aW5nQW1vdW50ID0gZm9ybWF0TW9uZXkoZWxlbWVudHMuYWNjb3VudGluZ0Ftb3VudClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmUoeyAuLi5yZXN1bHQgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOmSseWMheaYjue7huaOpeWPo1xyXG4gICAqIEBwYXJhbSB7R2V0V2FsbGV0QmFsYW5jZX0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgZ2V0V2FsbGV0QmFsYW5jZShkYXRhOiBHZXRXYWxsZXRCYWxhbmNlKTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlc3BvbnNlRGF0YTxHZXRXYWxsZXRCYWxhbmNlUmVzcG9uc2VEYXRhPj4oYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZ2V0V2FsbGV0QmFsYW5jZU1vZGVsKGRhdGEpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICByZXN1bHQuZGF0YS5iYWxhbmNlID0gZm9ybWF0TW9uZXkocmVzdWx0LmRhdGEuYmFsYW5jZSlcclxuICAgICAgICByZXN1bHQuZGF0YS50b3RhbEJhbGFuY2UgPSBmb3JtYXRNb25leShyZXN1bHQuZGF0YS50b3RhbEJhbGFuY2UpXHJcbiAgICAgICAgcmVzdWx0LmRhdGEucHJvZml0QmFsYW5jZSA9IGZvcm1hdE1vbmV5KHJlc3VsdC5kYXRhLnByb2ZpdEJhbGFuY2UpXHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6L2m5L2N5pS255uKXHJcbiAgICogQHBhcmFtIHtHZXRXYWxsZXRQYXJraW5nfSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICBnZXRXYWxsZXRQYXJraW5nKGRhdGE6IEdldFdhbGxldFBhcmtpbmcpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVzcG9uc2VEYXRhPEdldFdhbGxldFBhcmtpbmdSZXNwb25zZURhdGE+Pihhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZ2V0V2FsbGV0UGFya2luZ01vZGVsKGRhdGEpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICByZXN1bHQuZGF0YS5iYWxhbmNlID0gZm9ybWF0TW9uZXkocmVzdWx0LmRhdGEuYmFsYW5jZSlcclxuICAgICAgICByZXN1bHQuZGF0YS50b3RhbEJhbGFuY2UgPSBmb3JtYXRNb25leShyZXN1bHQuZGF0YS50b3RhbEJhbGFuY2UpXHJcbiAgICAgICAgcmVzdWx0LmRhdGEucHJvZml0QmFsYW5jZSA9IGZvcm1hdE1vbmV5KHJlc3VsdC5kYXRhLnByb2ZpdEJhbGFuY2UpXHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iXX0=