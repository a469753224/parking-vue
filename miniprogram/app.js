"use strict";
App({
    globalData: {},
    onLaunch: function () {
        var updateManager = wx.getUpdateManager();
        updateManager.onCheckForUpdate(function (result) {
            console.log(result.hasUpdate);
        });
        updateManager.onUpdateReady(function () {
            wx.showModal({
                title: '更新提示',
                content: '新版本已经准备好，请重启应用！',
                showCancel: false,
                success: function () {
                    updateManager.applyUpdate();
                }
            });
        });
        updateManager.onUpdateFailed(function () {
            wx.showModal({
                title: '提示',
                content: '更新失败',
                showCancel: false
            });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUUsRUFBRTtJQUNkLFFBQVE7UUFDTixJQUFNLGFBQWEsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtRQUMzQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsVUFBQSxNQUFNO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQy9CLENBQUMsQ0FBQyxDQUFBO1FBQ0YsYUFBYSxDQUFDLGFBQWEsQ0FBQztZQUMxQixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxNQUFNO2dCQUNiLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixPQUFPO29CQUNMLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtnQkFDN0IsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO1FBQ0YsYUFBYSxDQUFDLGNBQWMsQ0FBQztZQUMzQixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxJQUFJO2dCQUNYLE9BQU8sRUFBRSxNQUFNO2dCQUNmLFVBQVUsRUFBRSxLQUFLO2FBQ2xCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkFwcDxJQXBwT3B0aW9uPih7XHJcbiAgZ2xvYmFsRGF0YToge30sXHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICBjb25zdCB1cGRhdGVNYW5hZ2VyID0gd3guZ2V0VXBkYXRlTWFuYWdlcigpXHJcbiAgICB1cGRhdGVNYW5hZ2VyLm9uQ2hlY2tGb3JVcGRhdGUocmVzdWx0ID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0Lmhhc1VwZGF0ZSlcclxuICAgIH0pXHJcbiAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlUmVhZHkoKCkgPT4ge1xyXG4gICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgIHRpdGxlOiAn5pu05paw5o+Q56S6JyxcclxuICAgICAgICBjb250ZW50OiAn5paw54mI5pys5bey57uP5YeG5aSH5aW977yM6K+36YeN5ZCv5bqU55So77yBJyxcclxuICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgdXBkYXRlTWFuYWdlci5hcHBseVVwZGF0ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVGYWlsZWQoKCkgPT4ge1xyXG4gICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICBjb250ZW50OiAn5pu05paw5aSx6LSlJyxcclxuICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LFxyXG59KSJdfQ==