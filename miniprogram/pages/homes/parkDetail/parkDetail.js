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
var server_1 = require("../../../api/api/car/server");
var server = new server_1.default();
var util_1 = require("../../../utils/util");
Page({
    data: {
        show: false,
        estateId: '',
        empty_park: '',
        isPark: false,
        parkInfo: {
            name: '非合作停车场',
            streetAddress: '',
            cost: 0
        }
    },
    onLoad: function (options) {
        if (!util_1.isEmpty(options)) {
            this.setData({
                isPark: true,
                estateId: options.estateId
            });
            this.userQueryDetails();
        }
    },
    userQueryDetails: function () {
        return __awaiter(this, void 0, void 0, function () {
            var estateId, result, isPark, parkInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        estateId = this.data.estateId;
                        return [4, server.userQueryDetails({ estateId: estateId })];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            isPark = result.data.parkingConunt == 0 ? false : true;
                            parkInfo = result.data.parkingConunt == 0 ? this.data.parkInfo : result.data;
                            this.setData({
                                isPark: isPark,
                                parkInfo: parkInfo
                            });
                        }
                        return [2];
                }
            });
        });
    },
    resever: function () {
        var estateId = this.data.estateId;
        if (util_1.isEmpty(estateId)) {
            wx.showToast({
                title: '抱歉，该停车场暂无开放车位',
            });
        }
        else {
            var parkInfo = this.data.parkInfo;
            wx.navigateTo({
                url: "/pages/homes/keepPark/keepPark?parkInfo=" + JSON.stringify(parkInfo)
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFya0RldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhcmtEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzREFBbUQ7QUFHbkQsSUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBUyxFQUFFLENBQUE7QUFNOUIsNENBQTZDO0FBRTdDLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxLQUFLO1FBQ1gsUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsRUFBRTtRQUNkLE1BQU0sRUFBRSxLQUFLO1FBQ2IsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLFFBQVE7WUFDZCxhQUFhLEVBQUUsRUFBRTtZQUNqQixJQUFJLEVBQUUsQ0FBQztTQUNSO0tBQ0Y7SUFLRCxNQUFNLEVBQUUsVUFBVSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxjQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxNQUFNLEVBQUUsSUFBSTtnQkFDWixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7YUFDM0IsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7U0FDeEI7SUFDSCxDQUFDO0lBS0ssZ0JBQWdCOzs7Ozs7d0JBQ2QsUUFBUSxHQUFLLElBQUksQ0FBQyxJQUFJLFNBQWQsQ0FBYzt3QkFDYixXQUFNLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFBOzt3QkFBOUQsTUFBTSxHQUFHLFNBQXFEO3dCQUNwRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFOzRCQUNoQixNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTs0QkFDdEQsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUE7NEJBQ2hGLElBQUksQ0FBQyxPQUFPLENBQUM7Z0NBQ1gsTUFBTSxRQUFBO2dDQUNOLFFBQVEsVUFBQTs2QkFDVCxDQUFDLENBQUE7eUJBQ0g7Ozs7O0tBQ0Y7SUFLRCxPQUFPLEVBQVA7UUFDUSxJQUFBLFFBQVEsR0FBSyxJQUFJLENBQUMsSUFBSSxTQUFkLENBQWM7UUFDNUIsSUFBSSxjQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDckIsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsZUFBZTthQUN2QixDQUFDLENBQUE7U0FDSDthQUFNO1lBQ0MsSUFBQSxRQUFRLEdBQVUsSUFBSSxDQUFDLElBQUksU0FBbkIsQ0FBbUI7WUFDakMsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsNkNBQTJDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFHO2FBQzNFLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIOWvvOWFpeaooeWdlyAqL1xyXG5pbXBvcnQgQ2FyU2VydmVyIGZyb20gJy4uLy4uLy4uL2FwaS9hcGkvY2FyL3NlcnZlcidcclxuXHJcbi8qIOWunuS+i+WMluaooeWdlyAqL1xyXG5jb25zdCBzZXJ2ZXIgPSBuZXcgQ2FyU2VydmVyKClcclxuXHJcbi8qIOW8leWFpWJhc2U2NOWbvueJhyAqL1xyXG4vLyBpbXBvcnQgeyBlbXB0eV9wYXJrIH0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Jhc2U2NC9iYW5uZXInXHJcblxyXG4vKiDlt6Xlhbfnsbvlr7zlhaUgKi9cclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnXHJcblxyXG5QYWdlKHtcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgc2hvdzogZmFsc2UsXHJcbiAgICBlc3RhdGVJZDogJycsXHJcbiAgICBlbXB0eV9wYXJrOiAnJyxcclxuICAgIGlzUGFyazogZmFsc2UsXHJcbiAgICBwYXJrSW5mbzoge1xyXG4gICAgICBuYW1lOiAn6Z2e5ZCI5L2c5YGc6L2m5Zy6JyxcclxuICAgICAgc3RyZWV0QWRkcmVzczogJycsXHJcbiAgICAgIGNvc3Q6IDBcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIGlmICghaXNFbXB0eShvcHRpb25zKSkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGlzUGFyazogdHJ1ZSxcclxuICAgICAgICBlc3RhdGVJZDogb3B0aW9ucy5lc3RhdGVJZFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnVzZXJRdWVyeURldGFpbHMoKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOWBnOi9puWcuuivpuaDhVxyXG4gICAqL1xyXG4gIGFzeW5jIHVzZXJRdWVyeURldGFpbHMoKSB7XHJcbiAgICBsZXQgeyBlc3RhdGVJZCB9ID0gdGhpcy5kYXRhXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZXJ2ZXIudXNlclF1ZXJ5RGV0YWlscyh7IGVzdGF0ZUlkOiBlc3RhdGVJZCB9KVxyXG4gICAgaWYgKHJlc3VsdC5jb2RlID09IDApIHtcclxuICAgICAgbGV0IGlzUGFyayA9IHJlc3VsdC5kYXRhLnBhcmtpbmdDb251bnQgPT0gMCA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICBsZXQgcGFya0luZm8gPSByZXN1bHQuZGF0YS5wYXJraW5nQ29udW50ID09IDAgPyB0aGlzLmRhdGEucGFya0luZm8gOiByZXN1bHQuZGF0YVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGlzUGFyayxcclxuICAgICAgICBwYXJrSW5mb1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmihOeVmei9puS9jVxyXG4gICAqL1xyXG4gIHJlc2V2ZXIoKSB7XHJcbiAgICBsZXQgeyBlc3RhdGVJZCB9ID0gdGhpcy5kYXRhXHJcbiAgICBpZiAoaXNFbXB0eShlc3RhdGVJZCkpIHtcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogJ+aKseatie+8jOivpeWBnOi9puWcuuaaguaXoOW8gOaUvui9puS9jScsXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgeyBwYXJrSW5mbyB9ID0gPGFueT50aGlzLmRhdGFcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiBgL3BhZ2VzL2hvbWVzL2tlZXBQYXJrL2tlZXBQYXJrP3BhcmtJbmZvPSR7SlNPTi5zdHJpbmdpZnkocGFya0luZm8pfWBcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0pIl19