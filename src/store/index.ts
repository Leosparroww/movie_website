import { createStore } from 'vuex'

export default createStore({
  state: {
    page:1
  },
  getters: {
    page:state=>state.page
  },
  mutations: {
  },
  actions: {
    setPage:({state},value)=>state.page =value
  },
  modules: {
  }
})
