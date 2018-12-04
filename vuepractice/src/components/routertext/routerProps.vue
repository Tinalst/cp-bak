<template>
    <div>
        router props 解耦
    </div>
</template>

<script>
    export default {
        props: {
            id: String
        },
        mounted() {
          this._getQuery();
        },
        methods: {
            _getQuery() {
                console.log(this.id);
            }
        }
    }
</script>

<style scoped>

</style>
