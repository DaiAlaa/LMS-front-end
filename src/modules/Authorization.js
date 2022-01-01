import axios from "axios";
import store from "../store";
import router from "../router/index";
var urlRequest = "https://thawing-reaches-29180.herokuapp.com/";

export default {
    namespaced: true,
    state: {
        status: "",
        upgraded: "",
        token: localStorage.getItem("Authorization") || "",
        resendtoken: localStorage.getItem("X-token") || "",
        User: {},
        Mail:"",
        emailConfirmed: Boolean,
        //short cicuit evaluation if the first argument return anything but null it will be stored if not token=''
    },
    mutations:{
        auth_faild(state) {
            state.status = "faild";
            state.token = "";
            state.User = {};
          },
        auth_success(state, { token, user }) {
        state.status = "success";
        state.token = token;
        state.User = user;
        },
        auth_error(state, err_msg) {
        state.status = err_msg;
        },
        logout(state) {
        state.status = "";
        state.token = "";
        state.User = {};
        },
        Reset_Mail(state,Mail){
        state.Mail=Mail;
        },
        auth_request(state){
        state.status = "loading";
        }
    },
    actions:{
        signUp({ commit }, user) {
          console.log("signup:",user)
          let x={
            user_name: user.username,
            email: user.email,
            first_name:user.firstname,
            last_name:user.lastname,
            birth_date: user.birthday,
            password: user.password,
          }
          console.log(x);
            commit("auth_request");
            axios
              .post( urlRequest + "users/sign-up",{
                user_name: user.username,
                email: user.email,
                first_name:user.firstname,
                last_name:user.lastname,
                birth_date: user.birthday,
                password: user.password,
              })
              .then((response) => {
                console.log("ya rab")
                ///////////////////
                const token = "Bearer "+response.data.token;
                console.log(token)
                localStorage.setItem("X-token", token);
                localStorage.setItem("Authorization", token);
                axios.defaults.headers.common["Authorization"] = token;
                store.dispatch("Authorization/get_user", true);
              })
              .catch((error) => {
                commit("auth_faild");
                localStorage.removeItem("X-token");
                console.log(error);
              });
          },
          logIn({ commit }, user) {
            commit("auth_request");
            console.log(user);
            axios
              .post( urlRequest + "users/login", {
                email: user.email,
                password: user.password,
              })
              .then((response) => {
                const token = "Bearer "+response.data.token;
                localStorage.setItem("Authorization", token);
                console.log("hehe",response.data)
                axios.defaults.headers.common["Authorization"] = token;
                store.dispatch("Authorization/get_user", true);
              })
              .catch((error) => {
                console.log(error);
                commit("auth_faild");
                localStorage.removeItem("Authorization");
              });
          },
          get_user({ commit }, flag) {
            const token = localStorage.getItem("Authorization");
            axios.defaults.headers.common["Authorization"] = token;
            console.log("getuser token:",axios.defaults.headers.common["Authorization"]);
            commit("auth_request");
            axios
              .get(urlRequest + "users")
              .then(response => {
                const user = response.data.data;
                console.log("getuser: ",user);
                commit("auth_success", { token, user });
                if (flag) router.replace("/");
              })
              .catch(error => {
                commit("auth_error", "user_err");
                localStorage.removeItem("Authorization");
                console.log("error: ",error);
              });
          },
          logout({ commit }) {
            localStorage.removeItem("Authorization");
            delete axios.defaults.headers.common["Authorization"];
            commit("logout");
            router.replace("/");
          },
    },
    getters:{
        Username: (state) => state.User.user_name,
        GetStatus: (state) => state.status,
        User: (state) => state.User,
        UserID: (state) => state.User.id,
        UserType:(state)=>state.User.user_type,
        ResetMail:(state)=>state.Mail,
    }

}