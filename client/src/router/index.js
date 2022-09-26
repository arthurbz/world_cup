import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/countries',
      name: 'countries',
      component: () => import('../views/Countries.vue')
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../views/Details.vue')
    },
    {
      path: '/finals',
      name: 'finals',
      component: () => import('../views/Finals.vue')
    },
    {
      path: '/tournaments',
      name: 'tournaments',
      component: () => import('../views/Tournaments.vue')
    },
  ]
})

export default router
