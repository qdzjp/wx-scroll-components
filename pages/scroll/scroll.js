// pages/scroll/scroll.js
// 引入外部的列表数据用于渲染数据
var listData=require('../../utils/data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  leftBarWidth:'23%',
	  rightContentWidth:'77%',
	  warpHeight:"1000rpx",
	  listArr:listData
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	// console.log(this.data.listArr.listData);
	this.setData({
		listArr:listData.listData
	})
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

  },
  leftContentScroll(e){
	 // console.log(e);
  },
  leftScrollToTop(e){
	  // console.log(e,'到顶了');
  },
  leftScrollToBottom(e){
	  // console.log(e,'到底了');
  },
  rightContentScroll(e){
	  // console.log('右侧滚动了');
  },
  rightScrollToBottom(e){
	  // console.log(e,'到底了');
  },
  bindscrolltolower(e){
	  console.log(e,'到顶了');
  }
  

})