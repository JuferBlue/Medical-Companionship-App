<template>  
	  <div>
      <BackHeader title="我的优惠券" />
      <div>
          <h3 class="title">&nbsp;可用优惠券</h3>
      </div>
      
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
      
      <div  class="coupon-right">
        <p class="discount"> 9折 </p>
        <button class="coupon-btn" @click="redeemCoupon">去使用</button>  
      </div>
    </div>
</template>  

<script>  
import BackHeader from '../../../components/BackHeader.vue';
export default {  
// 导出组件
components: {  
  BackHeader,  
},
name: 'CouponComponent',  
methods: {  
  redeemCoupon() {  
    // 假设这里调用API进行优惠券的兑换  
    console.log('正在兑换优惠券...');  
    // 模拟API调用成功  
    alert('优惠券已成功兑换！');  
    // 实际开发中，你需要处理API的响应并更新UI或状态  
  },  
  showRules() {  
    alert('使用规则\n全品类通用');  
  }  
},  
};  
</script>  

<style scoped>  
.title{
margin-top: 15px;
font-size: 24px;
margin-bottom: 15px;
}

.coupon-left {  
display: flex;  
flex-direction: column;  
align-items: center;  
justify-content: space-between;  
padding: 20px;  
background-color: #fff;  
border: 1px solid #ccc;  
border-radius: 10px;  
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  
width: 70%;
height: 100px; 
position: absolute;
}   

.coupon-info {  
position: absolute; 
bottom: 20px;
left: 0;  
right: 0;  
padding: 0 20px; 
text-align:left;  
}  

.coupon-title {  
font-size: 20px; 
margin: 0; 
display: inline-block;
}  

.coupon-subtitle {  
font-size: 16px; 
color: gray;
margin-top: 5px; 
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
  justify-content: space-between;  
  padding: 20px;  
  background-color: #fff;  
  border: 1px solid #ccc;  
  border-radius: 10px;  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  
  width: 30%;
  height: 100px; 
  position: absolute;
  margin-left: 70%;
}  

.discount{
  font-size: 24px; 
  color: #ff0000;
}

.coupon-btn {  
display: block; 
padding: 2px 5px; 
background-color: #ffd497; 
color: #aa5205; 
border: none; 
border-radius: 10px;
cursor: pointer; 
position:relative;
margin-top: 5px;
}  
</style>