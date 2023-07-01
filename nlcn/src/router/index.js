import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import ('../views/index.vue')
    },
    {
      path: '/project',
      name: 'project',
      component: () => import ('../views/project.vue')
    },
    {
      path: '/interest',
      name: 'interest',
      component: () => import ('../views/interest.vue')
    },
    {
      path: '/note',
      name: 'note',
      component: () => import ('../views/note.vue'),
      children: [
        {
          path: '/vuejs',
          name: 'vuejs',
          component: () => import ('../views/notes/vuejs.vue')
        }
      ]
    },
    {
      path: '/apptest',
      name: 'apptest',
      component: () => import ('../views/apptest.vue')
    }

  ]
})

export default router
