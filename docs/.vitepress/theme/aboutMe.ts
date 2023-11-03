// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import AboutMe from './AboutMe.vue'

export default {
    ...DefaultTheme,
    // override the Layout with a wrapper component that
    // injects the slots
    Layout: AboutMe
  }