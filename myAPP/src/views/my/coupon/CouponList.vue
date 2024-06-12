<template>  
  <div>
    <BackHeader title="我的优惠券" />
    <div>
      <h3 class="title">&nbsp;可用优惠券</h3>
    </div>
    <div v-for="(coupon, index) in coupons" :key="index" class="coupon-container">
      <div class="coupon-left">  
        <div class="coupon-info">  
          <h2 class="coupon-title">陪诊健康券 
            <span class="coupon-subtitle">限时特惠</span>  
          </h2> 
          <p class="coupon-detail">  
            <span class="coupon-detail-value">长期有效&nbsp;&nbsp;</span>
            <button class="coupon-detail-link" @click="showRules">规则 ></button>  
          </p>  
        </div> 
      </div>
      <div class="coupon-right">
        <p class="discount">优惠{{ coupon.discount }}元</p>
        <button class="coupon-btn" @click="redeemCoupon(coupon)">去使用</button>  
      </div>
    </div>
  </div>
</template>  

<script setup>  
import { ref, onMounted } from 'vue';
import BackHeader from '../../../components/BackHeader.vue';

const coupons = ref([]);

onMounted(() => {
  const storedCoupons = JSON.parse(localStorage.getItem('coupons')) || [];
  coupons.value = storedCoupons;
});

const redeemCoupon = (coupon) => {
  alert(`优惠券 ${coupon.code} 已成功兑换！`);
  // 这里可以添加逻辑，例如调用API，或者更新优惠券状态
};

const showRules = () => {
  alert('使用规则\n全品类通用');
};
</script>  

<style scoped>  
.title {
  margin-top: 15px;
  font-size: 24px;
  margin-bottom: 15px;
}

.coupon-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.coupon-left {  
  display: flex;  
  flex-direction: column;  
  justify-content: space-between;  
  width: 70%;
}   

.coupon-info {  
  text-align: left;  
}  

.coupon-title {  
  font-size: 18px; 
  margin: 0; 
  display: inline-block;
}  

.coupon-subtitle {  
  font-size: 14px; 
  color: gray;
  margin-left: 10px; 
}  

.coupon-detail {  
  margin-top: 10px; 
  color: #ffa500;
} 

.coupon-detail-link {  
  color: gray; 
  text-decoration: none;
  border: none; 
  background-color: transparent; 
} 

.coupon-right {
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  justify-content: center;  
  width: 30%;
}  

.discount {
  font-size: 24px; 
  color: #ff0000;
}

.coupon-btn {  
  display: block; 
  padding: 8px 12px; 
  background-color: #ffd497; 
  color: #aa5205; 
  border: none; 
  border-radius: 5px;
  cursor: pointer; 
  margin-top: 10px;
}  

.coupon-btn:hover {  
  background-color: #ffb84d; 
}  
</style>
