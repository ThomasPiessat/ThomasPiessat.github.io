<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-before>
      <div class="shareCard">
        <h1 class="title">
          <span>Thomas Piessat - Software Engineer</span>
        </h1>
        <p class="description">
          Working for Black Shamrock <i>- a Virtuos Studio</i> 
        </p>
  </div>
    </template>
  </Layout>
</template>

<script lang="ts" setup></script>
<style scoped>
.shareCard {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.title {
  color : #646cff;
  display: flex;
  align-items: center;
  font-size: 2.2em;
  font-weight: bold;
}
.description {
  margin: 1em 0;
}
</style>

