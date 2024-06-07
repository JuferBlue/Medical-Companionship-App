<template>  
    <div>
        <BackHeader title="就诊人管理" />
        <div class="patient-management">
            <div class="warning">  
                您还没有添加就诊人~<br>请点击下方按钮添加就诊人  
            </div>  
            <router-link to="/addPatient" class="addBtn">  
                添加就诊人  
            </router-link>  
        </div>  
    </div>
</template>  
  
<script setup>  
// 这里是组件的逻辑部分，目前为空  
import BackHeader from '../../../components/BackHeader.vue';
</script>  
  
<style scoped>  
.patient-management {  
    background-color: #f4f6f8;
	padding: 20px;  
    text-align: center;  
}  
  


.warning {  
    color: grey;  
    padding: 10px;  
    border-radius: 5px;
    margin-bottom: 15px; 
}  
  
.addBtn {  
   display: block;
   width: 100%;  
   padding: 15px;  
   background-color: #6fdfb1;  
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
</style>