import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/home/Home";
import GoodsDetail from "../pages/GoodsDetail/GoodsDetail";
import Banner from "../pages/Banner/Banner";
import Category from "../pages/Category/Category";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Home',
      component:Home
    },
    {
      path: '/GoodsDetail',
      name:'/GoodsDetail',
      component:GoodsDetail
    },
    {
      path: '/Banner',
      name:'/Banner',
      component:Banner
    },
    {
      path: '/Category',
      name:'/Category',
      component:Category
    }
  ]
})
