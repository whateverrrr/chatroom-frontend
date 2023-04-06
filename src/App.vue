<script setup lang="ts">
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import { ref } from 'vue'
const count = ref(0)
const load = () => {
  count.value += 2
}
const textarea1 = ref('')
const textarea2 = ref('')
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
            <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
          </ul>
          <div style="margin: 20px 0" />
          <el-input v-model="textarea2" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea"
            placeholder="Please input" />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>


</template>

<style scoped>
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
