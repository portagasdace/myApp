import Taro, { Component } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'

import '../index.scss'

export default class Banner extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  render() {
    const { bannerList } = this.props
    return (
      <View className='banner'>
        <Swiper
          className='section__bannner'
          indicatorColor='#fff'
          indicatorActiveColor='#3385ff'
          vertical={false}
          circular
          indicatorDots
          autoplay
        >
          {bannerList.map((k, index) => {
            return (
              <SwiperItem key={index}>
                <View className='section__bannner__item'>
                  <Image className='section__bannner__item__img' src={k} />
                </View>
              </SwiperItem>
            )
          })}
        </Swiper>
      </View>
    )
  }
}
