/* WeTypecho-微信小程序版Typecho
   使用教程：www.2012.pro
   有任何使用问题请联系作者QQ 294351525
*/


var ind = require('../../mixins/index.js')
var cat = require('../../mixins/cat.js')
var about = require('../../mixins/about.js')
import { $stopWuxRefresher, $stopWuxLoader } from '../../dist/wux/index'

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
    testItems: [],
    count: 10,
  },
  onLoad() {
    let item = []
    for (let i = 0; i < this.data.count; i++) {
      let v = {
        title: `项目-${i}`,
        content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
      }
      item.push(v)
    }

    this.setData({
      testItems: item
    })
  },
  onRefresh() {
    console.log('onRefresh')
    this.setData({
      count: 10,
    })
    let item = []
    for (let i = 0; i < this.data.count; i++) {
      let v = {
        title: `项目-${i}`,
        content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
      }
      item.push(v)
    }

    setTimeout(() => {
      this.setData({
        testItems: item,
      })
      $stopWuxRefresher()
    }, 4000)
  },
  onLoadmore() {
    console.log('onLoadmore')
    let item = []
    for (let i = this.data.count; i < this.data.count + 10; i++) {
      let v = {
        title: `项目-${i}`,
        content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
      }
      item.push(v)
    }
    setTimeout(() => {
      this.setData({
        testItems: [
          ...this.data.testItems,
          ...item
        ],
        count: this.data.count + 10
      })

      if (this.data.testItems.length < 30) {
        $stopWuxLoader()
      } else {
        console.log('没有更多数据')
        $stopWuxLoader('#wux-refresher', this, true)
      }

    }, 4000)
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