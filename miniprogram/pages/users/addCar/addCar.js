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
            var lockId = options.lockId, select = options.select;
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
            var carNo, t, reg, u, _a, carNo_1, checked, value, param, result, title;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
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
                        result = _b.sent();
                        title = result.code == 0 ? '添加成功' : result.data;
                        wx.showToast({
                            title: title,
                            icon: 'none'
                        });
                        if (result.code == 0) {
                            setTimeout(function () {
                                if (_this.data.select == '1') {
                                    wx.reLaunch({
                                        url: "/pages/homes/reserve/reserve?lockId=" + _this.data.lockId,
                                    });
                                }
                                else {
                                    wx.navigateBack({
                                        delta: 1,
                                    });
                                }
                            }, 1000);
                        }
                        _b.label = 3;
                    case 3: return [3, 5];
                    case 4:
                        wx.showToast({
                            icon: 'none',
                            title: '车牌信息不完整！',
                        });
                        _b.label = 5;
                    case 5: return [2];
                }
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQ2FyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkQ2FyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdURBQXFEO0FBR3JELElBQU0sTUFBTSxHQUFHLElBQUksZ0JBQVUsRUFBRSxDQUFBO0FBRy9CLDRDQUk0QjtBQUc1QixzREFFaUM7QUFFakMsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLEtBQUs7UUFDWixPQUFPLEVBQUUsS0FBSztRQUNkLElBQUksRUFBRSxJQUFJO1FBQ1YsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3JDLGFBQWEsRUFBRTtZQUNiLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ2xELENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ2xELENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUN4QyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztTQUNyQjtRQUNELFFBQVEsRUFBRTtZQUNSLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxD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RSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDekIsQ0FBQTt3QkFDYyxXQUFNLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUE1QyxNQUFNLEdBQUcsU0FBbUM7d0JBQzlDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFBO3dCQUNuRCxFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNYLEtBQUssT0FBQTs0QkFDTCxJQUFJLEVBQUUsTUFBTTt5QkFDYixDQUFDLENBQUE7d0JBQ0YsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTs0QkFDcEIsVUFBVSxDQUFDO2dDQUNSLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFO29DQUM1QixFQUFFLENBQUMsUUFBUSxDQUFDO3dDQUNWLEdBQUcsRUFBRSx5Q0FBdUMsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFRO3FDQUMvRCxDQUFDLENBQUE7aUNBQ0Y7cUNBQU07b0NBQ04sRUFBRSxDQUFDLFlBQVksQ0FBQzt3Q0FDaEIsS0FBSyxFQUFFLENBQUM7cUNBQ1AsQ0FBQyxDQUFBO2lDQUNIOzRCQUNILENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzt5QkFDVjs7Ozt3QkFHSCxFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNYLElBQUksRUFBRSxNQUFNOzRCQUNaLEtBQUssRUFBRSxVQUFVO3lCQUNsQixDQUFDLENBQUE7Ozs7OztLQUVMO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyog5a+85YWl5qih5Z2XICovXHJcbmltcG9ydCBVc2VyU2VydmVyIGZyb20gJy4uLy4uLy4uL2FwaS9hcGkvdXNlci9zZXJ2ZXInXHJcblxyXG4vKiDlrp7kvovljJbmqKHlnZcgKi9cclxuY29uc3Qgc2VydmVyID0gbmV3IFVzZXJTZXJ2ZXIoKVxyXG5cclxuLyog5a+85YWl5bel5YW357G7ICovXHJcbmltcG9ydCB7XHJcbiAgaXNFbXB0eSxcclxuICBpbnNlcnRBcnJheSxcclxuICBnZXRTZXREYXRhQ3VycmVudFxyXG59IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnXHJcblxyXG4vKiDlr7zlhaXpqozor4Hop4TliJkgKi9cclxuaW1wb3J0IHtcclxuICBwbGF0XHJcbn0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXhjZXB0aW9uJ1xyXG5cclxuUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIHZhbHVlOiBmYWxzZSxcclxuICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgc2hvdzogdHJ1ZSxcclxuICAgIGNhck5vOiBbJ+ahgicsICdBJywgJycsICcnLCAnJywgJycsICcnXSxcclxuICAgIGtleXNfcHJvdmluY2U6IFtcclxuICAgICAgWyfkuqwnLCAn5rSlJywgJ+aZiycsICflhoAnLCAn6JKZJywgJ+i+vScsICflkIknLCAn6buRJywgJ+ayqicsICfoi48nXSxcclxuICAgICAgWyfmtZknLCAn55qWJywgJ+mXvScsICfotaMnLCAn6bKBJywgJ+ixqycsICfphIInLCAn5rmYJywgJ+eypCcsICfmoYInXSxcclxuICAgICAgWyfnkLwnLCAn5ridJywgJ+W3nScsICfotLUnLCAn5LqRJywgJ+iXjycsICfpmZUnLCAn55SYJ10sXHJcbiAgICAgIFsn6Z2SJywgJ+WugScsICfmlrAnLCAn5Y+wJ10sXHJcbiAgICBdLFxyXG4gICAga2V5c19vbmU6IFtcclxuICAgICAgWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDBdLFxyXG4gICAgICBbJ1EnLCAnVycsICdFJywgJ1InLCAnVCcsICdZJywgJ1UnLCAnSScsICdPJywgJ1AnXSxcclxuICAgICAgWydBJywgJ1MnLCAnRCcsICdGJywgJ0cnLCAnSCcsICdKJywgJ0snLCAnTCcsICdNJ10sXHJcbiAgICAgIFsnWicsICdYJywgJ0MnLCAnVicsICdCJywgJ04nXVxyXG4gICAgXSxcclxuICAgIGtleXNfbW9yZTogW1xyXG4gICAgICBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMF0sXHJcbiAgICAgIFsnUScsICdXJywgJ0UnLCAnUicsICdUJywgJ1knLCAnQycsICdWJywgJ0InLCAnTiddLFxyXG4gICAgICBbJ0EnLCAnUycsICdEJywgJ0YnLCAnRycsICdIJywgJ0onLCAnSycsICdMJ10sXHJcbiAgICAgIFsnWicsICdYJywgJ+awkScsICfkvb8nXVxyXG4gICAgXSxcclxuICAgIG1vcmU6IHRydWUsXHJcbiAgICBrZXlzX2tleXdvcmQ6IFtdLFxyXG4gICAgY3VycmVudEluZGV4OiAyLFxyXG4gICAgc2VsZWN0OiAnJyxcclxuICAgIGxvY2tJZDogJydcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIGxldCB7IGtleXNfb25lIH0gPSA8YW55PnRoaXMuZGF0YVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAga2V5c19rZXl3b3JkOiBrZXlzX29uZVxyXG4gICAgfSlcclxuICAgIGlmICghaXNFbXB0eShvcHRpb25zKSkge1xyXG4gICAgICBsZXQgeyBsb2NrSWQsIHNlbGVjdCB9ID0gb3B0aW9uc1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGxvY2tJZCxcclxuICAgICAgICBzZWxlY3QsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6YCJ5oup5piv5ZCm5Li65paw6IO95rqQXHJcbiAgICovXHJcbiAgb25DaGFuZ2UoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjaGVja2VkOiAhdGhpcy5kYXRhLmNoZWNrZWRcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog5pu05aSa6L2m54mM6YCJ5oupXHJcbiAgICovXHJcbiAgbW9yZUtleSgpIHtcclxuICAgIGxldCB7IG1vcmUsIGtleXNfcHJvdmluY2UsIGtleXNfbW9yZSB9ID0gPGFueT50aGlzLmRhdGFcclxuICAgIGxldCBtb3JlcyA9ICFtb3JlXHJcbiAgICBsZXQga2V5cyA9IG1vcmVzID8ga2V5c19wcm92aW5jZSA6IGtleXNfbW9yZVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbW9yZSxcclxuICAgICAga2V5c19rZXl3b3JkOiBrZXlzLFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmlrDog73mupBcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBcclxuICAgKi9cclxuICBuZXdFbmVyZ3koZTogeyBkZXRhaWw6IGFueSB9KSB7XHJcbiAgICBsZXQgY2FyTm8gPSBlLmRldGFpbCA/IFsn5qGCJywgJ0EnLCAnJywgJycsICcnLCAnJywgJycsICcnXSA6IFsn5qGCJywgJ0EnLCAnJywgJycsICcnLCAnJywgJyddXHJcbiAgICBsZXQgeyBrZXlzX29uZSB9ID0gPGFueT50aGlzLmRhdGFcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGNhck5vLFxyXG4gICAgICB2YWx1ZTogZS5kZXRhaWwsXHJcbiAgICAgIGN1cnJlbnRJbmRleDogMixcclxuICAgICAga2V5c19rZXl3b3JkOiBrZXlzX29uZVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpgInmi6nplK7nm5jkuIrnmoTplK5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBcclxuICAgKi9cclxuICBjaGVja2NlZEl0ZW0oZTogYW55KSB7XHJcbiAgICBsZXQgaXRlbSA9IGdldFNldERhdGFDdXJyZW50KGUsICdpdGVtJylcclxuICAgIGxldCB0ID0gdGhpcy5kYXRhLmNhck5vXHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLmRhdGEuY3VycmVudEluZGV4XHJcbiAgICBsZXQgY2FyTm8gPSBbXVxyXG4gICAgbGV0IHsgY3VycmVudEluZGV4IH0gPSA8YW55PnRoaXMuZGF0YVxyXG4gICAgaWYgKGN1cnJlbnRJbmRleCAhPT0gJycpIHtcclxuICAgICAgdC5zcGxpY2UoaW5kZXgsIDEsIGl0ZW0pXHJcbiAgICAgIGNhck5vID0gdFxyXG4gICAgICBpbmRleCArPSAxXHJcbiAgICAgIGluZGV4ID0gdGhpcy5kYXRhLnZhbHVlID8gaW5kZXggPiA3ID8gNyA6IGluZGV4IDogaW5kZXggPiA2ID8gNiA6IGluZGV4XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYXJObyA9IGluc2VydEFycmF5KHQsIGl0ZW0pXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjYXJOb1xyXG4gICAgfSlcclxuICAgIGlmICh0WzBdICE9PSAnJykge1xyXG4gICAgICBsZXQgeyBrZXlzX29uZSB9ID0gPGFueT50aGlzLmRhdGFcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjdXJyZW50SW5kZXg6IGluZGV4LFxyXG4gICAgICAgIGtleXNfa2V5d29yZDoga2V5c19vbmVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDliKDpmaRcclxuICAgKi9cclxuICBkZWxldGVCeUluZGV4KCkge1xyXG4gICAgbGV0IHsgY3VycmVudEluZGV4LCBrZXlzX3Byb3ZpbmNlIH0gPSA8YW55PnRoaXMuZGF0YVxyXG4gICAgbGV0IGluZGV4ID0gY3VycmVudEluZGV4ICE9PSAnJyA/IHRoaXMuZGF0YS5jdXJyZW50SW5kZXggOiB0aGlzLmRhdGEuY2FyTm8ubGVuZ3RoIC0gMVxyXG4gICAgbGV0IGNhck5vID0gdGhpcy5kYXRhLmNhck5vXHJcbiAgICBpZiAodGhpcy5kYXRhLmNhck5vW2luZGV4XSA9PT0gJycpIHtcclxuICAgICAgaW5kZXggPSBpbmRleCA+IDAgPyBpbmRleCAtIDEgOiBpbmRleFxyXG4gICAgfVxyXG4gICAgY2FyTm8uc3BsaWNlKGluZGV4LCAxLCAnJylcclxuICAgIGlmICh0aGlzLmRhdGEuY2FyTm9bMF0gPT09ICcnICYmIGluZGV4ID09PSAwKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAga2V5c19rZXl3b3JkOiBrZXlzX3Byb3ZpbmNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjYXJObyxcclxuICAgICAgY3VycmVudEluZGV4OiBpbmRleFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpgInkuK3plK7nm5jlgLxcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBcclxuICAgKi9cclxuICBjaGVja0l0ZW0oZTogYW55KSB7XHJcbiAgICBsZXQgY3VycmVudEluZGV4ID0gZ2V0U2V0RGF0YUN1cnJlbnQoZSwgJ2luZGV4JylcclxuICAgIGxldCB7IGtleXNfb25lLCBrZXlzX3Byb3ZpbmNlIH0gPSA8YW55PnRoaXMuZGF0YVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgY3VycmVudEluZGV4LFxyXG4gICAgICBzaG93OiB0cnVlLFxyXG4gICAgICBrZXlzX2tleXdvcmQ6IGN1cnJlbnRJbmRleCA9PT0gMCA/IGtleXNfcHJvdmluY2UgOiBrZXlzX29uZVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmj5DkuqTovabniYzlj7dcclxuICAgKi9cclxuICBjb25maXJtUGxhdCgpIHtcclxuICAgIGxldCB7IGNhck5vIH0gPSA8YW55PnRoaXMuZGF0YVxyXG4gICAgbGV0IHQgPSAhY2FyTm8uaW5jbHVkZXMoJycpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICBsZXQgdSA9IHRoaXMuZGF0YS52YWx1ZSA/IDggOiA3XHJcbiAgICBsZXQgcmVnID0gcGxhdCh0aGlzLmRhdGEuY2FyTm8uam9pbignJyksIHUpXHJcbiAgICBsZXQgdGl0bGUgPSAnJ1xyXG5cclxuICAgIGlmICh0ICYmIHJlZykge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodCkge1xyXG4gICAgICAgIHRpdGxlID0gIXJlZyA/ICfovabniYzlj7fkuI3lkIjms5UnIDogJydcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aXRsZSA9ICFyZWcgPyAn6L2m54mM5Y+35L+h5oGv5LiN5a6M5pW0JyA6ICcnXHJcbiAgICAgIH1cclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDkv53lrZjovabniYxcclxuICAgKi9cclxuICBhc3luYyBzYXZlUGxhdCgpIHtcclxuICAgIGxldCB7IGNhck5vIH0gPSA8YW55PnRoaXMuZGF0YVxyXG4gICAgbGV0IHQgPSAhY2FyTm8uaW5jbHVkZXMoJycpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICBsZXQgcmVnID0gZmFsc2VcclxuICAgIGlmICh0KSB7XHJcbiAgICAgIGxldCB1ID0gdGhpcy5kYXRhLnZhbHVlID8gOCA6IDdcclxuICAgICAgcmVnID0gcGxhdCh0aGlzLmRhdGEuY2FyTm8uam9pbignJyksIHUpXHJcbiAgICAgIGlmICghcmVnKSB7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgIHRpdGxlOiAn6L2m54mM5L+h5oGv5LiN5a6M5pW077yBJyxcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCB7IGNhck5vLCBjaGVja2VkLCB2YWx1ZSB9ID0gPGFueT50aGlzLmRhdGFcclxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICAgIHBsYXRlOiBjYXJOby5qb2luKCcnKSxcclxuICAgICAgICAgIHN0YXR1czogY2hlY2tlZCA/IDEgOiAwLFxyXG4gICAgICAgICAgbmV3RW5lcmd5OiB2YWx1ZSA/IDEgOiAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlcnZlci5hZGRWZWhpY2xlUGxhdGUocGFyYW0pXHJcbiAgICAgICAgbGV0IHRpdGxlID0gcmVzdWx0LmNvZGUgPT0gMCA/ICfmt7vliqDmiJDlip8nIDogcmVzdWx0LmRhdGFcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuc2VsZWN0ID09ICcxJykge1xyXG4gICAgICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICAgIHVybDogYC9wYWdlcy9ob21lcy9yZXNlcnZlL3Jlc2VydmU/bG9ja0lkPSR7dGhpcy5kYXRhLmxvY2tJZH1gLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgZGVsdGE6IDEsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICB0aXRsZTogJ+i9pueJjOS/oeaBr+S4jeWujOaVtO+8gScsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==