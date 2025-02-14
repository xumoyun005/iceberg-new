export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
      bodyAttrs: {
        id: "body",
      },
    },
  },

  modules: ["@nuxtjs/i18n", "@pinia/nuxt", "nuxt-swiper", "@element-plus/nuxt"],

  pinia: {
    storesDirs: ["~/stores/**", "~models/**/stores/**"],
  },

  css: ["~/assets/style/main.scss"],

  i18n: {
    strategy: "prefix",
    locales: [
      {
        code: "ru",
        language: "ru-RU",
        name: "Русский",
        file: "ru.ts",
        dir: "ltr",
      }, // Русский
      {
        code: "uz",
        language: "uz-UZ",
        name: "O'zbekcha",
        file: "uz.ts",
        dir: "ltr",
      }, // O'zbekcha
    ],
    defaultLocale: "ru",
    langDir: "locales",
    compilation: {
      strictMessage: false,
      escapeHtml: false,
    },
    baseUrl: "https://icebergbtl.uz",
    vueI18n: "./i18n.config.ts",
  },

  routeRules: {
    "/": {
      prerender: true,
      redirect: {
        to: "/ru",
        statusCode: 301,
      },
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },

  plugins: ["~/plugins/phone-mask"],
});
