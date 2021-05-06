// pages/posts/posts.js
// const {postList} = require('../../data/posts-data')
import {posts} from '../../data/posts-data'

Page({

  /**
   * 页面的初始数据
   */
  data: {//初始值
    
  },

  /**
   * 生命周期函数--监听页面加载
   * 钩子函数 hook function
   */
  onLoad: async function (options) {
    // wx.setStorageSync('key', true)
    // wx.clearStorageSync() 清空
    // wx.removeStorageSync('key') 移除缓存
    // console.log(wx.getStorageSync('key'));
    // wx.getStorage({
    //   key: 'key',
    //   success(data){
    //     console.log(data);
    //   }
    // })
    // let flag = await wx.setStorage({
    //   key:'flag',
    //   data:'2222'
    // })
    // let getFlag = await wx.getStorage({key:'flag'})
    // console.log(getFlag);
    this.setData({
      posts
    })
  },
  //跳转详情页面
  onJumpToDetail(event){
    const id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: "/pages/post-detail/post-detail?pid="+id
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   * 条件触发
   */
  onHide: function () {
    console.log('onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})