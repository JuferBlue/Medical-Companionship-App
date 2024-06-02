<template>
    <div class="footer">
        <div class="footer-seat">
            <div class="footer-list">
                <ul>
                    <li v-for="(v) in footerList" :key="v.path" >
                        <router-link :to="v.path" active-class="select">
                            <i class="iconfont" :class="v.icon"></i>
                            <span>{{ v.title }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>

const footerList = [
    { title: '首页', icon: 'icon-zhuye', path: '/index' },
    { title: '服务', icon: 'icon-fuwu', path: '/shop' },
    { title: '订单', icon: 'icon-dingdan', path: '/order' },
    { title: '消息', icon: 'icon-xiaoxi', path: '/msg' },
    { title: '个人中心', icon: 'icon-wode', path: '/my' }
];
</script>
