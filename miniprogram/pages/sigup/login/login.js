"use strict";
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
var server_1 = require("../../../api/api/sigup/server");
var server = new server_1.default();
Page({
    data: {
        checked: true,
        username: '13397788378',
        password: 'weideng123'
    },
    onLoad: function () {
    },
    login: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, username, password, param, result, token, title;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.data.checked) return [3, 2];
                        _a = this.data, username = _a.username, password = _a.password;
                        param = {
                            username: username,
                            password: password
                        };
                        return [4, server.account(param)];
                    case 1:
                        result = _b.sent();
                        if (result.status == 200) {
                            token = result.token;
                            wx.setStorageSync('token', token);
                        }
                        title = result.status == 200 ? '登录成功' : result.msg;
                        wx.showToast({
                            title: title,
                            icon: 'none'
                        });
                        return [3, 3];
                    case 2:
                        wx.showToast({
                            title: '请勾选同意协议',
                            icon: 'none'
                        });
                        _b.label = 3;
                    case 3: return [2];
                }
            });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHdEQUF1RDtBQUd2RCxJQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFXLEVBQUUsQ0FBQTtBQUVoQyxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSxhQUFhO1FBRXZCLFFBQVEsRUFBRSxZQUFZO0tBQ3ZCO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLSyxLQUFLOzs7Ozs7NkJBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQWpCLGNBQWlCO3dCQUNmLEtBQXlCLElBQUksQ0FBQyxJQUFJLEVBQWhDLFFBQVEsY0FBQSxFQUFFLFFBQVEsY0FBQSxDQUFjO3dCQUNoQyxLQUFLLEdBQUc7NEJBQ1osUUFBUSxVQUFBOzRCQUNSLFFBQVEsVUFBQTt5QkFDVCxDQUFBO3dCQUNjLFdBQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQXBDLE1BQU0sR0FBRyxTQUEyQjt3QkFDMUMsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsRUFBRTs0QkFDbEIsS0FBSyxHQUFLLE1BQU0sTUFBWCxDQUFXOzRCQUN0QixFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTt5QkFJbEM7d0JBQ0csS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUE7d0JBQ3RELEVBQUUsQ0FBQyxTQUFTLENBQUM7NEJBQ1gsS0FBSyxPQUFBOzRCQUNMLElBQUksRUFBRSxNQUFNO3lCQUNiLENBQUMsQ0FBQTs7O3dCQUVGLEVBQUUsQ0FBQyxTQUFTLENBQUM7NEJBQ1gsS0FBSyxFQUFFLFNBQVM7NEJBQ2hCLElBQUksRUFBRSxNQUFNO3lCQUNiLENBQUMsQ0FBQTs7Ozs7O0tBRUw7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDlr7zlhaXmqKHlnZcgKi9cclxuaW1wb3J0IFNpZ3VwU2VydmVyIGZyb20gJy4uLy4uLy4uL2FwaS9hcGkvc2lndXAvc2VydmVyJ1xyXG5cclxuLyog5a6e5L6L5YyW5qih5Z2XICovXHJcbmNvbnN0IHNlcnZlciA9IG5ldyBTaWd1cFNlcnZlcigpXHJcblxyXG5QYWdlKHtcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgY2hlY2tlZDogdHJ1ZSxcclxuICAgIHVzZXJuYW1lOiAnMTMzOTc3ODgzNzgnLFxyXG4gICAgLy8gdXNlcm5hbWU6ICcxNzc3NDgwMTY3MCcsXHJcbiAgICBwYXNzd29yZDogJ3dlaWRlbmcxMjMnXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAgICog55m75b2VXHJcbiAgICAgKi9cclxuICBhc3luYyBsb2dpbigpIHtcclxuICAgIGlmICh0aGlzLmRhdGEuY2hlY2tlZCkge1xyXG4gICAgICBsZXQgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHRoaXMuZGF0YVxyXG4gICAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci5hY2NvdW50KHBhcmFtKVxyXG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICBsZXQgeyB0b2tlbiB9ID0gcmVzdWx0XHJcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3Rva2VuJywgdG9rZW4pXHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICB0aGlzLm15TWVudUluZm9ybWF0aW9uKClcclxuICAgICAgICAvLyB9LCAxMDApO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCB0aXRsZSA9IHJlc3VsdC5zdGF0dXMgPT0gMjAwID8gJ+eZu+W9leaIkOWKnycgOiByZXN1bHQubXNnXHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiAn6K+35Yu+6YCJ5ZCM5oSP5Y2P6K6uJyxcclxuICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxufSkiXX0=