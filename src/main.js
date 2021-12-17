import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

axios.defaults.baseURL = "http://localhost:7000/";
Vue.prototype.$url = "http://localhost:7000/";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
