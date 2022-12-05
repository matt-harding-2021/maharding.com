import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/slides',
    name: 'Slides',
    component: () => import('@/views/Slides.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('@/views/Gallery.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
