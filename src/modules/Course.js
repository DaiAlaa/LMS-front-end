import axios from "axios";
// import router from "../router/index";
import store from "../store";
var urlRequest = "https://thawing-reaches-29180.herokuapp.com/";
export default {
  namespaced: true,
  state: {
    Courses: [],
    allUsers:[],
    Course:{},
    
  },
  mutations: {
    setUserCourses(state, Courses) {
      state.Courses = Courses;
    },
    setAllUsers(state, Users){
      state.allUsers =  Users;
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
    addNewCourse(course) {
      axios
      .post( urlRequest +  "courses/", {
        course_name: course.course_name,
        course_syllabus: course.course_syllabus,
      })
      .then((response) => {
        ///////////////////response should return course id
        let course_id = response.data;
        console.log(course_id)
        // route to this new course page with the id
        // commit("mutation name", par_name);
      })
      .catch((error) => {
        console.log(error);
      });
    },
    addNewCourseFile(fileObj) {
      axios
      .post( urlRequest +  "materials/create-file", {
        name: fileObj.course_pdf_name,
        material_type: "file",

     })
      .then((response) => {
        ///////////////////response should return course id
        let course_data = response.data;
        console.log(course_data);
        // route to this new course page with the id
        // commit("mutation name", par_name);
      })
      .catch((error) => {
        console.log(error);
      });
    },

    addNewCourseVideo(videoObj) {
      axios
      .post( urlRequest +  "courses/activity", {
        content: videoObj.course_video_link,
        name: videoObj.course_video_name,
        material_type: "video", //video or vedio?
      })
      .then((response) => {
        ///////////////////response should return course id
        let course_data = response.data;
        console.log(course_data);
        // route to this new course page with the id
        // commit("mutation name", par_name);
      })
      .catch((error) => {
        console.log(error);
      });
    },
    showAllUsers({ commit }) {
      axios
        .get(urlRequest + "users/index")
        .then((response) => {
          let Users = response.data;
          if (response.status != 200) {
            Users = [];
          }
          commit("setAllUsers", Users);
          console.log(response);
        })
        .catch((error) => {
          let Users = [];
          commit("setAllUsers", Users);
          console.log(error);
        });
    },
    elevateLearner(userId) {
      axios
        .update(urlRequest + "Admin/elevate?userId=" + userId)
        .then(() => {
          store.dispatch("Course/showAllUsers"); 
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCourse({commit},course_id){
      axios
      .get(urlRequest + "/courses/?id="+course_id)
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
    allUsers : state => state.allUsers,
    Course:state=>state.Course,
  }
};
