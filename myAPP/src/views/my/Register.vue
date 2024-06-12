<template>
  <div>
    <BackHeader title="注册" />
    <div class="container">
      <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
      <form @submit.prevent="handleRegister">
        <label for="username">用户名</label>
        <input type="text" v-model="username" class="register" placeholder="输入用户名">

        <label for="phonenumber">手机号</label>
        <input type="text" v-model="phoneNumber" class="register" placeholder="输入手机号">

        <label for="password">登录密码</label>
        <input type="password" v-model="password" class="register" placeholder="输入登录密码">

        <label for="confirmPassword">确认密码</label>
        <input type="password" v-model="confirmPassword" class="register" placeholder="确认密码">

        <div class="checkbox">
          <input type="checkbox" v-model="agreement">
          <span>我已阅读并同意《用户注册协议》</span>
        </div>

        <button type="submit" class="submit">注册</button>
        <div class="links">
          <button class="ab" @click="$router.push({ name: 'index' })"></button>
          <button class="ab" @click="$router.push({ name: 'login' })">前往登录</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script setup>  
import { useRouter } from 'vue-router';
const router = useRouter();
import { ElMessage } from 'element-plus';
import BackHeader from '../../components/BackHeader.vue';
import { ref } from 'vue';  

const username = ref('');  
const phoneNumber = ref('');  
const password = ref('');  
const confirmPassword = ref('');    
const agreement = ref(false);  
const errorMessage = ref('');  
  
const handleRegister = () => {  
  
  if (!username.value || !phoneNumber.value || !password.value || !confirmPassword.value) {  
    // errorMessage.value = "所有字段都是必填项！";
    ElMessage.error('所有字段都是必填项！');  
    return;  
  }  
  if (password.value !== confirmPassword.value) {  
    // errorMessage.value = "密码和确认密码不一致！";
    ElMessage.error('密码和确认密码不一致！');
    return;  
  }  
  if (username.value.length < 4 || username.value.length > 16) {  
    // errorMessage.value = "用户名长度必须在4到16个字符之间！";  
    ElMessage.error('用户名长度必须在4到16个字符之间！');
    return;  
  }
  if (phoneNumber.value.length !== 11) {  
    // errorMessage.value = "手机号必须是11位数字！";  
    ElMessage.error('手机号必须是11位数字！');
    return;  
  }
  if (!agreement.value) {  
    // errorMessage.value = "请先阅读并同意《用户注册协议》！"; 
    ElMessage.error('请先阅读并同意《用户注册协议》！'); 
    return;  
  }  

  const userData = {
    username: username.value,
    password: password.value,
    phoneNumber: phoneNumber.value
  };
  localStorage.setItem('userData', JSON.stringify(userData));

  // errorMessage.value = "注册成功！";  
  ElMessage.success('注册成功！');
  router.push({ name: 'login' });

};  
</script>  

<style scoped>
p{
  text-align: center;
}
.container {
  width: 100%;
  height: 100%;
  margin: auto;
  background: #FFF;
  border-radius: 10px;
  padding: 20px;
}
h1 {
  color: #000;
  text-align: center;
  margin-bottom: 20px;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  color: #000;
  font-weight: bold;
  font-size: 16px;
  margin: 10px 0 5px;
}
.register {
  width: calc(100% - 20px);
  height: 40px;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left: 10px;
  margin-right: 10px;
}
.checkbox {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 10px;
}
.checkbox input {
  margin-right: 10px;
}
.submit {
  background: mediumseagreen;
  border: none;
  color: #FFF;
  height: 40px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
}
.links {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
.ab {
  background-color: white;
  border:none;
  color: #000;
  text-decoration: none;
  font-weight: bold;
}
</style>
