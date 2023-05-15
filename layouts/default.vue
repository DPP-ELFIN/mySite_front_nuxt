<template>
    <div class="layout">
        <Header />
        <slot />
        <Footer />
    </div>
</template>


<script setup lang='ts'>
import Header from '@/components/app-header/index.vue'
import Footer from '@/components/app-footer/index.vue'

</script>


<style scoped lang='scss'>
.layout {
    height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>