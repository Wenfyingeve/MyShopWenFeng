//包含n个接口请求的模块（向外暴露n个函数）
//接口请求函数的返回值：promsie对象
//所有的接口请求函数最好以req开头
import ajax from './ajax'
//ajax(url, data = {}, type = 'GET')因为默认是GET，所以如果是get请求的话type可以不用写
// 1、根据经纬度获取位置详情(data中传的参数是query参数，如果是params参数直接使用末班字符串加在路径后面就行)
//这里的参数是params参数（query参数在url后面加？连接，params参数直接写在路径里面就是下面的geohash）
export const reqAddress = (geohash)=>ajax(`/position/${geohash}`)
// 2、获取食品分类列表
export const reqFootTypes = ()=>ajax('/index_category')
// 3、根据经纬度获取商铺列表,{longitude:a,latitude:b}里面的longitude和latitude必须和文档里面一致
export const reqShops = (a,b)=>ajax('/shops',data = {longitude:a,latitude:b})
// 也可以这样写
// export const reqShops = (longitude,latitude)=>ajax('/shops',data = {longitude,latitude})
// 4、根据经纬度和关键字搜索商铺列表
export const reqShopsSearch = (geohash,keyword)=>ajax('/search_shops',{geohash,keyword})
// 5、获取一次性验证码
export const reqCaptcha = ()=>ajax('/captcha')
// 6、用户名密码登陆
// export const reqPwd = ()=>ajax('/login_pwd')
// 7、发送短信验证码
export const reqSendcode = (phone)=>ajax('/sendcode',{phone})
// 8、手机号验证码登陆
// export const reqAddress = ()=>ajax()
// 9、根据会话获取用户信息
export const reqUserinfo = ()=>ajax('/userinfo')
// 10、用户登出
export const reqLogout = ()=>ajax('/logout')