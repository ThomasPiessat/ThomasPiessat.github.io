<script setup>
const vitepress = __VITEPRESS_VERSION__
const vue = __VUE_VERSION__
</script>

<template>
  <div class="versions">
    <a
      href="https://vitepress.dev"
      target="_blank"
      rel="noopener noreferrer"
      class="badge vitepress"
    >
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <!-- simple lightning bolt for VitePress -->
        <path fill="currentColor" d="M128 8L48 144h64l-16 104 80-136h-64z"/>
      </svg>
      VitePress {{ vitepress }}
    </a>

    <a
      href="https://vuejs.org"
      target="_blank"
      rel="noopener noreferrer"
      class="badge vue"
    >
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69">
        <!-- Vue logo -->
        <path fill="#41b883" d="M0 0h65.4l65.5 113.45L196.4 0h65.36L130.9 226.69z"/>
        <path fill="#35495e" d="M65.4 0h65.5l65.5 113.45L130.9 226.69z"/>
      </svg>
      Vue {{ vue }}
    </a>
  </div>
</template>

<style scoped>
.versions {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
  flex-wrap: wrap;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.6rem;
  border-radius: 0.4rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: white;
  text-decoration: none; /* no underline */
  cursor: pointer;       /* 👈 pointer cursor */
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.badge:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.icon {
  width: 1em;
  height: 1em;
}

.badge.vitepress {
  background: linear-gradient(135deg, #646cff, #7f85ff);
}

.badge.vue {
  background: linear-gradient(135deg, #42b883, #2c9d75);
}
</style>
