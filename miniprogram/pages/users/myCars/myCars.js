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
var server_1 = require("../../../api/api/user/server");
var server = new server_1.default();
var util_1 = require("../../../utils/util");
Page({
    data: {
        cars: [],
        select: '',
        lockId: '',
        show: false,
        currentId: '',
        showDetele: false
    },
    onLoad: function (options) {
        if (!util_1.isEmpty(options)) {
            var select = options.select, lockId = options.lockId;
            this.setData({
                lockId: lockId,
                select: select,
            });
        }
    },
    selectPlateAll: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, cars, isDefault, id, param, result_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, server.selectPlateAll()];
                    case 1:
                        result = _a.sent();
                        if (!(result.code == 0)) return [3, 6];
                        cars = result.data;
                        if (!(cars.length > 0)) return [3, 4];
                        isDefault = cars.some(function (item) {
                            return item.status == 1;
                        });
                        if (!!isDefault) return [3, 3];
                        id = cars[0].id;
                        param = { id: id };
                        return [4, server.setPlateDevault(param)];
                    case 2:
                        result_1 = _a.sent();
                        if (result_1.code == 0) {
                            this.selectPlateAll();
                        }
                        _a.label = 3;
                    case 3: return [3, 5];
                    case 4:
                        cars = [];
                        _a.label = 5;
                    case 5:
                        this.setData({ cars: cars });
                        this._setDefaultPlate(cars);
                        _a.label = 6;
                    case 6: return [2];
                }
            });
        });
    },
    _setDefaultPlate: function (cars) {
        var plate = '';
        var userInfo = wx.getStorageSync('userInfo');
        if (!util_1.isEmpty(userInfo)) {
            if (cars.length > 0) {
                cars.forEach(function (element) {
                    if (element.status == 1) {
                        plate = element.plate;
                    }
                });
            }
            else {
                plate = '--';
            }
            userInfo.plate = plate;
            wx.setStorageSync('userInfo', userInfo);
        }
    },
    addCar: function () {
        var _a = this.data, select = _a.select, lockId = _a.lockId;
        wx.navigateTo({
            url: "/pages/users/addCar/addCar?select=" + select + "&lockId=" + lockId,
        });
    },
    setDefault: function (e) {
        var id = util_1.getSetDataCurrent(e, 'id');
        this._syncDefault(id);
    },
    _syncDefault: function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var param, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = { id: id };
                        return [4, server.setPlateDevault(param)];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            this._setDefault(id);
                        }
                        return [2];
                }
            });
        });
    },
    _setDefault: function (id) {
        var _this = this;
        var cars = this.data.cars;
        var car = {};
        cars.forEach(function (plate) {
            if (plate.id == id) {
                plate.status = 1;
                car = plate;
                _this._setStorage(car);
            }
            else {
                plate.status = 0;
            }
        });
        cars = cars.filter(function (plate) {
            if (plate.id == id) {
                return false;
            }
            return true;
        });
        cars.unshift(car);
        this.setData({ cars: cars });
    },
    showModal: function (e) {
        var currentId = util_1.getSetDataCurrent(e, 'id');
        this.setData({
            currentId: currentId,
            showDetele: true
        });
    },
    deletePlate: function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentId, param, result, title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentId = this.data.currentId;
                        param = {
                            id: currentId
                        };
                        return [4, server.deletePlate(param)];
                    case 1:
                        result = _a.sent();
                        title = result.code == 0 ? result.data : result.msg;
                        if (result.code == 0) {
                            this._delPlate(currentId);
                        }
                        wx.showToast({
                            title: title,
                            icon: 'none'
                        });
                        return [2];
                }
            });
        });
    },
    _delPlate: function (id) {
        var cars = this.data.cars;
        if (id) {
            var plates = cars.filter(function (plate) {
                if (plate.id == id) {
                    return false;
                }
                return true;
            });
            this._syncDefault(id);
            this.setData({ cars: plates });
            this._setDefPlate(id);
        }
    },
    _setDefPlate: function (id) {
        var cars = this.data.cars;
        if (id) {
            var isDel = cars.some(function (plate) {
                return plate.status == 1;
            });
            if (!isDel) {
                cars[0].status = 1;
                this._setStorage(cars[0]);
            }
            this.setData({ cars: cars });
        }
    },
    _setStorage: function (car) {
        var userInfo = wx.getStorageSync('userInfo');
        if (!util_1.isEmpty(userInfo)) {
            userInfo.plate = car.plate;
            wx.setStorageSync('userInfo', userInfo);
        }
    },
    selectPlate: function (e) {
        var plate = util_1.getSetDataCurrent(e, 'row').plate;
        var select = this.data.select;
        if (select == 1) {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 2];
            prevPage.setData({
                plate: plate,
            });
            wx.navigateBack({
                delta: 1,
            });
        }
    },
    onShow: function () {
        this.selectPlateAll();
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlDYXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXlDYXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdURBQXFEO0FBR3JELElBQU0sTUFBTSxHQUFHLElBQUksZ0JBQVUsRUFBRSxDQUFBO0FBRy9CLDRDQUFnRTtBQUVoRSxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtRQUNSLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEVBQUU7UUFDVixJQUFJLEVBQUUsS0FBSztRQUNYLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFLRCxNQUFNLEVBQUUsVUFBVSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxjQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDZixJQUFBLE1BQU0sR0FBYSxPQUFPLE9BQXBCLEVBQUUsTUFBTSxHQUFLLE9BQU8sT0FBWixDQUFZO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsTUFBTSxRQUFBO2dCQUNOLE1BQU0sUUFBQTthQUNQLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUtLLGNBQWMsRUFBcEI7Ozs7OzRCQUNpQixXQUFNLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBQTs7d0JBQXRDLE1BQU0sR0FBRyxTQUE2Qjs2QkFDeEMsQ0FBQSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQSxFQUFoQixjQUFnQjt3QkFDZCxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQTs2QkFDbEIsQ0FBQSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQSxFQUFmLGNBQWU7d0JBRVgsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUF3Qjs0QkFDbkQsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQTt3QkFDekIsQ0FBQyxDQUFD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Q0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsY0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3RCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQTtZQUMxQixFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQTtTQUN4QztJQUNILENBQUM7SUFNRCxXQUFXLEVBQVgsVUFBWSxDQUFNO1FBQ1IsSUFBQSxLQUFLLEdBQUssd0JBQWlCLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFoQyxDQUFnQztRQUN2QyxJQUFBLE1BQU0sR0FBVSxJQUFJLENBQUMsSUFBSSxPQUFuQixDQUFtQjtRQUMvQixJQUFJLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDZixJQUFNLEtBQUssR0FBRyxlQUFlLEVBQUUsQ0FBQztZQUNoQyxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUN4QyxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUNmLEtBQUssT0FBQTthQUNOLENBQUMsQ0FBQTtZQUNGLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFLRCxNQUFNLEVBQUU7UUFDTixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDdkIsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIOWvvOWFpeaooeWdlyAqL1xyXG5pbXBvcnQgVXNlclNlcnZlciBmcm9tICcuLi8uLi8uLi9hcGkvYXBpL3VzZXIvc2VydmVyJ1xyXG5cclxuLyog5a6e5L6L5YyW5qih5Z2XICovXHJcbmNvbnN0IHNlcnZlciA9IG5ldyBVc2VyU2VydmVyKClcclxuXHJcbi8qIOWvvOWFpeW3peWFt+exuyAqL1xyXG5pbXBvcnQgeyBpc0VtcHR5LCBnZXRTZXREYXRhQ3VycmVudCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnXHJcblxyXG5QYWdlKHtcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgY2FyczogW10sXHJcbiAgICBzZWxlY3Q6ICcnLFxyXG4gICAgbG9ja0lkOiAnJyxcclxuICAgIHNob3c6IGZhbHNlLFxyXG4gICAgY3VycmVudElkOiAnJyxcclxuICAgIHNob3dEZXRlbGU6IGZhbHNlXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICBpZiAoIWlzRW1wdHkob3B0aW9ucykpIHtcclxuICAgICAgbGV0IHsgc2VsZWN0LCBsb2NrSWQgfSA9IG9wdGlvbnNcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBsb2NrSWQsXHJcbiAgICAgICAgc2VsZWN0LFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluW9k+WJjeeUqOaIt+eahOaJgOaciei9pui+hlxyXG4gICAqL1xyXG4gIGFzeW5jIHNlbGVjdFBsYXRlQWxsKCkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyLnNlbGVjdFBsYXRlQWxsKClcclxuICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgIGxldCBjYXJzID0gcmVzdWx0LmRhdGFcclxuICAgICAgaWYgKGNhcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8qIOajgOa1i+aYr+WQpuWtmOWcqOm7mOiupOi9pui+hu+8jOiLpeS4jeWtmOWcqOWImem7mOiupOiuvue9ruesrOS4gOS4qui9pui+huS4uum7mOiupOi9pui+hiAqL1xyXG4gICAgICAgIGNvbnN0IGlzRGVmYXVsdCA9IGNhcnMuc29tZSgoaXRlbTogeyBzdGF0dXM6IG51bWJlciB9KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbS5zdGF0dXMgPT0gMVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKCFpc0RlZmF1bHQpIHtcclxuICAgICAgICAgIGxldCB7IGlkIH0gPSBjYXJzWzBdXHJcbiAgICAgICAgICBjb25zdCBwYXJhbSA9IHsgaWQgfVxyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyLnNldFBsYXRlRGV2YXVsdChwYXJhbSlcclxuICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0UGxhdGVBbGwoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBFbmQgKi9cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYXJzID0gW11cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldERhdGEoeyBjYXJzIH0pXHJcbiAgICAgIHRoaXMuX3NldERlZmF1bHRQbGF0ZShjYXJzKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOiuvue9rum7mOiupOi9pui+hlxyXG4gICAqIEBwYXJhbSBjYXJzIOi9pui+huS/oeaBr1xyXG4gICAqL1xyXG4gIF9zZXREZWZhdWx0UGxhdGUoY2FyczogYW55W10pIHtcclxuICAgIGxldCBwbGF0ZSA9ICcnXHJcbiAgICBsZXQgdXNlckluZm8gPSB3eC5nZXRTdG9yYWdlU3luYygndXNlckluZm8nKVxyXG4gICAgaWYgKCFpc0VtcHR5KHVzZXJJbmZvKSkge1xyXG4gICAgICBpZiAoY2Fycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY2Fycy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgaWYgKGVsZW1lbnQuc3RhdHVzID09IDEpIHtcclxuICAgICAgICAgICAgcGxhdGUgPSBlbGVtZW50LnBsYXRlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwbGF0ZSA9ICctLSdcclxuICAgICAgfVxyXG4gICAgICB1c2VySW5mby5wbGF0ZSA9IHBsYXRlXHJcbiAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycsIHVzZXJJbmZvKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOi3s+i9rOa3u+WKoOi9pueJjFxyXG4gICAqL1xyXG4gIGFkZENhcigpIHtcclxuICAgIGxldCB7IHNlbGVjdCwgbG9ja0lkIH0gPSB0aGlzLmRhdGFcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6IGAvcGFnZXMvdXNlcnMvYWRkQ2FyL2FkZENhcj9zZWxlY3Q9JHtzZWxlY3R9JmxvY2tJZD0ke2xvY2tJZH1gLFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDorr7nva7pu5jorqTovabovoZcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZSDkuovku7blr7nosaFcclxuICAgKi9cclxuICBzZXREZWZhdWx0KGU6IGFueSkge1xyXG4gICAgY29uc3QgaWQgPSBnZXRTZXREYXRhQ3VycmVudChlLCAnaWQnKVxyXG4gICAgdGhpcy5fc3luY0RlZmF1bHQoaWQpXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6K6+572u6buY6K6k6L2m6L6GXHJcbiAgICogQHBhcmFtIGlkIOi9pui+hmlkXHJcbiAgICovXHJcbiAgYXN5bmMgX3N5bmNEZWZhdWx0KGlkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHBhcmFtID0geyBpZCB9XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZXJ2ZXIuc2V0UGxhdGVEZXZhdWx0KHBhcmFtKVxyXG4gICAgaWYgKHJlc3VsdC5jb2RlID09IDApIHtcclxuICAgICAgdGhpcy5fc2V0RGVmYXVsdChpZClcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDorr7nva7pu5jorqTovabovoZcclxuICAgKiBAcGFyYW0gaWQg6L2m6L6GaWRcclxuICAgKi9cclxuICBfc2V0RGVmYXVsdChpZDogbnVtYmVyKSB7XHJcbiAgICBsZXQgeyBjYXJzIH0gPSA8YW55PnRoaXMuZGF0YVxyXG4gICAgbGV0IGNhciA9IHt9XHJcbiAgICBjYXJzLmZvckVhY2goKHBsYXRlOiB7IGlkPzogYW55OyBzdGF0dXM/OiBhbnk7IHBsYXRlPzogYW55IH0pID0+IHtcclxuICAgICAgaWYgKHBsYXRlLmlkID09IGlkKSB7XHJcbiAgICAgICAgcGxhdGUuc3RhdHVzID0gMVxyXG4gICAgICAgIGNhciA9IHBsYXRlXHJcbiAgICAgICAgdGhpcy5fc2V0U3RvcmFnZShjYXIpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGxhdGUuc3RhdHVzID0gMFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgY2FycyA9IGNhcnMuZmlsdGVyKChwbGF0ZTogYW55KSA9PiB7XHJcbiAgICAgIGlmIChwbGF0ZS5pZCA9PSBpZCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9KVxyXG4gICAgY2Fycy51bnNoaWZ0KGNhcilcclxuICAgIHRoaXMuc2V0RGF0YSh7IGNhcnMgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmmL7npLrmqKHmgIHmoYZcclxuICAgKi9cclxuICBzaG93TW9kYWwoZTogYW55KSB7XHJcbiAgICBjb25zdCBjdXJyZW50SWQgPSBnZXRTZXREYXRhQ3VycmVudChlLCAnaWQnKVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgY3VycmVudElkLFxyXG4gICAgICBzaG93RGV0ZWxlOiB0cnVlXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOWIoOmZpOi9pui+hlxyXG4gICAqL1xyXG4gIGFzeW5jIGRlbGV0ZVBsYXRlKCkge1xyXG4gICAgbGV0IHsgY3VycmVudElkIH0gPSA8YW55PnRoaXMuZGF0YVxyXG4gICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgIGlkOiBjdXJyZW50SWRcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci5kZWxldGVQbGF0ZShwYXJhbSlcclxuICAgIGxldCB0aXRsZSA9IHJlc3VsdC5jb2RlID09IDAgPyByZXN1bHQuZGF0YSA6IHJlc3VsdC5tc2dcclxuICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgIHRoaXMuX2RlbFBsYXRlKGN1cnJlbnRJZClcclxuICAgIH1cclxuICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBpY29uOiAnbm9uZSdcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog5Yig6Zmk6L2m6L6GXHJcbiAgICogQHBhcmFtIGlkIOS7jui9pui+hmlkXHJcbiAgICovXHJcbiAgX2RlbFBsYXRlKGlkOiBudW1iZXIpIHtcclxuICAgIGxldCB7IGNhcnMgfSA9IDxhbnk+dGhpcy5kYXRhXHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgbGV0IHBsYXRlcyA9IGNhcnMuZmlsdGVyKChwbGF0ZTogeyBpZDogbnVtYmVyIH0pID0+IHtcclxuICAgICAgICBpZiAocGxhdGUuaWQgPT0gaWQpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLl9zeW5jRGVmYXVsdChpZClcclxuICAgICAgdGhpcy5zZXREYXRhKHsgY2FyczogcGxhdGVzIH0pXHJcbiAgICAgIHRoaXMuX3NldERlZlBsYXRlKGlkKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOiuvue9rum7mOiupOi9pui+hlxyXG4gICAqIEBwYXJhbSBpZCDovabovoZpZFxyXG4gICAqL1xyXG4gIF9zZXREZWZQbGF0ZShpZD86IG51bWJlcikge1xyXG4gICAgbGV0IHsgY2FycyB9ID0gPGFueT50aGlzLmRhdGFcclxuICAgIGlmIChpZCkge1xyXG4gICAgICBjb25zdCBpc0RlbCA9IGNhcnMuc29tZSgocGxhdGU6IHsgc3RhdHVzOiBudW1iZXIgfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwbGF0ZS5zdGF0dXMgPT0gMVxyXG4gICAgICB9KVxyXG4gICAgICBpZiAoIWlzRGVsKSB7XHJcbiAgICAgICAgY2Fyc1swXS5zdGF0dXMgPSAxXHJcbiAgICAgICAgdGhpcy5fc2V0U3RvcmFnZShjYXJzWzBdKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7IGNhcnMgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDorr7nva7pu5jorqTovabovobnvJPlrZhcclxuICAgKiBAcGFyYW0gY2FyIOm7mOiupOi9pui+huS/oeaBr1xyXG4gICAqL1xyXG4gIF9zZXRTdG9yYWdlKGNhcjogYW55KSB7XHJcbiAgICBsZXQgdXNlckluZm8gPSB3eC5nZXRTdG9yYWdlU3luYygndXNlckluZm8nKVxyXG4gICAgaWYgKCFpc0VtcHR5KHVzZXJJbmZvKSkge1xyXG4gICAgICB1c2VySW5mby5wbGF0ZSA9IGNhci5wbGF0ZVxyXG4gICAgICB3eC5zZXRTdG9yYWdlU3luYygndXNlckluZm8nLCB1c2VySW5mbylcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpgInmi6novabniYxcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZSDkuovku7blr7nosaFcclxuICAgKi9cclxuICBzZWxlY3RQbGF0ZShlOiBhbnkpIHtcclxuICAgIGNvbnN0IHsgcGxhdGUgfSA9IGdldFNldERhdGFDdXJyZW50KGUsICdyb3cnKVxyXG4gICAgbGV0IHsgc2VsZWN0IH0gPSA8YW55PnRoaXMuZGF0YVxyXG4gICAgaWYgKHNlbGVjdCA9PSAxKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgIGNvbnN0IHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl1cclxuICAgICAgcHJldlBhZ2Uuc2V0RGF0YSh7XHJcbiAgICAgICAgcGxhdGUsXHJcbiAgICAgIH0pXHJcbiAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgZGVsdGE6IDEsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2VsZWN0UGxhdGVBbGwoKVxyXG4gIH0sXHJcblxyXG59KSJdfQ==