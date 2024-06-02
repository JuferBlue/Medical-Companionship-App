import {createRouter,createWebHashHistory} from 'vue-router'

// 导入vue组件
// import Home from '../components/Home.vue'
import Index from '../views/index/Index.vue';

// 创建路由对象,声明路由规则
const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:()=>import('../views/IntroPage.vue'),
            meta:{fullScreen:true}
        },
        {
            name:'index',
            path:'/index',
            component:()=>import('../views/index/Index.vue')
        },
        {
            path:'/shop',
            component:()=>import('../views/shop/Index.vue')
        },
        {
            path:'/order',
            component:()=>import('../views/order/Index.vue')
        },
        {
            path:'/msg',
            component:()=>import('../views/msg/Index.vue')
        },
        {
            path:'/my',
            component:()=>import('../views/my/Index.vue'),
        },
        {
            path:'/login',
            name:'login',
            component:()=>import('../views/my/Login.vue'),
            meta:{fullScreen:true}
        },
        {  
            path: '/register',  
            name: 'register',  
            component:()=>import('../views/my/Register.vue'),  
        },
        {
            path:'/patientList',
            component:()=>import('../views/my/patient_management/PatientList.vue'),
            meta:{fullScreen:true}
        },
        {
            path:'/addPatient',
            component:()=>import('../views/my/patient_management/AddPatient.vue'),
            meta:{fullScreen:true}
        },
        {
            path:'/addressList',
            component:()=>import('../views/my/address_management/AddressList.vue'),
            meta:{fullScreen:true}
        },
        {
            path:'/addAddress',
            component:()=>import('../views/my/address_management/AddAddress.vue'),
            meta:{fullScreen:true}
        }
    ]

})

// 对外暴露路由对象
export default router;