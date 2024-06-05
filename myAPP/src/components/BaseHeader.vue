<!-- <script setup>


</script>

<template>
    <div class="header">
        我是头部
        <div class="header-left">
            <button @click="goBack" class="back-button">
                
            </button>
        </div>
        <h1 class="header-title" v-text="pageTitle"></h1>
    </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f9fa; 
  padding: 16px;
  box-sizing: border-box;
}

.header-left {
  display: flex;
}

.back-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #6c757d; 
}

.header-title {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #343a40; 
}
</style>
 -->

 <template>  
  <button class="back-to-home-button" @click="$router.push({ name: 'index' })">  
    <span>返回首页</span>   
    <i class="fas fa-home"></i>  
  </button>  
</template>

<style scoped>  
.back-to-home-button {  
  width: 100%;
  display: flex;  
  align-items: center;  
  justify-content: center; 
  background-color: #4CAF50;
  color: white;  
  border: none;  
  border-radius: 5px;  
  padding: 10px 10px; 
  cursor: pointer;  
  transition: background-color 0.3s ease;   
  font-size: 10px;  
  text-decoration: none; 
  position: relative;  
 
}  
  
.back-to-home-button span {  
  margin-left: 5px; 
}  
  
.back-to-home-button:hover {  
  background-color: #45a049;  
}  
  
</style>