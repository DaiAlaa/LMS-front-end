<template>
    <div class="conatiner parent px-0">
        <br/>
        <p>
            <!-- {{course.name}} -->
            ML
        </p>
        <br/>
        <p>
            <!-- {{course.discribtion}} -->
            Machine Learning
        </p>
        <br/>
        <p>
            <!-- {{course.instructorName}} -->
            Snowden
        </p>
        <br/>
        <br/>
        <div class = "pdfs" >
            <!-- <ul>
                <li v-for="item in items" :key="item.link">
                    {{item.link}}
                </li>
            </ul> -->
        </div>
        <br/>
        <div class= "videos">
            <!-- to but youtube videos  -->
        </div>
        <br/>
        <div class = "questions">
            <!-- <ul>
                <li v-for="question in questions" :key="question.content">
                    {{question.content}}
                </li>
            </ul> -->
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .parent{
        background-color:darkblue;
        height:100%;
        width: 100vw;
        // background: fixed;
    }
    
    p{
        color:white;
        display: block;
        text-align: left;
        margin-left: 1em;
    }
</style>
<script>
import { mapGetters } from "vuex";
export default {
    name:"CourseHome",
    components:{},
    data:function(){
        return{

        }
    },
    methods:{},
    computed:{
        ...mapGetters({
      course: "Course/Course",
    }),
    },
}

</script>