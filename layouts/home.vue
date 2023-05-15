<template>
    <div class="layout">
        <HomeHeader />
        <slot />
        <HomeFooter />
    </div>
</template>


<script setup lang='ts'>
import HomeHeader from '@/components/app-header/HomeHeader.vue'
import HomeFooter from '@/components/app-footer/HomeFooter.vue'

</script>


<style scoped lang='scss'>
.layout {}
</style>