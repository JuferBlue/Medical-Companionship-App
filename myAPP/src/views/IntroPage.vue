<template>
    <div class="intro">
      <h1>Welcome to My App</h1>
      <p>Loading...</p>
    </div>
  </template>
  
  <style scoped>
  .intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
  }
  </style>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    // 跳转到 /index 页面
    router.push({ path: '/index' })
  }, 2000) // 2秒后跳转到 /index
})
</script>
