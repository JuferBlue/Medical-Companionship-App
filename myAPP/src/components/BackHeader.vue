<template>
    <div class="header-container">
      <span class="back-icon" @click="goBack">&lt;</span>
      <span class="header-title">{{ title }}</span>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { useRouter } from 'vue-router';
  
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
  });
  
  const router = useRouter();
  
  const goBack = () => {
    router.back();
  };
  </script>
  
  <style scoped>
  .header-container {
    display: flex;
    align-items: center;
    /* padding: 1rem; */
    background-color: #ffffff;
    height: 5rem;
  }
  
  .back-icon {
    font-size: 2rem;
    cursor: pointer;
  }
  
  .header-title {
    flex: 1;
    text-align: center;
    font-size: 1.8rem; /* 根据你的需求调整字体大小 */
    font-weight: bold;
  }
  </style>
  