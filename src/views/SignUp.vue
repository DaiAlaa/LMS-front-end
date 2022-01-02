<template>
    <div class="conatiner parent px-0">
      <div class="row">
        <br/>
      <router-link to="/">
        <img class="logo" src="../assets/lo.png" alt="logo" />
      </router-link>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <form class="signup-form">
            <h1>SignUp With your Email</h1>
            <div class="row">
              <div class="col-md-6">
                <input type="text" placeholder="First Name" v-model="firstName" required />
              </div>
              <div class="col-md-6">
                <input type="text" placeholder="Last Name" v-model="lastName" required />
              </div>
            </div>
            <input type="email" placeholder="Email" v-model="email" required />
            <br/>
            <p v-if="invalid_email == true" class="invalid" id="invalid_email">
              The email address you supplied is invalid.
            </p>
            <input type="password" v-model="password" placeholder="Password" required />
            <p v-if="short_password == true" class="invalid" id="short_password">
              Your password is too short.
            </p>
            <input type="text" v-model="username" placeholder="UserName" required />
            <input type="date" placeholder="birthdate" v-model="birthdate" required />
            <div class="row">
              <div class ="col-md-1">
            <input type="radio"  class="gender" value="Male" v-model="gender"/>
              </div>
              <div class ="col-md-1">
            <label for="Male" >Male</label>
            </div>
            <div class ="col-md-1">
            <input type="radio" value="Female" v-model="gender" class="gender" />
            </div>
            <div class ="col-md-1">
            <label for="Female" >Female</label>
            </div>
            </div>
            <button @click.prevent="signUp()" id="signup-btn" type="submit" testid="sign up button" class="costum-btn">
              SignUp
            </button>
            <div>
            Aleady have an account?
            <router-link class="highlight" to="/LogIn" tag="p">
              Log in
            </router-link>
          </div>
          </form>
        </div>
      </div>
    </div>
</template>
<style lang="scss" scoped>

.parent{
  background-color:darkblue;
  height:100%;
  width: 100%;
  overflow-x: hidden;
  padding-bottom: 3em;
  // background: fixed;
}
input {
  height: 3em;
  padding: 0.625em 0.625em 0.625em;
  border-radius: 2px;
  border: 1px solid #dfe0e6;
  color: #1c1c1f;
  width: 90%;
  align-items: center;
  display: block;
  margin-left: 5%;
  margin-bottom: 1em;
  // background-color: transparent;
}
.gender{
  height:1.5em;
  left: 40%;
  margin: 1em;
}
.costum-btn {
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
}
  // -webkit-appearance: none;
  // -moz-appearance: none;
.highlight {
  color: #0f1549;
  display: inline-block;
}
.highlight:hover {
  color: #0f1549;
  cursor: pointer;
}

.invalid {
  color: #bd3200;
  text-align: left;
}

#signup-btn {
  background-color: #0f1549;
  max-width: 320px;
  width: 100%;
}
#signup-btn:hover {
  background-color: #0f1549;
}
label{
  margin-top:1em;
}
.signup-form {
  background-color: white;
  margin-top: 2em;
  border:solid #1c1c1f;
  border-radius: 2em;
  border-color:gray ;
  // background-size: cover;
  // position: absolute;
  // display: block;
}

// form {
//   height: calc(120vh);
// }
h1 {
  margin-top: 10%;
}
.start{
  margin-top:5% ;
}
.logo{
  width: 12%;
  height:80px ;
  float:left;
  margin-left:2em;
  margin-right: 0em;
}
</style>
<script>
import { mapGetters } from "vuex";
export default {
    name:"SignUp",
    components:{},
    data:function(){
        return{
            trigger_validation: false,
            can_submit: true,
            email: "",
            password: "",
            username: "",
            gender: "",
            birthdate: "",
            firstName:"",
            lastName:"",
        }

    },
    methods: {
      signUp(){
        this.trigger_validation = true;
        this.can_submit = true;
        setTimeout(() => {
        if (this.can_submit) {
          let newuser = {
            username: this.username,
            password: this.password,
            email: this.email,
            gender: this.gender,
            birthday: this.birthdate,
            firstname:this.firstName,
            lastname:this.lastName,
          };
          console.log("html",newuser);
          this.$store.dispatch("Authorization/signUp", newuser);
          
          // this.$router.replace("/EmailConfirmation");
          // this.$router.replace("/");
        } 
        else return;
      }, 200);
      },
      cannotSubmit() {
      this.can_submit = false;
    },
    canSubmit() {
      this.can_submit = this.can_submit && true;
    },

    },
    computed:{
      ...mapGetters({
      isLoggedIn: "Authorization/GetStatus",
    }),
    invalid_email: function() {
      if (this.trigger_validation) {
        var to_check = this.email;
        if ( this.email != "" && (to_check.indexOf("@") == -1 || to_check.indexOf("@") == to_check.length - 1 || to_check.indexOf(".com") == -1 || to_check.indexOf(".com") + 4 != to_check.length)) {
            this.cannotSubmit();
            return true;
        } 
        else {
          this.canSubmit();
          return false;
        }
      } 
      else {
        return false;
      }
    },
    short_password: function () {
        if (this.trigger_validation) {
          if (this.password.length <= 7 && this.password != "") {
            this.cannotSubmit();
            return true;
          } 
          else {
            this.canSubmit();
            return false;
          }
        } 
        else {
          return false;
        }
      },
    }
}
</script>