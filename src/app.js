import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./routes";

import BaseContainer from "./ui/BaseContainer.vue";
import BaseCard from "./ui/BaseCard.vue";

Vue.component("base-container", BaseContainer);
Vue.component("base-card", BaseCard);

Vue.use(VueRouter);

new Vue({
  router,
  el: "#app",
  render: (h) => h(App),
});
