<template>
    <div class="loading">
        <img src="./loading.gif" alt="" width="24"  height="24">
        <p class="desc">{{title}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: '正在载入'
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../common/scss/variable";

    .loading {
        width: 100%;
        .desc {
            line-height: 20px;
            font-size:  $font-size-small ;
            color: $color-text-l;
        }
    }
</style>
