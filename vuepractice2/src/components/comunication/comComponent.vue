<template>
  <com-child-component @childEmitter="handleChildEmitter"></com-child-component>
</template>

<script>
  import ComChildComponent from 'components/comunication/comChildComponent';

  export default {
    methods: {
      handleChildEmitter(event) {
        console.log('father', event);
      }
    },
    components: {
      ComChildComponent
    }
  }
</script>

<style scoped>

</style>
