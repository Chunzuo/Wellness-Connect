export default {
  state: {
    selectedItem: "Home"
  },
  mutations: {
    updateHeaderItem(state, value) {
      state.selectedItem = value
    }
  }
}