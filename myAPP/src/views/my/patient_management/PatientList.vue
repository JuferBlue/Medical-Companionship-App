<template>
    <div>
        <div>
            当前还没有添加就诊人,点击下方按钮添加就诊人
        </div>
        <router-link to="/addPatient" tag="div" class="addBtn">
            添加就诊人
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