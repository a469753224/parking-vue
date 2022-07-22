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
var util_1 = require("../../../utils/util");
var server_1 = require("../../../api/api/lock/server");
var server = new server_1.default();
Page({
    data: {
        lockerId: '',
        timeData: {},
        isCode: false,
        time: 60 * 1000,
    },
    onLoad: function (options) {
        if (!util_1.isEmpty(options)) {
            var lockerId = options.lockerId;
            this.setData({
                lockerId: lockerId
            });
        }
    },
    onChange: function (e) {
        this.setData({
            timeData: e.detail,
        });
    },
    finish: function () {
        this.setData({
            isCode: false
        });
    },
    unlock: function () {
        return __awaiter(this, void 0, void 0, function () {
            var lockerId, param, result, title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lockerId = this.data.lockerId;
                        param = { lockerId: lockerId };
                        return [4, server.unlock(param)];
                    case 1:
                        result = _a.sent();
                        title = result.code == 0 ? '解锁成功' : result.msg;
                        if (result.code == 0) {
                            this.setData({
                                isCode: true
                            });
                        }
                        wx.showToast({
                            title: title,
                            icon: 'none'
                        });
                        return [2];
                }
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5sb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidW5sb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNENBQTZDO0FBRzdDLHVEQUFpRDtBQUdqRCxJQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFNLEVBQUUsQ0FBQTtBQUUzQixJQUFJLENBQUM7SUFLSixJQUFJLEVBQUU7UUFDTCxRQUFRLEVBQUUsRUFBRTtRQUNaLFFBQVEsRUFBRSxFQUFFO1FBQ1osTUFBTSxFQUFFLEtBQUs7UUFDYixJQUFJLEVBQUUsRUFBRSxHQUFHLElBQUk7S0FDZjtJQUtELE1BQU0sRUFBRSxVQUFVLE9BQU87UUFDeEIsSUFBSSxDQUFDLGNBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNoQixJQUFBLFFBQVEsR0FBSyxPQUFPLFNBQVosQ0FBWTtZQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNaLFFBQVEsVUFBQTthQUNSLENBQUMsQ0FBQTtTQUNGO0lBQ0YsQ0FBQztJQU1ELFFBQVEsRUFBUixVQUFTLENBQWtCO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU07U0FDbEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUtELE1BQU07UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1osTUFBTSxFQUFFLEtBQUs7U0FDYixDQUFDLENBQUE7SUFDSCxDQUFDO0lBS0ssTUFBTTs7Ozs7O3dCQUNILFFBQVEsR0FBSyxJQUFJLENBQUMsSUFBSSxTQUFkLENBQWM7d0JBQ3hCLEtBQUssR0FBRyxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUE7d0JBQ1gsV0FBTSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFBOzt3QkFBbkMsTUFBTSxHQUFHLFNBQTBCO3dCQUNuQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQTt3QkFDcEQsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTs0QkFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQ0FDWixNQUFNLEVBQUUsSUFBSTs2QkFDWixDQUFDLENBQUE7eUJBQ0Y7d0JBQ0QsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0QkFDWixLQUFLLE9BQUE7NEJBQ0wsSUFBSSxFQUFFLE1BQU07eUJBQ1osQ0FBQyxDQUFBOzs7OztLQUNGO0NBRUQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyog5a+85YWl5bel5YW357G7ICovXHJcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJ1xyXG5cclxuLyog5a+85YWl5qih5Z2XICovXHJcbmltcG9ydCBTZXJ2ZXIgZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS9sb2NrL3NlcnZlcidcclxuXHJcbi8qIOWunuS+i+WMluaooeWdlyAqL1xyXG5jb25zdCBzZXJ2ZXIgPSBuZXcgU2VydmVyKClcclxuXHJcblBhZ2Uoe1xyXG5cclxuXHQvKipcclxuXHQgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuXHQgKi9cclxuXHRkYXRhOiB7XHJcblx0XHRsb2NrZXJJZDogJycsXHJcblx0XHR0aW1lRGF0YToge30sXHJcblx0XHRpc0NvZGU6IGZhbHNlLFxyXG5cdFx0dGltZTogNjAgKiAxMDAwLFxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcblx0ICovXHJcblx0b25Mb2FkOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cdFx0aWYgKCFpc0VtcHR5KG9wdGlvbnMpKSB7XHJcblx0XHRcdGxldCB7IGxvY2tlcklkIH0gPSBvcHRpb25zXHJcblx0XHRcdHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0bG9ja2VySWRcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDorr7nva7ml7bpl7RcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gZSDoioLngrnlr7nosaEgXHJcblx0ICovXHJcblx0b25DaGFuZ2UoZTogeyBkZXRhaWw6IGFueSB9KSB7XHJcblx0XHR0aGlzLnNldERhdGEoe1xyXG5cdFx0XHR0aW1lRGF0YTogZS5kZXRhaWwsXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDlgJLorqHml7bnu5PmnZ/lm57osINcclxuXHQgKi9cclxuXHRmaW5pc2goKSB7XHJcblx0XHR0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRpc0NvZGU6IGZhbHNlXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIOino+mUgeWBnOi9plxyXG5cdCAqL1xyXG5cdGFzeW5jIHVubG9jaygpIHtcclxuXHRcdGNvbnN0IHsgbG9ja2VySWQgfSA9IHRoaXMuZGF0YVxyXG5cdFx0Y29uc3QgcGFyYW0gPSB7IGxvY2tlcklkIH1cclxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci51bmxvY2socGFyYW0pXHJcblx0XHRjb25zdCB0aXRsZSA9IHJlc3VsdC5jb2RlID09IDAgPyAn6Kej6ZSB5oiQ5YqfJyA6IHJlc3VsdC5tc2dcclxuXHRcdGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcblx0XHRcdHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0aXNDb2RlOiB0cnVlXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0XHR3eC5zaG93VG9hc3Qoe1xyXG5cdFx0XHR0aXRsZSxcclxuXHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcbn0pIl19