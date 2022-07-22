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
var server_1 = require("../../../api/api/apply/server");
var server = new server_1.default();
Page({
    data: {
        deteId: '',
        repeat: [],
        show: false,
        dete: false,
        currentId: '',
    },
    onLoad: function (_options) {
        this.checkplace();
    },
    checkplace: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, server.checkplace()];
                    case 1:
                        result = _a.sent();
                        data = result.code == 0 ? result.data : [];
                        this.setData({
                            repeat: data
                        });
                        return [2];
                }
            });
        });
    },
    cancel: function (e) {
        var id = e.currentTarget.dataset.id;
        this.setData({
            show: true,
            currentId: id
        });
    },
    cancelPlace: function () {
        return __awaiter(this, void 0, void 0, function () {
            var id, param, result, title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.data.currentId;
                        param = { id: id };
                        return [4, server.cancelplace(param)];
                    case 1:
                        result = _a.sent();
                        title = result.code == 0 ? '取消成功' : result.msg;
                        if (result.code == 0) {
                            this.checkplace();
                        }
                        wx.showToast({
                            title: title,
                            icon: 'none'
                        });
                        this.setData({
                            show: false,
                            currentId: ''
                        });
                        return [2];
                }
            });
        });
    },
    deleteApply: function (e) {
        var id = e.currentTarget.dataset.id;
        this.setData({
            dete: true,
            deteId: id
        });
    },
    placeDelete: function () {
        return __awaiter(this, void 0, void 0, function () {
            var id, param, result, title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.data.deteId;
                        param = { id: id };
                        return [4, server.placeDelete(param)];
                    case 1:
                        result = _a.sent();
                        title = result.code == 0 ? '删除成功' : result.msg;
                        if (result.code == 0) {
                            this.checkplace();
                        }
                        wx.showToast({
                            title: title,
                            icon: 'none'
                        });
                        return [2];
                }
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlBcHBseS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15QXBwbHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx3REFBdUQ7QUFHdkQsSUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBVyxFQUFFLENBQUE7QUFFaEMsSUFBSSxDQUFDO0lBS0QsSUFBSSxFQUFFO1FBQ0YsTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUUsRUFBRTtRQUNWLElBQUksRUFBRSxLQUFLO1FBQ1gsSUFBSSxFQUFFLEtBQUs7UUFDWCxTQUFTLEVBQUUsRUFBRTtLQUNoQjtJQUtELE1BQU0sRUFBRSxVQUFVLFFBQVE7UUFDdEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFLSyxVQUFVOzs7Ozs0QkFDRyxXQUFNLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBQTs7d0JBQWxDLE1BQU0sR0FBRyxTQUF5Qjt3QkFDcEMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7d0JBQzlDLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1QsTUFBTSxFQUFFLElBQUk7eUJBQ2YsQ0FBQyxDQUFBOzs7OztLQUNMO0lBTUQsTUFBTSxFQUFOLFVBQU8sQ0FBaUQ7UUFDNUMsSUFBQSxFQUFFLEdBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQTVCLENBQTRCO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxJQUFJLEVBQUUsSUFBSTtZQUNWLFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFLSyxXQUFXOzs7Ozs7d0JBQ1QsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFBO3dCQUN0QixLQUFLLEdBQUcsRUFBRSxFQUFFLElBQUEsRUFBRSxDQUFBO3dCQUNMLFdBQU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQXhDLE1BQU0sR0FBRyxTQUErQjt3QkFDMUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUE7d0JBQ2xELElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7NEJBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTt5QkFDcEI7d0JBQ0QsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0QkFDVCxLQUFLLE9BQUE7NEJBQ0wsSUFBSSxFQUFFLE1BQU07eUJBQ2YsQ0FBQyxDQUFBO3dCQUNGLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1QsSUFBSSxFQUFFLEtBQUs7NEJBQ1gsU0FBUyxFQUFFLEVBQUU7eUJBQ2hCLENBQUMsQ0FBQTs7Ozs7S0FDTDtJQU1ELFdBQVcsRUFBWCxVQUFZLENBQThDO1FBQzlDLElBQUEsRUFBRSxHQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUE1QixDQUE0QjtRQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsRUFBRTtTQUNiLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFLSyxXQUFXOzs7Ozs7d0JBQ1QsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO3dCQUNuQixLQUFLLEdBQUcsRUFBRSxFQUFFLElBQUEsRUFBRSxDQUFBO3dCQUNMLFdBQU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQXhDLE1BQU0sR0FBRyxTQUErQjt3QkFDeEMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUE7d0JBQ3BELElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7NEJBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTt5QkFDcEI7d0JBQ0QsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0QkFDVCxLQUFLLE9BQUE7NEJBQ0wsSUFBSSxFQUFFLE1BQU07eUJBQ2YsQ0FBQyxDQUFBOzs7OztLQUNMO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyog5a+85YWl5qih5Z2XICovXHJcbmltcG9ydCBBcHBseVNlcnZlciBmcm9tICcuLi8uLi8uLi9hcGkvYXBpL2FwcGx5L3NlcnZlcidcclxuXHJcbi8qIOWunuS+i+WMluaooeWdlyAqL1xyXG5jb25zdCBzZXJ2ZXIgPSBuZXcgQXBwbHlTZXJ2ZXIoKVxyXG5cclxuUGFnZSh7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgICAqL1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGRldGVJZDogJycsXHJcbiAgICAgICAgcmVwZWF0OiBbXSxcclxuICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICBkZXRlOiBmYWxzZSxcclxuICAgICAgICBjdXJyZW50SWQ6ICcnLFxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICAgKi9cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKF9vcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja3BsYWNlKClcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bovabkvY3liJfooahcclxuICAgICAqL1xyXG4gICAgYXN5bmMgY2hlY2twbGFjZSgpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZXJ2ZXIuY2hlY2twbGFjZSgpXHJcbiAgICAgICAgbGV0IGRhdGEgPSByZXN1bHQuY29kZSA9PSAwID8gcmVzdWx0LmRhdGEgOiBbXVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHJlcGVhdDogZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y+W5raI55Sz6K+3XHJcbiAgICAgKiBAcGFyYW0gZSBcclxuICAgICAqL1xyXG4gICAgY2FuY2VsKGU6IHsgY3VycmVudFRhcmdldDogeyBkYXRhc2V0OiB7IGlkOiBzdHJpbmcgfSB9IH0pIHtcclxuICAgICAgICBjb25zdCB7IGlkIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIGN1cnJlbnRJZDogaWRcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPlua2iOeUs+ivt1xyXG4gICAgICovXHJcbiAgICBhc3luYyBjYW5jZWxQbGFjZSgpIHtcclxuICAgICAgICBsZXQgaWQgPSB0aGlzLmRhdGEuY3VycmVudElkXHJcbiAgICAgICAgY29uc3QgcGFyYW0gPSB7IGlkIH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZXJ2ZXIuY2FuY2VscGxhY2UocGFyYW0pXHJcbiAgICAgICAgbGV0IHRpdGxlID0gcmVzdWx0LmNvZGUgPT0gMCA/ICflj5bmtojmiJDlip8nIDogcmVzdWx0Lm1zZ1xyXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2twbGFjZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICBjdXJyZW50SWQ6ICcnXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTnlLPor7dcclxuICAgICAqIEBwYXJhbSBlIFxyXG4gICAgICovXHJcbiAgICBkZWxldGVBcHBseShlOiB7IGN1cnJlbnRUYXJnZXQ6IHsgZGF0YXNldDogeyBpZDogYW55IH0gfSB9KSB7XHJcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBkZXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBkZXRlSWQ6IGlkXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTovabkvY1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgcGxhY2VEZWxldGUoKSB7XHJcbiAgICAgICAgbGV0IGlkID0gdGhpcy5kYXRhLmRldGVJZFxyXG4gICAgICAgIGNvbnN0IHBhcmFtID0geyBpZCB9XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyLnBsYWNlRGVsZXRlKHBhcmFtKVxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gcmVzdWx0LmNvZGUgPT0gMCA/ICfliKDpmaTmiJDlip8nIDogcmVzdWx0Lm1zZ1xyXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2twbGFjZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KSJdfQ==