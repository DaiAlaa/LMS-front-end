<template>
    <div
    class="home-navbar"
    
    id="navBar"
    >
    <router-link to="/SignUp" v-if="GetStatus == '' || GetStatus == 'faild'">
      <button class="signup" >SIGN UP</button>
    </router-link>
    <router-link to="/Login" v-if="GetStatus == '' || GetStatus == 'faild'">
      <button class="login">LOG IN</button>
    </router-link>
    <router-link to="/UserProfile" v-if="GetStatus == 'success'">
        <button class="userName">
            {{Username|shorten}}
            <i class="fa fa-user me"></i>
        </button>
    </router-link>
    <button class="signup" @click="logout()" v-if="GetStatus == 'success'">
        LOG OUT
    </button>
    <button class="SearchButton" @click="Search()">Search
        <i class="fa fa-search"></i>
    </button>
    <input
      class="searchInput"
      placeholder="Tap to search .."
      v-model="SearchValue"
      autocomplete="off"
      v-on:input="check(SearchValue)"
    />
    <router-link to="/">
      <img class="logo" src="../assets/lo.png" alt="logo" />
    </router-link>
    </div>
</template>
<style lang="scss" scoped>
#navBar {
  position: fixed;
  width: 100%;
  height: 70px;
  top: 0%;
  z-index: 1000;
  background-color: darkblue;
}
.signup {
  border: none;
  border-radius: 20px;
  width: 8%;
  height: 70%;
  margin-left: 42%;
  margin-top: 0.7%;
  position: absolute;
  background-color: white;
  color: darkblue;
  text-decoration: none;
  outline: none;
  font-weight: bold;
}
.login {
  border: none;
  border-radius: 20px;
  width: 6%;
  height: 70%;
  margin-top: 0.7%;
  margin-left: 52%;
  position: absolute;
  background-color: darkblue;
  color: white;
  text-decoration: none;
  outline: none;
  font-weight: bold;
}
.userName{
  border: none;
  border-radius: 20px;
  width: 8%;
  height: 70%;
  margin-top: 0.7%;
  margin-left: 52%;
  position: absolute;
  background-color: darkblue;
  color: white;
  text-decoration: none;
  outline: none;
  font-weight: bold; 
}
.searchInput {
  margin-top: 1%;
  width: 23%;
  height: 60%;
  border-radius: 20px;
//   margin-left: 1%;
  text-decoration: none;
  outline: none;
  border: none;
  padding-left: 1%;
}
.SearchButton {
  border: none;
  border-radius: 20px;
  width: 7%;
  height: 70%;
  left: 29%;
  margin-top: 0.7%;
  position: absolute;
  background-color: darkblue;
  color: white;
  text-decoration: none;
  outline: none;
  font-weight: bold;
}
.logo{
  width: 12%;
  height:60px ;
  display: inline;
  position: absolute;
  right: 86%;
  margin-top:0.7% ;
}
</style>
<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  data: function () {
    return {
      SearchValue: "",
      notFound: false,
    };
  },
  methods: {
    logout()
    {
      this.$store.dispatch("Authorization/logout");
    },
    // Search() {
    //   if (this.SearchValue != "") {
    //     this.$store.dispatch("Products/searchProducts", this.SearchValue);
    //     setTimeout(() => {
    //     if (this.searchResults.length == 0){
    //       this.notFound = true;
    //     } 
    //     }, 200);
    //   }
    // },
    // check(SearchValue) {
    //   if (SearchValue == "")
    //   {
    //     this.searchResults.length = 0;
    //     this.notFound = false;
    //   }
    // },
  },
  computed: {
    ...mapGetters({
      //searchResults: "Products/searchResults",
      GetStatus: "Authorization/GetStatus",
      Username: "Authorization/Username"
    }),
  },
  filters: {
    shorten: function (value) {
      if (value && value.length > 7) return value.substring(0, 7) + "..";
      else return value;
    },
  },
}
</script>