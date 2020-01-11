import Vue from "vue";
import VueRouter from "vue-router";
import EnterView from "../views/Enter.vue";
const LoginView = () =>
  import(/* webpackChunkName: "loginview" */ "../views/Login.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "enter",
    component: EnterView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
