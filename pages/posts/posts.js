// pages/posts/posts.js
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
  onLoad: function (options) {
    const content = {
        date: "Sep 18 2016",
        title: "正是虾肥蟹壮时",
        imgSrc: "/images/post/crab.png",
        avatar: "/images/avatar/1.png",
        content: "菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",
        reading: "112",
        collection: "96",
        headImgSrc: "/images/post/crab.png",
        author: "林白衣",
        dateTime: "24小时前",
        detail: "菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的荻芦”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，壳凸红脂块块香”；在《世说新语》里，晋毕卓更是感叹“右手持酒杯，左手持蟹螯，拍浮酒船中，便足了一生矣。”漫漫人生长路，美食与爱岂可辜负？于是作为一个吃货，突然也很想回味一下属于我的味蕾记忆。记忆中的秋蟹，是家人的味道，弥漫着浓浓的亲情。\n\n是谁来自山川湖海，却囿于昼夜，厨房与爱？ 是母亲，深思熟虑，聪明耐心。吃蟹前，总会拿出几件工具，煞有介事而乐此不疲。告诉我们螃蟹至寒，需要佐以姜茶以祛寒，在配备的米醋小碟里，亦添入姜丝与紫苏，前者驱寒后者增香。泡好菊花茶，岁月静好，我们静等。",
        postId: 0,
        music: {
          url: "http://music.163.com/song/media/outer/url?id=142604.mp3",
            title: "夜夜夜夜-齐秦",
            coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000"
        }
    }
    this.setData(content)
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