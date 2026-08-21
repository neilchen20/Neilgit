<template>
  <nav class="site-navbar" :class="{ 'site-navbar--glass': isScrolled }" aria-label="主要導覽">
    <div class="container-fluid">
      <RouterLink class="navbar-brand playwrite-dk-uloopet-400" :to="{ name: 'Home', hash: '#home' }" aria-label="Neil Chen 首頁"> Neil.<span class="brand-role"> fe dev</span> </RouterLink>

      <div class="navbar-nav" aria-label="頁面區塊">
        <RouterLink v-for="item in navItems" :key="item.id" class="nav-link" :class="{ active: activeSection === item.id }" :to="{ name: 'Home', hash: item.hash }" :aria-current="activeSection === item.id ? 'location' : undefined" @click="setActiveSection(item.id)">
          {{ item.label }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeSection = ref(route.name === 'Home' ? 'home' : 'projects')
const isScrolled = ref(false)

const navItems = [
  { id: 'home', label: 'Home', hash: '#home' },
  { id: 'skills', label: 'Skills', hash: '#skills' },
  { id: 'projects', label: 'Projects', hash: '#featured-projects' },
  { id: 'contact', label: 'Contact', hash: '#contact' },
]

const sectionToNav = {
  home: 'home',
  skills: 'skills',
  'featured-projects': 'projects',
  projects: 'projects',
  contact: 'contact',
}

let sectionObserver
let scrollFrame

function disconnectObserver() {
  sectionObserver?.disconnect()
  sectionObserver = undefined
}

async function observeHomeSections() {
  disconnectObserver()

  if (route.name !== 'Home') {
    activeSection.value = 'projects'
    return
  }

  await nextTick()

  const sections = Object.keys(sectionToNav)
    .map((id) => document.getElementById(id))
    .filter(Boolean)

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visibleEntry) {
        activeSection.value = sectionToNav[visibleEntry.target.id]
      }
    },
    {
      rootMargin: '-24% 0px -58% 0px',
      threshold: [0, 0.1, 0.25, 0.5],
    },
  )

  sections.forEach((section) => sectionObserver.observe(section))
}

function setActiveSection(sectionId) {
  activeSection.value = sectionId
}

function updateScrollState() {
  isScrolled.value = window.scrollY > 24
  scrollFrame = undefined
}

function handleScroll() {
  if (scrollFrame !== undefined) {
    return
  }

  scrollFrame = requestAnimationFrame(updateScrollState)
}

watch(() => route.fullPath, observeHomeSections)

onMounted(() => {
  observeHomeSections()
  updateScrollState()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  disconnectObserver()
  window.removeEventListener('scroll', handleScroll)

  if (scrollFrame !== undefined) {
    cancelAnimationFrame(scrollFrame)
  }
})
</script>

<style lang="scss" scoped>
.site-navbar {
  position: sticky;
  z-index: 1030;
  top: 0;
  height: 72px;
  border-bottom: 1px solid rgb(34 43 64 / 8%);
  background: #fff;
  transition:
    border-color 220ms ease,
    background-color 220ms ease;

  .container-fluid {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 72px;
    border: 1px solid transparent;
    border-radius: 0;
    transition:
      width 260ms cubic-bezier(0.22, 1, 0.36, 1),
      height 260ms cubic-bezier(0.22, 1, 0.36, 1),
      margin 260ms cubic-bezier(0.22, 1, 0.36, 1),
      padding 260ms cubic-bezier(0.22, 1, 0.36, 1),
      border-color 220ms ease,
      border-radius 260ms cubic-bezier(0.22, 1, 0.36, 1),
      background-color 220ms ease,
      box-shadow 220ms ease;
  }
}

.site-navbar--glass {
  border-bottom-color: transparent;
  background: transparent;

  .container-fluid {
    width: calc(100% - 32px);
    height: 60px;
    margin-top: 6px;
    padding: 0 48px;
    border-color: rgb(255 255 255 / 64%);
    border-radius: 22px;
    background: linear-gradient(135deg, rgb(255 255 255 / 76%), rgb(231 238 255 / 48%)), rgb(255 255 255 / 54%);
    box-shadow:
      0 16px 42px rgb(25 37 66 / 14%),
      inset 0 1px 0 rgb(255 255 255 / 88%),
      inset 0 -1px 0 rgb(255 255 255 / 28%);
    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
  }
}

.navbar-brand {
  color: #202632;
  font-size: 1.55rem;
  text-decoration: none;

  &:focus-visible {
    border-radius: 6px;
    outline: 3px solid #b9c6ff;
    outline-offset: 3px;
  }
}

.navbar-nav {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 4px;
}

.nav-link {
  position: relative;
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  padding: 10px 14px;
  border-radius: 10px;
  color: #606978;
  font-size: 20px;
  font-weight: 700;
  transition: color 160ms ease;

  &::after {
    position: absolute;
    right: 14px;
    bottom: 5px;
    left: 14px;
    height: 2px;
    border-radius: 999px;
    background: #315efb;
    content: '';
    opacity: 0;
    transform: scaleX(0.35);
    transition:
      opacity 160ms ease,
      transform 160ms ease;
  }

  &:hover {
    color: #262e3c;
  }

  &:focus-visible {
    outline: 3px solid #b9c6ff;
    outline-offset: 2px;
  }

  &.active {
    color: #315efb;

    &::after {
      opacity: 1;
      transform: scaleX(1);
    }
  }
}

@media (max-width: 991px) {
  .site-navbar .container-fluid {
    padding: 0 28px;
  }

  .site-navbar--glass .container-fluid {
    width: calc(100% - 24px);
    padding: 0 28px;
  }
}

@media (max-width: 767px) {
  .site-navbar {
    height: 64px;

    .container-fluid {
      padding: 0 14px;
    }
  }

  .site-navbar--glass .container-fluid {
    width: calc(100% - 12px);
    height: 56px;
    margin-top: 4px;
    padding: 0 10px;
    border-radius: 18px;
  }

  .navbar-brand {
    font-size: 1.35rem;
  }

  .brand-role {
    display: none;
  }

  .navbar-nav {
    gap: 0;
  }

  .nav-link {
    min-height: 44px;
    padding: 10px 8px;
    font-size: 13px;

    &::after {
      right: 8px;
      left: 8px;
    }
  }
}

@media (max-width: 359px) {
  .nav-link {
    padding: 10px 6px;
    font-size: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .site-navbar,
  .site-navbar .container-fluid,
  .nav-link,
  .nav-link::after {
    transition: none;
  }
}
</style>
