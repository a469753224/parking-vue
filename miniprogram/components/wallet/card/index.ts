
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    car:{
      type:Object,
      value: {}
    },
    status: {
      type: Number,
      value: 1
    },
    type: {
      type: Number,
      value: 1
    },
    rules: {
      type: Number,
      value: 2
    },
    term: {
      type: Number,
      value: 5
    },
    date: {
      type: String,
      value: '2020-01-01'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    byParkCard(e: { currentTarget: { dataset: { id: any } } }){
      let {id} = e.currentTarget.dataset
      wx.navigateTo({
        url:`/pages/users/buyCard/buyCard?id=${id}`
      })
    }
  }
})
