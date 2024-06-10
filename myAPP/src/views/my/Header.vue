<template>
  <div class="header">
    <div v-if="!loggedIn">
      <el-avatar :size="20" :src="circleUrl" />
    </div>
    <div class="account-text" v-if="!loggedIn">
      <span>目前尚未登录</span>
    </div>
    <div v-if="!loggedIn">
      <button class="login-button" @click="handleLogin">登录</button>
    </div>
    
    <div class="user-profile" v-if="loggedIn">
         <div  class="welcome-message">
          欢迎，用户{{ username }}！
         <button @click="logout" class="button-logout">退出登录</button>
        </div>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const loggedIn = ref(false);
const username = ref('');

const circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png');

const router = useRouter();

// 登录按钮路由跳转
const handleLogin = () => {
  router.push('/login');
};

const logout = () => {
  loggedIn.value = false;
  localStorage.removeItem('loggedIn');
  //router.push('/');
};

onMounted(() => {
  
  if (localStorage.getItem('loggedIn') === 'true') {
    const userData = JSON.parse(localStorage.getItem('userData'));
    username.value = userData.username;
    loggedIn.value = true;
  }
});


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
.button-logout{
  background-color: #09b9679d;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 100px;
}
.write{
   font-size: 24px;
  color: #333;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: inline-block;
}
.user-profile {
  width: 100%;
  text-align: center;
  margin-top: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
