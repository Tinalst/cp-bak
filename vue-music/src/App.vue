<template>
        <div id="app">
                hello world
                <router-view/>
        </div>
</template>

<script>
        // export default {
        //         name: 'App'
        // }
</script>

<style lang="scss" >
        @import "common/scss/index";
        @import "common/scss/variable";
        #app {
                color: $color-theme;
        }
</style>
