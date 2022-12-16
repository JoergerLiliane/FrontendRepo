import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './assets/css/styles.css'
import './assets/css/bootstrap.css'


createApp(App).use(router).mount('#app')
