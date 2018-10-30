<template>
    <div id="app">
        <div>
            <router-link to="/">首页 |</router-link>
            <router-link to="/hi">hi页面 |</router-link>
            <router-link :to="{name: 'hi1',params: {username: 'tinalst', id: 888}}">hi-1子页面 |</router-link>
            <router-link to="/hi/hi2">hi-2子页面</router-link>
        </div>
        <p>{{$route.name}}</p>
        <router-view></router-view>
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
