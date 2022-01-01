<template>
  <div class="home">
    <router-link to="/addcourse"  v-if="UserType == 'admin' || UserType == 'instructor'">
      <button class="addCourse">Add Course
        <i class="fa fa-plus"></i>
      </button>
    </router-link>
    <router-link to="/admin" v-if="UserType == 'admin'">
      <button class="adminPanel">Admin Panel
        <i class="fa fa-plus"></i>
      </button>
    </router-link>
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <p class="title">Learn without limit</p>
          <p class="motivate">If you can dream it, you can do it
            <span class="walt"> - Walt Disney</span>
          </p>
        </div>
        <div class="col-sm-6">
          <img src="../assets/3.png" class="image"/>
        </div>
      </div>
      <div class="row" v-if="GetStatus == 'success'">
        <p class="freeCourse">Free Courses </p>
      </div>
      <div v-if="GetStatus == 'success'" class="row justify-content-center" >
        <CourseCard
          v-for="course in userCourses.data"
          :key="course.id"
          :courseid="course.id"
          :name="course.name"
          :instructor_id="course.instructor_id"
          :instructor_user_name="course.instructor_user_name"
          :instructor_first_name="course.instructor_first_name"
          :instructor_last_name="course.instructor_last_name"
        />
      </div> 
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home{
  padding-bottom: 50px;
}
.title {
  color: black;
  margin-top: 50%;
  font-size: 42px;
  font-weight: bold;
  font-family: cursive;
  text-align: left;
}
.motivate{
  color: black;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}
.walt {
  color: black;
  font-size: 14px;
  text-align: left;
}
.image{
  width: 100%;
  height: 85%;
  margin-left: 60%;
  margin-top: 18%;
  float: right;
}
.freeCourse{
  color: black;
  text-align: left;
  font-size: 34px;
  font-weight: bold;
  font-family: cursive;
  // margin-top: 3%;
}
.addCourse{
  margin-top: 8%;
  width:10%;
  height: 38px;
  border: none;
  border-radius: 20px;
  text-decoration: none;
  outline: none;
  background-image: linear-gradient(to right, darkmagenta , rgb(255, 190, 220));
  color: white;
  margin-right: 5%;
  position: absolute;
  margin-left: 38%;
}
.adminPanel{
  margin-top: 12%;
  width:10%;
  height: 38px;
  border: none;
  border-radius: 20px;
  text-decoration: none;
  outline: none;
  background-image: linear-gradient(to right, darkmagenta , rgb(255, 190, 220));
  color: white;
  margin-right: 5%;
  position: absolute;
  margin-left: 38%;
}
</style>
<script>
// @ is an alias to /src
import CourseCard from "@/components/CourseCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    CourseCard
  },
  mounted() {
    this.$store.dispatch("Course/showUserCourses");
  },
  computed: {
    ...mapGetters({
      //searchResults: "Course/searchResults",
      userCourses: "Course/Courses",
      GetStatus: "Authorization/GetStatus",
      UserType: "Authorization/UserType"
    }),
  },
};
</script>
