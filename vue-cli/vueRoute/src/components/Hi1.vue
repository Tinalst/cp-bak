<template>
  <div class="hi1">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  export default  {
    data() {
      return {
        msg: 'i am hi1'
      }
    }
  }
</script>


<style scoped>
  .hi1{
    background: antiquewhite;
    display: inline-block;
    width: 49%;
  }
</style>

