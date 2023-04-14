<script setup lang="ts">
import {
  Setting,
  House,
  ChatSquare,
  Plus
} from '@element-plus/icons-vue'
import { ref } from 'vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <div @mouseenter="isCollapse = false" @mouseleave="isCollapse = true">
          <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose">
            <router-link to="/profile">
              <el-menu-item index="1">
                <el-icon>
                  <House />
                </el-icon>
                <template #title>我的</template>
              </el-menu-item>
            </router-link>
            <router-link to="/chatWindow">
              <el-menu-item index="2">
                <el-icon>
                  <ChatSquare />
                </el-icon>
                <template #title>聊天室</template>
              </el-menu-item>
            </router-link>
            <el-menu-item index="3" disabled>
              <el-icon>
                <Plus />
              </el-icon>
              <template #title>创建</template>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <setting />
              </el-icon>
              <template #title>设置</template>
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
