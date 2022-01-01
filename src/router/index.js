import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddCourse from "../views/AddCourse";
import AddActivity from "../views/AddActivity"
import AdminPanel from "../views/AdminPanel";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import CourseHome from "../views/CourseHome.vue";
import Question from "../views/Question.vue";
import Embed from 'v-video-embed'
import UserProfile from "../views/UserProfile.vue";
import main from "../views/main.vue";
Vue.use(VueRouter);
Vue.use(Embed);
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
      {
        path: "/addcourse",
        name: "AddCourse",
        component: AddCourse,
      },
      {
        path: "/CourseHome/:CourseID",
        name: "CourseHome",
        component: CourseHome,
      },
      {
        path: "/addactivity/:CourseID",
        name: "AddActivity",
        component: AddActivity,
      },
      {
        path: "/Question/:QuestionID",
        name: "Question",
        component: Question,
      },
      
    ]
  },

  
  {
    path: "/admin",
    name: "AdminPanel",
    component: AdminPanel,
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
