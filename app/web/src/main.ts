/*
 * @Date: 2024-11-12 15:41:35
 * @LastEditors: kongaobo tkfor@foxmail.com
 * @LastEditTime: 2024-11-20 14:39:20
 */
import { createApp } from 'vue';

import App from './app.vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Tk from "@tk/components"


const app = createApp(App);
app.use(ElementPlus)

app.use(Tk)
app.mount('#app');


