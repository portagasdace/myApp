import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import List from '@/components/list/list'
import Api from "@/api/index";

import back from '@/assets/icon-back.png'
import app from '@/assets/img-app.jpg'
import banner1 from '@/assets/ios-banner1.jpg'
import banner2 from '@/assets/ios-banner2.jpg'

import Banner from '../index/component/banner'

import './index.scss'


export default class appList extends Component {
  state = {
    appLists: [
      {
        src: app,
        name: '店铺',
        span: '新平台大量任务'
      },
      {
        src: app,
        name: '店铺',
        span: '新平台大量任务'
      },
      {
        src: app,
        name: '店铺',
        span: '新平台大量任务'
      },
      {
        src: app,
        name: '店铺',
        span: '新平台大量任务'
      },
      {
        src: app,
        name: '店铺',
        span: '新平台大量任务'
      },
      {
        src: app,
        name: '店铺',
        span: '新平台大量任务'
      },
      {
        src: app,
        name: '店铺',
        span: '新平台大量任务'
      }
    ],
    bannerList: [banner1, banner2]
  }

  componentWillMount() {
    this.init()
    // this.get_BannerList();
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '苹果专区'
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
    try {
      let param={
        platformType:1,
        offset:1
      }
      const res = await Api.getpaltFormList(param)
      console.log(res)
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
   * @title 返回
   */
  back_clickHandle() {
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }
  render() {
    const { appLists, bannerList } = this.state
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
          <View className='applist__section__swiepr'>
            <Banner bannerList={bannerList} />
          </View>
          <List list={appLists}></List>
        </View>
      </View>
    )
  }
}
