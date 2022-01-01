import axios from "axios";
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
      console.log("course id:",Course.id);
    },
    setCourseVideoes(state,Videos){
      state.Videos=Videos;
    },
    setCoursePdfs(state,Pdfs){
      state.Pdfs=Pdfs;
      // console.log(Pdfs);
      // console.log(state.Pdfs);
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
    getCourse({commit},id){
      console.log(id);
      axios
      .get(urlRequest + "courses/?id="+id)
      .then((response) => {
        let Course = response.data.data;
        console.log("responsejs:",Course);
        commit("setCourse", Course);
        console.log("courseName: ",Course[0].name);
        commit("setCourseName",Course[0].name);
        // commit(,Course.);
        // commit(,Course.);


      })
      .catch((error) => {
        let Course = {};
        commit("setCourse", Course);
        console.log(error,"hehehe");
      });
    },
    getCourseVideos({commit},id){
      axios
      .get(urlRequest+"materials/materials_for_specific_course_of_specific_type?course_id="+id+"&material_type=video")
      .then((response)=>{
        let Videos=response.data.data;
        console.log("videos:",response.data);
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
        console.log("pdfs:",Pdfs);
        commit ("setCoursePdfs",Pdfs);
      })
      .catch((error)=>{
        let Pdfs=[];
        commit ("setCoursePdfs",Pdfs);
        console.log(error);
      });
    },
    getCourseQuestions({commit},id){
      console.log("getCourses id:",id);
      axios.
      get(urlRequest+"qa/course?course_id="+id)
      .then((response)=>{
        let Questions=response.data;
        console.log("questions",Questions);
        commit("setCourseQuestions",Questions);
      })
      .catch((error)=>{
        let Questions=[];
        commit("setCourseQuestions",Questions);
        console.log(error);
      });
    },
    getAQuestion({commit},QuestionID){
      console.log(QuestionID);
      axios
      .get(urlRequest+"qa?id="+QuestionID)
      .then((response)=>{
        let Question=response.data;
        console.log("question",Question);
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
      console.log("file",Pdf.Id)
      axios({
        method:"post",
        url:urlRequest+"materials/create-file",
        data:file
      })
      .then(()=>{
        console.log("hehehe");
        commit ("successfulAdditionFile");
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
        console.log(response);
        console.log("addQ:",Question.id)
        store.dispatch("Course/getCourseQuestions",Question.id);
      })
      .catch((error)=>{
        console.log(error)
      });
    },
    addAnswer({commit},Answer){
      console.log("answer:",Answer.newAnswer);
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
    allUsers : state => state.allUsers,
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
