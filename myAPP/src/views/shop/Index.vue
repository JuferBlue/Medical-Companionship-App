<template>
    <div class="msg">
        <div class="header">服务列表</div>
        <div class="search-bar">
            <input v-model="searchQuery" type="text" placeholder="请输入你要找的服务名称" />
            <button @click="search">搜索</button>
        </div>
        <ServiceList/>
    </div>
</template>

<script setup>
import ServiceList from './ServiceList.vue'
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  height: 8rem;
  background-color: #6ac08f;
  padding: 1rem;
}
.search-bar input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px 0 0 20px;
  outline: none;
  
}
.search-bar button {
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-left: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  border-radius: 0 20px 20px 0;
  outline: none;
}



.msg{
    height: 667px;
    background-color: #f0f0f0;
}
.header{
    text-align: center;
    font-size: 1.8rem;
    background-color: #6ac08f;
    height: 5rem;
    width: 100%;
    line-height: 5rem;
}
.search{
    /* 上边框黑线 */
    border-top: 1px solid #000;
    background-color: #6ac08f;
    height: 8rem;
    width: 100%;
}
</style>