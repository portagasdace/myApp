import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import '../index.scss'

export default class textArea extends Component {
  state = {
    textList: []
  }
  componentWillMount() {
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  render() {
    const { textList } = this.props
    return (
      <View className='section__textarea'>
        {textList.map((k, index) => {
          return (
            <View className='section__textarea__item' title='' key={index}>
              <Text style='display:block;width:30px;float:left'>{String.fromCharCode(65+Math.ceil(Math.random() * 25))}{Math.floor((Math.random()*90)+10)}</Text>
              <Text> : {k.content}</Text>
            </View>
          )
        })}
      </View>
    )
  }
}
