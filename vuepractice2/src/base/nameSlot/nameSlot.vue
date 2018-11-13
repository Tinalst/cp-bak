<template>
  <div class="container">
    <slot name="one"></slot>
    <slot name="two"></slot>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "nameSlot"
  }
</script>

<style scoped lang="scss">
  .container {
    div {
      width: 100%;
      height: 10vh;

    }
    div:nth-child(1){
      background: coral;
    }
    div:nth-child(2){
      background: chartreuse;
    }
    div:nth-child(3){
      background: antiquewhite;
    }
  }
</style>
