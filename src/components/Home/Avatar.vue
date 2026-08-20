<template>
  <div id="img-container">
    <div class="img-border">
      <img :src="avatarUrl" alt="Avatar" id="avatar" />
    </div>
  </div>
</template>
<script setup lang="js">
const avatarUrl = new URL('../../assets/img/IMG_0873.JPG', import.meta.url).href
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
    max-width: 124px;
    max-height: 124px;
    overflow: hidden;
    @media (max-width: 991px) {
      max-width: 96px;
      max-height: 96px;
    }
    #avatar {
      width: 100%;
      transform: scale(1.4);
    }
  }
}
</style>
