import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },{
      path:'/home',
      mata:{
        title:'加班/休假'
      },
      component:()=>import('@/views/Home')
    },{
      path:'/detail',
      component:()=>import('@/views/Detail')
    },{
      path:'/login',
      meta:{
        title:'登录/注册'
      },
      component:()=>import('@/views/Login')
    },
    {
      path:'/detail/:type/:id',
      name:'detail',
      props:true,
      meta:{
        title:'详情'
      },
      component:()=>import('@/views/Detail')
    },
    {
      path:"/addlist/:type",
      name:"addlist",
      meta:{
          type:"申请表"
      },
      props:true,
      component:()=>import('@/views/AddList')
      
  }
  ]
})
