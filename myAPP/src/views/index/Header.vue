<script setup>

</script>

<template>
  <div class="header">
    <div class="header-user">
      <svg class="iconfont custom-size">
        <use xlink:href="#icon-xunlu"></use>
      </svg>
    </div>
    <div class="header-position">
      <h3>南昌</h3>
    </div>
    <div class="header-input">
      <input type="text" placeholder="陪诊服务">
      <i class="iconfont icon-sousuo"></i>
    </div>
    <div class="header-add">
      <svg class="iconfont custom-size">
        <use xlink:href="#icon-jiahao"></use>
      </svg>
    </div>
  </div>
  
</template>

<style scoped>
.header{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
}

.header .header-user .custom-size{
  width: 4rem;
  height: 4rem;
}

.header-input{
  position: relative;
}

.header-input input{
  border: 0;
  background: #f3f3f3;
  padding: 1rem;
  text-align: center;
  border-radius: 1rem;
}

.header-input i{
  position: absolute;
  left: 40px;
  top: 7px;
}
.header-add svg{
  width: 4rem;
  height: 4rem;
}
</style>
