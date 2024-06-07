<template>  
    <div>
        <BackHeader title="地址管理" />
        <div class="address-management">  
            <div class="warning">  
                您还没有添加地址~<br>请点击下方按钮添加地址  
            </div>  
            <router-link to="/addAddress"  class="addBtn">  
                添加地址  
            </router-link>  
        </div>
    </div>  
</template>  
  
<script setup>  
// 这里是组件的逻辑部分，目前为空
import BackHeader from '../../../components/BackHeader.vue';
</script>  
  
<style scoped>  
.address-management {  
    background-color: #f4f6f8;
	padding: 20px;  
    text-align: center;  
}  
  
.warning-icon {  

    margin-top: 100px; 
	width: 100%; 
    height: 200px;   
    margin-bottom: 10px;
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