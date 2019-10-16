// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
// import computed_rem from './js/rem'
// computed_rem()
import MetaInfo from "vue-meta-info";
import { HappyScroll } from 'vue-happy-scroll'
//自定义组件名
Vue.component('happy-scroll', HappyScroll)
// 引入css
import 'vue-happy-scroll/docs/happy-scroll.css'
// loading
import loading from './js/loading.js' // 引入loading
Vue.use(loading) // 全局使用loading

//element-ui
import ElementUI from "element-ui";
Vue.use(ElementUI);
Vue.use(MetaInfo);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  },
  template: "<App/>"
});
