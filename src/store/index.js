import Vue from "vue";
import Vuex from "vuex";
import Authorization from "../modules/Authorization";
import Course from "../modules/Course";
import User from "../modules/User";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Authorization,
    Course,
    User
  },
});
