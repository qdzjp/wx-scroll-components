// components/childpages/storeinformation/itemcards/ItemCards.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	itemData:{
		type:Object
	}
  },
	pageLifetimes:{
		show(){
			console.log(this.data.itemData);
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

  }
})
