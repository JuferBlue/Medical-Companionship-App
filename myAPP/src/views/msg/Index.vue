<template>
    <div class="msg">
        <EasyHeader class="fixed-header">
            <p>消息</p>
        </EasyHeader>
        <SystemMsg/>
    </div>
</template>

<script setup>
import EasyHeader from '../../components/EasyHeader.vue'
import SystemMsg from './SystemMsg.vue';
</script>

<style scoped>
.msg{
    height: 667px;
    background-color: #f0f0f0;
}


</style>