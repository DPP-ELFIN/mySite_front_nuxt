<template>
  <nuxt-page />
</template>
<script setup>
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const runtime = useRuntimeConfig()

if (process.client) {
  // console.log(runtime);
} else if (process.server) {
  // console.log(runtime);
}

// console.log(process.env);

const appconfig = useAppConfig()
onMounted(() => {
  document.title = appconfig.title
})

const nuxtApp = useNuxtApp()
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    nuxtApp.vueApp.component(key, component);
  }
</script>

<style lang="scss">
// @import url(~@/assets/fonts/LCD.css);
</style>