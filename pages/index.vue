<template>
    <NuxtLayout>
        <HomeMain />
    </NuxtLayout>
</template>


<script setup lang='ts'>
definePageMeta({
    layout: 'home'
})

</script>


<style scoped lang="scss">
@use '~/assets/css/global.scss' as g; //推荐
// @use '~/assets/fonts/LCD.css';
</style>