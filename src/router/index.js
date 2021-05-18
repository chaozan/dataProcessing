import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress' 
import 'nprogress/nprogress.css'

const originalPush = VueRouter.prototype.push; 

VueRouter.prototype.push = function push(location) {  
 return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)
Vue.use(NProgress)

const routes = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/404.vue')
  },
  {
    path: '/Login',
    name: 'login',
    component: () => import('@/components/Login/Login')
  },{
    path: '/Home',
    name: 'home',
    redirect: '/Home/Content',
    meta: {title: '首页'},
    component: () => import ('@/components/Home/Home'),
    children: [
      {
        path: 'Content',
        name: 'content',
        redirect: '/Home/Content/Index',
        component: () => import ('@/components/Content/Content'),
        children: [
          {
            path: 'Index',
            name: 'index',
            component: () => import ('@/components/index/Index')
          },
          {
            path: 'JavaScript',
            name: 'javaScript',
            meta: {title: 'javaScript'},
            component: () => import ('@/views/javascript/Javascript'),
          },
          {
            path: 'RouteVue',
            name: 'routeVue',
            meta: {title: 'vue'},
            component: () => import ('@/views/vue/Vue')
          },
          {
            path: 'Html',
            name: 'html',
            meta: {title: 'html'},
            component: () => import ('@/views/html/Html')
          },
          {
            path: 'Css',
            name: 'css',
            meta: {title: 'css'},
            component: () => import ('@/views/css/Css')
          },
          {
            path: 'Json',
            name: 'json',
            meta: {title: 'json'},
            component: () => import ('@/views/json/Json')
          }
        ]
      }
    ]
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// let userState = window.localStorage.getItem('userState');
router.beforeEach((to, from, next) => {
  NProgress.start();
  if(to.name == 'login') {
    next();
    return;
  }
  
  if(window.localStorage.getItem('userState') == '未登录') {
    next({name: 'login'}) 
  }
  next()
})
router.afterEach(() => {  
  NProgress.done()
})

export default router
