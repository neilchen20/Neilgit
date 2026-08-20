import { createRouter, createWebHistory } from 'vue-router';

// 定義路由
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'), // 應用懶加載
  },
  // {
  //   path: '/projects',
  //   name: 'Projects',
  //   component: () => import('../views/Projects.vue'), // 應用懶加載
  // },
];

// 創建路由實例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;