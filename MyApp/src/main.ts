import "core-js";
import 'font-awesome/css/font-awesome.css';
import './app.scss';

import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

import router from './router';

const app = new Vue({
    el: '#app',
    render: (h: any) => h(App),
    router,
    vuetify,
} as any);
