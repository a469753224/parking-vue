"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = exports.ReleaseStatus = exports.OpenStatus = void 0;
var OpenStatus;
(function (OpenStatus) {
    OpenStatus[OpenStatus["\u7A7A\u95F2"] = 1] = "\u7A7A\u95F2";
    OpenStatus[OpenStatus["\u4F7F\u7528\u4E2D"] = 2] = "\u4F7F\u7528\u4E2D";
    OpenStatus[OpenStatus["\u5DF2\u5173\u95ED"] = 3] = "\u5DF2\u5173\u95ED";
})(OpenStatus = exports.OpenStatus || (exports.OpenStatus = {}));
var ReleaseStatus;
(function (ReleaseStatus) {
    ReleaseStatus[ReleaseStatus["\u7533\u8BF7\u4E2D"] = 1] = "\u7533\u8BF7\u4E2D";
    ReleaseStatus[ReleaseStatus["\u5BA1\u6838\u5931\u8D25"] = 2] = "\u5BA1\u6838\u5931\u8D25";
    ReleaseStatus[ReleaseStatus["\u53D6\u6D88\u5BA1\u6838"] = 3] = "\u53D6\u6D88\u5BA1\u6838";
    ReleaseStatus[ReleaseStatus["\u5BA1\u6838\u901A\u8FC7"] = 5] = "\u5BA1\u6838\u901A\u8FC7";
})(ReleaseStatus = exports.ReleaseStatus || (exports.ReleaseStatus = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["\u5B8C\u6210"] = 0] = "\u5B8C\u6210";
    OrderStatus[OrderStatus["\u9884\u7559"] = 1] = "\u9884\u7559";
    OrderStatus[OrderStatus["\u4F7F\u7528"] = 2] = "\u4F7F\u7528";
    OrderStatus[OrderStatus["\u5F85\u4ED8"] = 3] = "\u5F85\u4ED8";
    OrderStatus[OrderStatus["\u53D6\u6D88"] = 4] = "\u53D6\u6D88";
    OrderStatus[OrderStatus["\u8D85\u65F6"] = 5] = "\u8D85\u65F6";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVudW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsSUFBWSxVQUlYO0FBSkQsV0FBWSxVQUFVO0lBQ3JCLDJEQUFRLENBQUE7SUFDUix1RUFBUyxDQUFBO0lBQ1QsdUVBQVMsQ0FBQTtBQUNWLENBQUMsRUFKVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUlyQjtBQUtELElBQVksYUFLWDtBQUxELFdBQVksYUFBYTtJQUN4Qiw2RUFBUyxDQUFBO0lBQ1QseUZBQVUsQ0FBQTtJQUNWLHlGQUFVLENBQUE7SUFDVix5RkFBVSxDQUFBO0FBQ1gsQ0FBQyxFQUxXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBS3hCO0FBS0QsSUFBWSxXQU9YO0FBUEQsV0FBWSxXQUFXO0lBQ3RCLDZEQUFRLENBQUE7SUFDUiw2REFBUSxDQUFBO0lBQ1IsNkRBQVEsQ0FBQTtJQUNSLDZEQUFRLENBQUE7SUFDUiw2REFBUSxDQUFBO0lBQ1IsNkRBQVEsQ0FBQTtBQUNULENBQUMsRUFQVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQU90QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDovabkvY3nirbmgIFcclxuICovXHJcbmV4cG9ydCBlbnVtIE9wZW5TdGF0dXMge1xyXG5cdCfnqbrpl7InID0gMSxcclxuXHQn5L2/55So5LitJyA9IDIsXHJcblx0J+W3suWFs+mXrScgPSAzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDovabkvY3lrqHmoLjnirbmgIFcclxuICovXHJcbmV4cG9ydCBlbnVtIFJlbGVhc2VTdGF0dXMge1xyXG5cdCfnlLPor7fkuK0nID0gMSxcclxuXHQn5a6h5qC45aSx6LSlJyA9IDIsXHJcblx0J+WPlua2iOWuoeaguCcgPSAzLFxyXG5cdCflrqHmoLjpgJrov4cnID0gNVxyXG59XHJcblxyXG4vKipcclxuICog5qC55o2u6K6i5Y2VaWTmn6Xor6LorqLljZXnmoTorqLljZXnirbmgIFcclxuICovXHJcbmV4cG9ydCBlbnVtIE9yZGVyU3RhdHVzIHtcclxuXHQn5a6M5oiQJyA9IDAsXHJcblx0J+mihOeVmScgPSAxLFxyXG5cdCfkvb/nlKgnID0gMixcclxuXHQn5b6F5LuYJyA9IDMsXHJcblx0J+WPlua2iCcgPSA0LFxyXG5cdCfotoXml7YnID0gNVxyXG59Il19