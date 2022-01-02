<template>
    <div class="conatiner parent px-0">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <form class="signup-form">
            <h1>Add Files</h1>
            <input type="text" placeholder="Type File Name .." v-model="course_pdf_name" required />
            <p v-if="invalid_pdf_name == true" class="invalid" id="invalid_pdf_name">
              This is a required field
            </p>
            
            <input type="file" placeholder="Select pdf .." @change="onPdfUpload" accept="application/pdf" required/>
            <p v-if="empty_pdf == true" class="invalid" id="empty_pdf">
              Please choose a file
            </p>
            <button @click.prevent="addPdfs()" id="signup-btn" type="submit" testid="sign up button" class="costum-btn">
              Add PDF
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
          invalid_pdf_name: false,
          empty_pdf: false,

        }

    },
    methods: {
      onPdfUpload(event){
      this.selectedPdf = event.target.files[0];
    },
      addPdfs(){

        if(this.course_pdf_name == "" || this.selectedPdf == null){
          if(this.course_pdf_name == ""){
          this.invalid_pdf_name = true;
          }else{
            this.invalid_pdf_name = false;
          }

          if(this.selectedPdf == null){
            this.empty_pdf = true;
          }else{
            this.empty_pdf = false;
          }
        }
        else{
        this.invalid_pdf_name = false;
        this.empty_pdf = false;
        console.log("act:",this.$route.params.CourseID);
        let Pdf={
            SelPdf:this.selectedPdf,
            Id:this.$route.params.CourseID,
            name:this.course_pdf_name
        }
         this.$store.dispatch("Course/addCoursePdf",Pdf);
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