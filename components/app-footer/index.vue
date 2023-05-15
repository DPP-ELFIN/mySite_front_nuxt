<template>
    <div class="footer">
        <div class="container">
            @本网站已备案--备案号：<NuxtLink to="https://beian.miit.gov.cn">粤ICP备2023050388号-1</NuxtLink>
        </div>
    </div>
</template>


<script setup lang='ts'>


</script>


<style scoped lang='scss'>
.footer {
    height: 60px;
    line-height: 60px;
    background-color: #ccc;

    .container {
        width: 1240px;
        margin: 0 auto;
        text-align: center;

        a {
            color: black;
            text-decoration: none;
        }
    }
}
</style>