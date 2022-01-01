<template>
  <div class="background" >
      <h1>Admin Panel</h1>
      <div class="row mainRow justify-content-center border-bottom">
          <div class="col">
            <h3 class="head1">USER NAME</h3>
          </div>
          <div class="col">
            <h3 class="head2">EMAIL</h3>
          </div>
          <div class="col">
            <h3 class="head3">USER TYPE</h3>
          </div>
          <div class="col">
            <h3 class="head4">ELEVATE USER</h3>
          </div>
      </div>
      <div
        v-for="user in AllUsers.data"
        :key="user.id"
      >
         <div v-if="user.user_type=='guest'"  class="row record border-bottom border-secondary">
          <div class="col">
            <h4 class="head1">{{ user.user_name }}</h4>
          </div>
          <div class="col">
            <h4 class="head2">{{ user.email }}</h4>
          </div>
          <div class="col">
            <h4 class="head3">Learner</h4>
          </div>
          <div class="col">
            <button class="delete" @click="elevateLearner(user.id)">Elevate</button>
          </div>
          </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>


.background{
    background: darkblue;
    height: 100%;
    padding-top: 5%;
    padding-bottom: 5%;

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
