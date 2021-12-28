import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddCourse from "../views/AddCourse";
import AddActivity from "../views/AddActivity"
import AdminPanel from "../views/AdminPanel";
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
    path: "/admin",
    name: "AdminPanel",
    component: AdminPanel,
  }, 
  {
    path: "/addactivity",
    name: "AddActivity",
    component: AddActivity,
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
