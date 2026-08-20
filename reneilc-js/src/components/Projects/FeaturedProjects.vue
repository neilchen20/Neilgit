<template>
  <div class="container">
    <div>
      <h2 class="fw-bold mb-3 mb-lg-0 text-center">TOP PROJECTS</h2>
    </div>
    <div class="d-flex flex-column flex-lg-row gap-4 gap-lg-3 justify-content-center">
      <div
        v-for="(project, index) in ProjectsHighLight"
        :key="project.projectTitle"
        class="card shadow-sm"
        data-aos="fade-up"
        :data-aos-delay="index * 150"
      >
        <div class="card-img-top">
          <img v-if="project.projectImg.data.length > 0" :src="project.projectImg.data[0].attributes.url.startsWith('http') ? project.projectImg.data[0].attributes.url : project.projectImg.data[0].attributes.url" :alt="project.projectTitle" />
        </div>
        <div class="card-body">
          <div>
            <h5 class="card-title fw-bold">{{ project.projectTitle }}</h5>
            <p class="card-text mb-5">{{ project.projectDescription }}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center w-100" style="right: 16px; bottom: 16px">
            <small class="text-body-secondary">{{ project.projectDate }}</small>
            <div class="btn-group">
              <a :href="project.projectLink" class="btn btn-sm btn-outline-secondary" target="_blank">View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="js" setup>
import { defineProps } from 'vue'

// 定義 props
const props = defineProps({
  ProjectsHighLight: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every((project) => {
        return (
          typeof project.projectTitle === 'string' &&
          (typeof project.projectDescription === 'string' || project.projectDescription === null) &&
          typeof project.projectLink === 'string' &&
          typeof project.projectDate === 'string' &&
          typeof project.projectHighLight === 'boolean' &&
          (typeof project.projectSkill === 'string' || project.projectSkill === null) &&
          typeof project.createdAt === 'string' &&
          typeof project.updatedAt === 'string' &&
          typeof project.publishedAt === 'string' &&
          Array.isArray(project.projectImg.data) &&
          project.projectImg.data.every((img) => {
            return typeof img.id === 'number' && typeof img.attributes.url === 'string'
          })
        )
      })
    },
  },
})
</script>

<style lang="scss">
#featured-projects {
  .container {
    @media (min-width: 992px) {
      max-width: 100%;
    }
    .card {
      margin: 72px 0;
      margin-top: 36px;
      border-radius: 16px;
      box-shadow: 0px 8px 16px #0443171a;
      transition: all 0.3s ease;
      @media (min-width: 992px) {
        flex: 1 1 0;
        min-width: 0;
        .card-img-top img {
          aspect-ratio: 4 / 3;
        }
      }
      @media (max-width: 991px) {
        margin: 0;
      }
      &:hover {
        border: 1px solid #5e5e5e;
        box-shadow: 0px 8px 16px #5e5e5e;
        transition: all 0.3s ease;
      }
      .card-img-top img {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        border-radius: 16px;
      }
      .card-body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .card-text {
          font-size: 20px;
          line-height: 2;
        }
      }
    }
  }
}
</style>
