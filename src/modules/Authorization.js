import axios from "axios";
import store from "../store";
import router from "../router/index";
// var urlRequest = "https://electronic-store-back-end.herokuapp.com/";
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
            commit("auth_request");
            axios
              .post( urlRequest +  "auth/sign-up", {
                email: user.email,
                password: user.password,
                name: user.username,
                role: "Customer",
                gender: user.gender,
                country: user.country,
                birthday: user.birthday,
              })
              .then((response) => {
                ///////////////////
                const token = response.data.access_token;
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
            axios
              .post( urlRequest + "auth/login", {
                email: user.email,
                password: user.password,
              })
              .then((response) => {
                const token = response.data.access_token;
                localStorage.setItem("Authorization", token);
                axios.defaults.headers.common["Authorization"] = token;
                store.dispatch("Authorization/get_user", true);
              })
              .catch((error) => {
                console.log(error);
                commit("auth_faild");
                localStorage.removeItem("Authorization");
              });
          },
    },
    getters:{
        Username: (state) => state.User.name,
        GetStatus: (state) => state.status,
        User: (state) => state.User,
        UserID: (state) => state.User._id,
        UserRole:(state)=>state.User.role,
        ResetMail:(state)=>state.Mail,
    }

}