<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <button @click="goback()">后退</button>
      <button @click="goforward()">前进</button>
      <button @click="jumper()">跳转到任意一页</button>
    </p>
    <router-link to="/">home</router-link>
    <router-link to="/params/198/tinalst title test">params</router-link>
    <router-link to="/gohome">go home 重定向路由</router-link>
    <router-link to="/goparams/1111/222222 title">go params 重定向路由</router-link>
    <router-link to="/hi1">Hi1 page</router-link>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goback() {
      this.$router.go(-1);
    },
    goforward() {
      this.$router.forward();
    },
    jumper() {
      this.$router.push('/hi1')
    }
  }
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
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity .5s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transform: scale(0.5);
  opacity: 0;
  transition: opacity .5s, scale .5s;
}
</style>
