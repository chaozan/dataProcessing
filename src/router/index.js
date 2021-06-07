import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress' 
import 'nprogress/nprogress.css'

const originalPush = VueRouter.prototype.push; 

// 解决路由重复点击
VueRouter.prototype.push = function push(location) {  
 return originalPush.call(this, location).catch(err => err)
}

// 注册路由
Vue.use(VueRouter)
// 注册进度条
Vue.use(NProgress)

const routes = [
  {
    path: '/',
    redirect: '/Login',
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/404.vue'),
    meta: {title: '404'}
  },
  {
    path: '/Login',
    name: 'login',
    component: () => import('@/components/Login/Login'),
    meta: {title: '登录'}
  },
  {
    path: '/Register',
    name: 'register',
    component: () => import('@/components/Login/Register'),
    meta: {title: '注册'}
  },
  {
    path: '/Home',
    name: 'home',
    redirect: '/Home/Content',
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
            component: () => import ('@/components/index/Index'),
            meta: {title: '首页', open: '1'},
          },
          {
            path: 'User',
            name: 'user',
            meta: {title: '个人信息'},
            component: () => import ('@/components/user/User')
          },
          {
            path: 'JavaScript',
            name: 'javaScript',
            meta: {title: 'javaScript', open: '1'},
            component: () => import ('@/views/javascript/Javascript'),
          },
          {
            path: 'RouteVue',
            name: 'routeVue',
            meta: {title: 'vue', open: '1'},
            component: () => import ('@/views/vue/Vue')
          },
          {
            path: 'CrossTalk',
            name: 'crosstalk',
            meta: {title: '搞笑段子', open: '2'},
            component: () => import ('@/views/crosstalk/CrossTalk')
          },
          {
            path: 'CrossTalkModel',
            name: 'crosstalkmodel',
            meta: {title: '搞笑段子详情', open: '2'},
            component: () => import ('@/views/crosstalk/crossTalkModel/CrossTalkModel')
          },
          {
            path: 'Visual',
            name: 'visual',
            meta: {title: '视频分类', open: '2'},
            component: () => import ('@/views/visual/Visual')
          },
          {
            path: 'Json',
            name: 'json',
            meta: {title: 'json', open: '3'},
            component: () => import ('@/views/json/Json')
          },
          {
            path: 'Photo',
            name: 'photo',
            meta:{title: '相册', open: '3'},
            component: () => import ('@/views/photo/Photo')
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
  document.getElementById('title').innerHTML = to.meta.title
  if(to.name == 'login') {
    next();
    return;
  }
  
  if(window.localStorage.getItem('userState') == '0' && to.name !== '404' && to.name !== 'register') {
    next({name: 'login'}) 
  }
  next()
})
router.afterEach(() => {  
  NProgress.done()
})

export default router
