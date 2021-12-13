import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuesax from 'vuesax';
import './styles/main.css';

import 'vuesax/dist/vuesax.css';
import {setInitialTheme} from './utilities/utilities';

Vue.config.productionTip = false;

Vue.use(Vuesax);

const startApp = () => {
  setInitialTheme();
  // get token
  // save token
  // call api

  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}


startApp();
