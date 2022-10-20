import Mock from 'mockjs'
import homeApi from './mockData/home'
import permissionApi from './mockData/permission'
//设定了拦截请求的地址，并且返回了相关数据
Mock.mock('/home/getData', homeApi.getHomeData)

Mock.mock(/permission\/getMenu/,'post',permissionApi.getMenu)//定义拦截器////