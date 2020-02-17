const mutations = {
  CHANGESHOWADDLIST(state) {
    state.toggleShowAddList = !state.toggleShowAddList;
  },
  CHANGESHOWUSERDROPDOWN(state) {
    state.toggleShowUserDropDown = !state.toggleShowUserDropDown;
  },
};
export default mutations;
