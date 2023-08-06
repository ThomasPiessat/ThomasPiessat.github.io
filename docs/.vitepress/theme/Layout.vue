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
        <nav class="button">
        <div class="button-container">
          <ul class="button-menu">
            <li class="button-item"><a href="#">About Me</a></li>
            <li class="button-item"><a href="/generalProg/generalProg">NoteBook</a></li>
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
      background-color: #4CAF50;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
.button-item:hover {
      background-color: #646cff;
    }
.button-item:active {
      background-color: #646cff;
    }
</style>

