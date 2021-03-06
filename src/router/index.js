import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import basic_user from '../views/basic_user.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/basic_user',
    name:'basic_user',
    component: basic_user
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
