<template>
  <div class="hi2">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  export default  {
    data() {
      return {
        msg: 'i am hi2'
      }
    }
  }
</script>


<style scoped>
  .hi2{
    background: salmon;
    display: inline-block;
    width: 49%;
  }
</style>
