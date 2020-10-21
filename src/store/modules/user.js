import api from "../../api";

const state = () => ({
  all: []
});

const mutations = {
  GET_ALL(state, all) {
    state.all = all;
  }
};

const actions = {
  getAll({ commit }) {
    return api.getUsers().then(res => {
      commit("GET_ALL", res.data.results);
    });
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
