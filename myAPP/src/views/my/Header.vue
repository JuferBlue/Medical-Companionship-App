<template>
  <div class="header">
    <div v-if="!loggedIn" class="user-info">
      <el-avatar :size="80" :src="defaultAvatarUrl" class="avatar" />
      <div class="account-text">
        <span>目前尚未登录</span>
        <button class="login-button" @click="handleLogin">登录</button>
      </div>
    </div>

    <div v-if="loggedIn" class="user-info">
      <el-avatar :size="80" :src="circleUrl" class="avatar" />
      <div class="account-details">
        <span class="welcome-message">欢迎，用户{{ username }}！</span>
        <!-- 退出登录按钮移除 -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const loggedIn = ref(false);
const username = ref('');
const defaultAvatarUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';
const circleUrl = ref(defaultAvatarUrl);

const router = useRouter();

// 登录按钮路由跳转
const handleLogin = () => {
  router.push('/login');
};

onMounted(() => {
  if (localStorage.getItem('loggedIn') === 'true') {
    const userData = JSON.parse(localStorage.getItem('userData'));
    username.value = userData.username;
    loggedIn.value = true;
  }

  const storedAvatarUrl = localStorage.getItem('avatarUrl');
  if (storedAvatarUrl) {
    circleUrl.value = storedAvatarUrl;
  }
});
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #ffffff;
  margin: 1rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.account-text,
.account-details {
  display: flex;
  flex-direction: column;
}

.welcome-message {
  font-size: 16px;
  margin-bottom: 10px;
}

.login-button {
  background-color: #3cb371;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #2e8b57;
}

.el-avatar.avatar {
  width: 80px !important;
  height: 80px !important;
  object-fit: cover;
  border-radius: 50% !important;
  overflow: hidden;
}
</style>
