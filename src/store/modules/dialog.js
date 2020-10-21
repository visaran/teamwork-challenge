import api from "../../api";

const state = () => ({
  isOpen: false
});

const mutations = {
  TOGGLE(state, isOpen) {
    state.isOpen = isOpen;
  }
};

const actions = {};

const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
