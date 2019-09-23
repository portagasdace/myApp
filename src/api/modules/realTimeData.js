/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 13:31:17
 * @LastEditTime: 2019-09-23 17:31:17
 * @LastEditors: 刘玉生
 */
export default {
  /**
   * @title 获得轮播图列表接口
   */
  getBannerList({type}) {
    return this.post(`${this.API_HOST}/banner/list`,{type})
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
  },
  /**
   * @title 查看留言接口
   * @param {content} 内容  
   */
  getLeaveMsg() {
    return this.get(`${this.API_HOST}/leaveMsg/list`)
  }
}
