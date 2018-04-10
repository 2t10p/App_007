import Vue from 'vue'
import Router from 'vue-router'

import Portal from '@/components/Portal'
import Login from '@/components/Login'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Portal',
      component: Portal
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }

  ]
})
