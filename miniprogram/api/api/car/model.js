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
var CarModel = (function (_super) {
    __extends(CarModel, _super);
    function CarModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarModel.prototype.userQueryDetailsModel = function (data) {
        var url = "release/userQueryDetails";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    CarModel.prototype.parkingDateModel = function (data) {
        var url = "parking/parkingDate";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    CarModel.prototype.myParkingModel = function (data) {
        var url = "parking/myParking";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    CarModel.prototype.parkingTimeModifyModel = function (data) {
        var url = "parking/parkingTimeModify";
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    CarModel.prototype.modifyOpenStateModel = function (data) {
        var url = "parking/modifyOpenState";
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    CarModel.prototype.lockDateModel = function (data) {
        var url = "parking/lockDate";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    CarModel.prototype.listEstateDimensionModel = function (data) {
        var url = "release/listEstateDimension";
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    return CarModel;
}(http_1.default));
exports.default = CarModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0Q0FBc0M7QUFrQnRDO0lBQXNDLDRCQUFJO0lBQTFDOztJQWtHQSxDQUFDO0lBN0ZDLHdDQUFxQixHQUFyQixVQUFzQixJQUFzQjtRQUMxQyxJQUFNLEdBQUcsR0FBRywwQkFBMEIsQ0FBQTtRQUN0QyxJQUFNLEtBQUssR0FBRztZQUNaLEdBQUcsS0FBQTtZQUNILElBQUksTUFBQTtZQUNKLE1BQU0sRUFBVSxLQUFLO1NBQ3RCLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQU1ELG1DQUFnQixHQUFoQixVQUFpQixJQUFpQjtRQUNoQyxJQUFNLEdBQUcsR0FBRyxxQkFBcUIsQ0FBQTtRQUNqQyxJQUFNLEtBQUssR0FBRztZQUNaLEdBQUcsS0FBQTtZQUNILElBQUksTUFBQTtZQUNKLE1BQU0sRUFBVSxLQUFLO1NBQ3RCLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQU1ELGlDQUFjLEdBQWQsVUFBZSxJQUFVO1FBQ3ZCLElBQU0sR0FBRyxHQUFHLG1CQUFtQixDQUFBO1FBQy9CLElBQU0sS0FBSyxHQUFHO1lBQ1osR0FBRyxLQUFBO1lBQ0gsSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFVLEtBQUs7U0FDdEIsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBTUQseUNBQXNCLEdBQXRCLFVBQXVCLElBQXVCO1FBQzVDLElBQU0sR0FBRyxHQUFHLDJCQUEyQixDQUFBO1FBQ3ZDLElBQU0sS0FBSyxHQUFHO1lBQ1osR0FBRyxLQUFBO1lBQ0gsSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFVLE1BQU07U0FDdkIsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBTUQsdUNBQW9CLEdBQXBCLFVBQXFCLElBQXFCO1FBQ3hDLElBQU0sR0FBRyxHQUFHLHlCQUF5QixDQUFBO1FBQ3JDLElBQU0sS0FBSyxHQUFHO1lBQ1osR0FBRyxLQUFBO1lBQ0gsSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFVLE1BQU07U0FDdkIsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBTUQsZ0NBQWEsR0FBYixVQUFjLElBQWM7UUFDMUIsSUFBTSxHQUFHLEdBQUcsa0JBQWtCLENBQUE7UUFDOUIsSUFBTSxLQUFLLEdBQUc7WUFDWixHQUFHLEtBQUE7WUFDSCxJQUFJLE1BQUE7WUFDSixNQUFNLEVBQVUsS0FBSztTQUN0QixDQUFBO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFNRCwyQ0FBd0IsR0FBeEIsVUFBeUIsSUFBeUI7UUFDaEQsSUFBTSxHQUFHLEdBQUcsNkJBQTZCLENBQUE7UUFDekMsSUFBTSxLQUFLLEdBQUc7WUFDWixHQUFHLEtBQUE7WUFDSCxJQUFJLE1BQUE7WUFDSixNQUFNLEVBQVUsTUFBTTtTQUN2QixDQUFBO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQWxHRCxDQUFzQyxjQUFJLEdBa0d6QyIsInNvdXJjZXNDb250ZW50IjpbIi8qIOWvvOWFpeivt+axguexuyAqL1xyXG5pbXBvcnQgSHR0cCBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJ1xyXG5cclxuLyog5a+85YWl6K+35rGC5Y+C5pWw5o6l5Y+jIFRT5o6l5Y+j57G75Z6LICovXHJcbmltcG9ydCB7XHJcbiAgVXNlclF1ZXJ5RGV0YWlscyxcclxuICBQYXJraW5nRGF0ZSxcclxuICBQYXJraW5nVGltZU1vZGlmeSxcclxuICBNb2RpZnlPcGVuU3RhdGUsXHJcbiAgTG9ja0RhdGUsXHJcbiAgTGlzdEVzdGF0ZURpbWVuc2lvblxyXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZS9yZXF1ZXN0SW50ZXJmYWNlL2NhcidcclxuXHJcbi8qIOWvvOWFpee9kee7nOivt+axguaOpeWPoyBUU+aOpeWPo+exu+WeiyAqL1xyXG5pbXBvcnQgeyBNZXRob2QsIFJlcXVlc3RQcm9taXNlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvaHR0cCdcclxuXHJcbi8qKlxyXG4gKiDovablnLror6bmg4Ut5qih5Z6L5bGCXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJNb2RlbCBleHRlbmRzIEh0dHAge1xyXG4gIC8qKlxyXG4gICAqIOi9puWcuuivpuaDhVxyXG4gICAqIEBwYXJhbSB7VXNlclF1ZXJ5RGV0YWlsc30gZGF0YSDor7fmsYLlj4LmlbBcclxuICAgKi9cclxuICB1c2VyUXVlcnlEZXRhaWxzTW9kZWwoZGF0YTogVXNlclF1ZXJ5RGV0YWlscyk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIGNvbnN0IHVybCA9IGByZWxlYXNlL3VzZXJRdWVyeURldGFpbHNgXHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBtZXRob2Q6IDxNZXRob2Q+J0dFVCdcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmoLnmja7ovabkvY3nvJblj7fojrflj5bovabkvY3lvIDmlL7ml7bpl7RcclxuICAgKiBAcGFyYW0ge1BhcmtpbmdEYXRlfSBkYXRhIOivt+axguWPguaVsFxyXG4gICAqL1xyXG4gIHBhcmtpbmdEYXRlTW9kZWwoZGF0YTogUGFya2luZ0RhdGUpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICBjb25zdCB1cmwgPSBgcGFya2luZy9wYXJraW5nRGF0ZWBcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIG1ldGhvZDogPE1ldGhvZD4nR0VUJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaIkeeahOi9puS9jeivpuaDhVxyXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhIOivt+axguWPguaVsFxyXG4gICAqL1xyXG4gIG15UGFya2luZ01vZGVsKGRhdGE/OiBhbnkpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICBjb25zdCB1cmwgPSBgcGFya2luZy9teVBhcmtpbmdgXHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBtZXRob2Q6IDxNZXRob2Q+J0dFVCdcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnvJbovpHlvIDmlL7ml7bmrrXmjqXlj6NcclxuICAgKiBAcGFyYW0ge1BhcmtpbmdUaW1lTW9kaWZ5fSBkYXRhIOivt+axguWPguaVsFxyXG4gICAqL1xyXG4gIHBhcmtpbmdUaW1lTW9kaWZ5TW9kZWwoZGF0YTogUGFya2luZ1RpbWVNb2RpZnkpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICBjb25zdCB1cmwgPSBgcGFya2luZy9wYXJraW5nVGltZU1vZGlmeWBcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIG1ldGhvZDogPE1ldGhvZD4nUE9TVCdcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDovabkvY3lvIDmlL7lhbPpl63mjqXlj6NcclxuICAgKiBAcGFyYW0ge01vZGlmeU9wZW5TdGF0ZX0gZGF0YSDor7fmsYLlj4LmlbBcclxuICAgKi9cclxuICBtb2RpZnlPcGVuU3RhdGVNb2RlbChkYXRhOiBNb2RpZnlPcGVuU3RhdGUpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICBjb25zdCB1cmwgPSBgcGFya2luZy9tb2RpZnlPcGVuU3RhdGVgXHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBtZXRob2Q6IDxNZXRob2Q+J1BPU1QnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5qC55o2u6ZSBaWTmn6XovabkvY3lvIDmlL7ml7bpl7RcclxuICAgKiBAcGFyYW0ge0xvY2tEYXRlfSBkYXRhIOivt+axguWPguaVsFxyXG4gICAqL1xyXG4gIGxvY2tEYXRlTW9kZWwoZGF0YTogTG9ja0RhdGUpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICBjb25zdCB1cmwgPSBgcGFya2luZy9sb2NrRGF0ZWBcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIG1ldGhvZDogPE1ldGhvZD4nR0VUJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOafpeivoumZhOi/keeahOWwj+WMulBPSURcclxuICAgKiBAcGFyYW0ge0xpc3RFc3RhdGVEaW1lbnNpb259IGRhdGEg6K+35rGC5Y+C5pWwXHJcbiAgICovXHJcbiAgbGlzdEVzdGF0ZURpbWVuc2lvbk1vZGVsKGRhdGE6IExpc3RFc3RhdGVEaW1lbnNpb24pOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICBjb25zdCB1cmwgPSBgcmVsZWFzZS9saXN0RXN0YXRlRGltZW5zaW9uYFxyXG4gICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgIHVybCxcclxuICAgICAgZGF0YSxcclxuICAgICAgbWV0aG9kOiA8TWV0aG9kPidQT1NUJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSlcclxuICB9XHJcbn0iXX0=