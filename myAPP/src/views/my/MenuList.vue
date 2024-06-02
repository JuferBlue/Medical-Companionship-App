<template>
    <div class="menu-list">
      <div class="menu-item" v-for="item in menuItems" :key="item.text" @click="goTo(item.link)">
        <svg class="iconfont custom-size">
          <use :xlink:href="item.icon"></use>
        </svg>
        <div>
          {{ item.text }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const menuItems = ref([
    { icon: '#icon-icon-youjidizhi-', text: '邮寄地址', link: '/addressList' },
    { icon: '#icon-youhuiquan', text: '卡券兑换', link: '/exchange' },
    { icon: '#icon-bangzhuzhongxin', text: '帮助中心', link: '/help' },
    { icon: '#icon-a-024_lianxikefu', text: '联系客服', link: '/contact' },
    { icon: '#icon-shezhi', text: '设置', link: '/settings' },
  ]);
  
  const goTo = (link) => {
    router.push(link);
  };
  </script>
  
  <style scoped>
  .menu-list {

    padding: 1rem;
    /* background-color: pink; */
    
  }
  .menu-item {
    display: flex;
    align-items: center;
    padding: 10px 10px;
    /* background: orange; */
    background-color: #fff;
    height: 5rem;
    /* 下边框 */
    border-bottom: 1px solid #eee;
    font-size: 1.6rem;
  }
  
  
  .custom-size{
    width: 2rem;
    height: 2rem;
  }
  </style>
  