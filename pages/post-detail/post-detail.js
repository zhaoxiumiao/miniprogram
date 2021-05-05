// pages/post-detail/post-detail.js
import {posts} from '../../data/posts-data'
const app = getApp()
//缓存 localstorage
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collected: false,
    _postsCollected:{},
    isPlaying:false,
    _mgr:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    posts.forEach(item=>{
      if(item.postId === options.pid * 1){
        that.setData(item)
      }
    })
    let postsCollected = wx.getStorageSync('posts-collected')
    let collected = postsCollected[options.pid]
    if(!collected){
      collected = false
    }
    if(!postsCollected){
      postsCollected = {}
      wx.setStorageSync('posts-collected',postsCollected)
    }
    if(app.gIsPlayingMusicId==this.data.postId){
      console.log(app.gIsPlayingMusic);
      this.setData({
        isPlaying:app.gIsPlayingMusic
      })
    }
    this.setData({
      collected,
      _postsCollected:postsCollected,
    })
    const mgr = wx.getBackgroundAudioManager()
    this.data._mgr = mgr
    mgr.onPause(this.stopMusic)
  },
  //停止播放
  stopMusic(){
    const mgr = this.data._mgr
    mgr.stop()
    app.gIsPlayingMusicId = -1
    app.gIsPlayingMusic = false
    this.setData({
      isPlaying:false
    })
  },

  //点击播放
  onMusic(event){
    const mgr = this.data._mgr
    mgr.src = this.data.music.url
    mgr.title = this.data.music.title
    mgr.coverImgUrl = this.data.music.coverImg
    app.gIsPlayingMusicId = this.data.postId
    this.setData({
      isPlaying: !this.data.isPlaying
    })
    app.gIsPlayingMusic = this.data.isPlaying
    if(!this.data.isPlaying){
      mgr.stop() 
    }
  },
  //分享
  async onShare(){
    const result = await wx.showActionSheet({
      itemList: ['分享到朋友圈','分享到微信'],
    })
    console.log(result);
  },
  //收藏
  onCollect(){
    const pid = this.data.postId
    let postsCollected = this.data._postsCollected
    let collected = postsCollected[pid]
    if(collected == undefined || collected == false){
      postsCollected[pid]=true
      wx.setStorageSync('posts-collected',postsCollected)
    }else{
      postsCollected[pid]=false
      wx.setStorageSync('posts-collected',postsCollected)
    }
    this.setData({
      collected:wx.getStorageSync('posts-collected')[pid]
    })
    wx.showToast({
      title: this.data.collected?'收藏成功':'取消收藏',
      duration: 1000,
    })
    // wx.showModal({
    //   title: '是否收藏文章'
      // cancelColor: 'cancelColor',
      // cancelText: 'A',
      // confirmText: 'B'
    // }).then(data=>{
    //   console.log(data);
    // })

    //wx.showActionSheet 菜单
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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