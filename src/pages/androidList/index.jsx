import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import List from '@/components/list/list'
import Api from "@/api/index";

import back from '@/assets/icon-back.png'
import app from '@/assets/img-app.jpg'
import banner1 from '@/assets/img-banner1.jpg'
import banner2 from '@/assets/img-banner2.jpg'
import banner3 from '@/assets/img-banner3.jpg'
import banner4 from '@/assets/img-banner4.jpg'
import { AtPagination } from 'taro-ui'

import Banner from '../index/component/banner'

import './index.scss'
import '../index/index.scss'


export default class androidList extends Component {
  state = {
    total:0,
    current:1,
    appLists: [],
    bannerList: [banner1, banner2, banner3, banner4]
  }

  componentWillMount() {
    this.init()
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '安卓专区'
  }
  /**
   * @title 初始化
   */
  async init(){
    // await this.get_BannerList()
    await this.get_paltformList()
  }
  /**
   * @title 获取平台列表信息
   */
  async get_paltformList(){
    const { current } = this.state
    try {
      let param={
        platformType:1,
        offset:current
      }
      const res = await Api.getpaltFormList(param)
      if(res.message === 'OK'){
        this.setState({
          appLists:res.data
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  /**
   * @description 请求轮播图列表
   */
  get_BannerList = async () => {
    try {
      Taro.showLoading({
        title: '加载中',
      });
      const res = await Api.getBannerList()
      if(res.code === 200){
        let srcList = []
        res.data.map(k=>{
          srcList.push(k.img_url)
        })
        this.setState({
          bannerList:srcList
        })
      }
      Taro.hideLoading();
    } catch (error) {
      console.log(error)
      Taro.hideLoading();
    }
  };
  /**
   * @title 点击页码
   */
  onPageChange = (data) => {
    this.setState({
      current:data.current
    })
    this.get_paltformList()
  }
  /**
   * @title 返回
   */
  back_clickHandle() {
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }
  render() {
    const { appLists, bannerList, total, current } = this.state
    return (
      <View className='applist'>
        <View className='applist__header'>
          <Image
            onClick={this.back_clickHandle.bind(this)}
            className='applist__header__img'
            src={back}
          />
        </View>
        <View className='applist__section'>
          {/* <View className='applist__section__swiepr'>
            <Banner bannerList={bannerList} />
          </View> */}
          <List list={appLists}></List>
          <AtPagination 
            className='page'
            total={total} 
            pageSize={15}
            current={current}
            onPageChange={this.onPageChange.bind(this)}
          ></AtPagination>
        </View>
      </View>
    )
  }
}
