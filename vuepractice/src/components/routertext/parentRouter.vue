<template>
    <div>
        <router-link to="/parenterouter/childrouter">child1</router-link>
        <router-link to="/parenterouter/child2router">child2</router-link>
        <router-view />
    </div>
</template>

<script>

        export default {
                name: "childrouter"
        }
</script>

<style scoped>

</style>
