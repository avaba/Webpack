// JS
import './js/'
import 'jquery'


// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')

import AppHeader from './includes/header.vue';

// Vue components (for use in html)
Vue.component('AppHeader', AppHeader)

// Vue init
const app = new Vue({
  el: '#app'
})
