//index.js
import { tabList } from "../../config_data/data";
//获取应用实例
const app = getApp();

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    // tab列表数据
    tabList: tabList.data,
    selectedIndex: tabList.selectedIndex
  }
});
