import Vue from 'vue'
//import Store from '/stores/store'
import './assets/scss/main.scss'
import App from './App'
import VueRouter from 'vue-router'
require('./utils/loader')

Vue.use(VueRouter)

import routes from './router'

let router = new VueRouter({routes})

new Vue({
	el: '#app',
	render: h => h(App),
	router
})
