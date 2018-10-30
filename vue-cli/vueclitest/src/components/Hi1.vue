<template>
    <div>
        <h2>{{msg}}-{{$route.params.username}} - {{$route.params.id}}</h2>
    </div>
</template>

<script>
export default {
    name: 'Hi',
    data () {
        return {
            msg: 'i am hi-1 page'
        }
    }
}
</script>

<style scoped>

</style>
