import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
})

Vue.config.productionTip = false;

axios.defaults.baseURL = "http://localhost:7000/";
Vue.prototype.$url = "http://localhost:7000/";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
