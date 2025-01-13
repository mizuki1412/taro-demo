
import { createApp } from 'vue'

import './app.css'
import Taro from "@tarojs/taro";

Taro.addInterceptor(Taro.interceptors.logInterceptor)
Taro.addInterceptor(Taro.interceptors.timeoutInterceptor)

const App = createApp({
  // 可以使用所有的 Vue 生命周期方法
  mounted () {},

  onLaunch (options){

  },

  onShow (options) {
  },

  // 对应 onHide
  onHide () {},

  onError(err){
    console.log("error get: "+err)
  }
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

export default App
