<template>
  <nav class="site-navbar" :class="{ 'site-navbar--glass': isScrolled }" aria-label="主要導覽">
    <div class="container-fluid">
      <RouterLink class="navbar-brand playwrite-dk-uloopet-400" :to="{ name: 'Home', hash: '#home' }" aria-label="Neil Chen 首頁"> Neil.<span class="brand-role"> fe dev</span> </RouterLink>

      <div class="navbar-nav" aria-label="頁面區塊">
        <a v-for="item in navItems" :key="item.id" :href="`/${item.hash}`" class="nav-link" :class="{ 'nav-link--current': activeSection === item.id }" :aria-current="activeSection === item.id ? 'location' : undefined" @click="navigateToSection($event, item)">
          {{ item.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const activeSection = ref('home')
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

const sectionIds = Object.keys(sectionToNav)
let scrollFrame
let navigationTimer
let isNavigating = false

function syncRouteSection() {
  if (route.name && route.name !== 'Home') {
    activeSection.value = 'projects'
    return
  }

  activeSection.value = sectionToNav[route.hash.replace('#', '')] ?? 'home'
}

function getActiveSectionFromScroll() {
  if (route.name && route.name !== 'Home') {
    return 'projects'
  }

  const navbarHeight = document.querySelector('.site-navbar')?.offsetHeight ?? 72
  const activationOffset = Math.max(navbarHeight + 24, window.innerHeight * 0.35)
  const activationPosition = window.scrollY + activationOffset
  let currentSection = 'home'

  sectionIds.forEach((sectionId) => {
    const section = document.getElementById(sectionId)

    if (!section) {
      return
    }

    const sectionTop = section.getBoundingClientRect().top + window.scrollY

    if (sectionTop <= activationPosition) {
      currentSection = sectionToNav[sectionId]
    }
  })

  return currentSection
}

function finishNavigation() {
  window.clearTimeout(navigationTimer)
  navigationTimer = undefined
  isNavigating = false
}

async function navigateToSection(event, item) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return
  }

  event.preventDefault()
  window.clearTimeout(navigationTimer)
  isNavigating = true
  activeSection.value = item.id

  if (route.name === 'Home' && route.hash === item.hash) {
    await nextTick()
    document.querySelector(item.hash)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    })
  } else {
    await router.push({ name: 'Home', hash: item.hash })
  }

  navigationTimer = window.setTimeout(finishNavigation, 2000)
}

function updateScrollState() {
  isScrolled.value = window.scrollY > 24

  if (!isNavigating) {
    activeSection.value = getActiveSectionFromScroll()
  }

  scrollFrame = undefined
}

function handleScroll() {
  if (scrollFrame !== undefined) {
    return
  }

  scrollFrame = requestAnimationFrame(updateScrollState)
}

function handleScrollEnd() {
  if (isNavigating) {
    finishNavigation()
  }
}

watch(
  () => [route.name, route.hash],
  syncRouteSection,
  { immediate: true },
)

onMounted(() => {
  isScrolled.value = window.scrollY > 24
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('scrollend', handleScrollEnd)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('scrollend', handleScrollEnd)
  window.clearTimeout(navigationTimer)

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

  &.nav-link--current {
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
