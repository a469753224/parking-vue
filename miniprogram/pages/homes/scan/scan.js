"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var innerAudioContext = wx.createInnerAudioContext();
innerAudioContext.src = '/assets/audio/beep.mp3';
var util_1 = require("../../../utils/util");
Page({
    data: {
        bar: false,
        show: false,
        flash: 'off'
    },
    onLoad: function (_options) {
    },
    scanSuccess: function (e) {
        innerAudioContext.play();
        if (e) {
            var lockId = util_1.getParam(e.detail.result, 'lockId');
            if (!lockId) {
                wx.showToast({
                    title: '无效二维码，请检查！',
                    icon: 'none'
                });
                wx.reLaunch({
                    url: '/pages/home/home',
                });
            }
            else {
                wx.reLaunch({
                    url: "/pages/homes/reserve/reserve?lockId=" + lockId
                });
            }
        }
    },
    torchSwitch: function () {
        var flash = this.data.flash == 'on' ? 'off' : 'on';
        this.setData({ flash: flash });
    },
    onShow: function () {
        var _this = this;
        wx.getSetting({
            withSubscriptions: true,
            success: function (res) {
                var that = _this;
                if (!res.authSetting['scope.camera']) {
                    wx.authorize({
                        scope: 'scope.camera',
                        success: function (_data) {
                            wx.showToast({
                                title: '授权成功',
                                icon: 'none'
                            });
                        },
                        fail: function () {
                            that.setData({
                                show: true
                            });
                        }
                    });
                }
            },
            fail: function (_err) {
            }
        });
    },
    confirm: function () {
        wx.openSetting({
            success: function (_re) {
                wx.navigateBack({
                    delta: 0,
                });
            }
        });
    },
    cancel: function () {
        wx.navigateBack({
            delta: 1,
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFBO0FBQ3BELGlCQUFpQixDQUFDLEdBQUcsR0FBRyx3QkFBd0IsQ0FBQTtBQUdoRCw0Q0FBOEM7QUFFOUMsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLEtBQUs7UUFDVixJQUFJLEVBQUUsS0FBSztRQUNYLEtBQUssRUFBRSxLQUFLO0tBQ2I7SUFLRCxNQUFNLEVBQUUsVUFBVSxRQUFRO0lBRTFCLENBQUM7SUFrQkQsV0FBVyxFQUFYLFVBQVksQ0FBaUM7UUFFM0MsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDeEIsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFNLE1BQU0sR0FBRyxlQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUE7WUFDbEQsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEtBQUssRUFBRSxZQUFZO29CQUNuQixJQUFJLEVBQUUsTUFBTTtpQkFDYixDQUFDLENBQUE7Z0JBQ0YsRUFBRSxDQUFDLFFBQVEsQ0FBQztvQkFDVixHQUFHLEVBQUUsa0JBQWtCO2lCQUN4QixDQUFDLENBQUE7YUFDSDtpQkFBTTtnQkFDTCxFQUFFLENBQUMsUUFBUSxDQUFDO29CQUNWLEdBQUcsRUFBRSx5Q0FBdUMsTUFBUTtpQkFDckQsQ0FBQyxDQUFBO2FBQ0g7U0FDRjtJQUNILENBQUM7SUFLRCxXQUFXO1FBQ1QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtRQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFFRCxNQUFNO1FBQU4saUJBNkJDO1FBekJDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsSUFBTSxJQUFJLEdBQUcsS0FBSSxDQUFBO2dCQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFBRTtvQkFDcEMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDWCxLQUFLLEVBQUUsY0FBYzt3QkFDckIsT0FBTyxFQUFFLFVBQUEsS0FBSzs0QkFDWixFQUFFLENBQUMsU0FBUyxDQUFDO2dDQUNYLEtBQUssRUFBRSxNQUFNO2dDQUNiLElBQUksRUFBRSxNQUFNOzZCQUNiLENBQUMsQ0FBQTt3QkFDSixDQUFDO3dCQUNELElBQUk7NEJBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQ0FDWCxJQUFJLEVBQUUsSUFBSTs2QkFDWCxDQUFDLENBQUM7d0JBQ0wsQ0FBQztxQkFDRixDQUFDLENBQUE7aUJBQ0g7WUFDSCxDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQUEsSUFBSTtZQUVWLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsT0FBTztRQUNMLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDYixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ2QsS0FBSyxFQUFFLENBQUM7aUJBQ1QsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxNQUFNO1FBQ0osRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDO1NBQ1QsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUdGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKsKg5o+Q56S66Z+zICovXHJcbmxldCBpbm5lckF1ZGlvQ29udGV4dCA9IHd4LmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KClcclxuaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gJy9hc3NldHMvYXVkaW8vYmVlcC5tcDMnXHJcblxyXG4vKiDlt6Xlhbfnsbvlr7zlhaUgKi9cclxuaW1wb3J0IHsgZ2V0UGFyYW0gfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJ1xyXG5cclxuUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqwqDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICBiYXI6IGZhbHNlLFxyXG4gICAgc2hvdzogZmFsc2UsXHJcbiAgICBmbGFzaDogJ29mZidcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKsKg55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQ6IGZ1bmN0aW9uIChfb3B0aW9ucykge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmi4notbfmiavnoIFcclxuICAgKi9cclxuICAvKnNjYW4oKSB7XHJcbiAgICAgIHd4LnNjYW5Db2RlKHtcclxuICAgICAgICAgIG9ubHlGcm9tQ2FtZXJhOiB0cnVlLFxyXG4gICAgICAgICAgc3VjY2VzcyhlKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgIH1cclxuICAgICAgfSlcclxuICB9LCovXHJcblxyXG4gIC8qKlxyXG4gICAqIOaJq+eggeaIkOWKn+Wbnuiwg1xyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlIFxyXG4gICAqL1xyXG4gIHNjYW5TdWNjZXNzKGU6IHsgZGV0YWlsOiB7IHJlc3VsdDogc3RyaW5nIH0gfSkge1xyXG4gICAgLy/CoOaSreaUvuaPkOekuumfs1xyXG4gICAgaW5uZXJBdWRpb0NvbnRleHQucGxheSgpXHJcbiAgICBpZiAoZSkge1xyXG4gICAgICBjb25zdCBsb2NrSWQgPSBnZXRQYXJhbShlLmRldGFpbC5yZXN1bHQsICdsb2NrSWQnKVxyXG4gICAgICBpZiAoIWxvY2tJZCkge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+aXoOaViOS6jOe7tOegge+8jOivt+ajgOafpe+8gScsXHJcbiAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgIHVybDogJy9wYWdlcy9ob21lL2hvbWUnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgICAgdXJsOiBgL3BhZ2VzL2hvbWVzL3Jlc2VydmUvcmVzZXJ2ZT9sb2NrSWQ9JHtsb2NrSWR9YFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmiYvnlLXnrZLlvIDlhbNcclxuICAgKi9cclxuICB0b3JjaFN3aXRjaCgpIHtcclxuICAgIGxldCBmbGFzaCA9IHRoaXMuZGF0YS5mbGFzaCA9PSAnb24nID8gJ29mZicgOiAnb24nXHJcbiAgICB0aGlzLnNldERhdGEoeyBmbGFzaCB9KVxyXG4gIH0sXHJcblxyXG4gIG9uU2hvdygpIHtcclxuICAgIC8qKlxyXG4gICAgICog55u45py65o6I5p2D5qOA5rWLXHJcbiAgICAgKi9cclxuICAgIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICB3aXRoU3Vic2NyaXB0aW9uczogdHJ1ZSxcclxuICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG4gICAgICAgIGlmICghcmVzLmF1dGhTZXR0aW5nWydzY29wZS5jYW1lcmEnXSkge1xyXG4gICAgICAgICAgd3guYXV0aG9yaXplKHtcclxuICAgICAgICAgICAgc2NvcGU6ICdzY29wZS5jYW1lcmEnLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBfZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o6I5p2D5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgICAgICAgdGhhdC5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIHNob3c6IHRydWVcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IF9lcnIgPT4ge1xyXG5cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmiZPlvIDorr7nva7nm7jmnLrmjojmnYNcclxuICAgKi9cclxuICBjb25maXJtKCkge1xyXG4gICAgd3gub3BlblNldHRpbmcoe1xyXG4gICAgICBzdWNjZXNzOiAoX3JlKSA9PiB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgIGRlbHRhOiAwLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog5Y+W5raI55u45py65o6I5p2DXHJcbiAgICovXHJcbiAgY2FuY2VsKCkge1xyXG4gICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgZGVsdGE6IDEsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG59KSJdfQ==