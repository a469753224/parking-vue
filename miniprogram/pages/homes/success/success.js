"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("../../../api/api/home/server");
var server = new server_1.default();
var util_1 = require("../../../utils/util");
Page({
    data: {
        order: {},
        orderId: ''
    },
    onLoad: function (options) {
        if (!util_1.isEmpty(options)) {
            var orderId = options.orderId;
            this.setData({
                orderId: orderId
            });
            this.orderBill();
        }
    },
    orderBill: function () {
        return __awaiter(this, void 0, void 0, function () {
            var orderId, param, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderId = this.data.orderId;
                        param = {
                            orderId: orderId
                        };
                        return [4, server.orderBill(param)];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            this.setData({
                                order: result.data
                            });
                        }
                        return [2];
                }
            });
        });
    },
    readOrder: function () {
        wx.reLaunch({
            url: "/pages/homes/orderDetail/orderDetail?orderId=" + this.data.orderId,
        });
    },
    backHome: function () {
        wx.reLaunch({
            url: "/pages/home/home",
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VjY2Vzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1Y2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1REFBcUQ7QUFHckQsSUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBVSxFQUFFLENBQUE7QUFHL0IsNENBQTJDO0FBRTNDLElBQUksQ0FBQztJQUtELElBQUksRUFBRTtRQUNGLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFFLEVBQUU7S0FDZDtJQUtELE1BQU0sRUFBRSxVQUFVLE9BQU87UUFDckIsSUFBRyxDQUFDLGNBQU8sQ0FBQyxPQUFPLENBQUMsRUFBQztZQUNaLElBQUEsT0FBTyxHQUFJLE9BQU8sUUFBWCxDQUFXO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsT0FBTyxTQUFBO2FBQ1YsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1NBQ25CO0lBQ0wsQ0FBQztJQUtLLFNBQVM7Ozs7Ozt3QkFDTCxPQUFPLEdBQUssSUFBSSxDQUFDLElBQUksUUFBZCxDQUFjO3dCQUNyQixLQUFLLEdBQUc7NEJBQ1YsT0FBTyxTQUFBO3lCQUNWLENBQUE7d0JBQ2MsV0FBTSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFBOzt3QkFBdEMsTUFBTSxHQUFHLFNBQTZCO3dCQUM1QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFOzRCQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDO2dDQUNULEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSTs2QkFDckIsQ0FBQyxDQUFBO3lCQUNMOzs7OztLQUNKO0lBS0QsU0FBUztRQUNMLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDVixHQUFHLEVBQUUsa0RBQWdELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBUztTQUN6RSxDQUFDLENBQUE7SUFDTixDQUFDO0lBS0QsUUFBUTtRQUNKLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDVixHQUFHLEVBQUUsa0JBQWtCO1NBQ3hCLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDlr7zlhaXmqKHlnZcgKi9cclxuaW1wb3J0IEhvbWVTZXJ2ZXIgZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS9ob21lL3NlcnZlcidcclxuXHJcbi8qIOWunuS+i+WMluaooeWdlyAqL1xyXG5jb25zdCBzZXJ2ZXIgPSBuZXcgSG9tZVNlcnZlcigpXHJcblxyXG4vKiDlr7zlhaXlt6XlhbfnsbsgKi9cclxuaW1wb3J0IHtpc0VtcHR5fSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJ1xyXG5cclxuUGFnZSh7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgICAqL1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIG9yZGVyOiB7fSxcclxuICAgICAgICBvcmRlcklkOiAnJ1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICAgKi9cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICBpZighaXNFbXB0eShvcHRpb25zKSl7XHJcbiAgICAgICAgICAgIGxldCB7b3JkZXJJZH0gPSBvcHRpb25zXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBvcmRlcklkIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLm9yZGVyQmlsbCgpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlui0puWNlVxyXG4gICAgICovXHJcbiAgICBhc3luYyBvcmRlckJpbGwoKSB7XHJcbiAgICAgICAgbGV0IHsgb3JkZXJJZCB9ID0gdGhpcy5kYXRhXHJcbiAgICAgICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgIG9yZGVySWRcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyLm9yZGVyQmlsbChwYXJhbSlcclxuICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgb3JkZXI6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOafpeeci+iuouWNlVxyXG4gICAgICovXHJcbiAgICByZWFkT3JkZXIoKXtcclxuICAgICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICB1cmw6IGAvcGFnZXMvaG9tZXMvb3JkZXJEZXRhaWwvb3JkZXJEZXRhaWw/b3JkZXJJZD0ke3RoaXMuZGF0YS5vcmRlcklkfWAsXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57pppbpobVcclxuICAgICAqL1xyXG4gICAgYmFja0hvbWUoKXtcclxuICAgICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICB1cmw6IGAvcGFnZXMvaG9tZS9ob21lYCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KSJdfQ==