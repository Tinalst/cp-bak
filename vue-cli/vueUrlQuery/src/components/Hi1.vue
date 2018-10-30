<template>
    <div>
          <h1>我是HI-1组件</h1>
    </div>
</template>

<script>
    export default {
        name: "Hi1",
        beforeRouteEnter: (to, from, next) => {
            console.log('住呢比进入hi1路由');
            next();
        },
        beforeRouteLeave: ((to, from, next) => {
            console.log('准备离开hi1路由');
            next();
        })
    }
</script>

<style scoped>

</style>
