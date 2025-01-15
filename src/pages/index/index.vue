<template>
  <view class="index">
    <div @tap="handle">{{ msg }}</div>
    <div class="flex justify-center text-[#acc855]">XXHH</div>
    <button class="mt-2 bg-red-400">abc</button>
    <nut-button type="primary" class="mt-2">abc</nut-button>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import './index.css'
import { useDidShow, useLoad, useReady, useTabItemTap, useRouter } from '@tarojs/taro'
import Taro from '@tarojs/taro'
import {request} from "../../lib/request";
import {navigateTo} from "../../lib/service/router";

useReady(()=>{
  console.log("ready")
})

// { path: '', params: { ... } }
const route = useRouter()

const msg = ref('Hello wor2 ')

async function handle(){
  // let res = await request("/demo/post/e", {phone: "abs"},)
  // console.log(res)
  navigateTo('/pages/page1/page1', {abc:1})
}
</script>
