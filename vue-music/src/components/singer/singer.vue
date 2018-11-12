<template>
    <div>
        singer page
    </div>
</template>

<script>
    import {getSingerList} from "../../api/singer";

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
                    console.log(data.singerlist);
                })
            }
        }
    }
</script>

<style scoped lang="scss">
        @import "../../common/scss/variable";
</style>
