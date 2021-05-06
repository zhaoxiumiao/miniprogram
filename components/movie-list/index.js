// components/movie-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses:['f-class'], //外部样式类
  properties: {
    title:String,
    movies:Array
  },
  onLoad(){
    console.log(this.data.movies);
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

  }
})
