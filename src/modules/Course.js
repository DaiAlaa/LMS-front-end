import axios from "axios";
// import router from "../router/index";
var urlRequest = "https://thawing-reaches-29180.herokuapp.com/";
export default {
  namespaced: true,
  state: {
    Courses: [],
    Course:{},
    
  },
  mutations: {
    setUserCourses(state, Courses) {
      state.Courses = Courses;
    },
    getCourse(state,Course){
      state.Course=Course
    }
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
    getCourse({commit}){
      axios
      .get(urlRequest + "")
      .then((response) => {
        let Course = response.data;
        commit("getCourse", Course);
      })
      .catch((error) => {
        let Course = {};
        commit("getCourse", Course);
        console.log(error);
      });
    }
    
   },
  getters: {
    Courses: state => state.Courses,
    Course:state=>state.Course,
  }
};
