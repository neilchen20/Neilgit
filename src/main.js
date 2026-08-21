import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

// 創建 Pinia 實例
const pinia = createPinia()

// 註冊 Pinia
app.use(pinia)
app.use(router)

app.mount('#app')

AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  offset: 80,
  once: true,
  disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
})
