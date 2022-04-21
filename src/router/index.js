import Vue from 'vue'
import VueRouter from 'vue-router'
import MyMain from '../views/MyMain'
import MyHome from '../views/home/MyHome.vue'
import MyUser from '../views/user/MyUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MyMain,
    children: [
      {
        path: '/home',
        name: 'home',
        component: MyHome
      },
      {
        path: '/user',
        name: 'user',
        component: MyUser
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
