import Vue from 'vue'
import App from './App.vue'
import './styles/index.scss'
import vuetify from './plugins/vuetify'
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
