import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import main from '@/layout/parts/main.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: '首页',
    component: (resolve) => require(['@/views/home/index.vue'], resolve),
    children: []
  },
  {
    path: '/login',
    name: '登录',
    component: (resolve) => require(['@/views/login/index.vue'], resolve),
    children: []
  },
  {
    path: '/finance',
    name: '财务管理',
    component: main,
    children: [
      {
        path: '/report',
        name: '财务报表',
        component: (resolve) => require(['@/views/finance/report/index.vue'], resolve)
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
