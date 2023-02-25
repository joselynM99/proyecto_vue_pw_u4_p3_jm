import { createApp } from 'vue'
import App from './App.vue'
//import store from './store'
import router from '@/router/router'

import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(router).mount('#app')

