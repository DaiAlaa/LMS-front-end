<template>
    <div class="conatiner parent px-0">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <form class="signup-form">
            <h1>Add Videos</h1>
            <input type="text" placeholder="Type video Name .." v-model="course_video_name" required />
            <p v-if="invalid_video_name == true" class="invalid" id="invalid_video_name">
              This is a required field
            </p>            
            <input type="text" placeholder="Paste video link .." v-model="course_video_link" required />
            <p v-if="empty_video_link == true" class="invalid" id="empty_video_link">
              This is a required field
            </p>  
            <p v-if="invalid_video_link == true" class="invalid" id="invalid_video_link">
              Invalid link
            </p>  
            <button @click.prevent="addVideoLink()" id="signup-btn" type="submit" testid="sign up button" class="costum-btn">
              Add Video
            </button>
          </form>
        </div>
      </div>
    </div>
</template>
<style lang="scss" scoped>

.parent{
  background-color:darkblue;
  height:100vh;
  overflow-x: hidden;
  padding-top: 4%;
  padding-bottom: 5%;
  // width: 100vw;
  // background: fixed;
}
input {
  height: 3em;
  padding: 0.625em 0.625em 0.625em;
  border-radius: 2px;
  border: 1px solid #dfe0e6;
  color: #1c1c1f;
  width: 90%;
  align-items: center;
  display: block;
  margin-left: 5%;
  margin-bottom: 1em;
  // background-color: transparent;
}
.gender{
  height:1.5em;
}
.costum-btn {
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  padding: 16px 48px 18px;
  margin-bottom: 14px;
  margin-top: 31px;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  transition-duration: 0.3s;
  border-width: 0;
  letter-spacing: 2px;
  /* min-width: 160px; */
  text-transform: uppercase;
  white-space: normal;
  float: center;
}
  // -webkit-appearance: none;
  // -moz-appearance: none;
.highlight {
  color: #0f1549;
  display: inline-block;
}
.highlight:hover {
  color: #0f1549;
  cursor: pointer;
}

.invalid {
  color: #bd3200;
  text-align: left;
  align-items: center;
  display: block;
  margin-left: 5%;
  margin-bottom: 1em;
}
#signup-btn {
  background-color: #0f1549;
  max-width: 320px;
  width: 100%;
}
#signup-btn:hover {
  background-color: #0f1549;
}
label{
  margin-top:1em;
}
.signup-form {
  background-color: white;
  margin-top: 8em;
  border:solid #1c1c1f;
  border-radius: 2em;
  border-color:gray ;
  padding-top: 2%;
  padding-bottom: 2%;

}
h1 {
  margin-top: 3%;
}
.start{
  margin-top:5% ;
}
</style>
<script>
/* eslint-disable */
import { mapGetters } from "vuex";
export default {
    name:"AddActivity",
    components:{},
    data:function(){
        return{
          course_pdf_name: "",
          course_video_link: "",
          course_video_name: "",
          selectedPdf:null,
          invalid_video_name: false,
          empty_video_link: false,
          invalid_video_link:false,
        }

    },
    methods: {
      //^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$
      addVideoLink(){
        var reg = new RegExp("^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$");
         if(this.course_video_name == "" || this.course_video_link == "" || !reg.test(this.course_video_link)){
          if(this.course_video_name == ""){
          this.invalid_video_name = true;
          }else{
            this.invalid_video_name = false;
          }
          if(this.course_video_link == ""){
            this.empty_video_link = true;
          }else{
            this.empty_video_link = false;
          }

          if(!reg.test(this.course_video_link) && !this.empty_video_link){
            this.invalid_video_link = true;
          }else{
            this.invalid_video_link = false;
          }
        }
        else{
        this.invalid_video_link = false;
        this.invalid_video_name = false;
        this.empty_video_link = false
        console.log("act:",this.$route.params.CourseID);
        let Video={
            link:this.course_video_link,
            courseID:this.$route.params.CourseID,
            name:this.course_video_name
        }
      this.$store.dispatch("Course/addCourseVideo",Video);
        }
      },

    },
    computed:{
      ...mapGetters({
      isLoggedIn: "Authorization/GetStatus",
      courseID:"Course/courseID",
    }),
    }
}
</script>