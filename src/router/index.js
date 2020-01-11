import Vue from "vue";
import VueRouter from "vue-router";
import EnterView from "../views/Enter.vue";
const SigninView = () =>
  import(/* webpackChunkName: "signinview" */ "../views/Signin.vue");
const SignupView = () =>
  import(/* webpackChunkName: "signupview" */ "../views/Signup.vue");
const MainView = () =>
  import(/* webpackChunkName: "mainview" */ "../views/Main.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "enterview",
    component: EnterView
  },
  {
    path: "/signin",
    name: "signinview",
    component: SigninView
  },
  {
    path: "/signup",
    name: "signupview",
    component: SignupView
  },
  {
    path: "/main",
    name: "mainview",
    component: MainView
  },
  {
    path: "*",
    redirect: {
      name: "enterview"
    }
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
