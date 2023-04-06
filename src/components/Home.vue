<script setup lang="ts">
import { ref } from 'vue'
import Menu from './Menu.vue'
import Chat from './Chat.vue'
// defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div>
    <Menu></Menu>
  </div>

  <div>
    <Chat></Chat>
  </div>
</template>

<style scoped>

</style>
