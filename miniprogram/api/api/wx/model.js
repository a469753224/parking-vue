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
var WxModel = (function (_super) {
    __extends(WxModel, _super);
    function WxModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WxModel.prototype.prePermissionsModel = function (data) {
        var url = 'PrePermissions';
        var param = {
            url: url,
            data: data,
            loadStatus: true,
            loading: '请求中...',
            method: 'POST'
        };
        return this.request(param);
    };
    return WxModel;
}(http_1.default));
exports.default = WxModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0Q0FBc0M7QUFNdEM7SUFBcUMsMkJBQUk7SUFBekM7O0lBaUJBLENBQUM7SUFaRyxxQ0FBbUIsR0FBbkIsVUFBb0IsSUFBb0I7UUFDcEMsSUFBTSxHQUFHLEdBQUcsZ0JBQWdCLENBQUE7UUFDNUIsSUFBTSxLQUFLLEdBQUc7WUFDVixHQUFHLEtBQUE7WUFDSCxJQUFJLE1BQUE7WUFDSixVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUUsUUFBUTtZQUNqQixNQUFNLEVBQVUsTUFBTTtTQUN6QixDQUFBO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFFTCxjQUFDO0FBQUQsQ0FBQyxBQWpCRCxDQUFxQyxjQUFJLEdBaUJ4QyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGh0dHDor7fmsYLlsIHoo4Xlr7zlhaUgKi9cclxuaW1wb3J0IEh0dHAgZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCdcclxuXHJcbi8qIOWvvOWFpVRT5o6l5Y+jICovXHJcbmltcG9ydCB7IE1ldGhvZCwgUmVxdWVzdFByb21pc2UgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9odHRwJ1xyXG5pbXBvcnQgeyBQcmVQZXJtaXNzaW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9yZXF1ZXN0SW50ZXJmYWNlL3d4L3d4J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV3hNb2RlbCBleHRlbmRzIEh0dHAge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b6u5L+h5pSv5LuY5YiG6aKE5o6I5p2DXHJcbiAgICAgKi9cclxuICAgIHByZVBlcm1pc3Npb25zTW9kZWwoZGF0YTogUHJlUGVybWlzc2lvbnMpOlJlcXVlc3RQcm9taXNlIHtcclxuICAgICAgICBjb25zdCB1cmwgPSAnUHJlUGVybWlzc2lvbnMnXHJcbiAgICAgICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgbG9hZFN0YXR1czogdHJ1ZSxcclxuICAgICAgICAgICAgbG9hZGluZzogJ+ivt+axguS4rS4uLicsXHJcbiAgICAgICAgICAgIG1ldGhvZDogPE1ldGhvZD4nUE9TVCdcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSlcclxuICAgIH1cclxuXHJcbn0iXX0=