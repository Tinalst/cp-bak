<template>
    <div>reactiveRouter</div>
</template>

<script>
    export default {
        data() {
            return {
                params: {
                    default: null
                }
            }
        },
        mounted() {
            this._getQuery();
        },
        methods : {
            _getQuery() {
                console.log(this.$router);
                console.log(this.$route);
            }
        }
    }
</script>

<style scoped>

</style>
