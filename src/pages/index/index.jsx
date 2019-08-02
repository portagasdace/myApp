import Taro, { Component } from '@tarojs/taro'
import { AtButton, AtInput, AtDivider } from 'taro-ui'
import { View, Text } from '@tarojs/components'

import Header from './component/header'
import Banner from './component/banner'
import Menu from './component/menu'
import Notice from './component/notice'

import './index.scss'

export default class Index extends Component {
  state = {
    value: ''
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
    return (
      <View className='index'>
        <Header />
        <View className='section'>
          <Banner />
          <View className='section__notice'>
            <Notice />
          </View>
          <Menu />
          <View className='section__textarea'>
            <View className='section__textarea__item' title=''><Text>标题文字...</Text></View>
            <View className='section__textarea__item' title='标题文字'><Text>标题文字...</Text></View>
            <View className='section__textarea__item' title='标题文字'><Text>标题文字...</Text></View>
            <View className='section__textarea__item' title='标题文字'><Text>标题文字...</Text></View>
            <View className='section__textarea__item' title='标题文字'><Text>标题文字..</Text></View>
          </View>
          <AtInput
            name='value1'
            title='文本'
            type='text'
            placeholder='单行文本'
            value={this.state.value1}
            onChange={this.handleChange.bind(this)}
          />
          <AtButton className='section__button' size='small' type='primary'>
            提交
          </AtButton>
          <AtDivider content='更多转钱任务在更新中...敬请期待' />
        </View>
      </View>
    )
  }
}
