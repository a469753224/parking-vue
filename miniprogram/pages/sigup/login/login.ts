/* 导入模块 */
import SigupServer from '../../../api/api/sigup/server'

/* 实例化模块 */
const server = new SigupServer()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: true,
    username: '13397788378',
    // username: '17774801670',
    password: 'weideng123'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
     * 登录
     */
  async login() {
    if (this.data.checked) {
      let { username, password } = this.data
      const param = {
        username,
        password
      }
      const result = await server.account(param)
      if (result.status == 200) {
        let { token } = result
        wx.setStorageSync('token', token)
        // setTimeout(() => {
        //   this.myMenuInformation()
        // }, 100);
      }
      let title = result.status == 200 ? '登录成功' : result.msg
      wx.showToast({
        title,
        icon: 'none'
      })
    } else {
      wx.showToast({
        title: '请勾选同意协议',
        icon: 'none'
      })
    }
  },

})