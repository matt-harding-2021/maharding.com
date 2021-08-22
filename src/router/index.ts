import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Test.vue')
  },
  /* {
    path: '/',
    name: '',
    component: () => import('@/views/.vue')
  }, */
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
