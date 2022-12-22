import {VueElement} from "vue";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from "vuelidate";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './assets/css/styles.css'
import './assets/css/bootstrap.css'
import axios from "axios";


createApp(App).use(router).mount('#app')
VueElement.prototype.$http = axios;
VueElement.config.productionTip = false
VueElement.use(Vuelidate);

import { validationMixin } from 'vuelidate'




import {Parser as Vue} from "acorn";

// eslint-disable-next-line no-unused-vars
var Component = Vue.extend({
    mixins: [validationMixin],
    validations: { }
})
