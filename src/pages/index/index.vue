<template>
  <view class="index">
    <div @tap="handle">{{ msg }}</div>
    <text>XXHH</text>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import './index.css'
import {sleep} from "../../lib/utils/logic";
import { useDidShow, useLoad, useReady, useTabItemTap, useRouter } from '@tarojs/taro'
import Taro from '@tarojs/taro'
import {request} from "../../lib/request";

useReady(()=>{

})

// { path: '', params: { ... } }
const route = useRouter()

const msg = ref('Hello world2 72 ')

async function handle(){
  let res = await request("/demo/post/e", {phone: "abs"},)
  console.log(res)
}
</script>
