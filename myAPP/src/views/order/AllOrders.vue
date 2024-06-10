<template>
  <div class="all-orders">
    <h2>全部订单</h2>
    <div v-if="allOrders.length === 0" class="no-orders">
      <p>暂无订单</p>
    </div>
    <div v-else>
      <div v-for="(order, index) in allOrders" :key="index" :class="['order-item', order.status]">
        <p>陪诊人员: {{ order.workerName }}</p>
        <p>服务标题: {{ order.serviceTitle }}</p>
        <p>服务价格: ￥{{ order.servicePrice }}</p>
        <p>预约时间: {{ order.appointmentDate }}</p>
        <p>医院: {{ order.hospital }}</p>
        <p v-if="order.completedTime">完成时间: {{ order.completedTime }}</p>
        <p v-if="order.status === 'unpaid'" class="status">状态: 未支付</p>
        <p v-if="order.status === 'process'" class="status">状态: 进行中</p>
        <p v-if="order.status === 'finished'" class="status">状态: 已完成</p>
        <p v-if="order.status === 'reviewed'" class="status">状态: 已评价</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const allOrders = ref([]);

onMounted(() => {
  const unpaidOrders = JSON.parse(sessionStorage.getItem('unpaidOrders')) || [];
  const processOrders = JSON.parse(localStorage.getItem('processOrders')) || [];
  const finishedOrders = JSON.parse(localStorage.getItem('finishedOrders')) || [];
  const reviewedOrders = JSON.parse(localStorage.getItem('reviewedOrders')) || [];
  
  // 为每种订单添加状态
  const unpaidOrdersWithStatus = unpaidOrders.map(order => ({ ...order, status: 'unpaid' }));
  const processOrdersWithStatus = processOrders.map(order => ({ ...order, status: 'process' }));
  const finishedOrdersWithStatus = finishedOrders.map(order => ({ ...order, status: 'finished' }));
  const reviewedOrdersWithStatus = reviewedOrders.map(order => ({ ...order, status: 'reviewed' }));

  // 合并所有订单
  allOrders.value = [...unpaidOrdersWithStatus, ...processOrdersWithStatus, ...finishedOrdersWithStatus, ...reviewedOrdersWithStatus];
});
</script>

<style scoped>
.all-orders {
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

.status {
  font-weight: bold;
}

.unpaid {
  background-color: #f8d7da;
  border-left: 5px solid #f5c6cb;
}

.process {
  background-color: #fff3cd;
  border-left: 5px solid #ffeeba;
}

.finished {
  background-color: #d4edda;
  border-left: 5px solid #c3e6cb;
}

.reviewed {
  background-color: #d1ecf1;
  border-left: 5px solid #bee5eb;
}
</style>
