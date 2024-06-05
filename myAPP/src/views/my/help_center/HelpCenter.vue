<template>  
    <div>
      <div>
        <p class="title">常见问题</p>  
    </div>  
    
    <div>
        <button @click="toggleDropdown11" class="button">猜你想问</button> 
      <div class="dropdown" v-if="showDropdown11">  
      
      <div>
          <button @click="toggleDropdown1" class="button">如何申请售后服务？</button> 
        <div class="dropdown" v-if="showDropdown1">  
          <p>您好，您可以拨打客服热线，详细描述问题原因，我们会在24h内为您处理的。涉及纸质报告的务必拍照留存，以便获得有效的处理哈。同时您可以通过微信客服反馈问题，我们会第一时间为您处理解决。</p>  
        </div>  
      </div>  
      
      <div>
          <button @click="toggleDropdown2" class="button">东西送错怎么办?</button>  
        <div class="dropdown" v-if="showDropdown2">  
          <p>您好，如陪诊师未离开，请直接让陪诊师带回。如陪诊师已离开，请将您收到的纸质报告后拍照留好，然后拨打客服热线，详细描述错送情况，错送的报告/药品务必保留照片，人工客服及时有效的处理哈。同时您也可以在线客服反馈，我们会第一时间为您处理。</p>  
        </div>  
      </div>
          
      </div>  
    </div>
    
    <div>
        <button @click="toggleDropdown22" class="button">订单</button> 
      <div class="dropdown" v-if="showDropdown22">  
      
      <div>
          <button @click="toggleDropdown3" class="button">怎么修改订单信息?</button>  
        <div class="dropdown" v-if="showDropdown3">  
          <p>您好，您的订单一旦付款，只能通过人工客服进行修改，还请您见谅。</p>  
        </div>  
      </div>
      
      <div>
          <button @click="toggleDropdown4" class="button">如何取消订单?</button>  
        <div class="dropdown" v-if="showDropdown4">  
          <p>您好:<br>1.订单未付款之前，在小程序上可以取消订单，系统也会在付款时间到期后自动取消，取消成功订单状态显示【已取消】，订单一旦取消，将无法恢复。<br>2.订单付款后您自己将无法取消订单，可以联系客服进行处理。</p>  
        </div>  
      </div>
          
      </div>  
    </div>
    
    <div>
        <button @click="toggleDropdown33" class="button">售后</button> 
    <div class="dropdown" v-if="showDropdown33">  
      
    <div>
          <button @click="toggleDropdown5" class="button">违规订单处理规则?</button>  
        <div class="dropdown" v-if="showDropdown5">  
          <p>您好，下单成功后，因个人原因，就诊时间前12小时内取消订单-扣除5%服务费用，就诊时间前6小时内取消订单-扣除10%服务费用，就诊时间前3小时内取消订单扣除50%服务费用，就诊时问前2小时内取消订单-扣除100%服务费用。</p>  
        </div>  
      </div>
      
      <div>
          <button @click="toggleDropdown6" class="button">退款到账的时间是多久?</button>  
        <div class="dropdown" v-if="showDropdown6">  
          <p>您好，订单取消成功或者售后审核完成之后，我们会在三个工作日为您处理完退款，不同银行退款周期不同如您的订单超过退款周期仍未收到退款，请您联系客服为您处理。</p>  
        </div>  
      </div>
          
      </div>  
    </div>
    </div>
</template>  
    
  <script>  
  export default {  
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