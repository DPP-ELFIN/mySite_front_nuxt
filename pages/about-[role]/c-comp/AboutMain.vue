<template>
    <div class="about">
        aboutmain {{ id }} -------------{{ role }}
    </div>
</template>


<script setup lang='ts'>
const route = useRoute()
const { id, role } = route.params

</script>


<style scoped lang='scss'>
.about {
    flex: 1;
}
</style>