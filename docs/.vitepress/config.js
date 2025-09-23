import { defineConfig } from 'vitepress'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const vitepressPkg = require('vitepress/package.json')
const vuePkg = require('vue/package.json')

export default defineConfig({
  lang: 'en-US',
  title: 'NoteBook',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    siteTitle: 'NoteBook',
    logo: '/logo.svg',
    search: {
      provider: 'local'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/AboutMe/' },
      { text: 'Portfolio', link: 'https://thomaspiessat.github.io/Portfolio/' }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/ThomasPiessat" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/thomas-piessat/" },
    ],
    sidebar: [
      {
        text: "GeneralProg",
        collapsed: false,
        items: [
          { text: 'Home', link: '/generalProg/generalProg' },
        ],
      },
      {
        text: "VS",
        collapsed: false,
        items: [
          { text: 'Visual Studio', link: '/visualStudio/visualStudio' },
        ],
      },
      {
        text: "UnrealEngine",
        collapsed: false,
        items: [
          { text: 'Home', link: '/UnrealEngine/unrealengine'},
          { text: 'Global', link: '/UnrealEngine/global/global'},
          { text: 'UE4', link: '/UnrealEngine/UE4/UE4'},
          { text: 'UE5', link: '/UnrealEngine/UE5/UE5'},
        ],
      },
      {
        text: "Unity",
        collapsed: false,
        items: [
          { text: "Unity", link: "/unity/Unity" },
        ],
      },
      {
        text: "Versionning",
        collapsed: true,
        items: [
          { text: "Home", link: "/versionning/versionning" },
          { text: "Perforce", link: "/versionning/perforce/perforce" },
          { text: "Git", link: "/versionning/git" },
        ],
      },
      {
        text: "IT",
        collapsed: true,
        items: [
          { text: "Home", link: "/it/it" },
          { text: "Dotnet", link: "/it/dotnet" },
          { text: "NPM", link: "/it/npm/npm" },
          { text: "SQL", link: "/it/sql/sql" },
        ],
      },
      {
        text: "Domotic",
        collapsed: true,
        items: [
          { text: "ESP32", link: "/esp" },
          { text: "Pi4", link: "/pi4" },
          { text: "WLED", link: "/wled" },
        ],
      },
      {
        text: "Web",
        collapsed: true,
        items: [
          { text: "Home", link: "/web/web" },
          { text: "Vue", link: "/web/vue" },
          { text: "React", link: "/web/react/react" },
          { text: "Symfony", link: "/web/symfony/symfony" },
        ],
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Thomas Piessat'
    },
  },
  vite: {
    define: {
      __VITEPRESS_VERSION__: JSON.stringify(vitepressPkg.version),
      __VUE_VERSION__: JSON.stringify(vuePkg.version)
    }
  },
});

