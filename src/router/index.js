import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/celebration',
    name: 'Celebration',
    component: () => import(/* webpackChunkName: "about" */ '../views/Celebration.vue')
  },
  {
    path: '/evenement',
    name: 'Evenement',
    component: () => import(/* webpackChunkName: "about" */ '../views/Evenement.vue')
  },
  {
    path: '/cle-en-main',
    name: 'Cle-en-main',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cle-en-main.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

