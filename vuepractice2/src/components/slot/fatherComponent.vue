<template>
  <div class="father">
    <back-btn></back-btn>
    <h3>父组件</h3>
    <child-component>
      <template slot-scope="user">
        <p v-for="item in user.data">{{item}}</p>
      </template>
    </child-component>
  </div>
</template>

<script>
  import ChildComponent from 'components/slot/childComponent';
  import BackBtn from 'base/back-bottom/back-bottom';

  export default {
    components: {
      ChildComponent,
      BackBtn
    }
  }
</script>

<style scoped lang="scss">
  .father {
    background: aquamarine;
    p {
      color: coral;
    }
  }
</style>
