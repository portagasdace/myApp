import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import '../index.scss'

export default class textArea extends Component {
  state = {
    textList: [
      '标题文字标题文字标题文字标题文字标题文字标题文字标题文字',
      '这是王一飞的第一个公告，通报品评2',
      '这是王一飞的第一个公告，通报品评3',
      '这是王一飞的第一个公告，通报品评4'
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
              游客{index + 1}：<Text>{k}</Text>
            </View>
          )
        })}
      </View>
    )
  }
}
