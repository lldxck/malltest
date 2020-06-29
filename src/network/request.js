import axios from 'axios'

export function request(config){
  // 创建axios实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000/api/m3',
    timeout:5000,  
  })

  // 请求拦截
  instance.interceptors.request.use(config => {
    // 在请求之前做些什么
    return config
  },err => {
    // 对请求错误做些什么
    return err
  })

  // 响应拦截
  instance.interceptors.response.use(response => {
    // 对响应数据做些什么
    return response.data
  },err => {
    // 对响应错误做点什么
    return err
  })

  return instance(config);

}