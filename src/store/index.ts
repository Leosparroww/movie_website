import { createStore } from 'vuex'

export default createStore({
  state: {
    page: 1,
    key:'',
  },
  getters: {
    page: state => state.page,
    movieSearchKey:state=>state.key
  },
  mutations: {
  },
  actions: {
    setPage: ({ state }, value) => state.page = value,
    setSearchKey:({state},value)=>state.key = value,
  },
  modules: {
  }
})
