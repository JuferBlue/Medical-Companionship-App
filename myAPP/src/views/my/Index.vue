<template>
    <div class="page">
      <Header avatar="" phone="188****5714"/>
      <MemberServices :manageCount="0" :couponCount="0"/>
      <MenuList/>
    </div>
  </template>
  
  <script setup>
  import Header from './Header.vue';
  import MemberServices from './MemberServices.vue';
  import MenuList from './MenuList.vue';
  </script>
  
  <style scoped>
  /* 可以根据需要添加全局样式 */
  .page{
    background-color: #f0f0f0
  }
  </style>
  