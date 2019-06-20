import index from './components/index.vue';
import login from './components/login.vue';
import mainmenu from './components/mainmenu.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes :  [
    {
      path : '/login',
      name : 'login',
      component : login
    },
    {
      path : '/main',
      name : 'mainmenu',
      component : mainmenu
    },
    {
      path : '/',
      name : 'index',
      component : index
    }
  ]
})