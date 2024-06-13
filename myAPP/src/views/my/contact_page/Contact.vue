<template>
  <div>
    <BackHeader title="联系客服" />
    <div class="chat-container">
      <div class="messages">
        <div v-for="(message, index) in messages" :key="index" :class="['message', message.sender]">
          <p>{{ message.text }}</p>
        </div>
      </div>
      <div class="input-container">
        <input type="text" v-model="newMessage" @keyup.enter="sendMessage" placeholder="输入消息..." />
        <button @click="sendMessage">发送</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BackHeader from '../../../components/BackHeader.vue';

const messages = ref([
  { sender: 'support', text: '您好，有什么可以帮您的吗？' }
]);
const newMessage = ref('');

const sendMessage = () => {
  if (newMessage.value.trim() === '') return;
  
  messages.value.push({ sender: 'user', text: newMessage.value });
  newMessage.value = '';

  // 模拟客服回复
  setTimeout(() => {
    messages.value.push({ sender: 'support', text: '好的，我们已收到您的消息。' });
  }, 1000);
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  margin: 20px auto;
  padding: 20px;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

.messages {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 10px;
}

.message {
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  max-width: 60%;
}

.message.user {
  background-color: #dcf8c6;
  align-self: flex-end;
  text-align: right;
  margin-left: auto;
}

.message.support {
  background-color: #fff;
  align-self: flex-start;
  text-align: left;
}

.input-container {
  display: flex;
  align-items: center;
}

input[type="text"] {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>
  