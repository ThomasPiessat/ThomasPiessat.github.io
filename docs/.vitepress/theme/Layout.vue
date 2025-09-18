<script setup>
import DefaultTheme from 'vitepress/theme'
import Versions from './components/Versions.vue'

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
          Working for LVCIM 
        </p>
        <ClientOnly>
          <Versions />
        </ClientOnly>
        <div style="height: 20px;"></div>
        <nav class="button">
        <div class="button-container">
          <ul class="button-menu">
            <li class="button-item"><a href="AboutMe">About Me</a></li>
          </ul>
        </div>
       </nav>
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
.button-item {

  margin-left: 20px;
}

.button-item a {
  color: #fff;
  text-decoration: none;
}

.button-item {
      display: inline-block;
      padding: 16px 32px;
      font-size: 16px;
      color: #fff;
      background-color: #272827;
      border: 1px solid #ccc;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
.button-item:hover {
  border-color: #646cff;
    }
    
</style>

