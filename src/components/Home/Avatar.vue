<template>
  <div id="img-container">
    <div class="img-border">
      <img :src="avatarUrl" alt="Neil Chen" id="avatar" width="600" height="900" decoding="async" />
    </div>
  </div>
</template>
<script setup lang="js">
const avatarUrl = new URL('../../assets/img/IMG_0873.webp', import.meta.url).href
</script>
<style lang="scss" scoped>
#img-container {
  display: flex;
  justify-content: start;
  position: absolute;
  width: 100%;
  left: 25%;
  bottom: -62px;
  @media (max-width: 991px) {
    justify-content: center;
    left: 0;
    bottom: -48px;
  }
  .img-border {
    border-radius: 50%;
    border: 3px solid #4868f8;
    width: 124px;
    height: 124px;
    overflow: hidden;
    @media (max-width: 991px) {
      width: 96px;
      height: 96px;
    }
    #avatar {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 15%;
      transform: scale(1.4);
    }
  }
}
</style>
