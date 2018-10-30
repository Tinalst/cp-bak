<template>
  <div>
    <h2>{{msg}}</h2>
    <p>newsid: {{$route.params.newsId}}</p>
    <P>newsTitle: {{$route.params.newsTitle}}</P>
  </div>
</template>

<script>
  export default {
    name: 'Params',
    data () {
      return {
        msg: 'params page'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
