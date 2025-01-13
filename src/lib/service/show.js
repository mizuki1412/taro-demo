import {nextTick} from "vue";
import Taro from "@tarojs/taro";

export function showErrorMsg(msg){
  Taro.showToast({title:msg, duration:2000});
}

export function useLoading(loadingValue, fn) {
  return async function (...rest) {
    Taro.showLoading({
      title: 'loading...',
    })
    loadingValue.value = true
    try {
      // 存在渲染慢导致loading效果没出来的情况
      await nextTick(async ()=>await fn.apply(this, rest))
    } catch (e) {
      throw e
    } finally {
      Taro.hideLoading
    }
  }
}

// modal.value.loading需要存在
export function useLoadingModal(modalValue, fn) {
  return async function (...rest) {
    modalValue.value.loading = true
    try {
      await fn.apply(this, rest)
    } catch (e) {
      throw e
    } finally {
      modalValue.value.loading = false
    }
  }
}

// object.loading
export function useLoadingObject(object, fn) {
  return async function (...rest) {
    object.loading = true
    try {
      await fn.apply(this, rest)
    } catch (e) {
      throw e
    } finally {
      object.loading = false
    }
  }
}
