import Vue from 'vue'
import Router from 'vue-router'
import find from '@/components/find/find'
import album from '@/components/album/album'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/find'
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/album',
      name: 'album',
      component: album
    }
  ]
})
