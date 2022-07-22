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
var LockModel = (function (_super) {
    __extends(LockModel, _super);
    function LockModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LockModel.prototype.unlockModel = function (data) {
        var url = "https://lock.liuchewei.com/manageLock/unlock";
        var param = {
            url: url,
            data: data,
            method: 'GET',
            overall: true,
            loadStatus: true,
            loading: '解锁中...',
        };
        return this.request(param);
    };
    return LockModel;
}(http_1.default));
exports.default = LockModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0Q0FBc0M7QUFXdEM7SUFBdUMsNkJBQUk7SUFBM0M7O0lBaUJBLENBQUM7SUFaQywrQkFBVyxHQUFYLFVBQVksSUFBWTtRQUN0QixJQUFNLEdBQUcsR0FBRyw4Q0FBOEMsQ0FBQTtRQUMxRCxJQUFNLEtBQUssR0FBRztZQUNaLEdBQUcsS0FBQTtZQUNILElBQUksTUFBQTtZQUNKLE1BQU0sRUFBVSxLQUFLO1lBQ3JCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLElBQUk7WUFDaEIsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBakJELENBQXVDLGNBQUksR0FpQjFDIiwic291cmNlc0NvbnRlbnQiOlsiLyog5a+85YWl6K+35rGC57G7ICovXHJcbmltcG9ydCBIdHRwIGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnXHJcblxyXG4vKiDlr7zlhaXor7fmsYLlj4LmlbDmjqXlj6MgVFPmjqXlj6PnsbvlnosgKi9cclxuaW1wb3J0IHsgVW5sb2NrIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3JlcXVlc3RJbnRlcmZhY2UvbG9jaydcclxuXHJcbi8qIOWvvOWFpee9kee7nOivt+axguaOpeWPoyBUU+aOpeWPo+exu+WeiyAqL1xyXG5pbXBvcnQgeyBNZXRob2QsUmVxdWVzdFByb21pc2UgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9odHRwJ1xyXG5cclxuLyoqXHJcbiAqIOi9pumUgeaooeWdly3mqKHlnovlsYJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2tNb2RlbCBleHRlbmRzIEh0dHAge1xyXG4gIC8qKlxyXG4gICAqIOino+mUgeaOpeWPo1xyXG4gICAqIEBwYXJhbSB7VW5sb2NrfSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICB1bmxvY2tNb2RlbChkYXRhOiBVbmxvY2spOlJlcXVlc3RQcm9taXNlIHtcclxuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2xvY2subGl1Y2hld2VpLmNvbS9tYW5hZ2VMb2NrL3VubG9ja2BcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIG1ldGhvZDogPE1ldGhvZD4nR0VUJyxcclxuICAgICAgb3ZlcmFsbDogdHJ1ZSxcclxuICAgICAgbG9hZFN0YXR1czogdHJ1ZSxcclxuICAgICAgbG9hZGluZzogJ+ino+mUgeS4rS4uLicsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gIH1cclxufSJdfQ==