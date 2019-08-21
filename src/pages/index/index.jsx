import Taro, { Component } from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import { View, Input } from '@tarojs/components'

import Api from "@/api/index";

import banner1 from '@/assets/img-banner1.jpg'
import banner2 from '@/assets/img-banner2.jpg'
import banner3 from '@/assets/img-banner3.jpg'
import banner4 from '@/assets/img-banner4.jpg'

import './index.scss'
import Header from './component/header'
import Banner from './component/banner'
import Menu from './component/menu'
import Notice from './component/notice'
import Area from './component/textarea'

export default class Index extends Component {
  state = {
    value:'',
    bannerList: [banner1,banner2,banner3,banner4],
    params: {

    },
  }

  componentWillMount=()=> {
    // this.get_BannerList()
  }

  componentDidMount() {}

  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  get_BannerList = async () => {
    try {
      Taro.showLoading({
        title: '加载中',
      });
      const res = await Api.getBannerList()
      if(res.code === 200){
        let srcList = []
        res.data.map(k=>{
          srcList.push(k.img_url)
        })
        this.setState({
          bannerList:srcList
        })
      }
      Taro.hideLoading();
    } catch (error) {
      console.log(error)
      Taro.hideLoading();
    }
  };
  config = {
    navigationBarTitleText: '一手赚'
  }
  /**
   * @title  留言改变
   */
  onChange(data){
    this.setState({
      value:data.detail.value
    })
  }
  /**
   * @title 提交留言
   */
  submit = async ()=>{
    const { value } = this.state
    try {
      const res = await Api.setLeaveMsg({content:value})
      console.log(res)
      if(res.code === 200){

      }
    } catch (error) {
      console.log(error)
    }
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
          <Input
            onChange={this.onChange.bind(this)}
            className='section__input'
            placeholder='吐槽一下'
            type='text'
          />
          <AtButton className='section__button' size='small' type='primary' onClick={this.submit.bind(this)}>
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
