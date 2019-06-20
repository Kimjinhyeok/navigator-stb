import Vue from 'vue'
import App from './App.vue'
import routes from './routes';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import '@fortawesome/fontawesome-free';

Vue.use(VueMaterial);

new Vue({
  el: '#app',
  router : routes,
  render: h => h(App)
})
