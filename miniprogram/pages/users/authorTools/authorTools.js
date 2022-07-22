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
var server_1 = require("../../../api/api/wx/server");
var server_2 = require("../../../api/api/home/server");
var wex = new server_1.default();
var server = new server_2.default();
Page({
    data: {
        show: false,
        status: false
    },
    onLoad: function (_options) {
    },
    openAuthor: function () {
        this.setData({ show: true });
    },
    author: function () {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            var _this = this;
            return __generator(this, function (_a) {
                status = this.data.status;
                if (status) {
                }
                else {
                    wx.login({
                        success: function (res) { return __awaiter(_this, void 0, void 0, function () {
                            var code, result, data;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        code = res.code;
                                        return [4, wex.prePermissions({ code: code })];
                                    case 1:
                                        result = _a.sent();
                                        if (result.code == 200) {
                                            wx.showToast({
                                                title: '您已授权',
                                                icon: 'none'
                                            });
                                        }
                                        else if (result.code == 201) {
                                            data = result.data;
                                            wx.navigateToMiniProgram({
                                                appId: 'wxd8f3793ea3b935b8',
                                                path: 'pages/use/enable',
                                                extraData: {
                                                    apply_permissions_token: data
                                                },
                                                success: function () {
                                                    console.log('授权成功！00');
                                                }
                                            });
                                        }
                                        else {
                                            wx.showModal({
                                                title: '提示',
                                                content: '授权失败，请联系商家！'
                                            });
                                        }
                                        return [2];
                                }
                            });
                        }); }
                    });
                }
                return [2];
            });
        });
    },
    onShow: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, server.checkPermissions()];
                    case 1:
                        result = _a.sent();
                        status = result.data == 'AVAILABLE' ? true : false;
                        this.setData({ status: status });
                        return [2];
                }
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yVG9vbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRob3JUb29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFEQUFpRDtBQUNqRCx1REFBcUQ7QUFHckQsSUFBTSxHQUFHLEdBQUcsSUFBSSxnQkFBUSxFQUFFLENBQUE7QUFDMUIsSUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBVSxFQUFFLENBQUE7QUFFL0IsSUFBSSxDQUFDO0lBS0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsS0FBSztLQUNoQjtJQUtELE1BQU0sRUFBRSxVQUFVLFFBQVE7SUFFMUIsQ0FBQztJQUtELFVBQVU7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUtLLE1BQU0sRUFBWjs7Ozs7Z0JBQ1UsTUFBTSxHQUFLLElBQUksQ0FBQyxJQUFJLE9BQWQsQ0FBYztnQkFDMUIsSUFBSSxNQUFNLEVBQUU7aUJBRVg7cUJBQU07b0JBQ0gsRUFBRSxDQUFDLEtBQUssQ0FBQzt3QkFDTCxPQUFPLEVBQUUsVUFBTSxHQUFHOzs7Ozt3Q0FDUixJQUFJLEdBQUssR0FBRyxLQUFSLENBQVE7d0NBQ0gsV0FBTSxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxFQUFBOzt3Q0FBM0MsTUFBTSxHQUFHLFNBQWtDO3dDQUNqRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFOzRDQUNwQixFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNULEtBQUssRUFBRSxNQUFNO2dEQUNiLElBQUksRUFBRSxNQUFNOzZDQUNmLENBQUMsQ0FBQTt5Q0FDTDs2Q0FBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFOzRDQUNyQixJQUFJLEdBQVUsTUFBTSxLQUFoQixDQUFnQjs0Q0FDMUIsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dEQUNyQixLQUFLLEVBQUUsb0JBQW9CO2dEQUMzQixJQUFJLEVBQUUsa0JBQWtCO2dEQUN4QixTQUFTLEVBQUU7b0RBQ1AsdUJBQXVCLEVBQUUsSUFBSTtpREFDaEM7Z0RBQ0QsT0FBTztvREFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dEQUMxQixDQUFDOzZDQUNKLENBQUMsQ0FBQzt5Q0FDTjs2Q0FBTTs0Q0FDSCxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNULEtBQUssRUFBRSxJQUFJO2dEQUNYLE9BQU8sRUFBRSxhQUFhOzZDQUN6QixDQUFDLENBQUE7eUNBQ0w7Ozs7NkJBRUo7cUJBQ0osQ0FBQyxDQUFBO2lCQUNMOzs7O0tBRUo7SUFFSyxNQUFNOzs7Ozs0QkFDTyxXQUFNLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOzt3QkFBeEMsTUFBTSxHQUFHLFNBQStCO3dCQUN4QyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO3dCQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFBOzs7OztLQUMzQjtDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIOWvvOWFpeaooeWdlyAqL1xyXG5pbXBvcnQgV3hTZXJ2ZXIgZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS93eC9zZXJ2ZXInXHJcbmltcG9ydCBIb21lU2VydmVyIGZyb20gJy4uLy4uLy4uL2FwaS9hcGkvaG9tZS9zZXJ2ZXInXHJcblxyXG4vKiDlrp7kvovljJbmqKHlnZcgKi9cclxuY29uc3Qgd2V4ID0gbmV3IFd4U2VydmVyKClcclxuY29uc3Qgc2VydmVyID0gbmV3IEhvbWVTZXJ2ZXIoKVxyXG5cclxuUGFnZSh7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgICAqL1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgIHN0YXR1czogZmFsc2VcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAgICovXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIChfb3B0aW9ucykge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmlK/ku5jliIbmjojmnYPlvIDlhbNcclxuICAgICAqL1xyXG4gICAgb3BlbkF1dGhvcigpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoeyBzaG93OiB0cnVlIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pSv5LuY5YiG5o6I5p2DXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGF1dGhvcigpIHtcclxuICAgICAgICBsZXQgeyBzdGF0dXMgfSA9IHRoaXMuZGF0YVxyXG4gICAgICAgIGlmIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgLy/lhbPpl63mjojmnYPmk43kvZxcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3eC5sb2dpbih7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBhc3luYyByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB7IGNvZGUgfSA9IHJlc1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHdleC5wcmVQZXJtaXNzaW9ucyh7IGNvZGUgfSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aCqOW3suaOiOadgycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09IDIwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeyBkYXRhIH0gPSA8YW55PnJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6ICd3eGQ4ZjM3OTNlYTNiOTM1YjgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJ3BhZ2VzL3VzZS9lbmFibGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlfcGVybWlzc2lvbnNfdG9rZW46IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmjojmnYPmiJDlip/vvIEwMCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5o6I5p2D5aSx6LSl77yM6K+36IGU57O75ZWG5a6277yBJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgb25TaG93KCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci5jaGVja1Blcm1pc3Npb25zKClcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSByZXN1bHQuZGF0YSA9PSAnQVZBSUxBQkxFJyA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IHN0YXR1cyB9KVxyXG4gICAgfVxyXG59KSJdfQ==