<template>
    <div class="about">
        <Directory />
        <Content />
        
    </div>
</template>


<script setup lang='ts'>
import Directory from "./Directory.vue";
import Content from "./Content.vue";
</script>


<style scoped lang='scss'>
.about {
    flex: 1;
    padding: 30px;
    display: flex;
}
</style>