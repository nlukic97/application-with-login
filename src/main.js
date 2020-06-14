import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AgCookie from './cookie' //ovo je bitno za cookie

Vue.config.productionTip = false
Vue.prototype.$cookie = AgCookie //ovo je bitno za cookie

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
