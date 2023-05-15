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
// @import '~/assets/css/global.scss';  `//不推荐 可能会被覆盖
@use '~/assets/css/global.scss' as g; //推荐
@use '~/assets/fonts/LCD.css';
// @use '~/assets/css/global.scss'; //推荐

// .index {
//     .gg {
//         color: g.$color;
//     }
// }
.home_main {}
</style>