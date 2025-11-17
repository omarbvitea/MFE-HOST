import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Microfrontend1View from './views/Microfrontend1View.vue'
import Microfrontend2View from './views/Microfrontend2View.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/microfrontend-1',
    name: 'Microfrontend1',
    component: Microfrontend1View
  },
  {
    path: '/microfrontend-2',
    name: 'Microfrontend2',
    component: Microfrontend2View
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL || '/'),
  routes
})

export default router
