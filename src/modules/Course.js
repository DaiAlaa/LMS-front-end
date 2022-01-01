import axios from "axios";
// import router from "../router/index";
// import store from "../store";
var urlRequest = "https://thawing-reaches-29180.herokuapp.com/";
export default {
  namespaced: true,
  state: {
    Courses: [],
    Course:{},
    new_course_id:"",
    
  },
  mutations: {
    setUserCourses(state, Courses) {
      state.Courses = Courses;
    },
    getCourse(state,Course){
      state.Course=Course;
    },
    setNewCourseID(state,cid){
      state.new_course_id = cid;
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
    addNewCourse({commit},courseobj) {
      axios
      .post( urlRequest +  "courses/", {
        name: courseobj.course_name,
        syllabus: courseobj.course_syllabse,
      })
      .then((response) => {
        ///////////////////response should return course id
        let course_data = response.data;
        console.log("ha")
        console.log(course_data.name);        // route to this new course page with the id
        commit("setNewCourseID", course_data.id);
      })
      .catch((error) => {
        console.log("ha2")
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
    allUsers : state => state.allUsers,
    Course:state=>state.Course,
  }
};
