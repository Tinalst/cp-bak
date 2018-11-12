<template>
    <scroll class="listView" :data="data">
        <ul>
            <li v-for="item in data">
                <img :src="item.avatar" alt="">
                <span>{{item.name}}</span>

            </li>
        </ul>
    </scroll>
</template>

<script>
    import Scroll from '../scroll/scroll';

    export default {
        components: {Scroll},
        props: {
            data: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style scoped>

</style>
