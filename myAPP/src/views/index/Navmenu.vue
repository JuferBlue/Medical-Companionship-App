<script setup>
const navmenulist = [
    {title:'全天陪诊',icon:'#icon-taiyang'},
    {title:'夜间陪诊',icon:'#icon-zhudaohang-yeshenicon'},
    {title:'接送服务',icon:'#icon-weituojiesong'},
    {title:'挂号咨询',icon:'#icon-guahao'},
    {title:'代办问诊',icon:'#icon-pingtaiyoushi'},
    {title:'取送报告',icon:'#icon-tijianbaogao'},
    {title:'代办买药',icon:'#icon-zhuye-yaodian'},
    {title:'代约检查',icon:'#icon-jiancha'}
]

</script>

<template>
    <div class="navmenu">
        <ul>
            <li v-for="(v,i) in navmenulist" :key="i">
                <svg class="iconfont">
                    <use :xlink:href="v.icon"></use>
                </svg>
                <span>{{ v.title }}</span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.navmenu ul{
    display: flex;
    flex-wrap: wrap;
}
.navmenu ul li{
    flex: 0 1 25%;
    text-align: center;
    margin: 1rem 0;
}
.navmenu ul li span{
    display: block;
}
.navmenu ul li svg{
    width: 5rem;
    height:5rem;
}



</style>
