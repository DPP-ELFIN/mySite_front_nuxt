<template>
    <div class="plane_main">
        <div class="left">
            <ul>
                <li v-for="(li) in list " :key='li.index' :class="about == li.index ? 'active' : ''"
                    @click="clickList(li.index)">{{ li.name }}</li>
            </ul>
        </div>
        <div class="right">
            <el-table ref="ElTableRefs" :data="tableData" style="width: 100%" max-height="740" border>
                <el-table-column type="index" width="60" label="索引" />
                <el-table-column prop="name" label="名称" width="180" align="center" />
                <el-table-column prop="date" label="创建时间" width="180" align="center" />
                <el-table-column prop="date" label="指定时间" width="180" align="center" />
                <el-table-column prop="date" label="完成时间" width="180" align="center" />
                <el-table-column prop="person" label="开发人员" width="180" align="center" />
                <el-table-column prop="remark" label="备注" width="360" align="center" />
                <el-table-column prop="status" label="状态" width="100" align="center">
                    <template #default="{ row }">
                        <el-tag v-if="row.status === 0" type="warning">开发中</el-tag>
                        <el-tag v-if="row.status === 1" type="success">已完成</el-tag>
                        <el-tag v-if="row.status === 2" type="danger">bug</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作" fixed="right" width="220" align="center">
                    <template #default="{ row }">

                        <el-button size="default" link @click="bug(row)">bug</el-button>
                        <el-button size="default" link @click="said(row)">留言</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>


<script setup lang='ts'>
import { getDemandApi } from '@/service/api'



onMounted(async () => {
    const { data } = await getDemandApi({ about: 0 })
    console.log(data.value);
})

const about = ref(0)
const list = [
    { index: 0, name: '前端页面' },
    { index: 1, name: '后台管理系统' },
    { index: 2, name: '服务端' },
]
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },

]

const bug = (row: any) => {
    console.log(row);

}
const said = (row: any) => {
    console.log(row);

}

const clickList = (index: number) => {
    about.value = index
}
</script>


<style scoped lang='less'>
.plane_main {
    flex: 1;
    padding: 30px;
    display: flex;

    .left {
        flex: 0.2;

        li {
            font-size: 18px;
            padding: 15px 0;
            cursor: pointer;
            font-weight: 600;
            text-align: center;
        }

        .active {
            background-color: rgb(204, 204, 204);

        }
    }

    .right {
        flex: 0.8;
        background-color: #ccc;
        padding: 20px;
        overflow-x: auto;
    }
}
</style>