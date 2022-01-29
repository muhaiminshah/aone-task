import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import * as fontawesomeConfig from "./config/config-fa";
import * as bootstrapVueConfig from "./config/config-bootstrap-vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component("font-awesome-icon", FontAwesomeIcon);
fontawesomeConfig.initFontawesome();
bootstrapVueConfig.initBootstrapVue(Vue);

new Vue({
  router,
  store,
  axios,
  render: (h) => h(App),
}).$mount("#app");
