<template>
    <div class="conatiner parent px-0">
        <br/>
        <p>
            JavaScript
        </p>
        <br/>
        <p>
            JS
        </p>
        <br/>
        <p>
            <!-- {{course.instructorName}} -->
            Snowden
        </p>
        <br/>
        <br/>
        <div>
            <!-- <ul>
                <li v-for="item in items" :key="item.link">
                    {{item.link}}
                </li>
            </ul> -->
        </div>
        <br/>
        <div>
            <!-- to but youtube videos  -->
        </div>
        <br/>
        <div>
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
export default {
    name:"CourseHome",
    components:{},
    data:function(){
        return{

        }
    },
    methods:{},
    computed:{},
}

</script>