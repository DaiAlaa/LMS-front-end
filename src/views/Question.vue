<template>
    <div class="conatiner parent px-0">
        <div class="Q">
            <p>
                <!-- {{QuestionAnswers.question}} -->
            </p>
        </div>
        <div class = "Ans" >
            <!-- <ul>
                <li v-for="answer in QuestionAnswers.answers" :key="answer">
                    {{answer}}
                </li>
            </ul> -->
        </div>
    </div>
</template>
<style lang="scss" scoped>

</style>
<script>
import { mapGetters } from "vuex";
export default {
    name:"Question",
    components:{},
    data:function(){
        return{

        }
    },
    methods:{},
    computed:{
        ...mapGetters({
      QuestionAnswers: "Course/Question",
    }),
    },
}
</script>