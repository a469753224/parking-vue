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
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../../utils/http");
var SigupModel = (function (_super) {
    __extends(SigupModel, _super);
    function SigupModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SigupModel.prototype.loginModel = function (data) {
        var username = data.username, password = data.password;
        var url = "login?username=" + username + "&password=" + password;
        var param = {
            url: url,
            data: data,
            token: false,
            method: 'POST',
            loadStatus: true,
            loading: '登录中，请稍后~'
        };
        return this.request(param);
    };
    SigupModel.prototype.msgLoginModel = function (data) {
        var url = "user/msgLogin";
        var param = {
            url: url,
            data: data,
            token: false,
            method: 'POST'
        };
        return this.request(param);
    };
    SigupModel.prototype.userRegisterModel = function (data) {
        var url = "user/userRegister";
        var param = {
            url: url,
            data: data,
            token: false,
            method: 'POST'
        };
        return this.request(param);
    };
    SigupModel.prototype.wxloginModel = function (data) {
        var loadStatus = data.loadStatus, loading = data.loading;
        var url = "wxlogin";
        var param = {
            url: url,
            data: data,
            token: false,
            method: 'POST',
            loadStatus: loadStatus,
            loading: loading
        };
        return this.request(param);
    };
    SigupModel.prototype.bindPhoneModel = function (data) {
        var url = "user/bindPhone";
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    SigupModel.prototype.loginoutModel = function () {
        var url = 'myMenu/logout';
        var param = {
            url: url,
            data: {},
            eject: true,
            method: 'POST'
        };
        return this.request(param);
    };
    SigupModel.prototype.getPhoneNumberModel = function (data) {
        var url = "wxphone";
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    return SigupModel;
}(http_1.default));
exports.default = SigupModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0Q0FBc0M7QUFtQnRDO0lBQXdDLDhCQUFJO0lBQTVDOztJQStHQSxDQUFDO0lBekdDLCtCQUFVLEdBQVYsVUFBVyxJQUFhO1FBQ2hCLElBQUEsUUFBUSxHQUFlLElBQUksU0FBbkIsRUFBRSxRQUFRLEdBQUssSUFBSSxTQUFULENBQVM7UUFDakMsSUFBTSxHQUFHLEdBQUcsb0JBQWtCLFFBQVEsa0JBQWEsUUFBVSxDQUFBO1FBQzdELElBQU0sS0FBSyxHQUFHO1lBQ1osR0FBRyxLQUFBO1lBQ0gsSUFBSSxNQUFBO1lBQ0osS0FBSyxFQUFFLEtBQUs7WUFDWixNQUFNLEVBQVUsTUFBTTtZQUN0QixVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUUsVUFBVTtTQUNwQixDQUFBO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFNRCxrQ0FBYSxHQUFiLFVBQWMsSUFBYztRQUMxQixJQUFNLEdBQUcsR0FBRyxlQUFlLENBQUE7UUFDM0IsSUFBTSxLQUFLLEdBQUc7WUFDWixHQUFHLEtBQUE7WUFDSCxJQUFJLE1BQUE7WUFDSixLQUFLLEVBQUUsS0FBSztZQUNaLE1BQU0sRUFBVSxNQUFNO1NBQ3ZCLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQU1ELHNDQUFpQixHQUFqQixVQUFrQixJQUFrQjtRQUNsQyxJQUFNLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQTtRQUMvQixJQUFNLEtBQUssR0FBRztZQUNaLEdBQUcsS0FBQTtZQUNILElBQUksTUFBQTtZQUNKLEtBQUssRUFBRSxLQUFLO1lBQ1osTUFBTSxFQUFVLE1BQU07U0FDdkIsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBT0QsaUNBQVksR0FBWixVQUFhLElBQVM7UUFDZCxJQUFBLFVBQVUsR0FBYyxJQUFJLFdBQWxCLEVBQUUsT0FBTyxHQUFLLElBQUksUUFBVCxDQUFTO1FBQ2xDLElBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQTtRQUNyQixJQUFNLEtBQUssR0FBRztZQUNaLEdBQUcsS0FBQTtZQUNILElBQUksTUFBQTtZQUNKLEtBQUssRUFBRSxLQUFLO1lBQ1osTUFBTSxFQUFVLE1BQU07WUFDdEIsVUFBVSxZQUFBO1lBQ1YsT0FBTyxTQUFBO1NBQ1IsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBTUQsbUNBQWMsR0FBZCxVQUFlLElBQWU7UUFDNUIsSUFBTSxHQUFHLEdBQUcsZ0JBQWdCLENBQUE7UUFDNUIsSUFBTSxLQUFLLEdBQUc7WUFDWixHQUFHLEtBQUE7WUFDSCxJQUFJLE1BQUE7WUFDSixNQUFNLEVBQVUsTUFBTTtTQUN2QixDQUFBO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFLRCxrQ0FBYSxHQUFiO1FBQ0UsSUFBTSxHQUFHLEdBQUcsZUFBZSxDQUFBO1FBQzNCLElBQU0sS0FBSyxHQUFHO1lBQ1osR0FBRyxLQUFBO1lBQ0gsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsSUFBSTtZQUNYLE1BQU0sRUFBVSxNQUFNO1NBQ3ZCLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQU1ELHdDQUFtQixHQUFuQixVQUFvQixJQUFvQjtRQUN0QyxJQUFNLEdBQUcsR0FBRyxTQUFTLENBQUE7UUFDckIsSUFBTSxLQUFLLEdBQUc7WUFDWixHQUFHLEtBQUE7WUFDSCxJQUFJLE1BQUE7WUFDSixNQUFNLEVBQVUsTUFBTTtTQUN2QixDQUFBO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFSCxpQkFBQztBQUFELENBQUMsQUEvR0QsQ0FBd0MsY0FBSSxHQStHM0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDlr7zlhaXor7fmsYLnsbsgKi9cclxuaW1wb3J0IEh0dHAgZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCdcclxuXHJcbi8qIOWvvOWFpeivt+axguWPguaVsOaOpeWPoyBUU+aOpeWPo+exu+WeiyAqL1xyXG5pbXBvcnQge1xyXG4gIEFjY291bnQsXHJcbiAgR2V0UGhvbmVOdW1iZXIsXHJcbiAgTXNnTG9naW4sXHJcbiAgVXNlclJlZ2lzdGVyXHJcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3JlcXVlc3RJbnRlcmZhY2Uvc2lndXAnXHJcbmltcG9ydCB7XHJcbiAgQmluZFBob25lXHJcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3JlcXVlc3RJbnRlcmZhY2UvdXNlcidcclxuXHJcbi8qKuWvvOWFpee9kee7nOivt+axguaOpeWPoyBUU+aOpeWPo+exu+WeiyovXHJcbmltcG9ydCB7IFJlcXVlc3RQcm9taXNlLCBNZXRob2QgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9odHRwJ1xyXG5cclxuLyoqXHJcbiAqIOeZu+W9leazqOWGjOaooeWdly3mqKHlnovlsYJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ3VwTW9kZWwgZXh0ZW5kcyBIdHRwIHtcclxuXHJcbiAgLyoqXHJcbiAgICog6LSm5Y+35a+G56CB55m75b2V5o6l5Y+jXHJcbiAgICogQHBhcmFtIHtBY2NvdW50fSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICBsb2dpbk1vZGVsKGRhdGE6IEFjY291bnQpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICBsZXQgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IGRhdGFcclxuICAgIGNvbnN0IHVybCA9IGBsb2dpbj91c2VybmFtZT0ke3VzZXJuYW1lfSZwYXNzd29yZD0ke3Bhc3N3b3JkfWBcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIHRva2VuOiBmYWxzZSxcclxuICAgICAgbWV0aG9kOiA8TWV0aG9kPidQT1NUJyxcclxuICAgICAgbG9hZFN0YXR1czogdHJ1ZSxcclxuICAgICAgbG9hZGluZzogJ+eZu+W9leS4re+8jOivt+eojeWQjn4nXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAgKiDnn63kv6HnmbvlvZXmjqXlj6NcclxuICAgICAqIEBwYXJhbSB7TXNnTG9naW59IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAgICovXHJcbiAgbXNnTG9naW5Nb2RlbChkYXRhOiBNc2dMb2dpbik6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIGNvbnN0IHVybCA9IGB1c2VyL21zZ0xvZ2luYFxyXG4gICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgIHVybCxcclxuICAgICAgZGF0YSxcclxuICAgICAgdG9rZW46IGZhbHNlLFxyXG4gICAgICBtZXRob2Q6IDxNZXRob2Q+J1BPU1QnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5omL5py655+t5L+h5rOo5YaM5o6l5Y+jXHJcbiAgICogQHBhcmFtIHtVc2VyUmVnaXN0ZXJ9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIHVzZXJSZWdpc3Rlck1vZGVsKGRhdGE6IFVzZXJSZWdpc3Rlcik6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIGNvbnN0IHVybCA9IGB1c2VyL3VzZXJSZWdpc3RlcmBcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIHRva2VuOiBmYWxzZSxcclxuICAgICAgbWV0aG9kOiA8TWV0aG9kPidQT1NUJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSlcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiDnmbvlvZXlsI/nqIvluo9cclxuICAgKiBAcGFyYW0ge2FueX0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgd3hsb2dpbk1vZGVsKGRhdGE6IGFueSk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIGxldCB7IGxvYWRTdGF0dXMsIGxvYWRpbmcgfSA9IGRhdGFcclxuICAgIGNvbnN0IHVybCA9IGB3eGxvZ2luYFxyXG4gICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgIHVybCxcclxuICAgICAgZGF0YSxcclxuICAgICAgdG9rZW46IGZhbHNlLFxyXG4gICAgICBtZXRob2Q6IDxNZXRob2Q+J1BPU1QnLFxyXG4gICAgICBsb2FkU3RhdHVzLFxyXG4gICAgICBsb2FkaW5nXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5b6u5L+h5bCP56iL5bqP57uR5a6a5omL5py65Y+356CBXHJcbiAgICogQHBhcmFtIHtCaW5kUGhvbmV9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIGJpbmRQaG9uZU1vZGVsKGRhdGE6IEJpbmRQaG9uZSk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIGNvbnN0IHVybCA9IGB1c2VyL2JpbmRQaG9uZWBcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIG1ldGhvZDogPE1ldGhvZD4nUE9TVCdcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDpgIDlh7rnmbvlvZVcclxuICAgKi9cclxuICBsb2dpbm91dE1vZGVsKCk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIGNvbnN0IHVybCA9ICdteU1lbnUvbG9nb3V0J1xyXG4gICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgIHVybCxcclxuICAgICAgZGF0YToge30sXHJcbiAgICAgIGVqZWN0OiB0cnVlLFxyXG4gICAgICBtZXRob2Q6IDxNZXRob2Q+J1BPU1QnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W5b6u5L+h57uR5a6a5omL5py65Y+356CBXHJcbiAgICogQHBhcmFtIGRhdGEg6K+35rGC5Y+C5pWwXHJcbiAgICovXHJcbiAgZ2V0UGhvbmVOdW1iZXJNb2RlbChkYXRhOiBHZXRQaG9uZU51bWJlcikge1xyXG4gICAgY29uc3QgdXJsID0gYHd4cGhvbmVgXHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBtZXRob2Q6IDxNZXRob2Q+J1BPU1QnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gIH1cclxuXHJcbn0iXX0=