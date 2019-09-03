/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 13:26:09
 * @LastEditTime: 2019-08-22 10:26:13
 * @LastEditors: Please set LastEditors
 */
import Taro from '@tarojs/taro'
import Host from "../config/host"
import RealTimeDataApi from "./modules/realTimeData"

const interceptor = function (chain) {
  const requestParams = chain.requestParams
  // const { method, data, url } = requestParams
  // console.log(`http ${method || 'GET'} --> ${url} data: `, data)
  return chain.proceed(requestParams)
    .then(res => {
      // console.log(`http <-- ${url} result:`, res)
      return res.data
    })
}

Taro.addInterceptor(interceptor)
Taro.addInterceptor(Taro.interceptors.timeoutInterceptor)
export default {
  ...Host,
  ...RealTimeDataApi,

  get(url, data, { header, dataType } = {}) {
    return this.$http({ method: "GET", header, url, data, dataType })
  },
  post(url, data, { header, dataType } = {}) {
    return this.$http({ method: "POST", header, url, data, dataType })
  },
  del(url, data, { header, dataType } = {}) {
    return this.$http({ method: "DELETE", header, url, data, dataType })
  },
  put(url, data, { header, dataType } = {}) {
    return this.$http({ method: "PUT", header, url, data, dataType })
  },
  $http({ method, url, data, header = {'content-type': 'application/json'}, dataType = "json" }) {
    return Taro.request({
      method,
      url,
      data,
      dataType,
      header
    })
  }
}
