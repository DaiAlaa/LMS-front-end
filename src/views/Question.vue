<template>
    <div class="conatiner parent px-0">
        <div class="Q">

            <h3>
                {{QuestionAnswers.data.question_user[0].content}}
            </h3>
            <p>
                by:{{QuestionAnswers.data.question_user[0].learner_user_name}}
            </p>
        </div>
                <div v-for="answer in QuestionAnswers.data.qas" :key="answer.id" class="Ans">
                    <h3>
                        {{answer.reply_content}}
                    </h3>
                    <p>
                       by: {{answer.reply_user_name}}
                    </p>
                </div>
        <input class="newAnswer" v-model="newAnswer" type="text" placeholder="Write your answer"/>
        <button :disabled="this.newAnswer==''" @click="addAnswer()">
            Submit
        </button>
    </div>
</template>
<style lang="scss" scoped>
.Q{
    margin-top:7em;
    border:solid darkmagenta;
    border-radius: 2em;
    margin-bottom:2em;
    width:90%;
    // margin-top:2em;
    margin-left:5%;
    color:black;
    background-color:rgba(241, 235, 235, 0.712) ;
    
}
.A{
    margin-top:7em;
}
.Ans{
    
    border:solid black;
    border-radius: 2em;
    width:85%;
    margin-left:10%;
    margin-bottom:2%;
}
.newAnswer{
    height:4em;
    border:solid ;
    border-radius: 2em;
     width:85%;
    margin-left:5%;
    margin-bottom:2%;
    padding-left: 1em;
}
h3{
    text-align: left;
    margin-left:2em;
}
p{
    text-align: left;
    margin-left:4em;
}
button {
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
</style>
<script>
import { mapGetters } from "vuex";
export default {
    name:"Question",
    components:{},
    data:function(){
        return{
            newAnswer:"",
        }
    },
    mounted(){
        this.$store.dispatch("Course/getAQuestion", this.$route.params.QuestionID);
    },
    methods:{
        addAnswer(){
            // console.log("answer vue:",this.newAnswer);
            let Answer={
                questionID:this.$route.params.QuestionID,
                newAnswer:this.newAnswer
            }
            this.$store.dispatch("Course/addAnswer", Answer);
            this.newAnswer='';
        }
    },
    computed:{
        ...mapGetters({
      QuestionAnswers: "Course/Question",
    }),
    },
    
}
</script>