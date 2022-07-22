/* 导入模块 */
import WalletServer from '../../../api/api/wallet/server'

/* 实例化模块 */
const server = new WalletServer()

/* 导入工具类 */
import {
  getSetDataCurrent
} from '../../../utils/util'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    wallet: {},
    recharge: [],
    menu: [{
      name: '全部',
      index: '0'
    },
    {
      name: '收入',
      index: 1
    },
    {
      name: '支出',
      index: 2
    }
    ],
    active: 0,
    nav: [{
      name: '钱包',
      index: '0'
    },
    {
      name: '车位收益',
      index: 1
    }
    ],
    indexs: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (_options) {
    this.getWalletBalance()
    this.rechargeMoney()
  },

  /**
   * 获取钱包信息
   */
  async getWalletBalance() {
    const param = {
      pageNum: 1,
      transactionType: 0
    }
    const result = await server.getWalletBalance(param)
    if (result.code == 0) {
      this.setData({
        wallet: result.data
      })
    }
  },

  /**
   * 获取充值记录
   */
  async rechargeMoney() {
    const param = {
      pageNum: 1,
      transactionType: 0
    }
    const result = await server.rechargeMoney(param)
    if (result.code == 0) {
      this.setData({
        wallet: result.data
      })
    }
  },

  /**
   * 获取车位收益
   */
  async getWalletParking() {
    const param = {
      pageNum: 1,
      transactionType: 0
    }
    const result = await server.getWalletParking(param)
    if (result.code == 0) {
      this.setData({
        wallet: result.data
      })
    }
  },

  /**
   * 切换记录类型
   * @param {Object} e 
   */
  onMenu(e: any) {
    const index = getSetDataCurrent(e, 'index')
    let { recharge } = <any>this.data
    let data = recharge
    if (index == 1) {
      data.map((item: { transactionType: number }) => {
        let temp = false
        if (item.transactionType == 1) {
          temp = true
        }
        return temp
      })
    }
    if (index == 2) {
      data.map((item: { transactionType: number }) => {
        let tem = false
        if (item.transactionType == 2) {
          tem = true
        }
        return tem
      })
    }
    this.setData({
      active: index
    })
  },

  /**
   * 切换卡包类型
   * @param {Object} e 
   */
  onNavto(e: any) {
    const indexs = getSetDataCurrent(e, 'index')
    this.setData({
      indexs
    })
    if (indexs == 0) {
      this.getWalletBalance()
    } else {
      this.getWalletParking()
    }
  },
  withdraw(){
    wx.navigateTo({
      url: '/pages/users/withdrawal/withdrawal',
    })
  }
})