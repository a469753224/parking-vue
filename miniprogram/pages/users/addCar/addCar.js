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
var exception_1 = require("../../../utils/exception");
Page({
    data: {
        value: false,
        checked: false,
        show: true,
        carNo: ['桂', 'A', '', '', '', '', ''],
        keys_province: [
            ['京', '津', '晋', '冀', '蒙', '辽', '吉', '黑', '沪', '苏'],
            ['浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤', '桂'],
            ['琼', '渝', '川', '贵', '云', '藏', '陕', '甘'],
            ['青', '宁', '新', '台'],
        ],
        keys_one: [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'],
            ['Z', 'X', 'C', 'V', 'B', 'N']
        ],
        keys_more: [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            ['Q', 'W', 'E', 'R', 'T', 'Y', 'C', 'V', 'B', 'N'],
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
            ['Z', 'X', '民', '使']
        ],
        more: true,
        keys_keyword: [],
        currentIndex: 2,
        select: '',
        lockId: ''
    },
    onLoad: function (options) {
        var keys_one = this.data.keys_one;
        this.setData({
            keys_keyword: keys_one
        });
        if (!util_1.isEmpty(options)) {
            var _a = this.data, lockId = _a.lockId, select = _a.select;
            this.setData({
                lockId: lockId,
                select: select,
            });
        }
    },
    onChange: function () {
        this.setData({
            checked: !this.data.checked
        });
    },
    moreKey: function () {
        var _a = this.data, more = _a.more, keys_province = _a.keys_province, keys_more = _a.keys_more;
        var mores = !more;
        var keys = mores ? keys_province : keys_more;
        this.setData({
            more: more,
            keys_keyword: keys,
        });
    },
    newEnergy: function (e) {
        var carNo = e.detail ? ['桂', 'A', '', '', '', '', '', ''] : ['桂', 'A', '', '', '', '', ''];
        var keys_one = this.data.keys_one;
        this.setData({
            carNo: carNo,
            value: e.detail,
            currentIndex: 2,
            keys_keyword: keys_one
        });
    },
    checkcedItem: function (e) {
        var item = util_1.getSetDataCurrent(e, 'item');
        var t = this.data.carNo;
        var index = this.data.currentIndex;
        var carNo = [];
        var currentIndex = this.data.currentIndex;
        if (currentIndex !== '') {
            t.splice(index, 1, item);
            carNo = t;
            index += 1;
            index = this.data.value ? index > 7 ? 7 : index : index > 6 ? 6 : index;
        }
        else {
            carNo = util_1.insertArray(t, item);
        }
        this.setData({
            carNo: carNo
        });
        if (t[0] !== '') {
            var keys_one = this.data.keys_one;
            this.setData({
                currentIndex: index,
                keys_keyword: keys_one
            });
        }
    },
    deleteByIndex: function () {
        var _a = this.data, currentIndex = _a.currentIndex, keys_province = _a.keys_province;
        var index = currentIndex !== '' ? this.data.currentIndex : this.data.carNo.length - 1;
        var carNo = this.data.carNo;
        if (this.data.carNo[index] === '') {
            index = index > 0 ? index - 1 : index;
        }
        carNo.splice(index, 1, '');
        if (this.data.carNo[0] === '' && index === 0) {
            this.setData({
                keys_keyword: keys_province
            });
        }
        this.setData({
            carNo: carNo,
            currentIndex: index
        });
    },
    checkItem: function (e) {
        var currentIndex = util_1.getSetDataCurrent(e, 'index');
        var _a = this.data, keys_one = _a.keys_one, keys_province = _a.keys_province;
        this.setData({
            currentIndex: currentIndex,
            show: true,
            keys_keyword: currentIndex === 0 ? keys_province : keys_one
        });
    },
    confirmPlat: function () {
        var carNo = this.data.carNo;
        var t = !carNo.includes('') ? true : false;
        var u = this.data.value ? 8 : 7;
        var reg = exception_1.plat(this.data.carNo.join(''), u);
        var title = '';
        if (t && reg) {
            this.setData({
                show: false
            });
        }
        else {
            if (t) {
                title = !reg ? '车牌号不合法' : '';
            }
            else {
                title = !reg ? '车牌号信息不完整' : '';
            }
            wx.showToast({
                title: title,
                icon: 'none'
            });
        }
    },
    savePlat: function () {
        return __awaiter(this, void 0, void 0, function () {
            var carNo, t, reg, u, _a, carNo_1, checked, value, param, result, title, _b, select_1, lockId_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        carNo = this.data.carNo;
                        t = !carNo.includes('') ? true : false;
                        reg = false;
                        if (!t) return [3, 4];
                        u = this.data.value ? 8 : 7;
                        reg = exception_1.plat(this.data.carNo.join(''), u);
                        if (!!reg) return [3, 1];
                        wx.showToast({
                            icon: 'none',
                            title: '车牌信息不完整！',
                        });
                        return [3, 3];
                    case 1:
                        _a = this.data, carNo_1 = _a.carNo, checked = _a.checked, value = _a.value;
                        param = {
                            plate: carNo_1.join(''),
                            status: checked ? 1 : 0,
                            newEnergy: value ? 1 : 0
                        };
                        return [4, server.addVehiclePlate(param)];
                    case 2:
                        result = _c.sent();
                        title = result.code == 0 ? '添加成功' : result.data;
                        wx.showToast({
                            title: title,
                            icon: 'none'
                        });
                        if (result.code == 0) {
                            _b = this.data, select_1 = _b.select, lockId_1 = _b.lockId;
                            setTimeout(function () {
                                if (select_1 == 1) {
                                    wx.reLaunch({
                                        url: "/pages/homes/reserve/reserve?lockId=" + lockId_1,
                                    });
                                }
                                else {
                                    wx.navigateBack({
                                        delta: 1,
                                    });
                                }
                            }, 1000);
                        }
                        _c.label = 3;
                    case 3: return [3, 5];
                    case 4:
                        wx.showToast({
                            icon: 'none',
                            title: '车牌信息不完整！',
                        });
                        _c.label = 5;
                    case 5: return [2];
                }
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQ2FyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkQ2FyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdURBQXFEO0FBR3JELElBQU0sTUFBTSxHQUFHLElBQUksZ0JBQVUsRUFBRSxDQUFBO0FBRy9CLDRDQUk0QjtBQUc1QixzREFFaUM7QUFFakMsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLEtBQUs7UUFDWixPQUFPLEVBQUUsS0FBSztRQUNkLElBQUksRUFBRSxJQUFJO1FBQ1YsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3JDLGFBQWEsRUFBRTtZQUNiLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ2xELENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ2xELENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUN4QyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztTQUNyQjtRQUNELFFBQVEsRUFBRTtZQUNSLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxD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QVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDekIsQ0FBQTt3QkFDYyxXQUFNLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUE1QyxNQUFNLEdBQUcsU0FBbUM7d0JBQzlDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFBO3dCQUNuRCxFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNYLEtBQUssT0FBQTs0QkFDTCxJQUFJLEVBQUUsTUFBTTt5QkFDYixDQUFDLENBQUE7d0JBQ0YsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTs0QkFDaEIsS0FHSyxJQUFJLENBQUMsSUFBSSxFQUZoQixvQkFBTSxFQUNOLG9CQUFNLENBQ1U7NEJBQ2xCLFVBQVUsQ0FBQztnQ0FDVCxJQUFJLFFBQU0sSUFBSSxDQUFDLEVBQUU7b0NBQ2YsRUFBRSxDQUFDLFFBQVEsQ0FBQzt3Q0FDVixHQUFHLEVBQUUseUNBQXVDLFFBQVE7cUNBQ3JELENBQUMsQ0FBQTtpQ0FDSDtxQ0FBTTtvQ0FDTCxFQUFFLENBQUMsWUFBWSxDQUFDO3dDQUNkLEtBQUssRUFBRSxDQUFDO3FDQUNULENBQUMsQ0FBQTtpQ0FDSDs0QkFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7eUJBQ1Y7Ozs7d0JBR0gsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0QkFDWCxJQUFJLEVBQUUsTUFBTTs0QkFDWixLQUFLLEVBQUUsVUFBVTt5QkFDbEIsQ0FBQyxDQUFBOzs7Ozs7S0FFTDtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIOWvvOWFpeaooeWdlyAqL1xyXG5pbXBvcnQgVXNlclNlcnZlciBmcm9tICcuLi8uLi8uLi9hcGkvYXBpL3VzZXIvc2VydmVyJ1xyXG5cclxuLyog5a6e5L6L5YyW5qih5Z2XICovXHJcbmNvbnN0IHNlcnZlciA9IG5ldyBVc2VyU2VydmVyKClcclxuXHJcbi8qIOWvvOWFpeW3peWFt+exuyAqL1xyXG5pbXBvcnQge1xyXG4gIGlzRW1wdHksXHJcbiAgaW5zZXJ0QXJyYXksXHJcbiAgZ2V0U2V0RGF0YUN1cnJlbnRcclxufSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJ1xyXG5cclxuLyog5a+85YWl6aqM6K+B6KeE5YiZICovXHJcbmltcG9ydCB7XHJcbiAgcGxhdFxyXG59IGZyb20gJy4uLy4uLy4uL3V0aWxzL2V4Y2VwdGlvbidcclxuXHJcblBhZ2Uoe1xyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIHNob3c6IHRydWUsXHJcbiAgICBjYXJObzogWyfmoYInLCAnQScsICcnLCAnJywgJycsICcnLCAnJ10sXHJcbiAgICBrZXlzX3Byb3ZpbmNlOiBbXHJcbiAgICAgIFsn5LqsJywgJ+a0pScsICfmmYsnLCAn5YaAJywgJ+iSmScsICfovr0nLCAn5ZCJJywgJ+m7kScsICfmsqonLCAn6IuPJ10sXHJcbiAgICAgIFsn5rWZJywgJ+ealicsICfpl70nLCAn6LWjJywgJ+mygScsICfosasnLCAn6YSCJywgJ+a5mCcsICfnsqQnLCAn5qGCJ10sXHJcbiAgICAgIFsn55C8JywgJ+a4nScsICflt50nLCAn6LS1JywgJ+S6kScsICfol48nLCAn6ZmVJywgJ+eUmCddLFxyXG4gICAgICBbJ+mdkicsICflroEnLCAn5pawJywgJ+WPsCddLFxyXG4gICAgXSxcclxuICAgIGtleXNfb25lOiBbXHJcbiAgICAgIFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAwXSxcclxuICAgICAgWydRJywgJ1cnLCAnRScsICdSJywgJ1QnLCAnWScsICdVJywgJ0knLCAnTycsICdQJ10sXHJcbiAgICAgIFsnQScsICdTJywgJ0QnLCAnRicsICdHJywgJ0gnLCAnSicsICdLJywgJ0wnLCAnTSddLFxyXG4gICAgICBbJ1onLCAnWCcsICdDJywgJ1YnLCAnQicsICdOJ11cclxuICAgIF0sXHJcbiAgICBrZXlzX21vcmU6IFtcclxuICAgICAgWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDBdLFxyXG4gICAgICBbJ1EnLCAnVycsICdFJywgJ1InLCAnVCcsICdZJywgJ0MnLCAnVicsICdCJywgJ04nXSxcclxuICAgICAgWydBJywgJ1MnLCAnRCcsICdGJywgJ0cnLCAnSCcsICdKJywgJ0snLCAnTCddLFxyXG4gICAgICBbJ1onLCAnWCcsICfmsJEnLCAn5L2/J11cclxuICAgIF0sXHJcbiAgICBtb3JlOiB0cnVlLFxyXG4gICAga2V5c19rZXl3b3JkOiBbXSxcclxuICAgIGN1cnJlbnRJbmRleDogMixcclxuICAgIHNlbGVjdDogJycsXHJcbiAgICBsb2NrSWQ6ICcnXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICBsZXQgeyBrZXlzX29uZSB9ID0gPGFueT50aGlzLmRhdGFcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGtleXNfa2V5d29yZDoga2V5c19vbmVcclxuICAgIH0pXHJcbiAgICBpZiAoIWlzRW1wdHkob3B0aW9ucykpIHtcclxuICAgICAgbGV0IHsgbG9ja0lkLCBzZWxlY3QgfSA9IHRoaXMuZGF0YVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGxvY2tJZCxcclxuICAgICAgICBzZWxlY3QsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6YCJ5oup5piv5ZCm5Li65paw6IO95rqQXHJcbiAgICovXHJcbiAgb25DaGFuZ2UoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjaGVja2VkOiAhdGhpcy5kYXRhLmNoZWNrZWRcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog5pu05aSa6L2m54mM6YCJ5oupXHJcbiAgICovXHJcbiAgbW9yZUtleSgpIHtcclxuICAgIGxldCB7IG1vcmUsIGtleXNfcHJvdmluY2UsIGtleXNfbW9yZSB9ID0gPGFueT50aGlzLmRhdGFcclxuICAgIGxldCBtb3JlcyA9ICFtb3JlXHJcbiAgICBsZXQga2V5cyA9IG1vcmVzID8ga2V5c19wcm92aW5jZSA6IGtleXNfbW9yZVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbW9yZSxcclxuICAgICAga2V5c19rZXl3b3JkOiBrZXlzLFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmlrDog73mupBcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBcclxuICAgKi9cclxuICBuZXdFbmVyZ3koZTogeyBkZXRhaWw6IGFueSB9KSB7XHJcbiAgICBsZXQgY2FyTm8gPSBlLmRldGFpbCA/IFsn5qGCJywgJ0EnLCAnJywgJycsICcnLCAnJywgJycsICcnXSA6IFsn5qGCJywgJ0EnLCAnJywgJycsICcnLCAnJywgJyddXHJcbiAgICBsZXQgeyBrZXlzX29uZSB9ID0gPGFueT50aGlzLmRhdGFcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGNhck5vLFxyXG4gICAgICB2YWx1ZTogZS5kZXRhaWwsXHJcbiAgICAgIGN1cnJlbnRJbmRleDogMixcclxuICAgICAga2V5c19rZXl3b3JkOiBrZXlzX29uZVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpgInmi6nplK7nm5jkuIrnmoTplK5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBcclxuICAgKi9cclxuICBjaGVja2NlZEl0ZW0oZTogYW55KSB7XHJcbiAgICBsZXQgaXRlbSA9IGdldFNldERhdGFDdXJyZW50KGUsICdpdGVtJylcclxuICAgIGxldCB0ID0gdGhpcy5kYXRhLmNhck5vXHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLmRhdGEuY3VycmVudEluZGV4XHJcbiAgICBsZXQgY2FyTm8gPSBbXVxyXG4gICAgbGV0IHsgY3VycmVudEluZGV4IH0gPSA8YW55PnRoaXMuZGF0YVxyXG4gICAgaWYgKGN1cnJlbnRJbmRleCAhPT0gJycpIHtcclxuICAgICAgdC5zcGxpY2UoaW5kZXgsIDEsIGl0ZW0pXHJcbiAgICAgIGNhck5vID0gdFxyXG4gICAgICBpbmRleCArPSAxXHJcbiAgICAgIGluZGV4ID0gdGhpcy5kYXRhLnZhbHVlID8gaW5kZXggPiA3ID8gNyA6IGluZGV4IDogaW5kZXggPiA2ID8gNiA6IGluZGV4XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYXJObyA9IGluc2VydEFycmF5KHQsIGl0ZW0pXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjYXJOb1xyXG4gICAgfSlcclxuICAgIGlmICh0WzBdICE9PSAnJykge1xyXG4gICAgICBsZXQgeyBrZXlzX29uZSB9ID0gPGFueT50aGlzLmRhdGFcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjdXJyZW50SW5kZXg6IGluZGV4LFxyXG4gICAgICAgIGtleXNfa2V5d29yZDoga2V5c19vbmVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDliKDpmaRcclxuICAgKi9cclxuICBkZWxldGVCeUluZGV4KCkge1xyXG4gICAgbGV0IHsgY3VycmVudEluZGV4LCBrZXlzX3Byb3ZpbmNlIH0gPSA8YW55PnRoaXMuZGF0YVxyXG4gICAgbGV0IGluZGV4ID0gY3VycmVudEluZGV4ICE9PSAnJyA/IHRoaXMuZGF0YS5jdXJyZW50SW5kZXggOiB0aGlzLmRhdGEuY2FyTm8ubGVuZ3RoIC0gMVxyXG4gICAgbGV0IGNhck5vID0gdGhpcy5kYXRhLmNhck5vXHJcbiAgICBpZiAodGhpcy5kYXRhLmNhck5vW2luZGV4XSA9PT0gJycpIHtcclxuICAgICAgaW5kZXggPSBpbmRleCA+IDAgPyBpbmRleCAtIDEgOiBpbmRleFxyXG4gICAgfVxyXG4gICAgY2FyTm8uc3BsaWNlKGluZGV4LCAxLCAnJylcclxuICAgIGlmICh0aGlzLmRhdGEuY2FyTm9bMF0gPT09ICcnICYmIGluZGV4ID09PSAwKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAga2V5c19rZXl3b3JkOiBrZXlzX3Byb3ZpbmNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjYXJObyxcclxuICAgICAgY3VycmVudEluZGV4OiBpbmRleFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpgInkuK3plK7nm5jlgLxcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBcclxuICAgKi9cclxuICBjaGVja0l0ZW0oZTogYW55KSB7XHJcbiAgICBsZXQgY3VycmVudEluZGV4ID0gZ2V0U2V0RGF0YUN1cnJlbnQoZSwgJ2luZGV4JylcclxuICAgIGxldCB7IGtleXNfb25lLCBrZXlzX3Byb3ZpbmNlIH0gPSA8YW55PnRoaXMuZGF0YVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgY3VycmVudEluZGV4LFxyXG4gICAgICBzaG93OiB0cnVlLFxyXG4gICAgICBrZXlzX2tleXdvcmQ6IGN1cnJlbnRJbmRleCA9PT0gMCA/IGtleXNfcHJvdmluY2UgOiBrZXlzX29uZVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmj5DkuqTovabniYzlj7dcclxuICAgKi9cclxuICBjb25maXJtUGxhdCgpIHtcclxuICAgIGxldCB7IGNhck5vIH0gPSA8YW55PnRoaXMuZGF0YVxyXG4gICAgbGV0IHQgPSAhY2FyTm8uaW5jbHVkZXMoJycpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICBsZXQgdSA9IHRoaXMuZGF0YS52YWx1ZSA/IDggOiA3XHJcbiAgICBsZXQgcmVnID0gcGxhdCh0aGlzLmRhdGEuY2FyTm8uam9pbignJyksIHUpXHJcbiAgICBsZXQgdGl0bGUgPSAnJ1xyXG5cclxuICAgIGlmICh0ICYmIHJlZykge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodCkge1xyXG4gICAgICAgIHRpdGxlID0gIXJlZyA/ICfovabniYzlj7fkuI3lkIjms5UnIDogJydcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aXRsZSA9ICFyZWcgPyAn6L2m54mM5Y+35L+h5oGv5LiN5a6M5pW0JyA6ICcnXHJcbiAgICAgIH1cclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDkv53lrZjovabniYxcclxuICAgKi9cclxuICBhc3luYyBzYXZlUGxhdCgpIHtcclxuICAgIGxldCB7IGNhck5vIH0gPSA8YW55PnRoaXMuZGF0YVxyXG4gICAgbGV0IHQgPSAhY2FyTm8uaW5jbHVkZXMoJycpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICBsZXQgcmVnID0gZmFsc2VcclxuICAgIGlmICh0KSB7XHJcbiAgICAgIGxldCB1ID0gdGhpcy5kYXRhLnZhbHVlID8gOCA6IDdcclxuICAgICAgcmVnID0gcGxhdCh0aGlzLmRhdGEuY2FyTm8uam9pbignJyksIHUpXHJcbiAgICAgIGlmICghcmVnKSB7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgIHRpdGxlOiAn6L2m54mM5L+h5oGv5LiN5a6M5pW077yBJyxcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCB7IGNhck5vLCBjaGVja2VkLCB2YWx1ZSB9ID0gPGFueT50aGlzLmRhdGFcclxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICAgIHBsYXRlOiBjYXJOby5qb2luKCcnKSxcclxuICAgICAgICAgIHN0YXR1czogY2hlY2tlZCA/IDEgOiAwLFxyXG4gICAgICAgICAgbmV3RW5lcmd5OiB2YWx1ZSA/IDEgOiAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci5hZGRWZWhpY2xlUGxhdGUocGFyYW0pXHJcbiAgICAgICAgbGV0IHRpdGxlID0gcmVzdWx0LmNvZGUgPT0gMCA/ICfmt7vliqDmiJDlip8nIDogcmVzdWx0LmRhdGFcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICBzZWxlY3QsXHJcbiAgICAgICAgICAgIGxvY2tJZFxyXG4gICAgICAgICAgfSA9IDxhbnk+dGhpcy5kYXRhXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL2hvbWVzL3Jlc2VydmUvcmVzZXJ2ZT9sb2NrSWQ9JHtsb2NrSWR9YCxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgICBkZWx0YTogMSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgIHRpdGxlOiAn6L2m54mM5L+h5oGv5LiN5a6M5pW077yBJyxcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0pIl19