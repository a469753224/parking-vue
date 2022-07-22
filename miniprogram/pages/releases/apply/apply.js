"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var config_1 = require("../../../config/config");
var server_1 = require("../../../api/api/apply/server");
var server = new server_1.default();
var util_1 = require("../../../utils/util");
var exception_1 = require("../../../utils/exception");
var QQMapWX = require('../../../utils/qqmap-wx-jssdk');
var qqmapsdk = new QQMapWX({ key: config_1.TX_MAP_KEY });
Page({
    data: {
        city: '',
        phone: '',
        markers: [],
        address: '',
        mapData: {},
        district: '',
        latitude: '',
        longitude: '',
        contactsName: '',
        communityName: ''
    },
    onLoad: function (_options) { },
    onShow: function () {
        var _this = this;
        if (!util_1.isEmpty(this.data.mapData)) {
            var _a = this.data.mapData, name = _a.name, district = _a.district, address = _a.address;
            this.setData({
                address: address,
                district: district,
                communityName: name
            });
        }
        wx.getLocation({
            type: 'gcj02',
            success: function (res) {
                var markers = _this.data.markers;
                var latitude = res.latitude;
                var longitude = res.longitude;
                markers.push({
                    id: 1,
                    latitude: latitude,
                    longitude: longitude,
                    callout: {
                        content: '当前位置',
                        padding: '10',
                        borderRadius: '5'
                    },
                    width: '48rpx',
                    height: '80rpx',
                    iconPath: '/assets/images/home/slide_position@2x.png'
                });
                _this.setData({
                    markers: markers,
                    latitude: latitude,
                    longitude: longitude,
                });
                qqmapsdk.reverseGeocoder({
                    location: {
                        latitude: latitude,
                        longitude: longitude
                    },
                    success: function (data) {
                        var street = data.result.address_component.street;
                        _this.setData({
                            city: street
                        });
                    }
                });
            }
        });
    },
    position: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, markers, latitude, longitude, city;
            return __generator(this, function (_b) {
                _a = this.data, markers = _a.markers, latitude = _a.latitude, longitude = _a.longitude, city = _a.city;
                wx.navigateTo({
                    url: "/pages/homes/search/search?longitude=" + longitude + "&latitude=" + latitude + "&city=" + city + "&markers=" + JSON.stringify(markers),
                });
                return [2];
            });
        });
    },
    changeName: function (e) {
        this.setValue(e, 'contactsName');
    },
    changePhone: function (e) {
        this.setValue(e, 'phone');
    },
    changeStreet: function (e) {
        this.setValue(e, 'district');
    },
    changeAddress: function (e) {
        this.setValue(e, 'address');
    },
    setValue: function (e, name) {
        var _a;
        this.setData((_a = {},
            _a[name] = e.detail.value,
            _a));
    },
    submitApply: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, phone, mapData, contactsName, address, district, communityName, ads, isPhone, param, result, title;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.data, phone = _a.phone, mapData = _a.mapData, contactsName = _a.contactsName, address = _a.address, district = _a.district, communityName = _a.communityName;
                        ads = util_1.extractProCityCode(district);
                        mapData = __assign(__assign({}, mapData), ads);
                        isPhone = exception_1.phoneRul(phone);
                        if (!isPhone) {
                            wx.showToast({
                                title: '手机号码有误',
                                icon: 'none'
                            });
                            return [2];
                        }
                        param = {
                            phone: phone,
                            contactsName: contactsName,
                            communityName: communityName,
                            street: "" + district + address,
                            mapData: JSON.stringify(mapData),
                        };
                        return [4, server.wxplace(param)];
                    case 1:
                        result = _b.sent();
                        title = result.code == 0 ? '添加成功' : result.msg;
                        wx.showToast({
                            title: title,
                            icon: 'none'
                        });
                        if (result.code == 0) {
                            setTimeout(function () {
                                wx.reLaunch({
                                    url: '/pages/releases/myParks/myParks',
                                });
                            }, 500);
                        }
                        return [2];
                }
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHBseS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaURBQW1EO0FBR25ELHdEQUF1RDtBQUd2RCxJQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFXLEVBQUUsQ0FBQTtBQUdoQyw0Q0FBa0U7QUFHbEUsc0RBQW1EO0FBR25ELElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ3hELElBQU0sUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLG1CQUFVLEVBQUUsQ0FBQyxDQUFDO0FBRWxELElBQUksQ0FBQztJQUlELElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxFQUFFO1FBQ1IsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUUsRUFBRTtRQUNYLE9BQU8sRUFBRSxFQUFFO1FBQ1gsT0FBTyxFQUFFLEVBQUU7UUFDWCxRQUFRLEVBQUUsRUFBRTtRQUNaLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLEVBQUU7UUFDYixZQUFZLEVBQUUsRUFBRTtRQUNoQixhQUFhLEVBQUUsRUFBRTtLQUNwQjtJQUtELE1BQU0sRUFBRSxVQUFVLFFBQVEsSUFBRyxDQUFDO0lBSzlCLE1BQU0sRUFBRTtRQUFBLGlCQStDUDtRQTlDRyxJQUFJLENBQUMsY0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDekIsSUFBQSxLQUFtQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBbEQsSUFBSSxVQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsT0FBTyxhQUEyQixDQUFBO1lBQ3hELElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsT0FBTyxTQUFBO2dCQUNQLFFBQVEsVUFBQTtnQkFDUixhQUFhLEVBQUUsSUFBSTthQUN0QixDQUFD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MUIsT0FBTyxHQUFHLG9CQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7d0JBQy9CLElBQUksQ0FBQyxPQUFPLEVBQUU7NEJBQ1YsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQ0FDVCxLQUFLLEVBQUUsUUFBUTtnQ0FDZixJQUFJLEVBQUUsTUFBTTs2QkFDZixDQUFDLENBQUE7NEJBQ0YsV0FBTzt5QkFDVjt3QkFDSyxLQUFLLEdBQUc7NEJBQ1YsS0FBSyxPQUFBOzRCQUNMLFlBQVksY0FBQTs0QkFDWixhQUFhLGVBQUE7NEJBQ2IsTUFBTSxFQUFFLEtBQUcsUUFBUSxHQUFHLE9BQVM7NEJBQy9CLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQzt5QkFDbkMsQ0FBQTt3QkFDYyxXQUFNLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUFwQyxNQUFNLEdBQUcsU0FBMkI7d0JBQ3BDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFBO3dCQUNwRCxFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNULEtBQUssT0FBQTs0QkFDTCxJQUFJLEVBQUUsTUFBTTt5QkFDZixDQUFDLENBQUE7d0JBQ0YsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTs0QkFDbEIsVUFBVSxDQUFDO2dDQUNQLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0NBQ1IsR0FBRyxFQUFFLGlDQUFpQztpQ0FDekMsQ0FBQyxDQUFBOzRCQUNOLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzt5QkFDWDs7Ozs7S0FDSjtDQUVKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIOWvvOWFpeiFvuiur+WcsOWbvuW8gOWPkeiAheWvhumSpSAqL1xyXG5pbXBvcnQgeyBUWF9NQVBfS0VZIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZydcclxuXHJcbi8qIOWvvOWFpeaooeWdlyAqL1xyXG5pbXBvcnQgQXBwbHlTZXJ2ZXIgZnJvbSAnLi4vLi4vLi4vYXBpL2FwaS9hcHBseS9zZXJ2ZXInXHJcblxyXG4vKiDlrp7kvovljJbmqKHlnZcgKi9cclxuY29uc3Qgc2VydmVyID0gbmV3IEFwcGx5U2VydmVyKClcclxuXHJcbi8qIOWvvOWFpeW3peWFt+exuyAqL1xyXG5pbXBvcnQgeyBpc0VtcHR5LCBleHRyYWN0UHJvQ2l0eUNvZGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuXHJcbi8qIOWvvOWFpemqjOivgeexuyAqL1xyXG5pbXBvcnQgeyBwaG9uZVJ1bCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V4Y2VwdGlvbidcclxuXHJcbi8qIOiFvuiur+S9jee9ruacjeWKoVNES+WvvOWFpSAqL1xyXG5jb25zdCBRUU1hcFdYID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbHMvcXFtYXAtd3gtanNzZGsnKVxyXG5jb25zdCBxcW1hcHNkayA9IG5ldyBRUU1hcFdYKHsga2V5OiBUWF9NQVBfS0VZIH0pO1xyXG5cclxuUGFnZSh7XHJcbiAgICAvKipcclxuICAgICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAgICovXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgY2l0eTogJycsXHJcbiAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgIG1hcmtlcnM6IFtdLFxyXG4gICAgICAgIGFkZHJlc3M6ICcnLFxyXG4gICAgICAgIG1hcERhdGE6IHt9LFxyXG4gICAgICAgIGRpc3RyaWN0OiAnJyxcclxuICAgICAgICBsYXRpdHVkZTogJycsXHJcbiAgICAgICAgbG9uZ2l0dWRlOiAnJyxcclxuICAgICAgICBjb250YWN0c05hbWU6ICcnLFxyXG4gICAgICAgIGNvbW11bml0eU5hbWU6ICcnXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgICAqL1xyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoX29wdGlvbnMpIHt9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgICAqL1xyXG4gICAgb25TaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFpc0VtcHR5KHRoaXMuZGF0YS5tYXBEYXRhKSkge1xyXG4gICAgICAgICAgICBsZXQgeyBuYW1lLCBkaXN0cmljdCwgYWRkcmVzcyB9ID0gPGFueT50aGlzLmRhdGEubWFwRGF0YVxyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGRpc3RyaWN0LFxyXG4gICAgICAgICAgICAgICAgY29tbXVuaXR5TmFtZTogbmFtZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB3eC5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgICAgIHR5cGU6ICdnY2owMicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWFya2VyczphbnkgPSB0aGlzLmRhdGEubWFya2Vyc1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhdGl0dWRlOnN0cmluZyA9IDxhbnk+cmVzLmxhdGl0dWRlIFxyXG4gICAgICAgICAgICAgICAgbGV0IGxvbmdpdHVkZTpzdHJpbmcgPSA8YW55PnJlcy5sb25naXR1ZGVcclxuICAgICAgICAgICAgICAgIG1hcmtlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxvdXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+W9k+WJjeS9jee9ricsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzQ4cnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc4MHJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvblBhdGg6ICcvYXNzZXRzL2ltYWdlcy9ob21lL3NsaWRlX3Bvc2l0aW9uQDJ4LnBuZydcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHFxbWFwc2RrLnJldmVyc2VHZW9jb2Rlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKGRhdGE6IHsgcmVzdWx0OiB7IGFkZHJlc3NfY29tcG9uZW50OiB7IHN0cmVldDogc3RyaW5nOyB9OyB9OyB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB7IHN0cmVldCB9ID0gZGF0YS5yZXN1bHQuYWRkcmVzc19jb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHk6IHN0cmVldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi3s+i9rOWcsOWbvumAieeCuVxyXG4gICAgICovXHJcbiAgICBhc3luYyBwb3NpdGlvbigpIHtcclxuICAgICAgICBsZXQgeyBtYXJrZXJzLCBsYXRpdHVkZSwgbG9uZ2l0dWRlLCBjaXR5IH0gPSB0aGlzLmRhdGFcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL2hvbWVzL3NlYXJjaC9zZWFyY2g/bG9uZ2l0dWRlPSR7bG9uZ2l0dWRlfSZsYXRpdHVkZT0ke2xhdGl0dWRlfSZjaXR5PSR7Y2l0eX0mbWFya2Vycz0ke0pTT04uc3RyaW5naWZ5KG1hcmtlcnMpfWAsXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDogZTns7vkurpcclxuICAgICAqIEBwYXJhbSBlIFxyXG4gICAgICovXHJcbiAgICBjaGFuZ2VOYW1lKGU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoZSwgJ2NvbnRhY3RzTmFtZScpXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5omL5py65aW95ZCXXHJcbiAgICAgKiBAcGFyYW0gZSBcclxuICAgICAqL1xyXG4gICAgY2hhbmdlUGhvbmUoZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShlLCAncGhvbmUnKVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWMuuWfn+ihl+mBk1xyXG4gICAgICogQHBhcmFtIGUgXHJcbiAgICAgKi9cclxuICAgIGNoYW5nZVN0cmVldChlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKGUsICdkaXN0cmljdCcpXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K+m57uG5Zyw5Z2AXHJcbiAgICAgKiBAcGFyYW0gZSBcclxuICAgICAqL1xyXG4gICAgY2hhbmdlQWRkcmVzcyhlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKGUsICdhZGRyZXNzJylcclxuICAgIH0sXHJcblxyXG4gICAgc2V0VmFsdWUoZTogeyBkZXRhaWw6IHsgdmFsdWU6IGFueTsgfTsgfSwgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgW25hbWVdOiBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5o+Q5LqkXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHN1Ym1pdEFwcGx5KCkge1xyXG4gICAgICAgIGxldCB7IHBob25lLCBtYXBEYXRhLCBjb250YWN0c05hbWUsIGFkZHJlc3MsIGRpc3RyaWN0LCBjb21tdW5pdHlOYW1lIH0gPSA8YW55PnRoaXMuZGF0YVxyXG4gICAgICAgIGxldCBhZHMgPSBleHRyYWN0UHJvQ2l0eUNvZGUoZGlzdHJpY3QpXHJcbiAgICAgICAgbWFwRGF0YSA9IHsgLi4ubWFwRGF0YSwgLi4uYWRzIH1cclxuICAgICAgICBjb25zdCBpc1Bob25lID0gcGhvbmVSdWwocGhvbmUpXHJcbiAgICAgICAgaWYgKCFpc1Bob25lKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aJi+acuuWPt+eggeacieivrycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgcGhvbmUsXHJcbiAgICAgICAgICAgIGNvbnRhY3RzTmFtZSxcclxuICAgICAgICAgICAgY29tbXVuaXR5TmFtZSxcclxuICAgICAgICAgICAgc3RyZWV0OiBgJHtkaXN0cmljdH0ke2FkZHJlc3N9YCxcclxuICAgICAgICAgICAgbWFwRGF0YTogSlNPTi5zdHJpbmdpZnkobWFwRGF0YSksXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci53eHBsYWNlKHBhcmFtKVxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gcmVzdWx0LmNvZGUgPT0gMCA/ICfmt7vliqDmiJDlip8nIDogcmVzdWx0Lm1zZ1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9yZWxlYXNlcy9teVBhcmtzL215UGFya3MnLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59KSJdfQ==