import './assets/main.css'
import 'reset-css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'css-doodle';
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
const app = createApp(App)
// 注册 css-doodle 为自定义元素
app.config.globalProperties.isCustomElement = (tag: string) => tag.startsWith('css-doodle');
app.use(createPinia())
app.use(router)

app.mount('#app')
