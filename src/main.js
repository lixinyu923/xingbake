// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import "./utils/flexible";
import "../static/font/iconfont.css";
import elou from "./plugins/elou.js";
import store from "./store/index.js";

// import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css"
import {DatePicker,TimePicker} from "element-ui";

Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(elou)

Vue.config.productionTip = false

// Vue.use(ElementUI);
Vue.prototype.$bus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
