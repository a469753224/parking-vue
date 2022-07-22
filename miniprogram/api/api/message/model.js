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
var MessageModel = (function (_super) {
    __extends(MessageModel, _super);
    function MessageModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageModel.prototype.sendMsgModel = function (data) {
        var url = "sendMsg";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    MessageModel.prototype.sendMsgPasswordModel = function (data) {
        var url = "sendMsgPassword";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    return MessageModel;
}(http_1.default));
exports.default = MessageModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFPQSw0Q0FBc0M7QUFLdEM7SUFBMEMsZ0NBQUk7SUFBOUM7O0lBOEJBLENBQUM7SUF4QkcsbUNBQVksR0FBWixVQUFhLElBQVM7UUFDbEIsSUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFBO1FBQ3JCLElBQU0sS0FBSyxHQUFHO1lBQ1YsR0FBRyxLQUFBO1lBQ0gsSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFVLEtBQUs7U0FDeEIsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBTUQsMkNBQW9CLEdBQXBCLFVBQXFCLElBQW9CO1FBQ3JDLElBQU0sR0FBRyxHQUFHLGlCQUFpQixDQUFBO1FBQzdCLElBQU0sS0FBSyxHQUFHO1lBQ1YsR0FBRyxLQUFBO1lBQ0gsSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFVLEtBQUs7U0FDeEIsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQUFDLEFBOUJELENBQTBDLGNBQUksR0E4QjdDIiwic291cmNlc0NvbnRlbnQiOlsiLyog5a+85YWl5ZON5bqU5pWw5o2u5o6l5Y+jICovXHJcbmltcG9ydCB7IE1ldGhvZCwgUmVxdWVzdFByb21pc2UgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9odHRwJ1xyXG5cclxuLyog5a+85YWl6K+35rGC5Y+C5pWw5o6l5Y+jICovXHJcbmltcG9ydCB7IHNlbmRNc2dQYXNzd29yZCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9yZXF1ZXN0SW50ZXJmYWNlL21lc3NhZ2UnXHJcblxyXG4vKiDlr7zlhaXor7fmsYLnsbsgKi9cclxuaW1wb3J0IEh0dHAgZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCdcclxuXHJcbi8qKlxyXG4gKiDnn63kv6HmqKHlnZct5pWw5o2u5qih5Z6LXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlTW9kZWwgZXh0ZW5kcyBIdHRwIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeZu+W9leazqOWGjOWPkeefreS/oeaOpeWPo1xyXG4gICAgICogQHBhcmFtIHthbnl9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAgICovXHJcbiAgICBzZW5kTXNnTW9kZWwoZGF0YTogYW55KTpSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYHNlbmRNc2dgXHJcbiAgICAgICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgbWV0aG9kOiA8TWV0aG9kPidHRVQnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkv67mlLnlr4bnoIHlkozmlK/ku5jlr4bnoIHnn63kv6HmjqXlj6NcclxuICAgICAqIEBwYXJhbSB7c2VuZE1zZ1Bhc3N3b3JkfSBkYXRhIOivt+axguWPguaVsCBcclxuICAgICAqL1xyXG4gICAgc2VuZE1zZ1Bhc3N3b3JkTW9kZWwoZGF0YTpzZW5kTXNnUGFzc3dvcmQpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgc2VuZE1zZ1Bhc3N3b3JkYFxyXG4gICAgICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIG1ldGhvZDogPE1ldGhvZD4nR0VUJ1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gICAgfVxyXG5cclxufSJdfQ==