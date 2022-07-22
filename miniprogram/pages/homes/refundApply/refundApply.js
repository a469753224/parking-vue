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
var upload_1 = require("../../../utils/upload");
var upload = new upload_1.default();
Page({
    data: {
        max: 200,
        surplus: 0,
        image: [],
        show: false,
        reason: false
    },
    onLoad: function (_options) { },
    onCharging: function (e) {
        this.setData({
            reason: e.detail
        });
    },
    conputed: function (e) {
        var reason = e.detail.reason;
        this.setData({
            surplus: this.data.max - reason.length,
        });
    },
    chooseUpload: function () {
        this.setData({
            show: true
        });
    },
    chooseImage: function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var type, result, image;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        type = e.currentTarget.dataset.type;
                        return [4, upload.chooseImage(type)];
                    case 1:
                        result = _a.sent();
                        if (result.code === 200) {
                            this.setData({
                                show: false
                            });
                            image = this.data.image;
                            image.push(result.data);
                            this.setData({ image: image });
                        }
                        return [2];
                }
            });
        });
    },
    deleteVoucher: function (e) {
        var index = e.currentTarget.dataset.index;
        var image = this.data.image;
        image.splice(index, 1);
        this.setData({
            image: image
        });
    },
    applyRefund: function () {
        var _a = this.data, reason = _a.reason, image = _a.image;
        if (!reason) {
            wx.showToast({
                title: '请说明情况',
                icon: 'none',
            });
            return;
        }
        if (image.length === 0) {
            wx.showToast({
                title: '请上传凭证',
                icon: 'none',
            });
            return;
        }
        console.log('看验证通过，请求接口');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmdW5kQXBwbHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWZ1bmRBcHBseS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGdEQUEwQztBQUcxQyxJQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFNLEVBQUUsQ0FBQTtBQUUzQixJQUFJLENBQUM7SUFLRCxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUUsR0FBRztRQUNSLE9BQU8sRUFBRSxDQUFDO1FBQ1YsS0FBSyxFQUFFLEVBQUU7UUFDVCxJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSxLQUFLO0tBQ2hCO0lBS0QsTUFBTSxFQUFFLFVBQVUsUUFBUSxJQUFHLENBQUM7SUFHOUIsVUFBVSxFQUFWLFVBQVcsQ0FBa0I7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTTtTQUNuQixDQUFDLENBQUE7SUFDTixDQUFDO0lBR0QsUUFBUSxFQUFSLFVBQVMsQ0FBOEI7UUFDN0IsSUFBQSxNQUFNLEdBQUssQ0FBQyxDQUFDLE1BQU0sT0FBYixDQUFhO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU07U0FDekMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUdELFlBQVk7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUE7SUFDTixDQUFDO0lBR0ssV0FBVyxFQUFqQixVQUFrQixDQUFnRDs7Ozs7O3dCQUN4RCxJQUFJLEdBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEtBQTVCLENBQTRCO3dCQUN2QixXQUFNLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUF2QyxNQUFNLEdBQUcsU0FBOEI7d0JBQzdDLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7NEJBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0NBQ1QsSUFBSSxFQUFFLEtBQUs7NkJBQ2QsQ0FBQyxDQUFBOzRCQUNJLEtBQUssR0FBSyxJQUFJLENBQUMsSUFBSSxNQUFkLENBQWM7NEJBQ3pCLEtBQUssQ0FBQyxJQUFJLENBQVEsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBOzRCQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFBO3lCQUMxQjs7Ozs7S0FDSjtJQU1ELGFBQWEsRUFBYixVQUFjLENBQW9EO1FBQ3RELElBQUEsS0FBSyxHQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxNQUE1QixDQUE0QjtRQUNuQyxJQUFBLEtBQUssR0FBSyxJQUFJLENBQUMsSUFBSSxNQUFkLENBQWM7UUFDekIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULEtBQUssT0FBQTtTQUNSLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFLRCxXQUFXO1FBQ0gsSUFBQSxLQUFvQixJQUFJLENBQUMsSUFBSSxFQUEzQixNQUFNLFlBQUEsRUFBRSxLQUFLLFdBQWMsQ0FBQTtRQUNqQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1QsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDVCxLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsTUFBTTthQUNmLENBQUMsQ0FBQTtZQUNGLE9BQU87U0FDVjtRQUNELElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDcEIsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDVCxLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsTUFBTTthQUNmLENBQUMsQ0FBQTtZQUNGLE9BQU87U0FDVjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDN0IsQ0FBQztDQUdKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIOWvvOWFpeaooeWdlyAqL1xyXG5pbXBvcnQgVXBsb2FkIGZyb20gJy4uLy4uLy4uL3V0aWxzL3VwbG9hZCdcclxuXHJcbi8qIOWunuS+i+WMluaooeWdlyAqL1xyXG5jb25zdCB1cGxvYWQgPSBuZXcgVXBsb2FkKClcclxuXHJcblBhZ2Uoe1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIGRhdGE6IHtcclxuICAgICAgICBtYXg6IDIwMCxcclxuICAgICAgICBzdXJwbHVzOiAwLFxyXG4gICAgICAgIGltYWdlOiBbXSxcclxuICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICByZWFzb246IGZhbHNlXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgICAqL1xyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoX29wdGlvbnMpIHt9LFxyXG5cclxuICAgIC8qIOmAieaLqeiuoei0ueacieivryAqL1xyXG4gICAgb25DaGFyZ2luZyhlOiB7IGRldGFpbDogYW55IH0pIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICByZWFzb246IGUuZGV0YWlsXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgLyog5Yqo5oCB6K6h566X5Ymp5L2Z5a2X5pWwICovXHJcbiAgICBjb25wdXRlZChlOiB7IGRldGFpbDogeyByZWFzb246IGFueSB9IH0pIHtcclxuICAgICAgICBsZXQgeyByZWFzb24gfSA9IGUuZGV0YWlsXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgc3VycGx1czogdGhpcy5kYXRhLm1heCAtIHJlYXNvbi5sZW5ndGgsXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgLyog6YCJ5oup5LiK5Lyg5pa55byPICovXHJcbiAgICBjaG9vc2VVcGxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8qIOmAieaLqeWHreivgSAqL1xyXG4gICAgYXN5bmMgY2hvb3NlSW1hZ2UoZTogeyBjdXJyZW50VGFyZ2V0OiB7IGRhdGFzZXQ6IHsgdHlwZTogYW55IH0gfSB9KSB7XHJcbiAgICAgICAgbGV0IHsgdHlwZSB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1cGxvYWQuY2hvb3NlSW1hZ2UodHlwZSlcclxuICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGV0IHsgaW1hZ2UgfSA9IHRoaXMuZGF0YVxyXG4gICAgICAgICAgICBpbWFnZS5wdXNoKDxuZXZlcj5yZXN1bHQuZGF0YSlcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgaW1hZ2UgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yig6Zmk5Yet6K+BXHJcbiAgICAgKiBAcGFyYW0gZSDkuovku7blr7nosaFcclxuICAgICAqL1xyXG4gICAgZGVsZXRlVm91Y2hlcihlOiB7IGN1cnJlbnRUYXJnZXQ6IHsgZGF0YXNldDogeyBpbmRleDogbnVtYmVyIH0gfSB9KSB7XHJcbiAgICAgICAgY29uc3QgeyBpbmRleCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuICAgICAgICBsZXQgeyBpbWFnZSB9ID0gdGhpcy5kYXRhXHJcbiAgICAgICAgaW1hZ2Uuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgIDmrL7nlLPor7dcclxuICAgICAqL1xyXG4gICAgYXBwbHlSZWZ1bmQoKSB7XHJcbiAgICAgICAgbGV0IHsgcmVhc29uLCBpbWFnZSB9ID0gdGhpcy5kYXRhXHJcbiAgICAgICAgaWYgKCFyZWFzb24pIHtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+36K+05piO5oOF5Ya1JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW1hZ2UubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+S4iuS8oOWHreivgScsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+eci+mqjOivgemAmui/h++8jOivt+axguaOpeWPoycpXHJcbiAgICB9XHJcblxyXG5cclxufSkiXX0=