import axios from "axios";
import router from "../router";
// import router from "../router/index";
import store from "../store";
var urlRequest = "https://thawing-reaches-29180.herokuapp.com/";
export default {
  namespaced: true,
  state: {
    Courses: [],
    allUsers:[],
    Course:[],
    Pdfs:[],
    Videos:[],   
    Questions:[],
    Question:{},
    QuestionOwner:"",
    new_course_id:"",
    
  },
  mutations: {
    setUserCourses(state, Courses) {
      state.Courses = Courses;
    },
    setAllUsers(state, Users){
      state.allUsers =  Users;
    },
    setCourse(state,Course){
      state.Course=Course;
    },
    setCourseVideoes(state,Videos){
      state.Videos=Videos;
    },
    setCoursePdfs(state,Pdfs){
      state.Pdfs=Pdfs;
    },
    setCourseName(state,courseName){
      state.courseName=courseName;
    },
    setCourseQuestions(state,Questions){
      state.Questions=Questions;
    },
    setAQuestion(state,Question){
      state.Question=Question;
    },
    successfulAdditionFile(){

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
        let course_data = response.data.data;
       // route to this new course page with the id
        commit("setNewCourseID", course_data.id);
        router.replace("/CourseHome/"+course_data.id);
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
    getCourse({commit},id){
      axios
      .get(urlRequest + "courses/?id="+id)
      .then((response) => {
        let Course = response.data.data;
        commit("setCourse", Course);
        commit("setCourseName",Course[0].name);
        // commit(,Course.);
        // commit(,Course.);


      })
      .catch((error) => {
        let Course = {};
        commit("setCourse", Course);
        console.log(error);
      });
    },
    getCourseVideos({commit},id){
      axios
      .get(urlRequest+"materials/materials_for_specific_course_of_specific_type?course_id="+id+"&material_type=video")
      .then((response)=>{
        let Videos=response.data.data;
        commit ("setCourseVideoes",Videos);
      })
      .catch((error)=>{
        let Videos={};
        commit ("setCourseVideoes",Videos);
        console.log(error);
      });
    },
    getCoursePdfs({commit},id){
      axios
      .get(urlRequest+"materials/materials_for_specific_course_of_specific_type?course_id="+id+"&material_type=file")
      .then((response)=>{
        let Pdfs=response.data;
        commit ("setCoursePdfs",Pdfs);
      })
      .catch((error)=>{
        let Pdfs=[];
        commit ("setCoursePdfs",Pdfs);
        console.log(error);
      });
    },
    getCourseQuestions({commit},id){
      axios.
      get(urlRequest+"qa/course?course_id="+id)
      .then((response)=>{
        let Questions=response.data;
        commit("setCourseQuestions",Questions);
      })
      .catch((error)=>{
        let Questions=[];
        commit("setCourseQuestions",Questions);
        console.log(error);
      });
    },
    getAQuestion({commit},QuestionID){
      axios
      .get(urlRequest+"qa?id="+QuestionID)
      .then((response)=>{
        let Question=response.data;
        commit("setAQuestion",Question);
      })
      .catch((error)=>{
        let Question=[];
        commit("setAQuestion",Question);
        console.log(error);
      });

    },
    addCoursePdf({commit},Pdf){
      const file = new FormData();
      file.append("file", Pdf.SelPdf);
      file.append("course_id",Pdf.Id);
      file.append("name",Pdf.name);
      file.append("material_type","file");
      axios({
        method:"post",
        url:urlRequest+"materials/create-file",
        data:file
      })
      .then(()=>{
        commit ("successfulAdditionFile");
        router.replace("/CourseHome/"+Pdf.Id);

      })
      .catch((error)=>{
        console.log(error);
      });
    },
    addCourseVideo({commit},Video){
      axios
      .post(urlRequest+"materials?course_id="+Video.courseID+"&content="+Video.link+"&material_type=video&name="+Video.name)
      .then(()=>{
        commit ("successfulAdditionFile");
        router.replace("/CourseHome/"+Video.courseID);
      })
      .catch((error)=>{
        console.log(error);
      });
    },
    addQuestion({commit},Question){
      axios
      .post(urlRequest+"/qa",{
        course_id:Question.id,
        content:Question.newQuestion
      })
      .then((response)=>{
        commit("");
        store.dispatch("Course/getCourseQuestions",Question.id);
      })
      .catch((error)=>{
        console.log(error)
      });
    },
    addAnswer({commit},Answer){
      axios
      .post(urlRequest+"qa/reply",{
        qa_id:Answer.questionID,
        content:Answer.newAnswer
      })
      .then((response)=>{
        commit("");
        console.log(response);
        store.dispatch("Course/getAQuestion",Answer.questionID);
      })
      .catch((error)=>{
        console.log(error)
      });
    },
   },
  getters: {
    Courses: state => state.Courses,
    Course:state=>state.Course,
    courseID:state=>state.Course.id,
    courseName:state=>state.courseName,
    courseSyllabus:state=>state.Course.syllabus,
    courseInstructor:state=>state.Course.instructor_user_name,
    coursePdfs:state=>state.Pdfs,
    courseVideos:state=>state.Videos,
    courseQuestions:state=>state.Questions,
    Question:state=>state.Question,
    QuestionOwner:state=>state.QuestionOwner,
  }
};
