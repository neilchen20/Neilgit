<template>
  <div class="container-fluid p-0" id="home">
    <div class="row">
      <div class="col-12 position-relative">
        <Banner />
        <Avatar />
      </div>
      <div class="col-10 col-lg-8">
        <Intro />
      </div>
    </div>
  </div>
  <Skills />
  <div class="container-fluid" id="featured-projects">
    <FeaturedProjects :ProjectsHighLight="projectsStore.ProjectsHighLight" />
  </div>
  <div class="container-fluid" id="projects">
    <Projects :ProjectsData="projectsStore.ProjectsData" />
  </div>
  <ContactCta />
</template>

<script lang="js" setup>
import Projects from '../components/Projects/Projects.vue'
import Banner from '../components/Home/Banner.vue'
import Avatar from '../components/Home/Avatar.vue'
import Intro from '../components/Home/Intro.vue'
import Skills from '../components/Home/Skills.vue'
import ContactCta from '../components/Home/ContactCta.vue'
import FeaturedProjects from '../components/Projects/FeaturedProjects.vue'
import { useProjectsStore } from '../stores/ProjectsStore.js'

const projectsStore = useProjectsStore()

if (projectsStore.ProjectsData.length === 0) {
  projectsStore.setProjects(projectsStore.mockData)
}
</script>

<style lang="scss" scoped>
#home,
#featured-projects,
#projects {
  scroll-margin-top: 88px;
}

#home {
  .row {
    gap: 90px;
    justify-content: center;
    @media (max-width: 991px) {
      gap: 72px;
    }
  }
}
#featured-projects {
  margin-top: 120px;
  min-height: 30vh;
  @media (max-width: 991px) {
    margin-top: 44px;
    padding: 64px 20px;
  }
}
</style>
