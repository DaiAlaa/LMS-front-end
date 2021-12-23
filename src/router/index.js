import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import CourseHome from "../views/CourseHome.vue";
import Embed from 'v-video-embed'
Vue.use(VueRouter);
Vue.use(Embed);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
  {
    path: "/CourseHome",
    name: "CourseHome",
    component: CourseHome,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
