import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./components/HelloWorld.vue'),
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('./components/404.vue')
    }
  ]
})
export default router