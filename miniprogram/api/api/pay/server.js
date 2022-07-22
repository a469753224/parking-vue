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
var PayServer = (function (_super) {
    __extends(PayServer, _super);
    function PayServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayServer.prototype.wxPay = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.wxPayModel(data)];
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
    PayServer.prototype.minipay = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.minipayModel(data)];
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
    return PayServer;
}(model_1.default));
exports.default = PayServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUNBQThCO0FBYzlCO0lBQXVDLDZCQUFRO0lBQS9DOztJQTJCQSxDQUFDO0lBckJDLHlCQUFLLEdBQUwsVUFBTSxJQUFXO1FBQWpCLGlCQU9DO1FBTkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFNLE9BQU87Ozs7NEJBQ2YsV0FBTSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBcEMsTUFBTSxHQUFHLFNBQTJCO3dCQUMxQyxJQUFJLE1BQU0sRUFBRTs0QkFDVixPQUFPLGNBQU0sTUFBTSxFQUFHLENBQUE7eUJBQ3ZCOzs7O2FBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1ELDJCQUFPLEdBQVAsVUFBUSxJQUFhO1FBQXJCLGlCQU9DO1FBTkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFNLE9BQU87Ozs7NEJBQ2YsV0FBTSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBdEMsTUFBTSxHQUFHLFNBQTZCO3dCQUM1QyxJQUFJLE1BQU0sRUFBRTs0QkFDVixPQUFPLGNBQU0sTUFBTSxFQUFHLENBQUE7eUJBQ3ZCOzs7O2FBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQTNCRCxDQUF1QyxlQUFRLEdBMkI5QyIsInNvdXJjZXNDb250ZW50IjpbIi8qIOWvvOWFpeaooeWei+WxgiAqL1xyXG5pbXBvcnQgUGF5TW9kZWwgZnJvbSAnLi9tb2RlbCdcclxuXHJcbi8qIOWvvOWFpeivt+axguWPguaVsOaOpeWPoyBUU+aOpeWPo+exu+WeiyAqL1xyXG5pbXBvcnQge1xyXG4gIERvcGF5LFxyXG4gIE1pbmlwYXlcclxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvcmVxdWVzdEludGVyZmFjZS9wYXknXHJcblxyXG4vKiDlr7zlhaXnvZHnu5zor7fmsYLmjqXlj6MgVFPmjqXlj6PnsbvlnosgKi9cclxuaW1wb3J0IHsgUmVxdWVzdFByb21pc2UgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9odHRwJ1xyXG5cclxuLyoqXHJcbiAqIOaUr+S7mOaooeWdly3mnI3liqHlsYJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheVNlcnZlciBleHRlbmRzIFBheU1vZGVsIHtcclxuXHJcbiAgLyoqXHJcbiAgICog5b6u5L+h5pSv5LuY5o6l5Y+jXHJcbiAgICogQHBhcmFtIHtEb3BheX0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgd3hQYXkoZGF0YTogRG9wYXkpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMud3hQYXlNb2RlbChkYXRhKVxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3VsdCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5bCP56iL5bqP5pSv5LuY5o6l5Y+jXHJcbiAgICogQHBhcmFtIHtNaW5pcGF5fSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICBtaW5pcGF5KGRhdGE6IE1pbmlwYXkpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubWluaXBheU1vZGVsKGRhdGEpXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICByZXNvbHZlKHsgLi4ucmVzdWx0IH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59Il19