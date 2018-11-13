<template>
  <div class="conatiner">
    <h2>子组件范围</h2>
    <button @click="test">点击我，向父组件发射数据</button>
  </div>
</template>

<script>
  export default {
    methods: {
      test: function () {
        console.log('childEmitter');
        this.$emit('childEmitter', '1111');
      }
    }
  }
</script>

<style scoped lang="scss">
  .conatiner{
    background: seagreen;
  }
</style>
