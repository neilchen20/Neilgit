<template>
  <section id="contact" class="contact-section" aria-labelledby="contact-title">
    <div class="container" data-aos="fade-up">
      <div class="contact-panel">
        <div class="contact-panel__content">
          <span class="availability">
            <span class="availability__dot" aria-hidden="true"></span>
            Open to frontend opportunities
          </span>
          <h2 id="contact-title" class="fw-bold">
            正在尋找能把複雜流程<br class="d-none d-md-block" />做穩的前端工程師嗎？
          </h2>
          <p>
            我具備 Vue、TypeScript、PWA 與企業系統開發經驗，歡迎聊聊職缺或合作機會。
          </p>
        </div>

        <div class="contact-actions" aria-label="聯絡方式">
          <a class="contact-button contact-button--primary" href="mailto:neilchnn@gmail.com">
            寄信給我
            <span aria-hidden="true">↗</span>
          </a>
          <a
            v-if="resumeUrl"
            class="contact-button contact-button--secondary"
            :href="resumeUrl"
            download
          >
            下載履歷
            <span aria-hidden="true">↓</span>
          </a>
          <span
            v-else
            class="contact-button contact-button--secondary contact-button--disabled"
            aria-disabled="true"
            title="加入履歷 PDF 後即可啟用"
          >
            履歷準備中
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 將去除敏感資訊的履歷放到 public/resume/Neil-Chen-Resume.pdf 後，
// 把此值改為 '/resume/Neil-Chen-Resume.pdf' 即可啟用下載按鈕。
const resumeUrl = ''
</script>

<style lang="scss" scoped>
.contact-section {
  padding: 120px 24px 32px;
  scroll-margin-top: 88px;

  .container {
    max-width: 1440px;
  }
}

.contact-panel {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 48px;
  padding: 64px;
  overflow: hidden;
  border-radius: 28px;
  background:
    radial-gradient(circle at 92% 12%, rgb(123 97 255 / 42%), transparent 32%),
    linear-gradient(135deg, #151927 0%, #222a42 100%);
  color: #fff;
  box-shadow: 0 24px 64px rgb(20 25 40 / 20%);

  &::after {
    position: absolute;
    right: -80px;
    bottom: -150px;
    width: 360px;
    height: 360px;
    border: 1px solid rgb(255 255 255 / 12%);
    border-radius: 50%;
    box-shadow: 0 0 0 44px rgb(255 255 255 / 4%), 0 0 0 88px rgb(255 255 255 / 3%);
    content: '';
    pointer-events: none;
  }
}

.contact-panel__content {
  position: relative;
  z-index: 1;
  max-width: 780px;

  h2 {
    margin: 20px 0 18px;
    color: #fff;
    font-size: clamp(32px, 4vw, 52px) !important;
    line-height: 1.3;
  }

  p {
    max-width: 680px;
    margin: 0;
    color: #cfd5e5;
    font-size: 18px;
    line-height: 1.8;
  }
}

.availability {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 13px;
  border: 1px solid rgb(255 255 255 / 16%);
  border-radius: 999px;
  background: rgb(255 255 255 / 8%);
  color: #e8ebf7;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.availability__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #68e2a3;
  box-shadow: 0 0 0 5px rgb(104 226 163 / 12%);
}

.contact-actions {
  position: relative;
  z-index: 1;
  display: flex;
  min-width: 190px;
  flex-direction: column;
  gap: 12px;
}

.contact-button {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 12px 18px;
  border: 1px solid transparent;
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 160ms ease, background-color 160ms ease, border-color 160ms ease;

  &:focus-visible {
    outline: 3px solid #9bb1ff;
    outline-offset: 3px;
  }
}

.contact-button--primary {
  background: #fff;
  color: #1c2333;

  &:hover {
    background: #eef1ff;
    color: #1c2333;
    transform: translateY(-2px);
  }
}

.contact-button--secondary {
  border-color: rgb(255 255 255 / 28%);
  background: rgb(255 255 255 / 6%);
  color: #fff;

  &:not(.contact-button--disabled):hover {
    border-color: rgb(255 255 255 / 52%);
    background: rgb(255 255 255 / 12%);
    color: #fff;
    transform: translateY(-2px);
  }
}

.contact-button--disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

@media (max-width: 991px) {
  .contact-panel {
    align-items: stretch;
    flex-direction: column;
    padding: 48px;
  }

  .contact-actions {
    width: 100%;
    max-width: 320px;
  }
}

@media (max-width: 767px) {
  .contact-section {
    padding: 80px 20px 16px;
  }

  .contact-panel {
    gap: 36px;
    padding: 32px 24px;
    border-radius: 22px;
  }

  .contact-panel__content p {
    font-size: 16px;
  }

  .contact-actions {
    max-width: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-button {
    transition: none;

    &:hover {
      transform: none;
    }
  }
}
</style>
