import {createRouter,createWebHashHistory} from 'vue-router'

// 导入vue组件
// import Home from '../components/Home.vue'
import Index from '../views/index/Index.vue';

// 创建路由对象,声明路由规则
const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        //引导页的路由
        {
            path:'/',
            component:()=>import('../views/IntroPage.vue'),
            meta:{fullScreen:true}
        },
        //底部导航栏的路由
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
            component:()=>import('../views/order/Index.vue'),
            children:[
                  {
                    path: '',
                    redirect: '/order/all-orders'
                  },
                  {
                    path: 'all-orders',
                    name: 'AllOrders',
                    component: () => import('../views/order/AllOrders.vue')
                  },
                  {
                    path: 'pending-payment',
                    name: 'PendingPayment',
                    component: () => import('../views/order/PendingPayment.vue')
                  },
                  {
                    path: 'progress-orders',
                    name: 'ProgressOrders',
                    component: () => import('../views/order/ProgressOrders.vue')
                  },
                  {
                    path: 'pending-review',
                    name: 'PendingReview',
                    component: () => import('../views/order/PendingReview.vue')
                  }
            ]
        },
        {
            path:'/msg',
            component:()=>import('../views/msg/Index.vue')
        },
        {
            name:'my',
            path:'/my',
            component:()=>import('../views/my/Index.vue'),
        },
        //登录注册模块的路由
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
            meta:{fullScreen:true}  
        },
        //就诊人管理模块的路由
        {
            name:'patientList',
            path:'/patientList',
            component:()=>import('../views/my/patient_management/PatientList.vue'),
            meta:{fullScreen:true}
        },
        {
            name:'addPatient',
            path:'/addPatient',
            component:()=>import('../views/my/patient_management/AddPatient.vue'),
            meta:{fullScreen:true}
        },
        //地址管理模块的路由
        {
            name:'addressList',
            path:'/addressList',
            component:()=>import('../views/my/address_management/AddressList.vue'),
            meta:{fullScreen:true}
        },
        {
            path:'/addAddress',
            component:()=>import('../views/my/address_management/AddAddress.vue'),
            meta:{fullScreen:true}
        }
        //帮助中心的路由
        ,
        {
            path:'/help',
            component:()=>import('../views/my/help_center/HelpCenter.vue'),
            meta:{fullScreen:true}
        },
        //卡券模块的路由
        {
            //卡券兑换模块
            path:'/exchange',
            component:()=>import('../views/my/coupon/CouponExchange.vue'),
            meta:{fullScreen:true}
        },
        {
            //卡券列表模块
            path:'/couponList',
            component:()=>import('../views/my/coupon/CouponList.vue'),
            meta:{fullScreen:true}
        },
        //主页医院路由
        {
            path:'/hospitalDetail',
            component:()=>import('../views/index/hospital_introduction/HospitalDetail.vue'),
            meta:{fullScreen:true}
        },
        //服务详情页路由
        {
            path:'/serviceDetail',
            component:()=>import('../views/shop/service_detail/ServiceDetail.vue'),
            meta:{fullScreen:true}
        },
        //服务表单页面
        {
            path: '/service-form',
            component:()=>import('../views/shop/service_detail/ServiceForm.vue'),
            meta:{fullScreen:true}
        },
        // 订单评价页面路由
        {
            name: 'OrderReview',
            path: '/order-review',
            component: () => import('../views/order/Review.vue'),
            meta: { fullScreen: true }
        },
        // 陪诊人员详情页面路由
        {
            path: '/worker-detail',
            name: 'WorkerDetail',
            component: () => import('../views/shop/service_detail/WorkerDetail.vue'),
            meta: { fullScreen: true }
        },
        //设置页面路由
        {
            path:'/settings',
            component:()=>import('../views/my/setting_page/Setting.vue'),
            meta:{fullScreen:true}
        },
        //联系客服页面
        {
            path:'/contact',
            component:()=>import('../views/my/contact_page/Contact.vue'),
            meta:{fullScreen:true}
        }
    ]

})

// 对外暴露路由对象
export default router;