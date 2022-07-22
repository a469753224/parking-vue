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
var SigupServer = (function (_super) {
    __extends(SigupServer, _super);
    function SigupServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SigupServer.prototype.account = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.loginModel(data)];
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
    SigupServer.prototype.msgLogin = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.msgLoginModel(data)];
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
    SigupServer.prototype.userRegister = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.userRegisterModel(data)];
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
    SigupServer.prototype.wxlogin = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                wx.login({
                    timeout: 10000,
                    success: function (res) { return __awaiter(_this, void 0, void 0, function () {
                        var code, param, result, token, phoneState, param_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!res.code) return [3, 2];
                                    code = res.code;
                                    param = __assign({ code: code }, data);
                                    wx.setStorageSync('code', res.code);
                                    return [4, this.wxloginModel(param)];
                                case 1:
                                    result = _a.sent();
                                    if (result) {
                                        if (result.code == 0) {
                                            token = result.token, phoneState = result.phoneState;
                                            param_1 = { token: token, phoneState: phoneState };
                                            util_1.setStorages(param_1);
                                        }
                                        resolve(__assign({}, result));
                                    }
                                    _a.label = 2;
                                case 2: return [2];
                            }
                        });
                    }); }
                });
                return [2];
            });
        }); });
    };
    SigupServer.prototype.bindPhone = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.bindPhoneModel(data)];
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
    SigupServer.prototype.loginout = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.loginoutModel()];
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
    SigupServer.prototype.getPhoneNumber = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getPhoneNumberModel(data)];
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
    return SigupServer;
}(model_1.default));
exports.default = SigupServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUNBQWdDO0FBaUJoQyw0Q0FBaUQ7QUFLakQ7SUFBeUMsK0JBQVU7SUFBbkQ7O0lBNEdBLENBQUM7SUF0R0MsNkJBQU8sR0FBUCxVQUFRLElBQWE7UUFBckIsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQU0sT0FBTzs7Ozs0QkFDZixXQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUFwQyxNQUFNLEdBQUcsU0FBMkI7d0JBQzFDLElBQUksTUFBTSxFQUFFOzRCQUNWLE9BQU8sY0FBTSxNQUFNLEVBQUcsQ0FBQTt5QkFDdkI7Ozs7YUFDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBTUQsOEJBQVEsR0FBUixVQUFTLElBQWM7UUFBdkIsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQU0sT0FBTzs7Ozs0QkFDZixXQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUF2QyxNQUFNLEdBQUcsU0FBOEI7d0JBQzdDLElBQUksTUFBTSxFQUFFOzRCQUNWLE9BQU8sY0FBTSxNQUFNLEVBQUcsQ0FBQTt5QkFDdkI7Ozs7YUFDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBTUQsa0NBQVksR0FBWixVQUFhLElBQWtCO1FBQS9CLGlCQU9DO1FBTkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFNLE9BQU87Ozs7NEJBQ2YsV0FBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUEzQyxNQUFNLEdBQUcsU0FBa0M7d0JBQ2pELElBQUksTUFBTSxFQUFFOzRCQUNWLE9BQU8sY0FBTSxNQUFNLEVBQUcsQ0FBQTt5QkFDdkI7Ozs7YUFDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBT0QsNkJBQU8sR0FBUCxVQUFRLElBQVM7UUFBakIsaUJBc0JDO1FBckJDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBTSxPQUFPOzs7Z0JBQzlCLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0JBQ1AsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLFVBQU0sR0FBRzs7Ozs7eUNBQ1osR0FBRyxDQUFDLElBQUksRUFBUixjQUFRO29DQUNOLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFBO29DQUNiLEtBQUssY0FBSyxJQUFJLE1BQUEsSUFBSyxJQUFJLENBQUUsQ0FBQTtvQ0FDL0IsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO29DQUNwQixXQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUE7O29DQUF2QyxNQUFNLEdBQUcsU0FBOEI7b0NBQzdDLElBQUksTUFBTSxFQUFFO3dDQUNWLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7NENBQ2QsS0FBSyxHQUFpQixNQUFNLE1BQXZCLEVBQUUsVUFBVSxHQUFLLE1BQU0sV0FBWCxDQUFXOzRDQUM1QixVQUFRLEVBQUUsS0FBSyxPQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsQ0FBQTs0Q0FDbkMsa0JBQVcsQ0FBQyxPQUFLLENBQUMsQ0FBQTt5Q0FDbkI7d0NBQ0QsT0FBTyxjQUFNLE1BQU0sRUFBRyxDQUFBO3FDQUN2Qjs7Ozs7eUJBRUo7aUJBQ0YsQ0FBQyxDQUFBOzs7YUFDSCxDQUFDLENBQUE7SUFDSixDQUFDO0lBTUQsK0JBQVMsR0FBVCxVQUFVLElBQWU7UUFBekIsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQU0sT0FBTzs7Ozs0QkFDZixXQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUF4QyxNQUFNLEdBQUcsU0FBK0I7d0JBQzlDLElBQUksTUFBTSxFQUFFOzRCQUNWLE9BQU8sY0FBTSxNQUFNLEVBQUcsQ0FBQTt5QkFDdkI7Ozs7YUFDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsOEJBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFNLE9BQU87Ozs7NEJBQ2YsV0FBTSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUE7O3dCQUFuQyxNQUFNLEdBQUcsU0FBMEI7d0JBQ3pDLElBQUksTUFBTSxFQUFFOzRCQUNWLE9BQU8sY0FBTSxNQUFNLEVBQUcsQ0FBQTt5QkFDdkI7Ozs7YUFDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBTUQsb0NBQWMsR0FBZCxVQUFlLElBQW9CO1FBQW5DLGlCQU9DO1FBTkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFNLE9BQU87Ozs7NEJBQ2YsV0FBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUE3QyxNQUFNLEdBQUcsU0FBb0M7d0JBQ25ELElBQUksTUFBTSxFQUFFOzRCQUNWLE9BQU8sY0FBTSxNQUFNLEVBQUcsQ0FBQTt5QkFDdkI7Ozs7YUFDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUgsa0JBQUM7QUFBRCxDQUFDLEFBNUdELENBQXlDLGVBQVUsR0E0R2xEIiwic291cmNlc0NvbnRlbnQiOlsiLyog5a+85YWl5qih5Z6L5bGCICovXHJcbmltcG9ydCBTaWd1cE1vZGVsIGZyb20gJy4vbW9kZWwnXHJcblxyXG4vKiDlr7zlhaXor7fmsYLlj4LmlbDmjqXlj6MgVFPmjqXlj6PnsbvlnosgKi9cclxuaW1wb3J0IHtcclxuICBBY2NvdW50LFxyXG4gIEdldFBob25lTnVtYmVyLFxyXG4gIE1zZ0xvZ2luLFxyXG4gIFVzZXJSZWdpc3RlclxyXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZS9yZXF1ZXN0SW50ZXJmYWNlL3NpZ3VwJ1xyXG5pbXBvcnQge1xyXG4gIEJpbmRQaG9uZVxyXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZS9yZXF1ZXN0SW50ZXJmYWNlL3VzZXInXHJcblxyXG4vKiDlr7zlhaXnvZHnu5zor7fmsYLmjqXlj6MgVFPmjqXlj6PnsbvlnosgKi9cclxuaW1wb3J0IHsgUmVxdWVzdFByb21pc2UgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9odHRwJ1xyXG5cclxuLyog5a+85YWl5bel5YW357G7ICovXHJcbmltcG9ydCB7IHNldFN0b3JhZ2VzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCdcclxuXHJcbi8qKlxyXG4gKiDnmbvlvZXms6jlhozmqKHlnZct5pyN5Yqh5bGCXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWd1cFNlcnZlciBleHRlbmRzIFNpZ3VwTW9kZWwge1xyXG5cclxuICAvKipcclxuICAgKiDotKblj7flr4bnoIHnmbvlvZXmjqXlj6NcclxuICAgKiBAcGFyYW0ge0FjY291bnR9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIGFjY291bnQoZGF0YTogQWNjb3VudCk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5sb2dpbk1vZGVsKGRhdGEpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICByZXNvbHZlKHsgLi4ucmVzdWx0IH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICAqIOefreS/oeeZu+W9leaOpeWPo1xyXG4gICAgICogQHBhcmFtIHtNc2dMb2dpbn0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICAgKi9cclxuICBtc2dMb2dpbihkYXRhOiBNc2dMb2dpbik6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tc2dMb2dpbk1vZGVsKGRhdGEpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICByZXNvbHZlKHsgLi4ucmVzdWx0IH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmiYvmnLrnn63kv6Hms6jlhozmjqXlj6NcclxuICAgKiBAcGFyYW0ge1VzZXJSZWdpc3Rlcn0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgdXNlclJlZ2lzdGVyKGRhdGE6IFVzZXJSZWdpc3Rlcik6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy51c2VyUmVnaXN0ZXJNb2RlbChkYXRhKVxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIOeZu+W9leWwj+eoi+W6j1xyXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhIOivt+axguWPguaVsFxyXG4gICAqL1xyXG4gIHd4bG9naW4oZGF0YTogYW55KTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICB3eC5sb2dpbih7XHJcbiAgICAgICAgdGltZW91dDogMTAwMDAsXHJcbiAgICAgICAgc3VjY2VzczogYXN5bmMgcmVzID0+IHtcclxuICAgICAgICAgIGlmIChyZXMuY29kZSkge1xyXG4gICAgICAgICAgICBsZXQgY29kZSA9IHJlcy5jb2RlXHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtID0geyBjb2RlLCAuLi5kYXRhIH1cclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2NvZGUnLCByZXMuY29kZSlcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy53eGxvZ2luTW9kZWwocGFyYW0pXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHsgdG9rZW4sIHBob25lU3RhdGUgfSA9IHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW0gPSB7IHRva2VuLCBwaG9uZVN0YXRlIH1cclxuICAgICAgICAgICAgICAgIHNldFN0b3JhZ2VzKHBhcmFtKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXNvbHZlKHsgLi4ucmVzdWx0IH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5b6u5L+h5bCP56iL5bqP57uR5a6a5omL5py65Y+356CBXHJcbiAgICogQHBhcmFtIHtCaW5kUGhvbmV9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIGJpbmRQaG9uZShkYXRhOiBCaW5kUGhvbmUpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYmluZFBob25lTW9kZWwoZGF0YSlcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJlc29sdmUoeyAuLi5yZXN1bHQgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOmAgOWHuueZu+W9lVxyXG4gICAqL1xyXG4gIGxvZ2lub3V0KCk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5sb2dpbm91dE1vZGVsKClcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJlc29sdmUoeyAuLi5yZXN1bHQgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluW+ruS/oee7keWumuaJi+acuuWPt+eggVxyXG4gICAqIEBwYXJhbSBkYXRhIOivt+axguWPguaVsFxyXG4gICAqL1xyXG4gIGdldFBob25lTnVtYmVyKGRhdGE6IEdldFBob25lTnVtYmVyKTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmdldFBob25lTnVtYmVyTW9kZWwoZGF0YSlcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJlc29sdmUoeyAuLi5yZXN1bHQgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG59Il19