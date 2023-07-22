import { createStore } from 'vuex'

export default createStore({
  state: {
    page: 1,
    key: '',
    sort:'',
  },
  getters: {
    page: state => state.page,
    movieSearchKey: state => state.key,
    sortValue:state=>state.sort,
  },
  mutations: {
  },
  actions: {
    setPage: ({ state }, value) => state.page = value,
    setSearchKey: ({ state }, value) => state.key = value,
    setSortBy:({state},value)=>state.sort= value
  },
  modules: {
  }
})
