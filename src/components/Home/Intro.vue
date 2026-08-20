<template>
  <div id="intro" data-aos="fade-up">
    <h5 v-html="Intro"></h5>
  </div>
</template>

<script lang="js" setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const Intro = ref('')

onMounted(async () => {
  try {
    const response = await axios.get('https://admin.neilc.me/api/home-pages?populate=hometitle')
    const data = response.data.data[0].attributes
    Intro.value = data.HomeTitle
  } catch (error) {
    console.error('Error fetching data:', error)
    Intro.value = 'Hi，我是 Neil Chen，是一名具備三年以上實務經驗的前端工程師。目前參與雲端醫療資訊系統開發，主要使用 Vue 3、TypeScript、Quasar，負責前端功能開發與維護、REST API 串接、PWA Offline、IndexedDB 資料處理及操作流程優化，並參與掛號、看診、處方、檢驗等醫療流程功能。\n過去於新創科技公司參與多項企業官網、品牌活動與互動式網站專案，累積 Vue.js、JavaScript、Three.js、GSAP 與 RWD 等不同類型的前端開發經驗。開發上重視程式碼的可讀性、可維護性與系統穩定性。'
  }
})
</script>

<style lang="scss" scoped>
#intro {
  h5 {
    line-height: 2.5;
  }
}
</style>
