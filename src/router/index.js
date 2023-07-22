import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import PinView from '../views/PinView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/auth',
      name: 'auth',
      component: AuthView
    },
    {
      path: '/auth/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/auth/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/auth/pin',
      name: 'pin',
      component: PinView
    },


  ]
})

export default router
