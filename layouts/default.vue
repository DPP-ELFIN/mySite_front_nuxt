<template>
    <div class="layout">
        <!-- <div class="header">header</div> -->


        <el-container>
            <el-header>
                <Header />
            </el-header>
            <el-main>
                <slot />
            </el-main>
            <el-footer>
                <Footer />
            </el-footer>
        </el-container>
        <!-- <div class="gooter">gooter</div> -->
    </div>
</template>


<script setup lang='ts'>
import Header from '@/components/app-header/index.vue'
import Footer from '@/components/app-footer/index.vue'

</script>


<style scoped lang='scss'>
.layout {
    width: 100vw;
    height: 100vh;
}
</style>