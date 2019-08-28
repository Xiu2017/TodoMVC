import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/'
import './core/use'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
