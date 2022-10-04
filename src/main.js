import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import BootstrapVue3 from 'bootstrap-vue-3'

import useFontAwesome from './utils/hooks/useFontAwesome';
const library = useFontAwesome();

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import './assets/main.css'


axios.defaults.baseURL = 'https://magisterstrefaapi.azurewebsites.net/';
axios.defaults.headers = {"Access-Control-Allow-Origin": "*"};

const app = createApp(App)

app.use(router)
app.use(VueAxios,axios)
app.use(BootstrapVue3)
app.component('font-awesome-icon',FontAwesomeIcon)
app.mount('#app')
