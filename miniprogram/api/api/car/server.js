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
var CarServer = (function (_super) {
    __extends(CarServer, _super);
    function CarServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarServer.prototype.userQueryDetails = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result, section, date, b, e;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.userQueryDetailsModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            if (result.code == 0) {
                                section = [];
                                date = new Date();
                                b = util_1.getTime(date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + result.data.beginDate + ":00");
                                e = util_1.getTime(date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + result.data.endDate + ":00");
                                section[0] = b;
                                section[1] = e;
                                result.data.section = section;
                            }
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    CarServer.prototype.parkingDate = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.parkingDateModel(data)];
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
    CarServer.prototype.myParking = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.myParkingModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            if (result.code == 0) {
                                result.data.forEach(function (element) {
                                    element.status = status_1.openStatus(element.state, element.openState);
                                    element.rental = util_1.repeatDesc(element.rentalCycle);
                                    element.endDate = util_1.formatMinute(element.endDate);
                                    element.beginDate = util_1.formatMinute(element.beginDate);
                                    element.lockerId = "****" + element.lockerIds.substr(-4);
                                });
                            }
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    CarServer.prototype.parkingTimeModify = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.parkingTimeModifyModel(data)];
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
    CarServer.prototype.modifyOpenState = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modifyOpenStateModel(data)];
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
    CarServer.prototype.lockDate = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result, ruls;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.lockDateModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            ruls = result.data.tipInfo.split(/\d/);
                            console.log(ruls);
                            result.data.tipInfo = ruls;
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    CarServer.prototype.listEstateDimension = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.listEstateDimensionModel(data)];
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
    return CarServer;
}(model_1.default));
exports.default = CarServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUNBQThCO0FBZ0I5Qiw0Q0FBdUU7QUFHdkUsZ0RBQWtEO0FBTWxEO0lBQXVDLDZCQUFRO0lBQS9DOztJQWdIQSxDQUFDO0lBM0dDLG9DQUFnQixHQUFoQixVQUFpQixJQUFzQjtRQUF2QyxpQkFnQkM7UUFmQyxPQUFPLElBQUksT0FBTyxDQUE2QyxVQUFNLE9BQU87Ozs7NEJBQzdELFdBQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBL0MsTUFBTSxHQUFHLFNBQXNDO3dCQUNuRCxJQUFJLE1BQU0sRUFBRTs0QkFDVixJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO2dDQUNoQixPQUFPLEdBQUcsRUFBRSxDQUFBO2dDQUNWLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO2dDQUNuQixDQUFDLEdBQUcsY0FBTyxDQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsUUFBSyxDQUFDLENBQUE7Z0NBQ3pHLENBQUMsR0FBRyxjQUFPLENBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxVQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxRQUFLLENBQUMsQ0FBQTtnQ0FDM0csT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQ0FDZCxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFB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LEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTs0QkFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBOzRCQUMxQixPQUFPLGNBQU0sTUFBTSxFQUFHLENBQUE7eUJBQ3ZCOzs7O2FBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1ELHVDQUFtQixHQUFuQixVQUFvQixJQUF5QjtRQUE3QyxpQkFPQztRQU5DLE9BQU8sSUFBSSxPQUFPLENBQWdELFVBQU0sT0FBTzs7Ozs0QkFDOUQsV0FBTSxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUFsRCxNQUFNLEdBQUcsU0FBeUM7d0JBQ3hELElBQUksTUFBTSxFQUFFOzRCQUNWLE9BQU8sY0FBTSxNQUFNLEVBQUcsQ0FBQTt5QkFDdkI7Ozs7YUFDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBaEhELENBQXVDLGVBQVEsR0FnSDlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoq5a+85YWl5qih5Z6L5bGCICovXHJcbmltcG9ydCBDYXJNb2RlbCBmcm9tICcuL21vZGVsJ1xyXG5cclxuLyoq5a+85YWl6K+35rGC5Y+C5pWw5o6l5Y+jIFRT5o6l5Y+j57G75Z6LKi9cclxuaW1wb3J0IHtcclxuICBVc2VyUXVlcnlEZXRhaWxzLFxyXG4gIFBhcmtpbmdEYXRlLFxyXG4gIFBhcmtpbmdUaW1lTW9kaWZ5LFxyXG4gIE1vZGlmeU9wZW5TdGF0ZSxcclxuICBMb2NrRGF0ZSxcclxuICBMaXN0RXN0YXRlRGltZW5zaW9uXHJcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3JlcXVlc3RJbnRlcmZhY2UvY2FyJ1xyXG5cclxuLyoq5a+85YWl572R57uc6K+35rGC5o6l5Y+jIFRT5o6l5Y+j57G75Z6LKi9cclxuaW1wb3J0IHsgUmVxdWVzdFByb21pc2UsUmVzcG9uc2VEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvaHR0cCdcclxuXHJcbi8qKuWvvOWFpeW3peWFt+exuyAqL1xyXG5pbXBvcnQgeyBnZXRUaW1lLCByZXBlYXREZXNjLCBmb3JtYXRNaW51dGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJ1xyXG5cclxuLyoq6L2m5L2N5byA5pS+54q25oCBICovXHJcbmltcG9ydCB7IG9wZW5TdGF0dXMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9zdGF0dXMnXHJcbmltcG9ydCB7IExpc3RFc3RhdGVEaW1lbnNpb25SZXNwb25zZURhdGEsIExvY2tEYXRlUmVzcG9uc2VEYXRhLCBNb2RpZnlPcGVuU3RhdGVSZXNwb25zZURhdGEsIFVzZXJRdWVyeURldGFpbHNSZXNwb25zZURhdGEgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvcmVzcG9uc2VJbnRlcmZhY2UvY2FyJ1xyXG5cclxuLyoqXHJcbiAqIOi9puWcuuivpuaDhS3mnI3liqHlsYJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhclNlcnZlciBleHRlbmRzIENhck1vZGVsIHtcclxuICAvKipcclxuICAgKiDovablnLror6bmg4VcclxuICAgKiBAcGFyYW0ge1VzZXJRdWVyeURldGFpbHN9IGRhdGEg6K+35rGC5Y+C5pWwXHJcbiAgICovXHJcbiAgdXNlclF1ZXJ5RGV0YWlscyhkYXRhOiBVc2VyUXVlcnlEZXRhaWxzKTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlc3BvbnNlRGF0YTxVc2VyUXVlcnlEZXRhaWxzUmVzcG9uc2VEYXRhPj4oYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLnVzZXJRdWVyeURldGFpbHNNb2RlbChkYXRhKVxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDApIHtcclxuICAgICAgICAgIGxldCBzZWN0aW9uID0gW11cclxuICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICBsZXQgYiA9IGdldFRpbWUoYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS8ke2RhdGUuZ2V0TW9udGgoKSArIDF9LyR7ZGF0ZS5nZXREYXRlKCl9ICR7cmVzdWx0LmRhdGEuYmVnaW5EYXRlfTowMGApXHJcbiAgICAgICAgICBsZXQgZSA9IGdldFRpbWUoYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS8ke2RhdGUuZ2V0TW9udGgoKSArIDF9LyR7ZGF0ZS5nZXREYXRlKCl9ICR7cmVzdWx0LmRhdGEuZW5kRGF0ZX06MDBgKVxyXG4gICAgICAgICAgc2VjdGlvblswXSA9IGJcclxuICAgICAgICAgIHNlY3Rpb25bMV0gPSBlXHJcbiAgICAgICAgICByZXN1bHQuZGF0YS5zZWN0aW9uID0gc2VjdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXNvbHZlKHsgLi4ucmVzdWx0IH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmoLnmja7ovabkvY3nvJblj7fojrflj5bovabkvY3lvIDmlL7ml7bpl7RcclxuICAgKiBAcGFyYW0ge1BhcmtpbmdEYXRlfSBkYXRhIOivt+axguWPguaVsFxyXG4gICAqL1xyXG4gIHBhcmtpbmdEYXRlKGRhdGE6IFBhcmtpbmdEYXRlKTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnBhcmtpbmdEYXRlTW9kZWwoZGF0YSlcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJlc29sdmUoeyAuLi5yZXN1bHQgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaIkeeahOi9puS9jeivpuaDhVxyXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhIOivt+axguWPguaVsFxyXG4gICAqL1xyXG4gIG15UGFya2luZyhkYXRhPzogYW55KTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm15UGFya2luZ01vZGVsKGRhdGEpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgcmVzdWx0LmRhdGEuZm9yRWFjaCgoZWxlbWVudDogeyBzdGF0dXM6IGFueTsgc3RhdGU6IGFueTsgb3BlblN0YXRlOiBhbnk7IHJlbnRhbDogYW55OyByZW50YWxDeWNsZTogYW55OyBlbmREYXRlOiBhbnk7IGJlZ2luRGF0ZTogYW55OyBsb2NrZXJJZDogc3RyaW5nOyBsb2NrZXJJZHM6IHN0cmluZyB9KSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3RhdHVzID0gb3BlblN0YXR1cyhlbGVtZW50LnN0YXRlLCBlbGVtZW50Lm9wZW5TdGF0ZSlcclxuICAgICAgICAgICAgZWxlbWVudC5yZW50YWwgPSByZXBlYXREZXNjKGVsZW1lbnQucmVudGFsQ3ljbGUpXHJcbiAgICAgICAgICAgIGVsZW1lbnQuZW5kRGF0ZSA9IGZvcm1hdE1pbnV0ZShlbGVtZW50LmVuZERhdGUpXHJcbiAgICAgICAgICAgIGVsZW1lbnQuYmVnaW5EYXRlID0gZm9ybWF0TWludXRlKGVsZW1lbnQuYmVnaW5EYXRlKVxyXG4gICAgICAgICAgICBlbGVtZW50LmxvY2tlcklkID0gYCoqKioke2VsZW1lbnQubG9ja2VySWRzLnN1YnN0cigtNCl9YFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog57yW6L6R5byA5pS+5pe25q615o6l5Y+jXHJcbiAgICogQHBhcmFtIHtQYXJraW5nVGltZU1vZGlmeX0gZGF0YSDor7fmsYLlj4LmlbBcclxuICAgKi9cclxuICBwYXJraW5nVGltZU1vZGlmeShkYXRhOiBQYXJraW5nVGltZU1vZGlmeSk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5wYXJraW5nVGltZU1vZGlmeU1vZGVsKGRhdGEpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICByZXNvbHZlKHsgLi4ucmVzdWx0IH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnvJbovpHlvIDmlL7ml7bmrrXmjqXlj6NcclxuICAgKiBAcGFyYW0ge01vZGlmeU9wZW5TdGF0ZX0gZGF0YSDor7fmsYLlj4LmlbBcclxuICAgKi9cclxuICBtb2RpZnlPcGVuU3RhdGUoZGF0YTogTW9kaWZ5T3BlblN0YXRlKTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlc3BvbnNlRGF0YTxNb2RpZnlPcGVuU3RhdGVSZXNwb25zZURhdGE+Pihhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RpZnlPcGVuU3RhdGVNb2RlbChkYXRhKVxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5qC55o2u6ZSBaWTmn6XovabkvY3lvIDmlL7ml7bpl7RcclxuICAgKiBAcGFyYW0ge0xvY2tEYXRlfSBkYXRhIOivt+axguWPguaVsFxyXG4gICAqL1xyXG4gIGxvY2tEYXRlKGRhdGE6IExvY2tEYXRlKTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlc3BvbnNlRGF0YTxMb2NrRGF0ZVJlc3BvbnNlRGF0YT4+KGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmxvY2tEYXRlTW9kZWwoZGF0YSlcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGNvbnN0IHJ1bHMgPSByZXN1bHQuZGF0YS50aXBJbmZvLnNwbGl0KC9cXGQvKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJ1bHMpXHJcbiAgICAgICAgcmVzdWx0LmRhdGEudGlwSW5mbyA9IHJ1bHNcclxuICAgICAgICByZXNvbHZlKHsgLi4ucmVzdWx0IH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmn6Xor6LpmYTov5HnmoTlsI/ljLpQT0lEXHJcbiAgICogQHBhcmFtIHtMaXN0RXN0YXRlRGltZW5zaW9ufSBkYXRhIOivt+axguWPguaVsFxyXG4gICAqL1xyXG4gIGxpc3RFc3RhdGVEaW1lbnNpb24oZGF0YTogTGlzdEVzdGF0ZURpbWVuc2lvbik6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZXNwb25zZURhdGE8TGlzdEVzdGF0ZURpbWVuc2lvblJlc3BvbnNlRGF0YT4+KGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmxpc3RFc3RhdGVEaW1lbnNpb25Nb2RlbChkYXRhKVxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ==