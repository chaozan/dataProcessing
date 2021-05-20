import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import requests from './api/axios'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.prototype.rq = requests
Vue.use(ViewUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
