<template>
    <div class="msg">
      <EasyHeader class="fixed-header">
        <p>订单</p>
      </EasyHeader>
      <NavBar @update:activeIndex="handleTabChange" class="fixed-navbar" />
      <div class="content">
        <router-view />
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import EasyHeader from '../../components/EasyHeader.vue';
  import NavBar from './NavBar.vue';
  
  const router = useRouter();
  
  const handleTabChange = (index) => {
    switch (index) {
      case 0:
        router.push({ name: 'AllOrders' });
        break;
      case 1:
        router.push({ name: 'PendingPayment' });
        break;
      case 2:
        router.push({ name: 'ProgressOrders' });
        break;
      case 3:
        router.push({ name: 'PendingReview' });
        break;
    }
  };
  </script>
  
  <style scoped>
  .msg {
    background-color: #f0f0f0;
    padding-top: 100px; /* Adjust the padding to avoid content being hidden under the fixed headers */
  }
  
  .fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: #fff; /* Ensure the background color matches the rest of the page */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a shadow for better visibility */
  }
  
  .fixed-navbar {
    position: fixed;
    top: 50px; /* Adjust the position based on the height of EasyHeader */
    left: 0;
    width: 100%;
    z-index: 999;
    background-color: #fff; /* Ensure the background color matches the rest of the page */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a shadow for better visibility */
  }
  
  .content {
    height: calc(100vh - 100px); /* Ensure the content area has the correct height */
    overflow-y: auto; /* Allow scrolling within the content area */
  }
  </style>
  