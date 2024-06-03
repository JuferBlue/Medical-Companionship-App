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
        description:"江西省人民医院（南昌医学院第一附属医院） [10]创办于1897年，是南昌市第一家西医医院。已发展成为省卫健委直属，集医疗、保健、科研、教学、预防和紧急医学救援于一体的三级甲等综合医院，是全省最大的干部保健基地 [1]。内设江西省心血管病医院 [7]、江西省老年医院、南昌医学院附属口腔医院、中西医协同旗舰医院，全面托管进贤县人民医院 [23]。与中南大学湘雅医院合作共建的国家神经疾病区域医疗中心建设项目——“中南大学湘雅医院江西医院”正在加紧建设中。"
    },
    {
        name: '南昌大学第一附属医院',
        address: '南昌市东湖区永外正街17号',
        level: '三甲医院',
        img: img2,
        description:"南昌大学第一附属医院是集医疗、教学、科研、预防、保健、康养于一体的全国首批三级甲等医院，是江西省唯一一家连续8年登上“复旦榜全国医院百强榜”医院，建筑面积73.4万平方米，编制床位6100张。"+
        "医院成立于1939年，前身为中正医学院附属医院，1949年解放后成为中国人民解放军教学医院，1958年转业地方，先后历经南昌医学院附属医院、一七三陆军医院、江西医学院第一附属医院等十余次更名。2005年江西医学院与南昌大学合并，医院随之更名为南昌大学第一附属医院至今。"
    },
    {
        name: '南昌市第一医院',
        address: '南昌市象山北路128号',
        level: '三甲医院',
        img: img3,
        description:"南昌市第一医院是南昌市人民政府、南昌大学市校合作共建医院。2022年12月，为共同提升市级公立医院医疗技术水平，更好满足南昌市民医疗健康服务需求，南昌市人民政府与南昌大学签署协议依托南昌大学第一附属医院共建南昌市第一医院。"
    }
])

const router = useRouter()

const toDetail = (hospital) => {
    router.push({ path: '/hospitalDetail', query: { 
        name: hospital.name,
        address: hospital.address,
        level: hospital.level,
        img: '../'+hospital.img
    } })
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
