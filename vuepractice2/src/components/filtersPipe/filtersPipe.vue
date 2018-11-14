<template>
        <div>
            <h3>管道的使用</h3>
            <div>
                <input v-model="message"/>
            </div>
            {{message | capitalize}}
        </div>
</template>

<script>
        export default {
            data() {
                return {
                    message: 'please enter'
                }
            }
        }
</script>

<style scoped>

</style>
