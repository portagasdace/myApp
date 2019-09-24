import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtTag } from 'taro-ui'
import Api from '@/api/index'

import './index.scss'

export default class List extends Component {
  state = {}

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  /**
   * @description: 连接跳转
   * @param {data} 列表数据
   */
   redriect = async data => {
    try {
      let res  = await Api.getCount({id:data.id})
      console.log(res,'统计')
    } catch (error) {
      console.log(error)
    }
    // Taro.navigateTo({
    //   url: data.link_to
    // })
  }
  render() {
    const { list } = this.props
    return (
      <View className='applist__section__list'>
        {list.map((k, index) => {
          return (
            <View className='applist__section__list__item' key={index}>
              <Image
                className='item__img'
                src={'http://houtai.eshouz.com/' + k.img_url}
              />
              <Text className='item__name'>
                {k.name}
                <AtTag
                  className={[
                    'item__name__label',
                    k.tag === '火爆' && 'hot',
                    k.tag === '最佳' && 'nice',
                    k.tag === '必做' && 'must',
                    k.tag === '推荐' && 'recommend ',
                    k.tag === '最新' && 'new ',
                  ]}
                  size='small'
                  type='primary'
                  circle
                >
                  {k.tag}
                </AtTag>
              </Text>
              <Text className='item__span'>{k.intro}</Text>
              <Text
                className='item__download'
                onClick={this.redriect.bind(this, k)}
              >
                去赚钱
              </Text>
            </View>
          )
        })}
      </View>
    )
  }
}
