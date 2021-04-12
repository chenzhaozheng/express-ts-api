/*
 * @Author: chenzhaozheng
 * @Date: 2019-07-31 17:00:50
 * @LastEditors  : chenzhaozheng
 * @LastEditTime : 2019-12-30 22:59:28
 * @Description: file content
 */
import express from 'express';
import compression from 'compression'; // compresses requests
import bodyParser from 'body-parser';
import ejsHelper from './middlewares/ejs-helper';
import router from './lib/router';
import { finallyResp } from './middlewares/finally-resp';
import cron from './cron/index';
import path from 'path';

const app = express();

// Create Express server
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
// 路由映射
app.use(compression());
app.use(ejsHelper());
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(router);
// app.use((req: any, res: any, next: any) => next({ code: 1002 }));
app.use(finallyResp({ format: 'JSON' }));
// app.use(cron);

app.set('port', process.env.PORT || 3000);

export default app;
