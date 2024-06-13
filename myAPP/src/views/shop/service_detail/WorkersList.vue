<template>
  <div class="workers-list">
    <h2>陪诊人员</h2>
    <div class="worker-item" v-for="worker in workersGroup" :key="worker.id">
      <img :src="worker.photo" alt="照片" class="worker-photo" />
      <div class="worker-info">
        <h3>{{ worker.name }}</h3>
        <p>性别: {{ worker.gender }}</p>
        <p>年龄: {{ worker.age }}岁</p>
        <p>评分: {{ worker.rating }} / 5</p>
        <p>接单次数: {{ worker.orders }}</p>
        <div class="button-container">
          <button class="view-reviews-button" @click="viewWorkerDetail(worker)">查看评价</button>
          <button class="select-button" @click="selectWorker(worker)">选择陪诊人员</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import pic_head from './pic_head.jpg';
import img_02 from './img_02.png';
import img_03 from './img_03.png';
import img_04 from './img_04.png'
import { defineProps } from 'vue';

const props = defineProps({
  serviceId: Number,
  serviceTitle: String,
  servicePrice: Number
});

// 定义八组陪诊人员数据
const allWorkers = {
  1: [
    { id: 1, name: '张三', gender: '男', age: 30, photo: pic_head, rating: 4.5, orders: 120 },
    { id: 2, name: '李四', gender: '女', age: 28, photo: img_02, rating: 4.8, orders: 150 }
  ],
  2: [
    { id: 3, name: '王五', gender: '男', age: 35, photo: img_03, rating: 4.6, orders: 110 },
    { id: 4, name: '赵六', gender: '女', age: 32, photo: img_04, rating: 4.7, orders: 140 }
  ],
  3: [
    { id: 5, name: '孙七', gender: '男', age: 40, photo: pic_head, rating: 4.8, orders: 130 },
    { id: 6, name: '周八', gender: '女', age: 38, photo: pic_head, rating: 4.9, orders: 160 }
  ],
  4: [
    { id: 7, name: '吴九', gender: '男', age: 29, photo: img_03, rating: 4.5, orders: 100 },
    { id: 8, name: '郑十', gender: '女', age: 27, photo: img_04, rating: 4.8, orders: 170 }
  ],
  5: [
    { id: 9, name: '刘一', gender: '男', age: 31, photo: pic_head, rating: 4.7, orders: 125 },
    { id: 10, name: '黄二', gender: '女', age: 33, photo: pic_head, rating: 4.6, orders: 135 }
  ],
  6: [
    { id: 11, name: '杨三', gender: '男', age: 36, photo: pic_head, rating: 4.8, orders: 145 },
    { id: 12, name: '何四', gender: '女', age: 34, photo: pic_head, rating: 4.7, orders: 155 }
  ],
  7: [
    { id: 13, name: '钱五', gender: '男', age: 37, photo: pic_head, rating: 4.9, orders: 165 },
    { id: 14, name: '江六', gender: '女', age: 39, photo: pic_head, rating: 4.8, orders: 175 }
  ],
  8: [
    { id: 15, name: '朱七', gender: '男', age: 40, photo: pic_head, rating: 4.9, orders: 185 },
    { id: 16, name: '吴八', gender: '女', age: 41, photo: pic_head, rating: 4.8, orders: 195 }
  ],
};

// 根据 serviceId 获取对应的陪诊人员组
const workersGroup = computed(() => allWorkers[props.serviceId] || []);

const router = useRouter();

const selectWorker = (worker) => {
  // 跳转到填写服务信息页面，并传递陪诊人员和服务信息
  router.push({
    path: '/service-form',
    query: {
      workerName: worker.name,
      serviceTitle: props.serviceTitle,
      servicePrice: props.servicePrice
    }
  });
};

const viewWorkerDetail = (worker) => {
  // 跳转到陪诊人员详情页面，并传递陪诊人员信息
  router.push({
    path: '/worker-detail',
    query: {
      workerId: worker.id,
      workerName: worker.name,
      workerGender: worker.gender,
      workerAge: worker.age,
      workerPhoto: worker.photo,
      workerRating: worker.rating,
      workerOrders: worker.orders,
      serviceTitle: props.serviceTitle,
      servicePrice: props.servicePrice,
      serviceId: props.serviceId
    }
  });
};
</script>

<style scoped>
.workers-list {
  margin-top: 20px;
}

.worker-item {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  position: relative;
}

.worker-photo {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 10px;
}

.worker-info {
  flex: 1;
}

.worker-info h3 {
  margin: 0;
  font-size: 20px;
  color: #333;
}

.worker-info p {
  margin: 5px 0;
  color: #666;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.select-button,
.view-reviews-button {
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  width: auto;
}

.select-button {
  background-color: #28a745;
  color: white;
}

.select-button:hover {
  background-color: #218838;
}

.view-reviews-button {
  background-color: #007bff;
  color: white;
}

.view-reviews-button:hover {
  background-color: #0056b3;
}
</style>
