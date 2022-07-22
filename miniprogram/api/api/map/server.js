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
var config_1 = require("../../../config/config");
var GDMapWX = require('../../../utils/amap-wx');
var gdmapsdk = new GDMapWX.AMapWX({ key: config_1.GD_MAP_KEY });
var QQMapWX = require('../../../utils/qqmap-wx-jssdk');
var qqmapsdk = new QQMapWX({ key: config_1.TX_MAP_KEY });
var MapServer = (function () {
    function MapServer() {
    }
    MapServer.prototype.searchAddress = function (data) {
        var city = data.city, keywords = data.keywords, location = data.location;
        return new Promise(function (resolve) {
            gdmapsdk.getInputtips({
                city: city,
                keywords: keywords,
                location: location,
                success: function (data) {
                    if (data && data.tips) {
                        if (data.tips.length > 0) {
                            var tips = data.tips;
                            tips = tips.filter(function (element) {
                                if (typeof element.id === 'string') {
                                    return true;
                                }
                                return false;
                            });
                            resolve({ data: tips });
                        }
                    }
                }
            });
        });
    };
    MapServer.prototype.getDistance = function (data) {
        var from = data.from, to = data.to;
        return new Promise(function (resolve) {
            qqmapsdk.calculateDistance({
                from: from,
                to: to,
                mode: 'driving',
                success: function (res) {
                    if (res.status == 0) {
                        resolve({
                            code: 200,
                            result: res.result.elements
                        });
                    }
                }
            });
        });
    };
    MapServer.prototype.getAddress = function (param) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var data, to, from, _i, data_1, element, result, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.searchAddress(param)];
                    case 1:
                        data = (_a.sent()).data;
                        to = [];
                        from = param.from;
                        for (_i = 0, data_1 = data; _i < data_1.length; _i++) {
                            element = data_1[_i];
                            to.push({
                                latitude: element.location.split(',')[1],
                                longitude: element.location.split(',')[0]
                            });
                        }
                        return [4, this.getDistance({ from: from, to: to })];
                    case 2:
                        result = (_a.sent()).result;
                        for (i in data) {
                            data[i].distance = _kilometre(result[i].distance);
                        }
                        resolve({ data: data });
                        return [2];
                }
            });
        }); });
    };
    return MapServer;
}());
exports.default = MapServer;
var _kilometre = function (meters) {
    if (meters > 999) {
        meters = meters / 1000;
        return meters.toFixed(2) + " km";
    }
    else {
        return meters + " m";
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaURBQStEO0FBRy9ELElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQ2pELElBQU0sUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxtQkFBVSxFQUFFLENBQUMsQ0FBQTtBQUd4RCxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQTtBQUN4RCxJQUFNLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxtQkFBVSxFQUFFLENBQUMsQ0FBQTtBQVFqRDtJQUFBO0lBNkVBLENBQUM7SUF4RUcsaUNBQWEsR0FBYixVQUFjLElBQWlEO1FBQ3JELElBQUEsSUFBSSxHQUF5QixJQUFJLEtBQTdCLEVBQUUsUUFBUSxHQUFlLElBQUksU0FBbkIsRUFBRSxRQUFRLEdBQUssSUFBSSxTQUFULENBQVM7UUFDdkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDdEIsUUFBUSxDQUFDLFlBQVksQ0FBQztnQkFDbEIsSUFBSSxNQUFBO2dCQUNKLFFBQVEsVUFBQTtnQkFDUixRQUFRLFVBQUE7Z0JBQ1IsT0FBTyxFQUFFLFVBQUMsSUFBbUI7b0JBQ3pCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ25CLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzRCQUNoQixJQUFBLElBQUksR0FBSyxJQUFJLEtBQVQsQ0FBUzs0QkFDbkIsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxPQUFvQjtnQ0FDcEMsSUFBSSxPQUFPLE9BQU8sQ0FBQyxFQUFFLEtBQUssUUFBUSxFQUFFO29DQUNoQyxPQUFPLElBQUksQ0FBQTtpQ0FDZDtnQ0FDRCxPQUFPLEtBQUssQ0FBQTs0QkFDaEIsQ0FBQyxDQUFDLENBQUE7NEJBQ0YsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7eUJBQzFCO3FCQUNKO2dCQUNMLENBQUM7YUFDSixDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFPRCwrQkFBVyxHQUFYLFVBQVksSUFBNEI7UUFDOUIsSUFBQSxJQUFJLEdBQVMsSUFBSSxLQUFiLEVBQUUsRUFBRSxHQUFLLElBQUksR0FBVCxDQUFTO1FBQ3ZCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3RCLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDdkIsSUFBSSxNQUFBO2dCQUNKLEVBQUUsSUFBQTtnQkFDRixJQUFJLEVBQUUsU0FBUztnQkFDZixPQUFPLEVBQUUsVUFBQyxHQUFrRDtvQkFDeEQsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTt3QkFDakIsT0FBTyxDQUFDOzRCQUNKLElBQUksRUFBRSxHQUFHOzRCQUNULE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVE7eUJBQzlCLENBQUMsQ0FBQTtxQkFDTDtnQkFDTCxDQUFDO2FBQ0osQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBTUQsOEJBQVUsR0FBVixVQUFXLEtBQVM7UUFBcEIsaUJBaUJDO1FBaEJHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBTSxPQUFPOzs7OzRCQUNiLFdBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQXhDLElBQUksR0FBSyxDQUFBLFNBQStCLENBQUEsS0FBcEM7d0JBQ04sRUFBRSxHQUFHLEVBQUUsQ0FBQTt3QkFDTCxJQUFJLEdBQUssS0FBSyxLQUFWLENBQVU7d0JBQ3BCLFdBQXdCLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSSxFQUFFOzRCQUFqQixPQUFPOzRCQUNaLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0NBQ0osUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDeEMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs2QkFDNUMsQ0FBQyxDQUFBO3lCQUNMO3dCQUNrQixXQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxFQUFFLElBQUEsRUFBRSxDQUFDLEVBQUE7O3dCQUEvQyxNQUFNLEdBQUssQ0FBQSxTQUFvQyxDQUFBLE9BQXpDO3dCQUNkLEtBQVMsQ0FBQyxJQUFJLElBQUksRUFBRTs0QkFDaEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBO3lCQUNwRDt3QkFDRCxPQUFPLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLENBQUE7Ozs7YUFDcEIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVMLGdCQUFDO0FBQUQsQ0FBQyxBQTdFRCxJQTZFQzs7QUFNRCxJQUFNLFVBQVUsR0FBRyxVQUFDLE1BQWM7SUFDOUIsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFO1FBQ2QsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDdEIsT0FBVSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFLLENBQUE7S0FDbkM7U0FBTTtRQUNILE9BQVUsTUFBTSxPQUFJLENBQUE7S0FDdkI7QUFDTCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDlr7zlhaXphY3nva7mlofku7YgKi9cclxuaW1wb3J0IHsgR0RfTUFQX0tFWSwgVFhfTUFQX0tFWSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jb25maWcnXHJcblxyXG4vKiDliJ3lp4vljJbpq5jlvrflnLDlm74gKi9cclxuY29uc3QgR0RNYXBXWCA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxzL2FtYXAtd3gnKVxyXG5jb25zdCBnZG1hcHNkayA9IG5ldyBHRE1hcFdYLkFNYXBXWCh7IGtleTogR0RfTUFQX0tFWSB9KVxyXG5cclxuLyog5Yid5aeL5YyW6IW+6K6v5Zyw5Zu+ICovXHJcbmNvbnN0IFFRTWFwV1ggPSByZXF1aXJlKCcuLi8uLi8uLi91dGlscy9xcW1hcC13eC1qc3NkaycpXHJcbmNvbnN0IHFxbWFwc2RrID0gbmV3IFFRTWFwV1goeyBrZXk6IFRYX01BUF9LRVkgfSlcclxuXHJcbmltcG9ydCB7UmVxdWVzdFByb21pc2V9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2h0dHAnXHJcblxyXG5cclxuLyoqXHJcbiAqIOWcsOWbvuaooeWdl1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwU2VydmVyIHtcclxuICAgIC8qKlxyXG4gICAgICog5qC55o2u5o+Q56S66K+N5p+l5om+5Zyw5Z2AXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBcclxuICAgICAqL1xyXG4gICAgc2VhcmNoQWRkcmVzcyhkYXRhOiB7IGNpdHk6IGFueTsga2V5d29yZHM6IGFueTsgbG9jYXRpb246IGFueSB9KTpSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICAgICAgbGV0IHsgY2l0eSwga2V5d29yZHMsIGxvY2F0aW9uIH0gPSBkYXRhXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBnZG1hcHNkay5nZXRJbnB1dHRpcHMoe1xyXG4gICAgICAgICAgICAgICAgY2l0eSxcclxuICAgICAgICAgICAgICAgIGtleXdvcmRzLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoZGF0YTogeyB0aXBzOiBhbnkgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEudGlwcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS50aXBzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB7IHRpcHMgfSA9IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpcHMgPSB0aXBzLmZpbHRlcigoZWxlbWVudDogeyBpZDogYW55IH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQuaWQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhOiB0aXBzIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuoeeul+S4pOS4que7j+e6rOW6pumpvui9pui3neemu1xyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZyb20gXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdG8gXHJcbiAgICAgKi9cclxuICAgIGdldERpc3RhbmNlKGRhdGE6IHsgZnJvbTogYW55OyB0bzogYW55IH0pOlJlcXVlc3RQcm9taXNlIHtcclxuICAgICAgICBsZXQgeyBmcm9tLCB0byB9ID0gZGF0YVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgcXFtYXBzZGsuY2FsY3VsYXRlRGlzdGFuY2Uoe1xyXG4gICAgICAgICAgICAgICAgZnJvbSxcclxuICAgICAgICAgICAgICAgIHRvLFxyXG4gICAgICAgICAgICAgICAgbW9kZTogJ2RyaXZpbmcnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlczogeyBzdGF0dXM6IG51bWJlcjsgcmVzdWx0OiB7IGVsZW1lbnRzOiBhbnkgfSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzLnJlc3VsdC5lbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Zyw5Z2A5bim6KGM6L2m6Led56a7XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0g6K+35rGC5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIGdldEFkZHJlc3MocGFyYW06YW55KTpSZXF1ZXN0UHJvbWlzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLnNlYXJjaEFkZHJlc3MocGFyYW0pXHJcbiAgICAgICAgICAgIGxldCB0byA9IFtdXHJcbiAgICAgICAgICAgIGxldCB7IGZyb20gfSA9IHBhcmFtXHJcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdG8ucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IGVsZW1lbnQubG9jYXRpb24uc3BsaXQoJywnKVsxXSxcclxuICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IGVsZW1lbnQubG9jYXRpb24uc3BsaXQoJywnKVswXVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgdGhpcy5nZXREaXN0YW5jZSh7IGZyb20sIHRvIH0pXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YVtpXS5kaXN0YW5jZSA9IF9raWxvbWV0cmUocmVzdWx0W2ldLmRpc3RhbmNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDovazljJbljYPnsbPmlbBcclxuICogQHBhcmFtIHtOdW1iZXJ9IG1ldGVycyDnsbMgXHJcbiAqL1xyXG5jb25zdCBfa2lsb21ldHJlID0gKG1ldGVyczogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAobWV0ZXJzID4gOTk5KSB7XHJcbiAgICAgICAgbWV0ZXJzID0gbWV0ZXJzIC8gMTAwMFxyXG4gICAgICAgIHJldHVybiBgJHttZXRlcnMudG9GaXhlZCgyKX0ga21gXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBgJHttZXRlcnN9IG1gXHJcbiAgICB9XHJcbn1cclxuIl19