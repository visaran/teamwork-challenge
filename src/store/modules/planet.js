import api from "../../api";

const state = () => ({
  selectedPlanet: {},
  isLoading: false
});

const mutations = {
  SET_PLANET(state, selectedPlanet) {
    state.selectedPlanet = selectedPlanet;
  },
  SET_LOADING(state, isLoading) {
    state.isLoading = isLoading;
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
