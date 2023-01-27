import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import axios from "axios";
import router from "./routrer";
import Cookies from "js-cookie";
import VModal from 'vue-js-modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';





Vue.config.productionTip = false;
Vue.use(ElementUI)
Vue.use(VueRouter);
Vue.prototype.$axios = axios;

Vue.use(VModal, {
  dialog: true,
  dynamic: true
})
new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");


// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization =token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
