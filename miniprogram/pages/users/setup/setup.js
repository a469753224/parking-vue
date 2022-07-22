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
    data: {},
    onLoad: function (_options) { },
    logout: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, server.loginout()];
                    case 1:
                        result = _a.sent();
                        title = result.code == 401 ? '您尚未登录' : '退出登录';
                        if (result.code == 0) {
                            wx.showToast({
                                title: title,
                            });
                            wx.clearStorage();
                            setTimeout(function () {
                                wx.reLaunch({
                                    url: '/pages/user/user',
                                });
                            }, 500);
                        }
                        else {
                            wx.showToast({
                                title: title,
                                icon: 'none'
                            });
                        }
                        return [2];
                }
            });
        });
    },
    removeStorage: function () {
        wx.clearStorage({
            success: function (_res) {
                wx.showToast({
                    title: '清除成功',
                });
                setTimeout(function () {
                    wx.reLaunch({
                        url: '/pages/user/user',
                    });
                }, 800);
            },
        });
    },
    accsecurity: function () {
        wx.navigateTo({
            url: '/pages/users/accsecurity/accsecurity',
        });
    },
    aboutus: function () {
        wx.navigateTo({
            url: '/pages/users/aboutus/aboutus',
        });
    },
    feekback: function () {
        wx.navigateTo({
            url: '/pages/users/feedback/feedback',
        });
    },
    authorTools: function () {
        wx.navigateTo({
            url: '/pages/users/authorTools/authorTools'
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHdEQUF1RDtBQUd2RCxJQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFXLEVBQUUsQ0FBQTtBQUVoQyxJQUFJLENBQUM7SUFLSixJQUFJLEVBQUUsRUFBRTtJQUtSLE1BQU0sRUFBRSxVQUFVLFFBQVEsSUFBRyxDQUFDO0lBSXhCLE1BQU07Ozs7OzRCQUNJLFdBQU0sTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFBOzt3QkFBaEMsTUFBTSxHQUFHLFNBQXVCO3dCQUNoQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFBO3dCQUNuRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFOzRCQUNyQixFQUFFLENBQUMsU0FBUyxDQUFDO2dDQUNaLEtBQUssT0FBQTs2QkFDTCxDQUFDLENBQUE7NEJBQ0YsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFBOzRCQUNqQixVQUFVLENBQUM7Z0NBQ1YsRUFBRSxDQUFDLFFBQVEsQ0FBQztvQ0FDWCxHQUFHLEVBQUUsa0JBQWtCO2lDQUN2QixDQUFDLENBQUE7NEJBQ0gsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3lCQUNSOzZCQUFJOzRCQUNKLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0NBQ1osS0FBSyxPQUFBO2dDQUNMLElBQUksRUFBRSxNQUFNOzZCQUNaLENBQUMsQ0FBQTt5QkFDRjs7Ozs7S0FDRDtJQUtELGFBQWE7UUFDWixFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ2YsT0FBTyxFQUFFLFVBQUMsSUFBSTtnQkFDYixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNaLEtBQUssRUFBRSxNQUFNO2lCQUNiLENBQUMsQ0FBQTtnQkFDRixVQUFVLENBQUM7b0JBQ1YsRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFDWCxHQUFHLEVBQUUsa0JBQWtCO3FCQUN2QixDQUFDLENBQUE7Z0JBQ0gsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ1IsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFLRCxXQUFXO1FBQ1YsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxzQ0FBc0M7U0FDM0MsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUtELE9BQU87UUFDTixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLDhCQUE4QjtTQUNuQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBS0QsUUFBUTtRQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsZ0NBQWdDO1NBQ3JDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFLRCxXQUFXO1FBQ1YsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxzQ0FBc0M7U0FDM0MsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUNELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIOWvvOWFpeaooeWdlyAqL1xyXG5pbXBvcnQgU2lndXBTZXJ2ZXIgZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS9zaWd1cC9zZXJ2ZXInXHJcblxyXG4vKiDlrp7kvovljJbmqKHlnZcgKi9cclxuY29uc3Qgc2VydmVyID0gbmV3IFNpZ3VwU2VydmVyKClcclxuXHJcblBhZ2Uoe1xyXG5cclxuXHQvKipcclxuXHQgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuXHQgKi9cclxuXHRkYXRhOiB7fSxcclxuXHJcblx0LyoqXHJcblx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuXHQgKi9cclxuXHRvbkxvYWQ6IGZ1bmN0aW9uIChfb3B0aW9ucykge30sXHJcblx0IC8qKlxyXG5cdCAgKiDpgIDlh7rnmbvlvZVcclxuXHQgICovXHJcblx0YXN5bmMgbG9nb3V0KCkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyLmxvZ2lub3V0KClcclxuXHRcdGNvbnN0IHRpdGxlID0gcmVzdWx0LmNvZGUgPT0gNDAxID8gJ+aCqOWwmuacqueZu+W9lScgOiAn6YCA5Ye655m75b2VJ1xyXG5cdFx0aWYgKHJlc3VsdC5jb2RlID09IDApIHtcclxuXHRcdFx0d3guc2hvd1RvYXN0KHtcclxuXHRcdFx0XHR0aXRsZSxcclxuXHRcdFx0fSlcclxuXHRcdFx0d3guY2xlYXJTdG9yYWdlKClcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0d3gucmVMYXVuY2goe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL3VzZXIvdXNlcicsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSwgNTAwKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR3eC5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdHRpdGxlLFxyXG5cdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIOa4hemZpOacrOWcsOe8k+WtmFxyXG5cdCAqL1xyXG5cdHJlbW92ZVN0b3JhZ2UoKSB7XHJcblx0XHR3eC5jbGVhclN0b3JhZ2Uoe1xyXG5cdFx0XHRzdWNjZXNzOiAoX3JlcykgPT4ge1xyXG5cdFx0XHRcdHd4LnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+a4hemZpOaIkOWKnycsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHd4LnJlTGF1bmNoKHtcclxuXHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL3VzZXIvdXNlcicsXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0sIDgwMClcclxuXHRcdFx0fSxcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICog6Lez6L2s6LSm5Y+35LiO5a6J5YWoXHJcblx0ICovXHJcblx0YWNjc2VjdXJpdHkoKSB7XHJcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0dXJsOiAnL3BhZ2VzL3VzZXJzL2FjY3NlY3VyaXR5L2FjY3NlY3VyaXR5JyxcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICog6Lez6L2s5YWz5LqO5oiR5LusXHJcblx0ICovXHJcblx0YWJvdXR1cygpIHtcclxuXHRcdHd4Lm5hdmlnYXRlVG8oe1xyXG5cdFx0XHR1cmw6ICcvcGFnZXMvdXNlcnMvYWJvdXR1cy9hYm91dHVzJyxcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICog6Lez6L2s5oSP6KeB5Y+N6aaIXHJcblx0ICovXHJcblx0ZmVla2JhY2soKSB7XHJcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0dXJsOiAnL3BhZ2VzL3VzZXJzL2ZlZWRiYWNrL2ZlZWRiYWNrJyxcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICog6Lez6L2s5o6I5p2D566h55CGXHJcblx0ICovXHJcblx0YXV0aG9yVG9vbHMoKXtcclxuXHRcdHd4Lm5hdmlnYXRlVG8oe1xyXG5cdFx0XHR1cmw6ICcvcGFnZXMvdXNlcnMvYXV0aG9yVG9vbHMvYXV0aG9yVG9vbHMnXHJcblx0XHR9KVxyXG5cdH1cclxufSkiXX0=