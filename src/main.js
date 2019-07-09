// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import computed_rem from './js/rem'
// computed_rem()
import MetaInfo from 'vue-meta-info'
 
Vue.use(MetaInfo)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  },
  template: '<App/>'
})
