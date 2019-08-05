import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import { AtGrid } from 'taro-ui'

import ios from '@/assets/img-ios.jpg'
import android from '@/assets/img-android.jpg'
import money from '@/assets/img-money.jpg'
import waite from '@/assets/img-waite.jpg'

import '../index.scss'

export default class Menu extends Component {
  state = {
    menuList: [
      {
        path: '/pages/appList/index',
        src: ios
      },
      {
        path: '/pages/appList/index',
        src: android
      },
      {
        path: '',
        src: money
      },
      {
        path: '',
        src: waite
      }
    ]
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  /**
   * @title 菜单点击事件
   */
  menu_chlickHandler(data) {
    Taro.navigateTo({
      url: data.path
    })
  }
  render() {
    const { menuList } = this.state
    return (
      <View className='menu'>
        {menuList.map((k, index) => {
          return (
            <View
              key={index}
              className='menu__item'
              onClick={this.menu_chlickHandler.bind(this, k)}
            >
              <Image className='menu__item__img' src={k.src} />
            </View>
          )
        })}
      </View>
    )
  }
}
