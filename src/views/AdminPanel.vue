<template>
  <div class="background">
    <br/>
    <router-link to="/">
      <img class="logo" src="../assets/lo.png" alt="logo" />
    </router-link>
    <br v-if="$mq != 'mobile' && $mq != 'tablet' "/>
    <br v-if="$mq != 'mobile' && $mq != 'tablet' "/>
    <br v-if="$mq != 'mobile' && $mq != 'tablet' "/>
    <br v-if="$mq != 'mobile' && $mq != 'tablet' "/>
      <h1 >Admin Panel</h1>
      <div class="row mainRow justify-content-center border-bottom"  v-if="$mq != 'mobile' && $mq != 'tablet' ">
          <div class="col">
            <h3 class="head1">USER NAME</h3>
          </div>
          <div class="col-md">
            <h3 class="head2-md">EMAIL</h3>
          </div>
          <div class="col-md">
            <h3 class="head3">USER TYPE</h3>
          </div>
          <div class="col-md elev">
            <h3 class="head4">ELEVATE USER</h3>
            <h3 class="head4resp">ELEVATE</h3>
          </div>
      </div>
      <div
        v-for="user in AllUsers.data"
        :key="user.id" 
      >
         <div v-if="(user.user_type=='guest'||user.user_type=='learner') && $mq != 'mobile' && $mq != 'tablet' " class="row record border-bottom border-secondary"> 
          <div class="col-md">
            <h4 class="head1">{{ user.user_name }}</h4>
          </div>
          <div class="col-md">
            <h4 class="head2">{{ user.email }}</h4>
          </div>
          <div class="col-md">
            <h4 class="head3">Learner</h4>
          </div>
          <div class="col-md">
            <button class="delete" @click="elevateLearner(user.id)">Elevate</button>
          </div>
          </div>
      </div>

  <div v-if="$mq == 'mobile' || $mq == 'tablet'">
  <div v-for="user in AllUsers.data" :key="user.id"> 
    <div  v-if="user.user_type=='guest'||user.user_type=='learner'" class="card-container">
      <b> Name: </b> {{ user.user_name }} <br/>
      <b> Email: </b> {{ user.email }}<br/>
      <b> Role: </b> {{ user.user_type }}<br/>
      <div> <button class="deleteresp" @click="elevateLearner(user.id)">Elevate</button> </div>
    </div>
  </div>
  </div>
</div>
</template>

<style lang="scss" scoped>


.background{
    background: darkblue;
    // height:calc(100vh - 500px);
    // padding-top: 5%;
    padding-bottom: 5%;
    height: 100%;
    min-height: 800px;
    // height: auto !important;
}
.card-container{
  color: darkblue;
  display: flexbox;
  background-color: white;
  width: calc(90%);
  height: 150px;
  margin-top: 4%;
  margin-bottom: 4%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5%;
  justify-content: center;
  padding-top: 8%;
}
h1 {
//   margin-top: 13%;
  color: white;
  font-weight: bold;
  text-align: center;
}
.mainRow {
  margin-top: 5%;
  width: 70%;
  height: 50px;
  background: rgb(195, 195, 255);
  margin-left: 15%;
  padding-top: 13px;
}
h3 {
  color: white;
  font-size: 20px;
}
.head1 {
  position: absolute;
  margin-left: 2%;
}
.head2 {
  position: absolute;
  margin-left: 4%;
}
.head3 {
  position: absolute;
  margin-left: 6%;
}
.head4 {
  position: absolute;
  margin-left: 4%;
}
.record {
  width: 70%;
  height: 50px;
  padding-top: 13px;
  background: white;
  margin-left: 15%;
  color: darkblue;
}
h4 {
  font-size: 16px;
}
.delete {
  background: darkblue;
  margin-left: 25%;
  color: white;
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  padding: 8px 11px 8px 11px;
  border-color:  darkblue;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  transition-duration: 0.3s;
  border-width: 0;
  letter-spacing: 2px;
  white-space: normal;
}

.deleteresp {
  background: darkblue;
  color: white;
  font-size: 10px;
  line-height: 1;
  border-radius: 500px;
  padding: 8px 11px 8px 11px;
  border-color:  darkblue;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  transition-duration: 0.3s;
  border-width: 0;
  letter-spacing: 2px;
  white-space: normal;
  margin-top:4%;
}

.head4resp{
  visibility: hidden;
  position: absolute;
  margin-left: 4%;
}


@media screen and (max-width: 1200px) and (min-width: 900px)  {

.head4resp{
  visibility: visible;
}
.head4{
  visibility: hidden;
}


}

.logo{
  width: 12%;
  height:80px ;
  float:left;
  margin-left:2em;
margin-right: 0em;
}

@media screen and (max-width: 1024px)  {

.logo{
width: 50%;
height: 50%;
  float:none;
  margin-left:auto;
  margin-right: auto;
}

}

</style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AdminPanel",
  data:function(){
        return{
        }
    },
  mounted() {
    this.$store.dispatch("User/showAllUsers");
    console.log(this.AllUsers)
  },
  computed: {
    ...mapGetters({
      AllUsers: "User/allUsers",
    }),
  },
  methods: {
    elevateLearner(userId) {
      this.$store.dispatch("User/elevateLearner", userId);
    },

  },
};
</script>
