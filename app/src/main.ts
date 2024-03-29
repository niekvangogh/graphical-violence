import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import 'babel-polyfill'


Vue.config.productionTip = false;

import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';
const socket = io(`http://${window.location.hostname}:3000`);
Vue.use(VueSocketIOExt, socket);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
