import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Pets from "./views/Pets";

Vue.use(Vuetify);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "", component: Home },
  { path: "/pets", component: Pets }
];

const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
