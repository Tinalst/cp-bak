<template>
    <div class="recommend">
        <scroll class="recommend-content" ref="scroll" :data="discList">
            <div>
                <div v-if="recomments.length" class="slider-wrapper">
                    <Slider>
                        <div v-for="item in recomments">
                            <a :href="item.linkUrl">
                                <img @load="loadImage" :src="item.picUrl">
                            </a>
                        </div>
                    </Slider>
                </div>
                <div class="recommend-list">
                    <h1 class="list-title">热门歌单推荐</h1>
                    <ul>
                        <li v-for="item in discList" class="item">
                            <div class="icon">
                                <!--<img width="60" height="60" :src="item.imgurl" alt="">-->
                                <img width="60" height="60" v-lazy="item.imgurl" alt="">
                            </div>
                            <div class="text">
                                <h2 class="name">{{item.creator.name}}</h2>
                                <p class="desc">{{item.dissname}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="loading-container" v-show="!discList.length">
                <Loading></Loading>
            </div>
        </scroll>
    </div>
</template>

<script>

    import {getRecommend, getDisList} from "../../api/recommend";
    import {ERR_OK} from "api/config";
    import Slider from 'base/slider/slider';
    import Scroll from 'base/scroll/scroll';
    import Loading from 'base/loading/loading';

    export default {
        data() {
            return {
                recomments: [],
                discList: []
            }
        },
        created() {
            // 获取推荐列表数据
            setTimeout(() => {
                this._getRecommend();
            }, 2000);

            // 模拟获取远程数据，获取歌单列表
            setTimeout(() => {
                this._getDisList();
            }, 2000);

        },
        mounted() {
        },
        components: {
            Scroll,
            Slider,
            Loading
        },
        methods: {
            // 封装获取数据方法
            _getRecommend() {
                getRecommend().then(res => {
                    res = res.data;
                    if(res.code === ERR_OK) {
                        this.recomments = res.data.slider;
                    }
                })
            },
            _getDisList() {
                getDisList().then(res => {
                    this.discList = res.data.list;
                })
            },
            loadImage() {
                if(!this.checkLoading){
                    this.$refs.scroll.refresh();
                    this.checkLoading = true;
                }

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
            position: relative;
            .list-title {
                height: 65px;
                line-height: 65px;
                text-align: center;
                font-size: $font-size-medium;
                color: $color-theme;
            }
            .item {
                display: flex;
                box-sizing: border-box;
                align-items: center;
                padding: 0 20px 20px 20px;
            }
            .icon {
                flex: 0 0 60px;
                width: 60px;
                padding-right: 20px;
            }
            .text {
                display: flex;
                flex-direction: column;
                justify-content: center;
                flex: 1;
                line-height: 20px;
                overflow: hidden;
                font-size: $font-size-medium;
                .name {
                    margin-bottom: 10px;
                    color: $color-text;
                }
                .desc {
                    color: $color-text-d;
                }
            }
        }
        .loading-container {
            position: absolute;
            width: 100%;
            top: 50%;
            transform: translateY(-50%);
            text-align: center;
        }
    }

</style>
