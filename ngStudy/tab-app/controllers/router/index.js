const router = require('koa-router')();
const prodCtrl = require('../product/productController');

router.get('/api/product/productList', prodCtrl.productList);

module.exports = router;
