import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'

import noice from '@/assets/icon-noice.png'

export default class Noice extends Component {
  state = {
    noiceList: [
      '这是王一飞的第一个公告，通报品评1',
      '这是王一飞的第一个公告，通报品评2',
      '这是王一飞的第一个公告，通报品评3'
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
      <View className='section__noice__content'>
        <Image className='section__noice__img' src={noice} />
        <Swiper
          className='section__noice__swiper'
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
                <View className='section__noice__item'>
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
