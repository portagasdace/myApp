import Taro, { Component } from '@tarojs/taro'
import { AtButton, AtMessage } from 'taro-ui'
import { View, Input } from '@tarojs/components'

import Api from '@/api/index'

import './index.scss'
import Header from './component/header'
import Banner from './component/banner'
import Menu from './component/menu'
import Notice from './component/notice'
import Area from './component/textarea'

let  myVar = ''
export default class Index extends Component {
  state = {
    flags: {
      disabled: false
    },
    value: '',
    textList:[],
    bannerList: []
  }

  componentWillMount = () => {
    this.get_BannerList()
    this.get_LeaveMsg()
  }

  componentDidMount() {}

  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  get_BannerList = async () => {
    try {
      Taro.showLoading({
        title: '加载中'
      })
      const res = await Api.getBannerList({type:1})
      if (res.code === 200) {
        let srcList = []
        res.data.map(k => {
          srcList.push('http://houtai.eshouz.com/' + k.img_url)
        })
        this.setState({
          bannerList: srcList
        })
      }
      Taro.hideLoading()
    } catch (error) {
      console.log(error)
      Taro.hideLoading()
    }
  }
  config = {
    navigationBarTitleText: '一手赚'
  }
  /**
   * @title  留言改变
   */
  onChange(data) {
    this.setState({
      value: data.detail.value
    })
  }
  /**
   * @title 提交留言
   */
  submit = async () => {
    const { value } = this.state
    try {
      const res = await Api.setLeaveMsg({ content: value })
      if (res.message === 'OK') {
        Taro.atMessage({
          message: '提交成功，一段时间之后在提交吧！',
          type: 'success'
        })
        this.setState({
          value: '',
          flags: {
            disabled: true
          }
        })
        myVar = setInterval(this.myTimer, 10000);
      }
    } catch (error) {
      console.log(error)
    }
  }
  /**
   * @title
   */
  get_LeaveMsg = async () =>{
    try {
      const res = await Api.getLeaveMsg()
      if(res.code === 200){
        this.setState({
          textList:res.data
        })
      }
    } catch (error) {
      
    }
  }
  /**
   * 计时器
   */
   myTimer = () =>{
    this.setState({
      value: '',
      flags: {
        disabled: false
      }
    })
    clearTimeout(myTimer)
  }
  render() {
    const { bannerList, value, flags, textList } = this.state
    return (
      <View className='index'>
        <AtMessage />
        <Header />
        <View className='section'>
          <Banner bannerList={bannerList} />
          <Notice />
          <Menu />
          <Area textList={textList} />
          <Input
            value={value}
            onChange={this.onChange.bind(this)}
            className='section__input'
            placeholder='吐槽一下'
            type='text'
          />
          <AtButton
            disabled={flags.disabled}
            className='section__button'
            size='small'
            type='primary'
            onClick={this.submit.bind(this)}
          >
            提交
          </AtButton>
        </View>
        <View className='footer'>
          <p>更多赚钱任务在更新中...敬请期待</p>
          <p>官方唯一网址:eshouz.com</p>
        </View>
      </View>
    )
  }
}
