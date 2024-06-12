<template>
  <div>
    <BackHeader title="常见问题"></BackHeader>
    
    <div class="faq-section">
      <div class="faq-item">
        <button @click="toggleDropdown('showDropdown11')" class="faq-button">猜你想问</button>
        <div class="dropdown" v-if="showDropdown11">
          <p>这里是一些你可能会问的问题的答案。</p>
        </div>
      </div>

      <div class="faq-item">
        <button @click="toggleDropdown('showDropdown1')" class="faq-button">如何申请售后服务？</button>
        <div class="dropdown" v-if="showDropdown1">
          <p>您可以通过我们的客服中心申请售后服务。</p>
        </div>
      </div>

      <div class="faq-item">
        <button @click="toggleDropdown('showDropdown2')" class="faq-button">东西送错怎么办?</button>
        <div class="dropdown" v-if="showDropdown2">
          <p>请立即联系客户服务，我们会尽快为您解决问题。</p>
        </div>
      </div>

      <div class="faq-item">
        <button @click="toggleDropdown('showDropdown22')" class="faq-button">订单</button>
        <div class="dropdown" v-if="showDropdown22">
          <div class="faq-sub-item">
            <button @click="toggleDropdown('showDropdown3')" class="faq-button">怎么修改订单信息?</button>
            <div class="dropdown" v-if="showDropdown3">
              <p>您可以在订单详情页面修改订单信息。</p>
            </div>
          </div>

          <div class="faq-sub-item">
            <button @click="toggleDropdown('showDropdown4')" class="faq-button">如何取消订单?</button>
            <div class="dropdown" v-if="showDropdown4">
              <p>在订单详情页面，点击取消订单按钮。</p>
            </div>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button @click="toggleDropdown('showDropdown33')" class="faq-button">售后</button>
        <div class="dropdown" v-if="showDropdown33">
          <div class="faq-sub-item">
            <button @click="toggleDropdown('showDropdown5')" class="faq-button">违规订单处理规则?</button>
            <div class="dropdown" v-if="showDropdown5">
              <p>所有违规订单将按公司规定进行处理。</p>
            </div>
          </div>

          <div class="faq-sub-item">
            <button @click="toggleDropdown('showDropdown6')" class="faq-button">退款到账的时间是多久?</button>
            <div class="dropdown" v-if="showDropdown6">
              <p>退款一般会在5-7个工作日内到账。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackHeader from '../../../components/BackHeader.vue';

export default {  
  components: {  
    BackHeader,  
  },
  data() {  
    return {  
      // 控制下拉框的显示与隐藏  
      showDropdown1: false,
      showDropdown2: false,
      showDropdown3: false,
      showDropdown4: false,
      showDropdown5: false,
      showDropdown6: false,
      showDropdown11: false,
      showDropdown22: false,
      showDropdown33: false,
    };  
  },  
  methods: {  
    toggleDropdown(dropdown) {  
      this[dropdown] = !this[dropdown];  
    },
  },  
};  
</script>

<style scoped>
.faq-section {
  padding: 20px;
  background-color: #f4f6f8;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.faq-item, .faq-sub-item {
  margin-bottom: 10px;
}

.faq-button {
  width: 100%;
  padding: 15px;
  background-color: #ffffff;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: left;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.faq-button:hover {
  background-color: #f0f0f0;
}

.dropdown {
  padding: 15px;
  background-color: #ffffff;
  color: #555;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 0 0 5px 5px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
