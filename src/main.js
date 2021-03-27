import Vue from "vue";
import App from "./App.vue";
import vClickOutside from "v-click-outside";
import GlobalUIs from "global-ui";

Vue.config.productionTip = false;

Vue.use(vClickOutside);
Vue.use(GlobalUIs);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
