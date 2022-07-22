/* 导入模块 */
import UserServer from '../../../api/api/user/server'

/* 实例化模块 */
const server = new UserServer()

/* 导入工具类 */
import { isEmpty, getSetDataCurrent } from '../../../utils/util'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cars: [],
    select: '',
    lockId: '',
    show: false,
    currentId: '',
    showDetele: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!isEmpty(options)) {
      let { select, lockId } = options
      this.setData({
        lockId,
        select,
      })
    }
  },

  /**
   * 获取当前用户的所有车辆
   */
  async selectPlateAll() {
    const result = await server.selectPlateAll()
    if (result.code == 0) {
      let cars = result.data
      if (cars.length > 0) {
        /* 检测是否存在默认车辆，若不存在则默认设置第一个车辆为默认车辆 */
        const isDefault = cars.some((item: { status: number }) => {
          return item.status == 1
        })
        if (!isDefault) {
          let { id } = cars[0]
          const param = { id }
          const result = await server.setPlateDevault(param)
          if (result.code == 0) {
            this.selectPlateAll()
          }
        }
        /* End */
      } else {
        cars = []
      }
      this.setData({ cars })
      this._setDefaultPlate(cars)
    }
  },

  /**
   * 设置默认车辆
   * @param cars 车辆信息
   */
  _setDefaultPlate(cars: any[]) {
    let plate = ''
    let userInfo = wx.getStorageSync('userInfo')
    if (!isEmpty(userInfo)) {
      if (cars.length > 0) {
        cars.forEach(element => {
          if (element.status == 1) {
            plate = element.plate
          }
        })
      } else {
        plate = '--'
      }
      userInfo.plate = plate
      wx.setStorageSync('userInfo', userInfo)
    }
  },

  /**
   * 跳转添加车牌
   */
  addCar() {
    let { select, lockId } = this.data
    wx.navigateTo({
      url: `/pages/users/addCar/addCar?select=`+select+'&lockId='+lockId,
    })
  },

  /**
   * 设置默认车辆
   * @param {Object} e 事件对象
   */
  setDefault(e: any) {
    const id = getSetDataCurrent(e, 'id')
    this._syncDefault(id)
  },

  /**
   * 设置默认车辆
   * @param id 车辆id
   */
  async _syncDefault(id: number) {
    const param = { id }
    const result = await server.setPlateDevault(param)
    if (result.code == 0) {
      this._setDefault(id)
    }
  },

  /**
   * 设置默认车辆
   * @param id 车辆id
   */
  _setDefault(id: number) {
    let { cars } = <any>this.data
    let car = {}
    console.log(cars.length)
        cars.forEach((plate: { id?: any; status?: any; plate?: any }) => {
            if (plate.id == id) {
              plate.status = 1
              car = plate
              this._setStorage(car)
            } else {
              plate.status = 0
            }
          })
          cars = cars.filter((plate: any) => {
            if (plate.id == id) {
              return false
            }
            return true
          })
          cars.unshift(car)
          this.setData({ cars })
    
  },

  /**
   * 显示模态框
   */
  showModal(e: any) {
    const currentId = getSetDataCurrent(e, 'id')
    this.setData({
      currentId,
      showDetele: true
    })
  },

  /**
   * 删除车辆
   */
  async deletePlate() {
    let { currentId } = <any>this.data
    const param = {
      id: currentId
    }
    const result = await server.deletePlate(param)
    let title = result.code == 0 ? result.data : result.msg
    if (result.code == 0) {
      this._delPlate(currentId)
    }
    wx.showToast({
      title,
      icon: 'none'
    })
  },

  /**
   * 删除车辆
   * @param id 从车辆id
   */
  _delPlate(id: number) {
    let { cars } = <any>this.data
    if (id) {
      let plates = cars.filter((plate: { id: number }) => {
        if (plate.id == id) {
          return false
        }
        return true
      })
      this._syncDefault(id)
      this.setData({ cars: plates })
      this._setDefPlate(id)
    }
  },

  /**
   * 设置默认车辆
   * @param id 车辆id
   */
  _setDefPlate(id?: number) {
    let { cars } = <any>this.data
    if(cars.length>0){
        if (id) {
            const isDel = cars.some((plate: { status: number }) => {
              return plate.status == 1
            })
            if (!isDel) {
              cars[0].status = 1
              this._setStorage(cars[0])
            }
            this.setData({ cars })
          }
    }
    
  },

  /**
   * 设置默认车辆缓存
   * @param car 默认车辆信息
   */
  _setStorage(car: any) {
    let userInfo = wx.getStorageSync('userInfo')
    if (!isEmpty(userInfo)) {
      userInfo.plate = car.plate
      wx.setStorageSync('userInfo', userInfo)
    }
  },

  /**
   * 选择车牌
   * @param {Object} e 事件对象
   */
  selectPlate(e: any) {
    const { plate } = getSetDataCurrent(e, 'row')
    let { select } = <any>this.data
    if (select == 1) {
      const pages = getCurrentPages();
      const prevPage = pages[pages.length - 2]
      prevPage.setData({
        plate,
        showState:false
      })
      wx.navigateBack({
        delta: 1,
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.selectPlateAll()
  },

})