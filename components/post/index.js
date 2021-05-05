// components/post/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: { //这里的数据也可以用作数据绑定
    // text:{
    //   type:String,
    //   value:'123'
    // },
    // text:String //简写形式没办法设置默认值
    data:Object
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
    //跳转详情页面
    onJumpToDetail(event){
      const id = event.currentTarget.dataset.id
      wx.navigateTo({
        url: "/pages/post-detail/post-detail?pid="+id
      })
    },
    //头像
    enlarge(event){
      const avatar = event.currentTarget.dataset.img
      wx.showToast({
        title: '头像',
        image: avatar
      })
    },
  }
})
