<script setup>
import NavBottom from '../src/views/NavBottom.vue'
import { useRoute } from 'vue-router'
import { computed,onMounted } from 'vue'

const route = useRoute()

// 检查当前路由是否是全屏页面
const isFullScreenRoute = computed(() => route.meta.fullScreen === true)

</script>

<template>
  <div>
    <!-- 主体内容区域 -->
    <router-view></router-view>
    <!-- 仅在非全屏页面时显示 NavBottom -->
    <NavBottom v-if="!isFullScreenRoute"></NavBottom>
  </div>
</template>

<style scoped>
/* 在这里添加样式 */
</style>
