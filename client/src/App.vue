<template>
  <div id="app">
    <div class="mainmenu">
      <router-view></router-view>      
    </div>
    <ul class="navigation">
      <li><router-link v-bind:to="{ name: 'login' }">Login</router-link></li>
      <li><router-link v-bind:to="{ name: 'mainmenu' }">MainMenu</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

@import url('http://fonts.googleapis.com/earlyaccess/nanumgothic.css');
body, button, div, span, a {
  font-family: "Nanum Gothic", sans-serif !important;
}
.sliderbg_menu {
  // background: linear-gradient(rgb(22, 34, 42), rgb(58, 96, 115), rgb(22, 34, 42)) !important;
  // background-image: linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%) !important;
  // background-image: linear-gradient(-225deg, #625EB1 0%, #1D8FE1 48%, #22E1FF 100%) !important;
  background-image: radial-gradient( circle 547px at 6.8% 40.8%,  rgba(85,141,175,1) 0%, rgba(29,77,113,1) 98.6% ) !important;
}
.logo a {
  color: #ffffff !important;
  text-decoration: none;
  font-size: 25px;
  letter-spacing: -1px;
}
.logo a:hover {
  text-decoration: none;
}
.md-button {
  color: inherit !important;
  width: 100%;
}

hr.md-divider {
  width: 100%;
}
</style>
