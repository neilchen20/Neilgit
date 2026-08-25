<template>
  <img :src="bannerUrl" alt="" class="w-100" width="1600" height="1067" loading="eager" fetchpriority="high" />
</template>

<script setup>
const bannerUrl = new URL('../../assets/img/banner.webp', import.meta.url).href
</script>

<style lang="scss" scoped>
img {
  display: block;
  height: auto;
  max-height: 300px;
  object-fit: cover;
}
</style>
