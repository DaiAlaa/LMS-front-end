<template>
    <div class="conatiner parent px-0">
        <div class= "courseInfo row" >
            <div class="col-sm-3">
                <h1>
                    {{this.course[0].name}}
                </h1>
                <p>
                    {{this.course[0].syllabus}}
                </p>
                <h2>
                    {{this.course[0].instructor_user_name}}
                </h2> 
            </div>
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <img src="../assets/3.png" class="image"/>
            </div>
        </div>
        <hr/>
        <div class = "row pdfs" >
            <h1>PDF Materials</h1>
                <div v-if="coursePdfs.data.length!=0">
                <a class="pp" v-for="pdf in coursePdfs.data" :key="pdf.material.id" :href="pdf.file">
                    {{pdf.material.name}}
                </a>
                </div>
            <router-link :to="{path: '/addactivity/'+this.course[0].id}">
                <button v-if="this.UserType=='admin' || this.UserID==this.course[0].instructor_id">Add PDF</button>
            </router-link>
                
        </div>
        <hr/>
        <div class= "videos">
            <h1>Course Videos</h1>
            <div v-if="coursePdfs.data.length!=0">
                <!-- it takes normal or embed url -->
            <video-embed   v-for="video in courseVideos" :key="video.id" :src="video.content" target="_blank">
                <li  >
                    <!-- {{video.name}} -->
                </li>
                </video-embed>
            </div>
                <!-- another way display videos from youtube  it takes embed url only  -->
                <!-- <iframe  width="420" height="315" src="https://www.youtube.com/embed/AAbUfZD_09s"></iframe> -->
                <router-link :to="{path: '/addactivity/'+this.course[0].id}">
                    <button  v-if="this.UserType=='admin' || this.UserID==this.course[0].instructor_id">Add Video</button>
                </router-link>
                
        </div>
        <hr/>
        <div class = "questions">
            <h1>Course Questions</h1>
            
                <router-link class="question" v-for="question in courseQuestions.data" :key="question.id"  :to="{path: '/Question/'+question.id}">
                    <div class="question" >
                        <h4>                
                            {{question.content}}
                        </h4>
                        <p>
                           by: {{question.learner_user_name}}
                        </p>
                    </div>
                </router-link>
            
            <input type="text" v-model="newQuestion" placeholder="Add your Question ...."  class="Qs"/>
            <button @click="addQuestion()"  type="submit" class="costum-btn">Submit</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    
    .parent{
        background-color:white;
        height:100%;
        width: 100vw;
        overflow: hidden;
        // background: fixed;
    }
    .courseInfo{
        margin-top:5em;
        margin-bottom: 0em;
        // width: 100%;
        // height: 100%;
        // padding: 0%;
    }
    h1,h2,h4{
       font-weight: bold;
       font-family:"Times New Roman";
       margin-left: 1em;
       color:black;
       
    }
    p{
        color:black;
        display: block;
        // text-align: left;
        margin-left: 2em;
        text-decoration: none;
        // outline: none;
    }
    hr{
        color:darkblue;
        font-weight: bold;
        margin-right: 2em;
        margin-left: 2em;
        height:2em;
    }
    .image{
    width: 50%;
    height: 70%;
//   margin-left: 60%;
//   margin-top: 18%;
//   float: right;
    padding: 0%;
}
.pp{
    display: block;
}
.pdfs,.videos,.questions{
        text-align: left;
        margin-left:5em;
        // overflow-y:hidden;
    }
.question{
    border-style:outset ;
    border-radius: 2em;
    text-decoration: none;
}
button,.costum-btn {
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
    background-color: #0f1549;
    max-width: 320px;
    width: 100%;
}
button:hover {
  background-color: #1524af;
}
.Qs{
    height:4em;
    border:solid #00008b;
    border-radius: 2em;
    width:100%;
}
</style>
<script>
import { mapGetters } from "vuex";
export default {
    name:"CourseHome",
    components:{},
    data:function(){
        return{
            newQuestion:"",
            
        }
    },
    mounted(){
        
        this.$store.dispatch("Course/getCourse", this.$route.params.CourseID);
        this.$store.dispatch("Course/getCourseVideos", this.$route.params.CourseID);
        this.$store.dispatch("Course/getCoursePdfs", this.$route.params.CourseID);
        this.$store.dispatch("Course/getCourseQuestions", this.$route.params.CourseID);
        console.log("in vue:",this.courseVideos.data[0]);
    },
    methods:{
        addQuestion(){
            let Question={
                id:this.$route.params.CourseID,
                newQuestion:this.newQuestion
            }
            this.$store.dispatch("Course/addQuestion",Question);
        }
    },
    computed:{
        ...mapGetters({
      course: "Course/Course",
      coursePdfs:"Course/coursePdfs",
      courseVideos:"Course/courseVideos",
      courseQuestions:"Course/courseQuestions",
      UserID:"Authorization/UserID",
      UserType:"Authorization/UserType"
    //   courseName:"Course/courseName",
    }),
    },
}

</script>