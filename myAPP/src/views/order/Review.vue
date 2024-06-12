<template>
    <div>
        <BackHeader title="评价订单" />
        <div class="order-review">
            <div class="order-details">
                <p>陪诊人员: {{ order.workerName }}</p>
                <p>服务标题: {{ order.serviceTitle }}</p>
                <p>服务价格: ￥{{ order.servicePrice }}</p>
                <p>预约时间: {{ order.appointmentDate }}</p>
                <p>医院: {{ order.hospital }}</p>
                <p>完成时间: {{ order.completedTime }}</p>
            </div>
            <div class="review-form">
                <label for="rating">评分:</label>
                <input v-model="rating" type="number" id="rating" min="1" max="5" />
                <label for="comment">评论:</label>
                <textarea v-model="comment" id="comment"></textarea>
                <button @click="submitReview">提交评价</button>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ElMessage } from 'element-plus';
  import BackHeader from '../../components/BackHeader.vue';


  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  const order = route.query;
  
  const rating = ref(0);
  const comment = ref('');
  
  const submitReview = () => {
    // 执行评价提交的逻辑
    const reviewedOrder = { ...order, rating: rating.value, comment: comment.value };
    console.log('评价提交:', reviewedOrder);
  
    // 从 finishedOrders 中移除订单
    const finishedOrders = JSON.parse(localStorage.getItem('finishedOrders')) || [];
    const updatedFinishedOrders = finishedOrders.filter(o => o.workerName !== order.workerName || o.appointmentDate !== order.appointmentDate);
    localStorage.setItem('finishedOrders', JSON.stringify(updatedFinishedOrders));
  
    // 将评价后的订单存入 reviewedOrders
    const reviewedOrders = JSON.parse(localStorage.getItem('reviewedOrders')) || [];
    reviewedOrders.push(reviewedOrder);
    localStorage.setItem('reviewedOrders', JSON.stringify(reviewedOrders));
  
    // 将评价信息存储到 localStorage 中
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    const workerReviews = reviews[reviewedOrder.workerName] || [];
    workerReviews.push({
      rating: reviewedOrder.rating,
      comment: reviewedOrder.comment,
      serviceTitle: reviewedOrder.serviceTitle,
      servicePrice: reviewedOrder.servicePrice,
      appointmentDate: reviewedOrder.appointmentDate,
      hospital: reviewedOrder.hospital,
      completedTime: reviewedOrder.completedTime,
    });
    reviews[reviewedOrder.workerName] = workerReviews;
    localStorage.setItem('reviews', JSON.stringify(reviews));
    ElMessage.success('评价成功！');
    // 跳转回待评价订单页面或其他页面
    router.push({ name: 'AllOrders' });
  };
  </script>
  
  <style scoped>
  .order-review {
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
  
  .order-details {
    margin-bottom: 1rem;
  }
  
  .order-details p {
    margin: 0.5rem 0;
    color: #555;
  }
  
  .review-form {
    display: flex;
    flex-direction: column;
  }
  
  .review-form label {
    margin: 0.5rem 0;
    color: #333;
  }
  
  .review-form input,
  .review-form textarea {
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-bottom: 1rem;
  }
  
  .review-form button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s;
  }
  
  .review-form button:hover {
    background-color: #218838;
  }
  </style>
  