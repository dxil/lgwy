//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [
      {
        labelId: '1',
        label: '感冒',
        newArticle: {name: '一早起来感冒'}
      },
      {
        labelId: '2',
        label: '发烧',
        newArticle: { name: '晚上起来发烧' }
      },
      {
        labelId: '3',
        label: '腿痛',
        newArticle: { name: '中午腿痛' }
      },
      {
        labelId: '4',
        label: '头痛',
        newArticle: { name: '一学习就头痛' }
      },
      {
        labelId: '5',
        label: '痛经',
        newArticle:{ name: '吃冰淇淋就痛经' }
      },
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  toLabel: function (event) {
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `../label/label?id=${id}`
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
