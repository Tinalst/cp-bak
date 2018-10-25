const koa = require('koa');
const router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const apiRouter = require('./router');
const cors = require('koa2-cors');

const app = new koa();

app.use(cors());
app.use(apiRouter.routes());

const HOST = '127.0.0.1';
const PORT = 3333;
app.listen(PORT,HOST, ()=> {
    console.log(`server is run ${PORT}`);
});