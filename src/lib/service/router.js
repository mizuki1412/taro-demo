import Qs from "qs";
import Taro from "@tarojs/taro";

function genParamsUrl(url, params){
  return url+"?"+Qs.stringify(params, {
    skipNulls: true,
  })
}

export function navigateTo(url, params){
  Taro.navigateTo({url: genParamsUrl(url, params)})
}
