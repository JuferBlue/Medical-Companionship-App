<template>  
    <div>
		<BackHeader title="就诊人管理" />
		
         <div class="patient-management">
           <div class="patient" v-if="patient">
			  <h2 class="name">{{ patient.name }}
			    <span class="gender">{{ patient.gender }}</span>  
			  </h2> 
              <p>{{encryptedIdNumber()}}  </p>
              <button @click="clearPatientData">删除</button>
            </div>
			
			<div v-else>
				<img src="./提示图标.png" alt="提示图标" class="warning-icon">
				<div class="warning">  
                您还没有添加就诊人~<br>请点击下方按钮添加就诊人  
				</div>  
			</div>
			 
            <router-link to="/addPatient" class="addBtn"> 添加就诊人 </router-link>      
               	
        </div>  
		
    </div>
	
</template>  
  
<script setup>  
import { ElMessage } from 'element-plus';
import BackHeader from '../../../components/BackHeader.vue';

import { ref, onMounted } from 'vue';

const patient = ref(null);

onMounted(() => {
  // 从 localStorage 检索就诊人信息
  const patientData = localStorage.getItem('patient');
  if (patientData) {
    patient.value = JSON.parse(patientData);
  }
});

// 清除 localStorage 中的 patient 信息
function clearPatientData() {
  localStorage.removeItem('patient');
  ElMessage.success('就诊人信息已删除');
  patient.value = null;
}

// 加密身份证号码，只显示前6位和后4位
function encryptedIdNumber() {
  return patient.value?.idNumber ? patient.value.idNumber.slice(0, 6) + '******' + patient.value.idNumber.slice(-4) : '';
};

</script>  
  
<style scoped>  
.patient-management {  
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
    background-color: #6fdfb1; 
    
}  

.patient {
  background: white;
  padding: 10px;
  border-radius: 10px;
}

.patient p {
  margin-bottom: 5px;
  text-align: left;  
}

.name {  
  font-size: 20px; 
  margin: 0; 
  display: inline-block;
  text-align: left;
}  

.gender {  
  font-size: 16px; 
  color: gray;
  margin-top: 5px; 
  text-align: left;
}  

.patient button {
  border: none;
  background: #11aa66;
  color: white;
  padding: 2px 10px;
  cursor: pointer;
  margin-left: 80%;
  border-radius: 10px;
}

</style>