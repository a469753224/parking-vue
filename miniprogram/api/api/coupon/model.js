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
var CouponModel = (function (_super) {
    __extends(CouponModel, _super);
    function CouponModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CouponModel.prototype.leadCouponModel = function (data) {
        var url = "coupon/leadCoupon";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    CouponModel.prototype.listUserCouponModel = function (data) {
        var url = "coupon/listUserCoupon";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    CouponModel.prototype.receiveCouponModel = function (data) {
        var url = "coupon/receiveCoupon";
        var param = {
            url: url,
            data: data,
            method: 'GET',
            loadSatus: true,
            loading: '领取中...'
        };
        return this.request(param);
    };
    CouponModel.prototype.useCouponModel = function (data) {
        var url = "coupon/useCoupon";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    CouponModel.prototype.getCouponUserByIdModel = function (data) {
        var url = "coupon/getCouponUserById";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    CouponModel.prototype.listUPCModel = function (data) {
        var url = 'coupon/listUPC';
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    CouponModel.prototype.getActingUPCModel = function (data) {
        var url = 'coupon/getActingUPC';
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    return CouponModel;
}(http_1.default));
exports.default = CouponModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0Q0FBc0M7QUFnQnRDO0lBQXlDLCtCQUFJO0lBQTdDOztJQXFHQSxDQUFDO0lBaEdDLHFDQUFlLEdBQWYsVUFBZ0IsSUFBUztRQUN2QixJQUFNLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQTtRQUMvQixJQUFNLEtBQUssR0FBRztZQUNaLEdBQUcsS0FBQTtZQUNILElBQUksTUFBQTtZQUNKLE1BQU0sRUFBVSxLQUFLO1NBQ3RCLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQU1ELHlDQUFtQixHQUFuQixVQUFvQixJQUFTO1FBQzNCLElBQU0sR0FBRyxHQUFHLHVCQUF1QixDQUFBO1FBQ25DLElBQU0sS0FBSyxHQUFHO1lBQ1osR0FBRyxLQUFBO1lBQ0gsSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFVLEtBQUs7U0FDdEIsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBTUQsd0NBQWtCLEdBQWxCLFVBQW1CLElBQW1CO1FBQ3BDLElBQU0sR0FBRyxHQUFHLHNCQUFzQixDQUFBO1FBQ2xDLElBQU0sS0FBSyxHQUFHO1lBQ1osR0FBRyxLQUFBO1lBQ0gsSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFVLEtBQUs7WUFDckIsU0FBUyxFQUFFLElBQUk7WUFDZixPQUFPLEVBQUUsUUFBUTtTQUNsQixDQUFBO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFNRCxvQ0FBYyxHQUFkLFVBQWUsSUFBZTtRQUM1QixJQUFNLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQTtRQUM5QixJQUFNLEtBQUssR0FBRztZQUNaLEdBQUcsS0FBQTtZQUNILElBQUksTUFBQTtZQUNKLE1BQU0sRUFBVSxLQUFLO1NBQ3RCLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQU1ELDRDQUFzQixHQUF0QixVQUF1QixJQUF1QjtRQUM1QyxJQUFNLEdBQUcsR0FBRywwQkFBMEIsQ0FBQTtRQUN0QyxJQUFNLEtBQUssR0FBRztZQUNaLEdBQUcsS0FBQTtZQUNILElBQUksTUFBQTtZQUNKLE1BQU0sRUFBVSxLQUFLO1NBQ3RCLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQU1ELGtDQUFZLEdBQVosVUFBYSxJQUFhO1FBQ3hCLElBQU0sR0FBRyxHQUFHLGdCQUFnQixDQUFBO1FBQzVCLElBQU0sS0FBSyxHQUFHO1lBQ1osR0FBRyxLQUFBO1lBQ0gsSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFVLEtBQUs7U0FDdEIsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBTUQsdUNBQWlCLEdBQWpCLFVBQWtCLElBQVU7UUFDMUIsSUFBTSxHQUFHLEdBQUcscUJBQXFCLENBQUE7UUFDakMsSUFBTSxLQUFLLEdBQUc7WUFDWixHQUFHLEtBQUE7WUFDSCxJQUFJLE1BQUE7WUFDSixNQUFNLEVBQVUsS0FBSztTQUN0QixDQUFBO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFSCxrQkFBQztBQUFELENBQUMsQUFyR0QsQ0FBeUMsY0FBSSxHQXFHNUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDlr7zlhaXor7fmsYLnsbsgKi9cclxuaW1wb3J0IEh0dHAgZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCdcclxuXHJcbi8qIOWvvOWFpeivt+axguWPguaVsOaOpeWPoyBUU+aOpeWPo+exu+WeiyAqL1xyXG5pbXBvcnQge1xyXG4gIFJlY2VpdmVDb3Vwb24sXHJcbiAgVXNlQ291cG9uLFxyXG4gIEdldENvdXBvblVzZXJCeUlkLFxyXG4gIExpc3RVUENcclxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvcmVxdWVzdEludGVyZmFjZS9jb3Vwb24nXHJcblxyXG4vKiDlr7zlhaXnvZHnu5zor7fmsYLmjqXlj6MgVFPmjqXlj6PnsbvlnosgKi9cclxuaW1wb3J0IHsgTWV0aG9kLCBSZXF1ZXN0UHJvbWlzZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2h0dHAnXHJcblxyXG4vKipcclxuICog5LyY5oOg5Yi45qih5Z2XLeaooeWei+WxglxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291cG9uTW9kZWwgZXh0ZW5kcyBIdHRwIHtcclxuICAvKipcclxuICAgKiDmn6Xor6LllYblrrbkvJjmg6DlirXlvoXpooblj5bmjqXlj6NcclxuICAgKiBAcGFyYW0ge2FueX0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgbGVhZENvdXBvbk1vZGVsKGRhdGE6IGFueSk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIGNvbnN0IHVybCA9IGBjb3Vwb24vbGVhZENvdXBvbmBcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIG1ldGhvZDogPE1ldGhvZD4nR0VUJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOeUqOaIt+afpeivouiHquW3seaYr+WQpuacieS8mOaDoOWKtVxyXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICBsaXN0VXNlckNvdXBvbk1vZGVsKGRhdGE6IGFueSk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIGNvbnN0IHVybCA9IGBjb3Vwb24vbGlzdFVzZXJDb3Vwb25gXHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBtZXRob2Q6IDxNZXRob2Q+J0dFVCdcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDpooblj5bkvJjmg6DlirXmjqXlj6NcclxuICAgKiBAcGFyYW0ge1JlY2VpdmVDb3Vwb259IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIHJlY2VpdmVDb3Vwb25Nb2RlbChkYXRhOiBSZWNlaXZlQ291cG9uKTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgY29uc3QgdXJsID0gYGNvdXBvbi9yZWNlaXZlQ291cG9uYFxyXG4gICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgIHVybCxcclxuICAgICAgZGF0YSxcclxuICAgICAgbWV0aG9kOiA8TWV0aG9kPidHRVQnLFxyXG4gICAgICBsb2FkU2F0dXM6IHRydWUsXHJcbiAgICAgIGxvYWRpbmc6ICfpooblj5bkuK0uLi4nXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi35L2/55So5LyY5oOg5Yq15o6l5Y+jXHJcbiAgICogQHBhcmFtIHtVc2VDb3Vwb259IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIHVzZUNvdXBvbk1vZGVsKGRhdGE6IFVzZUNvdXBvbik6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIGNvbnN0IHVybCA9IGBjb3Vwb24vdXNlQ291cG9uYFxyXG4gICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgIHVybCxcclxuICAgICAgZGF0YSxcclxuICAgICAgbWV0aG9kOiA8TWV0aG9kPidHRVQnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5LyY5oOg5Yi46K+m5oOFXHJcbiAgICogQHBhcmFtIHtHZXRDb3Vwb25Vc2VyQnlJZH0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgZ2V0Q291cG9uVXNlckJ5SWRNb2RlbChkYXRhOiBHZXRDb3Vwb25Vc2VyQnlJZCk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIGNvbnN0IHVybCA9IGBjb3Vwb24vZ2V0Q291cG9uVXNlckJ5SWRgXHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBtZXRob2Q6IDxNZXRob2Q+J0dFVCdcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmoLnmja7nirbmgIHojrflj5blgZzovabljaFcclxuICAgKiBAcGFyYW0ge0xpc3RVUEN9IGRhdGEg6K+35rGC5Y+C5pWwXHJcbiAgICovXHJcbiAgbGlzdFVQQ01vZGVsKGRhdGE6IExpc3RVUEMpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICBjb25zdCB1cmwgPSAnY291cG9uL2xpc3RVUEMnXHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBtZXRob2Q6IDxNZXRob2Q+J0dFVCdcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bnlJ/mlYjkuK3nmoTlgZzovabliLhcclxuICAgKiBAcGFyYW0ge0dldEFjdGluZ1VQQ30gZGF0YSDor7fmsYLlj4LmlbBcclxuICAgKi9cclxuICBnZXRBY3RpbmdVUENNb2RlbChkYXRhPzogYW55KTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgY29uc3QgdXJsID0gJ2NvdXBvbi9nZXRBY3RpbmdVUEMnXHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBtZXRob2Q6IDxNZXRob2Q+J0dFVCdcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0pXHJcbiAgfVxyXG5cclxufSJdfQ==