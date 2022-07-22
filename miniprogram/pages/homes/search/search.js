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
var server_1 = require("../../../api/api/map/server");
var map = new server_1.default();
Page({
    data: {
        city: '',
        tips: [],
        active: 0,
        value: '',
        markers: [],
        latitude: '',
        longitude: '',
        historys: []
    },
    onLoad: function (options) {
        if (!util_1.isEmpty(options)) {
            var city = options.city;
            var markers = JSON.parse(options.markers);
            this.setData({
                city: city,
                markers: markers,
                latitude: options.latitude,
                longitude: options.longitude,
            });
        }
    },
    onInput: function (e) {
        var keywords = e.detail;
        console.logkeywords;
        this.searchAddress(keywords);
    },
    searchAddress: function (keywords) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, city, latitude, longitude, from, param, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.data, city = _a.city, latitude = _a.latitude, longitude = _a.longitude;
                        from = latitude + "," + longitude;
                        param = {
                            city: city,
                            from: from,
                            keywords: keywords,
                            location: ''
                        };
                        return [4, map.getAddress(param)];
                    case 1:
                        data = (_b.sent()).data;
                        this.setData({ tips: data });
                        return [2];
                }
            });
        });
    },
    selectPark: function (e) {
        var mapData = util_1.getSetDataCurrent(e, 'row');
        if (typeof mapData.id !== 'string') {
            wx.showToast({
                title: '请选择具体区道',
                icon: 'none'
            });
            return;
        }
        if (!util_1.isEmpty(mapData)) {
            var history = wx.getStorageSync('search_history_park');
            history = history.filter(function (element) {
                return element.id !== mapData.id;
            });
            history.unshift(mapData);
            history.length > 10 && history.pop();
            wx.setStorageSync('search_history_park', history);
        }
        var location = mapData.location;
        mapData.longitude = location.split(',')[0];
        mapData.latitude = location.split(',')[1];
        delete mapData.adcode;
        delete mapData.city;
        delete mapData.location;
        delete mapData.typecode;
        if (mapData !== '') {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 2];
            prevPage.setData({
                mapData: mapData,
            });
            wx.navigateBack({
                delta: 1,
            });
        }
    },
    onCancel: function () {
        wx.navigateBack({
            delta: 1,
        });
    },
    onShow: function () {
        var _this = this;
        if (!wx.getStorageSync('search_history_park')) {
            wx.setStorageSync('search_history_park', []);
            setTimeout(function () {
                _this.searchAddress(_this.data.city);
            }, 200);
        }
        else {
            var historys = wx.getStorageSync('search_history_park');
            historys.length === 0 && this.searchAddress(this.data.city);
            historys.length > 0 && this.setData({ historys: historys });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNENBQWdFO0FBR2hFLHNEQUFtRDtBQUduRCxJQUFNLEdBQUcsR0FBRyxJQUFJLGdCQUFTLEVBQUUsQ0FBQTtBQUUzQixJQUFJLENBQUM7SUFLRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsRUFBRTtRQUNSLElBQUksRUFBRSxFQUFFO1FBQ1IsTUFBTSxFQUFFLENBQUM7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sRUFBRSxFQUFFO1FBQ1gsUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRSxFQUFFO0tBQ2Y7SUFLRCxNQUFNLEVBQUUsVUFBVSxPQUFPO1FBQ3JCLElBQUksQ0FBQyxjQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDYixJQUFBLElBQUksR0FBSyxPQUFPLEtBQVosQ0FBWTtZQUN0QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFTLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNULElBQUksTUFBQTtnQkFDSixPQUFPLFNBQUE7Z0JBQ1AsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO2dCQUMxQixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7YUFDL0IsQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDO0lBTUQsT0FBTyxFQUFQLFVBQVEsQ0FBa0I7UUFDdEIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN4QixPQUFPLENBQUMsV0FBVyxDQUFBO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQU1LLGFBQWEsRUFBbkIsVUFBb0IsUUFBZ0I7Ozs7Ozt3QkFDNUIs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QUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN0QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDWDthQUFNO1lBQ0gsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1lBQ3ZELFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUMzRCxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxDQUFBO1NBQ3BEO0lBQ0wsQ0FBQztDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIOWvvOWFpeW3peWFt+exuyAqL1xyXG5pbXBvcnQgeyBnZXRTZXREYXRhQ3VycmVudCwgaXNFbXB0eSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnXHJcblxyXG4vKiDlr7zlhaXmqKHlnZcgKi9cclxuaW1wb3J0IE1hcFNlcnZlciBmcm9tICcuLi8uLi8uLi9hcGkvYXBpL21hcC9zZXJ2ZXInXHJcblxyXG4vKiDlrp7kvovljJbmqKHlnZcgKi9cclxuY29uc3QgbWFwID0gbmV3IE1hcFNlcnZlcigpXHJcblxyXG5QYWdlKHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAgICovXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgY2l0eTogJycsXHJcbiAgICAgICAgdGlwczogW10sXHJcbiAgICAgICAgYWN0aXZlOiAwLFxyXG4gICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICBtYXJrZXJzOiBbXSxcclxuICAgICAgICBsYXRpdHVkZTogJycsXHJcbiAgICAgICAgbG9uZ2l0dWRlOiAnJyxcclxuICAgICAgICBoaXN0b3J5czogW11cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAgICovXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKCFpc0VtcHR5KG9wdGlvbnMpKSB7XHJcbiAgICAgICAgICAgIGxldCB7IGNpdHkgfSA9IG9wdGlvbnNcclxuICAgICAgICAgICAgbGV0IG1hcmtlcnMgPSBKU09OLnBhcnNlKDxzdHJpbmc+b3B0aW9ucy5tYXJrZXJzKSBcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIGNpdHksXHJcbiAgICAgICAgICAgICAgICBtYXJrZXJzLFxyXG4gICAgICAgICAgICAgICAgbGF0aXR1ZGU6IG9wdGlvbnMubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICBsb25naXR1ZGU6IG9wdGlvbnMubG9uZ2l0dWRlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhbPplK7or43mkJzntKJcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlIOiKgueCueWvueixoSBcclxuICAgICAqL1xyXG4gICAgb25JbnB1dChlOiB7IGRldGFpbDogYW55IH0pIHtcclxuICAgICAgICB2YXIga2V5d29yZHMgPSBlLmRldGFpbDtcclxuICAgICAgICBjb25zb2xlLmxvZ2tleXdvcmRzXHJcbiAgICAgICAgdGhpcy5zZWFyY2hBZGRyZXNzKGtleXdvcmRzKVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiwg+eUqOmrmOW+t0FQSeWFs+mUruivjeaQnOe0ouWcsOWdgCBcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXl3b3JkcyDlhbPplK7or40gXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHNlYXJjaEFkZHJlc3Moa2V5d29yZHM6IHN0cmluZykge1xyXG4gICAgICAgIGxldCB7IGNpdHksIGxhdGl0dWRlLCBsb25naXR1ZGUgfSA9IHRoaXMuZGF0YVxyXG4gICAgICAgIGxldCBmcm9tID0gYCR7bGF0aXR1ZGV9LCR7bG9uZ2l0dWRlfWBcclxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgY2l0eSxcclxuICAgICAgICAgICAgZnJvbSxcclxuICAgICAgICAgICAga2V5d29yZHMsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IG1hcC5nZXRBZGRyZXNzKHBhcmFtKVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IHRpcHM6IGRhdGEgfSlcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgInmi6nlnLDlnYBcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlIOiKgueCueWvueixoSBcclxuICAgICAqL1xyXG4gICAgc2VsZWN0UGFyayhlOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBtYXBEYXRhID0gZ2V0U2V0RGF0YUN1cnJlbnQoZSwgJ3JvdycpXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtYXBEYXRhLmlkICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfor7fpgInmi6nlhbfkvZPljLrpgZMnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICAvKiDorr7nva7ljoblj7LmkJzntKIgKi9cclxuICAgICAgICBpZiAoIWlzRW1wdHkobWFwRGF0YSkpIHtcclxuICAgICAgICAgICAgbGV0IGhpc3RvcnkgPSB3eC5nZXRTdG9yYWdlU3luYygnc2VhcmNoX2hpc3RvcnlfcGFyaycpXHJcbiAgICAgICAgICAgIGhpc3RvcnkgPSBoaXN0b3J5LmZpbHRlcigoZWxlbWVudDogeyBpZDogYW55IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmlkICE9PSBtYXBEYXRhLmlkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGhpc3RvcnkudW5zaGlmdChtYXBEYXRhKVxyXG4gICAgICAgICAgICBoaXN0b3J5Lmxlbmd0aCA+IDEwICYmIGhpc3RvcnkucG9wKClcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3NlYXJjaF9oaXN0b3J5X3BhcmsnLCBoaXN0b3J5KVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgeyBsb2NhdGlvbiB9ID0gbWFwRGF0YVxyXG4gICAgICAgIG1hcERhdGEubG9uZ2l0dWRlID0gbG9jYXRpb24uc3BsaXQoJywnKVswXVxyXG4gICAgICAgIG1hcERhdGEubGF0aXR1ZGUgPSBsb2NhdGlvbi5zcGxpdCgnLCcpWzFdXHJcbiAgICAgICAgZGVsZXRlIG1hcERhdGEuYWRjb2RlXHJcbiAgICAgICAgZGVsZXRlIG1hcERhdGEuY2l0eVxyXG4gICAgICAgIGRlbGV0ZSBtYXBEYXRhLmxvY2F0aW9uXHJcbiAgICAgICAgZGVsZXRlIG1hcERhdGEudHlwZWNvZGVcclxuICAgICAgICBpZiAobWFwRGF0YSAhPT0gJycpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXVxyXG4gICAgICAgICAgICBwcmV2UGFnZS5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIG1hcERhdGEsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgICBkZWx0YTogMSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ2FuY2VsKCkge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgIGRlbHRhOiAxLFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgICBpZiAoIXd4LmdldFN0b3JhZ2VTeW5jKCdzZWFyY2hfaGlzdG9yeV9wYXJrJykpIHtcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3NlYXJjaF9oaXN0b3J5X3BhcmsnLCBbXSlcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEFkZHJlc3ModGhpcy5kYXRhLmNpdHkpXHJcbiAgICAgICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGhpc3RvcnlzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3NlYXJjaF9oaXN0b3J5X3BhcmsnKVxyXG4gICAgICAgICAgICBoaXN0b3J5cy5sZW5ndGggPT09IDAgJiYgdGhpcy5zZWFyY2hBZGRyZXNzKHRoaXMuZGF0YS5jaXR5KVxyXG4gICAgICAgICAgICBoaXN0b3J5cy5sZW5ndGggPiAwICYmIHRoaXMuc2V0RGF0YSh7IGhpc3RvcnlzIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSJdfQ==