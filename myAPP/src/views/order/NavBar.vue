<template>
    <div class="nav-container">
      <div
        v-for="(item, index) in navItems"
        :key="index"
        :class="['nav-item', { active: activeIndex === index }]"
        @click="setActive(index)"
      >
        {{ item }}
        <span v-if="activeIndex === index" class="underline"></span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const navItems = ref(['全部', '待支付', '待确认', '待评价', '取消/退款']);
  const activeIndex = ref(0); // 默认高亮“待评价”
  
  const setActive = (index) => {
    activeIndex.value = index;
  };
  </script>
  
  <style scoped>
  .nav-container {
    display: flex;
    justify-content: space-around;
    background-color: #f8f8f8;
    padding: 1rem;
  }
  
  .nav-item {
    position: relative;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1.6rem; /* 根据你的需求调整字体大小 */
  }
  
  .nav-item.active {
    font-weight: bold;
    color: #000;
  }
  
  .underline {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -0.2rem;
    width: 50%;
    height: 0.2rem;
    background-color: #66cc99; /* 根据你的需求调整颜色 */
    border-radius: 0.1rem;
  }
  </style>
  