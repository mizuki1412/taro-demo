export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/page1/page1',
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
        iconPath: '',
        selectedIconPath: ''
      },
      {
        pagePath: 'pages/page1/page1',
        text: 'p1',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#2563eb',
    navigationBarTextStyle: 'white'
  }
})
