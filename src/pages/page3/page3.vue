<template>
  <div class="index">
    <div class="mb-1 ">page3</div>
    <Button color="primary" @tap="click">主要按钮</Button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {useReady, useRouter} from "@tarojs/taro";

const route = useRouter()
useReady(()=>{
  console.log("route: ", route)
})
function click(){
  console.log("click")
}
</script>
