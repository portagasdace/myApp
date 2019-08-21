import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtModal, AtModalContent, AtModalAction,AtButton } from "taro-ui"
import logo from '@/assets/icon-logo.png'
import weChart from '@/assets/icon-weChart.png'
import qq from '@/assets/icon-qq.png'
import barcodeWeChart from '@/assets/weChart.jpg'
import barcodeQq from '@/assets/qq.jpg'
import close from '@/assets/close.png'

import '../index.scss'

export default class Header extends Component {
  state = {
    flags:{
      isOpen:''
    }
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  /**
   * @title 客服点击事件
   */
  wechartOrqq_clickHandler = (value) =>{
    const { flags } = this.state
    if(value === 'qq'){
      this.setState({
        flags:{
          isOpenQq:true
        }
      })
    }else{
      this.setState({
        flags:{
          isOpenWeChart:true
        }
      })
    }
    
  }
  /**
   * @title 返回
   */
  back =()=>{
    this.setState({
      flags:{
        isOpenWeChart:false,
        isOpenQq:false
      }
    })
  }
  render() {
    const { flags } = this.state
    return (
      <View className='head'>
        <Image className='head__logo' src={logo} />
        <View className='head__customer'>
          <Text className='head__customer__span'>客服</Text>
          <Image className='head__customer__weChart' onClick={this.wechartOrqq_clickHandler.bind(this,'weChart')} src={weChart} />
          <Image className='head__customer__qq' onClick={this.wechartOrqq_clickHandler.bind(this,'qq')} src={qq} />
        </View>
        <AtModal className='head__modal' isOpened={flags.isOpenWeChart}>
          <AtModalContent>
            <Image className="head__modal__img" src={barcodeWeChart} />
            <Image className="head__modal__close" src={close} onClick={this.back.bind(this)}/>
          </AtModalContent>
        </AtModal>
        <AtModal className='head__modal' isOpened={flags.isOpenQq}>
          <AtModalContent>
          <Image className="head__modal__img" src={barcodeQq} />
          <Image className="head__modal__close" src={close} onClick={this.back.bind(this)} />
          </AtModalContent>
        </AtModal>
      </View>
    )
  }
}
