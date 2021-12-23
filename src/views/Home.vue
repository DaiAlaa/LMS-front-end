<template>
  <div class="home">
    <NavBar/>
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
      <div class="row">
        <p class="freeCourse">Free Courses </p>
      </div>
      <div class="row justify-content-center">
        <CourseCard
          v-for="course in userCourses"
          :key="course.id"
          :userID="course.user_id"
          :name="course.name"
          :syllabus="course.syllabus"
          :created_at="course.created_at"
          :updated_at="course.updated_at"
        />
      </div> 
    </div>
  </div>
</template>
<style lang="scss" scoped>
// .container{
//   display: flex;
//   flex-wrap: wrap;
// align-content: flex-start;
// }
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
  width: 75%;
  height: 75%;
  margin-left: 60%;
  margin-top: 28%;
  float: right;
}
.freeCourse{
  color: black;
  text-align: left;
  font-size: 32px;
  font-weight: bold;
  margin-top: 6%;
}
</style>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CourseCard from "@/components/CourseCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    NavBar,
    CourseCard
  },
  computed: {
    ...mapGetters({
      //searchResults: "Course/searchResults",
      userCourses: "Course/Courses",
    }),
  },
};
</script>
