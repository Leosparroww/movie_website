import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePageView from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homePage',
    component: HomePageView
  },
  {
    path: '/details',
    name: 'details',
    
    component: () => import('../views/DetailPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
