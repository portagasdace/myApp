import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'

import noice from '@/assets/icon-noice.png'

import '../index.scss'

export default class Noice extends Component {
  state = {
    noiceList: [
      '部分功能还在开发中,但不影响大家赚钱',
      '还望大家多多收藏本网站',
      '以后会有更多好的项目分享给大家'
    ]
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  render() {
    const { noiceList } = this.state
    return (
      <View className='section__notice'>
        <Image className='section__notice__img' src={noice} />
        <View className='section__notice__video'>教程</View>
        <Swiper
          className='section__notice__swiper'
          indicatorColor='#fff'
          indicatorActiveColor='#3385ff'
          circular
          vertical
          duration={500}
          indicatorDots={false}
          autoplay
        >
          {noiceList.map((k, index) => {
            return (
              <SwiperItem key={index}>
                <View className='section__notice__item'>
                  <Text>{k}</Text>
                </View>
              </SwiperItem>
            )
          })}
        </Swiper>
      </View>
    )
  }
}
