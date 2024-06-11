<template>  
  <div>
    <BackHeader title="添加地址" />
    <div class="address-form-container">  
      <form @submit.prevent="submitForm" >
      <div class="form-group">  
          <label for="recipientName">收件人：</label>  
          <input id="name" v-model="recipient.name" placeholder="请填写收件人姓名" type="text" />  
      </div>  
        
      <div class="form-group">  
          <label for="phoneNumber">手机号：</label>  
          <input id="phoneNumber" v-model="recipient.phoneNumber" placeholder="请填写收件人手机号" type="tel" />  
      </div>  
        
      <div class="form-group">  
          <label for="address">详细地址：</label>  
          <input id="address" v-model="recipient.address" placeholder="如街道、门牌号、小区、乡镇、村等" type="text" />  
          <button class="get-location-btn" @click="getLocation">获取定位</button>  
      </div>  
        
      <p class="warning">温馨提示：<br>收件人姓名，手机号码仅用于平台服务，不会外传。</p>  
          
      <button class="submit-btn" >添加</button>  
	  </form> 
	  
    </div>
  </div>  
</template>  
  
<script>  
import BackHeader from '../../../components/BackHeader.vue';

export default {  
  components: {  
    BackHeader,  
  },
  data() {  
    return {  
      recipient: {  
        name: '',  
        phoneNumber: '',  
        address: '',  
      },  
    };  
  },  
  methods: {  
  
	getLocation() {
	    
		if (typeof BMap !== 'undefined') {
		  // 使用BMap相关功能
		} else {
		  alert('百度地图API未加载');
		}

		// 创建Geolocation实例
	    var geolocation = new BMap.Geolocation();
	    geolocation.getCurrentPosition(function (result) {
	      if (result === BMAP_STATUS_SUCCESS) {
	        // 获取位置成功，将经纬度转换为地址
	        var geoc = new BMap.Geocoder();
	        geoc.getLocation(result.point, function (rs) {
	          var address = rs.addressComponent.province + rs.addressComponent.city + rs.addressComponent.district + rs.addressComponent.street + rs.addressComponent.streetNumber;
	          this.recipient.address = address; // 将获取到的地理位置填入输入框
	        }.bind(this));
	      } else {
	        alert('获取定位失败');
	      }
	    }.bind(this), { enableHighAccuracy: true });
	  },
	
    submitForm() {
	  // 表单提交逻辑  
	  if (this.recipient.name && this.recipient.phoneNumber && this.recipient.address) {
		  // 将信息存储到 localStorage
		  const recipientData = JSON.stringify(this.recipient);
		  localStorage.setItem('recipient', recipientData);
		  console.log('提交就诊人信息:', this.recipient);  
		  
	  } else { 
		  alert('请填写所有必填项！');  
		  }  
	},    
  },  
};  


</script>  
 
<style scoped>  
.address-form-container {  
  padding: 20px;  
  border: 1px solid #ddd;  
  border-radius: 4px;  
  margin: 0 auto;  
}  
  
.form-title {  
  text-align: center;  
  margin-bottom: 20px;  
}  
  
.form-group {  
  margin-bottom: 15px;  
  display: flex; 
}  
  
.form-group label {  
  width:25%;
  display: block;  
  font-weight: bold;  
  margin-bottom: 10px;  
  font-size: 16px;
}  
  
.form-group input {  
  width:65%;  
  padding: 10px;  
  border: 1px solid #ccc;  
  border-radius: 4px;  
  box-sizing: border-box;  
  font-size: 16px;
}  
  
.get-location-btn {  
  display: block;  
  width:35%;
  margin-top: 20px;  
  margin-left: 10px; 
  padding: 5px 0px;  
  background-color: #6fdfb1;  
  color: white;  
  border: none;  
  border-radius: 4px;  
  cursor: pointer;  
}  

.get-location-btn:hover {  
  background-color: green;  
}  

.submit-btn {  
  display: block;
  width: 100%;  
  padding: 15px;  
  background-color: #6fdfb1;  
  color: white;  
  border: none;  
  border-radius: 4px;  
  cursor: pointer;  
  text-align: center;  
  font-size: 20px;  
  margin-top: 163px; 
  
}  

.submit-btn:hover {  
  background-color: green;  
}  
  
.warning {  
  color: #999;  
  font-size: 13px;  
  margin-top: 10px;  
  text-align: left;  
}  
</style>