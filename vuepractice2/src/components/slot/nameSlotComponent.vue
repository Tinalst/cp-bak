<template>
  <div>
    <back-btn></back-btn>
    <span @click="switchTabl('')">default</span>
    <span @click="switchTabl('one')">one</span>
    <span @click="switchTabl('two')">two</span>
    <name-slot>
      <div :slot="test">11</div>
    </name-slot>
  </div>
</template>

<script>
  import NameSlot from 'base/nameSlot/nameSlot';
  import BackBtn from 'base/back-bottom/back-bottom';

  export default {
    methods: {
      data() {
        return {
          test: ''
        }
      },
      switchTabl: function (which) {
        switch (which){
          case '':
            this.test = '';
            break;
          case  'one':
            this.test = 'one';
            break;
          case  'two':
            this.test = 'two';
            break;
        }
      }
    },
    components: {
      NameSlot,
      BackBtn
    }
  }
</script>

<style scoped lang="scss">
  p{
    color: coral;
  }
</style>


