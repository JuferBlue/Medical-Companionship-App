<script setup>


</script>

<template>
    <div class="header">
        我是头部
        <!-- <div class="header-left">
            <button @click="goBack" class="back-button">
                
            </button>
        </div>
        <h1 class="header-title" v-text="pageTitle"></h1> -->
    </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f9fa; /* 自定义背景颜色 */
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
  color: #6c757d; /* 自定义字体颜色 */
}

.header-title {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #343a40; /* 自定义字体颜色 */
}
</style>
