<template>
  <div>
    <back-header title="用户登录"/>
    <div class="container">
      <h1>欢迎登录</h1>
      <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
      <form @submit.prevent="handleLogin">
        <label for="username">用户名</label>
        <input type="text" v-model="username" class="input" placeholder="请输入用户名">
        
        <label for="pwd">密码</label>
        <input type="password" v-model="password" class="input" placeholder="请输入密码">

        
        <button type="submit" class="submit">登录</button>
        
        <div class="links">
          <button class="ab" @click="$router.push({ name: 'index' })"></button>
          <button class="ab" @click="$router.push({ name: 'register' })">注册账号</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>  
import { useRouter } from 'vue-router';
const $router = useRouter();
import { ElMessage } from 'element-plus';

import { ref } from 'vue';  
import BackHeader from '../../components/BackHeader.vue';

const username = ref('');  
const password = ref('');   
const errorMessage = ref('');  

const handleLogin = () => {  
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (!username.value || !password.value) {  
    errorMessage.value = "所有字段都是必填项！";  
  } else {
    if (userData && userData.username === username.value && userData.password === password.value) {
      localStorage.setItem('loggedIn', 'true');
      // errorMessage.value = "登录成功！";
      ElMessage({
        message: '登录成功',
        type: 'success',
      })
      $router.push({ name: 'my' });
    } else {
      // errorMessage.value="";
      ElMessage.error('用户名或密码错误！')
    }
  } 
};  
</script>  

<style scoped>
p{
  text-align: center;
}
.container {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 10px;
  margin: auto;
  padding: 20px;
}
h1 {
  color: #000;
  text-align: center;
  margin-top: 20px;
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
.input {
  width: 100%;
  height: 40px;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.checkbox {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.checkbox input {
  margin-right: 10px;
}
.submit {
  background: mediumseagreen;
  border: none;
  color: #FFF;
  margin-top: 30px;
  margin-bottom: 15px;
  height: 40px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}
.links {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.ab {
  background-color: white;
  border:none;
  color: #000;
  text-decoration: none;
  font-weight: bold;
}
</style>
