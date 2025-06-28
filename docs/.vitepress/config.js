import { defineConfig } from 'vitepress'

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
    nav: [
      { text: 'Home', link: '/' },
      { text: "About", link: "../AboutMe" },
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
          { text: "Home", link: "/generalProg/generalProg" },
        ],
      },
      {
        text: "VS",
        collapsed: false,
        items: [
          { text: "Visual Studio", link: "/visualStudio/visualStudio" },
        ],
      },
      {
        text: "UnrealEngine",
        collapsed: false,
        items: [
          { text: "Home", link: "/unrealEngine/unrealEngine" },
          { text: "Global", link: "/unrealEngine/global/global" },
          { text: "UE4", link: "/unrealEngine/UE4/UE4" },
          { text: "UE5", link: "/unrealEngine/UE5/UE5" },
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
  }
});

