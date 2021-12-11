import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const startApp = () => {
  // get token
  // save token
  // call api

  new Vue({
    render: h => h(App),
  }).$mount('#app')
}


startApp();
