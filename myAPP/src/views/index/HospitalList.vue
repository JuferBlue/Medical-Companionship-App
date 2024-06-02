<script setup>


</script>

<template>
  <div class="hospital">
    <div class="hospital-list">
        <div class="hospital-img">
            <img src="../../assets/images/hospital/江西省人民医院.jpg" alt="">
        </div>
        <div class="hospital-item">
            <div class="hospital-des-1">
                <h2>江西省人民医院</h2>
            </div>
            <div class="hospital-des-2">
                <p>三甲医院</p>
            </div>
            <div class="hospital-des-3">
                <p>
                    地址：南昌市凤凰洲片区丰和北大道266号
                </p>
            </div>
        </div>
    </div>
    <div class="hospital-list">
        <div class="hospital-img">
            <img src="../../assets/images/hospital/南昌大学第一附属医院.jpg" alt="">
        </div>
        <div class="hospital-item">
            <div class="hospital-des-1">
                <h2>南昌大学第一附属医院</h2>
            </div>
            <div class="hospital-des-2">
                <p>三甲医院</p>
            </div>
            <div class="hospital-des-3">
                <p>
                    地址：南昌市东湖区永外正街17号
                </p>
            </div>
        </div>
    </div>
    <div class="hospital-list">
        <div class="hospital-img">
            <img src="../../assets/images/hospital/南昌市第一医院.jpg" alt="">
        </div>
        <div class="hospital-item">
            <div class="hospital-des-1">
                <h2>南昌市第一医院</h2>
            </div>
            <div class="hospital-des-2">
                <p>三甲医院</p>
            </div>
            <div class="hospital-des-3">
                <p>
                    地址：南昌市象山北路128号
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
.hospital-list{
    background-color: #fff;
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    margin: 1rem 0;
}
.hospital-list .hospital-img{
    width: 30%;
}
.hospital-list .hospital-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
}
.hospital-list .hospital-item{
    width: 70%;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.2rem;
}
.hospital-list .hospital-item .hospital-des-2 p{
    background-color: #b8f5da;
    width: 60px;
    color: #5bb692;
    line-height: 1;
    text-align: center;
}
</style>
