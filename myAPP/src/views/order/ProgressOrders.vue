<template>
    <div class="progress-orders">
      <h2>进行中的订单</h2>
      <div v-if="orders.length === 0" class="no-orders">
        <p>暂无进行中的订单</p>
      </div>
      <div v-else>
        <div v-for="(order, index) in orders" :key="index" class="order-item">
          <p>陪诊人员: {{ order.workerName }}</p>
          <p>服务标题: {{ order.serviceTitle }}</p>
          <p>服务价格: ￥{{ order.servicePrice }}</p>
          <p>预约时间: {{ order.appointmentDate }}</p>
          <p>医院: {{ order.hospital }}</p>
          <button @click="completeOrder(index)" class="complete-button">完成订单</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const orders = ref([]);
  
  onMounted(() => {
    // 从 localStorage 中获取进行中的订单列表
    const storedOrders = JSON.parse(localStorage.getItem('processOrders')) || [];
    // 将订单列表赋值给 orders
    orders.value = storedOrders;
  });
  
  const completeOrder = (index) => {
    const completedOrder = { ...orders.value[index] };
    completedOrder.completedTime = new Date().toLocaleString(); // 记录完成时间
    // 移除已完成的订单
    orders.value.splice(index, 1);
    // 更新 localStorage 中的 processOrders 列表
    localStorage.setItem('processOrders', JSON.stringify(orders.value));
    // 将已完成的订单存入 localStorage 中的 finishedOrders 列表
    const finishedOrders = JSON.parse(localStorage.getItem('finishedOrders')) || [];
    finishedOrders.push(completedOrder);
    localStorage.setItem('finishedOrders', JSON.stringify(finishedOrders));
  };
  </script>
  
  <style scoped>
  .progress-orders {
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
  
  .complete-button {
    align-self: flex-end;
    background-color: #28a745;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s;
    margin-top: 0.5rem;
  }
  
  .complete-button:hover {
    background-color: #218838;
  }
  </style>
  