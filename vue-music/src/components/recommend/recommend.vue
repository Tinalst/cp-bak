<template>
        <div class="recommend">
                <div class="recommend-content">
                        <div class="slider-wrapper" ></div>
                        <div class="recommend-list">
                                <h1 class="list-title">热门歌单推荐</h1>
                        </div>
                </div>
        </div>
</template>

<script>
        import axios from 'axios';
        import  {getRecommend} from "../../api/recommend";

        export default {
                created() {
                        // 获取推荐列表数据
                        this._getRecommend();
                },
                mounted() {
                },
                methods:  {
                        _getRecommend() {
                                getRecommend().then(res => {
                                        console.log(res);
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
