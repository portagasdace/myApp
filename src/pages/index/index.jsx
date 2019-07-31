import Taro, { Component } from '@tarojs/taro'
import { AtNoticebar } from 'taro-ui'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'

import './index.scss'

import logo from '../../assets/icon-logo.png'
import weChart from '../../assets/icon-weChart.png'
import qq from '../../assets/icon-qq.png'
import banner1 from '../../assets/img-banner1.jpg'
import banner2 from '../../assets/img-banner2.jpg'
import banner3 from '../../assets/img-banner3.jpg'
import banner4 from '../../assets/img-banner4.jpg'

export default class Index extends Component {
  state = {
    bannerList: [banner1, banner2, banner3, banner4]
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '首页'
  }
  render() {
    const { bannerList } = this.state
    return (
      <View className='index'>
        <View className='header'>
          <Image className='header__logo' src={logo} />
          <View className='header__customer'>
            <Text className='header__customer__span'>客服</Text>
            <Image className='header__customer__weChart' src={weChart} />
            <Image className='header__customer__qq' src={qq} />
          </View>
        </View>
        <View className='section'>
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
          <View className='section__notice'>
            <Text className='section__title'>公告</Text>
            <AtNoticebar
              icon='volume-plus' 
              marquee
              single
            >
              这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
            </AtNoticebar>
          </View>
          
        </View>
      </View>
    )
  }
}
