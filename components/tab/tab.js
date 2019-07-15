// // components/tab/tab.js
// Page({
//   /**
//    * 页面的初始数据
//    */
//   data: {
//     tabList: [
//       { tabName: "可回收", isSelected: true },
//       { tabName: "干垃圾", isSelected: false },
//       { tabName: "湿垃圾", isSelected: false },
//       { tabName: "有害垃圾", isSelected: false }
//     ],
//     selectedIndex: 0
//   },

//   selectTab: function(e) {
//     console.log(e);
//     this.setData({
//       selectedIndex: e.currentTarget.dataset["index"]
//     });
//   },

// });

Component({
  properties: {
    //配置页面传过来的值,key值要一一对应
    tabList: {
      type: Array, //必填，目前接受的类型包括：String,Number,Boolean, Object, Array, null（表示任意类型）
      value: [] //可选，默认值，如果页面没传值过来就会使用默认值
    },
    selectedIndex: {
      type: Number,
      value: 0
    }
  },
  methods: {
    selectTab: function(e) {
      this.setData({
        selectedIndex: e.currentTarget.dataset["index"]
      });
    }
  }
});
