import Vue from 'vue'
import Router from 'vue-router'

import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios'

import NotFound from '@/components/NotFound'
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
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  baseUrl: 'https://api.wico.cc',
  providers: {
    github: {
      clientId: '0a6bf39b89632031006b',
      redirectUri: 'https://portal.wico.cc/auth/callback'
    }
  }
})
