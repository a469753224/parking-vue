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
var MessageServer = (function (_super) {
    __extends(MessageServer, _super);
    function MessageServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageServer.prototype.sendMsg = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.sendMsgModel(data)];
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
    MessageServer.prototype.sendMsgPassword = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.sendMsgPasswordModel(data)];
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
    return MessageServer;
}(model_1.default));
exports.default = MessageServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUNBQWtDO0FBV2xDO0lBQTJDLGlDQUFZO0lBQXZEOztJQTRCQSxDQUFDO0lBdEJHLCtCQUFPLEdBQVAsVUFBUSxJQUFZO1FBQXBCLGlCQU9DO1FBTkcsT0FBTyxJQUFJLE9BQU8sQ0FBZ0MsVUFBTyxPQUFPOzs7OzRCQUM3QyxXQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUF0QyxNQUFNLEdBQUcsU0FBNkI7d0JBQzVDLElBQUksTUFBTSxFQUFFOzRCQUNSLE9BQU8sY0FBTSxNQUFNLEVBQUcsQ0FBQTt5QkFDekI7Ozs7YUFDSixDQUFDLENBQUE7SUFDTixDQUFDO0lBTUQsdUNBQWUsR0FBZixVQUFnQixJQUFvQjtRQUFwQyxpQkFPQztRQU5HLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBTyxPQUFPOzs7OzRCQUNkLFdBQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBOUMsTUFBTSxHQUFHLFNBQXFDO3dCQUNwRCxJQUFJLE1BQU0sRUFBRTs0QkFDUixPQUFPLGNBQU0sTUFBTSxFQUFHLENBQUE7eUJBQ3pCOzs7O2FBQ0osQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVMLG9CQUFDO0FBQUQsQ0FBQyxBQTVCRCxDQUEyQyxlQUFZLEdBNEJ0RCIsInNvdXJjZXNDb250ZW50IjpbIi8qIOWvvOWFpeaooeWei+WxgiAqL1xyXG5pbXBvcnQgTWVzc2FnZU1vZGVsIGZyb20gJy4vbW9kZWwnXHJcblxyXG4vKiDlr7zlhaVUU+aOpeWPoyAqL1xyXG5pbXBvcnQgeyBSZXF1ZXN0UHJvbWlzZSwgUmVzcG9uc2VEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvaHR0cCdcclxuXHJcbi8qIOWvvOWFpeivt+axguWPguaVsOaOpeWPoyAqL1xyXG5pbXBvcnQgeyBzZW5kTXNnLCBzZW5kTXNnUGFzc3dvcmQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvcmVxdWVzdEludGVyZmFjZS9tZXNzYWdlJ1xyXG5cclxuLyoqXHJcbiAqIOefreS/oeaooeWdly3mlbDmja7lpITnkIZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VTZXJ2ZXIgZXh0ZW5kcyBNZXNzYWdlTW9kZWx7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnmbvlvZXms6jlhozlj5Hnn63kv6HmjqXlj6NcclxuICAgICAqIEBwYXJhbSB7c2VuZE1zZ30gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICAgKi9cclxuICAgIHNlbmRNc2coZGF0YTpzZW5kTXNnKTpSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlc3BvbnNlRGF0YTxzZW5kTXNnUGFzc3dvcmQ+Pihhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlbmRNc2dNb2RlbChkYXRhKVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgLi4ucmVzdWx0IH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5L+u5pS55a+G56CB5ZKM5pSv5LuY5a+G56CB55+t5L+h5o6l5Y+jXHJcbiAgICAgKiBAcGFyYW0ge3NlbmRNc2dQYXNzd29yZH0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICAgKi9cclxuICAgIHNlbmRNc2dQYXNzd29yZChkYXRhOnNlbmRNc2dQYXNzd29yZCk6UmVxdWVzdFByb21pc2Uge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlbmRNc2dQYXNzd29yZE1vZGVsKGRhdGEpXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoeyAuLi5yZXN1bHQgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59Il19