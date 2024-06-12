<template>  
  <div>
    <BackHeader title="优惠券兑换" />
    <div class="exchange-management">  
      <img src="./兑换图标.png" alt="兑换图标" class="icon">
      <div class="input-group">  
        <input type="text" id="voucher-code" v-model="voucherCode" placeholder="请输入兑换码">  
      </div>  
      <p class="warning">温馨提示:<br>1、同一个兑换码每个账号只能兑换一次。<br>2、输入时请使用英文输入法，区分大小写字母</p>
      <button class="exchange" @click="exchange">立即兑换</button> 
    </div>
  </div>  
</template>  
  
<script setup>
import { ElMessage } from 'element-plus';
import { ref } from 'vue';
import BackHeader from '../../../components/BackHeader.vue';

const voucherCode = ref('');

const exchange = () => {
  if (!voucherCode.value) {
    alert('请输入兑换码！');
    return;
  }

  const coupons = JSON.parse(localStorage.getItem('coupons')) || [];
  const existingCoupon = coupons.find(coupon => coupon.code === voucherCode.value);

  if (existingCoupon) {
    alert('该兑换码已被使用！');
    return;
  }

  const newCoupon = {
    id: Date.now(),
    name: '10元优惠券',
    discount: 10,
    expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30天后到期
    code: voucherCode.value,
  };

  coupons.push(newCoupon);
  localStorage.setItem('coupons', JSON.stringify(coupons));
  // alert('优惠券已成功兑换！');
  ElMessage({
    message: '优惠券已成功兑换！',
    type: 'success',
  });
  voucherCode.value = '';
};
</script>  

<style scoped>  
.exchange-management {  
  background-color: #f4f6f8;
  padding: 20px;  
  text-align: center;  
}  

.icon {  
  width: 100%; 
  height: 140px;   
  margin-bottom: 10px;
}  

.input-group input {  
  width: 100%;  
  padding: 10px;  
  border: 1px solid #ccc;  
  border-radius: 15px;  
  box-sizing: border-box;  
  font-size: 16px;
  margin-top: 10px;
}  

.warning {  
  color: grey;  
  padding: 10px;  
  border-radius: 5px;
  margin-top: 15px;
  margin-bottom: 15px; 
  text-align: left; 
}  

.exchange {  
  display: block;
  width: 100%;  
  padding: 15px;  
  background-color: #28a745;  
  color: white;  
  border: none;  
  border-radius: 15px;  
  cursor: pointer;  
  text-align: center;  
  font-size: 20px;  
  margin-top: 120px; 
}  

.exchange:hover {  
  background-color: #28a745; 
}  
</style>
