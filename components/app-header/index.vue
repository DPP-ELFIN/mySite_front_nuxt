<template>
    <div class="header">
        <div class="logo">
            <nuxt-link to="/">
                <img src="" alt="">
                <span>DPP的个人站点</span>
            </nuxt-link>
        </div>
        <div class="header_right">
            <span>登录</span>
            <span>注册</span>
        </div>
    </div>
</template>


<script setup lang='ts'>


</script>


<style scoped lang='scss'>
.header {
    height: 60px;
    line-height: 60px;
    background-color: rgb(84, 92, 100);
    color: white;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {}

    .header_right {
        span {
            cursor: pointer;
            margin-right: 15px;

            &:hover {
                color: gold;
            }
        }
    }
}
</style>