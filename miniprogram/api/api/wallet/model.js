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
var WalletModel = (function (_super) {
    __extends(WalletModel, _super);
    function WalletModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WalletModel.prototype.walletModifyPasswordModel = function (data) {
        var url = 'wallet/walletModifyPassword';
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    WalletModel.prototype.getWalletModel = function (data) {
        var url = 'wallet/getWallet';
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    WalletModel.prototype.rechargeMoneyModel = function (data) {
        var url = 'wallet/rechargeMoney';
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    WalletModel.prototype.getWalletBalanceModel = function (data) {
        var url = 'wallet/getWalletBalance';
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    WalletModel.prototype.getWalletParkingModel = function (data) {
        var url = 'wallet/getWalletParking';
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    return WalletModel;
}(http_1.default));
exports.default = WalletModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0Q0FBc0M7QUFldEM7SUFBeUMsK0JBQUk7SUFBN0M7O0lBc0VBLENBQUM7SUFqRUMsK0NBQXlCLEdBQXpCLFVBQTBCLElBQTBCO1FBQ2xELElBQU0sR0FBRyxHQUFHLDZCQUE2QixDQUFBO1FBQ3pDLElBQU0sS0FBSyxHQUFHO1lBQ1osR0FBRyxLQUFBO1lBQ0gsSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFVLE1BQU07U0FDdkIsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBTUQsb0NBQWMsR0FBZCxVQUFlLElBQVU7UUFDdkIsSUFBTSxHQUFHLEdBQUcsa0JBQWtCLENBQUE7UUFDOUIsSUFBTSxLQUFLLEdBQUc7WUFDWixHQUFHLEtBQUE7WUFDSCxJQUFJLE1BQUE7WUFDSixNQUFNLEVBQVUsS0FBSztTQUN0QixDQUFBO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFNRCx3Q0FBa0IsR0FBbEIsVUFBbUIsSUFBVTtRQUMzQixJQUFNLEdBQUcsR0FBRyxzQkFBc0IsQ0FBQTtRQUNsQyxJQUFNLEtBQUssR0FBRztZQUNaLEdBQUcsS0FBQTtZQUNILElBQUksTUFBQTtZQUNKLE1BQU0sRUFBVSxLQUFLO1NBQ3RCLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQU1ELDJDQUFxQixHQUFyQixVQUFzQixJQUFzQjtRQUMxQyxJQUFNLEdBQUcsR0FBRyx5QkFBeUIsQ0FBQTtRQUNyQyxJQUFNLEtBQUssR0FBRztZQUNaLEdBQUcsS0FBQTtZQUNILElBQUksTUFBQTtZQUNKLE1BQU0sRUFBVSxLQUFLO1NBQ3RCLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQU1ELDJDQUFxQixHQUFyQixVQUFzQixJQUFzQjtRQUMxQyxJQUFNLEdBQUcsR0FBRyx5QkFBeUIsQ0FBQTtRQUNyQyxJQUFNLEtBQUssR0FBRztZQUNaLEdBQUcsS0FBQTtZQUNILElBQUksTUFBQTtZQUNKLE1BQU0sRUFBVSxLQUFLO1NBQ3RCLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQXRFRCxDQUF5QyxjQUFJLEdBc0U1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qIOWvvOWFpeivt+axguexuyAqL1xyXG5pbXBvcnQgSHR0cCBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJ1xyXG5cclxuLyog5a+85YWl6K+35rGC5Y+C5pWw5o6l5Y+jIFRT5o6l5Y+j57G75Z6LICovXHJcbmltcG9ydCB7XHJcbiAgV2FsbGV0TW9kaWZ5UGFzc3dvcmQsXHJcbiAgR2V0V2FsbGV0QmFsYW5jZSxcclxuICBHZXRXYWxsZXRQYXJraW5nXHJcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3JlcXVlc3RJbnRlcmZhY2Uvd2FsbGV0J1xyXG5cclxuLyog5a+85YWl572R57uc6K+35rGC5o6l5Y+jIFRT5o6l5Y+j57G75Z6LICovXHJcbmltcG9ydCB7IE1ldGhvZCwgUmVxdWVzdFByb21pc2UgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9odHRwJ1xyXG5cclxuLyoqXHJcbiAqIOmSseWMheaooeWdly3mqKHlnotcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGxldE1vZGVsIGV4dGVuZHMgSHR0cCB7XHJcbiAgLyoqXHJcbiAgICog5L+u5pS55pSv5LuY5a+G56CB5o6l5Y+jXHJcbiAgICogQHBhcmFtIHtXYWxsZXRNb2RpZnlQYXNzd29yZH0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgd2FsbGV0TW9kaWZ5UGFzc3dvcmRNb2RlbChkYXRhOiBXYWxsZXRNb2RpZnlQYXNzd29yZCk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIGNvbnN0IHVybCA9ICd3YWxsZXQvd2FsbGV0TW9kaWZ5UGFzc3dvcmQnXHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBtZXRob2Q6IDxNZXRob2Q+J1BPU1QnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5oiR55qE6ZKx5YyF5o6l5Y+jXHJcbiAgICogQHBhcmFtIHthbnl9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIGdldFdhbGxldE1vZGVsKGRhdGE/OiBhbnkpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICBjb25zdCB1cmwgPSAnd2FsbGV0L2dldFdhbGxldCdcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIG1ldGhvZDogPE1ldGhvZD4nR0VUJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOafpeivouWFheWAvOiusOW9leaOpeWPo1xyXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICByZWNoYXJnZU1vbmV5TW9kZWwoZGF0YT86IGFueSk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIGNvbnN0IHVybCA9ICd3YWxsZXQvcmVjaGFyZ2VNb25leSdcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIG1ldGhvZDogPE1ldGhvZD4nR0VUJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOmSseWMheaYjue7huaOpeWPo1xyXG4gICAqIEBwYXJhbSB7R2V0V2FsbGV0QmFsYW5jZX0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgZ2V0V2FsbGV0QmFsYW5jZU1vZGVsKGRhdGE6IEdldFdhbGxldEJhbGFuY2UpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICBjb25zdCB1cmwgPSAnd2FsbGV0L2dldFdhbGxldEJhbGFuY2UnXHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBtZXRob2Q6IDxNZXRob2Q+J0dFVCdcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDpkrHljIXmmI7nu4bmjqXlj6NcclxuICAgKiBAcGFyYW0ge0dldFdhbGxldFBhcmtpbmd9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIGdldFdhbGxldFBhcmtpbmdNb2RlbChkYXRhOiBHZXRXYWxsZXRQYXJraW5nKTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgY29uc3QgdXJsID0gJ3dhbGxldC9nZXRXYWxsZXRQYXJraW5nJ1xyXG4gICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgIHVybCxcclxuICAgICAgZGF0YSxcclxuICAgICAgbWV0aG9kOiA8TWV0aG9kPidHRVQnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gIH1cclxufSJdfQ==