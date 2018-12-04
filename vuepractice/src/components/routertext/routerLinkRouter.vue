<template>
    <div>routerlinkrouter</div>
</template>

<script>
    export default {
        data() {
            return {
                query: {
                    type: Number,
                    default: null
                }
            }
        },
        mounted() {
              this._getQuery();
        },
        methods: {
            _getQuery() {
                console.log(this.$router);
                console.log(this.$route);
                console.log(this.$route.params);
            }
        }
    }
</script>

<style scoped>

</style>
