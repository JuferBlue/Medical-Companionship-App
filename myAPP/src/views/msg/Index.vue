<template>
    <div class="msg">
        <EasyHeader class="fixed-header">
            <p>社区</p>
        </EasyHeader>
        <SystemMsgVue/>
    </div>
</template>

<script setup>
import EasyHeader from '../../components/EasyHeader.vue'
import SystemMsgVue from './SystemMsg.vue'

</script>

<style scoped>
  .fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: #fff; /* Ensure the background color matches the rest of the page */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a shadow for better visibility */
  }
.msg{
    height: 667px;
    background-color: #f0f0f0;
}


</style>