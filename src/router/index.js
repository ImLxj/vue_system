import Vue from 'vue'
import VueRouter from 'vue-router'
import MyHome from '../views/MyHome'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MyHome
  }
]

const router = new VueRouter({
  routes
})

export default router
