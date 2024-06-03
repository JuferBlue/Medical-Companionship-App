<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import img1 from '../../assets/images/hospital/江西省人民医院.jpg'
import img2 from '../../assets/images/hospital/南昌大学第一附属医院.jpg'
import img3 from '../../assets/images/hospital/南昌市第一医院.jpg'

const hospitalList = ref([
    {
        name: '江西省人民医院',
        address: '南昌市凤凰洲片区丰和北大道266号',
        level: '三甲医院',
        img: img1,
    },
    {
        name: '南昌大学第一附属医院',
        address: '南昌市凤凰洲片区丰和北大道266号',
        level: '三甲医院',
        img: img2
    },
    {
        name: '南昌市第一医院',
        address: '南昌市象山北路128号',
        level: '三甲医院',
        img: img3
    }
])

const router = useRouter()

const toDetail = (hospital) => {
    router.push({ path: '/hospitalDetail', query: { name: hospital.name } })
}
</script>

<template>
  <div class="hospital">
    <div v-for="hospital in hospitalList" :key="hospital.address" class="hospital-list" @click="toDetail(hospital)">
        <div class="hospital-img">
            <img :src="hospital.img" alt="">
        </div>
        <div class="hospital-item">
            <div class="hospital-des-1">
                <h2>{{ hospital.name }}</h2>
            </div>
            <div class="hospital-des-2">
                <p>{{ hospital.level }}</p>
            </div>
            <div class="hospital-des-3">
                <p>
                    {{ hospital.address }}
                </p>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.hospital {
    background-color: #f5f5f5;
    padding: 1rem 2rem;
}
.hospital-list {
    background-color: #fff;
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    margin: 1rem 0;
}
.hospital-list .hospital-img {
    width: 30%;
}
.hospital-list .hospital-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
}
.hospital-list .hospital-item {
    width: 70%;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.2rem;
}
.hospital-list .hospital-item .hospital-des-2 p {
    background-color: #b8f5da;
    width: 60px;
    color: #5bb692;
    line-height: 1;
    text-align: center;
}
</style>
