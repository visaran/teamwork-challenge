import moment from "moment-timezone";
import api from "../../api";

const state = () => ({
  all: [],
  count: 0
});

const mutations = {
  SET_USERS(state, all) {
    state.all = all;
  },
  SET_COUNT(state, count) {
    state.count = count;
  }
};

const actions = {
  async getAll({ commit }, { page, search }) {
    return api.getUsers(page, search).then(async res => {
      commit("SET_COUNT", res.data.count);
      const results = await Promise.all(
        res.data.results.map(async item => {
          const { data } = await api.getPlanetByUrl(item.homeworld);
          return {
            ...item,
            planet: data,
            created: moment
              .tz(item.created, "Europe/Dublin")
              .format("DD/MM/YY hh:mm A"),
            edited: moment
              .tz(item.edited, "Europe/Dublin")
              .format("DD/MM/YY hh:mm A")
          };
        })
      );
      commit("SET_USERS", results);
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
