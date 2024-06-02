<template>  
  <div class="add-patient-form">  
    <h2>添加就诊人</h2>  
  
    <form @submit.prevent="handleSubmit">  
      <div>  
        <label for="patientName">就诊人姓名：</label>  
        <input type="text" id="patientName" v-model="patient.name" placeholder="请填写就诊人姓名" required>  
      </div>  
  
	  <div class="radio-group">  
		<label>请选择性别</label>
		
		  <input type="radio" id="male" value="male" v-model="patient.gender" required>  
		  <label for="male">男</label>  
			
		  <input type="radio" id="female" value="female" v-model="patient.gender">  
		  <label for="female">女</label>  
 
	  </div>  
  
      <div>  
        <label for="phoneNumber">手机号：</label>  
        <input type="tel" id="phoneNumber" v-model="patient.phoneNumber" placeholder="请填写手机号" required>  
      </div>  
	  
	  <div class="radio-group">  
		<label>就诊人是否已满18岁</label>
		
		  <input type="radio" id="isAdultYes" value="true" v-model="patient.isAdult" required>  
		  <label for="isAdultYes">是</label>  
			  
		  <input type="radio" id="isAdultNo" value="false" v-model="patient.isAdult" >  
		  <label for="isAdultNo">否</label>  

	  </div>  
  
	  <div>
	    <label for="idNumber">身份证号码:</label>  
	    <input type="text" id="idNumber" v-model="patient.idNumber" placeholder="请填写就诊人身份证号码" required>  
	  </div> 
	  
	  <div>
	    <label for="relationship">请选择就诊人关系</label>  
	  		
	  		<select id="relationshipe" v-model="patient.relationship" required>
	  		  <option value="">请选择</option>  
	  		  <option value="parents">父母</option>  
	  		  <option value="me">本人</option>
			  <option value="offspring">子女</option>
			  <option value="sibling">兄弟姐妹</option> 
			  <option value="other">其他</option> 
	  		
	  		</select> 
			
	  </div>  
	  
	  <p class="warning">温馨提示：<br>收件人姓名，手机号码仅用于平台服务，不会外传。</p>
  
      <button type="submit" class="btn-add">添加</button>  
    </form>   
  </div>  
  
</template>  
  
<script>  
export default {  
  data() {  
    return {  
      patient: {  
        name: '',  
        gender: '',  
        phoneNumber: '',  
        isAdult:'',  
		idNumber:'',
		relationship:''
        // 其他字段...  
      },  
    };  
  },  
  methods: {  
    handleSubmit() {
        // 提交表单的逻辑，如发送请求到服务器等  
        if (this.patient.gender && this.patient.phoneNumber && this.patient.isAdult) {  
            // 所有必填项都已填写，可以进行表单提交  
            console.log('提交就诊人信息:', this.patient);  
            // 发送请求等...  
        } else { 
            alert('请填写所有必填项！');  
            }  
	 // console.log('提交就诊人信息:', this.patient);  
    },  
  },  
  
 
};  
</script>  

 <style scoped>   
.add-patient-form {  
  /* max-width: 400px;  */
  margin: 0 auto;  
  padding: 20px;  
  border: 1px solid #ccc;  
  border-radius: 5px;  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  
  background-color: #ffffff;  
}  
  
.add-patient-form h2 {  
  text-align: center;  
  margin-bottom: 20px;  
}  
  
  .add-patient-form div {
    margin-bottom: 15px;  
    display: flex; /* 使得标签和输入框在同一行 */  
    align-items: left; /* 垂直居中 */  
  }  
  
.add-patient-form label {  
  width: 45%;  
  display: block;  
  margin-bottom: 1px;  
  font-weight: bold;  
  font-size: 16px; 
}  
  
.add-patient-form input[type="text"],  
.add-patient-form input[type="tel"],  
.add-patient-form select {  
  width: 100%;  
  padding: 10px;  
  font-size: 16px;  
  border: 1px solid #ccc;  
  border-radius: 4px;  
  box-sizing: border-box;  
  margin-bottom: 10px;  
}  
  
.add-patient-form input[type="radio"] {  
  margin-right: 5px;  
}  
  
.add-patient-form input[type="radio"] + label {  
  margin-right: 10px; /* 稍微增加右侧间距 */  
}  
  
.add-patient-form .btn-add {  
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
  margin-top: 20px;  
}  
  
.add-patient-form .btn-add:hover {  
  background-color: green;  
}  
  
.add-patient-form .warning {  
  color: #999;  
  font-size: 13px;  
  text-align: left;  
  margin-top: 10px;  
}  
  
.add-patient-form .radio-group {  
  display: flex;  
  align-items: center; /* 垂直居中对齐 */  
  margin-bottom: 10px;  
}  
  
.add-patient-form .radio-group label {  
  margin-right: 10px; /* 右侧间距，使标签和单选框之间有空间 */  
}  
  
</style>
