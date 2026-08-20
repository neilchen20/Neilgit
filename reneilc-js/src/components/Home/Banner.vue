<template>
  <img :src="bannerUrl" alt="Banner" class="w-100" />
</template>

<script setup>
const bannerUrl = new URL('../../assets/img/banner.webp', import.meta.url).href
</script>

<style lang="scss" scoped>
img {
  max-height: 500px;
  object-fit: cover;
}
</style>
