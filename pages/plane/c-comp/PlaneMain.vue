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
                <el-table-column prop="createTime" label="创建时间" width="180" align="center" :formatter="timeFormat" />
                <el-table-column prop="time" label="指定时间" width="180" align="center" :formatter="timeFormat" />
                <el-table-column prop="overTime" label="完成时间" width="180" align="center" :formatter="timeFormat" />
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
import { getDemandApi, editStatusApi } from '@/service/api'
import { dayjs } from 'element-plus'

const tableData = ref([])
const about = ref(0)
const getDemandFn = async () => {
    const { data } = await getDemandApi({ about: about.value })
    if (data.value?.code !== 200) return ElMessage.error(data.value?.msg)
    tableData.value = data.value?.data
}
getDemandFn()

const timeFormat = (row: any, column: any, cellValue: any) => {
    if (!cellValue) return cellValue
    return dayjs(cellValue).format('YYYY-MM-DD');
}
const list = [
    { index: 0, name: '前端页面' },
    { index: 1, name: '后台管理系统' },
    { index: 2, name: '服务端' },
]

const bug = async (row: any) => {
    const { data } = await editStatusApi({ id: row._id, status: 2 })
    if (data.value?.code !== 201) return ElMessage.error(data.value?.msg)
    ElMessage.success(data.value?.msg)
    getDemandFn()
}
const said = async (row: any) => {
    // const { data } = await editStatusApi({ id: row._id, remark: 2 })
    // if (data.value?.code !== 201) return ElMessage.error(data.value?.msg)
    // ElMessage.success(data.value?.msg)
    // getDemandFn()
}

const clickList = (index: number) => {
    about.value = index
    getDemandFn()
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