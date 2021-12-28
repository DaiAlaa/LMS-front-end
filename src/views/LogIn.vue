<template>
   <div class="conatiner parent px-0">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <form class="login-form">
            <h1>LogIn to your account</h1>
            <input type="email" placeholder="Email" v-model="email" required />
            <input type="password" placeholder="Password" v-model="password" required />
            <button @click.prevent="logIn()" id="signup-btn" type="submit" testid="sign up button" class="costum-btn">
              LogIn
            </button>
            <h2>Don't have an account?</h2>
          <router-link
            class="costum-btn"
            id="signup_btn"
            to="/SignUp"
            tag="button"
          >
            SignUp with your email
          </router-link>
          </form>
        </div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
    .parent{
    background-color:darkblue;
    height:100vh;
    width: 100%;
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
  margin: 1em;
  // background-color: transparent;
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
.login-form {
  background-color: white;
  margin-top: 4em;
  border:solid #1c1c1f;
  border-radius: 2em;
  border-color:gray ;
  // background-size: cover;
  // position: absolute;
  // display: block;
}
h1 {
  margin-top: 10%;
}
</style>
<script>
import { mapGetters } from "vuex";
export default {
    name:"LogIn",
    components:{},
    data: function () {
      return {
        //User's data that will be passed from the v-model
        email: "",
        password: "",
        //required for validation
        trigger_validation: false,
        can_submit: true,
      };
    },
    methods: {
      logIn(){
        this.trigger_validation = true;
        this.can_submit = true;
        this.req_email;
        this.req_password;
        setTimeout(() => {
          if (this.can_submit) {
            let user = {
              email: this.email,
              password: this.password,
            };
            this.$store.dispatch("Authorization/logIn", user);
          }
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
        }
}
</script>