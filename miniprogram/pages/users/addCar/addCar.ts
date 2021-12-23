/* 导入模块 */
import UserServer from '../../../api/api/user/server'

/* 实例化模块 */
const server = new UserServer()

/* 导入工具类 */
import {
  isEmpty,
  insertArray,
  getSetDataCurrent
} from '../../../utils/util'

/* 导入验证规则 */
import {
  plat
} from '../../../utils/exception'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: false,
    checked: false,
    show: true,
    carNo: ['桂', 'A', '', '', '', '', ''],
    keys_province: [
      ['京', '津', '晋', '冀', '蒙', '辽', '吉', '黑', '沪', '苏'],
      ['浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤', '桂'],
      ['琼', '渝', '川', '贵', '云', '藏', '陕', '甘'],
      ['青', '宁', '新', '台'],
    ],
    keys_one: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'],
      ['Z', 'X', 'C', 'V', 'B', 'N']
    ],
    keys_more: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'C', 'V', 'B', 'N'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      ['Z', 'X', '民', '使']
    ],
    more: true,
    keys_keyword: [],
    currentIndex: 2,
    select: '',
    lockId: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { keys_one } = <any>this.data
    this.setData({
      keys_keyword: keys_one
    })
    if (!isEmpty(options)) {
      let { lockId, select } = this.data
      this.setData({
        lockId,
        select,
      })
    }
  },

  /**
   * 选择是否为新能源
   */
  onChange() {
    this.setData({
      checked: !this.data.checked
    })
  },

  /**
   * 更多车牌选择
   */
  moreKey() {
    let { more, keys_province, keys_more } = <any>this.data
    let mores = !more
    let keys = mores ? keys_province : keys_more
    this.setData({
      more,
      keys_keyword: keys,
    })
  },

  /**
   * 新能源
   * @param {Object} e 
   */
  newEnergy(e: { detail: any }) {
    let carNo = e.detail ? ['桂', 'A', '', '', '', '', '', ''] : ['桂', 'A', '', '', '', '', '']
    let { keys_one } = <any>this.data
    this.setData({
      carNo,
      value: e.detail,
      currentIndex: 2,
      keys_keyword: keys_one
    })
  },

  /**
   * 选择键盘上的键
   * @param {Object} e 
   */
  checkcedItem(e: any) {
    let item = getSetDataCurrent(e, 'item')
    let t = this.data.carNo
    let index = this.data.currentIndex
    let carNo = []
    let { currentIndex } = <any>this.data
    if (currentIndex !== '') {
      t.splice(index, 1, item)
      carNo = t
      index += 1
      index = this.data.value ? index > 7 ? 7 : index : index > 6 ? 6 : index
    } else {
      carNo = insertArray(t, item)
    }
    this.setData({
      carNo
    })
    if (t[0] !== '') {
      let { keys_one } = <any>this.data
      this.setData({
        currentIndex: index,
        keys_keyword: keys_one
      })
    }
  },

  /**
   * 删除
   */
  deleteByIndex() {
    let { currentIndex, keys_province } = <any>this.data
    let index = currentIndex !== '' ? this.data.currentIndex : this.data.carNo.length - 1
    let carNo = this.data.carNo
    if (this.data.carNo[index] === '') {
      index = index > 0 ? index - 1 : index
    }
    carNo.splice(index, 1, '')
    if (this.data.carNo[0] === '' && index === 0) {
      this.setData({
        keys_keyword: keys_province
      })
    }
    this.setData({
      carNo,
      currentIndex: index
    })
  },

  /**
   * 选中键盘值
   * @param {Object} e 
   */
  checkItem(e: any) {
    let currentIndex = getSetDataCurrent(e, 'index')
    let { keys_one, keys_province } = <any>this.data
    this.setData({
      currentIndex,
      show: true,
      keys_keyword: currentIndex === 0 ? keys_province : keys_one
    })
  },

  /**
   * 提交车牌号
   */
  confirmPlat() {
    let { carNo } = <any>this.data
    let t = !carNo.includes('') ? true : false
    let u = this.data.value ? 8 : 7
    let reg = plat(this.data.carNo.join(''), u)
    let title = ''

    if (t && reg) {
      this.setData({
        show: false
      })
    } else {
      if (t) {
        title = !reg ? '车牌号不合法' : ''
      } else {
        title = !reg ? '车牌号信息不完整' : ''
      }
      wx.showToast({
        title,
        icon: 'none'
      })
    }
  },

  /**
   * 保存车牌
   */
  async savePlat() {
    let { carNo } = <any>this.data
    let t = !carNo.includes('') ? true : false
    let reg = false
    if (t) {
      let u = this.data.value ? 8 : 7
      reg = plat(this.data.carNo.join(''), u)
      if (!reg) {
        wx.showToast({
          icon: 'none',
          title: '车牌信息不完整！',
        })
      } else {
        let { carNo, checked, value } = <any>this.data
        const param = {
          plate: carNo.join(''),
          status: checked ? 1 : 0,
          newEnergy: value ? 1 : 0
        }
        const result = await server.addVehiclePlate(param)
        let title = result.code == 0 ? '添加成功' : result.data
        wx.showToast({
          title,
          icon: 'none'
        })
        if (result.code == 0) {
          let {
            select,
            lockId
          } = <any>this.data
          setTimeout(() => {
            if (select == 1) {
              wx.reLaunch({
                url: `/pages/homes/reserve/reserve?lockId=${lockId}`,
              })
            } else {
              wx.navigateBack({
                delta: 1,
              })
            }
          }, 1000);
        }
      }
    } else {
      wx.showToast({
        icon: 'none',
        title: '车牌信息不完整！',
      })
    }
  }
})