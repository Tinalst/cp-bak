<template>
  <div class="child">
    <h3>子组件</h3>
    <slot :data="users"></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        users: ['a' ,'b', 'c', 'd', 'e', 'f']
      }
    }
  }
</script>

<style scoped lang="scss">
  .child {
    background: palegoldenrod;
  }
</style>
