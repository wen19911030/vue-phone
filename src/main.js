// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "es6-promise/auto";
import "normalize.css";
import "vant/lib/vant-css/base.css";
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { Toast } from "vant";
import App from "./App";
import router from "./router";
import FastClick from "fastclick";

Vue.use(Vuex);
Vue.use(Toast);

Vue.prototype.axios = axios;

// vw兼容方案
const hacks = require("viewport-units-buggyfill/viewport-units-buggyfill.hacks");
require("viewport-units-buggyfill").init({
  hacks: hacks
});

// 处理移动端click事件300毫秒延迟
FastClick.attach(document.body);

// 测试环境，添加console日志
if (process.env.NODE_ENV === "test") {
  const script = document.createElement("script");
  script.src = "https://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/vconsole/3.0.0/vconsole.min.js";
  script.onload = function() {
    /* eslint-disable no-new */
    if (window.VConsole) {
      new window.VConsole();
    }
  };
  document.head.appendChild(script);
}

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
}).$mount("#app");
