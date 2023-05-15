<template>
    <div class="layout">
        <HomeHeader />
        <!-- <img src="~/assets/img/hero-gradient-tablet.svg" alt="" srcset=""> -->
        <slot />
        <Footer />
    </div>
</template>


<script setup lang='ts'>
import HomeHeader from '@/components/app-header/HomeHeader.vue'
import Footer from '@/components/app-footer/index.vue'

</script>


<style scoped lang='scss'>
.layout {
    // width: 100vw;
    font-family: Furore-2;

    img {
        // position: fixed;
        // right: 0;
        // width: 100vw;
    }

}
</style>