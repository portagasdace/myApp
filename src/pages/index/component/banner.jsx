import Taro, { Component } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'

import banner1 from '@/assets/img-banner1.jpg'
import banner2 from '@/assets/img-banner2.jpg'
import banner3 from '@/assets/img-banner3.jpg'
import banner4 from '@/assets/img-banner4.jpg'

export default class Banner extends Component {
  state = {
    bannerList: [banner1, banner2, banner3, banner4]
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  render() {
    const { bannerList } = this.state
    return (
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
    )
  }
}
