import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

/*
 * Use () => import('filename') on all route components,
 * This will split routes into different files,
 * allowing for a snappy initial load time.
 */

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    /* Always load home component */
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
