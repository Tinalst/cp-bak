<template>
    <div id="app">
        <m-header></m-header>
        <tab></tab>
        <router-view></router-view>
    </div>
</template>

<script>
    // 从@开始绝对路径相对 import MHeader from  '@/components/m-header/m-header.vue'
    // 相对路径从 ./开始有效
    import MHeader from 'componets/m-header/m-header.vue'
    import Tab from 'componets/tab/tab.vue'

    export default {
        components: {
            MHeader,
            Tab
        }
    }
</script>

<style lang="scss">
    // 全局环境变量
    @import "common/scss/index";
    @import "common/scss/variable";

    #app {
        color: $color-theme;
    }
</style>
