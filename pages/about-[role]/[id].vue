
<template>
    <div class="about">
        {{ id }} -------------{{ role }}
    </div>
</template>


<script setup lang='ts'>
const route = useRoute()
const { id, role } = route.params

</script>


<style scoped lang='scss'>
.about {}
</style>