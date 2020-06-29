import {request} from './request.js'

export function GetHomeData(){
  return request({
    url:'/home/multidata'
})
}

export function GetGoodsData(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page,
    }
  })
}