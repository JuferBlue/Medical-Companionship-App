import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//引入path模块
import path from "path";
// console.log(path)
// https://vitejs.dev/config/
//创建一个文件读取方法
function resolve(url){
  return path.resolve(__dirname,url)
}
export default defineConfig({
  //配置@别名
  resolve:{
    alias:{
      "@":resolve("./src"),
    }
  },
  plugins: [vue()],
})
