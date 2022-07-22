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
var CouponSercver = (function (_super) {
    __extends(CouponSercver, _super);
    function CouponSercver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CouponSercver.prototype.leadCoupon = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.leadCouponModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            if (result.code == 0) {
                                result.data.forEach(function (element) {
                                    element.state = 1;
                                    element.receive = 0;
                                    element.couponType = element.type;
                                    var type = element.type, withAmount = element.withAmount, usedAmount = element.usedAmount;
                                    element.endTime = util_1.formatDates(element.validEndTime);
                                    element.beginTime = util_1.formatDates(element.validStartTime);
                                    element.used = status_1.couponStatus(type, withAmount, usedAmount);
                                });
                            }
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    CouponSercver.prototype.listUserCoupon = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.listUserCouponModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            if (result.code == 0) {
                                result.data.forEach(function (element) {
                                    element.receive = 0;
                                    element.couponType = element.type;
                                    var type = element.type, withAmount = element.withAmount, usedAmount = element.usedAmount, validEndTime = element.validEndTime, validStartTime = element.validStartTime;
                                    element.endTime = util_1.formatDates(validEndTime);
                                    element.beginTime = util_1.formatDates(validStartTime);
                                    element.used = status_1.couponStatus(type, withAmount, usedAmount);
                                });
                            }
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    CouponSercver.prototype.receiveCoupon = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.receiveCouponModel(data)];
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
    CouponSercver.prototype.useCoupon = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.useCouponModel(data)];
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
    CouponSercver.prototype.getCouponUserById = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result, _a, type, withAmount, usedAmount, validEndTime, validStartTime;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, this.getCouponUserByIdModel(data)];
                    case 1:
                        result = _b.sent();
                        if (result) {
                            if (result.code == 0) {
                                result.data.receive = 0;
                                result.data.couponType = result.data.type;
                                _a = result.data, type = _a.type, withAmount = _a.withAmount, usedAmount = _a.usedAmount, validEndTime = _a.validEndTime, validStartTime = _a.validStartTime;
                                result.data.endTime = util_1.formatDates(validEndTime);
                                result.data.beginTime = util_1.formatDates(validStartTime);
                                result.data.used = status_1.couponStatus(type, withAmount, usedAmount);
                            }
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    CouponSercver.prototype.listUPC = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.listUPC(data)];
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
    CouponSercver.prototype.getActingUPC = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getActingUPCModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            result.data.forEach(function (element) {
                                Object.assign(element, { days: 0 });
                                element.days = util_1.daysRemain(element.endTime);
                                element.allowance = util_1.formatMoney(element.allowance);
                            });
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    return CouponSercver;
}(model_1.default));
exports.default = CouponSercver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUNBQWlDO0FBY2pDLDRDQUEwRTtBQUcxRSxnREFBb0Q7QUFNcEQ7SUFBMkMsaUNBQVc7SUFBdEQ7O0lBNkhBLENBQUM7SUF4SEMsa0NBQVUsR0FBVixVQUFXLElBQVU7UUFBckIsaUJBa0JDO1FBakJDLE9BQU8sSUFBSSxPQUFPLENBQXVDLFVBQU0sT0FBTzs7Ozs0QkFDckQsV0FBTSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBekMsTUFBTSxHQUFHLFNBQWdDO3dCQUMvQyxJQUFJLE1BQU0sRUFBRTs0QkFDVixJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO2dDQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQThMO29DQUNqTixPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtvQ0FDakIsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUE7b0NBQ25CLE9BQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztvQ0FDNUIsSUFBQSxJQUFJLEdBQTZCLE9BQU8sS0FBcEMsRUFBRSxVQUFVLEdBQWlCLE9BQU8sV0FBeEIsRUFBRSxVQUFVLEdBQUssT0FBTyxXQUFaLENBQVk7b0NBQzlDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsa0JBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7b0NBQ25ELE9BQU8sQ0FBQyxTQUFTLEdBQUcsa0JBQVcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7b0NBQ3ZELE9BQU8sQ0FBQyxJQUFJLEdBQUcscUJBQVksQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFBO2dDQUMzRCxDQUFDLENBQUMsQ0FBQTs2QkFDSDs0QkFDRCxPQUFPLGNBQU0sTUFBTSxFQUFHLENBQUE7eUJBQ3ZCOzs7O2FBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1ELHNDQUFjLEdBQWQsVUFBZSxJQUFVO1FBQXpCLGlCQWlCQztRQWhCQyxPQUFPLElBQUksT0FBTyxDQUEyQyxVQUFNLE9BQU87Ozs7NEJBQ3pELFdBQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBN0MsTUFBTSxHQUFHLFNBQW9DO3dCQUNuRCxJQUFJLE1BQU0sRUFBRTs0QkFDVixJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO2dDQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQStMO29DQUNsTixPQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtvQ0FDbkIsT0FBTyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO29DQUM1QixJQUFBLElBQUksR0FBMkQsT0FBTyxLQUFsRSxFQUFFLFVBQVUsR0FBK0MsT0FBTyxXQUF0RCxFQUFFLFVBQVUsR0FBbUMsT0FBTyxXQUExQyxFQUFFLFlBQVksR0FBcUIsT0FBTyxhQUE1QixFQUFFLGNBQWMsR0FBSyxPQUFPLGVBQVosQ0FBWTtvQ0FDNUUsT0FBTyxDQUFDLE9BQU8sR0FBRyxrQkFBVyxDQUFDLFlBQVksQ0FBQyxDQUFBO29DQUMzQyxPQUFPLENBQUMsU0FBUyxHQUFHLGtCQUFXLENBQUMsY0FBYyxDQUFDLENBQUE7b0NBQy9DLE9BQU8sQ0FBQyxJQUFJLEdBQUcscUJBQVksQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFBO2dDQUMzRCxDQUFDLENBQUMsQ0FBQTs2QkFDSDs0QkFDRCxPQUFPLGNBQU0sTUFBTSxFQUFHLENBQUE7eUJBQ3ZCOzs7O2FBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1ELHFDQUFhLEdBQWIsVUFBYyxJQUFtQjtRQUFqQyxpQkFPQztRQU5DLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBTSxPQUFPOzs7OzRCQUNmLFdBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBNUMsTUFBTSxHQUFHLFNBQW1DO3dCQUNsRCxJQUFJLE1BQU0sRUFBRTs0QkFDVixPQUFPLGNBQU0sTUFBTSxFQUFHLENBQUE7eUJBQ3ZCOzs7O2FBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1ELGlDQUFTLEdBQVQsVUFBVSxJQUFlO1FBQXpCLGlCQU9DO1FBTkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFNLE9BQU87Ozs7NEJBQ2YsV0FBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBeEMsTUFBTSxHQUFHLFNBQStCO3dCQUM5QyxJQUFJLE1BQU0sRUFBRTs0QkFDVixPQUFPLGNBQU0sTUFBTSxFQUFHLENBQUE7eUJBQ3ZCOzs7O2FBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1ELHlDQUFpQixHQUFqQixVQUFrQixJQUF1QjtRQUF6QyxpQkFlQztRQWRDLE9BQU8sSUFBSSxPQUFPLENBQThDLFVBQU0sT0FBTzs7Ozs0QkFDNUQsV0FBTSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUFoRCxNQUFNLEdBQUcsU0FBdUM7d0JBQ3RELElBQUksTUFBTSxFQUFFOzRCQUNWLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7Z0NBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtnQ0FDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0NBQ3RDLEtBQWlFLE1BQU0sQ0FBQyxJQUFJLEVBQTFFLElBQUksVUFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxVQUFVLGdCQUFBLEVBQUUsWUFBWSxrQkFBQSxFQUFFLGNBQWMsb0JBQUEsQ0FBZ0I7Z0NBQ2hGLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLGtCQUFXLENBQUMsWUFBWSxDQUFDLENBQUE7Z0NBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFXLENBQUMsY0FBYyxDQUFDLENBQUE7Z0NBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFZLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQTs2QkFDOUQ7NEJBQ0QsT0FBTyxjQUFNLE1BQU0sRUFBRyxDQUFBO3lCQUN2Qjs7OzthQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFNRCwrQkFBTyxHQUFQLFVBQVEsSUFBYTtRQUFyQixpQkFPQztRQU5DLE9BQU8sSUFBSSxPQUFPLENBQW9DLFVBQU0sT0FBTzs7Ozs0QkFDbEQsV0FBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBakMsTUFBTSxHQUFHLFNBQXdCO3dCQUN2QyxJQUFJLE1BQU0sRUFBRTs0QkFDVixPQUFPLGNBQU0sTUFBTSxFQUFHLENBQUE7eUJBQ3ZCOzs7O2FBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1ELG9DQUFZLEdBQVosVUFBZ0IsSUFBVTtRQUExQixpQkFZQztRQVhDLE9BQU8sSUFBSSxPQUFPLENBQWtCLFVBQU0sT0FBTzs7Ozs0QkFDaEMsV0FBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUEzQyxNQUFNLEdBQUcsU0FBa0M7d0JBQ2pELElBQUksTUFBTSxFQUFFOzRCQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBMEQ7Z0NBQzdFLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7Z0NBQ25DLE9BQU8sQ0FBQyxJQUFJLEdBQUcsaUJBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7Z0NBQzFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsa0JBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7NEJBQ3BELENBQUMsQ0FBQyxDQUFBOzRCQUNGLE9BQU8sY0FBTSxNQUFNLEVBQUcsQ0FBQTt5QkFDdkI7Ozs7YUFDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBN0hELENBQTJDLGVBQVcsR0E2SHJEIiwic291cmNlc0NvbnRlbnQiOlsiLyog5a+85YWl5qih5Z6L5bGCICovXHJcbmltcG9ydCBDb3Vwb25Nb2RlbCBmcm9tICcuL21vZGVsJ1xyXG5cclxuLyog5a+85YWl6K+35rGC5Y+C5pWw5o6l5Y+jIFRT5o6l5Y+j57G75Z6LICovXHJcbmltcG9ydCB7XHJcbiAgUmVjZWl2ZUNvdXBvbixcclxuICBVc2VDb3Vwb24sXHJcbiAgR2V0Q291cG9uVXNlckJ5SWQsXHJcbiAgTGlzdFVQQ1xyXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZS9yZXF1ZXN0SW50ZXJmYWNlL2NvdXBvbidcclxuXHJcbi8qIOWvvOWFpee9kee7nOivt+axguaOpeWPoyBUU+aOpeWPo+exu+WeiyAqL1xyXG5pbXBvcnQgeyBSZXF1ZXN0UHJvbWlzZSwgUmVzcG9uc2VEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvaHR0cCdcclxuXHJcbi8qIOWvvOWFpeW3peWFt+exuyAqL1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlcywgZGF5c1JlbWFpbiwgZm9ybWF0TW9uZXkgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJ1xyXG5cclxuLyog5LyY5oOg5Yi454q25oCBICovXHJcbmltcG9ydCB7IGNvdXBvblN0YXR1cyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3N0YXR1cydcclxuaW1wb3J0IHsgR2V0Q291cG9uVXNlckJ5SWRSZXNwb25zZURhdGEsIExlYWRDb3Vwb25SZXNwb25zZURhdGEsIExpc3RVUENSZXNwb25zZURhdGEsIExpc3RVc2VyQ291cG9uUmVzcG9uc2VEYXRhIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3Jlc3BvbnNlSW50ZXJmYWNlL2NvdXBvbidcclxuXHJcbi8qKlxyXG4gKiDkvJjmg6DliLjmqKHlnZct5pyN5Yqh5bGCXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3Vwb25TZXJjdmVyIGV4dGVuZHMgQ291cG9uTW9kZWwge1xyXG4gIC8qKlxyXG4gICAqIOafpeivouWVhuWutuS8mOaDoOWKteW+hemihuWPluaOpeWPo1xyXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICBsZWFkQ291cG9uKGRhdGE/OiBhbnkpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVzcG9uc2VEYXRhPExlYWRDb3Vwb25SZXNwb25zZURhdGE+Pihhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5sZWFkQ291cG9uTW9kZWwoZGF0YSlcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICByZXN1bHQuZGF0YS5mb3JFYWNoKChlbGVtZW50OiB7IHN0YXRlPzogYW55OyByZWNlaXZlPzogYW55OyBjb3Vwb25UeXBlPzogYW55OyB0eXBlOiBhbnk7IGVuZFRpbWU/OiBhbnk7IHZhbGlkRW5kVGltZT86IGFueTsgYmVnaW5UaW1lPzogYW55OyB2YWxpZFN0YXJ0VGltZT86IGFueTsgdXNlZD86IGFueTsgd2l0aEFtb3VudD86IGFueTsgdXNlZEFtb3VudD86IGFueSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3RhdGUgPSAxXHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVjZWl2ZSA9IDBcclxuICAgICAgICAgICAgZWxlbWVudC5jb3Vwb25UeXBlID0gZWxlbWVudC50eXBlO1xyXG4gICAgICAgICAgICBsZXQgeyB0eXBlLCB3aXRoQW1vdW50LCB1c2VkQW1vdW50IH0gPSBlbGVtZW50XHJcbiAgICAgICAgICAgIGVsZW1lbnQuZW5kVGltZSA9IGZvcm1hdERhdGVzKGVsZW1lbnQudmFsaWRFbmRUaW1lKVxyXG4gICAgICAgICAgICBlbGVtZW50LmJlZ2luVGltZSA9IGZvcm1hdERhdGVzKGVsZW1lbnQudmFsaWRTdGFydFRpbWUpXHJcbiAgICAgICAgICAgIGVsZW1lbnQudXNlZCA9IGNvdXBvblN0YXR1cyh0eXBlLCB3aXRoQW1vdW50LCB1c2VkQW1vdW50KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi35p+l6K+i6Ieq5bex5piv5ZCm5pyJ5LyY5oOg5Yq1XHJcbiAgICogQHBhcmFtIHthbnl9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIGxpc3RVc2VyQ291cG9uKGRhdGE/OiBhbnkpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVzcG9uc2VEYXRhPExpc3RVc2VyQ291cG9uUmVzcG9uc2VEYXRhPj4oYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubGlzdFVzZXJDb3Vwb25Nb2RlbChkYXRhKVxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDApIHtcclxuICAgICAgICAgIHJlc3VsdC5kYXRhLmZvckVhY2goKGVsZW1lbnQ6IHsgc3RhdGU6IG51bWJlcixyZWNlaXZlPzogYW55OyBjb3Vwb25UeXBlPzogYW55OyB0eXBlOiBhbnk7IGVuZFRpbWU/OiBhbnk7IHZhbGlkRW5kVGltZT86IGFueTsgYmVnaW5UaW1lPzogYW55OyB2YWxpZFN0YXJ0VGltZT86IGFueTsgdXNlZD86IGFueTsgd2l0aEFtb3VudD86IGFueTsgdXNlZEFtb3VudD86IGFueSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVjZWl2ZSA9IDBcclxuICAgICAgICAgICAgZWxlbWVudC5jb3Vwb25UeXBlID0gZWxlbWVudC50eXBlO1xyXG4gICAgICAgICAgICBsZXQgeyB0eXBlLCB3aXRoQW1vdW50LCB1c2VkQW1vdW50LCB2YWxpZEVuZFRpbWUsIHZhbGlkU3RhcnRUaW1lIH0gPSBlbGVtZW50XHJcbiAgICAgICAgICAgIGVsZW1lbnQuZW5kVGltZSA9IGZvcm1hdERhdGVzKHZhbGlkRW5kVGltZSlcclxuICAgICAgICAgICAgZWxlbWVudC5iZWdpblRpbWUgPSBmb3JtYXREYXRlcyh2YWxpZFN0YXJ0VGltZSlcclxuICAgICAgICAgICAgZWxlbWVudC51c2VkID0gY291cG9uU3RhdHVzKHR5cGUsIHdpdGhBbW91bnQsIHVzZWRBbW91bnQpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXNvbHZlKHsgLi4ucmVzdWx0IH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDpooblj5bkvJjmg6DlirXmjqXlj6NcclxuICAgKiBAcGFyYW0ge1JlY2VpdmVDb3Vwb259IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIHJlY2VpdmVDb3Vwb24oZGF0YTogUmVjZWl2ZUNvdXBvbik6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZWNlaXZlQ291cG9uTW9kZWwoZGF0YSlcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJlc29sdmUoeyAuLi5yZXN1bHQgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOeUqOaIt+S9v+eUqOS8mOaDoOWKteaOpeWPo1xyXG4gICAqIEBwYXJhbSB7VXNlQ291cG9ufSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICB1c2VDb3Vwb24oZGF0YTogVXNlQ291cG9uKTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnVzZUNvdXBvbk1vZGVsKGRhdGEpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICByZXNvbHZlKHsgLi4ucmVzdWx0IH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDkvJjmg6DliLjor6bmg4VcclxuICAgKiBAcGFyYW0ge0dldENvdXBvblVzZXJCeUlkfSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICBnZXRDb3Vwb25Vc2VyQnlJZChkYXRhOiBHZXRDb3Vwb25Vc2VyQnlJZCk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZXNwb25zZURhdGE8R2V0Q291cG9uVXNlckJ5SWRSZXNwb25zZURhdGE+Pihhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5nZXRDb3Vwb25Vc2VyQnlJZE1vZGVsKGRhdGEpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgcmVzdWx0LmRhdGEucmVjZWl2ZSA9IDBcclxuICAgICAgICAgIHJlc3VsdC5kYXRhLmNvdXBvblR5cGUgPSByZXN1bHQuZGF0YS50eXBlO1xyXG4gICAgICAgICAgbGV0IHsgdHlwZSwgd2l0aEFtb3VudCwgdXNlZEFtb3VudCwgdmFsaWRFbmRUaW1lLCB2YWxpZFN0YXJ0VGltZSB9ID0gcmVzdWx0LmRhdGFcclxuICAgICAgICAgIHJlc3VsdC5kYXRhLmVuZFRpbWUgPSBmb3JtYXREYXRlcyh2YWxpZEVuZFRpbWUpXHJcbiAgICAgICAgICByZXN1bHQuZGF0YS5iZWdpblRpbWUgPSBmb3JtYXREYXRlcyh2YWxpZFN0YXJ0VGltZSlcclxuICAgICAgICAgIHJlc3VsdC5kYXRhLnVzZWQgPSBjb3Vwb25TdGF0dXModHlwZSwgd2l0aEFtb3VudCwgdXNlZEFtb3VudClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5qC55o2u54q25oCB6I635Y+W5YGc6L2m5Y2hXHJcbiAgICogQHBhcmFtIHtMaXN0VVBDfSBkYXRhIOivt+axguWPguaVsFxyXG4gICAqL1xyXG4gIGxpc3RVUEMoZGF0YTogTGlzdFVQQyk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZXNwb25zZURhdGE8TGlzdFVQQ1Jlc3BvbnNlRGF0YT4+KGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmxpc3RVUEMoZGF0YSlcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJlc29sdmUoeyAuLi5yZXN1bHQgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPlueUn+aViOS4reeahOWBnOi9puWIuFxyXG4gICAqIEBwYXJhbSB7R2V0QWN0aW5nVVBDfSBkYXRhIOivt+axguWPguaVsFxyXG4gICAqL1xyXG4gIGdldEFjdGluZ1VQQzxUPihkYXRhPzogYW55KTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlc3BvbnNlRGF0YTxUPj4oYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZ2V0QWN0aW5nVVBDTW9kZWwoZGF0YSlcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJlc3VsdC5kYXRhLmZvckVhY2goKGVsZW1lbnQ6IHsgZGF5czogbnVtYmVyOyBlbmRUaW1lOiBzdHJpbmcsIGFsbG93YW5jZTogYW55IH0pID0+IHtcclxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudCwgeyBkYXlzOiAwIH0pXHJcbiAgICAgICAgICBlbGVtZW50LmRheXMgPSBkYXlzUmVtYWluKGVsZW1lbnQuZW5kVGltZSlcclxuICAgICAgICAgIGVsZW1lbnQuYWxsb3dhbmNlID0gZm9ybWF0TW9uZXkoZWxlbWVudC5hbGxvd2FuY2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXNvbHZlKHsgLi4ucmVzdWx0IH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59Il19