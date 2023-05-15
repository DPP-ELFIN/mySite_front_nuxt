<template>
    <div class="docs_main">
        <div class="card">
            <el-card :body-style="{ padding: '0px' }" shadow="hover" v-for="i in 10" :key="i">
                <img src="~/assets/img/TS.png" class="image" />
                <div class="content">
                    <p class="title">TS</p>
                    <p class="detail">TS</p>
                    <p class="time">{{ currentDate }}</p>
                </div>
            </el-card>

        </div>
        <div class="about_my">
            123
        </div>
        <el-backtop :right="100" :bottom="100" />
    </div>
</template>


<script setup lang='ts'>
import { ref } from 'vue'

const currentDate = ref(new Date())

</script>


<style scoped lang='scss'>
.docs_main {
    flex: 1;
    display: flex;
    padding: 30px;

    .card {
        flex: 0.8;
        display: flex;
        flex-wrap: wrap;


        .el-card {
            cursor: pointer;
            width: 300px;
            height: 400px;
            margin: 0 20px 20px 0;
            display: flex;

            :deep(.el-card__body) {
                display: flex;
                flex-direction: column;

                .content {
                    flex: 1;
                    padding: 10px;
                }
            }

            img {
                width: 100%;
                height: 70%;

            }

            p {
                margin: unset;
            }
        }
    }

    .about_my {
        flex: 0.2;
    }
}
</style>