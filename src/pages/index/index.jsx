import Taro, { Component } from '@tarojs/taro'
import { AtButton, AtInput, AtDivider } from 'taro-ui'
import { View, Text,Input } from '@tarojs/components'

import './index.scss'

import Header from './component/header'
import Banner from './component/banner'
import Menu from './component/menu'
import Notice from './component/notice'
import Area from './component/textarea'

import banner1 from '@/assets/img-banner1.jpg'
import banner2 from '@/assets/img-banner2.jpg'
import banner3 from '@/assets/img-banner3.jpg'
import banner4 from '@/assets/img-banner4.jpg'

export default class Index extends Component {
  state = {
    value: '',
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
  handleChange (value) {
    this.setState({
      value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }
  render() {
    const { bannerList } = this.state
    return (
      <View className='index'>
        <Header />
        <View className='section'>
          <Banner bannerList={bannerList} />
          <Notice />
          <Menu />
          <Area />
          <Input className='section__input' placeholder="吐槽一下" type="text"/>
          <AtButton className='section__button' size='small' type='primary'>
            提交
          </AtButton>
        </View>
        <View className="footer">
          <p>更多赚钱任务在更新中...敬请期待</p>
          <p>官方唯一网址:eshouz.com</p>
         </View>
      </View>
    )
  }
}
