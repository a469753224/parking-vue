/* 模拟数据 */
import { parkCardType } from '../../../assets/analogue/data'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    status: false,
    parkCardType,
    currentId: -1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 点击购买
   */
  shop() {
    let {currentId} = this.data
    console.log(currentId)
  },

  /**
   * 确定购买
   */
  confirm() {
    this.setData({
      status: false
    })
  },

  /**
   * 选择停车卡
   * @param e 
   */
  choose(e: { currentTarget: { dataset: { active: number; id: number } } }) {
    let { active, id } = e.currentTarget.dataset
    const currentData = parkCardType.filter((element: any) => {
      if (element.id === id) {
        return true
      }
      return false
    })
    this.setData({
      active,
      status: true,
      currentId: id,
      currentData: currentData[0]
    })
  }

})