<template>
    <div class="hospital-details">
      <div class="container">
        <div class="hospital-info">
          <h1 class="hospital-name">{{ name }}</h1>
          <br>
          <div class="image-container">
          <img :src="img" alt="医院图片" class="hospital-image" />
        </div>
          <p class="hospital-description">{{ description }}</p>
          <div class="hospital-intro">
            <h2>江西省人民医院简介</h2>
            <section>
              <h3><i class="fas fa-info-circle"></i> 一、医院基本信息</h3>
              <p><strong>创办时间：</strong> 1897年</p>
              <p><strong>医院等级：</strong> 三级甲等综合医院</p>
              <p><strong>直属单位：</strong> 江西省卫生健康委员会</p>
              <p><strong>医院地址：</strong> <i class="fas fa-map-marker-alt"></i> {{ address }}</p>
            </section>
            <section>
              <h3><i class="fas fa-history"></i> 二、发展历程</h3>
              <p>
                江西省人民医院，原名南昌卫理医院，是南昌地区第一所西医医院。经过一百二十余年的发展，
                已发展成为集医疗、保健、科研、教学、预防和紧急医学救援于一体的综合性医院。
              </p>
            </section>
            <section>
              <h3><i class="fas fa-hospital"></i> 三、院区及设施</h3>
              <p><strong>爱国路院区：</strong> 占地约47亩，医疗用房建筑面积12.02万㎡，开放床位1500张。</p>
              <p><strong>红谷滩院区：</strong> 占地约126亩，一期工程建筑总面积约17.26万㎡，开放床位1500张。两院区隔江相望，有转运车免费接送。</p>
            </section>
            <section>
              <h3><i class="fas fa-stethoscope"></i> 四、特色科室与学科</h3>
              <p>
                <strong>特色科室：</strong> 江西省人民医院内设江西省心血管病医院、江西省老年医院、南昌医学院附属口腔医院等。
              </p>
              <p>
                <strong>优势学科：</strong> 拥有国家临床重点专科5个，包括神经内科、心血管内科、消化科、呼吸与危重症医学科、器官移植科等。
                同时，在心血管介入、器官移植等领域处于全省领先地位。
              </p>
            </section>
          </div>
        </div>
      </div>
      <BaseHeader />
    </div>
  </template>
  
  <script setup>
  
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import BaseHeader from '../../../components/BaseHeader.vue';
  const route = useRoute();
  let name = ref(route.query.name);
  let address = ref(route.query.address);
  let img = ref(route.query.img);
  let description = ref(route.query.description);
  </script>
  
  <style scoped>
  .hospital-details {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    background: linear-gradient(to bottom, #e8f5e9, #ffffff); /* 淡绿色渐变背景 */
    padding: 20px 20px;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    max-width: 1200px;
    margin: 40px auto;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .container:hover {
    transform: scale(1.03);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  .image-container {
    width: 100%;
    max-height: 400px;
    overflow: hidden;
    border-radius: 20px;
    margin-bottom: 30px;
  }
  
  .hospital-image {
    width: 100%;
    height: auto;
    transition: transform 0.3s;
  }
  
  .image-container:hover .hospital-image {
    transform: scale(1.05);
  }
  
  .hospital-info {
    text-align: center;
    width: 100%;
  }
  
  .hospital-name {
    font-size: 2.8em;
    color: #2e7d32; 
    margin-bottom: 15px;
    font-weight: bold;
  }
  
  .hospital-address {
    font-size: 1.4em;
    color: #388e3c; 
    margin-bottom: 15px;
  }
  
  .hospital-level {
    font-size: 1.3em;
    color: #388e3c; 
    margin-bottom: 25px;
    font-style: italic;
  }
  
  .hospital-description {
    font-size: 1.2em;
    color: #555;
    line-height: 1.8;
    margin: 25px 0;
    padding: 25px;
    background-color: #f1f8e9; 
    border-left: 6px solid #2e7d32; 
    border-radius: 10px;
    text-align: left;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .hospital-intro {
    margin-top: 30px;
    text-align: left;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .hospital-intro h2 {
    color: #2e7d32; 
    margin-bottom: 20px;
    font-size: 2em;
    text-align: center;
  }
  
  .hospital-intro section {
    margin-bottom: 20px;
    background: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .hospital-intro section h3 {
    color: #388e3c; 
    margin-bottom: 10px;
    font-size: 1.5em;
    border-bottom: 2px solid #388e3c;
    padding-bottom: 5px;
  }
  
  .hospital-intro section h3 i {
    margin-right: 10px;
  }
  
  .hospital-intro p {
    margin-bottom: 10px;
    line-height: 1.6;
    text-align: justify;
    text-indent: 2em;
  }
  
  @media (min-width: 768px) {
    .container {
      flex-direction: row;
      align-items: flex-start;
      padding: 40px;
    }
  
    .image-container {
      width: 50%;
      margin-right: 30px;
      margin-bottom: 0;
    }
  
    .hospital-info {
      text-align: left;
      width: 50%;
    }
  }
  </style>