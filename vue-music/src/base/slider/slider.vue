<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <slot>
            </slot>
        </div>
        <div class="dots">
            <span class="dot"
                  :class="{active: currentPageIndex === index}"
                  v-for="(item, index) in dots" ></span>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    import {addClass} from 'common/js/dom.js';
    export default {
        data() {
            return {
                dots: [],
                currentPageIndex: 0
            }
        },
        props: {
            loop: {
                type: Boolean,
                default: true
            },
            autoPlay: {
                type: Boolean,
                default: true
            },
            interval: {
                type: Number,
                default: 4000
            }
        },
        mounted() {
            setTimeout(() => {
                this._setSliderWidth();
                this._initDots();
                this._initSlider();
                if(this.loop) {
                    this._play();
                }
            }, 20);

            // 监听窗口改变
            window.addEventListener('resize', () =>{

                if(this.slider) {

                    // 根据窗口重新计算slider的宽度
                    this._setSliderWidth(true);
                    this.slider.refresh();
                }
            })
        },
        methods: {
            _setSliderWidth(isResize){
                // 获取列表子元素
                this.children = this.$refs.sliderGroup.children;
                let width = 0;

                // 获取slider的父容器的宽度
                let sliderWidth = this.$refs.slider.clientWidth;

                for(let i = 0; i < this.children.length; i++){
                    let child = this.children[i];

                    // 为每个item添加样式类
                    addClass(child, 'slider-item');
                    // 为每个元素添加宽度为父容器的宽度
                    child.style.width = `${sliderWidth}px`;
                    // 计算总的group的宽度
                    width += sliderWidth;
                }

                // 启动滚动的，宽度要变为两倍
                if (this.loop && !isResize) {
                    width += 2 * sliderWidth;
                }
                this.$refs.sliderGroup.style.width = `${width}px`
            },
            _initDots() {
                this.dots = new Array(this.children.length);
            },
            _initSlider() {
                this.slider = new BScroll(this.$refs.slider, {
                    scrollX: true,        // 横向滚动
                    scrollY: false,       // 纵向滚动
                    momentum: false,      // 滑动动画
                    snap: {               // 为了做slider组件开启的
                        loop: this.loop,  // 子元素大于1的时候开启无限循环轮播
                        threshold: 0.3,   // 可以滚动到下一个的阈值
                        speed: 400        // 鼠标滚轮滚动的速度
                    },
                    click: true

                });

                // 轮播滚动触发事件
                this.slider.on('scrollEnd', () => {
                    let pageIndex = this.slider.getCurrentPage().pageX;
                    this.currentPageIndex = pageIndex;

                    // 自动轮播触发
                    if(this.autoPlay) {
                        // 清除定时器
                        clearTimeout(this.timer);
                        this._play();
                    }
                });
            },
            _play() {
                let pageIndex = this.currentPageIndex;
                if(this.loop) {
                    pageIndex += 1;
                }

                // 自动播放
                this.timer = setTimeout(() => {
                    // 参数一： 横向方向
                    // 参数二： 纵向方向
                    // 参数三： 时间间隔
                    this.slider.goToPage(pageIndex, 0, 400);
                }, this.interval)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../common/scss/variable.scss";
    .slider {
        min-height: 1px;
        .slider-group {
            position: relative;
            overflow: hidden;
            white-space: nowrap;
            .slider-item {
                float: left;
                box-sizing: border-box;
                overflow: hidden;
                text-align: center;
                a {
                    display: inline-block;
                    width: 100%;
                    overflow: hidden;
                    text-decoration: none;
                }
                img {
                    display: block;
                    width: 100%;
                }
            }
        }
        .dots {
            position: absolute;
            right: 0;
            left: 0;
            top: 130px;
            text-align: center;
            font-size: 0;
            .dot {
                display: inline-block;
                margin: 0 4px;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: $color-text-l;
                /*&.active 表示 .dot.active 与 & .active 不一样*/
                &.active {
                    width: 20px;
                    border-radius: 20px;
                    background: $color-text-ll;
                }
            }
        }
    }
</style>
