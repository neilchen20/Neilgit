<template>
  <main class="case-study">
    <section class="case-hero" aria-labelledby="case-title">
      <div class="container">
        <RouterLink class="back-link" :to="{ name: 'Home', hash: '#featured-projects' }">
          <span aria-hidden="true">←</span>
          返回精選專案
        </RouterLink>

        <div class="case-hero__grid">
          <div class="case-hero__content" data-aos="fade-up">
            <h2 id="case-title">遠傳雲端醫療資訊系統</h2>
            <p class="case-lead">參與雲端醫療產品的前端維護與功能擴充，處理複雜醫療流程、離線操作與病患敏感資料的安全儲存。</p>
            <div class="hero-actions">
              <a class="case-button case-button--primary" :href="publicIntroductionUrl" target="_blank" rel="noopener noreferrer">
                查看公開介紹
                <span aria-hidden="true">↗</span>
              </a>
              <RouterLink class="case-button case-button--secondary" :to="{ name: 'Home', hash: '#contact' }"> 聯絡我 </RouterLink>
            </div>
          </div>

          <div class="case-hero__visual" data-aos="fade-up" data-aos-delay="120">
            <img :src="cloudHisImage" alt="遠傳雲端醫療資訊系統公開介紹頁畫面" />
          </div>
        </div>

        <dl class="case-summary" data-aos="fade-up" data-aos-delay="160">
          <div v-for="item in summaryItems" :key="item.label">
            <dt>{{ item.label }}</dt>
            <dd>{{ item.value }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="case-content" aria-label="專案案例內容">
      <div class="container">
        <article class="case-section" data-aos="fade-up">
          <div class="case-section__label">
            <span>01</span>
            <h2>專案背景</h2>
          </div>
          <div class="case-section__body">
            <p>此系統服務診所日常醫療作業，涵蓋掛號、看診、醫囑處方、醫師排班、藥品管理、檢驗及診所基本設定等流程。前端除了需要承接多模組與跨頁狀態，也必須考量診所網路不穩定時的操作連續性。</p>
          </div>
        </article>

        <article class="case-section" data-aos="fade-up">
          <div class="case-section__label">
            <span>02</span>
            <h2>我的責任</h2>
          </div>
          <div class="case-section__body">
            <ul class="responsibility-list">
              <li v-for="item in responsibilities" :key="item">{{ item }}</li>
            </ul>
          </div>
        </article>

        <article class="case-section" data-aos="fade-up">
          <div class="case-section__label">
            <span>03</span>
            <h2>技術決策</h2>
          </div>
          <div class="case-section__body decision-grid">
            <div v-for="decision in decisions" :key="decision.title" class="decision-card">
              <h3>{{ decision.title }}</h3>
              <p>{{ decision.description }}</p>
            </div>
          </div>
        </article>

        <article class="case-section" data-aos="fade-up">
          <div class="case-section__label">
            <span>04</span>
            <h2>核心挑戰</h2>
          </div>
          <div class="case-section__body">
            <p>醫療系統的操作不是單一頁面任務，而是一連串具前後依賴的流程。當網路狀態不穩定時，除了維持操作可用性，也必須避免離線資料造成流程中斷，同時確保病患資訊不會以明文留存在瀏覽器端。</p>
          </div>
        </article>

        <article class="case-section case-section--outcome" data-aos="fade-up">
          <div class="case-section__label">
            <span>05</span>
            <h2>成果</h2>
          </div>
          <div class="case-section__body">
            <p class="outcome-lead">將離線需求從單純快取，落實為可操作、可保存並兼顧資料保護的完整前端流程。</p>
            <ul class="outcome-list">
              <li>支援核心醫療作業於網路不穩定情境下持續操作。</li>
              <li>以 IndexedDB 搭配 AES 加密保存離線病患敏感資料。</li>
              <li>整理跨頁狀態與表單驗證，提升複雜流程的可維護性。</li>
            </ul>
          </div>
        </article>

        <p class="case-note" data-aos="fade-up">本案例依可公開範圍整理，不揭露內部架構、商業機密或任何病患資料。</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { nextTick, onMounted } from 'vue'
import AOS from 'aos'
import cloudHisImage from '../../assets/img/Projects/cloudhis.png'

const publicIntroductionUrl = 'https://enterprise.fetnet.net/content/ebu/tw/solution/5g-innovation/innovation/5g-telemedicine/cloudHIS.html'

const summaryItems = [
  { label: '角色', value: 'Frontend Engineer' },
  { label: '產品類型', value: '雲端醫療資訊系統' },
  { label: '核心技術', value: 'Vue 3 · TypeScript · Quasar' },
  { label: '重點領域', value: 'PWA · Offline · Data Security' },
]

const responsibilities = ['既有醫療功能維護、問題排查與新需求擴充。', 'REST API 串接、表單驗證與前後端資料轉換。', '跨頁狀態與掛號、看診、處方等操作流程優化。', 'PWA Offline 功能與瀏覽器端離線資料處理。', '病患敏感資料的 IndexedDB AES 加密儲存機制。']

const decisions = [
  {
    title: 'Vue 3 + TypeScript + Quasar',
    description: '以型別與既有元件規範支撐多模組表單，降低醫療欄位與事件資料在擴充時的溝通成本。',
  },
  {
    title: 'Pinia + Vue Router',
    description: '集中管理跨頁狀態與流程資訊，讓具前後依賴的醫療操作維持一致。',
  },
  {
    title: 'IndexedDB + AES',
    description: '為離線資料提供瀏覽器端儲存空間，並在寫入前加密病患敏感資訊，避免明文留存。',
  },
]

onMounted(async () => {
  await nextTick()
  AOS.refreshHard()
})
</script>

<style lang="scss" scoped>
.case-study {
  background: #f7f8fb;
  color: #20242d;
}

.case-hero {
  padding: 24px 24px 0;
  background: radial-gradient(circle at 88% 8%, rgb(49 94 251 / 14%), transparent 28%), linear-gradient(180deg, #fff 0%, #f7f8fb 100%);

  .container {
    max-width: 1320px;
  }
}

.back-link {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  color: #4f5968;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: #315efb;
  }

  &:focus-visible {
    border-radius: 6px;
    outline: 3px solid #b9c6ff;
    outline-offset: 3px;
  }
}

.case-hero__grid {
  display: grid;
  align-items: center;
  gap: 44px;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
}

.case-hero__content {
  h1 {
    margin: 12px 0 16px;
    font-size: clamp(40px, 5vw, 68px) !important;
    line-height: 1.18;
    letter-spacing: -0.035em;
  }
}

.case-eyebrow {
  color: #315efb;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.case-lead {
  max-width: 680px;
  margin: 0;
  color: #596272;
  font-size: 20px;
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.case-button {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 12px 18px;
  border: 1px solid transparent;
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    background-color 160ms ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid #9bb1ff;
    outline-offset: 3px;
  }
}

.case-button--primary {
  background: #20283b;
  color: #fff;
  box-shadow: 0 10px 24px rgb(32 40 59 / 18%);

  &:hover {
    background: #315efb;
    color: #fff;
  }
}

.case-button--secondary {
  border-color: #cdd3df;
  background: #fff;
  color: #2f3744;

  &:hover {
    border-color: #9dadde;
    color: #315efb;
  }
}

.case-hero__visual {
  padding: 12px;
  border: 1px solid #e2e6ee;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 28px 70px rgb(30 46 84 / 14%);
  transform: rotate(1deg);

  img {
    display: block;
    width: 100%;
    border-radius: 14px;
  }
}

.case-summary {
  display: grid;
  margin: 48px 0 0;
  padding: 22px 24px;
  border: 1px solid #e0e4ec;
  border-radius: 20px;
  background: #fff;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  div {
    padding: 4px 20px;
    border-right: 1px solid #e5e8ee;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
      border-right: 0;
    }
  }

  dt {
    margin-bottom: 8px;
    color: #7b8493;
    font-size: 13px;
    letter-spacing: 0.08em;
  }

  dd {
    margin: 0;
    color: #252b35;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
  }
}

