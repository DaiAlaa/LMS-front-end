import axios from "axios";
import router from "../router/index";
var urlRequest = "https://thawing-reaches-29180.herokuapp.com/";
export default {
  namespaced: true,
  state: {
    Courses: [],
    
  },
  mutations: {
    setUserCourses(state, Courses) {
      state.Courses = Courses;
    },
  },
  actions: {
    showUserCourses({ commit }) {
      axios
        .get(urlRequest + "courses/index")
        .then((response) => {
          let Courses = response.data;
          if (response.status != 200) {
            Courses = [];
          }
          commit("setUserCourses", Courses);
        })
        .catch((error) => {
          let Courses = [];
          commit("setUserCourses", Courses);
          console.log(error);
        });
    },
    
   },
  getters: {
    Courses: state => state.Courses,
    
  }
};
