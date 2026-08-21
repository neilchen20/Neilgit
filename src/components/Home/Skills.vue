<template>
  <section id="skills" class="skills-section" aria-labelledby="skills-title">
    <div class="container">
      <div class="section-heading text-center mb-4" data-aos="fade-up">
        <h2 id="skills-title" class="fw-bold mb-0">Skills</h2>
        <p>從介面實作到離線資料流程，專注於建立穩定、可維護的前端產品。</p>
      </div>

      <div class="skills-grid">
        <article v-for="(group, index) in skillGroups" :key="group.title" class="skill-card" data-aos="fade-up" :data-aos-delay="index * 100">
          <div class="skill-card__heading">
            <span class="skill-card__index" aria-hidden="true">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <h3>{{ group.title }}</h3>
          </div>
          <p>{{ group.description }}</p>
          <ul class="skill-list" :aria-label="`${group.title} 技能`">
            <li v-for="skill in group.skills" :key="skill">{{ skill }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillGroups = [
  {
    title: 'Frontend',
    description: '建立響應式、可維護且具一致體驗的產品介面。',
    skills: ['Vue 2 / 3', 'TypeScript', 'JavaScript', 'Element Plus', 'Bootstrap', 'CSS / SCSS', 'Quasar'],
  },
  {
    title: 'Architecture',
    description: '整理複雜狀態與操作流程，讓功能更容易擴充與維護。',
    skills: ['Pinia', 'Vue Router', 'REST API', '元件化', '表單驗證', '跨頁狀態'],
  },
  {
    title: 'Offline / PWA',
    description: '針對網路不穩定情境，設計可靠且安全的資料流程。',
    skills: ['PWA', 'IndexedDB', 'AES 加密', '離線操作', '敏感資料儲存'],
  },
  {
    title: 'Tooling',
    description: '使用合適工具提升開發品質、互動表現與交付效率。',
    skills: ['Vite', 'ESLint', 'Git', 'GitHub Actions', 'Three.js', 'GSAP', 'Swiper'],
  },
]
</script>

<style lang="scss" scoped>
.skills-section {
  padding: 72px 24px 0;
  scroll-margin-top: 88px;

  .container {
    max-width: 1440px;
  }
}

.section-heading {
  max-width: 720px;
  margin: 0 auto 36px;

  h2 {
    margin: 8px 0 12px;
  }

  p {
    margin: 0;
    color: #5c6470;
    font-size: 18px;
    line-height: 1.8;
  }
}

.section-eyebrow {
  color: #315efb;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.skill-card {
  position: relative;
  min-height: 320px;
  padding: 28px;
  overflow: hidden;
  border: 1px solid #dfe3ea;
  border-radius: 20px;
  background: linear-gradient(145deg, #fff 55%, #f5f7ff 100%);
  box-shadow: 0 14px 36px rgb(28 45 85 / 8%);
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, #315efb, #7b61ff);
    content: '';
  }

  &:hover {
    border-color: #bfc9ec;
    box-shadow: 0 18px 44px rgb(49 94 251 / 14%);
    transform: translateY(-6px);
  }

  p {
    min-height: 52px;
    margin: 18px 0 24px;
    color: #5c6470;
    font-size: 15px;
    line-height: 1.7;
  }
}

.skill-card__heading {
  display: flex;
  align-items: center;
  gap: 12px;

  h3 {
    margin: 0;
    font-size: 23px !important;
  }
}

.skill-card__index {
  display: grid;
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  place-items: center;
  border-radius: 12px;
  background: #e9edff;
  color: #315efb;
  font-size: 13px;
  font-weight: 800;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    padding: 7px 11px;
    border: 1px solid #dce2f3;
    border-radius: 999px;
    background: rgb(255 255 255 / 82%);
    color: #2c3440;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.2;
  }
}

@media (max-width: 1199px) {
  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .skill-card {
    min-height: 280px;
  }
}

@media (max-width: 767px) {
  .skills-section {
    padding: 80px 20px 0;
  }

  .section-heading {
    p {
      font-size: 16px;
    }
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .skill-card {
    min-height: auto;
    padding: 24px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .skill-card {
    transition: none;

    &:hover {
      transform: none;
    }
  }
}
</style>
