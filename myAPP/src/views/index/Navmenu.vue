<template>
    <div class="navmenu">
      <ul>
        <li v-for="(v, i) in navmenulist" :key="i" @click="navigateToDetail(v)">
          <svg class="iconfont">
            <use :xlink:href="v.icon"></use>
          </svg>
          <span>{{ v.title }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const navmenulist = [
    { id: 1, title: '全天陪诊', icon: '#icon-taiyang', description: '全程陪同服务，手续代办服务', price: 500 },
    { id: 2, title: '夜间陪诊', icon: '#icon-zhudaohang-yeshenicon', description: '适用于突发疾病或意外事故', price: 300 },
    { id: 3, title: '半天接送', icon: '#icon-weituojiesong', description: '半天陪诊陪诊+上门接送服务', price: 200 },
    { id: 4, title: '挂号咨询', icon: '#icon-guahao', description: '人工代办预约就诊号咨询服务', price: 100 },
    { id: 5, title: '代办问诊', icon: '#icon-pingtaiyoushi', description: '代客户到医院找医生问诊', price: 150 },
    { id: 6, title: '取送报告', icon: '#icon-tijianbaogao', description: '送/取报告到家服务', price: 80 },
    { id: 7, title: '代办买药', icon: '#icon-zhuye-yaodian', description: '人工排队代买药服务', price: 50 },
    { id: 8, title: '半天陪诊', icon: '#icon-jiancha', description: '全程陪同服务，手续代办服务', price: 250 }
  ];
  
  const navigateToDetail = (service) => {
    router.push({ 
      path: '/serviceDetail', 
      query: { 
        id: service.id, 
        title: service.title, 
        description: service.description,
        price: service.price
      } 
    });
  };
  </script>
  
  <style scoped>
  .navmenu ul {
    display: flex;
    flex-wrap: wrap;
  }
  
  .navmenu ul li {
    flex: 0 1 25%;
    text-align: center;
    margin: 1rem 0;
    cursor: pointer; /* 添加鼠标悬停效果 */
  }
  
  .navmenu ul li span {
    display: block;
  }
  
  .navmenu ul li svg {
    width: 5rem;
    height: 5rem;
  }
  
  .navmenu ul li:hover {
    background-color: #f0f0f0; /* 添加悬停效果 */
    border-radius: 10px; /* 添加圆角 */
  }
  </style>
  