<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div>
        <a class="navbar-brand playwrite-dk-uloopet-400" id="logo-text" href="/">Neil. fe dev</a>
      </div>
      <div>
        <div class="navbar-nav d-flex flex-row gap-3">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
          <a class="nav-link" href="#projects">Projects</a>
        </div>
        <!-- <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          
        </div> -->
      </div>
      <!-- <div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div> -->
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  height: 68px;
  .container-fluid {
    padding: 0 72px;
    @media (max-width: 991px) {
      padding: 0 32px;
    }
    .navbar-brand {
      font-size: 1.8rem;
    }
    .nav-link {
      font-size: 1.5rem;
    }
    .navbar-collapse.show {
      position: absolute;
      background: #fff;
      top: 90px;
      right: 32px;
      min-width: 200px;
      min-height: min-content;
      border-radius: 16px;
      padding: 16px;
      z-index: 9;
    }
  }
}
</style>