.case-content {
  padding: 64px 24px 88px;

  .container {
    max-width: 1120px;
  }
}

.case-section {
  display: grid;
  gap: 40px;
  padding: 44px 0;
  border-bottom: 1px solid #dfe3ea;
  grid-template-columns: 220px minmax(0, 1fr);
}

.case-section__label {
  span {
    color: #315efb;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.12em;
  }

  h2 {
    margin: 10px 0 0;
    font-size: 28px !important;
  }
}

.case-section__body {
  p {
    margin: 0;
    color: #4d5665;
    font-size: 19px;
    line-height: 1.8;
  }
}

.responsibility-list,
.outcome-list {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 28px;
    color: #454e5d;
    font-size: 18px;
    line-height: 1.7;

    &::before {
      position: absolute;
      top: 12px;
      left: 0;
      width: 10px;
      height: 10px;
      border-radius: 3px;
      background: #315efb;
      content: '';
      transform: rotate(45deg);
    }
  }
}

.decision-grid {
  display: grid;
  gap: 12px;
}

.decision-card {
  padding: 20px;
  border: 1px solid #dfe4ef;
  border-radius: 16px;
  background: #fff;
  transition:
    border-color 160ms ease,
    transform 160ms ease;

  &:hover {
    border-color: #aebbea;
    transform: translateX(4px);
  }

  h3 {
    margin: 0 0 10px;
    font-size: 20px !important;
  }

  p {
    font-size: 16px;
    line-height: 1.8;
  }
}

