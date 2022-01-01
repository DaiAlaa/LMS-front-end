<template>
    <div class="conatiner parent px-0">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <form class="signup-form">
            <h1>Add New Course</h1>

            <input type="text" placeholder="Type Course Name .." v-model="course_name" required />
            <textarea type="text" placeholder="Type Course Syllabus .." v-model="course_syllabse" required></textarea>
            <!-- <p v-if="invalid_email == true" class="invalid" id="invalid_email">
              The email address you supplied is invalid.
            </p> -->
          
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

        }

    },
    methods: {
      addCourse(){
        // this.trigger_validation = true;
        // this.can_submit = true;
            let new_course = { //ceate new course obj
            course_name: this.course_name,
            course_syllabse: this.course_syllabse,
          };
          console.log(new_course);
          this.$store.dispatch("Course/addNewCourse", new_course);

          // this.$router.replace("/");
          // this.$router.replace("/");
      },

    },
    // computed:{
    //   ...mapGetters({
    //   isLoggedIn: "Authorization/GetStatus",
    // }),
    // }
}
</script>