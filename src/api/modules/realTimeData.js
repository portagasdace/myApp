export default {
  /**
   * @title 获得实时数据接口
   * @param {string} order 排序
   * @param {string} channel_type 频道 all(全部频道) cctv(央视频道) weishi(卫视频道)
   * @param {string} region_type 地点 national(全国) city52(52城) city35(35城)
   */
  getRealTimeList({ channel_type, order, region_type }) {
    return this.get(`${this.API_HOST}/v1/audiences/real/${region_type}`, {
      order,
      channel_type,
    })
  }
}
