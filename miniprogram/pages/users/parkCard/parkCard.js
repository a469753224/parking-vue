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
var server_1 = require("../../../api/api/coupon/server");
var server = new server_1.default();
Page({
    data: {
        actingUPC: []
    },
    onLoad: function (_options) {
        this.getActingUPC();
    },
    getActingUPC: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, server.getActingUPC()];
                    case 1:
                        result = _a.sent();
                        if (result.code == 0) {
                            this.setData({
                                actingUPC: result.data
                            });
                        }
                        return [2];
                }
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFya0NhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXJrQ2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlEQUF5RDtBQUd6RCxJQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFZLEVBQUUsQ0FBQTtBQUtqQyxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsRUFBRTtLQUNkO0lBS0QsTUFBTSxFQUFFLFVBQVUsUUFBUTtRQUN4QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUtLLFlBQVksRUFBbEI7Ozs7OzRCQUNpQixXQUFNLE1BQU0sQ0FBQyxZQUFZLEVBQTRCLEVBQUE7O3dCQUE5RCxNQUFNLEdBQUcsU0FBcUQ7d0JBQ3BFLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7NEJBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0NBQ1gsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJOzZCQUN2QixDQUFDLENBQUE7eUJBQ0g7Ozs7O0tBQ0Y7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDlr7zlhaXmqKHlnZcgKi9cclxuaW1wb3J0IENvdXBvblNlcnZlciBmcm9tICcuLi8uLi8uLi9hcGkvYXBpL2NvdXBvbi9zZXJ2ZXInXHJcblxyXG4vKiDlrp7kvovljJbmqKHlnZcgKi9cclxuY29uc3Qgc2VydmVyID0gbmV3IENvdXBvblNlcnZlcigpXHJcblxyXG4vKiDlr7zlhaXlk43lupTmlbDmja7mjqXlj6MgKi9cclxuaW1wb3J0IHsgR2V0QWN0aW5nVVBDUmVzcG9uc2VEYXRhIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2ludGVyZmFjZS9yZXNwb25zZUludGVyZmFjZS9jb3Vwb24nXHJcblxyXG5QYWdlKHtcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgYWN0aW5nVVBDOiBbXVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAoX29wdGlvbnMpIHtcclxuICAgIHRoaXMuZ2V0QWN0aW5nVVBDKClcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bnlJ/mlYjkuK3nmoTlgZzovabliLhcclxuICAgKi9cclxuICBhc3luYyBnZXRBY3RpbmdVUEMoKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZXJ2ZXIuZ2V0QWN0aW5nVVBDPEdldEFjdGluZ1VQQ1Jlc3BvbnNlRGF0YT4oKVxyXG4gICAgaWYgKHJlc3VsdC5jb2RlID09IDApIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBhY3RpbmdVUEM6IHJlc3VsdC5kYXRhXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSkiXX0=