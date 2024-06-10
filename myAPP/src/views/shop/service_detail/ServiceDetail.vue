<template>
  <div>
    <BackHeader title="服务详情" class="fixed-header" />
    <div class="container">
      <div class="service-detail">
        <p class="service-title">{{ serviceTitle }}</p>
        <p class="service-price">￥{{ servicePrice }}</p>
        <p class="service-description">{{ serviceDescription }}</p>
        <img :src="serviceImage" alt="服务图片" class="service-image" />
      </div>
      <!-- 传递 serviceId, serviceTitle, servicePrice 到 WorkersList 组件 -->
      <WorkersList :serviceId="serviceId" :serviceTitle="serviceTitle" :servicePrice="servicePrice" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BackHeader from '../../../components/BackHeader.vue';
import WorkersList from './WorkersList.vue'
import { useRoute } from 'vue-router';

// 导入图片
import service_01 from '../service_img/service_01.png';
import service_02 from '../service_img/service_02.png';
import service_03 from '../service_img/service_03.png';
import service_04 from '../service_img/service_04.png';
import service_05 from '../service_img/service_05.png';
import service_06 from '../service_img/service_06.png';
import service_07 from '../service_img/service_07.png';
import service_08 from '../service_img/service_08.png';

// 创建一个对象，将图片映射到对应的 serviceId
const imgs = {
  1: service_01,
  2: service_02,
  3: service_03,
  4: service_04,
  5: service_05,
  6: service_06,
  7: service_07,
  8: service_08,
};

const route = useRoute();
const serviceId = parseInt(route.query.id); // 确保 serviceId 是一个数字
const serviceTitle = route.query.title;
const serviceDescription = route.query.description;
const servicePrice = parseFloat(route.query.price); // 确保 servicePrice 是一个数字

// 获取对应 serviceId 的图片路径
const serviceImage = imgs[serviceId];

const handleActionClick = () => {
  // 执行预约服务的逻辑
  alert('预约服务');
};
</script>

<style scoped>
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* 确保在其他元素之上 */
}

.container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 60px; /* 确保内容不被固定头部遮挡 */
}

.service-detail {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 20px;
}

.service-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333333;
}

.service-price {
  font-size: 20px;
  font-weight: bold;
  color: #ff5722;
  margin-bottom: 10px;
}

.service-description {
  font-size: 16px;
  color: #666666;
  margin-bottom: 20px;
}

.service-image {
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
}

.action-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.action-button:hover {
  background-color: #218838;
}
</style>
