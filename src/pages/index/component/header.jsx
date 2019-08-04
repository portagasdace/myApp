import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import logo from '@/assets/icon-logo.png'
import weChart from '@/assets/icon-weChart.png'
import qq from '@/assets/icon-qq.png'

import '../index.scss'

export default class Header extends Component {
  state = {}
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  render() {
    return (
      <View className='head'>
        <Image className='head__logo' src={logo} />
        <View className='head__customer'>
          <Text className='head__customer__span'>客服</Text>
          <Image className='head__customer__weChart' src={weChart} />
          <Image className='head__customer__qq' src={qq} />
        </View>
      </View>
    )
  }
}
