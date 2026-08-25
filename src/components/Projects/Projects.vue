<template>
  <div class="container">
    <h2 class="text-center mb-5 fw-bold">All Projects</h2>
    <ul class="timeline">
      <li v-for="project in sortedProjects" :key="project.id" class="event" :data-date="project.attributes.projectDate" data-aos="fade-up">
        <img
          v-if="project.attributes.projectImg.data.length > 0"
          :src="project.attributes.projectImg.data[0].attributes.url.startsWith('http') ? project.attributes.projectImg.data[0].attributes.url : project.attributes.projectImg.data[0].attributes.url"
          :alt="project.attributes.projectTitle"
          loading="lazy"
          decoding="async"
        />
        <h4 class="mb-2 fw-bold d-none d-lg-block">{{ project.attributes.projectTitle }}</h4>
        <h5 class="mb-2 fw-bold d-lg-none">{{ project.attributes.projectTitle }}</h5>
        <p>{{ project.attributes.projectDescription }}</p>
        <ul v-if="project.attributes.projectSkill">
          <li v-html="project.attributes.projectSkill"></li>
        </ul>
        <div class="w-100 text-end mt-3">
          <a v-if="project.attributes.projectLink" :href="project.attributes.projectLink" target="_blank" class="btn btn-sm btn-outline-secondary">查看網站</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="js" setup>
import { computed, defineProps } from 'vue'

// 定義 props
const props = defineProps({
  ProjectsData: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every((project) => {
        return (
          typeof project.id === 'number' &&
          typeof project.attributes.projectTitle === 'string' &&
          (typeof project.attributes.projectDescription === 'string' || project.attributes.projectDescription === null) &&
          typeof project.attributes.projectLink === 'string' &&
          typeof project.attributes.projectDate === 'string' &&
          (typeof project.attributes.projectSkill === 'string' || project.attributes.projectSkill === null) &&
          typeof project.attributes.projectHighLight === 'boolean' &&
          typeof project.attributes.createdAt === 'string' &&
          typeof project.attributes.updatedAt === 'string' &&
          typeof project.attributes.publishedAt === 'string' &&
          Array.isArray(project.attributes.projectImg.data) &&
          project.attributes.projectImg.data.every((img) => {
            return typeof img.id === 'number' && typeof img.attributes.url === 'string'
          })
        )
      })
    },
  },
})

// 計算屬性，根據 projectDate 進行遞減排序
const sortedProjects = computed(() => {
  return props.ProjectsData.sort((a, b) => {
    return new Date(b.attributes.projectDate).getTime() - new Date(a.attributes.projectDate).getTime()
  })
})
</script>

<style lang="scss">
#projects {
  @media (max-width: 991px) {
    padding: 0 20px;
  }
  .container {
    margin-top: 120px;
    min-height: 30vh;
    @media (max-width: 991px) {
      margin-top: 44px;
      padding: 64px 0px;
    }
    .timeline {
      border-left: 3px solid #494949;
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
      margin: 0 auto;
      position: relative;
      padding: 50px;
      list-style: none;
      text-align: left;
      max-width: 90%;
      @media (max-width: 991px) {
        max-width: 98%;
        padding: 24px;
        padding-right: 0;
        padding-left: 26px;
      }
      .event {
        border-bottom: 1px dashed #e8ebf1;
        padding-bottom: 25px;
        margin-bottom: 25px;
        position: relative;
        &:last-of-type {
          padding-bottom: 0;
          margin-bottom: 0;
          border: none;
        }
        &:before,
        &:after {
          position: absolute;
          display: block;
          top: 0;
        }
        &:before {
          left: -207px;
          content: attr(data-date);
          text-align: right;
          font-weight: 100;
          font-size: 0.9em;
          min-width: 120px;
        }
        &:after {
          box-shadow: 0 0 0 3px #494949;
          left: -55.8px;
          background: #fff;
          border-radius: 50%;
          height: 9px;
          width: 9px;
          content: '';
          top: 5px;
        }
        @media (max-width: 991px) {
          padding-top: 30px;
          &:before {
            left: 0px;
            text-align: left;
          }
          &:after {
            left: -31.8px;
          }
        }
      }
      img {
        margin-bottom: 12px;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        border: 1px solid #0443171a;
        box-shadow: 0px 8px 16px #0443171a;
        border-radius: 16px;
      }
      li p {
        font-size: 20px;
        line-height: 2;
      }
    }
  }
}
</style>
