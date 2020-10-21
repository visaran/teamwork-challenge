import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";
import People from "../views/People";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/people",
      name: "People",
      component: People
    }
  ]
});
