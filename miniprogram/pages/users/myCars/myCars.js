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
            url: "/pages/users/addCar/addCar?select=" + select + '&lockId=' + lockId,
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
        console.log(cars.length);
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
        if (cars.length > 0) {
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
                showState: false
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlDYXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXlDYXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdURBQXFEO0FBR3JELElBQU0sTUFBTSxHQUFHLElBQUksZ0JBQVUsRUFBRSxDQUFBO0FBRy9CLDRDQUFnRTtBQUVoRSxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtRQUNSLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEVBQUU7UUFDVixJQUFJLEVBQUUsS0FBSztRQUNYLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFLRCxNQUFNLEVBQUUsVUFBVSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxjQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDZixJQUFBLE1BQU0sR0FBYSxPQUFPLE9BQXBCLEVBQUUsTUFBTSxHQUFLLE9BQU8sT0FBWixDQUFZO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsTUFBTSxRQUFBO2dCQUNOLE1BQU0sUUFBQTthQUNQLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUtLLGNBQWMsRUFBcEI7Ozs7OzRCQUNpQixXQUFNLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBQTs7d0JBQXRDLE1BQU0sR0FBRyxTQUE2Qjs2QkFDeEMsQ0FBQSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQSxFQUFoQixjQUFnQjt3QkFDZCxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQTs2QkFDbEIsQ0FBQSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQSxFQUFmLGNBQWU7d0JBRVgsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUF3Qjs0QkFDbkQsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQTt3QkFDekIsQ0FBQyxDQUFD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QUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLENBQUE7YUFDdkI7U0FDTjtJQUVILENBQUM7SUFNRCxXQUFXLEVBQVgsVUFBWSxHQUFRO1FBQ2xCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLGNBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN0QixRQUFRLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUE7WUFDMUIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUE7U0FDeEM7SUFDSCxDQUFDO0lBTUQsV0FBVyxFQUFYLFVBQVksQ0FBTTtRQUNSLElBQUEsS0FBSyxHQUFLLHdCQUFpQixDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBaEMsQ0FBZ0M7UUFDdkMsSUFBQSxNQUFNLEdBQVUsSUFBSSxDQUFDLElBQUksT0FBbkIsQ0FBbUI7UUFDL0IsSUFBSSxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2YsSUFBTSxLQUFLLEdBQUcsZUFBZSxFQUFFLENBQUM7WUFDaEMsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFDeEMsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDZixLQUFLLE9BQUE7Z0JBQ0wsU0FBUyxFQUFDLEtBQUs7YUFDaEIsQ0FBQyxDQUFBO1lBQ0YsRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFLLEVBQUUsQ0FBQzthQUNULENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUtELE1BQU0sRUFBRTtRQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyog5a+85YWl5qih5Z2XICovXHJcbmltcG9ydCBVc2VyU2VydmVyIGZyb20gJy4uLy4uLy4uL2FwaS9hcGkvdXNlci9zZXJ2ZXInXHJcblxyXG4vKiDlrp7kvovljJbmqKHlnZcgKi9cclxuY29uc3Qgc2VydmVyID0gbmV3IFVzZXJTZXJ2ZXIoKVxyXG5cclxuLyog5a+85YWl5bel5YW357G7ICovXHJcbmltcG9ydCB7IGlzRW1wdHksIGdldFNldERhdGFDdXJyZW50IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCdcclxuXHJcblBhZ2Uoe1xyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICBjYXJzOiBbXSxcclxuICAgIHNlbGVjdDogJycsXHJcbiAgICBsb2NrSWQ6ICcnLFxyXG4gICAgc2hvdzogZmFsc2UsXHJcbiAgICBjdXJyZW50SWQ6ICcnLFxyXG4gICAgc2hvd0RldGVsZTogZmFsc2VcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIGlmICghaXNFbXB0eShvcHRpb25zKSkge1xyXG4gICAgICBsZXQgeyBzZWxlY3QsIGxvY2tJZCB9ID0gb3B0aW9uc1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGxvY2tJZCxcclxuICAgICAgICBzZWxlY3QsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W5b2T5YmN55So5oi355qE5omA5pyJ6L2m6L6GXHJcbiAgICovXHJcbiAgYXN5bmMgc2VsZWN0UGxhdGVBbGwoKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZXJ2ZXIuc2VsZWN0UGxhdGVBbGwoKVxyXG4gICAgaWYgKHJlc3VsdC5jb2RlID09IDApIHtcclxuICAgICAgbGV0IGNhcnMgPSByZXN1bHQuZGF0YVxyXG4gICAgICBpZiAoY2Fycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLyog5qOA5rWL5piv5ZCm5a2Y5Zyo6buY6K6k6L2m6L6G77yM6Iul5LiN5a2Y5Zyo5YiZ6buY6K6k6K6+572u56ys5LiA5Liq6L2m6L6G5Li66buY6K6k6L2m6L6GICovXHJcbiAgICAgICAgY29uc3QgaXNEZWZhdWx0ID0gY2Fycy5zb21lKChpdGVtOiB7IHN0YXR1czogbnVtYmVyIH0pID0+IHtcclxuICAgICAgICAgIHJldHVybiBpdGVtLnN0YXR1cyA9PSAxXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoIWlzRGVmYXVsdCkge1xyXG4gICAgICAgICAgbGV0IHsgaWQgfSA9IGNhcnNbMF1cclxuICAgICAgICAgIGNvbnN0IHBhcmFtID0geyBpZCB9XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZXJ2ZXIuc2V0UGxhdGVEZXZhdWx0KHBhcmFtKVxyXG4gICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RQbGF0ZUFsbCgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIEVuZCAqL1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhcnMgPSBbXVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7IGNhcnMgfSlcclxuICAgICAgdGhpcy5fc2V0RGVmYXVsdFBsYXRlKGNhcnMpXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6K6+572u6buY6K6k6L2m6L6GXHJcbiAgICogQHBhcmFtIGNhcnMg6L2m6L6G5L+h5oGvXHJcbiAgICovXHJcbiAgX3NldERlZmF1bHRQbGF0ZShjYXJzOiBhbnlbXSkge1xyXG4gICAgbGV0IHBsYXRlID0gJydcclxuICAgIGxldCB1c2VySW5mbyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpXHJcbiAgICBpZiAoIWlzRW1wdHkodXNlckluZm8pKSB7XHJcbiAgICAgIGlmIChjYXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjYXJzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICBpZiAoZWxlbWVudC5zdGF0dXMgPT0gMSkge1xyXG4gICAgICAgICAgICBwbGF0ZSA9IGVsZW1lbnQucGxhdGVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBsYXRlID0gJy0tJ1xyXG4gICAgICB9XHJcbiAgICAgIHVzZXJJbmZvLnBsYXRlID0gcGxhdGVcclxuICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJywgdXNlckluZm8pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6Lez6L2s5re75Yqg6L2m54mMXHJcbiAgICovXHJcbiAgYWRkQ2FyKCkge1xyXG4gICAgbGV0IHsgc2VsZWN0LCBsb2NrSWQgfSA9IHRoaXMuZGF0YVxyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogYC9wYWdlcy91c2Vycy9hZGRDYXIvYWRkQ2FyP3NlbGVjdD1gK3NlbGVjdCsnJmxvY2tJZD0nK2xvY2tJZCxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6K6+572u6buY6K6k6L2m6L6GXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGUg5LqL5Lu25a+56LGhXHJcbiAgICovXHJcbiAgc2V0RGVmYXVsdChlOiBhbnkpIHtcclxuICAgIGNvbnN0IGlkID0gZ2V0U2V0RGF0YUN1cnJlbnQoZSwgJ2lkJylcclxuICAgIHRoaXMuX3N5bmNEZWZhdWx0KGlkKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOiuvue9rum7mOiupOi9pui+hlxyXG4gICAqIEBwYXJhbSBpZCDovabovoZpZFxyXG4gICAqL1xyXG4gIGFzeW5jIF9zeW5jRGVmYXVsdChpZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBwYXJhbSA9IHsgaWQgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyLnNldFBsYXRlRGV2YXVsdChwYXJhbSlcclxuICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgIHRoaXMuX3NldERlZmF1bHQoaWQpXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6K6+572u6buY6K6k6L2m6L6GXHJcbiAgICogQHBhcmFtIGlkIOi9pui+hmlkXHJcbiAgICovXHJcbiAgX3NldERlZmF1bHQoaWQ6IG51bWJlcikge1xyXG4gICAgbGV0IHsgY2FycyB9ID0gPGFueT50aGlzLmRhdGFcclxuICAgIGxldCBjYXIgPSB7fVxyXG4gICAgY29uc29sZS5sb2coY2Fycy5sZW5ndGgpXHJcbiAgICAgICAgY2Fycy5mb3JFYWNoKChwbGF0ZTogeyBpZD86IGFueTsgc3RhdHVzPzogYW55OyBwbGF0ZT86IGFueSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwbGF0ZS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgIHBsYXRlLnN0YXR1cyA9IDFcclxuICAgICAgICAgICAgICBjYXIgPSBwbGF0ZVxyXG4gICAgICAgICAgICAgIHRoaXMuX3NldFN0b3JhZ2UoY2FyKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHBsYXRlLnN0YXR1cyA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGNhcnMgPSBjYXJzLmZpbHRlcigocGxhdGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGxhdGUuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGNhcnMudW5zaGlmdChjYXIpXHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoeyBjYXJzIH0pXHJcbiAgICBcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmmL7npLrmqKHmgIHmoYZcclxuICAgKi9cclxuICBzaG93TW9kYWwoZTogYW55KSB7XHJcbiAgICBjb25zdCBjdXJyZW50SWQgPSBnZXRTZXREYXRhQ3VycmVudChlLCAnaWQnKVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgY3VycmVudElkLFxyXG4gICAgICBzaG93RGV0ZWxlOiB0cnVlXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOWIoOmZpOi9pui+hlxyXG4gICAqL1xyXG4gIGFzeW5jIGRlbGV0ZVBsYXRlKCkge1xyXG4gICAgbGV0IHsgY3VycmVudElkIH0gPSA8YW55PnRoaXMuZGF0YVxyXG4gICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgIGlkOiBjdXJyZW50SWRcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci5kZWxldGVQbGF0ZShwYXJhbSlcclxuICAgIGxldCB0aXRsZSA9IHJlc3VsdC5jb2RlID09IDAgPyByZXN1bHQuZGF0YSA6IHJlc3VsdC5tc2dcclxuICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgIHRoaXMuX2RlbFBsYXRlKGN1cnJlbnRJZClcclxuICAgIH1cclxuICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBpY29uOiAnbm9uZSdcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog5Yig6Zmk6L2m6L6GXHJcbiAgICogQHBhcmFtIGlkIOS7jui9pui+hmlkXHJcbiAgICovXHJcbiAgX2RlbFBsYXRlKGlkOiBudW1iZXIpIHtcclxuICAgIGxldCB7IGNhcnMgfSA9IDxhbnk+dGhpcy5kYXRhXHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgbGV0IHBsYXRlcyA9IGNhcnMuZmlsdGVyKChwbGF0ZTogeyBpZDogbnVtYmVyIH0pID0+IHtcclxuICAgICAgICBpZiAocGxhdGUuaWQgPT0gaWQpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLl9zeW5jRGVmYXVsdChpZClcclxuICAgICAgdGhpcy5zZXREYXRhKHsgY2FyczogcGxhdGVzIH0pXHJcbiAgICAgIHRoaXMuX3NldERlZlBsYXRlKGlkKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOiuvue9rum7mOiupOi9pui+hlxyXG4gICAqIEBwYXJhbSBpZCDovabovoZpZFxyXG4gICAqL1xyXG4gIF9zZXREZWZQbGF0ZShpZD86IG51bWJlcikge1xyXG4gICAgbGV0IHsgY2FycyB9ID0gPGFueT50aGlzLmRhdGFcclxuICAgIGlmKGNhcnMubGVuZ3RoPjApe1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc0RlbCA9IGNhcnMuc29tZSgocGxhdGU6IHsgc3RhdHVzOiBudW1iZXIgfSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBwbGF0ZS5zdGF0dXMgPT0gMVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZiAoIWlzRGVsKSB7XHJcbiAgICAgICAgICAgICAgY2Fyc1swXS5zdGF0dXMgPSAxXHJcbiAgICAgICAgICAgICAgdGhpcy5fc2V0U3RvcmFnZShjYXJzWzBdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGNhcnMgfSlcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOiuvue9rum7mOiupOi9pui+hue8k+WtmFxyXG4gICAqIEBwYXJhbSBjYXIg6buY6K6k6L2m6L6G5L+h5oGvXHJcbiAgICovXHJcbiAgX3NldFN0b3JhZ2UoY2FyOiBhbnkpIHtcclxuICAgIGxldCB1c2VySW5mbyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpXHJcbiAgICBpZiAoIWlzRW1wdHkodXNlckluZm8pKSB7XHJcbiAgICAgIHVzZXJJbmZvLnBsYXRlID0gY2FyLnBsYXRlXHJcbiAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycsIHVzZXJJbmZvKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmAieaLqei9pueJjFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlIOS6i+S7tuWvueixoVxyXG4gICAqL1xyXG4gIHNlbGVjdFBsYXRlKGU6IGFueSkge1xyXG4gICAgY29uc3QgeyBwbGF0ZSB9ID0gZ2V0U2V0RGF0YUN1cnJlbnQoZSwgJ3JvdycpXHJcbiAgICBsZXQgeyBzZWxlY3QgfSA9IDxhbnk+dGhpcy5kYXRhXHJcbiAgICBpZiAoc2VsZWN0ID09IDEpIHtcclxuICAgICAgY29uc3QgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgY29uc3QgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXVxyXG4gICAgICBwcmV2UGFnZS5zZXREYXRhKHtcclxuICAgICAgICBwbGF0ZSxcclxuICAgICAgICBzaG93U3RhdGU6ZmFsc2VcclxuICAgICAgfSlcclxuICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICBkZWx0YTogMSxcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zZWxlY3RQbGF0ZUFsbCgpXHJcbiAgfSxcclxuXHJcbn0pIl19