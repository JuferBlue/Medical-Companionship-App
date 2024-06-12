<template>
  <div class="member-services">
    <router-link to="/patientList" tag="div" class="service">
      <div class="icon-container">
        <svg class="iconfont custom-size">
          <use xlink:href="#icon-jiuzhenrenguanli"></use>
        </svg>
      </div>
      <div class="member-content">
        <h3>就诊人管理</h3>
      </div>
    </router-link>
    <router-link to="/couponList" tag="div" class="service">
      <div class="icon-container">
        <svg class="iconfont custom-size">
          <use xlink:href="#icon-youhuiquan"></use>
        </svg>
      </div>
      <div class="member-content">
        <h3>优惠券</h3>
        <p>{{ couponCount }}张未使用</p>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const patientCount = ref(0);
const couponCount = ref(0);

onMounted(() => {
  const patients = JSON.parse(localStorage.getItem('patients')) || [];
  patientCount.value = patients.length;

  const coupons = JSON.parse(localStorage.getItem('coupons')) || [];
  couponCount.value = coupons.length;
});
</script>

<style scoped>
.member-services {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #fff;
  margin: 1rem;
  border-radius: 1rem;
}
.service {
  display: flex;
  align-items: center;
}
.service .icon-container {
  display: flex;
  align-items: center;
}
.service .custom-size {
  width: 6rem;
  height: 6rem;
}
.service .member-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem; /* 调整间距 */
}
.service .member-content h3 {
  margin-top: 1rem; /* 调整标题的上边距 */
}
.service p {
  margin: 5px 0;
}
</style>
