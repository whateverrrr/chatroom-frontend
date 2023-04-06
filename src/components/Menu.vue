<template>
    <div @mouseenter="isCollapse = false" @mouseleave="isCollapse = true">
        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <House />
                    </el-icon>
                    <span>我的</span>
                </template>
                <el-menu-item-group>
                    <template #title><span>Group One</span></template>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title><span>item four</span></template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
                <el-icon>
                    <ChatSquare />
                </el-icon>
                <template #title>聊天室</template>
            </el-menu-item>
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
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    House,
    ChatSquare,
    Plus
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}</style>
  