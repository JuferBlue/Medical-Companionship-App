<template>
  <div>
    <BackHeader title="常见问题"></BackHeader>
    <!-- <div>
      <p class="title">常见问题</p>
    </div> -->

    <div>
      <button @click="toggleDropdown11" class="button">猜你想问</button>
      <div class="dropdown" v-if="showDropdown11">
        <!-- 内容... -->
      </div>
    </div>

    <div>
      <button @click="toggleDropdown1" class="button">如何申请售后服务？</button>
      <div class="dropdown" v-if="showDropdown1">
        <p>内容...</p>
      </div>
    </div>

    <div>
      <button @click="toggleDropdown2" class="button">东西送错怎么办?</button>
      <div class="dropdown" v-if="showDropdown2">
        <p>内容...</p>
      </div>
    </div>

    <!-- 更多问题按钮和下拉框... -->

    <div>
      <button @click="toggleDropdown22" class="button">订单</button>
      <div class="dropdown" v-if="showDropdown22">
        <div>
          <button @click="toggleDropdown3" class="button">怎么修改订单信息?</button>
          <div class="dropdown" v-if="showDropdown3">
            <p>内容...</p>
          </div>
        </div>

        <div>
          <button @click="toggleDropdown4" class="button">如何取消订单?</button>
          <div class="dropdown" v-if="showDropdown4">
            <p>内容...</p>
          </div>
        </div>

        <!-- 更多订单相关问题... -->
      </div>
    </div>

    <div>
      <button @click="toggleDropdown33" class="button">售后</button>
      <div class="dropdown" v-if="showDropdown33">
        <div>
          <button @click="toggleDropdown5" class="button">违规订单处理规则?</button>
          <div class="dropdown" v-if="showDropdown5">
            <p>内容...</p>
          </div>
        </div>

        <div>
          <button @click="toggleDropdown6" class="button">退款到账的时间是多久?</button>
          <div class="dropdown" v-if="showDropdown6">
            <p>内容...</p>
          </div>
        </div>

        <!-- 更多售后相关问题... -->
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
      // 切换下拉框的显示与隐藏状态  
      toggleDropdown1() {  
        this.showDropdown1 = !this.showDropdown1;  
      },  
      toggleDropdown2() {
        this.showDropdown2 = !this.showDropdown2;  
      },  
      toggleDropdown3() {
        this.showDropdown3 = !this.showDropdown3;  
      },  
      toggleDropdown4() {
        this.showDropdown4 = !this.showDropdown4;  
      },  
      toggleDropdown5() {
        this.showDropdown5 = !this.showDropdown5;  
      },  
      toggleDropdown6() {
        this.showDropdown6 = !this.showDropdown6;  
      },  
      toggleDropdown11() {
        this.showDropdown11 = !this.showDropdown11;  
      }, 
      toggleDropdown22() {
        this.showDropdown22 = !this.showDropdown22;  
      },
      toggleDropdown33() {
        this.showDropdown33 = !this.showDropdown33;  
      },
    },  
  };  
  </script>  
    
  <style scoped>  
  
  .title{
      display: block;
      width: 100%;  
      padding: 15px;  
      background-color:  white;  
      color: black;  
      border: none;
      cursor: pointer;  
      text-align: center;  
      font-size: 20px;  
      margin-top: 0;  
  }
  .button{
      display: block;
      width: 100%;  
      padding: 10px;  
      background-color: white;  
      color: black;  
      border-width: 1px;
      border-color: lightgrey;  
      cursor: pointer;  
      text-align: left;  
      font-size: 18px;  
      margin-top: 0;  
  }
  
  .dropdown {  
       display: block;
       width: 100%;  
       padding: 10px;  
       background-color: white;  
       color: gray;  
       border: none; 
       cursor: pointer;  
       text-align: left;  
       font-size: 16px;  
       margin-top: 0;  
  }  
  </style>