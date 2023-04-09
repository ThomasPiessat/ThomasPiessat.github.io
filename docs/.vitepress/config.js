export default {
    themeConfig: {
      logo: "/logo.svg",
      siteTitle: "NoteBook",
    },
  };
  module.exports = {
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: "About", link: "/about" },
        { text: "Contact", link: "/contact" },
      ],
      sidebar: [
        {
          text: "VS",
          collapsible: true,
          items: [
            { text: "Visual Studio", link: "/vs" },
          ],
        },
        {
          text: "UnrealEngine",
          collapsible: true,
          items: [
            { text: "Introduction", link: "/introduction" },
            { text: "Getting Started", link: "/getting-started" },
          ],
        },
        {
          text: "Unity",
          collapsible: false,
          items: [
            { text: "Introduction", link: "/introduction" },
            { text: "Getting Started", link: "/getting-started" },
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
      }
    