import axios from "axios";
// import router from "../router/index";
import store from "../store";
var urlRequest = "https://thawing-reaches-29180.herokuapp.com/";
export default {
  namespaced: true,
  state: {
    status: "",
    allUsers:[],
    L:"",
    userRespons: {}
  },
  mutations: {
    setAllUsers(state, Users){
      state.allUsers =  Users;
    },
    setL(state, msg){
      state.L =  msg;
    },
    isEdited(state, msg) {
        state.status = msg;
      },
  },
  actions: {

    showAllUsers({ commit }) {
      axios
        .get(urlRequest + "users/index")
        .then((response) => {
          let Users = response.data;
          if (response.status != 200) {
            Users = [];
          }
          commit("setAllUsers", Users);
        })
        .catch((error) => {
          let Users = [];
          commit("setAllUsers", Users);
          console.log(error);
        });
    },

    elevateLearner({ commit },userId) {
      console.log(userId)
      axios
        .put(urlRequest + "users/change_role?user_type=learner&user_id="+userId,{
          user_type: "learner",
          user_id: userId
        })
        .then(() => {
          commit("setL", "L");
          store.dispatch("User/showAllUsers"); 
        })
        .catch((error) => {
          console.log(error);
        });
    },
    EditUser({ commit, state }, user) {
      console.log("edit")
        axios
        .put(urlRequest + "users", {
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
        store.dispatch("Authorization/get_user", false);
        })
        .catch((error) => {
        commit("isEdited", "failed");
        console.log(error);
          });
      },

    },
    getters: {
      Status: (state) => state.status,
      allUsers: (state) => state.allUsers,
    },
};
