import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'

import noice from '@/assets/icon-noice.png'

import '../index.scss'

export default class textArea extends Component {
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
      <View className='section__textarea'>
        <View className='section__textarea__item' title=''>游客1：<Text>标题文字标题文字标题文字标题文字标题文字标题文字标题文字</Text></View>
        <View className='section__textarea__item' title='标题文字'>游客2：<Text>标题文字...</Text></View>
        <View className='section__textarea__item' title='标题文字'>游客3：<Text>标题文字...</Text></View>
        <View className='section__textarea__item' title='标题文字'>游客4：<Text>标题文字...</Text></View>
        <View className='section__textarea__item' title='标题文字'>游客5：<Text>标题文字..</Text></View>
    </View>
    )
  }
}
