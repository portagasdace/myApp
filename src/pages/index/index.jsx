import Taro, { Component } from '@tarojs/taro'
import { AtNoticebar, AtTextarea, AtButton, AtDivider  } from 'taro-ui'
import { View, Text } from '@tarojs/components'

import Header from './component/header'
import Banner from './component/banner'
import Menu from './component/menu'

import './index.scss'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '首页'
  }
  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return (
      <View className='index'>
        <Header />
        <View className='section'>
          <Banner />
          <View className='section__notice'>
            <Text className='section__title'>公告</Text>
            <AtNoticebar icon='volume-plus' marquee single speed='50'>
              这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
              通告栏
            </AtNoticebar>
          </View>
          <Text className='section__title'>功能</Text>
          <Menu />
          <Text className='section__title'>反馈留言</Text>
          <AtTextarea
            count={false}
            value={this.state.value}
            onConfirm={this.handleChange.bind(this)}
            maxLength={200}
            placeholder='您的意见是...'
          />
          <AtButton className='section__button' size='small' type='primary'>提交</AtButton>
          <AtDivider content='更多转钱任务在更新中...敬请期待' />
        </View>
      </View>
    )
  }
}
