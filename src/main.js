import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import Login from './components/Login.vue'
import Form from './components/Form.vue'
import List from './components/List.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/form',
    name: 'form',
    component: Form,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'list',
    component: List,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (localStorage.getItem('jwt') == null) {
            next({ name: 'login' })
        } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
