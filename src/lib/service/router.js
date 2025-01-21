import Qs from "qs";
import Taro from "@tarojs/taro";

// 生成get url
function genParamsUrl(url, params){
  return url+"?"+Qs.stringify(params, {
    skipNulls: true,
  })
}

export function navigateTo(url, params){
  Taro.navigateTo({url: genParamsUrl(url, params)})
}
