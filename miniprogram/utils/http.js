"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config/config");
var util_1 = require("../utils/util");
var tips = {
    401: '无效token，请求受限',
    403: '权限不足，无法请求',
    404: '请求不存在，请确认路径或参数',
    500: '执行失败未知异常',
    777: '抱歉，出现未知错误，请检查网络连接',
};
var Http = (function () {
    function Http() {
    }
    Http.prototype.request = function (param) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a = param.token, token = _a === void 0 ? true : _a;
            var header = {
                'content-type': 'application/json',
                'token': token ? "" + wx.getStorageSync('token') : ''
            };
            param = Object.assign(param, { resolve: resolve, reject: reject, header: header });
            _this.interceptor(param);
        }).catch(function (err) {
            console.log(err);
            _this.show_error(777);
        });
    };
    Http.prototype.interceptor = function (param) {
        var _this = this;
        var loadStatus = param.loadStatus, _a = param.loading, loading = _a === void 0 ? '' : _a;
        loadStatus && wx.showLoading({ title: loading });
        if (loadStatus) {
            setTimeout(function () {
                _this.send(param);
            }, 1000);
        }
        else {
            this.send(param);
        }
    };
    Http.prototype.send = function (param) {
        var _this = this;
        var url = param.url, eject = param.eject, header = param.header, reject = param.reject, overall = param.overall, resolve = param.resolve, _a = param.data, data = _a === void 0 ? {} : _a, loadStatus = param.loadStatus, _b = param.method, method = _b === void 0 ? 'GET' : _b;
        wx.request({
            url: overall ? url : config_1.APP_BASE_API[config_1.Mode] + url,
            data: data,
            method: method,
            header: header,
            success: function (result) {
                var code = result.statusCode.toString();
                if (code.startsWith('2')) {
                    if (result.data.status == 401) {
                        if (eject) {
                            resolve({
                                code: 401,
                                data: {},
                                msg: ''
                            });
                        }
                        else {
                            wx.clearStorage({
                                success: function () {
                                    setTimeout(function () {
                                        wx.reLaunch({
                                            url: '/pages/home/home',
                                        });
                                    }, 1000);
                                },
                            });
                        }
                    }
                    else {
                        resolve(result.data);
                    }
                }
                else {
                    _this.show_error(code);
                }
            },
            fail: function (err) {
                reject(err);
            },
            complete: function () {
                loadStatus && wx.hideLoading();
            }
        });
    };
    Http.prototype._refetch = function (params) {
        var _this = this;
        wx.login({
            success: function (res) {
                var code = res.code;
                wx.request({
                    url: config_1.APP_BASE_API[config_1.Mode] + "wxlogin",
                    method: 'POST',
                    data: { code: code },
                    success: function (result) {
                        if (result.code == 0) {
                            var token = result.token, phoneState = result.phoneState;
                            var param = { token: token, phoneState: phoneState };
                            util_1.setStorages(param);
                            _this.request(params);
                        }
                    }
                });
            }
        });
    };
    Http.prototype.show_error = function (error_code) {
        if (!error_code) {
            error_code = 777;
        }
        wx.showToast({
            title: tips[error_code],
            icon: 'none'
        });
    };
    return Http;
}());
exports.default = Http;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyQ0FBcUQ7QUFHckQsc0NBQTJDO0FBSzNDLElBQU0sSUFBSSxHQUFRO0lBQ2hCLEdBQUcsRUFBRSxjQUFjO0lBQ25CLEdBQUcsRUFBRSxXQUFXO0lBQ2hCLEdBQUcsRUFBRSxnQkFBZ0I7SUFDckIsR0FBRyxFQUFFLFVBQVU7SUFDZixHQUFHLEVBQUUsbUJBQW1CO0NBQ3pCLENBQUE7QUFLRDtJQUFBO0lBMEpBLENBQUM7SUFwSkMsc0JBQU8sR0FBUCxVQUFRLEtBQXVCO1FBQS9CLGlCQWFDO1FBWkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQzNCLElBQUEsS0FBaUIsS0FBSyxNQUFWLEVBQVosS0FBSyxtQkFBRyxJQUFJLEtBQUEsQ0FBVTtZQUM1QixJQUFJLE1BQU0sR0FBRztnQkFDWCxjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDdEQsQ0FBQTtZQUNELEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQTtZQUN6RCxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3pCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2hCLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDdEIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBTU8sMEJBQVcsR0FBbkIsVUFBb0IsS0FBdUI7UUFB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bkMsTUFBTSxFQUFFLE1BQU07b0JBQ2QsSUFBSSxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUU7b0JBQ2QsT0FBTyxFQUFFLFVBQUMsTUFBVzt3QkFDbkIsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTs0QkFDZCxJQUFBLEtBQUssR0FBaUIsTUFBTSxNQUF2QixFQUFFLFVBQVUsR0FBSyxNQUFNLFdBQVgsQ0FBVzs0QkFDbEMsSUFBTSxLQUFLLEdBQUcsRUFBRSxLQUFLLE9BQUEsRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFBOzRCQUNuQyxrQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFBOzRCQUNsQixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO3lCQUNyQjtvQkFDSCxDQUFDO2lCQUNGLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBTU8seUJBQVUsR0FBbEIsVUFBbUIsVUFBMkI7UUFDNUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLFVBQVUsR0FBRyxHQUFHLENBQUE7U0FDakI7UUFDRCxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDdkIsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQUExSkQsSUEwSkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKirlr7zlhaXoh6rlrprkuYnphY3nva7mlofku7YgKi9cclxuaW1wb3J0IHsgQVBQX0JBU0VfQVBJLCBNb2RlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZydcclxuXHJcbi8qIOWvvOWFpeW3peWFt+exuyAqL1xyXG5pbXBvcnQgeyBzZXRTdG9yYWdlcyB9IGZyb20gJy4uL3V0aWxzL3V0aWwnXHJcblxyXG4vKirlr7zlhaVUU+aOpeWPoyAqL1xyXG5pbXBvcnQgeyBSZXF1ZXN0UGFyYW1ldGVyLCBSZXF1ZXN0UHJvbWlzZSB9IGZyb20gJy4uL3R5cGVzL2h0dHAnXHJcblxyXG5jb25zdCB0aXBzOiBhbnkgPSB7XHJcbiAgNDAxOiAn5peg5pWIdG9rZW7vvIzor7fmsYLlj5fpmZAnLFxyXG4gIDQwMzogJ+adg+mZkOS4jei2s++8jOaXoOazleivt+axgicsXHJcbiAgNDA0OiAn6K+35rGC5LiN5a2Y5Zyo77yM6K+356Gu6K6k6Lev5b6E5oiW5Y+C5pWwJyxcclxuICA1MDA6ICfmiafooYzlpLHotKXmnKrnn6XlvILluLgnLFxyXG4gIDc3NzogJ+aKseatie+8jOWHuueOsOacquefpemUmeivr++8jOivt+ajgOafpee9kee7nOi/nuaOpScsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXF1ZXN0572R57uc6K+35rGC5bCB6KOFXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwIHtcclxuXHJcbiAgLyoqXHJcbiAgICog5Y+C5pWw5aSE55CGXHJcbiAgICogQHBhcmFtIHBhcmFtIOivt+axguWPguaVsFxyXG4gICAqL1xyXG4gIHJlcXVlc3QocGFyYW06IFJlcXVlc3RQYXJhbWV0ZXIpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBsZXQgeyB0b2tlbiA9IHRydWUgfSA9IHBhcmFtXHJcbiAgICAgIGxldCBoZWFkZXIgPSB7XHJcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAndG9rZW4nOiB0b2tlbiA/IGAke3d4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpfWAgOiAnJ1xyXG4gICAgICB9XHJcbiAgICAgIHBhcmFtID0gT2JqZWN0LmFzc2lnbihwYXJhbSwgeyByZXNvbHZlLCByZWplY3QsIGhlYWRlciB9KVxyXG4gICAgICB0aGlzLmludGVyY2VwdG9yKHBhcmFtKVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB0aGlzLnNob3dfZXJyb3IoNzc3KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaLpuaIquWZqFxyXG4gICAqIEBwYXJhbSBwYXJhbSDor7fmsYLlj4LmlbBcclxuICAgKi9cclxuICBwcml2YXRlIGludGVyY2VwdG9yKHBhcmFtOiBSZXF1ZXN0UGFyYW1ldGVyKTogdm9pZCB7XHJcbiAgICBsZXQgeyBsb2FkU3RhdHVzLCBsb2FkaW5nID0gJycgfSA9IHBhcmFtXHJcbiAgICBsb2FkU3RhdHVzICYmIHd4LnNob3dMb2FkaW5nKHsgdGl0bGU6IGxvYWRpbmcgfSlcclxuICAgIGlmIChsb2FkU3RhdHVzKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VuZChwYXJhbSlcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbmQocGFyYW0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlj5HpgIHor7fmsYJcclxuICAgKiBAcGFyYW0gcGFyYW0g6K+35rGC5Y+C5pWwXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZW5kKHBhcmFtOiBSZXF1ZXN0UGFyYW1ldGVyKTogdm9pZCB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIGVqZWN0LFxyXG4gICAgICBoZWFkZXIsXHJcbiAgICAgIHJlamVjdCxcclxuICAgICAgLy8gcmVmZXRjaCA9IHRydWUsXHJcbiAgICAgIG92ZXJhbGwsXHJcbiAgICAgIHJlc29sdmUsXHJcbiAgICAgIGRhdGEgPSB7fSxcclxuICAgICAgbG9hZFN0YXR1cyxcclxuICAgICAgbWV0aG9kID0gJ0dFVCdcclxuICAgIH0gPSBwYXJhbVxyXG5cclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IG92ZXJhbGwgPyB1cmwgOiBBUFBfQkFTRV9BUElbTW9kZV0gKyB1cmwsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIG1ldGhvZCxcclxuICAgICAgaGVhZGVyLFxyXG4gICAgICBzdWNjZXNzOiAocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBjb2RlID0gcmVzdWx0LnN0YXR1c0NvZGUudG9TdHJpbmcoKVxyXG4gICAgICAgIGlmIChjb2RlLnN0YXJ0c1dpdGgoJzInKSkge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgICAgICAgaWYgKGVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICBjb2RlOiA0MDEsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgIG1zZzogJydcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgLy8gICB0aXRsZTogJ+i6q+S7vemqjOivgeWksei0pe+8jOivt+mHjeaWsOeZu+W9lScsXHJcbiAgICAgICAgICAgICAgLy8gICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgIHd4LmNsZWFyU3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9ob21lL2hvbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAvLyBpZiAocmVmZXRjaCkge1xyXG4gICAgICAgICAgICAgIC8vICAgdGhpcy5fcmVmZXRjaChwYXJhbSlcclxuICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAvLyAgICAgdGl0bGU6ICfouqvku73pqozor4HlpLHotKXvvIzor7fph43mlrDnmbvlvZUnLFxyXG4gICAgICAgICAgICAgIC8vICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAvLyAgIH0pXHJcbiAgICAgICAgICAgICAgLy8gICB3eC5jbGVhclN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgIC8vICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICAgIHVybDogJy9wYWdlcy91c2VyL3VzZXInLFxyXG4gICAgICAgICAgICAgIC8vICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAvLyAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgICAvLyAgIH0pXHJcbiAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5kYXRhKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNob3dfZXJyb3IoY29kZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IGVyciA9PiB7XHJcbiAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgfSxcclxuICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICBsb2FkU3RhdHVzICYmIHd4LmhpZGVMb2FkaW5nKClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qIOmHjeaWsOWPkemAgeivt+axgiAqL1xyXG4gIF9yZWZldGNoKHBhcmFtczogUmVxdWVzdFBhcmFtZXRlcikge1xyXG4gICAgd3gubG9naW4oe1xyXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29kZSB9ID0gcmVzXHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IGAke0FQUF9CQVNFX0FQSVtNb2RlXX13eGxvZ2luYCxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgZGF0YTogeyBjb2RlIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiAocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICBsZXQgeyB0b2tlbiwgcGhvbmVTdGF0ZSB9ID0gcmVzdWx0XHJcbiAgICAgICAgICAgICAgY29uc3QgcGFyYW0gPSB7IHRva2VuLCBwaG9uZVN0YXRlIH1cclxuICAgICAgICAgICAgICBzZXRTdG9yYWdlcyhwYXJhbSlcclxuICAgICAgICAgICAgICB0aGlzLnJlcXVlc3QocGFyYW1zKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOW8ueWHuumUmeivr+aPkOekulxyXG4gICAqIEBwYXJhbSBlcnJvcl9jb2RlIOmUmeivr+S7o+eggVxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2hvd19lcnJvcihlcnJvcl9jb2RlOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICghZXJyb3JfY29kZSkge1xyXG4gICAgICBlcnJvcl9jb2RlID0gNzc3XHJcbiAgICB9XHJcbiAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICB0aXRsZTogdGlwc1tlcnJvcl9jb2RlXSxcclxuICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICB9KVxyXG4gIH1cclxufSJdfQ==