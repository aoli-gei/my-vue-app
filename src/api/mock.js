import Mock from 'mockjs'
import homeApi from './mockData/home'
//设定了拦截请求的地址，并且返回了相关数据
Mock.mock('/home/getData', homeApi.getHomeData)