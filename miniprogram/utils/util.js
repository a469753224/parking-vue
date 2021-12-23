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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomWord = exports.sort_ASCII = exports.sortRuls = exports.daysRemain = exports.buildURL = exports.extend = exports.isPlainObject = exports.isObject = exports.isDate = exports.getDistance = exports.extractProCityCode = exports.insertArray = exports.formatTimeStamp = exports.contrastTime = exports.repeatDesc = exports.getTime = exports.getParam = exports.getSetDataCurrent = exports.formatDates = exports.setStorages = exports.isEmpty = exports.formmatDate = exports.formatMinute = exports.formatDate = exports.formatMoney = exports.computedMinute = exports.formatTime = void 0;
var config_1 = require("../config/config");
var QQMapWX = require('./qqmap-wx-jssdk');
var qqmapsdk = new QQMapWX({
    key: config_1.TX_MAP_KEY
});
exports.formatTime = function (date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return ([year, month, day].map(formatNumber).join('/') + " " + [hour, minute, second].map(formatNumber).join(':'));
};
var formatNumber = function (n) {
    var s = n.toString();
    return s[1] ? s : '0' + s;
};
exports.computedMinute = function (m) {
    return Math.floor(m / 60) + "\u5C0F\u65F6" + m % 60 + "\u5206\u949F";
};
exports.formatMoney = function (number, n) {
    var CurrencyAndAmountRegExp = /^(\d{1,18})|(\d{1,18}\.)|(\d{1,17}\.\d{0,1})|(\d{1,16}\.\d{0,2})|(\.\d{1,2})$/;
    var _result = CurrencyAndAmountRegExp.test(number);
    if (_result == false) {
        return number;
    }
    n = n > 0 && n <= 6 ? n : 2;
    var formatData = parseFloat((number + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';
    var l = formatData.split('.')[0].split('').reverse();
    var r = formatData.split('.')[1];
    var t = '';
    for (var i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '');
    }
    return t.split('').reverse().join('') + '.' + r;
};
exports.formatDate = function (time, sign) {
    sign = sign ? sign : '-';
    var date = new Date(time);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return "" + year + sign + (month < 10 ? '0' + month : month) + sign + (day < 10 ? '0' + day : day) + " " + (hour < 10 ? '0' + hour : hour) + ":" + (minutes < 10 ? '0' + minutes : minutes) + ":" + (seconds < 10 ? '0' + seconds : seconds);
};
exports.formatMinute = function (time) {
    var date = new Date(time);
    var hour = date.getHours();
    var minutes = date.getMinutes();
    hour = hour < 10 ? "0" + hour : "" + hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hour + ":" + minutes;
};
exports.formmatDate = function (time) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return year + "/" + month + "/" + day + " " + time + ":00";
};
exports.isEmpty = function (o) {
    var bol = false;
    if (o instanceof Object) {
        if (Object.keys(o).length === 0) {
            bol = true;
        }
        else {
            bol = false;
        }
    }
    if (o instanceof Array) {
        if (o.length == 0) {
            bol = true;
        }
        else {
            bol = false;
        }
    }
    return bol;
};
exports.setStorages = function (objs) {
    for (var key in objs) {
        wx.setStorageSync(key, objs[key]);
    }
};
exports.formatDates = function (time, sign) {
    sign = sign ? sign : '.';
    var date = new Date(time);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return "" + year + sign + (month < 10 ? '0' + month : month) + sign + (day < 10 ? '0' + day : day);
};
exports.getSetDataCurrent = function (e, name) {
    return e.currentTarget.dataset[name];
};
exports.getParam = function (url, key) {
    if (url.indexOf('?') !== -1) {
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        var r = url.split('?')[1].match(reg);
        if (r != null)
            return unescape(r[2]);
        return null;
    }
    else {
        return null;
    }
};
exports.getTime = function (t) {
    var date = new Date(t);
    return date.getTime();
};
exports.repeatDesc = function (arr) {
    arr = arr.map(function (item) {
        return parseInt(item);
    });
    if (arr.length == 2) {
        if (arr.indexOf(6) != -1 && arr.indexOf(7) != -1) {
            return '每周末';
        }
        else {
            return _week(arr);
        }
    }
    else if (arr.length == 5) {
        if (arr.indexOf(1) != -1 && arr.indexOf(2) != -1 && arr.indexOf(3) != -1 && arr.indexOf(4) != -1 && arr.indexOf(5) != -1) {
            return '每周一到周五';
        }
        else {
            return _week(arr);
        }
    }
    else if (arr.length == 7) {
        return '每天';
    }
    else {
        return _week(arr);
    }
};
var _week = function (arr) {
    var week = [];
    if (arr.length > 0) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var item = arr_1[_i];
            var t = '';
            switch (parseInt(item)) {
                case 1:
                    t = '一';
                    break;
                case 2:
                    t = '二';
                    break;
                case 3:
                    t = '三';
                    break;
                case 4:
                    t = '四';
                    break;
                case 5:
                    t = '五';
                    break;
                case 6:
                    t = '六';
                    break;
                case 7:
                    t = '日';
                    break;
            }
            week.push(t);
        }
    }
    return "\u6BCF\u5468 " + week.join('、');
};
exports.contrastTime = function (time, section) {
    var end = exports.formatMinute(section[1]);
    var begin = exports.formatMinute(section[0]);
    var now = exports.formatMinute(time);
    var date = new Date();
    var b = _toNumber(begin.split(':'));
    var n = _toNumber(now.split(':'));
    var e = _toNumber(end.split(':'));
    var b1 = date.setHours(b[0], b[1]);
    var n1 = date.setHours(n[0], n[1]);
    var e1 = date.setHours(e[0], e[1]);
    var temp = false;
    if (n1 > b1 && n1 < e1) {
        temp = true;
    }
    else {
        temp = false;
    }
    return temp;
};
function _toNumber(arr) {
    var temp = [];
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var i = arr_2[_i];
        temp.push(parseInt(i));
    }
    return temp;
}
exports.formatTimeStamp = function (hm) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return exports.getTime(year + "/" + month + "/" + day + " " + hm + ":00");
};
exports.insertArray = function (arr, n) {
    if (n !== '') {
        for (var i in arr) {
            if (arr[i] === '') {
                arr[i] = n;
                break;
            }
        }
    }
    return arr;
};
exports.extractProCityCode = function (address) {
    var reg = /.+?(省|市|自治区|自治州|县|区)/g;
    var ads = address.match(reg).length == 2 ? __spreadArrays([address.match(reg)[0]], address.match(reg)) : address.match(reg);
    return {
        province: ads[0],
        city: ads[1],
        area: ads[2]
    };
};
exports.getDistance = function (form, to) {
    return new Promise(function (resolve) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            qqmapsdk.calculateDistance({
                form: form,
                to: to,
                mode: 'driving',
                success: function (res) {
                    if (res.status == 0) {
                        resolve({
                            code: 200,
                            data: _kilometre(res.result.elements[0].distance)
                        });
                    }
                }
            });
            return [2];
        });
    }); });
};
var _kilometre = function (meters) {
    if (meters > 999) {
        return meters / 1000 + "\u516C\u91CC";
    }
    else {
        return meters + "\u7C73";
    }
};
var toString = Object.prototype.toString;
function isDate(val) {
    return toString.call(val) === '[object Date]';
}
exports.isDate = isDate;
function isObject(val) {
    return val !== 'null' && typeof val === 'object';
}
exports.isObject = isObject;
function isPlainObject(val) {
    return toString.call(val) === '[object Object]';
}
exports.isPlainObject = isPlainObject;
function extend(to, from) {
    for (var key in from) {
        ;
        to[key] = from[key];
    }
    return to;
}
exports.extend = extend;
function encode(val) {
    return encodeURIComponent(val)
        .replace(/%40/g, '@')
        .replace(/%3A/ig, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/ig, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/ig, '[')
        .replace(/%5D/ig, ']');
}
function buildURL(url, params) {
    if (!params) {
        return url;
    }
    var parts = [];
    Object.keys(params).forEach(function (key) {
        var val = params[key];
        if (val === null || typeof val === 'undefined') {
            return;
        }
        var values = [];
        if (Array.isArray(val)) {
            values = val;
            key += '[]';
        }
        else {
            values = [val];
        }
        values.forEach(function (val) {
            if (isDate(val)) {
                val = val.toISOString();
            }
            else if (isPlainObject(val)) {
                val = JSON.stringify(val);
            }
            parts.push(encode(key) + "=" + encode(val));
        });
    });
    var serializedParams = parts.join('&');
    if (serializedParams) {
        var markIndex = url.indexOf('#');
        if (markIndex !== -1) {
            url = url.slice(0, markIndex);
        }
        url = "" + url + (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
}
exports.buildURL = buildURL;
function daysRemain(date) {
    date = date.split(' ')[0];
    var s2 = new Date(date.replace(/-/g, "/"));
    var s1 = new Date();
    var days = s2.getTime() - s1.getTime();
    var time = parseInt((days / (1000 * 60 * 60 * 24)));
    return time + 1;
}
exports.daysRemain = daysRemain;
function sortRuls(str) {
    var result = str.split(/[a-zA-Z]\./g);
    result = result.filter(function (element) {
        if (element) {
            return true;
        }
        return false;
    });
    var keys = str.match(/[a-zA-Z]\./g);
    var ruls = [];
    for (var i in result) {
        if (result[i]) {
            var key = result[i].match(/\w./);
            var val = result[i].replace(/\w./, '');
            ruls.push(keys[i] + " " + key + val);
        }
    }
    return ruls;
}
exports.sortRuls = sortRuls;
function sort_ASCII(obj) {
    var arr = new Array();
    var num = 0;
    for (var i in obj) {
        arr[num] = i;
        num++;
    }
    var sortArr = arr.sort();
    var sortObj = {};
    for (var i in sortArr) {
        sortObj[sortArr[i]] = obj[sortArr[i]];
    }
    return sortObj;
}
exports.sort_ASCII = sort_ASCII;
function randomWord(randomFlag, min, max) {
    if (randomFlag === void 0) { randomFlag = true; }
    if (min === void 0) { min = 20; }
    if (max === void 0) { max = 32; }
    var str = "", range = min, arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    if (randomFlag) {
        range = Math.round(Math.random() * (max - min)) + min;
    }
    for (var i = 0; i < range; i++) {
        var pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
    }
    return str;
}
exports.randomWord = randomWord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUE2QztBQUc3QyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtBQUMzQyxJQUFNLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQztJQUMzQixHQUFHLEVBQUUsbUJBQVU7Q0FDaEIsQ0FBQyxDQUFBO0FBRVcsUUFBQSxVQUFVLEdBQUcsVUFBQyxJQUFVO0lBQ25DLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUMvQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ2pDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUMxQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDNUIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ2hDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUVoQyxPQUFPLENBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFHLENBQUMsQ0FBQTtBQUNwSCxDQUFDLENBQUE7QUFFRCxJQUFNLFlBQVksR0FBRyxVQUFDLENBQVM7SUFDN0IsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ3RCLE9BQU8sQ0FBQyxDQUFD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RUFBQSxRQUFnQjtJQUN2RixJQUFJLEdBQUcsR0FBRyxFQUFFLEVBQ1YsS0FBSyxHQUFHLEdBQUcsRUFDWCxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFHL1QsSUFBSSxVQUFVLEVBQUU7UUFDZCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7S0FDdkQ7SUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzlCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakI7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFkRCxnQ0FjQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBUWF9NQVBfS0VZIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZydcclxuaW1wb3J0IHsgUmVxdWVzdFByb21pc2UgfSBmcm9tICcuLi90eXBlcy9odHRwJ1xyXG5cclxuY29uc3QgUVFNYXBXWCA9IHJlcXVpcmUoJy4vcXFtYXAtd3gtanNzZGsnKVxyXG5jb25zdCBxcW1hcHNkayA9IG5ldyBRUU1hcFdYKHtcclxuICBrZXk6IFRYX01BUF9LRVlcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRUaW1lID0gKGRhdGU6IERhdGUpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcclxuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKVxyXG4gIGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKClcclxuICBjb25zdCBtaW51dGUgPSBkYXRlLmdldE1pbnV0ZXMoKVxyXG4gIGNvbnN0IHNlY29uZCA9IGRhdGUuZ2V0U2Vjb25kcygpXHJcblxyXG4gIHJldHVybiAoYCR7W3llYXIsIG1vbnRoLCBkYXldLm1hcChmb3JtYXROdW1iZXIpLmpvaW4oJy8nKX0gJHtbaG91ciwgbWludXRlLCBzZWNvbmRdLm1hcChmb3JtYXROdW1iZXIpLmpvaW4oJzonKX1gKVxyXG59XHJcblxyXG5jb25zdCBmb3JtYXROdW1iZXIgPSAobjogbnVtYmVyKSA9PiB7XHJcbiAgY29uc3QgcyA9IG4udG9TdHJpbmcoKVxyXG4gIHJldHVybiBzWzFdID8gcyA6ICcwJyArIHNcclxufVxyXG5cclxuLyoqXHJcbiAqIOagueaNruWIhumSn+aVsOiuoeeul+aXtuWIhuWQhOiHqueahOaVsOmHj1xyXG4gKiBAcGFyYW0ge051bWJlcn0gbSBcclxuICovXHJcbmV4cG9ydCBjb25zdCBjb21wdXRlZE1pbnV0ZSA9IChtOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gIHJldHVybiBgJHtNYXRoLmZsb29yKG0gLyA2MCl95bCP5pe2JHttICUgNjB95YiG6ZKfYFxyXG59XHJcblxyXG4vKipcclxuICog5qC85byP5YyW6YeR6aKdXHJcbiAqIEBwYXJhbSBzdHJEYXRhIFxyXG4gKiBAcGFyYW0gbiDkv53nlZnlh6DkvY3lsI/mlbBcclxuICovXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRNb25leSA9IChudW1iZXI6IHN0cmluZywgbj86IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgdmFyIEN1cnJlbmN5QW5kQW1vdW50UmVnRXhwID0gL14oXFxkezEsMTh9KXwoXFxkezEsMTh9XFwuKXwoXFxkezEsMTd9XFwuXFxkezAsMX0pfChcXGR7MSwxNn1cXC5cXGR7MCwyfSl8KFxcLlxcZHsxLDJ9KSQvO1xyXG4gIHZhciBfcmVzdWx0ID0gQ3VycmVuY3lBbmRBbW91bnRSZWdFeHAudGVzdChudW1iZXIpO1xyXG4gIGlmIChfcmVzdWx0ID09IGZhbHNlKSB7XHJcbiAgICByZXR1cm4gbnVtYmVyO1xyXG4gIH1cclxuICAvLyDkuIDoiKzmnaXor7TmnIDlpJrlsLE25L2N5ZCn77yM5b2T54S25aaC5p6c5pyJ54m55q6K6ZyA5rGC5Y+v6Ieq6KGM5pu05pS5KO+9gOODu+KIgOODu8K0KVxyXG4gIG4gPSA8bnVtYmVyPm4gPiAwICYmIDxudW1iZXI+biA8PSA2ID8gbiA6IDI7XHJcbiAgdmFyIGZvcm1hdERhdGEgPSBwYXJzZUZsb2F0KChudW1iZXIgKyAnJykucmVwbGFjZSgvW15cXGRcXC4tXS9nLCAnJykpLnRvRml4ZWQoPG51bWJlcj5uKSArICcnO1xyXG4gIHZhciBsID0gZm9ybWF0RGF0YS5zcGxpdCgnLicpWzBdLnNwbGl0KCcnKS5yZXZlcnNlKCk7XHJcbiAgdmFyIHIgPSBmb3JtYXREYXRhLnNwbGl0KCcuJylbMV07XHJcbiAgdmFyIHQgPSAnJztcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGwubGVuZ3RoOyBpKyspIHtcclxuICAgIHQgKz0gbFtpXSArICgoaSArIDEpICUgMyA9PSAwICYmIChpICsgMSkgIT0gbC5sZW5ndGggPyAnLCcgOiAnJyk7XHJcbiAgfVxyXG4gIHJldHVybiB0LnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJykgKyAnLicgKyByO1xyXG59XHJcblxyXG4vKipcclxuICog5qC55o2u5pe26Ze05oiz6L2s5YyW5oiQIHl5eS1NTS1kZCBoaDptbTpzcyDmoLzlvI9cclxuICogQHBhcmFtIHtOdW1iZXJ9IHRpbWUgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9ICh0aW1lOiBzdHJpbmcsIHNpZ24/OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIHNpZ24gPSBzaWduID8gc2lnbiA6ICctJ1xyXG4gIGNvbnN0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZSh0aW1lKTsgLy8g5Yid5aeL5YyW5pel5pyfXHJcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTsgLy/ojrflj5blubTku71cclxuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7IC8vIOiOt+WPluaciOS7vVxyXG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpOyAvLyDojrflj5blhbfkvZPml6VcclxuICBjb25zdCBob3VyID0gZGF0ZS5nZXRIb3VycygpOyAvLyDojrflj5bml7ZcclxuICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7IC8vIOiOt+WPluWIhlxyXG4gIGNvbnN0IHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKTsgLy8g6I635Y+W56eSXHJcbiAgcmV0dXJuIGAke3llYXJ9JHtzaWdufSR7bW9udGggPCAxMCA/ICcwJyArIG1vbnRoIDogbW9udGh9JHtzaWdufSR7ZGF5IDwgMTAgPyAnMCcgKyBkYXkgOiBkYXl9ICR7aG91ciA8IDEwID8gJzAnICsgaG91ciA6IGhvdXJ9OiR7bWludXRlcyA8IDEwID8gJzAnICsgbWludXRlcyA6IG1pbnV0ZXN9OiR7c2Vjb25kcyA8IDEwID8gJzAnICsgc2Vjb25kcyA6IHNlY29uZHN9YFxyXG59XHJcblxyXG4vKipcclxuICog5qC55o2u5pe26Ze05oiz6L2s5YyW5oiQIGhoOnNzIOagvOW8j1xyXG4gKiBAcGFyYW0ge051bWJlcn0gdGltZSBcclxuICovXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRNaW51dGUgPSAodGltZTogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBkYXRlOiBEYXRlID0gbmV3IERhdGUodGltZSk7IC8vIOWIneWni+WMluaXpeacn1xyXG4gIGxldCBob3VyOiBzdHJpbmcgfCBudW1iZXIgPSBkYXRlLmdldEhvdXJzKCk7IC8vIOiOt+WPluaXtlxyXG4gIGxldCBtaW51dGVzOiBzdHJpbmcgfCBudW1iZXIgPSBkYXRlLmdldE1pbnV0ZXMoKTsgLy8g6I635Y+W5YiGXHJcblxyXG4gIGhvdXIgPSBob3VyIDwgMTAgPyBgMCR7aG91cn1gIDogYCR7aG91cn1gXHJcbiAgbWludXRlcyA9IG1pbnV0ZXMgPCAxMCA/IGAwJHttaW51dGVzfWAgOiBtaW51dGVzXHJcblxyXG4gIHJldHVybiBgJHtob3VyfToke21pbnV0ZXN9YFxyXG59XHJcblxyXG4vKipcclxuICog5bCGaGg6bW3ovazljJbmiJDlvZPliY3ml7bpl7TnmoQgeXl5eS9NTS9kZCBoaDptbTpzcyDmoLzlvI9cclxuICogQHBhcmFtIHRpbWUgaGg6bW1cclxuICovXHJcbmV4cG9ydCBjb25zdCBmb3JtbWF0RGF0ZSA9ICh0aW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTsgLy/ojrflj5blubTku71cclxuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7IC8vIOiOt+WPluaciOS7vVxyXG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpOyAvLyDojrflj5blhbfkvZPml6VcclxuICByZXR1cm4gYCR7eWVhcn0vJHttb250aH0vJHtkYXl9ICR7dGltZX06MDBgXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmlbDmja7lr7nosaHjgIHmlbDnu4TmmK/lkKbkuLrnqbpcclxuICogQHBhcmFtIHtBbnl9IG8g5Yik5pat5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IChvOiBhbnkpOiBib29sZWFuID0+IHtcclxuICBsZXQgYm9sOiBib29sZWFuID0gZmFsc2VcclxuICBpZiAobyBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKG8pLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBib2wgPSB0cnVlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBib2wgPSBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAobyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICBpZiAoby5sZW5ndGggPT0gMCkge1xyXG4gICAgICBib2wgPSB0cnVlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBib2wgPSBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYm9sXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmibnph4/lgqjlrZjmk43kvZxcclxuICogQHBhcmFtIHtBcnJheX0gb2JqcyDmj5LlhaXlr7nosaHpm4blkIhcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRTdG9yYWdlcyA9IChvYmpzOiBhbnkpOiB2b2lkID0+IHtcclxuICBmb3IgKGxldCBrZXkgaW4gb2Jqcykge1xyXG4gICAgd3guc2V0U3RvcmFnZVN5bmMoa2V5LCBvYmpzW2tleV0pXHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIOagueaNruaXtumXtOaIs+i9rOWMluaIkHl5eS5tbS5kZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdGltZSBcclxuICovXHJcbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlcyA9ICh0aW1lOiBudW1iZXIsIHNpZ24/OiBhbnkpOiBzdHJpbmcgPT4ge1xyXG4gIHNpZ24gPSBzaWduID8gc2lnbiA6ICcuJ1xyXG4gIHZhciBkYXRlID0gbmV3IERhdGUodGltZSk7IC8vIOWIneWni+WMluaXpeacn1xyXG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpOyAvL+iOt+WPluW5tOS7vVxyXG4gIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7IC8vIOiOt+WPluaciOS7vVxyXG4gIHZhciBkYXkgPSBkYXRlLmdldERhdGUoKTsgLy8g6I635Y+W5YW35L2T5pelXHJcbiAgcmV0dXJuIGAke3llYXJ9JHtzaWdufSR7bW9udGggPCAxMCA/ICcwJyArIG1vbnRoIDogbW9udGh9JHtzaWdufSR7ZGF5IDwgMTAgPyAnMCcgKyBkYXkgOiBkYXl9YFxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W6Ieq5a6a5LmJ57uR5a6a5pWw5o2uXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBlICDoioLngrnlr7nosaEgXHJcbiAqIEBwYXJhbSB7Kn0gbmFtZSAg6Ieq5a6a5LmJ6ZSu5YC8XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0U2V0RGF0YUN1cnJlbnQgPSAoZTogYW55LCBuYW1lOiBzdHJpbmcpOiBhbnkgPT4ge1xyXG4gIHJldHVybiBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFtuYW1lXVxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+WQVBJ5Zyw5Z2A5Lit55qE5Y+C5pWw5YC8XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0UGFyYW0gPSAodXJsOiBzdHJpbmcsIGtleTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCA9PiB7XHJcbiAgaWYgKHVybC5pbmRleE9mKCc/JykgIT09IC0xKSB7XHJcbiAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChcIihefCYpXCIgKyBrZXkgKyBcIj0oW14mXSopKCZ8JClcIik7XHJcbiAgICB2YXIgciA9IHVybC5zcGxpdCgnPycpWzFdLm1hdGNoKHJlZyk7XHJcbiAgICBpZiAociAhPSBudWxsKSByZXR1cm4gdW5lc2NhcGUoclsyXSk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmoLnmja7ml6XmnJ/ml7bpl7TorqHnrpfml7bpl7TmiLNcclxuICogQHBhcmFtIHtEYXRlfX0gdCBcclxuICog54m55Yir5rOo5oSP77yaIElPU+WPquivhuWIq3l5eXkvbW0vZGQgMDA6MDA6MDDml7bpl7TmoLzlvI/ovazljJbnmoTml7bpl7TmiLMs5LiN6K+G5YireXl5eS1tbS1kZCAwMDowMDowMOaXtumXtOagvOW8j+i9rOaNoueahOaXtumXtCog55qE5oiz77yM5omA5Lul6KaB6L+b6KGM6L2s5o2i5pe26Ze05qC85byPXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0VGltZSA9ICh0OiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIgPT4ge1xyXG4gIGxldCBkYXRlID0gbmV3IERhdGUodClcclxuICByZXR1cm4gZGF0ZS5nZXRUaW1lKClcclxufVxyXG5cclxuLyoqXHJcbiAqIOe8luivkeaYn+acn1xyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnIg5pif5pyf5pWw57uEIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlcGVhdERlc2MgPSAoYXJyOiBBcnJheTxhbnk+KTogYW55ID0+IHtcclxuICBhcnIgPSBhcnIubWFwKGl0ZW0gPT4ge1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KGl0ZW0pXHJcbiAgfSlcclxuICBpZiAoYXJyLmxlbmd0aCA9PSAyKSB7XHJcbiAgICBpZiAoYXJyLmluZGV4T2YoNikgIT0gLTEgJiYgYXJyLmluZGV4T2YoNykgIT0gLTEpIHtcclxuICAgICAgcmV0dXJuICfmr4/lkajmnKsnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gX3dlZWsoYXJyKVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoYXJyLmxlbmd0aCA9PSA1KSB7XHJcbiAgICBpZiAoYXJyLmluZGV4T2YoMSkgIT0gLTEgJiYgYXJyLmluZGV4T2YoMikgIT0gLTEgJiYgYXJyLmluZGV4T2YoMykgIT0gLTEgJiYgYXJyLmluZGV4T2YoNCkgIT0gLTEgJiYgYXJyLmluZGV4T2YoNSkgIT0gLTEpIHtcclxuICAgICAgcmV0dXJuICfmr4/lkajkuIDliLDlkajkupQnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gX3dlZWsoYXJyKVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoYXJyLmxlbmd0aCA9PSA3KSB7XHJcbiAgICByZXR1cm4gJ+avj+WkqSdcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIF93ZWVrKGFycilcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IF93ZWVrID0gKGFycjogYW55KTogc3RyaW5nID0+IHtcclxuICBsZXQgd2VlayA9IFtdXHJcbiAgaWYgKGFyci5sZW5ndGggPiAwKSB7XHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIGFycikge1xyXG4gICAgICBsZXQgdCA9ICcnXHJcbiAgICAgIHN3aXRjaCAocGFyc2VJbnQoaXRlbSkpIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB0ID0gJ+S4gCdcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIHQgPSAn5LqMJ1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgdCA9ICfkuIknXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICB0ID0gJ+WbmydcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgIHQgPSAn5LqUJ1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgdCA9ICflha0nXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICB0ID0gJ+aXpSdcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHdlZWsucHVzaCh0KVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYOavj+WRqCAke3dlZWsuam9pbign44CBJyl9YFxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5p+Q5Liq5pe26Ze05piv5ZCm5Zyo57uZ5Ye655qE5Yy66Ze05YaFXHJcbiAqIEBwYXJhbSB7RGF0ZX0gdGltZSDnm67moIfml7bpl7Qg5qC85byPeXl5eS9tbS9kZCBoaDptbTpzcyDmiJYgeXl5eS1tbS1kZCBoaDptbTpzc1xyXG4gKiBAcGFyYW0ge0FycmF5fSBzZWN0aW9uIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbnRyYXN0VGltZSA9ICh0aW1lOiBudW1iZXIsIHNlY3Rpb246IG51bWJlcltdKTogYm9vbGVhbiA9PiB7XHJcbiAgY29uc3QgZW5kID0gZm9ybWF0TWludXRlKHNlY3Rpb25bMV0pXHJcbiAgY29uc3QgYmVnaW4gPSBmb3JtYXRNaW51dGUoc2VjdGlvblswXSlcclxuICBjb25zdCBub3cgPSBmb3JtYXRNaW51dGUodGltZSlcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gIGNvbnN0IGIgPSBfdG9OdW1iZXIoYmVnaW4uc3BsaXQoJzonKSlcclxuICBjb25zdCBuID0gX3RvTnVtYmVyKG5vdy5zcGxpdCgnOicpKVxyXG4gIGNvbnN0IGUgPSBfdG9OdW1iZXIoZW5kLnNwbGl0KCc6JykpXHJcbiAgY29uc3QgYjEgPSBkYXRlLnNldEhvdXJzKGJbMF0sIGJbMV0pXHJcbiAgY29uc3QgbjEgPSBkYXRlLnNldEhvdXJzKG5bMF0sIG5bMV0pXHJcbiAgY29uc3QgZTEgPSBkYXRlLnNldEhvdXJzKGVbMF0sIGVbMV0pXHJcbiAgbGV0IHRlbXAgPSBmYWxzZVxyXG4gIGlmIChuMSA+IGIxICYmIG4xIDwgZTEpIHtcclxuICAgIHRlbXAgPSB0cnVlXHJcbiAgfSBlbHNlIHtcclxuICAgIHRlbXAgPSBmYWxzZVxyXG4gIH1cclxuICByZXR1cm4gdGVtcFxyXG59XHJcblxyXG5mdW5jdGlvbiBfdG9OdW1iZXIoYXJyOiBhbnkpIHtcclxuICBsZXQgdGVtcDogbnVtYmVyW10gPSBbXVxyXG4gIGZvciAobGV0IGkgb2YgYXJyKSB7XHJcbiAgICB0ZW1wLnB1c2gocGFyc2VJbnQoaSkpXHJcbiAgfVxyXG4gIHJldHVybiB0ZW1wXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsIZoaDpzc+i9rOaNouaIkOaXtumXtOaIs1xyXG4gKiBAcGFyYW0ge1N0cmluZ30gZGF0ZSDml7bpl7TmoLzlvI8gaGg6c3MgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZm9ybWF0VGltZVN0YW1wID0gKGhtOiBzdHJpbmcpOiBudW1iZXIgPT4ge1xyXG4gIHZhciBkYXRlID0gbmV3IERhdGUoKTsgLy8g5Yid5aeL5YyW5pel5pyfXHJcbiAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7IC8v6I635Y+W5bm05Lu9XHJcbiAgdmFyIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTsgLy8g6I635Y+W5pyI5Lu9XHJcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF0ZSgpOyAvLyDojrflj5blhbfkvZPml6VcclxuICByZXR1cm4gZ2V0VGltZShgJHt5ZWFyfS8ke21vbnRofS8ke2RheX0gJHtobX06MDBgKVxyXG59XHJcblxyXG4vKipcclxuICog5ZCR5pWw57uE5Lit56m655m95aSE6aG65bqP5re75Yqg5YWD57SgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFyciBcclxuICogQHBhcmFtIHthbnl9IG4gXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaW5zZXJ0QXJyYXkgPSAoYXJyOiBzdHJpbmdbXSwgbjogc3RyaW5nKTogYW55W10gPT4ge1xyXG4gIGlmIChuICE9PSAnJykge1xyXG4gICAgZm9yIChsZXQgaSBpbiBhcnIpIHtcclxuICAgICAgaWYgKGFycltpXSA9PT0gJycpIHtcclxuICAgICAgICBhcnJbaV0gPSBuXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYXJyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmraPliJnmj5Dlj5blnLDlnYDkuK3nmoTnnIHluILljLpcclxuICogQHBhcmFtIHtTdHJpbmd9IGFkZHJlc3Mg5Zyw5Z2AXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZXh0cmFjdFByb0NpdHlDb2RlID0gKGFkZHJlc3M6IHsgbWF0Y2g6IChhcmcwOiBSZWdFeHApID0+IGFueVtdIH0pOiBPYmplY3QgPT4ge1xyXG4gIGNvbnN0IHJlZyA9IC8uKz8o55yBfOW4gnzoh6rmsrvljLp86Ieq5rK75beefOWOv3zljLopL2dcclxuICBsZXQgYWRzID0gYWRkcmVzcy5tYXRjaChyZWcpLmxlbmd0aCA9PSAyID8gW2FkZHJlc3MubWF0Y2gocmVnKVswXSwgLi4uYWRkcmVzcy5tYXRjaChyZWcpXSA6IGFkZHJlc3MubWF0Y2gocmVnKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm92aW5jZTogYWRzWzBdLFxyXG4gICAgY2l0eTogYWRzWzFdLFxyXG4gICAgYXJlYTogYWRzWzJdXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5Zyw5Z2A5L+h5oGvXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0RGlzdGFuY2UgPSAoZm9ybTogYW55LCB0bzogYW55KTogUmVxdWVzdFByb21pc2UgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuICAgIHFxbWFwc2RrLmNhbGN1bGF0ZURpc3RhbmNlKHtcclxuICAgICAgZm9ybSxcclxuICAgICAgdG8sXHJcbiAgICAgIG1vZGU6ICdkcml2aW5nJyxcclxuICAgICAgc3VjY2VzczogKHJlczogeyBzdGF0dXM6IG51bWJlcjsgcmVzdWx0OiB7IGVsZW1lbnRzOiB7IGRpc3RhbmNlOiBhbnkgfVtdIH0gfSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09IDApIHtcclxuICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICBjb2RlOiAyMDAsXHJcbiAgICAgICAgICAgIGRhdGE6IF9raWxvbWV0cmUocmVzLnJlc3VsdC5lbGVtZW50c1swXS5kaXN0YW5jZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IF9raWxvbWV0cmUgPSAobWV0ZXJzOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gIGlmIChtZXRlcnMgPiA5OTkpIHtcclxuICAgIHJldHVybiBgJHttZXRlcnMgLyAxMDAwfeWFrOmHjGBcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGAke21ldGVyc33nsbNgXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuS4ukRhdGXnsbvlnotcclxuICogQHBhcmFtIHZhbCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUodmFsOiBhbnkpOiB2YWwgaXMgRGF0ZSB7XHJcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mmK/pg73kuLpPYmplY3TnsbvlnotcclxuICogQHBhcmFtIHZhbCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWw6IGFueSk6IHZhbCBpcyBPYmplY3Qge1xyXG4gIHJldHVybiB2YWwgIT09ICdudWxsJyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0J1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWw6IGFueSk6IHZhbCBpcyBPYmplY3Qge1xyXG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IE9iamVjdF0nXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQ8VCwgVT4odG86IFQsIGZyb206IFUpOiBUICYgVSB7XHJcbiAgZm9yIChjb25zdCBrZXkgaW4gZnJvbSkge1xyXG4gICAgOyAoPFQgJiBVPnRvKVtrZXldID0gPGFueT5mcm9tW2tleV1cclxuICB9XHJcbiAgcmV0dXJuIDxUICYgVT50b1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbmNvZGUodmFsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKVxyXG4gICAgLnJlcGxhY2UoLyU0MC9nLCAnQCcpXHJcbiAgICAucmVwbGFjZSgvJTNBL2lnLCAnOicpXHJcbiAgICAucmVwbGFjZSgvJTI0L2csICckJylcclxuICAgIC5yZXBsYWNlKC8lMkMvaWcsICcsJylcclxuICAgIC5yZXBsYWNlKC8lMjAvZywgJysnKVxyXG4gICAgLnJlcGxhY2UoLyU1Qi9pZywgJ1snKVxyXG4gICAgLnJlcGxhY2UoLyU1RC9pZywgJ10nKVxyXG59XHJcblxyXG4vKipcclxuICogdXJs5Y+C5pWw5aSE55CGXHJcbiAqIEBwYXJhbSB1cmwgQVBJ5Zyw5Z2AXHJcbiAqIEBwYXJhbSBwYXJhbXMg5Lyg5YWl5Y+C5pWwXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRVUkwodXJsOiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IHN0cmluZyB7XHJcblxyXG4gIGlmICghcGFyYW1zKSB7XHJcbiAgICByZXR1cm4gdXJsXHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJ0czogc3RyaW5nW10gPSBbXVxyXG5cclxuICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcclxuXHJcbiAgICBjb25zdCB2YWwgPSBwYXJhbXNba2V5XVxyXG5cclxuICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHZhbHVlcyA9IFtdXHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xyXG4gICAgICB2YWx1ZXMgPSB2YWxcclxuICAgICAga2V5ICs9ICdbXSdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbHVlcyA9IFt2YWxdXHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWVzLmZvckVhY2godmFsID0+IHtcclxuICAgICAgaWYgKGlzRGF0ZSh2YWwpKSB7XHJcbiAgICAgICAgdmFsID0gdmFsLnRvSVNPU3RyaW5nKClcclxuICAgICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbCkpIHtcclxuICAgICAgICB2YWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpXHJcbiAgICAgIH1cclxuICAgICAgcGFydHMucHVzaChgJHtlbmNvZGUoa2V5KX09JHtlbmNvZGUodmFsKX1gKVxyXG4gICAgfSlcclxuXHJcbiAgfSlcclxuXHJcbiAgbGV0IHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJylcclxuXHJcbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcclxuICAgIGNvbnN0IG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJylcclxuICAgIGlmIChtYXJrSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBtYXJrSW5kZXgpXHJcbiAgICB9XHJcbiAgICB1cmwgPSBgJHt1cmx9JHt1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJ30ke3NlcmlhbGl6ZWRQYXJhbXN9YFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHVybFxyXG59XHJcblxyXG4vKipcclxuICog5Ymp5L2Z5aSp5pWwXHJcbiAqIEBwYXJhbSBkYXRlIOaXtumXtOagvOW8jzp5eXl5LW1tLWRkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGF5c1JlbWFpbihkYXRlOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gIGRhdGUgPSBkYXRlLnNwbGl0KCcgJylbMF1cclxuICBjb25zdCBzMiA9IG5ldyBEYXRlKGRhdGUucmVwbGFjZSgvLS9nLCBcIi9cIikpO1xyXG4gIGNvbnN0IHMxID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBkYXlzID0gczIuZ2V0VGltZSgpIC0gczEuZ2V0VGltZSgpO1xyXG4gIGNvbnN0IHRpbWUgPSBwYXJzZUludCg8YW55PihkYXlzIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKSk7XHJcbiAgcmV0dXJuIHRpbWUgKyAxXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlrZfnrKbkuLLluKblrZfmr43mnInluo/mjpLliJdcclxuICogQHBhcmFtIHN0ciDnm67moIflrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0UnVscyhzdHI6IGFueSk6IGFueSB7XHJcbiAgbGV0IHJlc3VsdCA9IHN0ci5zcGxpdCgvW2EtekEtWl1cXC4vZylcclxuICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKChlbGVtZW50OiBhbnkpID0+IHtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9KVxyXG4gIGNvbnN0IGtleXMgPSBzdHIubWF0Y2goL1thLXpBLVpdXFwuL2cpXHJcbiAgbGV0IHJ1bHM6IHN0cmluZ1tdID0gW11cclxuXHJcbiAgZm9yIChsZXQgaSBpbiByZXN1bHQpIHtcclxuICAgIGlmIChyZXN1bHRbaV0pIHtcclxuICAgICAgY29uc3Qga2V5ID0gcmVzdWx0W2ldLm1hdGNoKC9cXHcuLylcclxuICAgICAgY29uc3QgdmFsID0gcmVzdWx0W2ldLnJlcGxhY2UoL1xcdy4vLCAnJylcclxuICAgICAgcnVscy5wdXNoKGAke2tleXNbaV19ICR7a2V5fSR7dmFsfWApXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBydWxzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpppblrZfmr41hc2NpaeaOkuW6j1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRfQVNDSUkob2JqOiB7IFt4OiBzdHJpbmddOiBhbnkgfSk6IGFueSB7XHJcbiAgdmFyIGFyciA9IG5ldyBBcnJheSgpO1xyXG4gIHZhciBudW0gPSAwO1xyXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XHJcbiAgICBhcnJbbnVtXSA9IGk7XHJcbiAgICBudW0rKztcclxuICB9XHJcbiAgdmFyIHNvcnRBcnIgPSBhcnIuc29ydCgpO1xyXG4gIHZhciBzb3J0T2JqID0ge30gYXMgYW55O1xyXG4gIGZvciAodmFyIGkgaW4gc29ydEFycikge1xyXG4gICAgc29ydE9ialtzb3J0QXJyW2ldXSA9IG9ialtzb3J0QXJyW2ldXTtcclxuICB9XHJcbiAgcmV0dXJuIHNvcnRPYmo7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnlJ/miJDpmo/mnLrlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21Xb3JkKHJhbmRvbUZsYWc6IGJvb2xlYW4gPSB0cnVlLCBtaW46IG51bWJlciA9IDIwLCBtYXg6IG51bWJlciA9IDMyKSB7XHJcbiAgdmFyIHN0ciA9IFwiXCIsXHJcbiAgICByYW5nZSA9IG1pbixcclxuICAgIGFyciA9IFsnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICdhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnLCAnaScsICdqJywgJ2snLCAnbCcsICdtJywgJ24nLCAnbycsICdwJywgJ3EnLCAncicsICdzJywgJ3QnLCAndScsICd2JywgJ3cnLCAneCcsICd5JywgJ3onLCAnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSicsICdLJywgJ0wnLCAnTScsICdOJywgJ08nLCAnUCcsICdRJywgJ1InLCAnUycsICdUJywgJ1UnLCAnVicsICdXJywgJ1gnLCAnWScsICdaJ107XHJcblxyXG4gIC8vIOmaj+acuuS6p+eUn1xyXG4gIGlmIChyYW5kb21GbGFnKSB7XHJcbiAgICByYW5nZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcclxuICB9XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByYW5nZTsgaSsrKSB7XHJcbiAgICBjb25zdCBwb3MgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoYXJyLmxlbmd0aCAtIDEpKTtcclxuICAgIHN0ciArPSBhcnJbcG9zXTtcclxuICB9XHJcbiAgcmV0dXJuIHN0cjtcclxufSJdfQ==