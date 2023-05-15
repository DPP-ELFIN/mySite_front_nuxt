<template>
    <div class="content">
        aboutmain {{ id }} -------------{{ role }}
        内容区
    </div>
</template>


<script setup lang='ts'>
const route = useRoute()
const { id, role } = route.params

</script>


<style scoped lang='scss'>
.content{
    flex: 0.8;
    background-color: #ccc;
    padding: 30px;
}
</style>