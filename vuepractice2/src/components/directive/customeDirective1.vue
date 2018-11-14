<template>
    <div>
        <input type="text" v-local-focus v-model="inputValue">
    </div>
</template>

<script>
    export default {
        data() {
          return {
              inputValue: ''
          }
        },
        directives: {
            localFocus: {
                // only once,when the directive is first bound to element
                bind(el, binding, vnode, oldVnode) {
                    console.dir('bind ---------el', el);
                    console.log('bind ---------binding', binding);
                    console.log('bind ---------vnode', vnode);
                    console.log('bind ---------oldVnode', oldVnode);
                    console.log('=======================');
                },
                // when the bound element has been inserted into its parent node
                inserted(el, binding, vnode, oldVnode) {
                    console.dir('inserted ---------el', el);
                    console.log('inserted ---------binding', binding);
                    console.log('inserted ---------vnode', vnode);
                    console.log('inserted ---------oldVnode', oldVnode);
                    console.log('=======================');
                },
                update(el, binding , vnode, oldVnode) {
                    console.log('update ---------el', el);
                    console.log('update ---------binding', binding);
                    console.log('update ---------vnode', vnode);
                    console.log('update ---------oldVnode', oldVnode);
                    console.log('=======================');
                },
                componentUpdated(el, binding, vnode, oldVnode) {
                    console.log('componentUpdated ---------el', el);
                    console.log('componentUpdated ---------binding', binding);
                    console.log('componentUpdated ---------vnode', vnode);
                    console.log('componentUpdated ---------oldVnode', oldVnode);
                    console.log('=======================');
                }
            }
        }
    }
</script>

<style scoped>

</style>
