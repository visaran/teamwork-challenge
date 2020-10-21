import Vue from "vue";
import App from "./App.vue";
import "core-js/stable";
import "regenerator-runtime/runtime";
import vuetify from "./plugins/vuetify";
import store from "./store";
import router from "./router";

new Vue({
  vuetify,
  el: "#app",
  store,
  router,
  render: h => h(App)
});
