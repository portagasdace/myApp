/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 13:31:17
 * @LastEditTime: 2019-08-22 10:53:07
 * @LastEditors: Please set LastEditors
 */
export default {
  /**
   * @title 获得轮播图列表接口
   */
  getBannerList() {
    return this.get(`${this.API_HOST}/banner/list`)
  },
  /**
   * @title 获得平台软件列表接口
   * @param {platformType} 类型  1 安卓  2苹果  
   */
  getpaltFormList({platformType,offset}) {
    return this.post(`${this.API_HOST}/platform/list`,{platformType,offset})
  },
  /**
   * @title 获得平台软件列表接口
   * @param {content} 内容  
   */
  setLeaveMsg({content}) {
    return this.post(`${this.API_HOST}/leaveMsg/put`,{content})
  }
}
