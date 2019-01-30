import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'

Vue.use(VueRouter)

function loadView(view) {
    return () => import(`@/views/${view}`)
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: loadView('Home')//() => import(`@/views/Home`)
    },
    {
      path: '/about',
      name: 'About',
      component: loadView('About')//() => import(`@/views/About`)
    }
  ]
})

export default router
