import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddCourse from "../views/AddCourse";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/addcourse",
    name: "AddCourse",
    component: AddCourse,
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
