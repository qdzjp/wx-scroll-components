// components/ScrollBox.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses:['unclicked'],
  options:{
	  multipleSlots: true
  },
  properties: {
	leftDataArr:Array,
	leftBarWidth:{
		type:String,
		value:'23%'
	},
	rightContentWidth:{
		type:String,
		value:'77%'
	},
	warpHeight:{
		type:String,
		value:'800rpx'
	},
	clickedClass:{
		type:String,
		value:'color:#333;background-color:#fff;font-weight:bold'
	}
  },

  /**
   * 组件的初始数据
   */
  data: {
	clickIndex:0,
	scrollId:'item_0',
	rightItemHeght:[],
	rightOuterHeight:0,
	leftItemHeght:[],
	leftBox:{centerHeight:0,outerHeight:0},
	leftScrollHeight:0
  },
  pageLifetimes:{
	show(){
		console.log(this.data);
		let that = this;
		this.data.rightItemHeght=[];
		let arr=this.data.rightItemHeght;
		let leftArr=this.data.leftItemHeght;

		//获取左侧栏的高度以及内部滚动区域的高度
		let leftObj={centerHeight:0,outerHeight:0};
		 wx.createSelectorQuery().in(this).select('.scroll-left').boundingClientRect(function (rect) {
			leftObj.outerHeight=rect.height;
		 }).exec();
		 // 获取右边的外围的高度
		 wx.createSelectorQuery().in(this).select('#scroll-right').boundingClientRect(function (rect) {
			
			that.data.rightOuterHeight=rect.height;
		 }).exec();
		
		//选择id	
		for(let i=0;i<this.data.leftDataArr.length;i++){
			let id='#item_'+i;
			let leftId='#left_item_'+i;
			// 计算右边的总高度
			wx.createSelectorQuery().in(this).select(id).boundingClientRect(function (rect) {
				let obj={
					name:'item'+i,
					min:i==0?0:arr[i-1].max,
					height:rect.height,
					max:i==0?rect.height:arr[i-1].max+rect.height,
				};
				arr.push(obj);
			}).exec();
			// 计算左边的总高度
			wx.createSelectorQuery().in(this).select(leftId).boundingClientRect(function (rect) {
				let obj={
					name:'left_item_'+i,
					min:i==0?0:leftArr[i-1].max,
					height:rect.height,
					max:i==0?rect.height:leftArr[i-1].max+rect.height,
				};
				leftArr.push(obj);
				leftObj.centerHeight+=rect.height;
			}).exec();
		};
		that.setData({
			rightItemHeght:arr,
			leftBox:leftObj,
			leftItemHeght:leftArr
		},function(res){
			console.log(that.data.rightItemHeght)
			console.log(that.data.leftBox)
			console.log(that.data.leftItemHeght)
		})
	}
	  
  },

  /**
   * 组件的方法列表
   */
  methods: {
	  // 左侧栏每一项点击事件
	leftClick(e){
	  this.setData({
		  clickIndex:e.currentTarget.dataset.index,
		  scrollId:'item_'+e.currentTarget.dataset.index
	  },function(){
		  this.triggerEvent('barItemClick',e);
	  })
	},
	  // 左侧栏滚动事件事件
	leftContentScroll(e){
		 this.triggerEvent('leftContentScroll',e);
	},
	// 左侧滚动到顶了
	leftScrollToTop(e){
		this.triggerEvent('leftScrollToTop',e);
	},
	// 左侧滚动到底了
	leftScrollToBottom(e){
		this.triggerEvent('leftScrollToBottom',e);
	},
	// 右侧滚动事件
	rightContentScroll(e){
		  let scrollTop=e.detail.scrollTop;
		  // console.log(scrollTop);
		  this.data.rightItemHeght.map((item,index)=>{
			// 获取到右侧滚动条的高度
			 let maxHeight=this.data.rightItemHeght[this.data.rightItemHeght.length-1].max-this.data.rightOuterHeight;
			 if(scrollTop>=item.min-50&&scrollTop<item.max-50&&scrollTop<maxHeight-50){
				  if(this.data.clickIndex!=index){
					  this.setData({
						  clickIndex:index
					  })
				  };
				   //左侧是否要滚动的条件  里面的高度大于外面的高度
				  if(this.data.leftBox.centerHeight>this.data.leftBox.outerHeight){
					 let topHeight= this.data.leftItemHeght[index].max;
					 let leftOuterHeightHalf= this.data.leftBox.outerHeight/2;
					 let totalHeight=this.data.leftItemHeght[this.data.leftItemHeght.length-1].max;       
					 this.setData({
						leftScrollHeight:topHeight-leftOuterHeightHalf
					 })
				  };
			 }
		 });
		 this.triggerEvent('rightContentScroll',e);
	},
	// 监听右边滚动到底部
	rightScrollToBottom(e){
		  this.setData({
		  	clickIndex:this.data.leftDataArr.length-1,
			leftScrollHeight:this.data.leftItemHeght[this.data.leftItemHeght.length-1].max
		  });
		 this.triggerEvent('rightScrollToBottom',e); 
	},
	// 监听右边滚动到顶
	rightScrollToTop(e){
		  console.log(e,'到顶了');
		  this.setData({
			leftScrollHeight:0
		  });
		this.triggerEvent('rightScrollToTop',e); 
	},
	clicks(e){
		console.log(e);
		this.triggerEvent('events')
	}
  }
})
