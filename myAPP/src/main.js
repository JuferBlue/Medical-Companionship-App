import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import App from './App.vue'
//导入router模块
import router from './routers/router.js'
//引入css
import './assets/css/common.css'
import './assets/css/index.css'
import './assets/font/iconfont.css'
import './assets/font/iconfont.js'
import 'element-plus/dist/index.css'

let app = createApp(App)
//绑定路由对象
app.use(router)
app.use(ElementPlus)
//挂在试图
app.mount("#app")