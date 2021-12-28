import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddCourse from "../views/AddCourse";

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
