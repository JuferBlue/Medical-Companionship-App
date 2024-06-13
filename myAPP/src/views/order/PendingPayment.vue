<template>
  <div class="pending-payment">
    <h2>待支付订单</h2>
    <div v-if="orders.length === 0" class="no-orders">
      <p>暂无待支付订单</p>
    </div>
    <div v-else>
      <div class="select-all-container">
        <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" class="checkbox">
        <label>全选</label>
      </div>
      <div v-for="(order, index) in orders" :key="index" class="order-item">
        <input type="checkbox" v-model="selectedOrders" :value="order" class="checkbox">
        <div class="order-details">
          <p class="worker-name">陪诊人员: {{ order.workerName }}</p>
          <p>服务标题: <span class="service-title">{{ order.serviceTitle }}</span></p>
          <p>服务价格: <span class="service-price">￥{{ order.servicePrice }}</span></p>
          <p>预约时间: {{ order.appointmentDate }}</p>
          <p>医院: {{ order.hospital }}</p>
        </div>
        <button @click="cancelOrder(index)" class="cancel-button">取消订单</button>
      </div>
      <div class="coupon-selection">
        <label for="coupon">选择优惠券: </label>
        <select id="coupon" v-model="selectedCoupon" @change="calculateTotalPrice">
          <option value="" disabled selected>选择优惠券</option>
          <option v-for="(coupon, index) in coupons" :key="index" :value="coupon.discount">
            {{ coupon.name }} - {{ coupon.discount }}元
          </option>
        </select>
      </div>
      <div class="total">
        <p>总价: <span class="total-price">￥{{ discountedTotal.toFixed(2) }}</span></p>
        <button @click="checkout" class="checkout-button">结算</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { ref, onMounted, computed, watch } from 'vue';

const orders = ref([]);
const selectedOrders = ref([]);
const selectAll = ref(false);
const coupons = ref([]); // 可用优惠券
const selectedCoupon = ref(null); // 选择的优惠券折扣

onMounted(() => {
  // 从 sessionStorage 中获取未支付的订单列表
  const storedOrders = JSON.parse(sessionStorage.getItem('unpaidOrders')) || [];
  orders.value = storedOrders;
  // 从 localStorage 中获取可用优惠券
  const storedCoupons = JSON.parse(localStorage.getItem('coupons')) || [];
  coupons.value = storedCoupons;
});

// 计算选中订单的总价
const totalPrice = computed(() => {
  return selectedOrders.value.reduce((total, order) => {
    return total + parseFloat(order.servicePrice);
  }, 0);
});

// 计算应用优惠券后的总价
const discountedTotal = computed(() => {
  const discount = selectedCoupon.value ? parseFloat(selectedCoupon.value) : 0;
  const total = totalPrice.value - discount;
  return total > 0 ? total : 0;
});

// 监听 selectedOrders 的变化，更新 selectAll 的状态
watch(selectedOrders, (newVal) => {
  selectAll.value = newVal.length === orders.value.length;
});

const toggleSelectAll = () => {
  if (selectAll.value) {
    selectedOrders.value = [...orders.value];
  } else {
    selectedOrders.value = [];
  }
};

const cancelOrder = (index) => {
  orders.value.splice(index, 1);
  sessionStorage.setItem('unpaidOrders', JSON.stringify(orders.value));
  ElMessage.success('订单已取消');
};

const checkout = () => {
  if (selectedOrders.value.length === 0) {
    ElMessage.warning('请选择要结算的订单');
    return;
  }

  ElMessage.success(`总价: ￥${discountedTotal.value.toFixed(2)}，结算中...`);

  // 将已结算的订单存入 localStorage 中的 processOrders
  const processedOrders = JSON.parse(localStorage.getItem('processOrders')) || [];
  processedOrders.push(...selectedOrders.value);
  localStorage.setItem('processOrders', JSON.stringify(processedOrders));

  // 清空已结算的订单
  orders.value = orders.value.filter(order => !selectedOrders.value.includes(order));
  sessionStorage.setItem('unpaidOrders', JSON.stringify(orders.value));

  // 清空选中订单
  selectedOrders.value = [];

  // 移除已使用的优惠券
  if (selectedCoupon.value) {
    const updatedCoupons = coupons.value.filter(coupon => coupon.discount !== selectedCoupon.value);
    localStorage.setItem('coupons', JSON.stringify(updatedCoupons));
    coupons.value = updatedCoupons;
    selectedCoupon.value = null;
  }
};
</script>

<style scoped>
.pending-payment {
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
}

h2 {
  text-align: center;
  color: #333;
}

.no-orders {
  text-align: center;
  color: #888;
  font-size: 1.2rem;
  margin-top: 2rem;
}

.select-all-container {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.order-item {
  background-color: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  transition: transform 0.2s;
}

.order-item:hover {
  transform: scale(1.02);
}

.checkbox {
  margin-right: 1rem;
  transform: scale(1.2);
  cursor: pointer;
}

.order-details {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.order-details p {
  margin: 0.2rem 0;
  color: #555;
}

.worker-name {
  font-weight: bold;
}

.service-title {
  font-weight: bold;
  color: #333;
}

.service-price {
  font-weight: bold;
  color: #e53935;
}

.cancel-button {
  background-color: #e53935;
  color: white;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;
  margin-left: 1rem;
}

.cancel-button:hover {
  background-color: #d32f2f;
}

.coupon-selection {
  margin: 1rem 0;
}

.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.total-price {
  font-weight: bold;
  color: #e53935;
  font-size: 1.2rem;
}

.checkout-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.checkout-button:hover {
  background-color: #218838;
}
</style>
