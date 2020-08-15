import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import 'babel-polyfill'


Vue.config.productionTip = false;

import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';
<<<<<<< HEAD
const socket = io('http://192.168.43.207:3000');
=======
const socket = io('http://192.168.2.3:3000');
>>>>>>> 865005e7abf5c0f2f11c3395913c3d62bc864f0c
Vue.use(VueSocketIOExt, socket);




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
