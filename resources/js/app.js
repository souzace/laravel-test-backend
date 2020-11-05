/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

import './bootstrap'
import Vue from 'vue'
import vuetify from '@/js/vuetify'

import Router from '@/js/routes.js'
import App from '@/js/views/App'

const app = new Vue({
    el: '#app',
    vuetify,
    router: Router,
    render: h => h(App)
});

export default app;