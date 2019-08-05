import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtTag } from 'taro-ui'


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
          <View className='applist__section__list'>
            {appLists.map((k, index) => {
              return (
                <View className='applist__section__list__item' key={index}>
                  <Image className='item__img' src={k.src} />
                  <Text className='item__name'>
                    {k.name}
                    <AtTag
                      className='item__name__label'
                      size='small'
                      type='primary'
                      circle
                    >
                      标签
                    </AtTag>
                  </Text>
                  <Text className='item__span'>{k.span}</Text>
                  <Text className='item__download'>去赚钱</Text>
                </View>
              )
            })}
          </View>
        </View>
      </View>
    )
  }
}
