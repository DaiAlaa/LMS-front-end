<template>
    <div class="background">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <img src="../assets/u2.png" class="image"/>
                </div>
                <div class="col-sm-8">
                    <p class="userName">Dai Alaa</p>
                    <p class="mail">daialaa@gmail.com</p>
                    <p class="type">instructor</p>
                    <p class="birth">Birth Date: 
                        <span>1-1-2000</span>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="backEdit">
                    <p class="edit">Edit profile
                        <i class="fa fa-edit"></i>
                    </p>
                </div>
            </div>
            <div class="mainDiv">
                <h3>First Name</h3>
                <input
                    class="input_field"
                    type="text"
                    placeholder="type your first name"
                    v-model="FirstName"
                    required
                />
                <h3>Last Name</h3>
                <input
                    class="input_field"
                    type="text"
                    placeholder="type your last name"
                    v-model="LastName"
                    required
                />
                <h3>User Name</h3>
                <input
                    class="input_field"
                    type="text"
                    placeholder="type user name"
                    v-model="UserName"
                    required
                />
                <h3>Email</h3>
                <input
                    class="input_field"
                    type="email"
                    placeholder="type your email"
                    v-model="Email"
                    required
                />
                <h3>Password</h3>
                <input
                    class="input_field"
                    type="password"
                    placeholder="type your password"
                    v-model="Password"
                    required
                />
                <h3>Birth Date</h3>
                <input
                    class="input_field"
                    type="date"
                    placeholder="type your birth date"
                    v-model="BirthDate"
                    required
                />
                <p class="success" v-if="Status == 'success' && this.fail == 0">Done Successfully</p>
                <p class="failed" v-if="Status == 'failed' || this.fail == 1">Failed</p>
                <button class="editBtn">Submit</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.background {
 background-color: rgb(205, 205, 255);
 width: 80%;
 height: 100%;
 margin-left: 10%;
 padding-bottom: 50px;
}
.userName{
  color: black;
  font-size: 23px;
  font-weight: bold;
  text-align: left;
  margin-top: 28%;
//   line-height: 30px;

}
.mail {
  color: blue;
  font-size: 16px;
  text-align: left;
  text-decoration: underline;
  line-height: 6px;
}
.type {
  color: black;
  font-size: 16px;
  text-align: left; 
  line-height: 8px;
}
.birth {
  color: black;
  font-size: 16px;
  text-align: left; 
  line-height: 5px;
}
.image{
  width: 45%;
  height: 50%;
  float: right;
  margin-top: 50%;
  margin-right: 15%;
}
.edit{
    font-weight: bold;
    color: black;
    font-size: 30px;
    margin-left: 12%;
    margin-top: 10%;
    text-align: left;
}
.mainDiv {
  width: 70%;
  height: 100%;
  background: whitesmoke;
  margin-left: 15%;
  padding: 40px;
  border-radius: 10px;
  margin-top: 5%;
}
h3 {
  text-align: left;
  color: #161516;
  margin-bottom: 15px;
  font-size: 20px;
}
.input_field {
  width: 90%;
  height: 40px;
  padding-left: 10px;
  margin-bottom: 25px;
  margin-right: 40%;
}
.editBtn{
  border: none;
  color: white;
  background-color: darkblue;
  width: 14%;
  height: 40px;
  border-radius: 20px;
  margin-top: 3%;
}
.success {
  color: rgb(138, 230, 0);
  text-align: left;
  font-size: 18px;
  font-weight: bold;
}
.failed {
  color: red;
  text-align: left;
  font-size: 18px;
}
</style>
<script>
import { mapGetters } from "vuex";
export default {
    data: function () {
    return {
      FirstName: "",
      LastName: "",
      UserName: "",
      Email: "",
      Password: "",
      BirthDate: "",
      submit: false,
      fail: 0,
    };
  },
  methods: {
    cannotSubmit() {
      this.submit = false;
    },
    canSubmit() {
      this.submit = this.submit && true;
    },
    reqEmail() {
      var to_check = this.Email;
      if (
        this.Email == "" ||
        to_check.indexOf("@") == -1 ||
        to_check.indexOf("@") == to_check.length - 1 ||
        to_check.indexOf(".com") == -1 ||
        to_check.indexOf(".com") + 4 != to_check.length
      ) {
        this.cannotSubmit();
        console.log("reqEmail no");
        return true;
      } else {
        this.canSubmit();
        return false;
      }
    },
    shortPassword() {
          if (this.password.length <= 7 && this.password != "") {
            this.cannotSubmit();
            return true;
          } 
          else {
            this.canSubmit();
            return false;
          }
    },
    editUser() {
      this.submit = true;
      this.reqEmail();
      this.shortPassword();
      console.log("this.submit" , this.submit);
      setTimeout(() => {
        if (this.submit) {
          let newuser = {
            firstName: this.FirstName,
            lastName: this.LastName,
            userName: this.UserName,
            email: this.Email,
            password: this.Password,
            birthdata: this.BirthDate,
          };
          this.$store.dispatch("User/EditUser", newuser);
        } else {
          this.fail = 1;
          return;
        }
      }, 200);
    },
  },
  computed: {
    ...mapGetters({
      Status: "User/Status",
    }),
  },
}
</script>