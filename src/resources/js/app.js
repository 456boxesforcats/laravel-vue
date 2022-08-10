import './bootstrap';
import { createApp } from 'vue';
import router from './router'
import VueAxios from 'vue-axios';
import axios from 'axios';
import BootstrapVue3 from 'bootstrap-vue-3'
import VueLoadersBallBeat from 'vue-loaders';

import App from './App.vue';

// Ui components
import BaseInput from "./components/ui/BaseInput.vue";
import BaseTextarea from "./components/ui/BaseTextarea.vue";

// Redirect to login page if unauthenticated
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (401 === error.response.status) {
        window.location.href = '/login';
    }
    return Promise.reject(error);
});

createApp({})
    .use(VueAxios, axios)
    .use(router)
    .use(BootstrapVue3)
    .use(VueLoadersBallBeat)
    .component('base-input', BaseInput)
    .component('base-textarea', BaseTextarea)
    .component('app-component', App)
    .mount('#app')
