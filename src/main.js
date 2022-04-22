import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugin/element'

// 引入vuex
import store from './store/index'
// 引入全局样式
import './assets/less/index.less'
// 引入axios
import axios from 'axios'
Vue.config.productionTip = false

// 需要将axios挂载到Vue的原型对象上
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
