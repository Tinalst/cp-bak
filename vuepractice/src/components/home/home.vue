<template>
    <div>
        <div>
            <router-link to="/formtext">表单</router-link>
        </div>
        <hr>
        <h2>路由</h2>
        <h3>routerlink方式路由跳转与传参</h3>
        <div>
            <router-link to="/routerlinkrouter/:">router-link方式跳转路由</router-link>
        </div>
        <div>
            <router-link to="/routerlinkrouter/222">routerlink方式路由传参/:222</router-link>
        </div>
        <div>
            <router-link to="/parenterouter">路由嵌套</router-link>
        </div>
        <h3>编程式导航</h3>
        <div>
            <button @click="jumper('reactiverouter', 'test111')">编程式导航跳转1</button>
            <button @click="jumper2('reactiverouter', 'test222')">编程式导航跳转2</button>
        </div>
        <h3>使用props 对路由参数进行解耦</h3>
        <div>
            <button @click="jumper3('routerProps', 'test444')">跳转传参</button>
        </div>
        <hr>
        <h2>过度与动画</h2>
        <hr>
        <h2>动态组件</h2>
        <router-link to="/dynimic">使用slot封装组件</router-link>
    </div>

</template>

<script>
    export default {
        methods: {
            jumper: function (name, params) {
               this.$router.push({name: name, params: { params}});
            },
            jumper2: function (url, test) {
                this.$router.push({path: `/${url}/${test}`});
            },
            jumper3: function (name, params) {
                this.$router.push({name: name, params: { id: params}});
            },
        }
    }
</script>

<style scoped>

</style>
