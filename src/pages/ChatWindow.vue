<script lang="ts" setup>
import { ref } from "vue"
const textarea1 = ref('')
const textarea2 = ref('')
</script>

<template>
    <el-row :gutter="10">
        <el-col :span="6">
            <el-scrollbar height="350px">
                <p v-for="item in 10" :key="item" class="scrollbar-demo-item">{{ item }}</p>
            </el-scrollbar>
            <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="18">
            <el-scrollbar height="300px">
                <p v-for="item in 10" :key="item" class="scrollbar-demo-item">{{ item }}</p>
            </el-scrollbar>
            <el-input v-model="textarea2" :autosize="{ minRows: 1, maxRows: 2 }" type="textarea"
                placeholder="Please input" />
        </el-col>
    </el-row>
</template>



<style scoped>
.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.infinite-list {
    height: 300px;
    padding: 0;
    margin: 0;
    list-style: none;
}

.infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: var(--el-color-primary-light-9);
    margin: 10px;
    color: var(--el-color-primary);
}

.infinite-list .infinite-list-item+.list-item {
    margin-top: 10px;
}
</style>