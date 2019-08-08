import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtTag } from 'taro-ui'

import './index.scss'

export default class List extends Component {
  state = {}

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { list } = this.props
    return (
      <View className='applist__section__list'>
        {list.map((k, index) => {
          return (
            <View className='applist__section__list__item' key={index}>
              <Image className='item__img' src={k.src} />
              <Text className='item__name'>
                {k.name}
                <AtTag
                  className='item__name__label'
                  size='small'
                  type='primary'
                  circle
                >
                  标签
                </AtTag>
              </Text>
              <Text className='item__span'>{k.span}</Text>
              <Text className='item__download'>去赚钱</Text>
            </View>
          )
        })}
      </View>
    )
  }
}
