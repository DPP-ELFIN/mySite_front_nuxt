/** @format */

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: [
    // "@/assets/css/global.scss", //引入css文件作为全局样式 字体图标类似
    "normalize.css", // reset.css
  ],
  modules: ["@element-plus/nuxt"],
  appConfig: {
    title: "MY_SITE_FRONT",
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
      // hashMode: true, //开启hash模式 默认 history ，hash只在spa里生效
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
