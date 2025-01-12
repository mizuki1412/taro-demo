/**
 * 返回一个延迟给定时间resolve的Promise对象，用于使当前异步函数休眠
 * @param duration 持续时间（毫秒）
 */
export function sleep(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration))
}

// 取对象中的key链值, key支持key1.key2.key3
export function getObjValByKeys(obj, keys){
  let keysArr = keys.split(".")
  if(!obj) return null;
  for(let e of keysArr){
    obj = obj[e]
    if(!obj) return null;
  }
  return obj
}
