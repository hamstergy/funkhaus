export const state = () => ({
  menuOpened: false,
  title: ''
})

export const mutations = {
  SET_MENU(state, data) {
    state.menuOpened = data
  },
  SET_TITLE(state, data) {
    state.title = data
  }
}
