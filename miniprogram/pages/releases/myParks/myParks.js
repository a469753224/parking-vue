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
Page({
    data: {
        parks: []
    },
    onLoad: function (_options) { },
    onShow: function () {
        this.myParking();
    },
    myParking: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, server.myParking()];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            this.setData({
                                parks: result.data
                            });
                        }
                        return [2];
                }
            });
        });
    },
    addApply: function () {
        wx.navigateTo({
            url: '/pages/releases/apply/apply',
        });
    },
    setOpenTime: function (e) {
        var row = e.currentTarget.dataset.row;
        wx.navigateTo({
            url: "/pages/releases/settime/settime?row=" + JSON.stringify(row),
        });
    },
    unlock: function (e) {
        var id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/releases/unlock/unlock?lockerId=" + id,
        });
    },
    isOpen: function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var placeid, openState, param, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        placeid = e.currentTarget.dataset.placeid;
                        openState = e.detail ? 0 : 1;
                        param = {
                            openState: openState,
                            placeId: placeid
                        };
                        return [4, server.modifyOpenState(param)];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            this.myParking();
                        }
                        return [2];
                }
            });
        });
    },
    myApply: function () {
        wx.navigateTo({
            url: '/pages/releases/myApply/myApply',
        });
    },
    placeRent: function () {
        wx.navigateTo({
            url: '/pages/releases/placeRent/placeRent'
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlQYXJrcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15UGFya3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzREFBbUQ7QUFHbkQsSUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBUyxFQUFFLENBQUE7QUFFOUIsSUFBSSxDQUFDO0lBS0osSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLEVBQUU7S0FDVDtJQUtELE1BQU0sRUFBRSxVQUFVLFFBQVEsSUFBSSxDQUFDO0lBSy9CLE1BQU07UUFDTCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7SUFDakIsQ0FBQztJQUtLLFNBQVM7Ozs7OzRCQUNDLFdBQU0sTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBakMsTUFBTSxHQUFHLFNBQXdCO3dCQUN2QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFOzRCQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dDQUNaLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSTs2QkFDbEIsQ0FBQyxDQUFBO3lCQUNGOzs7OztLQUNEO0lBS0QsUUFBUTtRQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsNkJBQTZCO1NBQ2xDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFNRCxXQUFXLEVBQVgsVUFBWSxDQUErQztRQUNwRCxJQUFBLEdBQUcsR0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sSUFBNUIsQ0FBNEI7UUFDckMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSx5Q0FBdUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUc7U0FDakUsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQU1ELE1BQU0sRUFBTixVQUFPLENBQWlEO1FBQ2pELElBQUEsRUFBRSxHQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUE1QixDQUE0QjtRQUNwQyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLDRDQUEwQyxFQUFJO1NBQ25ELENBQUMsQ0FBQTtJQUNILENBQUM7SUFNSyxNQUFNLEVBQVosVUFBYSxDQUFtRTs7Ozs7O3dCQUN2RSxPQUFPLEdBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLFFBQTVCLENBQTRCO3dCQUNyQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQzVCLEtBQUssR0FBRzs0QkFDYixTQUFTLFdBQUE7NEJBQ1QsT0FBTyxFQUFFLE9BQU87eUJBQ2hCLENBQUE7d0JBQ2MsV0FBTSxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFBOzt3QkFBNUMsTUFBTSxHQUFHLFNBQW1DO3dCQUNsRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFOzRCQUNyQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7eUJBQ2hCOzs7OztLQUNEO0lBS0QsT0FBTztRQUNOLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsaUNBQWlDO1NBQ3RDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFLRCxTQUFTO1FBQ1IsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxxQ0FBcUM7U0FDMUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUVELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIOWvvOWFpeaooeWdlyAqL1xyXG5pbXBvcnQgQ2FyU2VydmVyIGZyb20gJy4uLy4uLy4uL2FwaS9hcGkvY2FyL3NlcnZlcidcclxuXHJcbi8qIOWunuS+i+WMluaooeWdlyAqL1xyXG5jb25zdCBzZXJ2ZXIgPSBuZXcgQ2FyU2VydmVyKClcclxuXHJcblBhZ2Uoe1xyXG5cclxuXHQvKipcclxuXHQgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuXHQgKi9cclxuXHRkYXRhOiB7XHJcblx0XHRwYXJrczogW11cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG5cdCAqL1xyXG5cdG9uTG9hZDogZnVuY3Rpb24gKF9vcHRpb25zKSB7IH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcblx0ICovXHJcblx0b25TaG93KCkge1xyXG5cdFx0dGhpcy5teVBhcmtpbmcoKVxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIOaIkeeahOi9puS9jVxyXG5cdCAqL1xyXG5cdGFzeW5jIG15UGFya2luZygpIHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci5teVBhcmtpbmcoKVxyXG5cdFx0aWYgKHJlc3VsdC5jb2RlID09IDApIHtcclxuXHRcdFx0dGhpcy5zZXREYXRhKHtcclxuXHRcdFx0XHRwYXJrczogcmVzdWx0LmRhdGFcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDot7PovaznlLPor7fovabkvY1cclxuXHQgKi9cclxuXHRhZGRBcHBseSgpIHtcclxuXHRcdHd4Lm5hdmlnYXRlVG8oe1xyXG5cdFx0XHR1cmw6ICcvcGFnZXMvcmVsZWFzZXMvYXBwbHkvYXBwbHknLFxyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDorr7nva7lvIDmlL7ml7bpl7RcclxuXHQgKiBAcGFyYW0gZSDkuovku7blr7nosaFcclxuXHQgKi9cclxuXHRzZXRPcGVuVGltZShlOiB7IGN1cnJlbnRUYXJnZXQ6IHsgZGF0YXNldDogeyByb3c6IGFueSB9IH0gfSkge1xyXG5cdFx0bGV0IHsgcm93IH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxyXG5cdFx0d3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdHVybDogYC9wYWdlcy9yZWxlYXNlcy9zZXR0aW1lL3NldHRpbWU/cm93PSR7SlNPTi5zdHJpbmdpZnkocm93KX1gLFxyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDop6PplIFcclxuXHQgKiBAcGFyYW0gZSDkuovku7blr7nosaFcclxuXHQgKi9cclxuXHR1bmxvY2soZTogeyBjdXJyZW50VGFyZ2V0OiB7IGRhdGFzZXQ6IHsgaWQ6IG51bWJlciB9IH0gfSkge1xyXG5cdFx0bGV0IHsgaWQgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0dXJsOiBgL3BhZ2VzL3JlbGVhc2VzL3VubG9jay91bmxvY2s/bG9ja2VySWQ9JHtpZH1gLFxyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDmmK/lkKblvIDmlL7ovabkvY1cclxuXHQgKiBAcGFyYW0gZSDkuovku7blr7nosaFcclxuXHQgKi9cclxuXHRhc3luYyBpc09wZW4oZTogeyBjdXJyZW50VGFyZ2V0OiB7IGRhdGFzZXQ6IHsgcGxhY2VpZDogc3RyaW5nIH0gfTsgZGV0YWlsOiBhbnkgfSkge1xyXG5cdFx0Y29uc3QgeyBwbGFjZWlkIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxyXG5cdFx0Y29uc3Qgb3BlblN0YXRlID0gZS5kZXRhaWwgPyAwIDogMVxyXG5cdFx0Y29uc3QgcGFyYW0gPSB7XHJcblx0XHRcdG9wZW5TdGF0ZSxcclxuXHRcdFx0cGxhY2VJZDogcGxhY2VpZFxyXG5cdFx0fVxyXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyLm1vZGlmeU9wZW5TdGF0ZShwYXJhbSlcclxuXHRcdGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcblx0XHRcdHRoaXMubXlQYXJraW5nKClcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDmiJHnmoTnlLPor7forrDlvZVcclxuXHQgKi9cclxuXHRteUFwcGx5KCkge1xyXG5cdFx0d3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdHVybDogJy9wYWdlcy9yZWxlYXNlcy9teUFwcGx5L215QXBwbHknLFxyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDot7Povazoh7PmlLbnm4rnu5/orqFcclxuXHQgKi9cclxuXHRwbGFjZVJlbnQoKSB7XHJcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0dXJsOiAnL3BhZ2VzL3JlbGVhc2VzL3BsYWNlUmVudC9wbGFjZVJlbnQnXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcbn0pIl19