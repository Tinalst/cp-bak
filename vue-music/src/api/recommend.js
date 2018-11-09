import axios from 'axios';

/**
 * 获取推荐列表数据
 * @returns {AxiosPromise<any>}
 */
export function getRecommend() {
        const url = '/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1541725220464';
        return axios.get(url);
}
