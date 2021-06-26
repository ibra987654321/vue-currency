import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Currencyfilter from "./filter/currency.filter";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

Vue.config.productionTip = false;

Vue.filter("currency", Currencyfilter);
Vue.component("v-select", vSelect);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
