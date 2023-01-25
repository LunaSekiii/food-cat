import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import axios from "axios";
import router from "./routrer";
import Cookies from "js-cookie";
import VModal from 'vue-js-modal'



Vue.config.productionTip = false;
Vue.use(VModal)
Vue.use(VueRouter);
Vue.prototype.$axios = axios;

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");


// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = "JWT " + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
