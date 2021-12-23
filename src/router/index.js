import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import UserProfile from "../views/UserProfile.vue";
import main from "../views/main.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: main,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "UserProfile",
        component: UserProfile,
      },
    ]
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/LogIn",
    name: "LogIn",
    component: LogIn,
  }, 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
