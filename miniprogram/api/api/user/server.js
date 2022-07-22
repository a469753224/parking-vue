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
var UserServer = (function (_super) {
    __extends(UserServer, _super);
    function UserServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserServer.prototype.addVehiclePlate = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.addVehiclePlateModel(data)];
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
    UserServer.prototype.setPlateDevault = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.setPlateDevaultModel(data)];
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
    UserServer.prototype.deletePlate = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.deletePlateModel(data)];
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
    UserServer.prototype.selectPlateAll = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result, data_1, defau_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.selectPlateAllModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            if (result.code == 0) {
                                data_1 = result.data;
                                defau_1 = {};
                                data_1.forEach(function (element) {
                                    if (element.status == 1) {
                                        defau_1 = element;
                                    }
                                    element.proCity = element.plate.substring(0, 2);
                                    element.number = element.plate.substring(2, element.plate.length);
                                });
                                data_1 = data_1.filter(function (element) {
                                    if (element.status == 1) {
                                        return false;
                                    }
                                    return true;
                                });
                                !util_1.isEmpty(defau_1) && data_1.unshift(defau_1);
                                result.data = data_1;
                            }
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    UserServer.prototype.myMenuInformation = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.myMenuInformationModel(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            result.data.totalBalance = util_1.formatMoney(result.data.totalBalance);
                            result.data.plate = result.data.plate == null ? '--' : result.data.plate;
                            resolve(__assign({}, result));
                        }
                        return [2];
                }
            });
        }); });
    };
    UserServer.prototype.modifyPassword = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modifyPasswordModel(data)];
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
    UserServer.prototype.modifyName = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modifyNameModel(data)];
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
    UserServer.prototype.forgetPasswordModify = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.forgetPasswordModifyModel(data)];
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
    return UserServer;
}(model_1.default));
exports.default = UserServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUNBQStCO0FBZ0IvQiw0Q0FBMEQ7QUFNMUQ7SUFBd0MsOEJBQVM7SUFBakQ7O0lBNkhBLENBQUM7SUF4SEMsb0NBQWUsR0FBZixVQUFnQixJQUFxQjtRQUFyQyxpQkFPQztRQU5DLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBTSxPQUFPOzs7OzRCQUNmLFdBQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBOUMsTUFBTSxHQUFHLFNBQXFDO3dCQUNwRCxJQUFJLE1BQU0sRUFBRTs0QkFDVixPQUFPLGNBQU0sTUFBTSxFQUFHLENBQUE7eUJBQ3ZCOzs7O2FBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1ELG9DQUFlLEdBQWYsVUFBZ0IsSUFBcUI7UUFBckMsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQU0sT0FBTzs7Ozs0QkFDZixXQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQTlDLE1BQU0sR0FBRyxTQUFxQzt3QkFDcEQsSUFBSSxNQUFNLEVBQUU7NEJBQ1YsT0FBTyxjQUFNLE1BQU0sRUFBRyxDQUFBO3lCQUN2Qjs7OzthQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFNRCxnQ0FBVyxHQUFYLFVBQVksSUFBaUI7UUFBN0IsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQU0sT0FBTzs7Ozs0QkFDZixXQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQTFDLE1BQU0sR0FBRyxTQUFpQzt3QkFDaEQsSUFBSSxNQUFNLEVBQUU7NEJBQ1YsT0FBTyxjQUFNLE1BQU0sRUFBRyxDQUFBO3lC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QkFDL0MsSUFBSSxNQUFNLEVBQUU7NEJBQ1YsT0FBTyxjQUFNLE1BQU0sRUFBRyxDQUFBO3lCQUN2Qjs7OzthQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFNRCx5Q0FBb0IsR0FBcEIsVUFBcUIsSUFBMEI7UUFBL0MsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQU0sT0FBTzs7Ozs0QkFDZixXQUFNLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQW5ELE1BQU0sR0FBRyxTQUEwQzt3QkFDekQsSUFBSSxNQUFNLEVBQUU7NEJBQ1YsT0FBTyxjQUFNLE1BQU0sRUFBRyxDQUFBO3lCQUN2Qjs7OzthQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUE3SEQsQ0FBd0MsZUFBUyxHQTZIaEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDlr7zlhaXmqKHlnovlsYIgKi9cclxuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuL21vZGVsJ1xyXG5cclxuLyog5a+85YWl6K+35rGC5Y+C5pWw5o6l5Y+jIFRT5o6l5Y+j57G75Z6LICovXHJcbmltcG9ydCB7XHJcbiAgQWRkVmVoaWNsZVBsYXRlLFxyXG4gIFNldFBsYXRlRGV2YXVsdCxcclxuICBEZWxldGVQbGF0ZSxcclxuICBNb2RpZnlQYXNzd29yZCxcclxuICBNb2RpZnlOYW1lLFxyXG4gIEZvcmdldFBhc3N3b3JkTW9kaWZ5XHJcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3JlcXVlc3RJbnRlcmZhY2UvdXNlcidcclxuXHJcbi8qIOWvvOWFpee9kee7nOivt+axguaOpeWPoyBUU+aOpeWPo+exu+WeiyAqL1xyXG5pbXBvcnQgeyBSZXF1ZXN0UHJvbWlzZSwgUmVzcG9uc2VEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvaHR0cCdcclxuXHJcbi8qIOWvvOWFpeW3peWFt+exuyAqL1xyXG5pbXBvcnQgeyBmb3JtYXRNb25leSwgaXNFbXB0eSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnXHJcbmltcG9ydCB7IE15TWVudUluZm9ybWF0aW9uUmVzcG9uc2VEYXRhLCBTZWxlY3RQbGF0ZUFsbFJlc3BvbnNlRGF0YSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9yZXNwb25zZUludGVyZmFjZS91c2VyJ1xyXG5cclxuLyoqXHJcbiAqIOiuouWNleaooeWdly3mnI3liqHlsYJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJTZXJ2ZXIgZXh0ZW5kcyBVc2VyTW9kZWwge1xyXG4gIC8qKlxyXG4gICAqIOa3u+WKoOi9pui+huaOpeWPo1xyXG4gICAqIEBwYXJhbSB7QWRkVmVoaWNsZVBsYXRlfSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICBhZGRWZWhpY2xlUGxhdGUoZGF0YTogQWRkVmVoaWNsZVBsYXRlKTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmFkZFZlaGljbGVQbGF0ZU1vZGVsKGRhdGEpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICByZXNvbHZlKHsgLi4ucmVzdWx0IH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDorr7nva7pu5jorqTovabovobmjqXlj6NcclxuICAgKiBAcGFyYW0ge1NldFBsYXRlRGV2YXVsdH0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgc2V0UGxhdGVEZXZhdWx0KGRhdGE6IFNldFBsYXRlRGV2YXVsdCk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zZXRQbGF0ZURldmF1bHRNb2RlbChkYXRhKVxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Yig6Zmk6L2m6L6G5o6l5Y+jXHJcbiAgICogQHBhcmFtIHtEZWxldGVQbGF0ZX0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgZGVsZXRlUGxhdGUoZGF0YTogRGVsZXRlUGxhdGUpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGVsZXRlUGxhdGVNb2RlbChkYXRhKVxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5p+l6K+i55So5oi35omA5pyJ6L2m6L6G5o6l5Y+jXHJcbiAgICogQHBhcmFtIHthbnl9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIHNlbGVjdFBsYXRlQWxsKGRhdGE/OiBhbnkpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVzcG9uc2VEYXRhPFNlbGVjdFBsYXRlQWxsUmVzcG9uc2VEYXRhPj4oYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlbGVjdFBsYXRlQWxsTW9kZWwoZGF0YSlcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICBsZXQgeyBkYXRhIH0gPSByZXN1bHRcclxuICAgICAgICAgIGxldCBkZWZhdSA9IHt9XHJcbiAgICAgICAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQ6IHsgc3RhdHVzPzogYW55OyBwcm9DaXR5PzogYW55OyBwbGF0ZT86IGFueTsgbnVtYmVyPzogYW55IH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RhdHVzID09IDEpIHtcclxuICAgICAgICAgICAgICBkZWZhdSA9IGVsZW1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbGVtZW50LnByb0NpdHkgPSBlbGVtZW50LnBsYXRlLnN1YnN0cmluZygwLCAyKVxyXG4gICAgICAgICAgICBlbGVtZW50Lm51bWJlciA9IGVsZW1lbnQucGxhdGUuc3Vic3RyaW5nKDIsIGVsZW1lbnQucGxhdGUubGVuZ3RoKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoZWxlbWVudDogeyBzdGF0dXM6IG51bWJlciB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXR1cyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAhaXNFbXB0eShkZWZhdSkgJiYgZGF0YS51bnNoaWZ0KGRlZmF1KVxyXG4gICAgICAgICAgcmVzdWx0LmRhdGEgPSBkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmUoeyAuLi5yZXN1bHQgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaIkeeahOWvvOiIquagj+S/oeaBr+aOpeWPo1xyXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICBteU1lbnVJbmZvcm1hdGlvbihkYXRhPzogYW55KTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlc3BvbnNlRGF0YTxNeU1lbnVJbmZvcm1hdGlvblJlc3BvbnNlRGF0YT4+KGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm15TWVudUluZm9ybWF0aW9uTW9kZWwoZGF0YSlcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJlc3VsdC5kYXRhLnRvdGFsQmFsYW5jZSA9IGZvcm1hdE1vbmV5KHJlc3VsdC5kYXRhLnRvdGFsQmFsYW5jZSlcclxuICAgICAgICByZXN1bHQuZGF0YS5wbGF0ZSA9IHJlc3VsdC5kYXRhLnBsYXRlID09IG51bGwgPyAnLS0nIDogcmVzdWx0LmRhdGEucGxhdGVcclxuICAgICAgICByZXNvbHZlKHsgLi4ucmVzdWx0IH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDkv67mlLnlr4bnoIHmjqXlj6NcclxuICAgKiBAcGFyYW0ge01vZGlmeVBhc3N3b3JkfSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICBtb2RpZnlQYXNzd29yZChkYXRhOiBNb2RpZnlQYXNzd29yZCk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RpZnlQYXNzd29yZE1vZGVsKGRhdGEpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICByZXNvbHZlKHsgLi4ucmVzdWx0IH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDkv67mlLnmmLXnp7BcclxuICAgKiBAcGFyYW0ge01vZGlmeU5hbWV9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIG1vZGlmeU5hbWUoZGF0YTogTW9kaWZ5TmFtZSk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tb2RpZnlOYW1lTW9kZWwoZGF0YSlcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJlc29sdmUoeyAuLi5yZXN1bHQgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOS/ruaUueaYteensFxyXG4gICAqIEBwYXJhbSB7Rm9yZ2V0UGFzc3dvcmRNb2RpZnl9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIGZvcmdldFBhc3N3b3JkTW9kaWZ5KGRhdGE6IEZvcmdldFBhc3N3b3JkTW9kaWZ5KTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmZvcmdldFBhc3N3b3JkTW9kaWZ5TW9kZWwoZGF0YSlcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJlc29sdmUoeyAuLi5yZXN1bHQgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn0iXX0=