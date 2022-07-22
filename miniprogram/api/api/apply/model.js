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
var ApplayModel = (function (_super) {
    __extends(ApplayModel, _super);
    function ApplayModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplayModel.prototype.applicationsplaceModel = function (data) {
        var url = "release/applicationsplace";
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    ApplayModel.prototype.cancelplaceModel = function (data) {
        var url = "release/cancelplace";
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    ApplayModel.prototype.checkplaceModel = function (data) {
        var url = "release/checkplace";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    ApplayModel.prototype.placeDeleteModel = function (data) {
        var url = "release/placeDelete";
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    ApplayModel.prototype.wxplaceModel = function (data) {
        var url = "release/wxplace";
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    return ApplayModel;
}(http_1.default));
exports.default = ApplayModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0Q0FBc0M7QUFnQnRDO0lBQXlDLCtCQUFJO0lBQTdDOztJQXNFQSxDQUFDO0lBakVDLDRDQUFzQixHQUF0QixVQUF1QixJQUF1QjtRQUM1QyxJQUFNLEdBQUcsR0FBRywyQkFBMkIsQ0FBQTtRQUN2QyxJQUFNLEtBQUssR0FBRztZQUNaLEdBQUcsS0FBQTtZQUNILElBQUksTUFBQTtZQUNKLE1BQU0sRUFBVSxNQUFNO1NBQ3ZCLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQU1ELHNDQUFnQixHQUFoQixVQUFpQixJQUFpQjtRQUNoQyxJQUFNLEdBQUcsR0FBRyxxQkFBcUIsQ0FBQTtRQUNqQyxJQUFNLEtBQUssR0FBRztZQUNaLEdBQUcsS0FBQTtZQUNILElBQUksTUFBQTtZQUNKLE1BQU0sRUFBVSxNQUFNO1NBQ3ZCLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQU1ELHFDQUFlLEdBQWYsVUFBZ0IsSUFBVTtRQUN4QixJQUFNLEdBQUcsR0FBRyxvQkFBb0IsQ0FBQTtRQUNoQyxJQUFNLEtBQUssR0FBRztZQUNaLEdBQUcsS0FBQTtZQUNILElBQUksTUFBQTtZQUNKLE1BQU0sRUFBVSxLQUFLO1NBQ3RCLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQU1ELHNDQUFnQixHQUFoQixVQUFpQixJQUFpQjtRQUNoQyxJQUFNLEdBQUcsR0FBRyxxQkFBcUIsQ0FBQTtRQUNqQyxJQUFNLEtBQUssR0FBRztZQUNaLEdBQUcsS0FBQTtZQUNILElBQUksTUFBQTtZQUNKLE1BQU0sRUFBVSxNQUFNO1NBQ3ZCLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQU1ELGtDQUFZLEdBQVosVUFBYSxJQUFhO1FBQ3hCLElBQU0sR0FBRyxHQUFHLGlCQUFpQixDQUFBO1FBQzdCLElBQU0sS0FBSyxHQUFHO1lBQ1osR0FBRyxLQUFBO1lBQ0gsSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFVLE1BQU07U0FDdkIsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBdEVELENBQXlDLGNBQUksR0FzRTVDIiwic291cmNlc0NvbnRlbnQiOlsiLyog5a+85YWl6K+35rGC57G7ICovXHJcbmltcG9ydCBIdHRwIGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnXHJcblxyXG4vKirlr7zlhaXor7fmsYLlj4LmlbDmjqXlj6MgVFPmjqXlj6PnsbvlnosqL1xyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uc3BsYWNlLFxyXG4gIFd4cGxhY2UsXHJcbiAgQ2FuY2VscGxhY2UsXHJcbiAgUGxhY2VEZWxldGVcclxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvcmVxdWVzdEludGVyZmFjZS9hcHBseSdcclxuXHJcbi8qKuWvvOWFpee9kee7nOivt+axguaOpeWPoyBUU+aOpeWPo+exu+WeiyovXHJcbmltcG9ydCB7IE1ldGhvZCwgUmVxdWVzdFByb21pc2UgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9odHRwJ1xyXG5cclxuLyoqXHJcbiAqIOWPkeW4g+aooeWdly3mqKHlnovlsYJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcGxheU1vZGVsIGV4dGVuZHMgSHR0cCB7XHJcbiAgLyoqXHJcbiAgICog55Sz6K+35Y+R5biD6L2m5L2N5o6l5Y+jXHJcbiAgICogQHBhcmFtIHtBcHBsaWNhdGlvbnNwbGFjZX0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgYXBwbGljYXRpb25zcGxhY2VNb2RlbChkYXRhOiBBcHBsaWNhdGlvbnNwbGFjZSk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIGNvbnN0IHVybCA9IGByZWxlYXNlL2FwcGxpY2F0aW9uc3BsYWNlYFxyXG4gICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgIHVybCxcclxuICAgICAgZGF0YSxcclxuICAgICAgbWV0aG9kOiA8TWV0aG9kPidQT1NUJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWPlua2iOWPkeW4g+eUs+ivt+aOpeWPo1xyXG4gICAqIEBwYXJhbSB7Q2FuY2VscGxhY2V9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIGNhbmNlbHBsYWNlTW9kZWwoZGF0YTogQ2FuY2VscGxhY2UpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICBjb25zdCB1cmwgPSBgcmVsZWFzZS9jYW5jZWxwbGFjZWBcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIG1ldGhvZDogPE1ldGhvZD4nUE9TVCdcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmn6XnnIvmiYDmnInnlLPor7flj5HluIPmjqXlj6NcclxuICAgKiBAcGFyYW0ge2FueX0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgY2hlY2twbGFjZU1vZGVsKGRhdGE/OiBhbnkpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICBjb25zdCB1cmwgPSBgcmVsZWFzZS9jaGVja3BsYWNlYFxyXG4gICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgIHVybCxcclxuICAgICAgZGF0YSxcclxuICAgICAgbWV0aG9kOiA8TWV0aG9kPidHRVQnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Yig6Zmk5Y+R5biD55Sz6K+35o6l5Y+jXHJcbiAgICogQHBhcmFtIHtQbGFjZURlbGV0ZX0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgcGxhY2VEZWxldGVNb2RlbChkYXRhOiBQbGFjZURlbGV0ZSk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIGNvbnN0IHVybCA9IGByZWxlYXNlL3BsYWNlRGVsZXRlYFxyXG4gICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgIHVybCxcclxuICAgICAgZGF0YSxcclxuICAgICAgbWV0aG9kOiA8TWV0aG9kPidQT1NUJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWPkeW4g+i9puS9jVxyXG4gICAqIEBwYXJhbSB7V3hwbGFjZX0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgd3hwbGFjZU1vZGVsKGRhdGE6IFd4cGxhY2UpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICBjb25zdCB1cmwgPSBgcmVsZWFzZS93eHBsYWNlYFxyXG4gICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgIHVybCxcclxuICAgICAgZGF0YSxcclxuICAgICAgbWV0aG9kOiA8TWV0aG9kPidQT1NUJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSlcclxuICB9XHJcbn0iXX0=