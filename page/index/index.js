/* WeTypecho-微信小程序版Typecho
   使用教程：www.2012.pro
   有任何使用问题请联系作者QQ 294351525
*/


var ind = require('../../mixins/index.js')
var cat = require('../../mixins/cat.js')
var about = require('../../mixins/about.js')

// 获取全局应用程序实例对象
var app = getApp();

// 创建页面实例对象
Page({
  /**
   * 页面名称
   */
  name: "index",
  /**
   * 页面的初始数据
   */
  mixins: [ind, cat, about],
  data: {
    wuxTabBar: [{
        key: 0,
        title: '主页',
        icon: '',
        selectedIcon: '',
        path: '',
      },
      // {
      //   key: 1,
      //   title: '排行',
      //   icon: '',
      //   selectedIcon: '',
      //   path: ''
      // },
      {
        key: 2,
        title: '关于',
        icon: '',
        selectedIcon: '',
        path: ''
      }
    ],
    wuxTabBarCurrent: 0,
  },
  // getmidindex(mid) {
  //   for (var i = 0; i < this.data.allcatslist.length; i++)
  //     if (mid == this.data.allcatslist[i].mid) {
  //       return i;
  //     }
  // },
  wuxTabbarChange(e) {
    console.log(e)
    this.setData({
      wuxTabBarCurrent: Number(e.detail.key)
    })
  },
})