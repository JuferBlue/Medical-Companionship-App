<template>
    <div>
      <BackHeader title="陪诊人员详情" class="fixed-header" />
      <div class="container">
        <div class="worker-detail">
          <img :src="workerPhoto" alt="陪诊人员照片" class="worker-photo" />
          <div class="worker-info">
            <h2>{{ workerName }}</h2>
            <p>性别: {{ workerGender }}</p>
            <p>年龄: {{ workerAge }}岁</p>
            <p>评分: {{ workerRating }} / 5</p>
            <p>接单次数: {{ workerOrders }}</p>
          </div>
          <div class="reviews" v-if="reviews.length">
            <h3>评价</h3>
            <div v-for="(review, index) in reviews" :key="index" class="review-item">
              <div class="review-header">
                <p class="review-rating">评分: {{ review.rating }} / 5</p>
                <p class="review-date">{{ review.date }}</p>
              </div>
              <p class="review-comment">评论: {{ review.comment }}</p>
            </div>
          </div>
          <div v-else>
            <p>暂无评价</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import BackHeader from '../../../components/BackHeader.vue';
  
  const route = useRoute();
  const workerId = route.query.workerId;
  const workerName = route.query.workerName;
  const workerGender = route.query.workerGender;
  const workerAge = route.query.workerAge;
  const workerPhoto = route.query.workerPhoto;
  const workerRating = route.query.workerRating;
  const workerOrders = route.query.workerOrders;
  
  const reviews = ref([]);
  
  // 获取该 worker 的评价信息
  onMounted(() => {
    const allReviews = JSON.parse(localStorage.getItem('reviews')) || {};
    reviews.value = Array.isArray(allReviews[workerName]) ? allReviews[workerName] : [];
  });
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
  
  .worker-detail {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .worker-photo {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  
  .worker-info {
    text-align: left;
  }
  
  .reviews {
    margin-top: 20px;
    text-align: left;
  }
  
  .review-item {
    background-color: #f0f0f0;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .review-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .review-rating {
    font-weight: bold;
    color: #ff9800;
  }
  
  .review-date {
    font-size: 0.9rem;
    color: #999;
  }
  
  .review-comment {
    font-size: 1.5rem;
    color: #333;
  }
  </style>
  