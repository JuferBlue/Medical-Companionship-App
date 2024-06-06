<template>
    <div class="sysMsg">
        <div class="item">
            <svg class="iconfont">
                <use xlink:href="#icon-xitongtongzhi"></use>
            </svg>
            <span>系统消息</span>
        </div>
        <div class="item">
            <svg class="iconfont">
                <use xlink:href="#icon-zaixiankefu1"></use>
            </svg>
            <span>客服消息</span>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.sysMsg{
    height: 9rem;
    display: flex;
    justify-content: space-around;
    padding: px;
    margin: 1rem;
    border-radius: 0.5rem;
    background-color: #ffffff;
}
.item{
    /* flex:  25%; */
    margin: 1rem 0;
}
.item span{
    display: block;
}

.item svg{
    width: 5rem;
    height: 5rem;
}


</style>