<template>
    <div class="conatiner parent px-0">
        <div class= "courseInfo row" >
            <div class="col-sm-5">
                <br/><br/><br/>
                <br/>
                <br/>
                <h1 class="instructorName">
                 <span > Course:</span>  {{this.course[0].name}}
                </h1>
                <h4>About this course:</h4>
                <h4 class="syllabus">
                    {{this.course[0].syllabus}}
                </h4>
                <h2 class="instructorName">
                 <span>by: </span> {{this.course[0].instructor_user_name}}
                </h2> 
                <h2 class="instructorName">
                 <span>Instructor mail: </span> {{this.course[0].instructor_email}}
                </h2> 
            </div>
            <div class="col-sm-1"></div>
            <div class="col-sm-6">
                <img src="../assets/course.png" class="image"/>
            </div>
        </div>
        <hr/>
        <div class = "row pdfs" >
            <h1>PDF Materials</h1>
                <!-- <div v-if="this.PdfLength"> -->
                    <ul>
                    <a class="pp" v-for="pdf in coursePdfs.data" :key="pdf.material.id" :href="pdf.file">
                        <li>
                            {{pdf.material.name}}
                        </li>
                    </a>
                    </ul>
                    <div class="noMaterials" v-if="!this.coursePdfs.data.length">
                            there is no pdf materials to show yet !!    
                    </div>
                <!-- </div> -->
                <!-- <div v-else>
                <h4>There is no Pdfs added to this course yet!</h4>
            </div> -->

            <router-link :to="{path: '/addactivity/'+this.course[0].id}">
                <button v-if="this.UserID==this.course[0].instructor_id">Add PDF</button>
            </router-link>
                
        </div>
        <hr/>
        <div class= "videos">
            <h1>Course Videos</h1>

            <!-- <div v-if="this.VideoLength"> -->
                <!-- it takes normal or embed url -->
            <div v-for="video in courseVideos" :key="video.id">
                <video-embed    :src="video.content" target="_blank">    
                </video-embed>
                <h5>
                    {{video.name}}
                </h5> 
             </div>
             <div class="noMaterials" v-if="!this.courseVideos.length">
                            there is no videos to show yet !!    
                </div>
            <!-- </div> -->
            <!-- <div v-else>
                <h4>There is no videos added to this course yet!</h4>
            </div> -->
                <!-- another way display videos from youtube  it takes embed url only  -->
                <!-- <iframe  width="420" height="315" src="https://www.youtube.com/embed/AAbUfZD_09s"></iframe> -->
                <router-link :to="{path: '/addactivityvid/'+this.course[0].id}">
                    <button  v-if="this.UserID==this.course[0].instructor_id">Add Video</button>
                </router-link>
                
        </div>
        <hr/>
        <div class = "questions">
            <h1>Course Questions</h1>
            
                <router-link class="routerQ" v-for="question in courseQuestions.data" :key="question.id"  :to="{path: '/Question/'+question.id}">
                    <div class="question" >
                        <h4 class="LearnersQuestion">                
                            {{question.content}}
                        </h4>
                        <p >
                            by: {{question.learner_user_name}}
                        </p>
                    </div>
                </router-link>
            
            <input type="text" v-model="newQuestion" placeholder="Add your Question ...."  class="Qs"/>
            <button :disabled="this.newQuestion==''" @click="addQuestion()"  type="submit" class="costum-btn">Submit</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    
.parent{
    background-color:white;
    height:100%;
    width: 100%;
    overflow-x: hidden;
    // background: fixed;
}
// .courseInfo{
//     margin-top:5em;
//     margin-bottom: 0em;
//     width: 100%;
//     height: 100%;
//     padding: 0%;
// }
h1,h2,h4{
    font-weight: bold;
    font-family:"Times New Roman";
    // float:left;
    // margin-left: 2em;
    color:darkcyan;
    // display: block;
    
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
    width: 70%;
    height: 100%;
    padding: 0%;
    margin: 0%;
}
.pp{
    display: block;
    text-decoration: none;
    color: black;
}
.pp:hover{
    color:darkblue;
}
.pdfs,.videos,.questions{
    text-align: left;
    margin-left:5em;
    // overflow-y:hidden;
}
.question{
    border-style:outset ;
    border-radius: 2em;
    width:90%;
    margin-left: 5%;
    margin-top: 2em;
    border-color: darkblue;
}
.routerQ{
    text-decoration: none;
    width:90%;
    
}  
button,.costum-btn {
    font-size: 14px;
    line-height: 1;
    border-radius: 500px;
    padding: 16px 48px 18px;
    margin-bottom: 14px;
    margin-top: 31px;
    margin-left: 40%;
    // margin-right: auto;
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
    // border:solid #00008b;
    border-color: darkblue;
    border-radius: 2em;
    width:90%;
    margin-top:2em;
    margin-left:5%;
    padding: 2%;
    // border:none;
}
.instructorName{
    color:black;
}
span{
    color: darkcyan;
}
.syllabus{
    color:black;
    margin-left:5%;
    

}
.LearnersQuestion{
    color: black;
    margin-left: 2em;
    margin-top: 2%;
}
.videoName{
    float:left;
}
h5{
    margin-bottom: 2%;
}
.noMaterials{
    // font-weight: bold;
    font-size: 25px;
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
            PdfLength:0,
            VideoLength:0,
        }
    },
    mounted(){
        
        this.$store.dispatch("Course/getCourse", this.$route.params.CourseID);
        this.$store.dispatch("Course/getCourseVideos", this.$route.params.CourseID);
        this.$store.dispatch("Course/getCoursePdfs", this.$route.params.CourseID);
        this.$store.dispatch("Course/getCourseQuestions", this.$route.params.CourseID);

    },
    methods:{
        addQuestion(){
            let Question={
                id:this.$route.params.CourseID,
                newQuestion:this.newQuestion
            }
            this.$store.dispatch("Course/addQuestion",Question);
            this.newQuestion='';
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