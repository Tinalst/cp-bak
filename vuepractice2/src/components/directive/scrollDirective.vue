<template>
    <div>
        <h1 class="centered">Scroll me</h1>
        <div class="box" v-scroll="handleScroll">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque amet harum aut ab veritatis earum porro
                praesentium ut corporis. Quasi provident dolorem officia iure fugiat, eius mollitia sequi quisquam.</p>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            handleScroll: function (evt, el) {
                if(window.scrollY > 50) {
                    TweenMax.to(el, 1.5,  {
                        y: -10,
                        opacity: 1,
                        ease: Sine.easeOut
                    });
                }
                return window.scrollY > 100;
            }
        },
        directives: {
            scroll: {
                inserted(el, binding) {
                    let f = function (evt) {
                        if (binding.value(evt, el)) {
                            window.removeEventListener('scroll', f);
                        }
                    };
                    window.addEventListener('scroll', f);
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .centered {
        margin: 0 auto;
        display: table;
        font-size: 60px;
        margin-top: 100px;
        background: salmon;
    }

    .box {
        border: 1px solid rgba(255, 255, 255, 0.5);
        padding: 8px 20px;
        line-height: 1.3em;
        opacity: 0;
        width: 200px;
        margin: 0 auto;
        margin-top: 30px;
        transform: translateZ(0);
        perspective: 1000px;
        backface-visibility: hidden;
        background: rgba(255, 255, 255, 0.1);
    }


</style>
