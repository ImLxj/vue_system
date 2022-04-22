export default {
  state: {
    isCollapse: false
  },
  mutations: {
    callCollapse(state) {
      state.isCollapse = !state.isCollapse
    }
  }
}
