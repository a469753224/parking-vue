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
var UserModel = (function (_super) {
    __extends(UserModel, _super);
    function UserModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserModel.prototype.addVehiclePlateModel = function (data) {
        var url = "myMenu/addVehiclePlate";
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    UserModel.prototype.setPlateDevaultModel = function (data) {
        var url = "myMenu/setPlateDevault";
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    UserModel.prototype.deletePlateModel = function (data) {
        var url = "myMenu/deletePlate";
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    UserModel.prototype.selectPlateAllModel = function (data) {
        var url = "myMenu/selectPlateAll";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    UserModel.prototype.myMenuInformationModel = function (data) {
        var url = "myMenu/myMenuInformation";
        var param = {
            url: url,
            data: data,
            method: 'GET'
        };
        return this.request(param);
    };
    UserModel.prototype.modifyPasswordModel = function (data) {
        var url = "user/modifyPassword";
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    UserModel.prototype.modifyNameModel = function (data) {
        var url = "myMenu/modifyName";
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    UserModel.prototype.forgetPasswordModifyModel = function (data) {
        var url = "user/forgetPasswordModify";
        var param = {
            url: url,
            data: data,
            method: 'POST'
        };
        return this.request(param);
    };
    return UserModel;
}(http_1.default));
exports.default = UserModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0Q0FBc0M7QUFrQnRDO0lBQXVDLDZCQUFJO0lBQTNDOztJQWdIQSxDQUFDO0lBM0dDLHdDQUFvQixHQUFwQixVQUFxQixJQUFxQjtRQUN4QyxJQUFNLEdBQUcsR0FBRyx3QkFBd0IsQ0FBQTtRQUNwQyxJQUFNLEtBQUssR0FBRztZQUNaLEdBQUcsS0FBQTtZQUNILElBQUksTUFBQTtZQUNKLE1BQU0sRUFBVSxNQUFNO1NBQ3ZCLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQU1ELHdDQUFvQixHQUFwQixVQUFxQixJQUFxQjtRQUN4QyxJQUFNLEdBQUcsR0FBRyx3QkFBd0IsQ0FBQTtRQUNwQyxJQUFNLEtBQUssR0FBRztZQUNaLEdBQUcsS0FBQTtZQUNILElBQUksTUFBQTtZQUNKLE1BQU0sRUFBVSxNQUFNO1NBQ3ZCLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQU1ELG9DQUFnQixHQUFoQixVQUFpQixJQUFpQjtRQUNoQyxJQUFNLEdBQUcsR0FBRyxvQkFBb0IsQ0FBQTtRQUNoQyxJQUFNLEtBQUssR0FBRztZQUNaLEdBQUcsS0FBQTtZQUNILElBQUksTUFBQTtZQUNKLE1BQU0sRUFBVSxNQUFNO1NBQ3ZCLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQU1ELHVDQUFtQixHQUFuQixVQUFvQixJQUFTO1FBQzNCLElBQU0sR0FBRyxHQUFHLHVCQUF1QixDQUFBO1FBQ25DLElBQU0sS0FBSyxHQUFHO1lBQ1osR0FBRyxLQUFBO1lBQ0gsSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFVLEtBQUs7U0FDdEIsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBTUQsMENBQXNCLEdBQXRCLFVBQXVCLElBQVM7UUFDOUIsSUFBTSxHQUFHLEdBQUcsMEJBQTBCLENBQUE7UUFDdEMsSUFBTSxLQUFLLEdBQUc7WUFDWixHQUFHLEtBQUE7WUFDSCxJQUFJLE1BQUE7WUFDSixNQUFNLEVBQVUsS0FBSztTQUN0QixDQUFBO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFNRCx1Q0FBbUIsR0FBbkIsVUFBb0IsSUFBb0I7UUFDdEMsSUFBTSxHQUFHLEdBQUcscUJBQXFCLENBQUE7UUFDakMsSUFBTSxLQUFLLEdBQUc7WUFDWixHQUFHLEtBQUE7WUFDSCxJQUFJLE1BQUE7WUFDSixNQUFNLEVBQVUsTUFBTTtTQUN2QixDQUFBO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFNRCxtQ0FBZSxHQUFmLFVBQWdCLElBQWdCO1FBQzlCLElBQU0sR0FBRyxHQUFHLG1CQUFtQixDQUFBO1FBQy9CLElBQU0sS0FBSyxHQUFHO1lBQ1osR0FBRyxLQUFBO1lBQ0gsSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFVLE1BQU07U0FDdkIsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBTUQsNkNBQXlCLEdBQXpCLFVBQTBCLElBQTBCO1FBQ2xELElBQU0sR0FBRyxHQUFHLDJCQUEyQixDQUFBO1FBQ3ZDLElBQU0sS0FBSyxHQUFHO1lBQ1osR0FBRyxLQUFBO1lBQ0gsSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFVLE1BQU07U0FDdkIsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBaEhELENBQXVDLGNBQUksR0FnSDFDIiwic291cmNlc0NvbnRlbnQiOlsiLyog5a+85YWl6K+35rGC57G7ICovXHJcbmltcG9ydCBIdHRwIGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnXHJcblxyXG4vKiDlr7zlhaXor7fmsYLlj4LmlbDmjqXlj6MgVFPmjqXlj6PnsbvlnosgKi9cclxuaW1wb3J0IHtcclxuICBBZGRWZWhpY2xlUGxhdGUsXHJcbiAgU2V0UGxhdGVEZXZhdWx0LFxyXG4gIERlbGV0ZVBsYXRlLFxyXG4gIE1vZGlmeVBhc3N3b3JkLFxyXG4gIE1vZGlmeU5hbWUsXHJcbiAgRm9yZ2V0UGFzc3dvcmRNb2RpZnlcclxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvcmVxdWVzdEludGVyZmFjZS91c2VyJ1xyXG5cclxuLyog5a+85YWl572R57uc6K+35rGC5o6l5Y+jIFRT5o6l5Y+j57G75Z6LICovXHJcbmltcG9ydCB7IE1ldGhvZCwgUmVxdWVzdFByb21pc2UgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9odHRwJ1xyXG5cclxuLyoqXHJcbiAqIOeUqOaIt+aooeWdly3mqKHlnovlsYJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJNb2RlbCBleHRlbmRzIEh0dHAge1xyXG4gIC8qKlxyXG4gICAgICog5re75Yqg6L2m6L6G5o6l5Y+jXHJcbiAgICAgKiBAcGFyYW0ge0FkZFZlaGljbGVQbGF0ZX0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICAgKi9cclxuICBhZGRWZWhpY2xlUGxhdGVNb2RlbChkYXRhOiBBZGRWZWhpY2xlUGxhdGUpOiBSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICBjb25zdCB1cmwgPSBgbXlNZW51L2FkZFZlaGljbGVQbGF0ZWBcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIG1ldGhvZDogPE1ldGhvZD4nUE9TVCdcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDorr7nva7pu5jorqTovabovobmjqXlj6NcclxuICAgKiBAcGFyYW0ge1NldFBsYXRlRGV2YXVsdH0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgc2V0UGxhdGVEZXZhdWx0TW9kZWwoZGF0YTogU2V0UGxhdGVEZXZhdWx0KTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgY29uc3QgdXJsID0gYG15TWVudS9zZXRQbGF0ZURldmF1bHRgXHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBtZXRob2Q6IDxNZXRob2Q+J1BPU1QnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Yig6Zmk6L2m6L6G5o6l5Y+jXHJcbiAgICogQHBhcmFtIHtEZWxldGVQbGF0ZX0gZGF0YSDor7fmsYLlj4LmlbAgXHJcbiAgICovXHJcbiAgZGVsZXRlUGxhdGVNb2RlbChkYXRhOiBEZWxldGVQbGF0ZSk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIGNvbnN0IHVybCA9IGBteU1lbnUvZGVsZXRlUGxhdGVgXHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBtZXRob2Q6IDxNZXRob2Q+J1BPU1QnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5p+l6K+i55So5oi35omA5pyJ6L2m6L6G5o6l5Y+jXHJcbiAgICogQHBhcmFtIHthbnl9IGRhdGEg6K+35rGC5Y+C5pWwIFxyXG4gICAqL1xyXG4gIHNlbGVjdFBsYXRlQWxsTW9kZWwoZGF0YTogYW55KTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgY29uc3QgdXJsID0gYG15TWVudS9zZWxlY3RQbGF0ZUFsbGBcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIG1ldGhvZDogPE1ldGhvZD4nR0VUJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaIkeeahOWvvOiIquagj+S/oeaBr+aOpeWPo1xyXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICBteU1lbnVJbmZvcm1hdGlvbk1vZGVsKGRhdGE6IGFueSk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIGNvbnN0IHVybCA9IGBteU1lbnUvbXlNZW51SW5mb3JtYXRpb25gXHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBtZXRob2Q6IDxNZXRob2Q+J0dFVCdcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDkv67mlLnlr4bnoIHmjqXlj6NcclxuICAgKiBAcGFyYW0ge01vZGlmeVBhc3N3b3JkfSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICBtb2RpZnlQYXNzd29yZE1vZGVsKGRhdGE6IE1vZGlmeVBhc3N3b3JkKTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgY29uc3QgdXJsID0gYHVzZXIvbW9kaWZ5UGFzc3dvcmRgXHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBtZXRob2Q6IDxNZXRob2Q+J1BPU1QnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5L+u5pS55pi156ewXHJcbiAgICogQHBhcmFtIHtNb2RpZnlOYW1lfSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICBtb2RpZnlOYW1lTW9kZWwoZGF0YTogTW9kaWZ5TmFtZSk6IFJlcXVlc3RQcm9taXNlIHtcclxuICAgIGNvbnN0IHVybCA9IGBteU1lbnUvbW9kaWZ5TmFtZWBcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIG1ldGhvZDogPE1ldGhvZD4nUE9TVCdcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDkv67mlLnmmLXnp7BcclxuICAgKiBAcGFyYW0ge0ZvcmdldFBhc3N3b3JkTW9kaWZ5fSBkYXRhIOivt+axguWPguaVsCBcclxuICAgKi9cclxuICBmb3JnZXRQYXNzd29yZE1vZGlmeU1vZGVsKGRhdGE6IEZvcmdldFBhc3N3b3JkTW9kaWZ5KTogUmVxdWVzdFByb21pc2Uge1xyXG4gICAgY29uc3QgdXJsID0gYHVzZXIvZm9yZ2V0UGFzc3dvcmRNb2RpZnlgXHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgdXJsLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBtZXRob2Q6IDxNZXRob2Q+J1BPU1QnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHBhcmFtKVxyXG4gIH1cclxufSJdfQ==