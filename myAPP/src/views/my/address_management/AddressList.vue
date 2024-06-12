<template>  
    <div>
        <BackHeader title="地址管理" />
        
		 <div class="address-management">
			 
		   <div class="recipient" v-if="recipient">
			  <h2 class="name">{{ recipient.name }}
			    <span class="phoneNumber">{{recipient.phoneNumber }}</span>  
			  </h2> 
		      <p>{{recipient.address}}  </p>
		      <button @click="clearrecipientData">删除</button>
		    </div>
			
			<div v-else>
				<!-- <img src="./提示图标.png" alt="提示图标" class="warning-icon"> -->
				<div class="warning">  
		        您还没有添加地址~<br>请点击下方按钮添加地址  
				</div>  
			</div>
			 
		    <router-link to="/addAddress" class="addBtn"> 添加地址 </router-link>      
		       	
		</div>  
		
    </div>  
</template>  
  
<script setup>  
import { ElMessage } from 'element-plus';
import BackHeader from '../../../components/BackHeader.vue';

import { ref, onMounted } from 'vue';

const recipient = ref(null);

onMounted(() => {
  // 从 localStorage 检索就诊人信息
  const recipientData = localStorage.getItem('recipient');
  if (recipientData) {
     recipient.value = JSON.parse(recipientData);
  }
});

// 清除 localStorage 中的信息
function clearrecipientData() {
  localStorage.removeItem('recipient');
  ElMessage.success('删除成功');
  recipient.value = null;
}


</script>  
  
<style scoped>  
.address-management {  
    background-color: #f4f6f8;
	padding: 20px;  
    
}  
  
.warning-icon {  

    margin-top: 60px; 
	width: 100%; 
    height: 180px;   
    margin-bottom: 10px;
}  

.warning {  
    color: grey;  
    padding: 10px;  
    border-radius: 5px;
    margin-bottom: 15px; 
	text-align: center;  
}  
  
.addBtn {  
   display: block;
   width: 100%;  
   padding: 15px;  
   background-color: green;  
   color: white;  
   border: none;  
   border-radius: 4px;  
   cursor: pointer;  
   text-align: center;  
   font-size: 20px;  
   margin-top: 100px; 
}  
  
.addBtn:hover {  
    background-color: green; 
}  

.recipient {
  background: white;
  padding: 10px;
  border-radius: 10px;
}

.recipient p {
  margin-bottom: 5px;
  text-align: left;  
}

.name {  
  font-size: 20px; 
  margin: 0; 
  display: inline-block;
  text-align: left;
}  

.phoneNumber {  
  font-size: 16px; 
  color: gray;
  margin-top: 5px; 
  text-align: left;
}  

.recipient button {
  border: none;
  background: #11aa66;
  color: white;
  padding: 2px 10px;
  cursor: pointer;
  border-radius: 10px;
  margin-left: 80%;
}
</style>