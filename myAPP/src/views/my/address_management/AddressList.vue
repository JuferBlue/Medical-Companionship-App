<template>
    <div>
        <div>
            当前还没有添加地址,点击下方按钮添加地址
        </div>
        <router-link to="/addAddress" tag="div" class="addBtn">
            添加地址
        </router-link>
    </div>
</template>
  
<script setup>

</script>
  
<style scoped>
.addBtn{
    background-color: red;
}
</style>