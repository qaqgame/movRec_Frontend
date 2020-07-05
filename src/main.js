import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//import animate from 'animate.css'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
import animated from 'animate.css'
import axios from 'axios'
import './assets/icon/iconfont.css'

axios.defaults.withCredentials=true;

Vue.use(VueFullPage);
Vue.use(animated);
//Vue.use(axios);
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
