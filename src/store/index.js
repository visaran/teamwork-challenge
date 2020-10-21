import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/user";
import planet from "./modules/planet";
import dialog from "./modules/dialog";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    user,
    planet,
    dialog
  },
  strict: debug
});
