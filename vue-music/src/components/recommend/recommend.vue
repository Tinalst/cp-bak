<template>
    <div class="recommend">
        <div class="recommend-content">
            <div v-if="recomments.length" class="slider-wrapper">
                <Slider>
                    <div v-for="item in recomments">
                        <a :href="item.linkUrl">
                            <img :src="item.picUrl">
                        </a>
                    </div>
                </Slider>
            </div>
            <div class="recommend-list">
                <h1 class="list-title">热门歌单推荐</h1>
            </div>
        </div>
    </div>
</template>

<script>

    import {getRecommend} from "../../api/recommend";
    import {ERR_OK} from "api/config";
    import Slider from 'base/slider/slider';

    export default {
        data() {
            return {
                recomments: []
            }
        },
        created() {
            // 获取推荐列表数据
            this._getRecommend();
        },
        mounted() {
        },
        components: {
            Slider
        },
        methods: {
            // 封装获取数据方法
            _getRecommend() {
                getRecommend().then(res => {
                    res = res.data;
                    if(res.code === ERR_OK) {
                        this.recomments = res.data.slider;
                        console.log(this.recomments );
                        console.log(res.data );
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../common/scss/variable";

    .recommend {
        position: fixed;
        width: 100%;
        top: 88px;
        bottom: 0;
        .recommend-content {
            height: 100%;
            overflow: hidden;
            .list-title {
                height: 65px;
                line-height: 65px;
                text-align: center;
                font-size: $font-size-medium;
                color: $color-theme;
            }
        }
    }

</style>
