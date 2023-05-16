<template>
    <div class="header">
        <div class="logo">
            <nuxt-link to="/">
                <img src="" alt="">
                <span>DPP的个人站点</span>
            </nuxt-link>
        </div>
        <div class="header_right">
            <span @click="login">登录</span>
        <span @click="regist">注册</span>
        </div>
    </div>
    <Login :drawer="drawer" @close="drawer = false" />
    <Regist :drawer="drawerRegist" @close="drawerRegist = false" />
</template>


<script setup lang='ts'>
const drawer = ref(false);
const drawerRegist = ref(false);
const login = () => {
  drawer.value = true;
};
const regist = () => {
    drawerRegist.value = true;
};

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