<template>
  <div class="header">
    <div>
      <el-avatar :size="20" :src="circleUrl" />
    </div>
    <div class="account-text">
      <span>目前尚未登录</span>
    </div>
    <div>
      <button class="login-button" @click="handleLogin">登录</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png');
//登录按钮路由跳转
const router = useRouter();

// 登录按钮路由跳转
const handleLogin = () => {
  router.push('/login');
};


</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
}

.account-text {
  margin-left: 10px;
  font-size: 16px;
}

.login-button {
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #0056b3;
}
</style>
