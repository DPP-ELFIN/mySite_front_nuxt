/** @format */

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: [
    "normalize.css", // reset.css
    "~/assets/fonts/LCD.css",
  ],
  modules: ["@element-plus/nuxt"],
  appConfig: {
    title: "DPP的个人站点",
  },
  runtimeConfig: {
    appkey: "31f1540a-c463-4f47-85cd-ef0f3bc226a7",
    public: {
      appName: "dpp_front",
    },
  },
  // spa
  // ssr: false,
  router: {
    options: {
      // hashMode: true,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '~/assets/css/global.scss' as *;", //自动给 scss 模块添加 '@use '~/assets/css/global.scss' as *
        },
      },
    },
  },
});
