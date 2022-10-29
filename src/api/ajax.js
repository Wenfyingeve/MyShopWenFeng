// ajax请求模块，向外默认暴露一个函数(这个函数里面接收3个参数)
//ajax请求模块返回值是promise对象（异步返回数据是：response.data,而不是response,因为这里我们外面还套了一个Promise）
import axios from 'axios'
export default function ajax(url, data = {}, type = 'GET') {
    return new Promise(function(resolve,reject){
       //执行异步ajax请求(这边我们用axios来执行ajax请求)
       let promise
       if (type === 'GET') {
           // 准备 url query 参数数据
           let dataStr = '' //数据拼接字符串
           Object.keys(data).forEach(key => {
               dataStr += key + '=' + data[key] + '&'
           })
           if (dataStr !== '') {
               dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
               url = url + '?' + dataStr
           }
           // 发送 get 请求
           promise = axios.get(url)
       } else {
           // 发送 post 请求
           promise = axios.post(url, data)
       }
       //promise.then（）里面传的是成功的回调函数
       //函数里面有response参数，为什么是response，因为axios返回的promise就是response
       promise.then(function(response){
            //成功的回调函数干什么
            //成功了调用resolve(),里面传成功想传的数据
            resolve(response.data)
       })
       .catch(function(error){
           //失败了调用reject()
                reject(error)
       })
    
    })
   
}