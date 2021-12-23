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
var status_1 = require("../../../utils/status");
var util_1 = require("../../../utils/util");
var ApplayServer = (function (_super) {
    __extends(ApplayServer, _super);
    function ApplayServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplayServer.prototype.applicationsplace = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.applicationsplaceModel(data)];
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
    ApplayServer.prototype.cancelplace = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.cancelplaceModel(data)];
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
    ApplayServer.prototype.checkplace = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.checkplaceModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            if (result.code == 0) {
                                result.data.forEach(function (element) {
                                    element.state = status_1.releaseState(element.releaseState);
                                    element.createDate = util_1.formatDate(element.createDate, '/');
                                });
                            }
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    ApplayServer.prototype.placeDelete = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.placeDeleteModel(data)];
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
    ApplayServer.prototype.wxplace = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.wxplaceModel(data)];
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
    return ApplayServer;
}(model_1.default));
exports.default = ApplayServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUNBQWlDO0FBY2pDLGdEQUFvRDtBQUNwRCw0Q0FBZ0Q7QUFNaEQ7SUFBMEMsZ0NBQVc7SUFBckQ7O0lBdUVBLENBQUM7SUFsRUMsd0NBQWlCLEdBQWpCLFVBQWtCLElBQXVCO1FBQXpDLGlCQU9DO1FBTkMsT0FBTyxJQUFJLE9BQU8sQ0FBOEMsVUFBTSxPQUFPOzs7OzRCQUM1RCxXQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQWhELE1BQU0sR0FBRyxTQUF1Qzt3QkFDdEQsSUFBSSxNQUFNLEVBQUU7NEJBQ1YsT0FBTyxjQUFNLE1BQU0sRUFBRyxDQUFBO3lCQUN2Qjs7OzthQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFNRCxrQ0FBVyxHQUFYLFVBQVksSUFBaUI7UUFBN0IsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQU0sT0FBTzs7Ozs0QkFDZixXQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQTFDLE1BQU0sR0FBRyxTQUFpQzt3QkFDaEQsSUFBSSxNQUFNLEVBQUU7NEJBQ1YsT0FBTyxjQUFNLE1BQU0sRUFBRyxDQUFBO3lCQUN2Qjs7OzthQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFNRCxpQ0FBVSxHQUFWLFVBQVcsSUFBVTtRQUFyQixpQkFhQztRQVpDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBTSxPQUFPOzs7OzRCQUNmLFdBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQXpDLE1BQU0sR0FBRyxTQUFnQzt3QkFDL0MsSUFBSSxNQUFNLEVBQUU7NEJBQ1YsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtnQ0FDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUEyRDtvQ0FDOUUsT0FBTyxDQUFDLEtBQUssR0FBRyxxQkFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQTtvQ0FDbEQsT0FBTyxDQUFDLFVBQVUsR0FBRyxpQkFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUE7Z0NBQzFELENBQUMsQ0FBQyxDQUFBOzZCQUNIOzRCQUNELE9BQU8sY0FBTSxNQUFNLEVBQUcsQ0FBQTt5QkFDdkI7Ozs7YUFDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBTUQsa0NBQVcsR0FBWCxVQUFZLElBQWlCO1FBQTdCLGlCQU9DO1FBTkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFNLE9BQU87Ozs7NEJBQ2YsV0FBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUExQyxNQUFNLEdBQUcsU0FBaUM7d0JBQ2hELElBQUksTUFBTSxFQUFFOzRCQUNWLE9BQU8sY0FBTSxNQUFNLEVBQUcsQ0FBQTt5QkFDdkI7Ozs7YUFDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBTUQsOEJBQU8sR0FBUCxVQUFRLElBQWE7UUFBckIsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQU0sT0FBTzs7Ozs0QkFDZixXQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUF0QyxNQUFNLEdBQUcsU0FBNkI7d0JBQzVDLElBQUksTUFBTSxFQUFFOzRCQUNWLE9BQU8sY0FBTSxNQUFNLEVBQUcsQ0FBQTt5QkFDdkI7Ozs7YUFDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBdkVELENBQTBDLGVBQVcsR0F1RXBEIiwic291cmNlc0NvbnRlbnQiOlsiLyog5a+85YWl5qih5Z6L5bGCICovXHJcbmltcG9ydCBBcHBsYXlNb2RlbCBmcm9tICcuL21vZGVsJ1xyXG5cclxuLyog5a+85YWl6K+35rGC5Y+C5pWw5o6l5Y+jIFRT5o6l5Y+j57G75Z6LICovXHJcbmltcG9ydCB7XHJcbiAgQXBwbGljYXRpb25zcGxhY2UsXHJcbiAgV3hwbGFjZSxcclxuICBDYW5jZWxwbGFjZSxcclxuICBQbGFjZURlbGV0ZVxyXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZS9yZXF1ZXN0SW50ZXJmYWNlL2FwcGx5J1xyXG5cclxuLyog5a+85YWl572R57uc6K+35rGC5o6l5Y+jIFRT5o6l5Y+j57G75Z6LICovXHJcbmltcG9ydCB7IFJlcXVlc3RQcm9taXNlLFJlc3BvbnNlRGF0YSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2h0dHAnXHJcblxyXG4vKiDlr7zlhaXlt6XlhbfnsbsgKi9cclxuaW1wb3J0IHsgcmVsZWFzZVN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvc3RhdHVzJ1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCdcclxuaW1wb3J0IHsgQXBwbGljYXRpb25zcGxhY2VSZXNwb25zZURhdGEgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvcmVzcG9uc2VJbnRlcmZhY2UvYXBwbHknXHJcblxyXG4vKipcclxuICog5Y+R5biD5qih5Z2XLeacjeWKoeWxglxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwbGF5U2VydmVyIGV4dGVuZHMgQXBwbGF5TW9kZWwge1xyXG4gIC8qKlxyXG4gICAqIOeUs+ivt+WPkeW4g+i9puS9jeaOpeWPo1xyXG4gICAqIEBwYXJhbSB7QXBwbGljYXRpb25zcGxhY2V9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIGFwcGxpY2F0aW9uc3BsYWNlKGRhdGE6IEFwcGxpY2F0aW9uc3BsYWNlKTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlc3BvbnNlRGF0YTxBcHBsaWNhdGlvbnNwbGFjZVJlc3BvbnNlRGF0YT4+KGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmFwcGxpY2F0aW9uc3BsYWNlTW9kZWwoZGF0YSlcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJlc29sdmUoeyAuLi5yZXN1bHQgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWPlua2iOWPkeW4g+eUs+ivt+aOpeWPo1xyXG4gICAqIEBwYXJhbSB7Q2FuY2VscGxhY2V9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIGNhbmNlbHBsYWNlKGRhdGE6IENhbmNlbHBsYWNlKTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmNhbmNlbHBsYWNlTW9kZWwoZGF0YSlcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJlc29sdmUoeyAuLi5yZXN1bHQgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOafpeeci+aJgOacieeUs+ivt+WPkeW4g+aOpeWPo1xyXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICBjaGVja3BsYWNlKGRhdGE/OiBhbnkpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuY2hlY2twbGFjZU1vZGVsKGRhdGEpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgcmVzdWx0LmRhdGEuZm9yRWFjaCgoZWxlbWVudDogeyBzdGF0ZTogYW55OyByZWxlYXNlU3RhdGU6IGFueTsgY3JlYXRlRGF0ZTogYW55IH0pID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdGF0ZSA9IHJlbGVhc2VTdGF0ZShlbGVtZW50LnJlbGVhc2VTdGF0ZSlcclxuICAgICAgICAgICAgZWxlbWVudC5jcmVhdGVEYXRlID0gZm9ybWF0RGF0ZShlbGVtZW50LmNyZWF0ZURhdGUsICcvJylcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmUoeyAuLi5yZXN1bHQgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWIoOmZpOWPkeW4g+eUs+ivt+aOpeWPo1xyXG4gICAqIEBwYXJhbSB7UGxhY2VEZWxldGV9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIHBsYWNlRGVsZXRlKGRhdGE6IFBsYWNlRGVsZXRlKTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnBsYWNlRGVsZXRlTW9kZWwoZGF0YSlcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJlc29sdmUoeyAuLi5yZXN1bHQgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWPkeW4g+i9puS9jVxyXG4gICAqIEBwYXJhbSB7V3hwbGFjZX0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgd3hwbGFjZShkYXRhOiBXeHBsYWNlKTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnd4cGxhY2VNb2RlbChkYXRhKVxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufSJdfQ==