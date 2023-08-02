import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexView
    },
    {
      path: '/lazyLoading',
      name: 'lazyLoading',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/imageLazyLoading/index.vue')
    },
    {
      path: '/intersectionObserver',
      name: 'intersectionObserver',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/intersectionObserver/index.vue')
    }
  ]
})

export default router
