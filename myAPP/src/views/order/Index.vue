<template>
    <div class="msg">
        <EasyHeader>
            <p>订单</p>
        </EasyHeader>
        <NavBar/>
    </div>
</template>

<script setup>
import EasyHeader from '../../components/EasyHeader.vue'
import NavBar from './NavBar.vue';
</script>

<style scoped>
.msg{
    height: 667px;
    background-color: #f0f0f0;
}

</style>