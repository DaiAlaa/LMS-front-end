<template>
    <div class="conatiner parent px-0">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <form class="signup-form">
            <h1>SignUp With your Email</h1>
            <div class="row">
              <div class="col-md-6">
                <input type="text" placeholder="First Name" required />
              </div>
              <div class="col-md-6">
                <input type="text" placeholder="Last Name" required />
              </div>
            </div>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="text" placeholder="UserName" required />
            <input type="date" placeholder="Month" required />
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
.gender{
  height:1.5em;
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
// .gender {

//   input {
//     margin-top: 3px;
//     border-radius: 2px;
//     width: 15%;
//     margin-bottom: 0px;
//     padding: 0em;
//   }
//   label {
//     color: #88898c;
//     font-size: 0.9375em;
//     // text-align: left;
//     // padding-top: 16px;
//     // margin-right: 20px;
//     // padding-left: 5px;
//   }
// }
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
</style>
<script>
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
            birthday: "",
            month: "0",
            day: "",
            year: "",
        }

    },
    methods: {

    },
    computed:{

    }
}
</script>