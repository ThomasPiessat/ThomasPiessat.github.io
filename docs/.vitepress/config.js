import { defineConfig } from 'vitepress'

export default defineConfig ({
    title: "NoteBook",
    // base: '/vitePressNoteBook/',
    lastUpdated: true,
    themeConfig: {
      search: {
        provider: 'local'
      },
      nav: [
        { text: 'Home', link: '/' },
        { text: "About", link: "/about" },
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/ThomasPiessat" },
      ],
      sidebar: [
        {
          text: "GeneralProg",
          collapsed: false,
          items: [
            { text: "GeneralProg", link: "/generalProg/generalProg" },
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
            { text: "UE4", link: "/UnrealEngine/UE4/UE4" },
            { text: "UE5", link: "/UnrealEngine/UE5/UE5" },
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
            { text: "Perforce", link: "/perforce" },
            { text: "Git", link: "/git" },
          ],
        },
        {
          text: "IT",
          collapsed: true,
          items: [
            { text: "Docker", link: "/docker" },
            { text: "Dotnet", link: "/dotnet" },
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
      ],
        }
        });
    
