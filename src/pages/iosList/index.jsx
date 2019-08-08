import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import List from '@/components/list/list'

import back from '@/assets/icon-back.png'
import app from '@/assets/img-app.jpg'
import banner1 from '@/assets/img-banner1.jpg'
import banner2 from '@/assets/img-banner2.jpg'
import banner3 from '@/assets/img-banner3.jpg'
import banner4 from '@/assets/img-banner4.jpg'

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
    bannerList: [banner1, banner2, banner3, banner4]
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '列表'
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
