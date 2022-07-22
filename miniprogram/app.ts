App<IAppOption>({
  globalData: {},
  onLaunch() {
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(result => {
      console.log(result.hasUpdate)
    })
    updateManager.onUpdateReady(() => {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，请重启应用！',
        showCancel: false,
        success() {
          updateManager.applyUpdate()
        }
      })
    })
    updateManager.onUpdateFailed(() => {
      wx.showModal({
        title: '提示',
        content: '更新失败',
        showCancel: false
      })
    })
  },
})