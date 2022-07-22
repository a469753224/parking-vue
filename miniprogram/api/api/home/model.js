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
var HomeModel = (function (_super) {
    __extends(HomeModel, _super);
    function HomeModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeModel.prototype.scanOrderModel = function (data) {
        var url = "order/scanOrder";
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    HomeModel.prototype.userQueryOrderModel = function (data) {
        var url = "order/userQueryOrder?page=" + data.page;
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    HomeModel.prototype.orederIdQueryModel = function (data) {
        var url = "order/orederIdQuery";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    HomeModel.prototype.cancelPakingModel = function (data) {
        var url = "order/cancelPaking";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    HomeModel.prototype.carLockModel = function (data) {
        var url = "order/carLock";
        var param = {
            url: url,
            data: data,
            method: 'GET',
            loadStatus: true,
            loading: '解锁中...'
        };
        return this.request(param);
    };
    HomeModel.prototype.createOrderModel = function (data) {
        var url = "order/createOrder";
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    HomeModel.prototype.orderQueryModel = function (data) {
        var url = "order/orderQuery";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    HomeModel.prototype.orderSettlementModel = function (data) {
        var url = "order/orderSettlement";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    HomeModel.prototype.continuationModifyModel = function (data) {
        var url = "order/continuationModify";
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    HomeModel.prototype.orderBillModel = function (data) {
        var url = "order/orderBill";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    HomeModel.prototype.orderDeleteModel = function (data) {
        var url = "order/orderDelete";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    HomeModel.prototype.wxPayOrderModel = function (data) {
        var url = "wxpay/dopay";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    HomeModel.prototype.lockDateModel = function (data) {
        var url = "parking/lockDate";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    HomeModel.prototype.WXOrderToFreezeModel = function (data) {
        var url = "wxpay/WXOrderToFreeze";
        var param = {
            url: url,
            data: data,
            method: 'POST',
            loadStatus: true,
            loading: '预留中，请稍后...'
        };
        return this.request(param);
    };
    HomeModel.prototype.wxToFreezeModel = function (data) {
        var url = "wxpay/WXToFreeze";
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    HomeModel.prototype.creditPayToOrderModel = function (data) {
        var url = "wechat/creditPayToOrder";
        var param = {
            url: url,
            data: data,
            loadStatus: true,
            loading: '订单确认中...',
            method: 'POST'
        };
        return this.request(param);
    };
    HomeModel.prototype.checkPermissionsModel = function (data) {
        var url = "checkPermissions";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    HomeModel.prototype.cancelCreditPayOrderModel = function (data) {
        var url = "wechat/cancelCreditPayOrder";
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    HomeModel.prototype.getWechatOrderDetailModel = function (data) {
        var url = "wechat/getWechatOrderDetail";
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    return HomeModel;
}(http_1.default));
exports.default = HomeModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0Q0FBc0M7QUEyQnRDO0lBQXVDLDZCQUFJO0lBQTNDOztJQXNRQSxDQUFDO0lBalFHLGtDQUFjLEdBQWQsVUFBZSxJQUFlO1FBQzFCLElBQU0sR0FBRyxHQUFHLGlCQUFpQixDQUFBO1FBQzdCLElBQU0sS0FBSyxHQUFHO1lBQ1YsR0FBRyxLQUFBO1lBQ0gsSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFVLE1BQU07U0FDekIsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBTUQsdUNBQW1CLEdBQW5CLFVBQW9CLElBQVU7UUFDMUIsSUFBTSxHQUFHLEdBQUcsK0JBQTZCLElBQUksQ0FBQyxJQUFNLENBQUE7UUFDcEQsSUFBTSxLQUFLLEdBQUc7WUFDVixHQUFHLEtBQUE7WUFDSCxJQUFJLE1BQUE7WUFDSixNQUFNLEVBQVUsS0FBSztTQUN4QixDQUFBO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFNRCxzQ0FBa0IsR0FBbEIsVUFBbUIsSUFBbUI7UUFDbEMsSUFBTSxHQUFHLEdBQUcscUJBQXFCLENBQUE7UUFDakMsSUFBTSxLQUFLLEdBQUc7WUFDVixHQUFHLEtBQUE7WUFDSCxJQUFJLE1BQUE7WUFDSixNQUFNLEVBQVUsS0FBSztTQUN4QixDQUFBO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFNRCxxQ0FBaUIsR0FBakIsVUFBa0IsSUFBa0I7UUFDaEMsSUFBTSxHQUFHLEdBQUcsb0JBQW9CLENBQUE7UUFDaEMsSUFBTSxLQUFLLEdBQUc7WUFDVixHQUFHLEtBQUE7WUFDSCxJQUFJLE1BQUE7WUFDSixNQUFNLEVBQVUs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QUNKLE1BQU0sRUFBVSxLQUFLO1NBQ3hCLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQUtELDZDQUF5QixHQUF6QixVQUEwQixJQUFTO1FBQy9CLElBQU0sR0FBRyxHQUFHLDZCQUE2QixDQUFBO1FBQ3pDLElBQU0sS0FBSyxHQUFHO1lBQ1YsR0FBRyxLQUFBO1lBQ0gsSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFVLE1BQU07U0FDekIsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBS0QsNkNBQXlCLEdBQXpCLFVBQTBCLElBQTBCO1FBQ2hELElBQU0sR0FBRyxHQUFHLDZCQUE2QixDQUFBO1FBQ3pDLElBQU0sS0FBSyxHQUFHO1lBQ1YsR0FBRyxLQUFBO1lBQ0gsSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFVLE1BQU07U0FDekIsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBdFFELENBQXVDLGNBQUksR0FzUTFDIiwic291cmNlc0NvbnRlbnQiOlsiLyog5a+85YWl6K+35rGC57G7ICovXHJcbmltcG9ydCBIdHRwIGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnXHJcblxyXG4vKiDlr7zlhaXor7fmsYLlj4LmlbDmjqXlj6MgVFPmjqXlj6PnsbvlnosgKi9cclxuaW1wb3J0IHtcclxuICAgIFNjYW5PcmRlcixcclxuICAgIE9yZWRlcklkUXVlcnksXHJcbiAgICBDYW5jZWxQYWtpbmcsXHJcbiAgICBDYXJMb2NrLFxyXG4gICAgQ3JlYXRlT3JkZXIsXHJcbiAgICBPcmRlclNldHRsZW1lbnQsXHJcbiAgICBDb250aW51YXRpb25Nb2RpZnksXHJcbiAgICBPcmRlckJpbGwsXHJcbiAgICBPcmRlckRlbGV0ZSxcclxuICAgIERvcGF5LFxyXG4gICAgTG9ja0RhdGUsXHJcbiAgICBXWE9yZGVyVG9GcmVlemUsXHJcbiAgICBXWFRvRnJlZXplLFxyXG4gICAgR2V0V2VjaGF0T3JkZXJEZXRhaWxcclxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvcmVxdWVzdEludGVyZmFjZS9ob21lJ1xyXG5cclxuLyog5a+85YWl572R57uc6K+35rGC5o6l5Y+jIFRT5o6l5Y+j57G75Z6LICovXHJcbmltcG9ydCB7IE1ldGhvZCwgUmVxdWVzdFByb21pc2UgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9odHRwJ1xyXG5cclxuXHJcbi8qKlxyXG4gKiDorqLljZXmqKHlnZct5qih5Z6L5bGCXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lTW9kZWwgZXh0ZW5kcyBIdHRwIHtcclxuICAgIC8qKlxyXG4gICAgICAgKiDpooTnlZnovabkvY1cclxuICAgICAgICogQHBhcmFtIHtTY2FuT3JkZXJ9IGRhdGEgXHJcbiAgICAgICAqL1xyXG4gICAgc2Nhbk9yZGVyTW9kZWwoZGF0YTogU2Nhbk9yZGVyKTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGBvcmRlci9zY2FuT3JkZXJgXHJcbiAgICAgICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgbWV0aG9kOiA8TWV0aG9kPidQT1NUJ1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5p+l6K+i5Y6G5Y+y6K6i5Y2VXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gZGF0YSBcclxuICAgICAqL1xyXG4gICAgdXNlclF1ZXJ5T3JkZXJNb2RlbChkYXRhPzogYW55KTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGBvcmRlci91c2VyUXVlcnlPcmRlcj9wYWdlPSR7ZGF0YS5wYWdlfWBcclxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBtZXRob2Q6IDxNZXRob2Q+J0dFVCdcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagueaNruiuouWNlWlk5p+l6K+i6K6i5Y2V5L+h5oGvXHJcbiAgICAgKiBAcGFyYW0ge09yZWRlcklkUXVlcnl9IGRhdGEgXHJcbiAgICAgKi9cclxuICAgIG9yZWRlcklkUXVlcnlNb2RlbChkYXRhOiBPcmVkZXJJZFF1ZXJ5KTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGBvcmRlci9vcmVkZXJJZFF1ZXJ5YFxyXG4gICAgICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIG1ldGhvZDogPE1ldGhvZD4nR0VUJ1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y+W5raI6aKE6K6i6L2m5L2NXHJcbiAgICAgKiBAcGFyYW0ge0NhbmNlbFBha2luZ30gZGF0YSDor7fmsYLlj4LmlbBcclxuICAgICAqL1xyXG4gICAgY2FuY2VsUGFraW5nTW9kZWwoZGF0YTogQ2FuY2VsUGFraW5nKTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGBvcmRlci9jYW5jZWxQYWtpbmdgXHJcbiAgICAgICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgbWV0aG9kOiA8TWV0aG9kPidHRVQnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorqLljZXmqKHlnZfop6PplIFcclxuICAgICAqIEBwYXJhbSB7Q2FyTG9ja30gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICAgKi9cclxuICAgIGNhckxvY2tNb2RlbChkYXRhOiBDYXJMb2NrKTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGBvcmRlci9jYXJMb2NrYFxyXG4gICAgICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIG1ldGhvZDogPE1ldGhvZD4nR0VUJyxcclxuICAgICAgICAgICAgbG9hZFN0YXR1czogdHJ1ZSxcclxuICAgICAgICAgICAgbG9hZGluZzogJ+ino+mUgeS4rS4uLidcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmihOeVmeaOpeWPo1xyXG4gICAgICogQHBhcmFtIHtDcmVhdGVPcmRlcn0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZU9yZGVyTW9kZWwoZGF0YTogQ3JlYXRlT3JkZXIpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYG9yZGVyL2NyZWF0ZU9yZGVyYFxyXG4gICAgICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIG1ldGhvZDogPE1ldGhvZD4nUE9TVCdcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHRva2Vu6I635Y+W6K6i5Y2V5o6l5Y+jXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICAgKi9cclxuICAgIG9yZGVyUXVlcnlNb2RlbChkYXRhOiBhbnkpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYG9yZGVyL29yZGVyUXVlcnlgXHJcbiAgICAgICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgbWV0aG9kOiA8TWV0aG9kPidHRVQnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnq4vljbPnu5PnrpfmjqXlj6NcclxuICAgICAqIEBwYXJhbSB7T3JkZXJTZXR0bGVtZW50fSBkYXRhIOivt+axguWPguaVsFxyXG4gICAgICovXHJcbiAgICBvcmRlclNldHRsZW1lbnRNb2RlbChkYXRhOiBPcmRlclNldHRsZW1lbnQpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYG9yZGVyL29yZGVyU2V0dGxlbWVudGBcclxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBtZXRob2Q6IDxNZXRob2Q+J0dFVCdcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe7reaXtuaOpeWPo1xyXG4gICAgICogQHBhcmFtIHtDb250aW51YXRpb25Nb2RpZnl9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAgICovXHJcbiAgICBjb250aW51YXRpb25Nb2RpZnlNb2RlbChkYXRhOiBDb250aW51YXRpb25Nb2RpZnkpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYG9yZGVyL2NvbnRpbnVhdGlvbk1vZGlmeWBcclxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBtZXRob2Q6IDxNZXRob2Q+J1BPU1QnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja7orqLljZVpZOafpeivoui0puWNleaOpeWPo1xyXG4gICAgICogQHBhcmFtIHtPcmRlckJpbGx9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAgICovXHJcbiAgICBvcmRlckJpbGxNb2RlbChkYXRhOiBPcmRlckJpbGwpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYG9yZGVyL29yZGVyQmlsbGBcclxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBtZXRob2Q6IDxNZXRob2Q+J0dFVCdcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIoOmZpOWOhuWPsuiuouWNlVxyXG4gICAgICogQHBhcmFtIHtPcmRlckRlbGV0ZX0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICAgKi9cclxuICAgIG9yZGVyRGVsZXRlTW9kZWwoZGF0YTogT3JkZXJEZWxldGUpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYG9yZGVyL29yZGVyRGVsZXRlYFxyXG4gICAgICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIG1ldGhvZDogPE1ldGhvZD4nR0VUJ1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b6u5L+h5pSv5LuY5o6l5Y+jXHJcbiAgICAgKiBAcGFyYW0ge0RvcGF5fSBkYXRhIOivt+axguWPguaVsCBcclxuICAgICAqL1xyXG4gICAgd3hQYXlPcmRlck1vZGVsKGRhdGE6IERvcGF5KTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGB3eHBheS9kb3BheWBcclxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBtZXRob2Q6IDxNZXRob2Q+J0dFVCdcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi9puS9jeW8gOaUvuaXtumXtFxyXG4gICAgICogQHBhcmFtIHtMb2NrRGF0ZX0gZGF0YSDor7fmsYLlj4LmlbBcclxuICAgICAqL1xyXG4gICAgbG9ja0RhdGVNb2RlbChkYXRhOiBMb2NrRGF0ZSk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgcGFya2luZy9sb2NrRGF0ZWBcclxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBtZXRob2Q6IDxNZXRob2Q+J0dFVCdcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmihOaUr+S7mOaJq+eggeS4i+WNleaOpeWPo1xyXG4gICAgICogQHBhcmFtIHtXWE9yZGVyVG9GcmVlemV9IGRhdGEgXHJcbiAgICAgKi9cclxuICAgIFdYT3JkZXJUb0ZyZWV6ZU1vZGVsKGRhdGE6IFdYT3JkZXJUb0ZyZWV6ZSk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgd3hwYXkvV1hPcmRlclRvRnJlZXplYFxyXG4gICAgICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIG1ldGhvZDogPE1ldGhvZD4nUE9TVCcsXHJcbiAgICAgICAgICAgIGxvYWRTdGF0dXM6IHRydWUsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6ICfpooTnlZnkuK3vvIzor7fnqI3lkI4uLi4nXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0pXHJcbiAgICB9XHJcblxyXG4gICAgd3hUb0ZyZWV6ZU1vZGVsKGRhdGE6IFdYVG9GcmVlemUpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYHd4cGF5L1dYVG9GcmVlemVgXHJcbiAgICAgICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgbWV0aG9kOiA8TWV0aG9kPidQT1NUJ1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWRpdFBheVRvT3JkZXJNb2RlbChkYXRhOiBXWE9yZGVyVG9GcmVlemUpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYHdlY2hhdC9jcmVkaXRQYXlUb09yZGVyYFxyXG4gICAgICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIGxvYWRTdGF0dXM6IHRydWUsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6ICforqLljZXnoa7orqTkuK0uLi4nLFxyXG4gICAgICAgICAgICBtZXRob2Q6IDxNZXRob2Q+J1BPU1QnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmn6Xor6LmlK/ku5jliIbmjojmnYPnirbmgIFcclxuICAgICAqIEBwYXJhbSBkYXRhIFxyXG4gICAgICovXHJcbiAgICBjaGVja1Blcm1pc3Npb25zTW9kZWwoZGF0YT86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGBjaGVja1Blcm1pc3Npb25zYFxyXG4gICAgICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIG1ldGhvZDogPE1ldGhvZD4nR0VUJ1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y+W5raI5pSv5LuY5YiG6K6i5Y2VXHJcbiAgICAgKi9cclxuICAgIGNhbmNlbENyZWRpdFBheU9yZGVyTW9kZWwoZGF0YTogYW55KSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYHdlY2hhdC9jYW5jZWxDcmVkaXRQYXlPcmRlcmBcclxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBtZXRob2Q6IDxNZXRob2Q+J1BPU1QnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlK/ku5jliIborqLljZXlj4LmlbBcclxuICAgICAqL1xyXG4gICAgZ2V0V2VjaGF0T3JkZXJEZXRhaWxNb2RlbChkYXRhOiBHZXRXZWNoYXRPcmRlckRldGFpbCl7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYHdlY2hhdC9nZXRXZWNoYXRPcmRlckRldGFpbGBcclxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBtZXRob2Q6IDxNZXRob2Q+J1BPU1QnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0pXHJcbiAgICB9XHJcbn0iXX0=