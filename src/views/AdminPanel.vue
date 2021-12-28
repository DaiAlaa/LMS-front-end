<template>
  <div class="background">
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
      class="row record border-bottom border-secondary"
      v-for="user in AllUsers"
      :key="user.id"
    >
      <div class="col">
        <h4 class="head1">{{ user.user_name }}</h4>
      </div>
      <div class="col">
        <h4 class="head2">{{ user.email }}</h4>
      </div>
      <div class="col">
        <h4 class="head3">{{ user.user_type }}</h4>
      </div>
      <div class="col">
        <button class="delete" @click="elevateLearner(user.id)">Elevate</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background{
    background: darkblue;
    height: 100vh;
    padding-top: 5%;
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
  color: blu;
}
h4 {
  font-size: 16px;
}
.delete {
  border: none;
  background: white;
  margin-left: 25%;
  color: greenyellow;
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AdminPanel",
  mounted() {
    this.$store.dispatch("Course/showAllUsers");
  },
  computed: {
    ...mapGetters({
      AllUsers: "Course/allUsers",
    }),
  },
  methods: {
    elevateLearner(userId) {
        //call action of elevation (put)
      //this.$store.dispatch("Users/DeleteUser", userId);
      console.log("usertd kkk " , userId)
    },
  },

};
</script>