.case-section--outcome {
  border-bottom: 0;
}

.outcome-lead {
  margin-bottom: 20px !important;
  color: #20283b !important;
  font-size: 26px !important;
  font-weight: 700;
  line-height: 1.6 !important;
}

.case-note {
  margin: 16px 0 0;
  padding: 16px 20px;
  border-left: 4px solid #315efb;
  border-radius: 0 12px 12px 0;
  background: #eef1ff;
  color: #56617a;
  font-size: 14px;
  line-height: 1.7;
}

@media (max-width: 991px) {
  .case-hero__grid {
    gap: 32px;
    grid-template-columns: 1fr;
  }

  .case-summary {
    gap: 16px 0;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    div {
      border-right: 0;

      &:nth-child(odd) {
        padding-left: 0;
        border-right: 1px solid #e5e8ee;
      }
    }
  }

  .case-section {
    gap: 20px;
    grid-template-columns: 1fr;
  }
}

@media (max-width: 767px) {
  .case-hero {
    padding: 28px 20px 0;
  }

  .back-link {
    margin-bottom: 16px;
  }

  .case-lead {
    font-size: 17px;
    line-height: 1.7;
  }

  .hero-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .case-hero__visual {
    padding: 10px;
    border-radius: 18px;
    transform: none;
  }

  .case-summary {
    padding: 20px;
    grid-template-columns: 1fr;

    div,
    div:first-child,
    div:last-child,
    div:nth-child(odd) {
      padding: 0 0 16px;
      border-right: 0;
      border-bottom: 1px solid #e5e8ee;

      &:last-child {
        padding-bottom: 0;
        border-bottom: 0;
      }
    }
  }

  .case-content {
    padding: 40px 20px 56px;
  }

  .case-section {
    padding: 32px 0;
  }

  .case-section__body p,
  .responsibility-list li,
  .outcome-list li {
    font-size: 16px;
  }

  .outcome-lead {
    font-size: 21px !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .case-button,
  .decision-card {
    transition: none;

    &:hover {
      transform: none;
    }
  }

  .case-hero__visual {
    transform: none;
  }
}
</style>
