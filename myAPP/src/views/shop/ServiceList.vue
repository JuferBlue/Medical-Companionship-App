<template>
  <div class="container">
    <aside class="sidebar">
      <div class="logo"></div>
      <ul class="nav-list">
        <li :class="{ active: activeTab === '全部服务' }" @click="activeTab = '全部服务'">全部服务</li>
        <li :class="{ active: activeTab === '陪伴服务' }" @click="activeTab = '陪伴服务'">陪伴服务</li>
        <li :class="{ active: activeTab === '跑腿服务' }" @click="activeTab = '跑腿服务'">跑腿服务</li>
      </ul>
    </aside>
    <main class="main-content">
      <header class="header">
        <div>优质服务 | 24小时服务保障</div>
      </header>
      <section class="services">
        <div v-if="activeTab === '全部服务'">
          <div class="service-item" v-for="(service, index) in allServices" :key="index" @click="navigateToDetail(service)">
            <img src="./pic_cha.png" alt="服务图片" />
            <div class="service-info">
              <p class="title">{{ service.title }}</p>
              <p class="description">{{ service.description }}</p>
            </div>
          </div>
        </div>
        <div v-if="activeTab === '陪伴服务'">
          <div class="service-item" v-for="(service, index) in companionServices" :key="index" @click="navigateToDetail(service)">
            <img src="./pic_cha.png" alt="服务图片" />
            <div class="service-info">
              <p class="title">{{ service.title }}</p>
              <p class="description">{{ service.description }}</p>
            </div>
          </div>
        </div>
        <div v-if="activeTab === '跑腿服务'">
          <div class="service-item" v-for="(service, index) in errandServices" :key="index" @click="navigateToDetail(service)">
            <img src="./pic_cha.png" alt="服务图片" />
            <div class="service-info">
              <p class="title">{{ service.title }}</p>
              <p class="description">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const activeTab = ref('全部服务');

const allServices = ref([
  { id: 1, title: '全天陪诊', description: '全程陪同服务，手续代办服务', price: 500 },
  { id: 2, title: '夜间陪诊', description: '适用于突发疾病或意外事故', price: 300 },
  { id: 3, title: '半天接送', description: '半天陪诊陪诊+上门接送服务', price: 200 },
  { id: 4, title: '挂号咨询', description: '人工代办预约就诊号咨询服务', price: 100 },
  { id: 5, title: '代办问诊', description: '代客户到医院找医生问诊', price: 150 },
  { id: 6, title: '送取报告', description: '送/取报告到家服务', price: 80 },
  { id: 7, title: '代办买药', description: '人工排队代买药服务', price: 50 },
  { id: 8, title: '半天陪诊', description: '全程陪同服务，手续代办服务', price: 250 }
]);

const companionServices = ref([
  { id: 1, title: '全天陪诊', description: '全程陪同服务，手续代办服务', price: 500 },
  { id: 2, title: '夜间陪诊', description: '适用于突发疾病或意外事故', price: 300 },
  { id: 3, title: '半天接送', description: '半天陪诊陪诊+上门接送服务', price: 200 },
  { id: 8, title: '半天陪诊', description: '全程陪同服务，手续代办服务', price: 250 }
]);

const errandServices = ref([
  { id: 4, title: '挂号咨询', description: '人工代办预约就诊号咨询服务', price: 100 },
  { id: 5, title: '代办问诊', description: '代客户到医院找医生问诊', price: 150 },
  { id: 6, title: '送取报告', description: '送/取报告到家服务', price: 80 },
  { id: 7, title: '代办买药', description: '人工排队代买药服务', price: 50 },
]);


const navigateToDetail = (service) => {
  router.push({ 
    path: `/serviceDetail`, 
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
.container {
  display: flex;
  font-family: Arial, sans-serif;
}
.sidebar {
  width: 6rem;
  background-color: #f5f5f5;
  padding: 10px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}
.logo {
  font-size: 12px;
  margin-bottom: 10px;
}
.nav-list {
  list-style-type: none;
  padding: 0;
}
.nav-list li {
  margin-bottom: 10px;
  cursor: pointer;
}
.nav-list li.active {
  font-weight: bold;
  /* background-color: #ececec; */
}
.main-content {
  margin: 1rem;
  margin-top: 0;
  background-color: #ffffff;
  flex: 1;
  padding: 5px;
  border-radius: 1rem;
  /* 高度300px;溢出有右侧滑动条*/
  height: 477px;
  overflow-y: scroll;
}
.header {
  background-color: #f2fff8;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  /* 字体颜色灰色 */
  color: #746c6c;
}
.services {
  display: flex;
  flex-direction: column;
}
.service-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  /* 灰色下边框 */
  border-bottom: 1px solid #e0e0e0;
}
.service-item .title{
  font-weight: 900;
  font-size: 16px;
}
.service-item .description{
  color: #a99292;
  font-size: 14px;
}
.service-item img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
</style>
