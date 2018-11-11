import axios from 'axios';
import {options, commonParams} from "./config";
import jsonp from '../common/js/jsonp';

/**
 * 获取推荐列表数据
 * @returns {AxiosPromise<any>}
 */
export function getRecommend() {
        const url = '/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1541725220464';
        return axios.get(url);
}

export function getDisList() {
    const url = '/api/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg';

    const data = Object.assign({}, commonParams, {
        picmid: 1,
        rnd: Math.random(),
        loginUin: 0,
        hostUin: 0,
        platform: 'yqq',
        needNewCode: 0,
        categoryId: 10000000,
        sortId: 5,
        sin: 0,
        ein: 29,
        format: 'json'
    });

    // return axios.get(url, {
    //     params: data
    // });
    const res = {
        "code":0,"subcode":0,"message":"","default":0,"data":{"uin":0,"categoryId":10000000,"sortId":5,"sum":6913,"sin":0,"ein":29,"list":[{"dissid":"4271664099","createtime":"2018-08-17","commit_time":"2018-08-17","dissname":"Trap R&B：深陷于黑暗毒性迷嗓","imgurl":"http://p.qpic.cn/music_cover/eO9YLkEHAnz3gntq1uUDL296RGoO5iaLdibDF518QDc1R67T5mTOkuxQ/600?n=1","introduction":"","listennum":1441996,"score":0.0,"version":0,"creator":{"type":2,"qq":1057027131,"encrypt_uin":"oKnk7inA7i6iov**","name":"Eight Weeks","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"4219685713","createtime":"2018-07-23","commit_time":"2018-07-23","dissname":"Dream Pop · 缥缈朦胧的梦境","imgurl":"http://p.qpic.cn/music_cover/Biax4WTSMic4N0bgPWDwUCsxxToQaLdpKFEe6iapNB4lRlts9OMsGXdaQ/600?n=1","introduction":"","listennum":506758,"score":0.0,"version":0,"creator":{"type":2,"qq":1245280330,"encrypt_uin":"oK-P7K-Foeoion**","name":"花痞","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"5424225889","createtime":"2018-11-09","commit_time":"2018-11-09","dissname":"一曲相诉，侠客江湖里的红尘纷扰","imgurl":"http://p.qpic.cn/music_cover/qhuJFHlwiayRp1rhWoJk9HdJb1O3rbE2VMRBYG6MXkianQVVQQZyEzQw/600?n=1","introduction":"","listennum":290771,"score":0.0,"version":0,"creator":{"type":2,"qq":3413833718,"encrypt_uin":"oiv5oicioiS5Nn**","name":"腾讯音乐人","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"4334439043","createtime":"2018-11-02","commit_time":"2018-11-02","dissname":"致爱情：愿年迈蹒跚，阳光和你仍在","imgurl":"http://p.qpic.cn/music_cover/X9lmt3gQ1KkaezXF13jX30mTt22GJOibKbDemB4vicVaWA5DibXJlzlvg/600?n=1","introduction":"","listennum":83125,"score":0.0,"version":0,"creator":{"type":2,"qq":1079096147,"encrypt_uin":"oKnlNKnq7w6P7z**","name":"蘑菇","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3581365388","createtime":"2017-09-19","commit_time":"2017-09-19","dissname":"钢琴流行曲：细品黑白键上的艺术","imgurl":"http://p.qpic.cn/music_cover/tVHdkb5iaiaTyibtbrmFXiaX9pH6ynHEtY3r73B3Y2uibFAicPz7qZhsOrWw/600?n=1","introduction":"","listennum":2954033,"score":0.0,"version":0,"creator":{"type":2,"qq":2764271129,"encrypt_uin":"owSs7e-loK6ANv**","name":"ColaMan","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"5359238765","createtime":"2018-10-25","commit_time":"2018-10-25","dissname":"解忧杂货铺：烦恼啥的赶紧滚开！","imgurl":"http://p.qpic.cn/music_cover/R8unPZMA4Vp5v2Ms96bstyMjkvJ8gyhd7z66IvUGOiaHpedzwuNYNeA/600?n=1","introduction":"","listennum":1498637,"score":0.0,"version":0,"creator":{"type":2,"qq":945187827,"encrypt_uin":"NKvkoKclNe-l","name":"念安娜","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"4894647095","createtime":"2018-09-25","commit_time":"2018-09-25","dissname":"治愈系后摇：孤独者的救赎","imgurl":"http://p.qpic.cn/music_cover/Biax4WTSMic4N0bgPWDwUCs956YZnFgZvMRDzDstHAIwaqqK4qcNcgiag/600?n=1","introduction":"","listennum":408616,"score":0.0,"version":0,"creator":{"type":2,"qq":1245280330,"encrypt_uin":"oK-P7K-Foeoion**","name":"花痞","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"5412743370","createtime":"2018-10-31","commit_time":"2018-10-31","dissname":"赛博朋克 | 夜间的全息电子氛围","imgurl":"http://p.qpic.cn/music_cover/J64RvyhQtdjd9bWzGSbsoF6qPz0oVnpyTNDAuTpXsAcuGZcvsT8smA/600?n=1","introduction":"","listennum":215537,"score":0.0,"version":0,"creator":{"type":2,"qq":2123143040,"encrypt_uin":"ow6Aoi6PoinPon**","name":"一阵春风","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3745344979","createtime":"2018-03-06","commit_time":"2018-03-06","dissname":"悦耳日系：百首R&B女声集","imgurl":"http://p.qpic.cn/music_cover/qH8rLHHhL8O8Iibm56uPzJ45R2T0nqicZZJ2vMicKd4S9Fllib9VdsueJw/600?n=1","introduction":"","listennum":1578235,"score":0.0,"version":0,"creator":{"type":2,"qq":1812948313,"encrypt_uin":"oKc5owEPNeo5oz**","name":"           私に闻いて风i","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"4192221415","createtime":"2018-07-03","commit_time":"2018-07-03","dissname":"萌系乐器曼陀林 | 乐在弹拨之间","imgurl":"http://p.qpic.cn/music_cover/7oEZniaD5qHmjHdLicsHsKhbNG3bvndibMCQduQxLj7LJfC3Nqy4FSynw/600?n=1","introduction":"","listennum":34007,"score":0.0,"version":0,"creator":{"type":2,"qq":2049353729,"encrypt_uin":"ownPNKokoiSANv**","name":"Krystal Lee","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"5174015594","createtime":"2018-10-12","commit_time":"2018-10-12","dissname":"『甜系古风』是心动的感觉！","imgurl":"http://p.qpic.cn/music_cover/Ln2hcJrJkibdW1MpKCmHtuXNvfZ8ZzibGzccdTFf12s7IMYL44libRr1A/600?n=1","introduction":"","listennum":598714,"score":0.0,"version":0,"creator":{"type":7,"qq":2726942483,"encrypt_uin":"owSA7wEPowvFoz**","name":"忘忧熙月","isVip":7,"avatarUrl":"","followflag":0}},{"dissid":"5414762552","createtime":"2018-11-05","commit_time":"2018-11-05","dissname":"我忘不了你，请别拆穿。","imgurl":"http://p.qpic.cn/music_cover/qhuJFHlwiayRp1rhWoJk9HdJb1O3rbE2VZxsmFjp2GFia2VgCMHwfmXw/600?n=1","introduction":"","listennum":540099,"score":0.0,"version":0,"creator":{"type":2,"qq":3413833718,"encrypt_uin":"oiv5oicioiS5Nn**","name":"腾讯音乐人","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"5332254731","createtime":"2018-10-18","commit_time":"2018-10-18","dissname":"传世的经典，德意志留声机","imgurl":"http://p.qpic.cn/music_cover/yoiaBeWfTQiblxq9IdDLxjMojumDPgohKibjfNQCnXztb8ZP6QBpvYicOg/600?n=1","introduction":"","listennum":85256,"score":0.0,"version":0,"creator":{"type":0,"qq":3316708138,"encrypt_uin":"oio57wSzNe6iNn**","name":"环球音乐古典及爵士","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"5311096383","createtime":"2018-10-17","commit_time":"2018-10-17","dissname":"韩系甜萌暖音 | 蜜桃味美梦","imgurl":"http://p.qpic.cn/music_cover/xKbkocaBytGNfiaxCrPF7a8xTOtKEon4k098WviahVZ9oaznRLBpiabUw/600?n=1","introduction":"","listennum":188781,"score":0.0,"version":0,"creator":{"type":2,"qq":1468388760,"encrypt_uin":"oKvsNeoFNeSson**","name":"Smile","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"5378964310","createtime":"2018-11-05","commit_time":"2018-11-05","dissname":"减缓节拍风格的说唱嘻哈","imgurl":"http://p.qpic.cn/music_cover/Uj77DagTFgiccudSicYvppRlcpicRF5SicEJA4WcxGicTownvvRJ3iaEZdDQ/600?n=1","introduction":"","listennum":56862,"score":0.0,"version":0,"creator":{"type":2,"qq":919820535,"encrypt_uin":"NK6qNe-z7Kok","name":"Lee BG嗷柏","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3828603686","createtime":"2018-07-06","commit_time":"2018-07-06","dissname":"闲敲棋子落灯花 • 古风里的棋弈","imgurl":"http://p.qpic.cn/music_cover/UCJDptU3vGgQt6PS5Hn6CxbfOR0S0slzhUib7DIFS0VLicfubkiaYEIhg/600?n=1","introduction":"","listennum":1337004,"score":0.0,"version":0,"creator":{"type":2,"qq":188651765,"encrypt_uin":"oKcF7w457iCk","name":"五品带砖侍卫","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"5275391892","createtime":"2018-10-24","commit_time":"2018-10-24","dissname":"失眠疗养所 : 300首催眠纯音","imgurl":"http://p.qpic.cn/music_cover/rs0wGJF4doYS9ubJ809ZBliaibaAzuDJ75o4tGe5XezDygzogd6pia2xw/600?n=1","introduction":"","listennum":1213683,"score":0.0,"version":0,"creator":{"type":2,"qq":3308359265,"encrypt_uin":"oiozNeokNK-s7v**","name":"古风圈里没有我","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"5328149447","createtime":"2018-11-02","commit_time":"2018-11-02","dissname":"环球精选动画电影原声","imgurl":"http://p.qpic.cn/music_cover/yoiaBeWfTQiblxq9IdDLxjMkmWiawn5KIgaib5C8zOUEFfBGHlSzQwljpw/600?n=1","introduction":"","listennum":169157,"score":0.0,"version":0,"creator":{"type":0,"qq":3316708138,"encrypt_uin":"oio57wSzNe6iNn**","name":"环球音乐古典及爵士","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"5282273001","createtime":"2018-10-13","commit_time":"2018-10-13","dissname":"温柔夜曲：沉醉在朦胧月色里","imgurl":"http://p.qpic.cn/music_cover/jXFicBvicUcfIWSoCNT1OrbCHsWiaoB9rzrBScw6JqUqm41OdGbKcic1uQ/600?n=1","introduction":"","listennum":250580,"score":0.0,"version":0,"creator":{"type":2,"qq":1067338325,"encrypt_uin":"oKns7ioiNeoA7v**","name":"念葳蕊","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3860453582","createtime":"2018-11-02","commit_time":"2018-11-02","dissname":"东海岸嘻哈｜多元素风格的说唱","imgurl":"http://p.qpic.cn/music_cover/Uj77DagTFgiccudSicYvppRlcpicRF5SicEJGcic1VVm3Jic9e8FgQSqDp5w/600?n=1","introduction":"","listennum":81192,"score":0.0,"version":0,"creator":{"type":2,"qq":919820535,"encrypt_uin":"NK6qNe-z7Kok","name":"Lee BG嗷柏","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"4043407522","createtime":"2018-05-30","commit_time":"2018-05-30","dissname":"情感疗伤系：欧美抒情R&B","imgurl":"http://p.qpic.cn/music_cover/eO9YLkEHAnz3gntq1uUDLibO0nwloFECe0FWGLKic3ics8Pq70coFoic9g/600?n=1","introduction":"","listennum":3503865,"score":0.0,"version":0,"creator":{"type":2,"qq":1057027131,"encrypt_uin":"oKnk7inA7i6iov**","name":"Eight Weeks","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"5118523354","createtime":"2018-09-28","commit_time":"2018-09-28","dissname":"ClariS：戴着面具的可爱妹妹们","imgurl":"http://p.qpic.cn/music_cover/VegtfhPVKWTjiaibFBAtpyeDjuGHy48088CRiabFXvAmCDMBsCtg9A3EA/600?n=1","introduction":"","listennum":435012,"score":0.0,"version":0,"creator":{"type":0,"qq":3255354516,"encrypt_uin":"oi-k7Kok7e457c**","name":"藤崎伊织","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"2690617595","createtime":"2017-11-28","commit_time":"2017-11-28","dissname":"云雾中的古老传说：传统彝族民谣","imgurl":"http://p.qpic.cn/music_cover/ULH0NLW4u55E7T2PEnniavRBkibwPr5gdlCAH15lPXCECTHc1aJONyqw/600?n=1","introduction":"","listennum":278171,"score":0.0,"version":0,"creator":{"type":2,"qq":3052336326,"encrypt_uin":"oinkowoi7woA7c**","name":"你的耳机是我的","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"5295969836","createtime":"2018-10-15","commit_time":"2018-10-15","dissname":"全民K歌国风热歌榜盘点","imgurl":"http://p.qpic.cn/music_cover/Ln2hcJrJkibdW1MpKCmHtudYpsHic5Nf2LSpxaOaicMZRNfLvbwqjeLbw/600?n=1","introduction":"","listennum":758953,"score":0.0,"version":0,"creator":{"type":7,"qq":2726942483,"encrypt_uin":"owSA7wEPowvFoz**","name":"忘忧熙月","isVip":7,"avatarUrl":"","followflag":0}},{"dissid":"4251483675","createtime":"2018-08-08","commit_time":"2018-08-08","dissname":"Soft Rock | 摇滚里的温柔绅士","imgurl":"http://p.qpic.cn/music_cover/CXricxSibts8cC0Pl3TdOV0Gr0wG59zIndYq1wevict7MzjfyvkA0Z9cg/600?n=1","introduction":"","listennum":151979,"score":0.0,"version":0,"creator":{"type":0,"qq":3378926890,"encrypt_uin":"oiolNeEA7wcqon**","name":"Emilie Austen","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"4233782020","createtime":"2018-07-31","commit_time":"2018-07-31","dissname":"香港作词人：陈少琪的跨界思维","imgurl":"http://p.qpic.cn/music_cover/xy585mIRLoGjBb9SibEqA5gKfZ37j3R88svhlJ4a8kY3wLTVtp367RQ/600?n=1","introduction":"","listennum":310482,"score":0.0,"version":0,"creator":{"type":2,"qq":1281244335,"encrypt_uin":"oK-FoK-P7eoi7v**","name":"1946 。","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"4239434638","createtime":"2018-08-02","commit_time":"2018-08-02","dissname":"3分钟内“微观”短篇古典乐","imgurl":"http://p.qpic.cn/music_cover/oTVicCll2ic4QLktJAkDJRJV7icRq15zZq5axkmDup5ArTeVL38oewD3w/600?n=1","introduction":"","listennum":248930,"score":0.0,"version":0,"creator":{"type":2,"qq":2741225920,"encrypt_uin":"owSPoK-A7KEAon**","name":"静静的顿河","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"5443521716","createtime":"2018-11-04","commit_time":"2018-11-04","dissname":"「治愈夜曲」再见！焦虑症","imgurl":"http://p.qpic.cn/music_cover/R8unPZMA4Vp5v2Ms96bst2catZCoprse1h5ibgU2yWoGT0dsFJlo7aQ/600?n=1","introduction":"","listennum":280871,"score":0.0,"version":0,"creator":{"type":2,"qq":945187827,"encrypt_uin":"NKvkoKclNe-l","name":"念安娜","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"5442453911","createtime":"2018-11-02","commit_time":"2018-11-02","dissname":"音乐人木秦的私藏歌单","imgurl":"http://p.qpic.cn/music_cover/5M6dlGArejrmaXVYyIibySdedRRS8ib3Yk0FROZRZRMSX1v3D7rhGicmQ/600?n=1","introduction":"","listennum":138743,"score":0.0,"version":0,"creator":{"type":7,"qq":490385797,"encrypt_uin":"7eEzoick7iEl","name":"木秦","isVip":7,"avatarUrl":"","followflag":0}},{"dissid":"4898702454","createtime":"2018-09-18","commit_time":"2018-09-18","dissname":"复古70s：爱与自由的嬉皮时光","imgurl":"http://p.qpic.cn/music_cover/OxYJ3e12Q1MiaibkTa8iaSjoJiaTfewIJ4wr9zVSyfOgMSzlzibxREEas7Q/600?n=1","introduction":"","listennum":35563,"score":0.0,"version":0,"creator":{"type":0,"qq":3538848850,"encrypt_uin":"oi4iNecPNeckon**","name":"趵突泉边上的小屁孩","isVip":0,"avatarUrl":"","followflag":0}}]}};
    return new Promise(((resolve, reject) => {
        resolve(res);
    }))
}
