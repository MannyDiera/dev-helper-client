import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuesax from 'vuesax';
import LottieVuePlayer from "@lottiefiles/vue-lottie-player";
import './styles/main.css';

import 'vuesax/dist/vuesax.css';
import {setInitialTheme} from './utilities/utilities';

Vue.config.productionTip = false;

Vue.use(Vuesax);
Vue.use(LottieVuePlayer);

const startApp = () => {
  setInitialTheme();

  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}


startApp();
