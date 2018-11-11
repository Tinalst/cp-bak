/**
 * 功能： 提取接口请求公用参数
 * @type {{}}
 */
export const commonParams = {
    g_tk: 5381,
    format: 'json',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
};

export const options  = {
    param: 'jsonpCallback'
};

/**
 * 语义化错误代码
 * @type {number}
 */
export const ERR_OK = 0;
