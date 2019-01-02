const Towxml = require('/towxml/main');
require('./vendor/mixin.js')

App({
  Data:{
    userInfo: null,
    zaned: false
  },
  towxml:new Towxml(),
})

// "tabBar": {
//   "color": "#7F8389", 
//   "selectedColor": "#a70101", 
//   "borderStyle": "white", 
//   "list": [
//     {
//       "selectedIconPath": "resources/204首页.png", 
//       "pagePath": "page/index/index", 
//       "iconPath": "resources/204首页-线性.png", 
//       "text": "主页"
//     }, 
//     {
//       "selectedIconPath": "resources/rankon.png", 
//       "pagePath": "page/cat/cat", 
//       "iconPath": "resources/rank.png", 
//       "text": "排行"
//     },
//     {
//       "selectedIconPath": "resources/abouton.png", 
//       "pagePath": "page/about/about",
//       "iconPath": "resources/about.png", 
//       "text": "关于"
//     }
//   ], 
//   "backgroundColor": "#fff"
// }, 