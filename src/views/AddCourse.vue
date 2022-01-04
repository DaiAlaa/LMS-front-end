<template>
    <div class="conatiner parent px-0">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <form class="signup-form">
            <h1>Add New Course</h1>

            <input type="text" placeholder="Type Course Name .." v-model="course_name" required />
            <p v-if="invalid_name == true" class="invalid" id="invalid_name">
              This is a required field
            </p>

            <textarea type="text" placeholder="Type Course Syllabus .." v-model="course_syllabse" required></textarea>
            <p v-if="invalid_syll == true" class="invalid" id="invalid_syll">
              This is a required field
            </p>
          
            <button @click.prevent="addCourse()" id="signup-btn" type="submit" testid="sign up button" class="costum-btn">
              Add
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
  overflow: hidden;
  padding-top: 7%;
  // 
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

textarea{

  height: 8em;
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
  text-transform: uppercase;
  white-space: normal;
  float: center;
}

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
  margin-top: calc(100vh/30);
  border:solid #1c1c1f;
  border-radius: 2em;
  border-color:gray ;

}
h1 {
  margin-top: 10%;
}
.start{
  margin-top:5% ;
}

@media screen and (max-width: 600px) {
 .signup-form {
  margin-left: 2%;
  margin-right: 2%;
}
}
</style>
<script>
// import { mapGetters } from "vuex";
export default {
    name:"AddCourse",
    components:{},
    data:function(){
        return{
          course_name: "",
          course_syllabse: "",
          invalid_name: false,
          invalid_syll: false,
        }

    },
    methods: {
      addCourse(){
            
            if(this.course_name == "" || this.course_syllabse == ""){
              if(this.course_name == ""){
              this.invalid_name = true;

              }else{
              this.invalid_name = false;

              }

              if(this.course_syllabse == ""){
                this.invalid_syll = true;

              }else{
                this.invalid_syll = false;
              }
            }
            else{
              this.invalid_name = false;
              this.course_syll = false;
              let new_course = { //ceate new course obj
                  course_name: this.course_name,
                  course_syllabse: this.course_syllabse,
                };
                this.$store.dispatch("Course/addNewCourse", new_course);
            }

         
      },

    },
    // computed:{
    //   ...mapGetters({
    //   isLoggedIn: "Authorization/GetStatus",
    // }),
    // }
}
</script>