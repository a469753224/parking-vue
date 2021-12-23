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
var Upload = (function () {
    function Upload() {
    }
    Upload.prototype.chooseImage = function (config) {
        return new Promise(function (resolve) {
            var _a = config.count, count = _a === void 0 ? 1 : _a, _b = config.sourceType, sourceType = _b === void 0 ? 'album' : _b;
            wx.chooseImage({
                count: count,
                sourceType: [sourceType],
                success: function (result) {
                    if (result.errMsg === 'chooseImage:ok') {
                        resolve({
                            code: 200,
                            data: result.tempFilePaths
                        });
                    }
                }
            });
        });
    };
    Upload.prototype.uploadFile = function () {
        var _this = this;
        return new Promise(function (_resolve) { return __awaiter(_this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.chooseImage({})];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        return [2];
                }
            });
        }); });
    };
    return Upload;
}());
exports.default = Upload;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXBsb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7SUFBQTtJQXlDQSxDQUFDO0lBdkNBLDRCQUFXLEdBQVgsVUFBWSxNQUFtQjtRQUM5QixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUNuQixJQUFBLEtBQW9DLE1BQU0sTUFBakMsRUFBVCxLQUFLLG1CQUFHLENBQUMsS0FBQSxFQUFFLEtBQXlCLE1BQU0sV0FBWCxFQUFwQixVQUFVLG1CQUFHLE9BQU8sS0FBQSxDQUFXO1lBQ2hELEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2QsS0FBSyxPQUFBO2dCQUNMLFVBQVUsRUFBRSxDQUFNLFVBQVUsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLFVBQUMsTUFBTTtvQkFDZixJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssZ0JBQWdCLEVBQUU7d0JBQ3ZDLE9BQU8sQ0FBQzs0QkFDUCxJQUFJLEVBQUUsR0FBRzs0QkFDVCxJQUFJLEVBQUUsTUFBTSxDQUFDLGFBQWE7eUJBQzFCLENBQUMsQ0FBQTtxQkFDRjtnQkFDRixDQUFDO2FBQ0QsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsMkJBQVUsR0FBVjtRQUFBLGlCQWtCQztRQWpCQSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQU0sUUFBUTs7Ozs0QkFDcEIsV0FBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFBOzt3QkFBaEMsR0FBRyxHQUFHLFNBQTBCO3dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUFDLFdBQU87OzthQWN6QixDQUFDLENBQUE7SUFDSCxDQUFDO0lBR0YsYUFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaG9vc2VJbWFnZSB9IGZyb20gXCIuLi90eXBlcy91dGlsc1wiO1xyXG5pbXBvcnQgeyBSZXF1ZXN0UHJvbWlzZSB9IGZyb20gJy4uL3R5cGVzL2h0dHAnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGxvYWQge1xyXG5cclxuXHRjaG9vc2VJbWFnZShjb25maWc6IENob29zZUltYWdlKTogUmVxdWVzdFByb21pc2Uge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG5cdFx0XHRsZXQgeyBjb3VudCA9IDEsIHNvdXJjZVR5cGUgPSAnYWxidW0nIH0gPSBjb25maWdcclxuXHRcdFx0d3guY2hvb3NlSW1hZ2Uoe1xyXG5cdFx0XHRcdGNvdW50LFxyXG5cdFx0XHRcdHNvdXJjZVR5cGU6IFs8YW55PnNvdXJjZVR5cGVdLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXN1bHQuZXJyTXNnID09PSAnY2hvb3NlSW1hZ2U6b2snKSB7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUoe1xyXG5cdFx0XHRcdFx0XHRcdGNvZGU6IDIwMCxcclxuXHRcdFx0XHRcdFx0XHRkYXRhOiByZXN1bHQudGVtcEZpbGVQYXRoc1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHR1cGxvYWRGaWxlKCk6IFJlcXVlc3RQcm9taXNlIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShhc3luYyBfcmVzb2x2ZSA9PiB7XHJcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuY2hvb3NlSW1hZ2Uoe30pXHJcblx0XHRcdGNvbnNvbGUubG9nKHJlcyk7IHJldHVybjtcclxuXHRcdFx0Lyp3eC51cGxvYWRGaWxlKHtcclxuXHRcdFx0XHRmaWxlUGF0aDogJ2ZpbGVQYXRoJyxcclxuXHRcdFx0XHRuYW1lOiAnbmFtZScsXHJcblx0XHRcdFx0dXJsOiAndXJsJyxcclxuXHRcdFx0XHRmb3JtRGF0YTogZm9ybURhdGEsXHJcblx0XHRcdFx0aGVhZGVyOiBoZWFkZXIsXHJcblx0XHRcdFx0dGltZW91dDogMCxcclxuXHRcdFx0XHRzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0XHRyZXNvbHZlKHsgLi4ucmVzdWx0IH0pXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmYWlsOiAocmVzKSA9PiB7IH0sXHJcblx0XHRcdFx0Y29tcGxldGU6IChyZXMpID0+IHsgfSxcclxuXHRcdFx0fSkqL1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cclxufSJdfQ==