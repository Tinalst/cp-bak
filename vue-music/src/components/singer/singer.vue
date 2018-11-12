<template>
    <div>
        <list-view :data="singers"></list-view>
    </div>
</template>

<script>
    import {getSingerList} from "../../api/singer";
    import Singer from '../../common/js/singer';
    import ListView from '../../base/listview/listview';

    const HOT_SINGER_LEN = 10;
    const HOT_NAME = '热门';

    export default {

        data() {
            return {
                singers: []
            }
        },
        created() {
            // 获取数据
            this._getSingerList();
        },
        methods: {
            _getSingerList() {
                getSingerList().then(res => {
                    const data = res.singerList.data;
                    console.log(res.singerList);
                    this._normalizeSinger(res.singerList.data.singerlist);
                })
            },
            _normalizeSinger(list) {
                let map = {
                    hot: {
                        title: HOT_NAME,
                        items: []
                    }
                };

                // list 为singerlist列表
                list.forEach((value, index) => {
                    if (index < HOT_SINGER_LEN) {
                        map.hot.items.push( new Singer({
                            id : value['singer_mid'],
                            name :value['singer_name']
                        }));
                    }
                });
                this.singers = map.hot.items;
                // console.log(map);
                // map.forEach((value, index) => {
                    // value[]
                // })


            }
        },
        components: {
            ListView
        }
    }
</script>

<style scoped lang="scss">
        @import "../../common/scss/variable";
</style>
