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
        <button @click="addAnswer()">
            Submit
        </button>
    </div>
</template>
<style lang="scss" scoped>
.Q{
    margin-top:7em;
    border:solid darkblue;
    border-radius: 2em;
    margin-bottom:2em;
    
}
.A{
    margin-top:7em;
}
.Ans{
    
    border:solid darkblue;
    border-radius: 2em;
}
.newAnswer{
    height:4em;
    border:solid #00008b;
    border-radius: 2em;
    width:100%;
}
h3{
    text-align: left;
    margin-left:2em;
}
p{
    text-align: left;
    margin-left:4em;
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
        }
    },
    computed:{
        ...mapGetters({
      QuestionAnswers: "Course/Question",
    }),
    },
    
}
</script>