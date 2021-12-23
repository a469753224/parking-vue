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
Component({
    properties: {
        show: {
            type: Boolean,
            value: false
        },
        title: {
            type: String,
            value: '提示'
        },
        content: {
            type: String,
            value: '这里是提示内容'
        },
        showCancel: {
            type: Boolean,
            value: true
        },
        cancelText: {
            type: String,
            value: '取消'
        },
        confirmText: {
            type: String,
            value: '确定'
        },
        slotBtn: {
            type: Boolean,
            value: false
        }
    },
    data: {},
    methods: {
        cancel: function () {
            this.setData({
                show: false
            });
        },
        confirm: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.triggerEvent('confirm');
                    this.setData({
                        show: false
                    });
                    return [2];
                });
            });
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVMsQ0FBQztJQUlULFVBQVUsRUFBRTtRQUNYLElBQUksRUFBRTtZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDWjtRQUNELEtBQUssRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLElBQUk7U0FDWDtRQUNELE9BQU8sRUFBRTtZQUNSLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLFNBQVM7U0FDaEI7UUFDRCxVQUFVLEVBQUU7WUFDWCxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxJQUFJO1NBQ1g7UUFDRCxVQUFVLEVBQUU7WUFDWCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxJQUFJO1NBQ1g7UUFDRCxXQUFXLEVBQUU7WUFDWixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxJQUFJO1NBQ1g7UUFDRCxPQUFPLEVBQUU7WUFDUixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ1o7S0FDRDtJQUtELElBQUksRUFBRSxFQUVMO0lBS0QsT0FBTyxFQUFFO1FBS1IsTUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1osSUFBSSxFQUFFLEtBQUs7YUFDWCxDQUFDLENBQUE7UUFDSCxDQUFDO1FBS0ssT0FBTzs7O29CQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUE7b0JBQzVCLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1osSUFBSSxFQUFFLEtBQUs7cUJBQ1gsQ0FBQyxDQUFBOzs7O1NBQ0Y7S0FFRDtDQUNELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvbW9kYWwvdGlwcy90aXBzLnRzXHJcblxyXG5Db21wb25lbnQoe1xyXG5cdC8qKlxyXG5cdCAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxyXG5cdCAqL1xyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdHNob3c6IHtcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0dmFsdWU6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0dGl0bGU6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHR2YWx1ZTogJ+aPkOekuidcclxuXHRcdH0sXHJcblx0XHRjb250ZW50OiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0dmFsdWU6ICfov5nph4zmmK/mj5DnpLrlhoXlrrknXHJcblx0XHR9LFxyXG5cdFx0c2hvd0NhbmNlbDoge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHR2YWx1ZTogdHJ1ZVxyXG5cdFx0fSxcclxuXHRcdGNhbmNlbFRleHQ6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHR2YWx1ZTogJ+WPlua2iCdcclxuXHRcdH0sXHJcblx0XHRjb25maXJtVGV4dDoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdHZhbHVlOiAn56Gu5a6aJ1xyXG5cdFx0fSxcclxuXHRcdHNsb3RCdG46IHtcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0dmFsdWU6IGZhbHNlXHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICog57uE5Lu255qE5Yid5aeL5pWw5o2uXHJcblx0ICovXHJcblx0ZGF0YToge1xyXG5cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDnu4Tku7bnmoTmlrnms5XliJfooahcclxuXHQgKi9cclxuXHRtZXRob2RzOiB7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDlj5bmtojliKDpmaTljoblj7LorqLljZVcclxuXHRcdCAqL1xyXG5cdFx0Y2FuY2VsKCkge1xyXG5cdFx0XHR0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdHNob3c6IGZhbHNlXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICog5Yig6Zmk5Y6G5Y+y6K6i5Y2VXHJcblx0XHQgKi9cclxuXHRcdGFzeW5jIGNvbmZpcm0oKSB7XHJcblx0XHRcdHRoaXMudHJpZ2dlckV2ZW50KCdjb25maXJtJylcclxuXHRcdFx0dGhpcy5zZXREYXRhKHtcclxuXHRcdFx0XHRzaG93OiBmYWxzZVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHJcblx0fVxyXG59KVxyXG4iXX0=