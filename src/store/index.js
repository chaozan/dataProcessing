import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    admin: [
      {
        userName: 'admin',
        password: '123456',
        title: '管理员',
        iphone: '15127998381',
        id: '1'
      }
    ],
    userState: '0'
  },
  mutations: {
    alterState (state) {
      state.userState = '1'
    },
    addAdmin (state, formInline) {
      state.admin.push(formInline)
    }
  },
  actions: {
  },
  modules: {
  }
})
