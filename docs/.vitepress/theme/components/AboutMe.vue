<script setup>
import DefaultTheme from 'vitepress/theme'

const { AboutMe } = DefaultTheme
</script>

<template>
  <AboutMe>
    <div class="shareCard">
        <h1 class="title">
          <span>Thomas Piessat - Software Engineer</span>
        </h1>
    </div>
    </AboutMe>
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

</style>