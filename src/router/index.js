import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/projects/cloud-his',
    name: 'CloudHisCaseStudy',
    component: () => import('../views/projects/CloudHisCaseStudy.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return new Promise((resolve) => {
        requestAnimationFrame(() => {
          resolve({
            el: to.hash,
            top: 88,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
              ? 'auto'
              : 'smooth',
          })
        })
      })
    }

    return { top: 0 }
  },
})

export default router
