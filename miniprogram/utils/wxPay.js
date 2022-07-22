"use strict";
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
var WxPay = (function () {
    function WxPay() {
    }
    WxPay.prototype.pay = function (param) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                params = {
                    appId: param.appid,
                    timeStamp: param.timestamp,
                    nonceStr: param.noncestr,
                    package: param.package,
                    signType: param.signType,
                    paySign: param.paySign
                };
                wx.requestPayment(__assign(__assign({}, params), { success: function (res) {
                        resolve({
                            msg: '支付成功',
                            code: 200,
                            data: res
                        });
                    },
                    fail: function (_data) {
                        resolve({
                            msg: '支付失败！',
                            code: 777,
                        });
                    } }));
                return [2];
            });
        }); });
    };
    return WxPay;
}());
exports.default = WxPay;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3hQYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3eFBheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7SUFBQTtJQW1DQSxDQUFDO0lBN0JDLG1CQUFHLEdBQUgsVUFBSSxLQUFZO1FBQWhCLGlCQTJCQztRQTFCQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQU0sT0FBTzs7O2dCQUN4QixNQUFNLEdBQUc7b0JBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO29CQUNsQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7b0JBQzFCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtvQkFDeEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO29CQUN0QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7b0JBQ3hCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztpQkFDdkIsQ0FBQTtnQkFDRCxFQUFFLENBQUMsY0FBYyx1QkFDWixNQUFNLEtBQ1QsT0FBTyxZQUFDLEdBQUc7d0JBQ1QsT0FBTyxDQUFDOzRCQUNOLEdBQUcsRUFBRSxNQUFNOzRCQUNYLElBQUksRUFBRSxHQUFHOzRCQUNULElBQUksRUFBRSxHQUFHO3lCQUNWLENBQUMsQ0FBQTtvQkFDSixDQUFDO29CQUNELElBQUksWUFBQyxLQUFLO3dCQUNSLE9BQU8sQ0FBQzs0QkFDTixHQUFHLEVBQUUsT0FBTzs0QkFDWixJQUFJLEVBQUUsR0FBRzt5QkFDVixDQUFDLENBQUE7b0JBQ0osQ0FBQyxJQUNELENBQUE7OzthQUNILENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFSCxZQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFd4cGF5IH0gZnJvbSAnLi4vYXBpL2ludGVyZmFjZS9yZXF1ZXN0SW50ZXJmYWNlL3d4cGF5J1xyXG5pbXBvcnQgeyBSZXF1ZXN0UHJvbWlzZSB9IGZyb20gJy4uL3R5cGVzL2h0dHAnXHJcblxyXG4vKipcclxuICog5b6u5L+h5pSv5LuY5qih5Z2XXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXeFBheSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIOW+ruS/oeWwj+eoi+W6j+aUr+S7mFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbSDmlK/ku5jlj4LmlbBcclxuICAgKi9cclxuICBwYXkocGFyYW06IFd4cGF5KTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgYXBwSWQ6IHBhcmFtLmFwcGlkLFxyXG4gICAgICAgIHRpbWVTdGFtcDogcGFyYW0udGltZXN0YW1wLFxyXG4gICAgICAgIG5vbmNlU3RyOiBwYXJhbS5ub25jZXN0cixcclxuICAgICAgICBwYWNrYWdlOiBwYXJhbS5wYWNrYWdlLFxyXG4gICAgICAgIHNpZ25UeXBlOiBwYXJhbS5zaWduVHlwZSxcclxuICAgICAgICBwYXlTaWduOiBwYXJhbS5wYXlTaWduXHJcbiAgICAgIH1cclxuICAgICAgd3gucmVxdWVzdFBheW1lbnQoe1xyXG4gICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgIG1zZzogJ+aUr+S7mOaIkOWKnycsXHJcbiAgICAgICAgICAgIGNvZGU6IDIwMCxcclxuICAgICAgICAgICAgZGF0YTogcmVzXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbChfZGF0YSkge1xyXG4gICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgIG1zZzogJ+aUr+S7mOWksei0pe+8gScsXHJcbiAgICAgICAgICAgIGNvZGU6IDc3NyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG59Il19