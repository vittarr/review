import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
//import "./scss/index.scss";
import "./scss/mystyles.scss";

import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false;

let app;

store
  .dispatch("auth/authenticate")
  .catch((err) => {
    console.error("main ERR", err);
  })
  .then((res) => {
    console.log("main OK", res);
    if (!app) {
      app = new Vue({
        router,
        store,
        render: (h) => h(App),
      }).$mount("#app");
    }
  });

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount("#app");
