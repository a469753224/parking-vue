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
                            wx.showToast({
                                title: '身份验证失败，请重新登录',
                                icon: 'none'
                            });
                            wx.clearStorage({
                                success: function () {
                                    setTimeout(function () {
                                        wx.reLaunch({
                                            url: '/pages/user/user',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyQ0FBcUQ7QUFHckQsc0NBQTJDO0FBSzNDLElBQU0sSUFBSSxHQUFRO0lBQ2hCLEdBQUcsRUFBRSxjQUFjO0lBQ25CLEdBQUcsRUFBRSxXQUFXO0lBQ2hCLEdBQUcsRUFBRSxnQkFBZ0I7SUFDckIsR0FBRyxFQUFFLFVBQVU7SUFDZixHQUFHLEVBQUUsbUJBQW1CO0NBQ3pCLENBQUE7QUFLRDtJQUFBO0lBMEpBLENBQUM7SUFwSkMsc0JBQU8sR0FBUCxVQUFRLEtBQXVCO1FBQS9CLGlCQWFDO1FBWkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQzNCLElBQUEsS0FBaUIsS0FBSyxNQUFWLEVBQVosS0FBSyxtQkFBRyxJQUFJLEtBQUEsQ0FBVTtZQUM1QixJQUFJLE1BQU0sR0FBRztnQkFDWCxjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDdEQsQ0FBQTtZQUNELEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQTtZQUN6RCxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3pCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2hCLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDdEIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBTU8sMEJBQVcsR0FBbkIsVUFBb0IsS0FBdUI7UUFB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RyxLQUFSLENBQVE7Z0JBQ3BCLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0JBQ1QsR0FBRyxFQUFLLHFCQUFZLENBQUMsYUFBSSxDQUFDLFlBQVM7b0JBQ25DLE1BQU0sRUFBRSxNQUFNO29CQUNkLElBQUksRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFO29CQUNkLE9BQU8sRUFBRSxVQUFDLE1BQVc7d0JBQ25CLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7NEJBQ2QsSUFBQSxLQUFLLEdBQWlCLE1BQU0sTUFBdkIsRUFBRSxVQUFVLEdBQUssTUFBTSxXQUFYLENBQVc7NEJBQ2xDLElBQU0sS0FBSyxHQUFHLEVBQUUsS0FBSyxPQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsQ0FBQTs0QkFDbkMsa0JBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTs0QkFDbEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTt5QkFDckI7b0JBQ0gsQ0FBQztpQkFDRixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQU1PLHlCQUFVLEdBQWxCLFVBQW1CLFVBQTJCO1FBQzVDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixVQUFVLEdBQUcsR0FBRyxDQUFBO1NBQ2pCO1FBQ0QsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3ZCLElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBMUpELElBMEpDIiwic291cmNlc0NvbnRlbnQiOlsiLyoq5a+85YWl6Ieq5a6a5LmJ6YWN572u5paH5Lu2ICovXHJcbmltcG9ydCB7IEFQUF9CQVNFX0FQSSwgTW9kZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcnXHJcblxyXG4vKiDlr7zlhaXlt6XlhbfnsbsgKi9cclxuaW1wb3J0IHsgc2V0U3RvcmFnZXMgfSBmcm9tICcuLi91dGlscy91dGlsJ1xyXG5cclxuLyoq5a+85YWlVFPmjqXlj6MgKi9cclxuaW1wb3J0IHsgUmVxdWVzdFBhcmFtZXRlciwgUmVxdWVzdFByb21pc2UgfSBmcm9tICcuLi90eXBlcy9odHRwJ1xyXG5cclxuY29uc3QgdGlwczogYW55ID0ge1xyXG4gIDQwMTogJ+aXoOaViHRva2Vu77yM6K+35rGC5Y+X6ZmQJyxcclxuICA0MDM6ICfmnYPpmZDkuI3otrPvvIzml6Dms5Xor7fmsYInLFxyXG4gIDQwNDogJ+ivt+axguS4jeWtmOWcqO+8jOivt+ehruiupOi3r+W+hOaIluWPguaVsCcsXHJcbiAgNTAwOiAn5omn6KGM5aSx6LSl5pyq55+l5byC5bi4JyxcclxuICA3Nzc6ICfmirHmrYnvvIzlh7rnjrDmnKrnn6XplJnor6/vvIzor7fmo4Dmn6XnvZHnu5zov57mjqUnLFxyXG59XHJcblxyXG4vKipcclxuICogUmVxdWVzdOe9kee7nOivt+axguWwgeijhVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIOWPguaVsOWkhOeQhlxyXG4gICAqIEBwYXJhbSBwYXJhbSDor7fmsYLlj4LmlbBcclxuICAgKi9cclxuICByZXF1ZXN0KHBhcmFtOiBSZXF1ZXN0UGFyYW1ldGVyKTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbGV0IHsgdG9rZW4gPSB0cnVlIH0gPSBwYXJhbVxyXG4gICAgICBsZXQgaGVhZGVyID0ge1xyXG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ3Rva2VuJzogdG9rZW4gPyBgJHt3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKX1gIDogJydcclxuICAgICAgfVxyXG4gICAgICBwYXJhbSA9IE9iamVjdC5hc3NpZ24ocGFyYW0sIHsgcmVzb2x2ZSwgcmVqZWN0LCBoZWFkZXIgfSlcclxuICAgICAgdGhpcy5pbnRlcmNlcHRvcihwYXJhbSlcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgdGhpcy5zaG93X2Vycm9yKDc3NylcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmi6bmiKrlmahcclxuICAgKiBAcGFyYW0gcGFyYW0g6K+35rGC5Y+C5pWwXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBpbnRlcmNlcHRvcihwYXJhbTogUmVxdWVzdFBhcmFtZXRlcik6IHZvaWQge1xyXG4gICAgbGV0IHsgbG9hZFN0YXR1cywgbG9hZGluZyA9ICcnIH0gPSBwYXJhbVxyXG4gICAgbG9hZFN0YXR1cyAmJiB3eC5zaG93TG9hZGluZyh7IHRpdGxlOiBsb2FkaW5nIH0pXHJcbiAgICBpZiAobG9hZFN0YXR1cykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnNlbmQocGFyYW0pXHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZW5kKHBhcmFtKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Y+R6YCB6K+35rGCXHJcbiAgICogQHBhcmFtIHBhcmFtIOivt+axguWPguaVsFxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2VuZChwYXJhbTogUmVxdWVzdFBhcmFtZXRlcik6IHZvaWQge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBlamVjdCxcclxuICAgICAgaGVhZGVyLFxyXG4gICAgICByZWplY3QsXHJcbiAgICAgIC8vIHJlZmV0Y2ggPSB0cnVlLFxyXG4gICAgICBvdmVyYWxsLFxyXG4gICAgICByZXNvbHZlLFxyXG4gICAgICBkYXRhID0ge30sXHJcbiAgICAgIGxvYWRTdGF0dXMsXHJcbiAgICAgIG1ldGhvZCA9ICdHRVQnXHJcbiAgICB9ID0gcGFyYW1cclxuXHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBvdmVyYWxsID8gdXJsIDogQVBQX0JBU0VfQVBJW01vZGVdICsgdXJsLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBtZXRob2QsXHJcbiAgICAgIGhlYWRlcixcclxuICAgICAgc3VjY2VzczogKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IHJlc3VsdC5zdGF0dXNDb2RlLnRvU3RyaW5nKClcclxuICAgICAgICBpZiAoY29kZS5zdGFydHNXaXRoKCcyJykpIHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gNDAxKSB7XHJcbiAgICAgICAgICAgIGlmIChlamVjdCkge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgY29kZTogNDAxLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICBtc2c6ICcnXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfouqvku73pqozor4HlpLHotKXvvIzor7fph43mlrDnmbvlvZUnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB3eC5jbGVhclN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvdXNlci91c2VyJyxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgLy8gaWYgKHJlZmV0Y2gpIHtcclxuICAgICAgICAgICAgICAvLyAgIHRoaXMuX3JlZmV0Y2gocGFyYW0pXHJcbiAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAn6Lqr5Lu96aqM6K+B5aSx6LSl77yM6K+36YeN5paw55m75b2VJyxcclxuICAgICAgICAgICAgICAvLyAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgLy8gICB9KVxyXG4gICAgICAgICAgICAgIC8vICAgd3guY2xlYXJTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAvLyAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vICAgICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgICAgICAgIC8vICAgICAgICAgICB1cmw6ICcvcGFnZXMvdXNlci91c2VyJyxcclxuICAgICAgICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gICB9KVxyXG4gICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQuZGF0YSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zaG93X2Vycm9yKGNvZGUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBlcnIgPT4ge1xyXG4gICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgbG9hZFN0YXR1cyAmJiB3eC5oaWRlTG9hZGluZygpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKiDph43mlrDlj5HpgIHor7fmsYIgKi9cclxuICBfcmVmZXRjaChwYXJhbXM6IFJlcXVlc3RQYXJhbWV0ZXIpIHtcclxuICAgIHd4LmxvZ2luKHtcclxuICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICBjb25zdCB7IGNvZGUgfSA9IHJlc1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiBgJHtBUFBfQkFTRV9BUElbTW9kZV19d3hsb2dpbmAsXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGRhdGE6IHsgY29kZSB9LFxyXG4gICAgICAgICAgc3VjY2VzczogKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgbGV0IHsgdG9rZW4sIHBob25lU3RhdGUgfSA9IHJlc3VsdFxyXG4gICAgICAgICAgICAgIGNvbnN0IHBhcmFtID0geyB0b2tlbiwgcGhvbmVTdGF0ZSB9XHJcbiAgICAgICAgICAgICAgc2V0U3RvcmFnZXMocGFyYW0pXHJcbiAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0KHBhcmFtcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlvLnlh7rplJnor6/mj5DnpLpcclxuICAgKiBAcGFyYW0gZXJyb3JfY29kZSDplJnor6/ku6PnoIFcclxuICAgKi9cclxuICBwcml2YXRlIHNob3dfZXJyb3IoZXJyb3JfY29kZTogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoIWVycm9yX2NvZGUpIHtcclxuICAgICAgZXJyb3JfY29kZSA9IDc3N1xyXG4gICAgfVxyXG4gICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgdGl0bGU6IHRpcHNbZXJyb3JfY29kZV0sXHJcbiAgICAgIGljb246ICdub25lJ1xyXG4gICAgfSlcclxuICB9XHJcbn0iXX0=