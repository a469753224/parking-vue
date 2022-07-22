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
var server_2 = require("../../../api/api/message/server");
var server = new server_1.default();
var massage = new server_2.default();
var config_1 = require("../../../config/config");
var exception_1 = require("../../../utils/exception");
var util_1 = require("../../../utils/util");
Page({
    data: {
        msg: '',
        path: '',
        phone: '',
        else: true,
        model: config_1.Mode,
        show: false,
        timeData: {},
        password: '',
        isCode: true,
        checked: false,
        verCode: false,
        verPhone: false,
        time: 60 * 1000,
        verPassword: false,
    },
    onLoad: function (options) {
        if (!util_1.isEmpty(options)) {
            var _a = options, path = _a.path, phone = _a.phone;
            this.setData({
                path: path,
                phone: phone,
            });
            var e = { detail: { value: phone } };
            this.verifyPhone(e);
        }
    },
    onChange: function (e) {
        this.setData({
            timeData: e.detail,
        });
    },
    getCode: function () {
        return __awaiter(this, void 0, void 0, function () {
            var title, phone, param, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        title = '';
                        if (!this.data.phone) return [3, 2];
                        phone = this.data.phone;
                        param = {
                            phone: phone,
                            msgType: '2'
                        };
                        return [4, massage.sendMsg(param)];
                    case 1:
                        result = _a.sent();
                        title = result.code == 0 ? '发送成功' : '发送失败';
                        if (result.code == 0) {
                            this.setData({
                                isCode: false
                            });
                        }
                        return [3, 3];
                    case 2:
                        title = '请填写手机号码！';
                        _a.label = 3;
                    case 3:
                        wx.showToast({
                            title: title,
                            icon: 'none'
                        });
                        return [2];
                }
            });
        });
    },
    finish: function () {
        this.setData({
            isCode: true
        });
    },
    aggreements: function (e) {
        this.setData({
            checked: e.detail
        });
    },
    changeCode: function (e) {
        this.setData({
            msg: e.detail.value
        });
    },
    changePhone: function (e) {
        this.setData({
            phone: e.detail.value
        });
    },
    verifyCode: function (e) {
        if (e.detail.value) {
            if (!exception_1.codeRul(e.detail.value)) {
                wx.showToast({
                    title: '验证码不正确',
                    icon: 'none'
                });
                this.setData({
                    msg: ''
                });
            }
            else {
                this.setData({
                    verCode: true
                });
            }
        }
    },
    verifyPhone: function (e) {
        if (e.detail.value) {
            if (!exception_1.phoneRul(e.detail.value)) {
                wx.showToast({
                    title: '手机号码格式不正确',
                    icon: 'none'
                });
                this.setData({
                    phone: ''
                });
            }
            else {
                this.setData({
                    verPhone: true
                });
            }
        }
    },
    verifyPassword: function (e) {
        if (!exception_1.passwordRul(e.detail.value)) {
            wx.showToast({
                title: '密码格式不正确',
                icon: 'none'
            });
            this.setData({
                password: ''
            });
        }
        else {
            this.setData({
                verPassword: true
            });
        }
    },
    register: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, verCode, verPhone, checked, _b, msg, phone, param, result, title, userInfo, path, url_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.data, verCode = _a.verCode, verPhone = _a.verPhone, checked = _a.checked;
                        if (!(verCode && verPhone && checked)) return [3, 2];
                        _b = this.data, msg = _b.msg, phone = _b.phone;
                        param = {
                            msg: msg,
                            phone: phone,
                            condition: 0
                        };
                        return [4, server.bindPhone(param)];
                    case 1:
                        result = _c.sent();
                        if (result.code == 19) {
                            this.setData({
                                show: true
                            });
                        }
                        else {
                            title = result.code == 0 ? '绑定成功' : result.msg;
                            wx.showToast({
                                title: title,
                                icon: 'none'
                            });
                            if (result.code == 0) {
                                this.login();
                                userInfo = wx.getStorageSync('userInfo');
                                if (!util_1.isEmpty(userInfo)) {
                                    console.log(userInfo);
                                    userInfo.phone = phone.substr(0, 3) + "****" + phone.substr(-4);
                                    wx.setStorageSync('phoneState', 0);
                                    wx.setStorageSync('userInfo', userInfo);
                                }
                                path = this.data.path;
                                url_1 = '';
                                switch (path) {
                                    case 'user':
                                        url_1 = '/pages/user/user';
                                        break;
                                    case 'home':
                                        url_1 = '/pages/home/home';
                                        break;
                                }
                                setTimeout(function () {
                                    wx.reLaunch({
                                        url: url_1,
                                    });
                                }, 500);
                            }
                        }
                        _c.label = 2;
                    case 2: return [2];
                }
            });
        });
    },
    login: function () {
        return __awaiter(this, void 0, void 0, function () {
            var param, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = {
                            loadStatus: false,
                        };
                        return [4, server.wxlogin(param)];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            this.setData({
                                token: result.token
                            });
                        }
                        return [2];
                }
            });
        });
    },
    confirm: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, msg, phone, param, result, title;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.data, msg = _a.msg, phone = _a.phone;
                        param = {
                            msg: msg,
                            phone: phone,
                            condition: 1
                        };
                        return [4, server.bindPhone(param)];
                    case 1:
                        result = _b.sent();
                        title = result.data;
                        wx.showToast({
                            title: title,
                            icon: 'none'
                        });
                        if (result.code == 0) {
                            wx.reLaunch({
                                url: "/pages/user/user?relogin=1",
                            });
                        }
                        return [2];
                }
            });
        });
    },
    getPhone: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWdpc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHdEQUF1RDtBQUN2RCwwREFBMkQ7QUFHM0QsSUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBVyxFQUFFLENBQUE7QUFDaEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxnQkFBYSxFQUFFLENBQUE7QUFHbkMsaURBQTZDO0FBRzdDLHNEQUlpQztBQUNqQyw0Q0FBNkM7QUFFN0MsSUFBSSxDQUFDO0lBS0QsSUFBSSxFQUFFO1FBQ0YsR0FBRyxFQUFFLEVBQUU7UUFDUCxJQUFJLEVBQUUsRUFBRTtRQUNSLEtBQUssRUFBRSxFQUFFO1FBQ1QsSUFBSSxFQUFFLElBQUk7UUFDVixLQUFLLEVBQUUsYUFBSTtRQUNYLElBQUksRUFBRSxLQUFLO1FBQ1gsUUFBUSxFQUFFLEVBQUU7UUFDWixRQUFRLEVBQUUsRUFBRTtRQUNaLE1BQU0sRUFBRSxJQUFJO1FBQ1osT0FBTyxFQUFFLEtBQUs7UUFDZCxPQUFPLEVBQUUsS0FBSztRQUNkLFFBQVEsRUFBRSxLQUFLO1FBQ2YsSUFBSSxFQUFFLEVBQUUsR0FBRyxJQUFJO1FBQ2YsV0FBVyxFQUFFLEtBQUs7S0FDckI7SUFLRCxNQUFNLEVBQUUsVUFBVSxPQUFPO1FBQ3JCLElBQUksQ0FBQyxjQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDZixJQUFBLEtBQWtCLE9BQWMsRUFBOUIsSUFBSSxVQUFBLEVBQUUsS0FBSyxXQUFtQixDQUFBO1lBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsSUFBSSxNQUFBO2dCQUNKLEtBQUssT0FBQTthQUNSLENBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUE7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUN0QjtJQUNMLENBQUM7SUFFRCxRQUFRLEVBQVIsVUFBUyxDQUFrQjtRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNO1NBQ3JCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFLSyxPQUFPLEVBQWI7Ozs7Ozt3QkFDUSxLQUFLLEdBQVcsRUFBRSxDQUFBOzZCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBZixjQUFlO3dCQUVYLEtBQUssR0FDTCxJQUFJLENBQUMsSUFBSSxNQURKLENBQ0k7d0JBQ1AsS0FBSyxHQUFHOzRCQUNWLEtBQUssT0FBQTs0QkFDTCxPQUFPLEVBQUUsR0FBRzt5QkFDZixDQUFBO3dCQUNjLFdBQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQXJDLE1BQU0sR0FBRyxTQUE0Qjt3QkFDM0MsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQTt3QkFDMUMsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTs0QkFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQ0FDVCxNQUFNLEVBQUUsS0FBSzs2QkFDaEIsQ0FBQyxDQUFBO3lCQUNMOzs7d0JBRUQsS0FBSyxHQUFHLFVBQVUsQ0FBQTs7O3dCQUV0QixFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNULEtBQUssT0FBQTs0QkFDTCxJQUFJLEVBQUUsTUFBTTt5QkFDZixDQUFDLENBQUE7Ozs7O0tBQ0w7SUFLRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULE1BQU0sRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQU1ELFdBQVcsRUFBWCxVQUFZLENBQWtCO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBQyxDQUFDLE1BQU07U0FDcEIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQU1ELFVBQVUsRUFBVixVQUFXLENBQTZCO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3RCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFNRCxXQUFXLEVBQVgsVUFBWSxDQUE2QjtRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUN4QixDQUFDLENBQUE7SUFDTixDQUFDO0lBTUQsVUFBVSxFQUFWLFVBQVcsQ0FBZ0M7UUFDdkMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNoQixJQUFJLENBQUMsbUJBQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMxQixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNULEtBQUssRUFBRSxRQUFRO29CQUNmLElBQUksRUFBRSxNQUFNO2lCQUNmLENBQUMsQ0FBQTtnQkFDRixJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNULEdBQUcsRUFBRSxFQUFFO2lCQUNWLENBQUMsQ0FBQTthQUNMO2lCQUFNO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1QsT0FBTyxFQUFFLElBQUk7aUJBQ2hCLENBQUMsQ0FBQTthQUNMO1NBQ0o7SUFFTCxDQUFDO0lBTUQsV0FBVyxFQUFYLFVBQVksQ0FBZ0M7UUFDeEMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNoQixJQUFJLENBQUMsb0JBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzQixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNULEtBQUssRUFBRSxXQUFXO29CQUNsQixJQUFJLEVBQUUsTUFBTTtpQkFDZixDQUFDLENBQUE7Z0JBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDVCxLQUFLLEVBQUUsRUFBRTtpQkFDWixDQUFDLENBQUE7YUFDTDtpQkFBTTtnQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNULFFBQVEsRUFBRSxJQUFJO2lCQUNqQixDQUFDLENBQUE7YUFDTDtTQUNKO0lBQ0wsQ0FBQztJQU1ELGNBQWMsRUFBZCxVQUFlLENBQWdDO1FBQzNDLElBQUksQ0FBQyx1QkFBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUIsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDVCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsSUFBSSxFQUFFLE1BQU07YUFDZixDQUFDLENBQUE7WUFDRixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNULFFBQVEsRUFBRSxFQUFFO2FBQ2YsQ0FBQyxDQUFBO1NBQ0w7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsV0FBVyxFQUFFLElBQUk7YUFDcEIsQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDO0lBS0ssUUFBUTs7Ozs7O3dCQUNOLEtBSUEsSUFBSSxDQUFDLElBQUksRUFIVCxPQUFPLGFBQUEsRUFDUCxRQUFRLGNBQUEsRUFDUixPQUFPLGFBQUEsQ0FDRTs2QkFDVCxDQUFBLE9BQU8sSUFBSSxRQUFRLElBQUksT0FBTyxDQUFBLEVBQTlCLGNBQThCO3dCQUMxQixLQUdBLElBQUksQ0FBQyxJQUFJLEVBRlQsR0FBRyxTQUFBLEVBQ0gsS0FBSyxXQUFBLENBQ0k7d0JBQ1AsS0FBSyxHQUFHOzRCQUNWLEdBQUcsS0FBQTs0QkFDSCxLQUFLLE9BQUE7NEJBQ0wsU0FBUyxFQUFFLENBQUM7eUJBQ2YsQ0FBQTt3QkFDYyxXQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUF0QyxNQUFNLEdBQUcsU0FBNkI7d0JBQzVDLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUU7NEJBQ25CLElBQUksQ0FBQyxPQUFPLENBQUM7Z0NBQ1QsSUFBSSxFQUFFLElBQUk7NkJBQ2IsQ0FBQyxDQUFBO3lCQUNMOzZCQUFNOzRCQUNDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFBOzRCQUNsRCxFQUFFLENBQUMsU0FBUyxDQUFDO2dDQUNULEtBQUssT0FBQTtnQ0FDTCxJQUFJLEVBQUUsTUFBTTs2QkFDZixDQUFDLENBQUE7NEJBQ0YsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtnQ0FDbEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO2dDQUNSLFFBQVEsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFBO2dDQUM1QyxJQUFHLENBQUMsY0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFDO29DQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO29DQUNyQixRQUFRLENBQUMsS0FBSyxHQUFNLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUcsQ0FBQTtvQ0FDL0QsRUFBRSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUE7b0NBQ2xDLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFBO2lDQUMxQztnQ0FDTyxJQUFJLEdBQUssSUFBSSxDQUFDLElBQUksS0FBZCxDQUFjO2dDQUN0QixRQUFNLEVBQUUsQ0FBQTtnQ0FDWixRQUFRLElBQUksRUFBRTtvQ0FDVixLQUFLLE1BQU07d0NBQ1AsS0FBRyxHQUFHLGtCQUFrQixDQUFBO3dDQUN4QixNQUFNO29DQUNWLEtBQUssTUFBTTt3Q0FDUCxLQUFHLEdBQUcsa0JBQWtCLENBQUE7d0NBQ3hCLE1BQU07aUNBQ2I7Z0NBQ0QsVUFBVSxDQUFDO29DQUNQLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0NBQ1IsR0FBRyxPQUFBO3FDQUNOLENBQUMsQ0FBQTtnQ0FDTixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7NkJBQ1g7eUJBQ0o7Ozs7OztLQUVSO0lBS0ssS0FBSzs7Ozs7O3dCQUNELEtBQUssR0FBRzs0QkFDVixVQUFVLEVBQUUsS0FBSzt5QkFDcEIsQ0FBQTt3QkFDYyxXQUFNLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUFwQyxNQUFNLEdBQUcsU0FBMkI7d0JBQzFDLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7NEJBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0NBQ1QsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLOzZCQUN0QixDQUFDLENBQUE7eUJBQ0w7Ozs7O0tBQ0o7SUFLSyxPQUFPOzs7Ozs7d0JBQ0wsS0FHQSxJQUFJLENBQUMsSUFBSSxFQUZULEdBQUcsU0FBQSxFQUNILEtBQUssV0FBQSxDQUNJO3dCQUNQLEtBQUssR0FBRzs0QkFDVixHQUFHLEtBQUE7NEJBQ0gsS0FBSyxPQUFBOzRCQUNMLFNBQVMsRUFBRSxDQUFDO3lCQUNmLENBQUE7d0JBQ2MsV0FBTSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFBOzt3QkFBdEMsTUFBTSxHQUFHLFNBQTZCO3dCQUN0QyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQTt3QkFDekIsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0QkFDVCxLQUFLLE9BQUE7NEJBQ0wsSUFBSSxFQUFFLE1BQU07eUJBQ2YsQ0FBQyxDQUFBO3dCQUNGLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7NEJBQ2xCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0NBQ1IsR0FBRyxFQUFFLDRCQUE0Qjs2QkFDcEMsQ0FBQyxDQUFBO3lCQUNMOzs7OztLQUNKO0lBRUQsUUFBUTtJQUVSLENBQUM7Q0FFSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDlr7zlhaXmqKHlnZcgKi9cclxuaW1wb3J0IFNpZ3VwU2VydmVyIGZyb20gJy4uLy4uLy4uL2FwaS9hcGkvc2lndXAvc2VydmVyJ1xyXG5pbXBvcnQgTWVzc2FnZVNlcnZlciBmcm9tICcuLi8uLi8uLi9hcGkvYXBpL21lc3NhZ2Uvc2VydmVyJ1xyXG5cclxuLyog5a6e5L6L5YyW5qih5Z2XICovXHJcbmNvbnN0IHNlcnZlciA9IG5ldyBTaWd1cFNlcnZlcigpXHJcbmNvbnN0IG1hc3NhZ2UgPSBuZXcgTWVzc2FnZVNlcnZlcigpXHJcblxyXG4vKiDlvIDlj5HmqKHlvI8gKi9cclxuaW1wb3J0IHsgTW9kZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jb25maWcnXHJcblxyXG4vKiDpqozor4Hop4TliJkgKi9cclxuaW1wb3J0IHtcclxuICAgIGNvZGVSdWwsXHJcbiAgICBwaG9uZVJ1bCxcclxuICAgIHBhc3N3b3JkUnVsXHJcbn0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXhjZXB0aW9uJ1xyXG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCdcclxuXHJcblBhZ2Uoe1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIGRhdGE6IHtcclxuICAgICAgICBtc2c6ICcnLFxyXG4gICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICBlbHNlOiB0cnVlLFxyXG4gICAgICAgIG1vZGVsOiBNb2RlLFxyXG4gICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgIHRpbWVEYXRhOiB7fSxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgaXNDb2RlOiB0cnVlLFxyXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgIHZlckNvZGU6IGZhbHNlLFxyXG4gICAgICAgIHZlclBob25lOiBmYWxzZSxcclxuICAgICAgICB0aW1lOiA2MCAqIDEwMDAsXHJcbiAgICAgICAgdmVyUGFzc3dvcmQ6IGZhbHNlLFxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICAgKi9cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoIWlzRW1wdHkob3B0aW9ucykpIHtcclxuICAgICAgICAgICAgbGV0IHsgcGF0aCwgcGhvbmUgfSA9IG9wdGlvbnMgYXMgYW55XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICAgICAgcGhvbmUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxldCBlID0geyBkZXRhaWw6IHsgdmFsdWU6IHBob25lIH0gfVxyXG4gICAgICAgICAgICB0aGlzLnZlcmlmeVBob25lKGUpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkNoYW5nZShlOiB7IGRldGFpbDogYW55IH0pIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICB0aW1lRGF0YTogZS5kZXRhaWwsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K+35rGC5omL5py66aqM6K+B56CBXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGdldENvZGUoKSB7XHJcbiAgICAgICAgbGV0IHRpdGxlOiBzdHJpbmcgPSAnJ1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEucGhvbmUpIHtcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgcGhvbmVcclxuICAgICAgICAgICAgfSA9IHRoaXMuZGF0YVxyXG4gICAgICAgICAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgICAgIHBob25lLFxyXG4gICAgICAgICAgICAgICAgbXNnVHlwZTogJzInXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWFzc2FnZS5zZW5kTXNnKHBhcmFtKVxyXG4gICAgICAgICAgICB0aXRsZSA9IHJlc3VsdC5jb2RlID09IDAgPyAn5Y+R6YCB5oiQ5YqfJyA6ICflj5HpgIHlpLHotKUnXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzQ29kZTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aXRsZSA9ICfor7floavlhpnmiYvmnLrlj7fnoIHvvIEnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWAkuiuoeaXtue7k+adn+Wbnuiwg1xyXG4gICAgICovXHJcbiAgICBmaW5pc2goKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgaXNDb2RlOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKblkIzmhI/mnaHmrL5cclxuICAgICAqIEBwYXJhbSBlIOS6i+S7tuWvueixoVxyXG4gICAgICovXHJcbiAgICBhZ2dyZWVtZW50cyhlOiB7IGRldGFpbDogYW55IH0pIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBjaGVja2VkOiBlLmRldGFpbFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55uR5ZCs6aqM6K+B56CBXHJcbiAgICAgKiBAcGFyYW0gZSDkuovku7blr7nosaFcclxuICAgICAqL1xyXG4gICAgY2hhbmdlQ29kZShlOiB7IGRldGFpbDogeyB2YWx1ZTogYW55IH0gfSkge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIG1zZzogZS5kZXRhaWwudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOebkeWQrOWPt+eggeWPmOWMllxyXG4gICAgICogQHBhcmFtIGUg5LqL5Lu25a+56LGhXHJcbiAgICAgKi9cclxuICAgIGNoYW5nZVBob25lKGU6IHsgZGV0YWlsOiB7IHZhbHVlOiBhbnkgfSB9KSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgcGhvbmU6IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpqozor4HmiYvmnLrpqozor4HnoIFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlIFxyXG4gICAgICovXHJcbiAgICB2ZXJpZnlDb2RlKGU6IHsgZGV0YWlsOiB7IHZhbHVlOiBzdHJpbmcgfSB9KSB7XHJcbiAgICAgICAgaWYgKGUuZGV0YWlsLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICghY29kZVJ1bChlLmRldGFpbC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfpqozor4HnoIHkuI3mraPnoa4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbXNnOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVyQ29kZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6aqM6K+B5omL5py65Y+356CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZSBcclxuICAgICAqL1xyXG4gICAgdmVyaWZ5UGhvbmUoZTogeyBkZXRhaWw6IHsgdmFsdWU6IHN0cmluZyB9IH0pIHtcclxuICAgICAgICBpZiAoZS5kZXRhaWwudmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKCFwaG9uZVJ1bChlLmRldGFpbC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiYvmnLrlj7fnoIHmoLzlvI/kuI3mraPnoa4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmU6ICcnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJQaG9uZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpqozor4Hlr4bnoIFcclxuICAgICAqIEBwYXJhbSB7T2JqZX0gZSBcclxuICAgICAqL1xyXG4gICAgdmVyaWZ5UGFzc3dvcmQoZTogeyBkZXRhaWw6IHsgdmFsdWU6IHN0cmluZyB9IH0pIHtcclxuICAgICAgICBpZiAoIXBhc3N3b3JkUnVsKGUuZGV0YWlsLnZhbHVlKSkge1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICflr4bnoIHmoLzlvI/kuI3mraPnoa4nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgdmVyUGFzc3dvcmQ6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uR5a6a5omL5py6XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHJlZ2lzdGVyKCkge1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIHZlckNvZGUsXHJcbiAgICAgICAgICAgIHZlclBob25lLFxyXG4gICAgICAgICAgICBjaGVja2VkXHJcbiAgICAgICAgfSA9IHRoaXMuZGF0YVxyXG4gICAgICAgIGlmICh2ZXJDb2RlICYmIHZlclBob25lICYmIGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgbGV0IHtcclxuICAgICAgICAgICAgICAgIG1zZyxcclxuICAgICAgICAgICAgICAgIHBob25lXHJcbiAgICAgICAgICAgIH0gPSB0aGlzLmRhdGFcclxuICAgICAgICAgICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgICAgICBtc2csXHJcbiAgICAgICAgICAgICAgICBwaG9uZSxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci5iaW5kUGhvbmUocGFyYW0pXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAxOSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gcmVzdWx0LmNvZGUgPT0gMCA/ICfnu5HlrprmiJDlip8nIDogcmVzdWx0Lm1zZ1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1c2VySW5mbyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWlzRW1wdHkodXNlckluZm8pKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlckluZm8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvLnBob25lID0gYCR7cGhvbmUuc3Vic3RyKDAsIDMpfSoqKioke3Bob25lLnN1YnN0cigtNCl9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygncGhvbmVTdGF0ZScsIDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycsIHVzZXJJbmZvKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGggfSA9IHRoaXMuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd1c2VyJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9ICcvcGFnZXMvdXNlci91c2VyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2hvbWUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gJy9wYWdlcy9ob21lL2hvbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgKiDnlKjmiLfnmbvlvZVcclxuICAgKi9cclxuICAgIGFzeW5jIGxvZ2luKCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICAgICAgICBsb2FkU3RhdHVzOiBmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyLnd4bG9naW4ocGFyYW0pXHJcbiAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIHRva2VuOiByZXN1bHQudG9rZW5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz6IGU5b2T5YmN6LSm5oi3XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGNvbmZpcm0oKSB7XHJcbiAgICAgICAgbGV0IHtcclxuICAgICAgICAgICAgbXNnLFxyXG4gICAgICAgICAgICBwaG9uZVxyXG4gICAgICAgIH0gPSB0aGlzLmRhdGFcclxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgbXNnLFxyXG4gICAgICAgICAgICBwaG9uZSxcclxuICAgICAgICAgICAgY29uZGl0aW9uOiAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci5iaW5kUGhvbmUocGFyYW0pXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSByZXN1bHQuZGF0YVxyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICAgIHVybDogYC9wYWdlcy91c2VyL3VzZXI/cmVsb2dpbj0xYCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFBob25lKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59KSJdfQ==