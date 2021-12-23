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
var LockServer = (function (_super) {
    __extends(LockServer, _super);
    function LockServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LockServer.prototype.unlock = function (data) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.unlockModel(data)];
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
    return LockServer;
}(model_1.default));
exports.default = LockServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUNBQStCO0FBVy9CO0lBQXdDLDhCQUFTO0lBQWpEOztJQWFBLENBQUM7SUFSQywyQkFBTSxHQUFOLFVBQU8sSUFBVztRQUFsQixpQkFPQztRQU5DLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBTSxPQUFPOzs7OzRCQUNmLFdBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQXJDLE1BQU0sR0FBRyxTQUE0Qjt3QkFDM0MsSUFBSSxNQUFNLEVBQUU7NEJBQ1YsT0FBTyxjQUFNLE1BQU0sRUFBRyxDQUFBO3lCQUN2Qjs7OzthQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFiRCxDQUF3QyxlQUFTLEdBYWhEIiwic291cmNlc0NvbnRlbnQiOlsiLyog5a+85YWl5qih5Z6L5bGCICovXHJcbmltcG9ydCBMb2NrTW9kZWwgZnJvbSAnLi9tb2RlbCdcclxuXHJcbi8qIOWvvOWFpeivt+axguWPguaVsOaOpeWPoyBUU+aOpeWPo+exu+WeiyAqL1xyXG5pbXBvcnQgeyBVbmxvY2sgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvcmVxdWVzdEludGVyZmFjZS9sb2NrJ1xyXG5cclxuLyog5a+85YWl572R57uc6K+35rGC5o6l5Y+jIFRT5o6l5Y+j57G75Z6LICovXHJcbmltcG9ydCB7IFJlcXVlc3RQcm9taXNlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvaHR0cCdcclxuXHJcbi8qKlxyXG4gKiDovabplIHmqKHlnZct5pyN5Yqh5bGCXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NrU2VydmVyIGV4dGVuZHMgTG9ja01vZGVsIHtcclxuICAvKipcclxuICAgKiDop6PplIHmjqXlj6NcclxuICAgKiBAcGFyYW0ge1VubG9ja30gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgdW5sb2NrKGRhdGE6VW5sb2NrKTpSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMudW5sb2NrTW9kZWwoZGF0YSlcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJlc29sdmUoeyAuLi5yZXN1bHQgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19