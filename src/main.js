import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate, { Validator } from 'vee-validate'
// method1
// import zh from 'vee-validate/dist/locale/zh_CN'
// Validator.localize('zh_CN', zh)

import './local/index'

Vue.use(VeeValidate)
Vue.config.productionTip = false
// method2
const validator = new Validator()
validator.localize('zh_CN')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
