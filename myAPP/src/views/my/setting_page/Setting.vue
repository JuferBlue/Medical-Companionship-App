<template>
    <div>
      <BackHeader title="设置" />
      <div class="setting-item" @click="changeAvatar">
        更换头像
        <input type="file" ref="fileInput" @change="handleFileChange" style="display: none;" />
      </div>
      <div class="setting-item">
        关于我们
      </div>
      <div class="setting-item logout" @click="logout">
        退出登录
      </div>
    </div>
  </template>
  
  <script setup>
  import { ElMessage } from 'element-plus';
  import { ref } from 'vue';
  import BackHeader from "../../../components/BackHeader.vue";
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const fileInput = ref(null);
  
  const changeAvatar = () => {
    fileInput.value.click();

  };
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem('avatarUrl', reader.result);
      };
      reader.readAsDataURL(file);
    }
    ElMessage.success('头像已更换');
  };
  
  const logout = () => {
    localStorage.removeItem('loggedIn');
    ElMessage.success('已退出登录');
    router.push('/login');
  };
  </script>
  
  <style scoped>
  .setting-item {
    padding: 15px;
    margin: 10px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  .setting-item + .setting-item {
    margin-top: 10px;
  }
  .logout {
    color: red;
  }
  </style>
  