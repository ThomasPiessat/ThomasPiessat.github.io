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
          collapsible: true,
          items: [
            { text: "GeneralProg", link: "/generalProg/generalProg" },
          ],
        },
        {
          text: "VS",
          collapsible: true,
          items: [
            { text: "Visual Studio", link: "/visualStudio/visualStudio" },
          ],
        },
        {
          text: "UnrealEngine",
          collapsible: true,
          items: [
            { text: "UE4", link: "/UnrealEngine/UE4/UE4" },
            { text: "UE5", link: "/UnrealEngine/UE5/UE5" },
          ],
        },
        {
          text: "Unity",
          collapsible: false,
          items: [
            { text: "Unity", link: "/unity/Unity" },
          ],
        },
        {
          text: "Versionning",
          collapsible: true,
          items: [
            { text: "Perforce", link: "/perforce" },
            { text: "Git", link: "/git" },
          ],
        },
        {
          text: "IT",
          collapsible: true,
          items: [
            { text: "Docker", link: "/docker" },
            { text: "Dotnet", link: "/dotnet" },
          ],
        },
        {
          text: "Domotic",
          collapsible: true,
          items: [
            { text: "ESP32", link: "/esp" },
            { text: "Pi4", link: "/pi4" },
            { text: "WLED", link: "/wled" },
          ],
        },
      ],
        }
        });
    
