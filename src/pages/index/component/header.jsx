import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import logo from '@/assets/icon-logo.png'
import weChart from '@/assets/icon-weChart.png'
import qq from '@/assets/icon-qq.png'

export default class Header extends Component {
  state = {}
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  render() {
    return (
      <View className='header'>
        <Image className='header__logo' src={logo} />
        <View className='header__customer'>
          <Text className='header__customer__span'>客服</Text>
          <Image className='header__customer__weChart' src={weChart} />
          <Image className='header__customer__qq' src={qq} />
        </View>
      </View>
    )
  }
}
