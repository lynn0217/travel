import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import( '../views/Main.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import( '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
