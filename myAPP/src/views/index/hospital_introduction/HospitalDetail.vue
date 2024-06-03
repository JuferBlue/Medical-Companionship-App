<script setup>
import BaseHeader from '../../../components/BaseHeader.vue';
import { ref } from 'vue';
import {useRoute } from 'vue-router'
const route = useRoute()
console.log(route.query)
//得到医院详细信息
let name = ref(route.query.name) //医院的名称
let address = ref(route.query.address) //医院地址
let level = ref(route.query.level)//医院等级 eg:三甲医院
let img = ref(route.query.img) //医院图片 使用示例:<img :src="img" alt="">
let description = ref(route.query.description) //医院描述


</script>

<template>
    <div>
        我是医院介绍页
        {{ name }}
    </div>
</template>

<style scoped>

</style>
