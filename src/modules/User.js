import axios from "axios";
// import router from "../router/index";
var urlRequest = "https://thawing-reaches-29180.herokuapp.com/";
export default {
  namespaced: true,
  state: {
    status: "",
    userRespons: {}
  },
  mutations: {
    isEdited(state, msg) {
        state.status = msg;
      },
  },
  actions: {
    EditUser({ commit, state }, user) {
      console.log("edit")
        axios
        .post(urlRequest + "users", {
          user_name: user.userName,
          email: user.email,
          first_name: user.firstName,
          last_name: user.lastName,
          birth_date: user.birthdata, 
          password: user.password
        })
        .then((response) => {
        state.userRespons = response.data;
        commit("isEdited", "success");
        })
        .catch((error) => {
        commit("isEdited", "failed");
        console.log(error);
          });
      },
    },
    getters: {
      Status: (state) => state.status,
    },
};
