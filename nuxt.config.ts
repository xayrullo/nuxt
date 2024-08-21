// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/style/tailwind.css", "~/assets/style/main.scss"],

  vite: {
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true,
    },
  },

  modules: ["@nuxt/test-utils/module", "@nuxtjs/i18n"],

  i18n: {
    strategy: "prefix",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        language: "en-US",
        name: "English",
        file: "en.json",
      },
      {
        code: "ru",
        language: "ru-RU",
        name: "Русский язык",
        file: "ru.json",
      },
      {
        code: "uz",
        language: "uz-UZ",
        name: "O'zbek tili",
        file: "uz.json",
      },
    ],
    lazy: true,
    langDir: "locales/",
    vuei18n: {
      fallbackLocale: "en",
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-08-21",
});
