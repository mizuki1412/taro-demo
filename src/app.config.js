export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/page1/page1',
    'pages/page2/page2',
    'pages/page3/page3',
  ],
  tabBar: {
    // custom: true,
    // color: '#000000',
    // selectedColor: '#000000',
    // backgroundColor: '#000000',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/icon/home.png',
        selectedIconPath: 'assets/icon/home.png',
      },
      {
        pagePath: 'pages/page1/page1',
        text: '看看',
        iconPath: 'assets/icon/page1.png',
        selectedIconPath: 'assets/icon/page1.png',
      },
      {
        pagePath: 'pages/page2/page2',
        text: '消息',
        iconPath: 'assets/icon/message.png',
        selectedIconPath: 'assets/icon/message.png',
      },
      {
        pagePath: 'pages/page3/page3',
        text: '用户',
        iconPath: 'assets/icon/user.png',
        selectedIconPath: 'assets/icon/user.png',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#2563eb',
    navigationBarTextStyle: 'white'
  }
})
