<template>
    <div class="header">
        <div class="container">
            <div class="logo">
                <img src="" alt="">
                <span>DPP的个人站点</span>
            </div>
            <div class="header_right">
                <span>登录</span>
                <span>注册</span>
            </div>
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

    .container {
        width: 1240px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        .header_right {
            span {
                padding: 0 20px;
                cursor: pointer;

                &:hover {
                    color: gold;
                }
            }
        }
    }

    .logo {}
}
</style>