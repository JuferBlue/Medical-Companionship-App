
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
  
<script>  
import BackHeader from '../../../components/BackHeader.vue';
export default { 
  // 导出组件  
  components: {  
    BackHeader,  
  },
  name: 'exchange',  
  methods: {  
    exchange() {  
      console.log('正在兑换优惠券...');  
      // 假设你有一个API端点来兑换优惠券  
      // fetch('', {  
      //   method: 'POST',  
      //   // ... 其他请求配置  
      // })  
      // .then(response => response.json())  
      // .then(data => {  
      //   // 处理成功响应  
      //   console.log('优惠券兑换成功:', data);  
      // })  
      // .catch(error => {  
      //   // 处理错误  
      //   console.error('优惠券兑换失败:', error);  
      // });  
      // 在这里我们仅模拟成功的情况  
      alert('优惠券已成功兑换！');  
    },  
  },  
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
  width:100%;  
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
   background-color: #6fdfb1;  
   color: white;  
   border: none;  
   border-radius: 15px;  
   cursor: pointer;  
   text-align: center;  
   font-size: 20px;  
   margin-top: 120px; 
}  
  
.exchange:hover {  
    background-color: green; 
}  
</style>