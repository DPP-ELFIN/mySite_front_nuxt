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
  app: {
    head: {
      title: "DPP的个人站点",
      meta: [
        {
          name: "description",
          content: "DPP的个人站点,个人博客，技术分享，文档分享",
        },
        {
          name: "keywords",
          content: "个人站点,博客,技术,文档,前端，vue2，vue3，nuxt，vite，node，express，ts，js，html，css，项目实战",
        },
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1",
        },
      ],
      link: [{ rel: "icon", type: "image/vnd.microsoft.icon", href: "/favicon.ico" }],
    },
  },
});
