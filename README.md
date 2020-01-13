# wx-scroll-components
微信小程序中的左右联动滚动

api文档：

	1.属性：
	
		 1. leftBarWidth : 左侧bar宽度，默认是 23%，可以传 rpx 、百分比，记得都要带上单位  type:String   ======非必传
		 2. rightBarWidth :右侧盒子宽度，默认是 77%，可以传 rpx 、百分比，记得都要带上单位  type:String  ======非必传
		 3. leftBarClick : 左侧每一项的点击事件传过来参数 e，其中包含了所点击的名称以及下标，id   ======非必传
		 4. slot : 遍历左侧每一个bar对应的内容，传到组件中 ，slot="{{index}}" 为固定值，，不可更改。 ======必传
		 5. warpHeight:外围盒子的高度，默认值是800rpx。type:String  ======非必传
		 6. clickedClass : 传递样式点击时的样式，直接传递样式
		 7. unclicked : 传递未点击时的样式，传class，在父组件wxss中写样式，注意权重，加上   !important   。

		 
	2.事件：
	
		1. bind:barItemClick ： 左边每一项的点击事件
		2. bind:leftContentScroll : 左边滚动事件
		3. bind:leftScrollToTop : 左边滚动到顶事件
		4. bind:leftScrollToBottom  : 左边滚动到底事件
		5. bind:rightContentScroll :  右边滚动事件
		6. bind:rightScrollToBottom :右边滚动到底事件
		7. bind:bindscrolltolower : 右边滚动到顶事件
    
  说明：
     1.  components/ScrollBox是滚动联动的插件，pages/scroll是demo 里面也有相关的说明，demo中的数据是引入的静态文件（utils/data.js），一定要注意传入的数据格式！！！！参考 utils/data.js文件。
     2.  我的图片来自京东到家，如果图片不显示，可能是人家已经删掉，将图片替换掉即可。

![image](https://github.com/qdzjp/wx-scroll-components/blob/master/static/20200113144608.gif)
![image](https://github.com/qdzjp/wx-scroll-components/blob/master/static/20200113144639.png) 
![image](https://github.com/qdzjp/wx-scroll-components/blob/master/static/20200113144646.png) 

