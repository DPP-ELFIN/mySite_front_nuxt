<template>
  <nuxt-page />
</template>
<script setup>

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


</script>

<style lang="scss">
// @import url(~@/assets/fonts/LCD.css);
</style>