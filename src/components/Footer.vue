<template>
  <footer class="d-flex flex-wrap justify-content-center align-items-center py-3 mt-5 mb-4 border-top">
    <div class="col-md-4 d-flex flex-column align-items-center">
      <a href="mailto:neilchnn@gmail.com">neilchnn@gmail.com</a>
      <span class="mb-3 mb-md-0 text-body-secondary">© {{ currentYear }} Neil Chen</span>
      <img :src="counterUrl" alt="Counter" />
    </div>
  </footer>
</template>
<script setup>
import { computed } from 'vue'

const currentYear = new Date().getFullYear()

const counterUrl = computed(() => {
  const REF = encodeURIComponent(document.referrer)
  const LOC = encodeURIComponent(window.location.href)
  const RES = screen.width + 'x' + screen.height
  const NAVI = encodeURIComponent(navigator.userAgent)
  const LANG = navigator.language
  const counter = 'https://besucherzaehler.gratis/counter.php?ID=neilchen.dev&STYLE=446'
  return counter + '&LANG=' + LANG + '&RES=' + RES + '&REF=' + REF + '&LOC=' + LOC + '&NAVI=' + NAVI
})
</script>
