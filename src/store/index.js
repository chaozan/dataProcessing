import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: 'admin',
    password: '123456',
    userState: '未登录'
  },
  mutations: {
    alterState (state) {
      state.userState = '已登录'
    }
  },
  actions: {
  },
  modules: {
  }
})
