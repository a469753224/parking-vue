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
var PayModel = (function (_super) {
    __extends(PayModel, _super);
    function PayModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayModel.prototype.wxPayModel = function (data) {
        var url = "wxpay/dopay";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    PayModel.prototype.minipayModel = function (data) {
        var url = "wxpay/minipay";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    return PayModel;
}(http_1.default));
exports.default = PayModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0Q0FBc0M7QUFjdEM7SUFBc0MsNEJBQUk7SUFBMUM7O0lBOEJBLENBQUM7SUF4QkMsNkJBQVUsR0FBVixVQUFXLElBQVc7UUFDcEIsSUFBTSxHQUFHLEdBQUcsYUFBYSxDQUFBO1FBQ3pCLElBQU0sS0FBSyxHQUFHO1lBQ1osR0FBRyxLQUFBO1lBQ0gsSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFVLEtBQUs7U0FDdEIsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBTUQsK0JBQVksR0FBWixVQUFhLElBQWE7UUFDeEIsSUFBTSxHQUFHLEdBQUcsZUFBZSxDQUFBO1FBQzNCLElBQU0sS0FBSyxHQUFHO1lBQ1osR0FBRyxLQUFBO1lBQ0gsSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFVLEtBQUs7U0FDdEIsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBRUgsZUFBQztBQUFELENBQUMsQUE5QkQsQ0FBc0MsY0FBSSxHQThCekMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDlr7zlhaXor7fmsYLnsbsgKi9cclxuaW1wb3J0IEh0dHAgZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCdcclxuXHJcbi8qIOWvvOWFpeivt+axguWPguaVsOaOpeWPoyBUU+aOpeWPo+exu+WeiyAqL1xyXG5pbXBvcnQge1xyXG4gIERvcGF5LFxyXG4gIE1pbmlwYXlcclxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvcmVxdWVzdEludGVyZmFjZS9wYXknXHJcblxyXG4vKiDlr7zlhaXnvZHnu5zor7fmsYLmjqXlj6MgVFPmjqXlj6PnsbvlnosgKi9cclxuaW1wb3J0IHsgTWV0aG9kLCBSZXF1ZXN0UHJvbWlzZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2h0dHAnXHJcblxyXG4vKipcclxuICog5pSv5LuY5qih5Z2XLeaooeWei+WxglxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5TW9kZWwgZXh0ZW5kcyBIdHRwIHtcclxuXHJcbiAgLyoqXHJcbiAgICog5b6u5L+h5pSv5LuY5o6l5Y+jXHJcbiAgICogQHBhcmFtIHtEb3BheX0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgd3hQYXlNb2RlbChkYXRhOiBEb3BheSk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIGNvbnN0IHVybCA9IGB3eHBheS9kb3BheWBcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIG1ldGhvZDogPE1ldGhvZD4nR0VUJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWwj+eoi+W6j+aUr+S7mOaOpeWPo1xyXG4gICAqIEBwYXJhbSB7TWluaXBheX0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgbWluaXBheU1vZGVsKGRhdGE6IE1pbmlwYXkpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICBjb25zdCB1cmwgPSBgd3hwYXkvbWluaXBheWBcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIG1ldGhvZDogPE1ldGhvZD4nR0VUJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSlcclxuICB9XHJcblxyXG59Il19