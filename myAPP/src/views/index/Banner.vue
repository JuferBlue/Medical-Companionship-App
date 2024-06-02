<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import banner1 from '../../assets/images/index-banner/banner-3.png';
import banner2 from '../../assets/images/index-banner/banner-4.png';

// 创建响应式数组
const bannerList = ref([banner1, banner2]);
const currentIndex = ref(0);
let intervalId = null;
let startX = 0;
let endX = 0;

function next() {
  currentIndex.value = (currentIndex.value + 1) % bannerList.value.length;
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + bannerList.value.length) % bannerList.value.length;
}

function startAutoPlay() {
  intervalId = setInterval(next, 4000);
}

function stopAutoPlay() {
  clearInterval(intervalId);
}

function onTouchStart(e) {
  stopAutoPlay();
  startX = e.touches[0].clientX;
}

function onTouchMove(e) {
  endX = e.touches[0].clientX;
}

function onTouchEnd() {
  if (startX - endX > 50) {
    next();
  } else if (startX - endX < -50) {
    prev();
  }
  startAutoPlay();
}

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<template>
  <div 
    class="banner" 
    @mouseenter="stopAutoPlay" 
    @mouseleave="startAutoPlay"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <div class="banner-container" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <img v-for="(v, i) in bannerList" :key="i" :src="v" class="banner-img">
    </div>
  </div>
</template>

<style scoped>
.banner {
  position: relative;
  overflow: hidden;
  width: 100%;
  background-color: #F5f5f5;

}

.banner-container {
  display: flex;
  transition: transform 0.5s ease;
}


.banner-img {
  min-width: 100%;
  border-radius: 1rem;
}
</style>
