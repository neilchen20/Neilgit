import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import project from '../views/project.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/project',
      name: 'project',
      component: project
    }
  ]
})

export default router