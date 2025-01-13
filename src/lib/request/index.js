import {HttpHeader} from "./const"
import {storeUserInfo} from "../store/userInfo";
import Taro from "@tarojs/taro";
import {showErrorMsg} from "../service/show";

/// 重载配置项
export const RequestConfig = {
  // todo 处理认证失败
  authErrorHandler: (res, config) => {
    if (config.auth && res.data && res.data.result === this.defaultCodeAuthFail) {

    }
  },
  // 业务错误处理
  errorHandle(res, url, config) {
    // 处理认证失败
    if(RequestConfig.authErrorHandler){
      RequestConfig.authErrorHandler(res, config);
    }
    let msg = res.data
    if(res.data instanceof Object){
      msg = res.data['message']
    }
    if (config.showMsg){
      showErrorMsg(msg)
    }
    if (config.throwable) {
      throw new Error(msg)
    }
  },
  // 网络异常处理
  exceptionHandle(e, url, config) {
    if (config.showMsg){
      showErrorMsg("网络错误")
    }
    if (config.throwable) {
      throw new Error(e.errMsg)
    }
  },
  // 默认content-type
  defaultContentType: HttpHeader.contentTypeForm,
  // 业务码
  defaultCodeSuccess: 0,
  defaultCodeAuthFail: 401,
  defaultKeyCode: 'status',
  defaultKeyMsg: 'message',
  defaultKeyData: 'data',
}

/**
 * 一般请求，返回数据
 * @param url
 * @param data object
 * @param config  showMsg, throwable,
 */
export async function request(url, data, config = {headers:{}, method: 'POST', auth:true, showMsg:true, throwable:true}) {
  // 补全headers
  if (!config) config = {}
  if (!config.headers) config.headers = {}
  config.headers[HttpHeader.tokenKey] = storeUserInfo.token||''
  if (!config.headers[HttpHeader.contentTypeKey]) {
    config.headers[HttpHeader.contentTypeKey] = RequestConfig.defaultContentType
  }
  if (!config.method) config.method = "POST"
  if (config.auth===undefined) config.auth = true
  if (config.showMsg===undefined) config.showMsg = true
  if (config.throwable===undefined) config.throwable = true
  let requestTask = Taro.request({
    url: process.env.TARO_APP_REQ_BASE_URL+url,
    data,
    method: config.method,
    header:config.headers
  }).catch((e) => {
    // 访问通路不通的时候，而非业务错误
    if(RequestConfig.exceptionHandle){
      RequestConfig.exceptionHandle(e, url, config)
    }
  })
  let res = await requestTask
  if(res.statusCode!==200 || res.data['status']!==RequestConfig.defaultCodeSuccess){
    if(RequestConfig.errorHandle){
      RequestConfig.errorHandle(res, url, config)
    }
  } else{
    return res.data
  }
}


// export function download(url, data, config={auth: true, showMsg:true, throwable:true, filename:null}) {
//   if(!config) config = {}
//   config.responseType = 'blob'
//   return request(url, data, config).then((response)=>{
//     console.log(response)
//     if ('download' in document.createElement('a')) { // 非IE下载
//       const elink = document.createElement('a');
//       if(!config.filename){
//         const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
//         const matches = response.headers["content-disposition"].match(filenameRegex);
//         if (matches) {
//           config.filename = decodeURIComponent(matches[1].replace(/\"/g, ''));
//         }
//       }
//       elink.download = config.filename;
//       elink.style.display = 'none';
//       elink.href = window.URL.createObjectURL(response.data);
//       // console.log(blob)
//       document.body.appendChild(elink);
//       elink.click();
//       window.URL.revokeObjectURL(elink.href); // 释放URL 对象
//       document.body.removeChild(elink);
//     } else { // IE10+下载
//       navigator.msSaveBlob(response.data, config.filename);
//     }
//   })
//   // todo error handle
// }


// export function upload(url, data, config) {
//   if (!config) config = {}
//   if (!config.headers) config.headers = {}
//   config.headers[HttpHeader.contentTypeKey] = HttpHeader.contentTypeMultipart
//   if (config.throwable !== false) config.throwable = true
//   return request(url, data, config)
// }

// export function genGetUrl(urlPath, data={}, config={urlPrefix:null, addTime:true}){
//   if(!config.urlPrefix) config.urlPrefix=process.env.TARO_APP_REQ_BASE_URL
//   if(config.addTime) data["_time"]=new Date().getTime()
//   return config.urlPrefix + urlPath + "?" + Qs.stringify(data, {
//     skipNulls: true,
//   })
// }
