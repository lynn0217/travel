import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import( '../views/Main.vue')
  },
  {
    path: '/city',
    name: 'City',
    component: () => import( '../components/city/City.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
