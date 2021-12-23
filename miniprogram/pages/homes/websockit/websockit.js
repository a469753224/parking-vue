"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../../../config/config");
Page({
    data: {
        connectStatus: 1,
        heartListen: 0
    },
    onLoad: function (_options) {
        this.connectSocket();
    },
    connectSocket: function () {
        var _this = this;
        wx.connectSocket({
            url: config_1.APP_BASE_API[config_1.Sock],
            header: {
                'content-type': 'application/json',
                'token': wx.getStorageSync('token')
            },
            success: function (res) {
                console.log('连接成功', res);
                _this.setData({
                    connectStatus: 10086
                });
                clearInterval(_this.data.heartListen);
                _this.setData({
                    heartListen: setInterval(function () {
                        if (_this.data.connectStatus == 0) {
                            console.log('监听到没心跳了，抢救一下');
                            clearInterval(_this.data.heartListen);
                            _this.reconnect();
                        }
                        else {
                            console.log('我还活着');
                        }
                    }, 5000)
                });
            },
            fail: function (err) {
                console.error(err);
            }
        });
        wx.onSocketError(function (_result) {
            console.log('监听到 WebSocket 打开错误，请检查！');
            _this.setData({
                connectStatus: 0
            });
        });
        wx.onSocketClose(function (_result) {
            console.log('监听到 WebSocket 已关闭！');
            _this.setData({
                connectStatus: 1
            });
            clearInterval(_this.data.heartListen);
        });
        wx.onSocketMessage(function (result) {
            console.log(JSON.parse(result.data));
            console.log('接收到消息');
        });
    },
    reconnect: function () {
        console.log('尝试重连');
        wx.closeSocket();
        this.connectSocket();
    },
    onUnload: function () {
        if (this.data.connectStatus === 10086) {
            wx.closeSocket();
            console.log('监听到页面卸载,关闭socket通讯');
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic29ja2l0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2Vic29ja2l0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaURBQTJEO0FBRTNELElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLFdBQVcsRUFBRSxDQUFDO0tBQ2Y7SUFLRCxNQUFNLEVBQUUsVUFBVSxRQUFRO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0lBS0QsYUFBYSxFQUFiO1FBQUEsaUJBeURDO1FBeERDLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDZixHQUFHLEVBQUUscUJBQVksQ0FBQyxhQUFJLENBQUM7WUFDdkIsTUFBTSxFQUFFO2dCQUNOLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLE9BQU8sRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQzthQUNwQztZQUNELE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUE7Z0JBRXhCLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsYUFBYSxFQUFFLEtBQUs7aUJBQ3JCLENBQUMsQ0FBQTtnQkFFRixhQUFhLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDcEMsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxXQUFXLEVBQUUsV0FBVyxDQUFDO3dCQUN2QixJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsRUFBRTs0QkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTs0QkFDM0IsYUFBYSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7NEJBQ3BDLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTt5QkFDakI7NkJBQU07NEJBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTt5QkFDcEI7b0JBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQztpQkFDVCxDQUFDLENBQUE7WUFFSixDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQUEsR0FBRztnQkFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3BCLENBQUM7U0FDRixDQUFDLENBQUE7UUFHRixFQUFFLENBQUMsYUFBYSxDQUFDLFVBQUMsT0FBTztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUE7WUFFdEMsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxhQUFhLEVBQUUsQ0FBQzthQUNqQixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtRQUdGLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBQyxPQUFPO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtZQUNqQyxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGFBQWEsRUFBRSxDQUFDO2FBQ2pCLENBQUMsQ0FBQTtZQUNGLGFBQWEsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3RDLENBQUMsQ0FBQyxDQUFBO1FBR0YsRUFBRSxDQUFDLGVBQWUsQ0FBQyxVQUFDLE1BQU07WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFTLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDdEIsQ0FBQyxDQUFDLENBQUE7SUFFSixDQUFDO0lBS0QsU0FBUztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDbkIsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssS0FBSyxFQUFFO1lBQ3JDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7U0FDbEM7SUFDSCxDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEFQUF9CQVNFX0FQSSwgU29jayB9IGZyb20gXCIuLi8uLi8uLi9jb25maWcvY29uZmlnXCJcclxuXHJcblBhZ2Uoe1xyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICBjb25uZWN0U3RhdHVzOiAxLFxyXG4gICAgaGVhcnRMaXN0ZW46IDBcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZDogZnVuY3Rpb24gKF9vcHRpb25zKSB7XHJcbiAgICB0aGlzLmNvbm5lY3RTb2NrZXQoKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOWIm+W7undlYnNvY2tpdFxyXG4gICAqL1xyXG4gIGNvbm5lY3RTb2NrZXQoKSB7XHJcbiAgICB3eC5jb25uZWN0U29ja2V0KHtcclxuICAgICAgdXJsOiBBUFBfQkFTRV9BUElbU29ja10sXHJcbiAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ3Rva2VuJzogd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJylcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn6L+e5o6l5oiQ5YqfJywgcmVzKVxyXG4gICAgICAgIC8vIOiuvue9rui/nuaOpeeKtuaAgVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBjb25uZWN0U3RhdHVzOiAxMDA4NlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8g5b+D6LezXHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmRhdGEuaGVhcnRMaXN0ZW4pXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGhlYXJ0TGlzdGVuOiBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY29ubmVjdFN0YXR1cyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ebkeWQrOWIsOayoeW/g+i3s+S6hu+8jOaKouaVkeS4gOS4iycpXHJcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmRhdGEuaGVhcnRMaXN0ZW4pXHJcbiAgICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3QoKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiJHov5jmtLvnnYAnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCA1MDAwKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIOebkeWQrHdlYlNvY2tldOmUmeivr1xyXG4gICAgd3gub25Tb2NrZXRFcnJvcigoX3Jlc3VsdCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygn55uR5ZCs5YiwIFdlYlNvY2tldCDmiZPlvIDplJnor6/vvIzor7fmo4Dmn6XvvIEnKVxyXG4gICAgICAvLyDkv67mlLnov57mjqXnirbmgIFcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjb25uZWN0U3RhdHVzOiAwXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIOebkeWQrFdlYlNvY2tldOWFs+mXrVxyXG4gICAgd3gub25Tb2NrZXRDbG9zZSgoX3Jlc3VsdCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygn55uR5ZCs5YiwIFdlYlNvY2tldCDlt7LlhbPpl63vvIEnKVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGNvbm5lY3RTdGF0dXM6IDFcclxuICAgICAgfSlcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmRhdGEuaGVhcnRMaXN0ZW4pXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIOaUtuWIsHdlYnNvY2tldOa2iOaBr1xyXG4gICAgd3gub25Tb2NrZXRNZXNzYWdlKChyZXN1bHQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZSg8c3RyaW5nPnJlc3VsdC5kYXRhKSlcclxuICAgICAgY29uc29sZS5sb2coJ+aOpeaUtuWIsOa2iOaBrycpXHJcbiAgICB9KVxyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDph43ov55cclxuICAgKi9cclxuICByZWNvbm5lY3QoKSB7XHJcbiAgICBjb25zb2xlLmxvZygn5bCd6K+V6YeN6L+eJylcclxuICAgIHd4LmNsb3NlU29ja2V0KCkgLy8g6YeN6L+e5LmL5YmN5omL5Yqo5YWz6Zet5LiA5qyhXHJcbiAgICB0aGlzLmNvbm5lY3RTb2NrZXQoKVxyXG4gIH0sXHJcblxyXG4gIG9uVW5sb2FkKCkge1xyXG4gICAgaWYgKHRoaXMuZGF0YS5jb25uZWN0U3RhdHVzID09PSAxMDA4Nikge1xyXG4gICAgICB3eC5jbG9zZVNvY2tldCgpXHJcbiAgICAgIGNvbnNvbGUubG9nKCfnm5HlkKzliLDpobXpnaLljbjovb0s5YWz6Zetc29ja2V06YCa6K6vJylcclxuICAgIH1cclxuICB9LFxyXG5cclxufSkiXX0=