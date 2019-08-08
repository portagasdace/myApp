import Taro, { Component } from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import { View, Input } from '@tarojs/components'

import Api from "@/api/index";

import banner1 from '@/assets/img-banner1.jpg'
import banner2 from '@/assets/img-banner2.jpg'
import banner3 from '@/assets/img-banner3.jpg'
import banner4 from '@/assets/img-banner4.jpg'

import './index.scss'
import Header from './component/header'
import Banner from './component/banner'
import Menu from './component/menu'
import Notice from './component/notice'
import Area from './component/textarea'

export default class Index extends Component {
  state = {
    bannerList: [banner1, banner2, banner3, banner4],
    params: {
      region_type: "national",
      channel_type: "all",
      order: "desc"
    },
  }

  componentWillMount=()=> {
    this.init()
  }

  componentDidMount() {}

  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  init = async () => {
    try {
      const { params } = this.state;
      Taro.showLoading({
        title: '加载中',
      });
      console.log(await Api.getRealTimeList(params),'await Api.getRealTimeList(params)')
      await Api.getRealTimeList(params).then(res => {
        console.log(res)
      });
      Taro.hideLoading();
    } catch (error) {
      console.log(error)
      Taro.hideLoading();
    }
  };
  config = {
    navigationBarTitleText: '首页'
  }
  render() {
    const { bannerList } = this.state
    return (
      <View className='index'>
        <Header />
        <View className='section'>
          <Banner bannerList={bannerList} />
          <Notice />
          <Menu />
          <Area />
          <Input
            className='section__input'
            placeholder='吐槽一下'
            type='text'
          />
          <AtButton className='section__button' size='small' type='primary'>
            提交
          </AtButton>
        </View>
        <View className='footer'>
          <p>更多赚钱任务在更新中...敬请期待</p>
          <p>官方唯一网址:eshouz.com</p>
        </View>
      </View>
    )
  }
}
