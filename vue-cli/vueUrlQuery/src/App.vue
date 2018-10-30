<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/">home</router-link>
    <router-link to="/params/198/tinalst title test">params</router-link>
    <router-link to="/gohome">go home 重定向路由</router-link>
    <router-link to="/goparams/1111/222222 title">go params 重定向路由</router-link>
    <router-link to="/hi1">Hi1 page</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
