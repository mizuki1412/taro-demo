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
  console.log(223)
})

// { path: '', params: { ... } }
const route = useRouter()

const msg = ref('Hello world2 7 ')

async function handle(){
  console.log(new Date(), msg.value)
  let res = await request("/rest/audio/login", {username: "abs"}, {throwable: false})
  console.log(res)
}
</script>
