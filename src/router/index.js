import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function ({ store /* ssrContext */ }) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  // 頁面權限控制
  Router.beforeEach((to, from, next) => {
    const authorization = store.state.authorization
    // if (authorization) {
    //     // 登入成功隱藏登入頁 - 跳轉到首頁
    //     return to.matched.some(route => route.meta.hideAfterAuth)
    //         ? next({ name: 'dashboard', redirect: to.fullPath }) : next()
    // } else {
    //     // 權限頁面限制
    //     return to.matched.some(route => route.meta.needAuth)
    //         ? next({ name: 'login' }) : next()
    // // }
    if (!authorization && to.name !== 'home') {
      next()
      // next({ name: 'home' })
    } else {
      next()
    }
  })

  return Router
})
