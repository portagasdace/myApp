import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import '../index.scss'

export default class textArea extends Component {
  state = {
    textList: [
      '留言功能还在开发中，后期开放，敬请期待...',
      '有任何疑问都可以随时私聊客服',
      '希望大家给予一些好的建议',
    ]
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  render() {
    const { textList } = this.state
    return (
      <View className='section__textarea'>
        {textList.map((k, index) => {
          return (
            <View className='section__textarea__item' title='' key={index}>
              <Text>{k}</Text>
            </View>
          )
        })}
      </View>
    )
  }
}
