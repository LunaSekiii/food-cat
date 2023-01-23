import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import axios from "axios";
import router from "./routrer";


Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.prototype.$axios = axios;

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
