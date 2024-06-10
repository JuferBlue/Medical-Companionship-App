<template>
    <div class="finished-orders">
      <h2>待评价订单</h2>
      <div v-if="orders.length === 0" class="no-orders">
        <p>暂无待评价订单</p>
      </div>
      <div v-else>
        <div v-for="(order, index) in orders" :key="index" class="order-item">
          <p>陪诊人员: {{ order.workerName }}</p>
          <p>服务标题: {{ order.serviceTitle }}</p>
          <p>服务价格: ￥{{ order.servicePrice }}</p>
          <p>预约时间: {{ order.appointmentDate }}</p>
          <p>医院: {{ order.hospital }}</p>
          <p>完成时间: {{ order.completedTime }}</p>
          <button @click="reviewOrder(index)" class="review-button">评价订单</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const orders = ref([]);
  
  onMounted(() => {
    // 从 localStorage 中获取已完成的订单列表
    const storedOrders = JSON.parse(localStorage.getItem('finishedOrders')) || [];
    // 将订单列表赋值给 orders
    orders.value = storedOrders;
  });
  
  const reviewOrder = (index) => {
    // 执行评价订单的逻辑
    alert(`评价订单: ${orders.value[index].serviceTitle}`);
    // 移除已评价的订单
    orders.value.splice(index, 1);
    // 更新 localStorage 中的 finishedOrders 列表
    localStorage.setItem('finishedOrders', JSON.stringify(orders.value));
  };
  </script>
  
  <style scoped>
  .finished-orders {
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: auto;
  }
  
  h2 {
    text-align: center;
    color: #333;
  }
  
  .no-orders {
    text-align: center;
    color: #888;
    font-size: 1.2rem;
    margin-top: 2rem;
  }
  
  .order-item {
    background-color: #fff;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }
  
  .order-item p {
    margin: 0.5rem 0;
    color: #555;
  }
  
  .review-button {
    align-self: flex-end;
    background-color: #ffc107;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s;
    margin-top: 0.5rem;
  }
  
  .review-button:hover {
    background-color: #e0a800;
  }
  </style>
  