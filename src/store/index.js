import Vue from 'vue'
import Vuex from 'vuex'
// 引入vuex子模块
import tab from './tab/index'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tab
  }
})
