import VueRouter from "vue-router";
import Vue from "vue";

import Home from "./pages/Home.vue";
import Category from "./pages/Category.vue";
import SearchResult from "./pages/SearchResult.vue";

Vue.use(VueRouter);

var router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
  mode: "history",
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/category/:id", component: Category, name: "category" },
    { path: "/search-result", component: SearchResult, name: "search" },
  ],
});

export default router;
