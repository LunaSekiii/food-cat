import VueRouter from "vue-router";
import axios from "axios";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Restaurant from "../pages/Restaurant";
import Drinks from "../pages/Drinks";

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home",
     
    },
    {
      path: "/home",
      component: Home,
     
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/restaurant",
     
      component: Restaurant,
    },
    {
      path: "/drinks",
      component: Drinks,
    },
  ],
});

