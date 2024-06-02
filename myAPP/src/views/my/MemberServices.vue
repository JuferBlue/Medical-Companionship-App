<template>
    <div class="member-services">
      <router-link to="/patientList" tag="div" class="service">
        <div>
          <svg class="iconfont custom-size">
            <use xlink:href="#icon-jiuzhenrenguanli"></use>
          </svg>
        </div>
        <div class="member-content">
          <h3>就诊人管理</h3>
          <p>1个就诊人</p>
        </div>
      </router-link>
      <div class="service">
        <div>
          <svg class="iconfont custom-size">
            <use xlink:href="#icon-youhuiquan"></use>
          </svg>
        </div>
        <div class="member-content">
          <h3>优惠券</h3>
          <p>3张未使用</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  .member-services {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    background-color: #fff;
    margin: 1rem;
    border-radius: 1rem;
  }
  .service {
    display: flex;
    /* background-color: orange; */
  }
  .service .custom-size{
    width: 6rem;
    height: 6rem;
  }
  .service .member-content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .service p {
    margin: 5px 0;
  }
  </style>
  