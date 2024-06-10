<template>
    <div>
      <BackHeader title="订单详情" />
      <div class="service-form">
        <h2>服务信息</h2>
        <div class="form-group">
          <label for="workerName">陪诊人员</label>
          <input type="text" id="workerName" v-model="workerName" readonly />
        </div>
        <div class="form-group">
          <label for="serviceTitle">服务标题</label>
          <input type="text" id="serviceTitle" v-model="serviceTitle" readonly />
        </div>
        <div class="form-group">
          <label for="servicePrice">服务价格</label>
          <input type="text" id="servicePrice" v-model="servicePrice" readonly />
        </div>
        <div class="form-group">
          <label for="appointmentDate">选择时间</label>
          <input type="datetime-local" id="appointmentDate" v-model="appointmentDate" />
        </div>
        <div class="form-group">
          <label for="hospital">选择医院</label>
          <select id="hospital" v-model="hospital">
            <option v-for="hospital in hospitals" :key="hospital" :value="hospital">
              {{ hospital }}
            </option>
          </select>
        </div>
        <button class="submit-button" @click="submitForm">添加订单</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import BackHeader from '../../../components/BackHeader.vue';
  
  const route = useRoute();
  const router = useRouter();
  
  const workerName = ref(route.query.workerName || '');
  const serviceTitle = ref(route.query.serviceTitle || '');
  const servicePrice = ref(route.query.servicePrice || '');
  const appointmentDate = ref('');
  const hospital = ref('');
  
  // 假设有一些医院的列表
  const hospitals = ref([
    '南昌市第一医院',
    '南昌市第二医院',
    '南昌市第三医院',
    '南昌市第四医院',
    '南昌市第五医院'
  ]);
  
  const submitForm = () => {
    // 提交订单的逻辑
    const orderDetails = {
      workerName: workerName.value,
      serviceTitle: serviceTitle.value,
      servicePrice: servicePrice.value,
      appointmentDate: appointmentDate.value,
      hospital: hospital.value
    };
  
    // 获取当前存储的订单列表
    const existingOrders = JSON.parse(sessionStorage.getItem('unpaidOrders')) || [];
    existingOrders.push(orderDetails);
  
    // 将更新后的订单列表存储到 sessionStorage
    sessionStorage.setItem('unpaidOrders', JSON.stringify(existingOrders));
  
    // 提示订单添加成功并跳转到订单页面
    alert('订单已添加');
    router.push('/order'); // 跳转到订单页面
  };
  </script>
  
  <style scoped>
  .service-form {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    max-width: 500px;
    margin: 20px auto;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="datetime-local"],
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .submit-button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    font-size: 16px;
  }
  
  .submit-button:hover {
    background-color: #218838;
  }
  </style>
  