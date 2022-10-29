// 路由器对象模块，最终需要向外暴露一个路由器对象
import Vue from 'vue'
import VueRouter from 'vue-router'
//引入四个路由组件
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
//声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
    //配置所有路由，多个路由用数组配置,数组里面一个元素就代表一个路由配置
    routes:[
      {
        path:'/mSite',
        component:MSite,
        meta:{
           showFooter:true
        }
      },
      {
        path:'/order',
        component:Order,
        meta:{
          showFooter:true
       }
      },
      {
        path:'/profile',
        component:Profile,
        meta:{
          showFooter:true
       }
      },
      {
        path:'/search',
        component:Search,
        meta:{
          showFooter:true
       }
      },
      {
        path:'/login',
        component:Login
      },
      //默认显示MSite
      {
        path:'/',
        redirect:'/msite'
      },
    ]
})