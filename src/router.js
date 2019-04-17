import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from '@/components/NotFound.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about/:id',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/Goods/:id',
      name: 'goods',
      component: () => import(/* webpackChunkName: "Goods" */ './views/Goods.vue')
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
});

//路由拦截
router.beforeEach((to, from, next) => {
  // if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
  //   if (store.state.token) {  // 通过vuex state获取当前的token是否存在
  //     next();
  //   }
  //   else {
  //     next({
  //       path: '/login',
  //       query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
  //     })
  //   }
  // }
  // else {
  //   next();
  // }
  console.log(to);
  console.log(from);
  next();
})

export default router;
